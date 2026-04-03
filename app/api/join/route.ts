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

function unwrapQuoted(value: string) {
  const trimmed = value.trim();
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

function resolvePrivateKey() {
  const raw = process.env.GOOGLE_SHEETS_PRIVATE_KEY;
  if (raw) {
    return unwrapQuoted(raw).replace(/\\n/g, "\n");
  }

  const base64Raw = process.env.GOOGLE_SHEETS_PRIVATE_KEY_BASE64;
  if (!base64Raw) {
    return null;
  }

  try {
    const decoded = Buffer.from(base64Raw, "base64").toString("utf8");
    return unwrapQuoted(decoded).replace(/\\n/g, "\n");
  } catch {
    return null;
  }
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

    const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL?.trim();
    const privateKey = resolvePrivateKey();
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
    const sheetName = process.env.GOOGLE_SHEETS_SHEET_NAME ?? "Inductions - Rolling";

    const missingVars = [
      !clientEmail ? "GOOGLE_SHEETS_CLIENT_EMAIL" : null,
      !privateKey ? "GOOGLE_SHEETS_PRIVATE_KEY (or GOOGLE_SHEETS_PRIVATE_KEY_BASE64)" : null,
      !spreadsheetId ? "GOOGLE_SHEETS_SPREADSHEET_ID" : null,
    ].filter((value): value is string => Boolean(value));

    if (missingVars.length > 0) {
      return NextResponse.json(
        {
          message: `Missing server environment variables: ${missingVars.join(", ")}. Add them in Vercel Project Settings -> Environment Variables and redeploy.`,
        },
        { status: 500 }
      );
    }

    const resolvedClientEmail = clientEmail;
    const resolvedPrivateKey = privateKey;
    const resolvedSpreadsheetId = spreadsheetId;

    if (!resolvedClientEmail || !resolvedPrivateKey || !resolvedSpreadsheetId) {
      return NextResponse.json(
        { message: "Missing required Google Sheets environment variables." },
        { status: 500 }
      );
    }

    if (!resolvedPrivateKey.includes("BEGIN PRIVATE KEY")) {
      return NextResponse.json(
        {
          message:
            "GOOGLE_SHEETS_PRIVATE_KEY appears malformed in deployment. Ensure the full key is set with newline support (or use GOOGLE_SHEETS_PRIVATE_KEY_BASE64).",
        },
        { status: 500 }
      );
    }

    const auth = new google.auth.JWT({
      email: resolvedClientEmail,
      key: resolvedPrivateKey,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const metadata = await sheets.spreadsheets.get({
      spreadsheetId: resolvedSpreadsheetId,
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
      spreadsheetId: resolvedSpreadsheetId,
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
    const fallbackMessage = "Unable to submit application right now. Please try again.";
    const message =
      typeof error === "object" &&
      error !== null &&
      "response" in error &&
      typeof error.response === "object" &&
      error.response !== null &&
      "status" in error.response
        ? `Google Sheets API error (${String((error.response as { status?: number }).status)}). Check Vercel env vars and share access for the service account.`
        : error instanceof Error
          ? error.message
          : fallbackMessage;

    return NextResponse.json(
      { message },
      { status: 500 }
    );
  }
}
