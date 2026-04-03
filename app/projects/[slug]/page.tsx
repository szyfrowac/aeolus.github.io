import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { getProjectBySlug, projects } from "@/lib/projects";

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | Aeolus",
      description: "The requested project could not be found.",
    };
  }

  return {
    title: `${project.title} | Aeolus Projects`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-900 px-4 py-14 text-slate-100 md:px-6">
      <div className="mx-auto w-full max-w-4xl">
        <Link href="/projects" className="mb-8 inline-flex items-center gap-2 text-sm text-slate-300 hover:text-cyan-300">
          <ArrowLeft className="h-4 w-4" />
          Back to projects
        </Link>

        <article className="rounded-2xl border border-slate-700 bg-slate-800/60 p-6 backdrop-blur md:p-8">
          <div className="relative mb-8 h-56 w-full overflow-hidden rounded-xl md:h-72">
            <Image src={project.heroImage} alt={`${project.title} hero`} fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/75 via-transparent to-transparent" />
          </div>

          <header>
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <Badge className="border-cyan-400/30 bg-cyan-900/40 text-cyan-200">{project.year}</Badge>
              <Badge variant="outline" className="border-slate-500 text-slate-200">
                {project.type}
              </Badge>
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl">{project.title}</h1>
            <p className="mt-4 text-base leading-relaxed text-slate-300">{project.summary}</p>
          </header>

          <section className="mt-8 space-y-4">
            {project.details.map((paragraph) => (
              <p key={paragraph} className="leading-relaxed text-slate-200">
                {paragraph}
              </p>
            ))}
          </section>

          <section className="mt-8">
            <h2 className="text-lg font-semibold text-white">Highlights</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.highlights.map((highlight) => (
                <Badge key={highlight} variant="outline" className="border-cyan-500/50 text-cyan-200">
                  {highlight}
                </Badge>
              ))}
            </div>
          </section>

          <div className="mt-10 border-t border-slate-700 pt-6">
            <Link href="/projects" className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200">
              Browse all projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}
