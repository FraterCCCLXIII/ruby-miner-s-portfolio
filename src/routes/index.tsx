import { createFileRoute, Link } from "@tanstack/react-router";
import { featuredProjects, type Project } from "@/data/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alain Bloch — Ruby Miner · Backend Engineer" },
      {
        name: "description",
        content:
          "Alain Bloch, aka Ruby Miner — a backend engineer digging deep into Ruby, Rails and Postgres to carve fast, dependable services.",
      },
      { property: "og:title", content: "Alain Bloch — Ruby Miner · Backend Engineer" },
      {
        property: "og:description",
        content:
          "I dig deep into Ruby, Rails and Postgres — carving fast, boring, dependable services out of messy legacy rock.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  return (
    <Link
      to="/projects"
      className="group block overflow-hidden rounded-2xl border border-glass-border bg-glass/60 backdrop-blur-md transition-colors hover:border-primary/40 animate-rise"
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
        <div className="aspect-[16/9] w-full bg-glass outline-1 -outline-offset-1 outline-glass-border" />
      )}
      <div className="p-5">
        <div className="font-display text-3xl leading-none">{project.name}</div>
        <p className="mt-2 text-pretty text-sm text-muted-foreground">
          {project.tagline}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-glass-border bg-foreground/5 px-3 py-1 font-mono text-[11px] text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

function HomePage() {
  return (
    <main className="relative">
      {/* Hero */}
      <section className="mx-auto grid max-w-[80rem] grid-cols-12 items-center gap-8 px-6 pb-20 pt-16 md:px-8">
        <div className="col-span-12 lg:col-span-7">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary animate-rise">
            Alain Bloch — Backend Engineer
          </p>
          <h1 className="mt-5 font-display text-[5.5rem] leading-[0.82] tracking-tight animate-rise sm:text-[8.5rem]">
            RUBY
            <br />
            MINER
          </h1>
          <p className="mt-6 max-w-[44ch] text-lg text-pretty text-muted-foreground animate-rise">
            I dig deep into Ruby, Rails and Postgres — carving fast, boring,
            dependable services out of messy legacy rock.
          </p>
          <div className="mt-8 flex items-center gap-3 animate-rise">
            <Link
              to="/cv"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/85"
            >
              Download CV
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-md border border-glass-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-foreground/40"
            >
              View projects
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-6 font-mono text-xs text-muted-foreground animate-rise">
            <span>Paris, FR</span>
            <span className="text-glass-border">/</span>
            <span>alain@rubyminer.dev</span>
            <span className="text-glass-border">/</span>
            <span>@rubyminer</span>
          </div>
        </div>

        {/* Tilted glass card stack */}
        <div className="relative col-span-12 hidden h-[420px] lg:col-span-5 lg:block">
          <div className="absolute inset-0 rotate-[10deg] overflow-hidden rounded-2xl border border-glass-border bg-glass/70 shadow-[0_0_60px_-10px_oklch(0.8_0.17_166/0.35)] backdrop-blur-md animate-drift">
            <div className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-foreground/10 to-transparent animate-sheen" />
            <div className="absolute inset-0 grid place-items-center">
              <span className="font-display text-7xl tracking-wide text-foreground/10">
                AB
              </span>
            </div>
          </div>
          <div className="absolute inset-x-6 bottom-6 top-16 flex flex-col justify-between rounded-2xl border border-glass-border bg-glass/80 p-6 backdrop-blur-md">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
              Now mining
            </div>
            <div className="font-display text-4xl leading-none">
              Ledger
              <br />
              Engine
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full border border-primary/30 bg-primary/15 px-3 py-1 font-mono text-[11px] text-primary">
                Ruby
              </span>
              <span className="rounded-full border border-glass-border bg-foreground/5 px-3 py-1 font-mono text-[11px]">
                Rails
              </span>
              <span className="rounded-full border border-glass-border bg-foreground/5 px-3 py-1 font-mono text-[11px]">
                Postgres
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="mx-auto max-w-[80rem] px-6 pb-20 md:px-8">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-display text-5xl tracking-wide">
            Featured <span className="text-primary">veins</span>
          </h2>
          <Link
            to="/projects"
            className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-primary"
          >
            All projects →
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} delay={i * 80} />
          ))}
        </div>
      </section>
    </main>
  );
}
