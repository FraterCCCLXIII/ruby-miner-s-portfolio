import ledgerEngineImg from "@/assets/project-ledger-engine.jpg";
import orePipelineImg from "@/assets/project-ore-pipeline.jpg";
import seamApiImg from "@/assets/project-seam-api.jpg";

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  year: string;
  kind: "open source" | "client work" | "tooling";
  stat?: string;
  image?: string;
  terminal?: string;
  link: string;
};

export const featuredProjects: Project[] = [
  {
    slug: "ledger-engine",
    name: "Ledger Engine",
    tagline: "Double-entry accounting core, 4M txns/day, sub-50ms reads.",
    description:
      "A double-entry accounting core that clears four million transactions a day with sub-50ms balance reads. Idempotency keys, exactly-once posting, and a reconciliation flow accountants actually enjoy.",
    tags: ["Rails", "Postgres"],
    year: "2024",
    kind: "client work",
    stat: "4M txns/day",
    image: ledgerEngineImg,
    link: "https://github.com/rubyminer",
  },
  {
    slug: "ore-pipeline",
    name: "Ore Pipeline",
    tagline: "Streaming ETL that ingests 12k events/sec into the warehouse.",
    description:
      "Streaming ETL that ingests twelve thousand events per second into the analytics warehouse. Backpressure-aware Sidekiq workers, dead-letter routing, and replay from any offset.",
    tags: ["Sidekiq", "Kafka"],
    year: "2023",
    kind: "client work",
    stat: "12k events/sec",
    image: orePipelineImg,
    link: "https://github.com/rubyminer",
  },
  {
    slug: "seam-api",
    name: "Seam API",
    tagline: "Public REST + GraphQL layer powering 3 partner apps.",
    description:
      "A public REST and GraphQL layer powering three partner applications. Versioned contracts, cursor pagination, and rate limiting that degrades gracefully instead of slamming doors.",
    tags: ["GraphQL", "Redis"],
    year: "2023",
    kind: "client work",
    stat: "3 partners",
    image: seamApiImg,
    link: "https://github.com/rubyminer",
  },
];

export const moreProjects: Project[] = [
  {
    slug: "quarry",
    name: "Quarry",
    tagline: "A typed job-runner for Sidekiq that makes retries explicit.",
    description:
      "A typed job-runner for Sidekiq that makes retries, idempotency keys, and dead-letter routing explicit in the code instead of folklore in the wiki. 2.4k stars and counting.",
    tags: ["Ruby", "Sidekiq"],
    year: "2024",
    kind: "open source",
    stat: "2.4k ★",
    terminal: "$ quarry perform --idempotency-key order:8841",
    link: "https://github.com/rubyminer",
  },
  {
    slug: "lamp",
    name: "Lamp",
    tagline: "Terminal dashboard that surfaces slow queries and queue lag.",
    description:
      "A terminal dashboard that surfaces slow queries and queue lag, then points at the exact migration to run. Written in Go, shipped as a single binary.",
    tags: ["Go", "TUI"],
    year: "2025",
    kind: "tooling",
    terminal: "$ lamp watch --queues default,critical",
    link: "https://github.com/rubyminer",
  },
  {
    slug: "forage",
    name: "Forage",
    tagline: "Offline-first foraging map with seasonal species data.",
    description:
      "An offline-first foraging map and community app — seasonal species data, cached map tiles, and gentle onboarding. Rails API with an Expo front end.",
    tags: ["Rails", "Expo"],
    year: "2022",
    kind: "open source",
    stat: "8k installs",
    terminal: "$ forage find --season autumn --radius 10km",
    link: "https://github.com/rubyminer",
  },
];

export const allProjects: Project[] = [...featuredProjects, ...moreProjects];
