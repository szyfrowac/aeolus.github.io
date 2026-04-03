"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FolderKanban } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  const [selectedYear, setSelectedYear] = useState("All Years");
  const [selectedType, setSelectedType] = useState("All Types");

  const yearOptions = useMemo(() => {
    const years = Array.from(new Set(projects.map((project) => project.year)));

    return [
      "All Years",
      ...years.sort((a, b) => {
        if (a === "Ongoing") return -1;
        if (b === "Ongoing") return 1;
        return Number(b) - Number(a);
      }),
    ];
  }, []);

  const typeOptions = useMemo(
    () => ["All Types", ...Array.from(new Set(projects.map((project) => project.type))).sort()],
    []
  );

  const filteredProjects = useMemo(
    () =>
      projects.filter((project) => {
        const matchesYear = selectedYear === "All Years" || project.year === selectedYear;
        const matchesType = selectedType === "All Types" || project.type === selectedType;

        return matchesYear && matchesType;
      }),
    [selectedType, selectedYear]
  );

  return (
    <main className="min-h-screen bg-slate-900 px-4 py-14 text-slate-100 md:px-6">
      <div className="mx-auto w-full max-w-6xl">
        <header className="mb-10">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Aeolus Portfolio</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white md:text-5xl">Projects</h1>
          <p className="mt-3 max-w-3xl text-slate-300">
            Explore competition entries, research tracks, and infrastructure initiatives from the Aeolus club.
            Click any project card to open a dedicated details page.
          </p>
        </header>

        <section className="mb-8 rounded-2xl border border-slate-700 bg-slate-800/40 p-4 md:p-5">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-slate-300">Filter by year</h2>
              <div className="flex flex-wrap gap-2">
                {yearOptions.map((yearOption) => (
                  <button
                    key={yearOption}
                    type="button"
                    onClick={() => setSelectedYear(yearOption)}
                    className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
                      selectedYear === yearOption
                        ? "border-cyan-300 bg-cyan-400/20 text-cyan-200"
                        : "border-slate-600 bg-slate-900/40 text-slate-300 hover:border-slate-400"
                    }`}
                  >
                    {yearOption}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-slate-300">Filter by type</h2>
              <div className="flex flex-wrap gap-2">
                {typeOptions.map((typeOption) => (
                  <button
                    key={typeOption}
                    type="button"
                    onClick={() => setSelectedType(typeOption)}
                    className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
                      selectedType === typeOption
                        ? "border-cyan-300 bg-cyan-400/20 text-cyan-200"
                        : "border-slate-600 bg-slate-900/40 text-slate-300 hover:border-slate-400"
                    }`}
                  >
                    {typeOption}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`}>
              <Card className="h-full border-slate-700 bg-slate-800/60 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-lg hover:shadow-cyan-500/10">
                <div className="relative h-44 w-full overflow-hidden rounded-t-xl">
                  <Image
                    src={project.heroImage}
                    alt={`${project.title} hero`}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                </div>

                <CardHeader>
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <Badge className="border-cyan-400/30 bg-cyan-900/40 text-cyan-200">{project.year}</Badge>
                    <span className="text-xs uppercase tracking-wider text-slate-400">{project.type}</span>
                  </div>
                  <CardTitle className="line-clamp-2 text-xl text-white">{project.title}</CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-sm leading-relaxed text-slate-300">{project.summary}</p>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-cyan-300">
                    Open project
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </section>

        <footer className="mt-12 rounded-xl border border-slate-700 bg-slate-800/50 p-5 text-slate-300">
          <div className="flex items-center gap-3">
            <FolderKanban className="h-5 w-5 text-cyan-300" />
            <p className="text-sm">
              Showing {filteredProjects.length} of {projects.length} projects
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
