import { Link, useRouterState } from "@tanstack/react-router";

const navLinks = [
  { to: "/", label: "Home", exact: true },
  { to: "/projects", label: "Projects", exact: false },
  { to: "/cv", label: "CV", exact: false },
] as const;

/**
 * Black stones of the header mark, in source order.
 *
 * Delay is assigned by sweeping x + y, so the wink travels along the
 * pickaxe instead of flashing stones that happen to sit next to each
 * other in the SVG.
 */
const markStones = [
  { x: 100.91, y: 70.59, transform: "translate(90.19 -55.12) rotate(45)" },
  { x: 85.75, y: 85.75, transform: "translate(96.47 -39.96) rotate(45)" },
  { x: 70.59, y: 100.91, transform: "translate(102.75 -24.8) rotate(45)" },
  { x: 55.43, y: 116.07, transform: "translate(109.03 -9.64) rotate(45)" },
  { x: 40.27, y: 131.22, transform: "translate(115.3 5.52) rotate(45)" },
  { x: 25.12, y: 146.38, transform: "translate(121.58 20.68) rotate(45)" },
  { x: 131.22, y: 70.59, transform: "translate(99.07 -76.55) rotate(45)" },
  { x: 116.07, y: 55.43, transform: "translate(83.91 -70.28) rotate(45)" },
  { x: 146.38, y: 85.75, transform: "translate(114.23 -82.83) rotate(45)" },
  { x: 131.22, y: 100.91, transform: "translate(120.51 -67.67) rotate(45)" },
  { x: 146.38, y: 116.07, transform: "translate(135.66 -73.95) rotate(45)" },
  { x: 146.38, y: 146.38, transform: "translate(157.1 -65.07) rotate(45)" },
  { x: 100.91, y: 40.27, transform: "translate(154.5 165.98) rotate(-135)" },
  { x: 116.07, y: 25.12, transform: "translate(191.1 150.82) rotate(-135)" },
  { x: 131.22, y: 40.27, transform: "translate(206.26 187.42) rotate(-135)" },
  { x: 146.38, y: 25.12, transform: "translate(242.85 172.26) rotate(-135)" },
  { x: 146.38, y: 55.43, transform: "translate(221.41 224.01) rotate(-135)" },
  { x: 85.75, y: 25.12, transform: "translate(139.34 129.39) rotate(-135)" },
  { x: 70.59, y: 40.27, transform: "translate(102.75 144.54) rotate(-135)" },
  { x: 55.43, y: 25.12, transform: "translate(87.59 107.95) rotate(-135)" },
  { x: 25.12, y: 25.12, transform: "translate(35.83 86.51) rotate(-135)" },
] as const;

const markStoneDelay = new Map(
  markStones
    .map((stone, index) => ({ index, sweep: stone.x + stone.y }))
    .sort((a, b) => a.sweep - b.sweep)
    .map((entry, rank) => [entry.index, rank * 0.22]),
);

/** Square ruby mark. Each stone winks off for one beat, then returns. */
function SiteMark() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 192.94 192.94"
      className="size-10 shrink-0"
      aria-hidden="true"
    >
      <rect fill="#e81d2a" width="192.94" height="192.94" />
      {markStones.map((stone, index) => (
        <rect
          key={stone.transform}
          className="mark-stone"
          fill="#000"
          x={stone.x}
          y={stone.y}
          width="21.44"
          height="21.44"
          transform={stone.transform}
          style={{ animationDelay: `-${markStoneDelay.get(index)}s` }}
        />
      ))}
    </svg>
  );
}

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 border-b border-glass-border bg-background/70 backdrop-blur-xl print:hidden">
      <div className="mx-auto flex h-16 max-w-[80rem] items-center justify-between px-6 md:px-8">
        <Link to="/" className="flex items-center gap-3" aria-label="Ruby Miner, home">
          <SiteMark />
          <span className="font-display text-2xl leading-none tracking-wide">
            RUBY<span className="text-primary">MINER</span>
          </span>
        </Link>
        <nav className="flex items-center gap-1">
          {navLinks.map((link) => {
            const active = link.exact
              ? pathname === "/"
              : pathname.startsWith(link.to);
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`rounded-md px-4 py-2 text-sm font-semibold transition-colors ${
                  active
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <a
          href="mailto:alain@rubyminer.dev"
          className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/85"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative border-t border-glass-border bg-background/60 backdrop-blur-xl print:hidden">
      <div className="mx-auto flex max-w-[80rem] flex-col items-start justify-between gap-4 px-6 py-10 sm:flex-row sm:items-center md:px-8">
        <div className="font-display text-3xl tracking-wide">
          Alain <span className="text-primary">Bloch</span>
        </div>
        <div className="flex flex-wrap items-center gap-6 font-mono text-xs text-muted-foreground">
          <a
            href="https://github.com/alainbloch"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-primary"
          >
            GitHub
          </a>
          <a
            href="mailto:alain@rubyminer.dev"
            className="transition-colors hover:text-primary"
          >
            alain@rubyminer.dev
          </a>
          <span>© 2026 · Built with Rails &amp; stubbornness</span>
        </div>
      </div>
    </footer>
  );
}
