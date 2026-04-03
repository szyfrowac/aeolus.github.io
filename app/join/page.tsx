"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Loader2, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type JoinFormData = {
  name: string;
  idNumber: string;
  email: string;
  whyJoin: string;
  team: string;
  githubLink: string;
  projectsWorkedOn: string;
};

const initialFormData: JoinFormData = {
  name: "",
  idNumber: "",
  email: "",
  whyJoin: "",
  team: "",
  githubLink: "",
  projectsWorkedOn: "",
};

export default function JoinPage() {
  const [formData, setFormData] = useState<JoinFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitting(true);
    setStatusMessage(null);
    setIsError(false);

    try {
      const response = await fetch("/api/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const payload = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(payload.message ?? "Failed to submit the form.");
      }

      setStatusMessage("Application submitted successfully. We will reach out soon.");
      setFormData(initialFormData);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Something went wrong.";
      setIsError(true);
      setStatusMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-900 px-4 py-12 text-slate-100 md:px-6">
      <div className="mx-auto w-full max-w-3xl">
        <Link href="/" className="mb-8 inline-flex items-center gap-2 text-sm text-slate-300 hover:text-cyan-400">
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <Card className="border border-slate-700 bg-slate-800/60 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold tracking-tight text-white">Join Aeolus</CardTitle>
            <p className="text-sm text-slate-300">
              Fill out this form.
            </p>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="grid gap-4">
              <Input
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
                required
                className="border-slate-600 bg-slate-900/50 text-white placeholder:text-slate-400"
              />

              <Input
                name="idNumber"
                placeholder="ID Number"
                value={formData.idNumber}
                onChange={(event) => setFormData((prev) => ({ ...prev, idNumber: event.target.value }))}
                required
                className="border-slate-600 bg-slate-900/50 text-white placeholder:text-slate-400"
              />

              <Input
                name="email"
                type="email"
                placeholder="Email ID"
                value={formData.email}
                onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
                required
                className="border-slate-600 bg-slate-900/50 text-white placeholder:text-slate-400"
              />

              <Textarea
                name="whyJoin"
                placeholder="Why do you want to join?"
                value={formData.whyJoin}
                onChange={(event) => setFormData((prev) => ({ ...prev, whyJoin: event.target.value }))}
                required
                className="min-h-24 border-slate-600 bg-slate-900/50 text-white placeholder:text-slate-400"
              />

              <Input
                name="team"
                placeholder="Team you want to join"
                value={formData.team}
                onChange={(event) => setFormData((prev) => ({ ...prev, team: event.target.value }))}
                required
                className="border-slate-600 bg-slate-900/50 text-white placeholder:text-slate-400"
              />

              <Input
                name="githubLink"
                type="url"
                placeholder="GitHub Link"
                value={formData.githubLink}
                onChange={(event) => setFormData((prev) => ({ ...prev, githubLink: event.target.value }))}
                className="border-slate-600 bg-slate-900/50 text-white placeholder:text-slate-400"
              />

              <Textarea
                name="projectsWorkedOn"
                placeholder="Projects that you have worked on"
                value={formData.projectsWorkedOn}
                onChange={(event) => setFormData((prev) => ({ ...prev, projectsWorkedOn: event.target.value }))}
                required
                className="min-h-28 border-slate-600 bg-slate-900/50 text-white placeholder:text-slate-400"
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 bg-cyan-500 font-semibold text-slate-900 hover:bg-cyan-400"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Submit Application
                  </>
                )}
              </Button>

              {statusMessage ? (
                <p className={`text-sm ${isError ? "text-red-400" : "text-emerald-400"}`}>{statusMessage}</p>
              ) : null}
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
