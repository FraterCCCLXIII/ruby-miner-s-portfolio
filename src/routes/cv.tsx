import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/cv")({
  head: () => ({
    meta: [
      { title: "CV — Alain Bloch (Ruby Miner)" },
      {
        name: "description",
        content:
          "Curriculum vitae of Alain Bloch, aka Ruby Miner — backend engineer specialising in Ruby, Rails and Postgres.",
      },
      { property: "og:title", content: "CV — Alain Bloch (Ruby Miner)" },
      {
        property: "og:description",
        content:
          "Backend engineer specialising in Ruby, Rails and Postgres. Ten years shipping dependable systems.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/cv" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CvPage,
});

const experience = [
  {
    role: "Staff Backend Engineer",
    company: "Northbank",
    location: "Zurich, CH",
    period: "2022 — now",
    description:
      "Led the checkout idempotency rewrite, cutting P99 latency 65% and eliminating a class of double-charge incidents across a 4M-transaction/day ledger. Own the payments platform's Rails core and mentoring circle.",
    tags: ["Rails", "Postgres", "Kafka"],
  },
  {
    role: "Senior Engineer",
    company: "Halden Freight",
    location: "Oslo, NO",
    period: "2019 — 2022",
    description:
      "Owned the routing microservice that scheduled 900k shipments weekly. Introduced consumer-driven contract tests that caught 40% of regressions before deploy, and ran the Sidekiq fleet at 12k jobs/min.",
    tags: ["Ruby", "Sidekiq", "Redis"],
  },
  {
    role: "Backend Engineer",
    company: "Cobalt Studio",
    location: "Paris, FR",
    period: "2015 — 2019",
    description:
      "Built the first Rails monolith for a marketplace, then extracted billing into a service with Stripe webhooks and a retry-safe ledger. Learned that boring architecture is a feature.",
    tags: ["Rails", "Stripe", "Postgres"],
  },
];

const skillGroups = [
  {
    label: "Languages",
    skills: ["Ruby 3.3", "Go", "TypeScript", "SQL", "Bash"],
  },
  {
    label: "Frameworks",
    skills: ["Rails 7", "Sidekiq", "GraphQL", "React", "Vite"],
  },
  {
    label: "Data & Infra",
    skills: ["PostgreSQL", "Redis", "Kafka", "Docker", "Kubernetes"],
  },
];

const education = [
  {
    degree: "BSc Computer Science",
    school: "EPFL",
    period: "2012 — 2015",
  },
  {
    degree: "MSc Distributed Systems",
    school: "ETH Zürich",
    period: "2015 — 2017",
  },
];

function CvPage() {
  return (
    <main className="relative mx-auto max-w-[80rem] px-6 pb-20 pt-16 md:px-8">
      {/* Header */}
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary animate-rise">
            Curriculum vitae
          </p>
          <h1 className="mt-5 font-display text-7xl leading-[0.85] tracking-tight animate-rise sm:text-8xl">
            ALAIN <span className="text-primary">BLOCH</span>
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-muted-foreground">
            <span>Paris, FR</span>
            <span className="text-glass-border">/</span>
            <span>alain@rubyminer.dev</span>
            <span className="text-glass-border">/</span>
            <span>github.com/rubyminer</span>
          </div>
        </div>
        <button
          onClick={() => window.print()}
          className="inline-flex shrink-0 items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/85 print:hidden"
        >
          Print CV
        </button>
      </div>

      {/* Summary */}
      <div className="mt-10 rounded-2xl border border-glass-border bg-glass/60 p-6 backdrop-blur-md">
        <p className="text-pretty leading-relaxed text-muted-foreground">
          Backend engineer with ten years shipping Ruby systems that don't page
          anyone at 3am. I care about idempotent jobs, honest metrics, and
          monoliths that split only when they must. Currently mining throughput
          on a payments platform in Zurich.
        </p>
      </div>

      {/* Experience */}
      <section className="mt-12">
        <div className="mb-4 flex items-end justify-between">
          <h2 className="font-display text-5xl tracking-wide">
            Experience
          </h2>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            10 years shipping
          </span>
        </div>
        <div className="divide-y divide-glass-border rounded-2xl border border-glass-border bg-glass/60 backdrop-blur-md">
          {experience.map((job) => (
            <div key={job.company} className="grid grid-cols-12 gap-6 p-6">
              <div className="col-span-12 md:col-span-3">
                <p className="font-semibold text-foreground">{job.role}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {job.company} · {job.location}
                </p>
                <p className="mt-1 font-mono text-xs text-primary">{job.period}</p>
              </div>
              <div className="col-span-12 md:col-span-9">
                <p className="text-sm leading-relaxed text-pretty text-muted-foreground">
                  {job.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-glass-border bg-foreground/5 px-3 py-1 font-mono text-[11px] text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.label}
            className="rounded-2xl border border-glass-border bg-glass/60 p-6 backdrop-blur-md"
          >
            <h3 className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary">
              {group.label}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-glass-border bg-foreground/5 px-3 py-1 text-sm text-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Education */}
      <section className="mt-12">
        <h2 className="mb-4 font-display text-5xl tracking-wide">Education</h2>
        <div className="divide-y divide-glass-border rounded-2xl border border-glass-border bg-glass/60 backdrop-blur-md">
          {education.map((item) => (
            <div
              key={item.degree}
              className="flex flex-wrap items-center justify-between gap-2 p-6"
            >
              <div>
                <p className="font-semibold text-foreground">{item.degree}</p>
                <p className="text-sm text-muted-foreground">{item.school}</p>
              </div>
              <p className="font-mono text-xs text-primary">{item.period}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
