/**
 * CV route — the on-site resume, plus a download of the same PDF.
 *
 * Copy lives in `src/data/cv.ts` so this file stays a layout. The download
 * points at `public/alain-bloch-resume.pdf`.
 */
import { createFileRoute } from "@tanstack/react-router";
import {
  cvContact,
  experience,
  managementSkills,
  objectives,
  personalSummary,
  referencesNote,
  resumeDownload,
  technicalSkills,
} from "@/data/cv";

export const Route = createFileRoute("/cv")({
  head: () => ({
    meta: [
      { title: "CV — Alain Bloch" },
      {
        name: "description",
        content:
          "Technical resume of Alain Bloch — senior software engineer and team lead, twenty years of Ruby on Rails, plus JavaScript, APIs, and applied AI.",
      },
      { property: "og:title", content: "CV — Alain Bloch" },
      {
        property: "og:description",
        content:
          "Senior software engineer and team lead. Ruby on Rails, JavaScript, APIs, and applied AI.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/cv" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CvPage,
});

function DownloadCvLink({ className }: { className?: string }) {
  return (
    <a
      href={resumeDownload.href}
      download={resumeDownload.filename}
      className={className}
    >
      Download CV
    </a>
  );
}

function CvPage() {
  return (
    <main className="relative mx-auto max-w-[80rem] px-6 pb-20 pt-16 md:px-8">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary animate-rise">
            Curriculum vitae
          </p>
          <h1 className="mt-5 font-display text-7xl leading-[0.85] tracking-tight animate-rise sm:text-8xl">
            ALAIN <span className="text-primary">BLOCH</span>
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs text-muted-foreground">
            <a href={cvContact.phoneHref} className="transition-colors hover:text-primary">
              {cvContact.phone}
            </a>
            <span className="text-glass-border">/</span>
            <a
              href={`mailto:${cvContact.email}`}
              className="transition-colors hover:text-primary"
            >
              {cvContact.email}
            </a>
            <span className="text-glass-border">/</span>
            <a
              href={cvContact.githubHref}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-primary"
            >
              {cvContact.githubLabel}
            </a>
            <span className="text-glass-border">/</span>
            <a
              href={cvContact.linkedinHref}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-primary"
            >
              {cvContact.linkedinLabel}
            </a>
          </div>
        </div>
        <DownloadCvLink className="inline-flex shrink-0 items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/85" />
      </div>

      <section className="mt-10 rounded-2xl border border-glass-border p-6">
        <h2 className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
          Objectives
        </h2>
        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
          {objectives.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-6 rounded-2xl border border-glass-border p-6">
        <h2 className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
          Personal summary
        </h2>
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          {personalSummary}
        </p>
      </section>

      <section className="mt-12">
        <h2 className="mb-4 font-display text-5xl tracking-wide">
          Technical skills
        </h2>
        <div className="divide-y divide-glass-border rounded-2xl border border-glass-border">
          {technicalSkills.map((skill) => (
            <div key={skill.name} className="grid grid-cols-12 gap-4 p-6">
              <h3 className="col-span-12 font-semibold text-foreground md:col-span-3">
                {skill.name}
              </h3>
              <p className="col-span-12 text-sm leading-relaxed text-pretty text-muted-foreground md:col-span-9">
                {skill.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="mb-4 font-display text-5xl tracking-wide">
          Team &amp; management
        </h2>
        <ul className="space-y-3 rounded-2xl border border-glass-border p-6 text-sm leading-relaxed text-muted-foreground">
          {managementSkills.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <div className="mb-4 flex items-end justify-between">
          <h2 className="font-display text-5xl tracking-wide">Experience</h2>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            2005 — present
          </span>
        </div>
        <div className="divide-y divide-glass-border rounded-2xl border border-glass-border">
          {experience.map((job) => (
            <div key={`${job.company}-${job.period}`} className="grid grid-cols-12 gap-6 p-6">
              <div className="col-span-12 md:col-span-4">
                <p className="font-semibold text-foreground">{job.role}</p>
                <p className="mt-1 text-sm text-muted-foreground">{job.company}</p>
                {job.location ? (
                  <p className="mt-1 text-sm text-muted-foreground">{job.location}</p>
                ) : null}
                <p className="mt-2 font-mono text-xs text-primary">{job.period}</p>
              </div>
              <p className="col-span-12 text-sm leading-relaxed text-pretty text-muted-foreground md:col-span-8">
                {job.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 flex flex-col items-start justify-between gap-4 rounded-2xl border border-glass-border p-6 sm:flex-row sm:items-center">
        <div>
          <h2 className="font-display text-3xl tracking-wide">
            Contacts &amp; references
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">{referencesNote}</p>
        </div>
        <DownloadCvLink className="inline-flex shrink-0 items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/85" />
      </section>
    </main>
  );
}
