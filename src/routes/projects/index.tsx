import { createFileRoute, Link } from "@tanstack/react-router";
import { allProjects, type Project } from "@/data/projects";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — Alain Bloch (Ruby Miner)" },
      {
        name: "description",
        content:
          "Open-source projects by Alain Bloch on GitHub — Rails plugins, apps, and experiments.",
      },
      { property: "og:title", content: "Projects — Alain Bloch (Ruby Miner)" },
      {
        property: "og:description",
        content:
          "Open-source projects by Alain Bloch — Rails plugins, apps, and experiments.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/projects" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  return (
    <Link
      to="/projects/$slug"
      params={{ slug: project.slug }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-glass-border bg-glass/60 backdrop-blur-md transition-colors animate-rise hover:border-primary/40"
      style={{ animationDelay: `${delay}ms` }}
    >
      {project.image ? (
        <div className="w-full overflow-hidden">
          <img
            src={project.image}
            alt={project.name}
            loading="lazy"
            width={1088}
            height={608}
            className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      ) : (
        <div className="grid aspect-[16/9] w-full place-items-center bg-glass px-6 outline-1 -outline-offset-1 outline-glass-border">
          <code className="text-center font-mono text-xs text-muted-foreground sm:text-sm">
            {project.terminal}
          </code>
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-2">
          <div className="font-display text-3xl leading-none">{project.name}</div>
          <span className="font-mono text-xs text-muted-foreground">
            {project.year}
          </span>
        </div>
        <p className="mt-2 text-pretty text-sm text-muted-foreground">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span
            className={`rounded-full border px-3 py-1 font-mono text-[11px] ${
              project.kind === "open source"
                ? "border-primary/30 bg-primary/15 text-primary"
                : "border-glass-border bg-foreground/5 text-muted-foreground"
            }`}
          >
            {project.kind}
          </span>
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-glass-border bg-foreground/5 px-3 py-1 font-mono text-[11px] text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto flex items-center justify-between pt-5">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors group-hover:text-primary">
            Open project →
          </span>
          {project.stat ? (
            <span className="font-mono text-xs text-muted-foreground">
              {project.stat}
            </span>
          ) : null}
        </div>
      </div>
    </Link>
  );
}

function ProjectsPage() {
  return (
    <main className="relative mx-auto max-w-[80rem] px-6 pb-20 pt-16 md:px-8">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary animate-rise">
        The full quarry
      </p>
      <h1 className="mt-5 font-display text-7xl leading-[0.85] tracking-tight animate-rise sm:text-8xl">
        ALL <span className="text-primary">PROJECTS</span>
      </h1>
      <p className="mt-6 max-w-[52ch] text-lg text-pretty text-muted-foreground animate-rise">
        Public repositories from github.com/alainbloch — Rails plugins, small
        apps, and experiments. Open a project to read it, then follow the
        link to that repo.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {allProjects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} delay={i * 60} />
        ))}
      </div>

      <div className="mt-16 rounded-2xl border border-glass-border bg-glass/60 p-8 backdrop-blur-md">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-display text-3xl tracking-wide">
              Want the tour?
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              The CV has the full story — roles, stack, and what shipped when.
            </p>
          </div>
          <Link
            to="/cv"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/85"
          >
            Read the CV
          </Link>
        </div>
      </div>
    </main>
  );
}
