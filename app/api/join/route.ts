import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

export const runtime = "nodejs";

type JoinPayload = {
  name?: string;
  idNumber?: string;
  email?: string;
  whyJoin?: string;
  team?: string;
  githubLink?: string;
  projectsWorkedOn?: string;
};

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function toA1SheetRange(sheetTitle: string, cellsRange: string) {
  const escapedTitle = sheetTitle.replace(/'/g, "''");
  return `'${escapedTitle}'!${cellsRange}`;
}

function normalize(value: string) {
  return value.trim().toLowerCase();
}

function validate(payload: JoinPayload) {
  const requiredFields: Array<keyof JoinPayload> = [
    "name",
    "idNumber",
    "email",
    "whyJoin",
    "team",
    "projectsWorkedOn",
  ];

  for (const field of requiredFields) {
    if (!clean(payload[field])) {
      return `${field} is required`;
    }
  }

  const email = clean(payload.email);
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return "Please provide a valid email address.";
  }

  return null;
}

export async function POST(request: NextRequest) {
  try {
    const payload = (await request.json()) as JoinPayload;
    const validationError = validate(payload);

    if (validationError) {
      return NextResponse.json({ message: validationError }, { status: 400 });
    }

    const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
    const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n");
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
    const sheetName = process.env.GOOGLE_SHEETS_SHEET_NAME ?? "Inductions - Rolling";

    if (!clientEmail || !privateKey || !spreadsheetId) {
      return NextResponse.json(
        { message: "Google Sheets credentials are missing on the server." },
        { status: 500 }
      );
    }

    const auth = new google.auth.JWT({
      email: clientEmail,
      key: privateKey,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const metadata = await sheets.spreadsheets.get({
      spreadsheetId,
      fields: "sheets.properties.title",
    });

    const sheetTitles =
      metadata.data.sheets
        ?.map((sheet) => sheet.properties?.title)
        .filter((title): title is string => Boolean(title)) ?? [];

    if (sheetTitles.length === 0) {
      return NextResponse.json(
        { message: "No sheet tabs found in the target spreadsheet." },
        { status: 500 }
      );
    }

    const matchedTitle =
      sheetTitles.find((title) => normalize(title) === normalize(sheetName)) ?? sheetTitles[0];

    const now = new Date().toISOString();
    const appendRange = toA1SheetRange(matchedTitle, "A:H");

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: appendRange,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            now,
            clean(payload.name),
            clean(payload.idNumber),
            clean(payload.email),
            clean(payload.whyJoin),
            clean(payload.team),
            clean(payload.githubLink),
            clean(payload.projectsWorkedOn),
          ],
        ],
      },
    });

    return NextResponse.json({ message: "Application submitted." }, { status: 200 });
  } catch (error) {
    console.error("Join form submission failed", error);
    const message = error instanceof Error ? error.message : "Unable to submit application right now. Please try again.";
    return NextResponse.json(
      { message },
      { status: 500 }
    );
  }
}
