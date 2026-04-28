import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import flagLogo from "@/assets/flag-logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/exhibits", label: "Exhibits" },
  { to: "/timeline", label: "Timeline" },
  { to: "/quiz", label: "Quiz" },
  { to: "/about", label: "About" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-parchment/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <Link to="/" className="group flex items-center gap-3">
          <div className="h-10 w-10 overflow-hidden rounded-full shadow-glow ring-2 ring-gold/60 transition-transform group-hover:rotate-12">
            <img
              src={flagLogo}
              alt="American flag logo"
              width={512}
              height={512}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg font-bold text-navy md:text-xl">
              American History
            </div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              A Digital Museum
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="rounded-md px-4 py-2 font-serif text-[15px] text-foreground/80 transition-colors hover:bg-secondary hover:text-navy"
              activeProps={{
                className:
                  "rounded-md px-4 py-2 font-serif text-[15px] bg-navy text-parchment hover:bg-navy hover:text-parchment",
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-navy md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-card md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-2">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 font-serif text-foreground/80 hover:bg-secondary"
                activeProps={{
                  className:
                    "rounded-md px-3 py-3 font-serif bg-navy text-parchment",
                }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
