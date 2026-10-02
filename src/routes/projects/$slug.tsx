/**
 * Project detail route — one page for every entry in the portfolio catalog.
 *
 * The slug is the URL. `findProject` is the only source of truth, so a
 * mistyped path uses the root not-found screen instead of an empty page.
 */
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { allProjects, findProject, type Project } from "@/data/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = findProject(params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Project" }] };
    return {
      meta: [
        { title: `${loaderData.name} — Alain Bloch (Ruby Miner)` },
        { name: "description", content: loaderData.tagline },
        { property: "og:title", content: `${loaderData.name} — Alain Bloch` },
        { property: "og:description", content: loaderData.description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: `/projects/${loaderData.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProjectPage,
});

function ProjectPage() {
  const project = Route.useLoaderData();
  const others = allProjects.filter((item) => item.slug !== project.slug);

  return (
    <main className="relative mx-auto max-w-[80rem] px-6 pb-20 pt-16 md:px-8">
      <Link
        to="/projects"
        activeOptions={{ exact: true }}
        className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-primary"
      >
        ← All projects
      </Link>

      <p className="mt-8 font-mono text-xs uppercase tracking-[0.3em] text-primary">
        {project.kind} · {project.year}
      </p>
      <h1 className="mt-5 max-w-[12ch] font-display text-7xl leading-[0.85] tracking-tight sm:text-8xl">
        {project.name}
      </h1>
      <p className="mt-6 max-w-[52ch] text-lg text-pretty text-muted-foreground">
        {project.tagline}
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/85"
        >
          View source
        </a>
        {project.stat ? (
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {project.stat}
          </span>
        ) : null}
      </div>

      <ProjectMedia project={project} />

      <section className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="rounded-2xl border border-glass-border p-6 lg:col-span-8">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
            Overview
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            {project.description}
          </p>
        </div>
        <div className="rounded-2xl border border-glass-border p-6 lg:col-span-4">
          <h2 className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
            Stack
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="border border-glass-border px-3 py-1 font-mono text-[11px] text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
          {project.image && project.terminal ? (
            <code className="mt-6 block border border-glass-border px-4 py-3 font-mono text-xs text-muted-foreground">
              {project.terminal}
            </code>
          ) : null}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="mb-6 font-display text-4xl tracking-wide">
          More from the quarry
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((item) => (
            <Link
              key={item.slug}
              to="/projects/$slug"
              params={{ slug: item.slug }}
              className="rounded-2xl border border-glass-border p-5 transition-colors hover:border-primary/40"
            >
              <div className="font-display text-2xl leading-none">{item.name}</div>
              <p className="mt-2 text-sm text-pretty text-muted-foreground">{item.tagline}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

function ProjectMedia({ project }: { project: Project }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={project.name}
        width={1088}
        height={608}
        className="mt-10 aspect-[16/9] w-full rounded-2xl border border-glass-border object-cover"
      />
    );
  }

  return (
    <div className="mt-10 grid aspect-[16/9] place-items-center rounded-2xl border border-glass-border px-6">
      <code className="text-center font-mono text-sm text-muted-foreground sm:text-base">
        {project.terminal}
      </code>
    </div>
  );
}
