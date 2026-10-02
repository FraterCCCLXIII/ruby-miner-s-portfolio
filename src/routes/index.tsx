import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, type ComponentType } from "react";
import { resumeDownload } from "@/data/cv";
import { featuredProjects, type Project } from "@/data/projects";
import type { PixelBlastProps } from "@/components/pixel-blast";

/**
 * sRGB hex of `--primary` (`oklch(0.62 0.21 25)`).
 *
 * The shader takes a hex color, not a CSS variable, so the brand red is
 * inlined here. Update both if the primary token changes.
 */
const HERO_BLAST_RED = "#ea3c3f";

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
      to="/projects/$slug"
      params={{ slug: project.slug }}
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
        <div className="grid aspect-[16/9] w-full place-items-center bg-glass px-6 outline-1 -outline-offset-1 outline-glass-border">
          <code className="text-center font-mono text-xs text-muted-foreground sm:text-sm">
            {project.terminal}
          </code>
        </div>
      )}
      <div className="p-5">
        <div className="font-display text-3xl leading-none">{project.name}</div>
        <p className="mt-2 text-pretty text-sm text-muted-foreground">{project.tagline}</p>
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

/**
 * Red pixel field behind the hero copy.
 *
 * The WebGL module is imported after mount so the server render never
 * touches a canvas. The field fills the hero; copy sits above it and
 * ignores pointer events so clicks in the open space still spawn ripples.
 */
function HeroPixelField() {
  const [Blast, setBlast] = useState<ComponentType<PixelBlastProps> | null>(null);

  useEffect(() => {
    let cancelled = false;
    void import("@/components/pixel-blast").then((mod) => {
      if (!cancelled) setBlast(() => mod.PixelBlast);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      {Blast ? <Blast color={HERO_BLAST_RED} className="h-full w-full" edgeFade={0.35} /> : null}
    </div>
  );
}

function HomePage() {
  return (
    <main className="relative">
      {/* Hero */}
      <section className="relative">
        <HeroPixelField />
        <div className="pointer-events-none relative z-10 mx-auto max-w-[80rem] px-6 pb-20 pt-16 md:px-8">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary animate-rise">
            Alain Bloch — Backend Engineer
          </p>
          <h1 className="mt-5 font-display text-[5.5rem] leading-[0.82] tracking-tight animate-rise sm:text-[8.5rem]">
            RUBY
            <br />
            MINER
          </h1>
          <p className="mt-6 max-w-[44ch] text-lg text-pretty text-muted-foreground animate-rise">
            I dig deep into Ruby, Rails and Postgres — carving fast, boring, dependable services out
            of messy legacy rock.
          </p>
          <div className="pointer-events-auto mt-8 flex items-center gap-3 animate-rise">
            <a
              href={resumeDownload.href}
              download={resumeDownload.filename}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/85"
            >
              Download CV
            </a>
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
