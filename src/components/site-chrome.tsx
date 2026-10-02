import { Link, useRouterState } from "@tanstack/react-router";

const navLinks = [
  { to: "/", label: "Home", exact: true },
  { to: "/projects", label: "Projects", exact: false },
  { to: "/cv", label: "CV", exact: false },
] as const;

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 border-b border-glass-border bg-background/70 backdrop-blur-xl print:hidden">
      <div className="mx-auto flex h-16 max-w-[80rem] items-center justify-between px-6 md:px-8">
        <Link to="/" className="flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-md bg-primary font-mono text-sm font-semibold text-primary-foreground">
            RB
          </span>
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
