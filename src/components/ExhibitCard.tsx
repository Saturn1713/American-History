import { Link } from "@tanstack/react-router";
import type { Exhibit } from "@/data/exhibits";
import { ArrowRight } from "lucide-react";

export function ExhibitCard({ exhibit }: { exhibit: Exhibit }) {
  return (
    <Link
      to="/exhibits/$slug"
      params={{ slug: exhibit.slug }}
      className="group relative block overflow-hidden rounded-2xl border border-border bg-card shadow-museum transition-all hover:-translate-y-1 hover:shadow-glow"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={exhibit.image}
          alt={exhibit.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${exhibit.accent} mix-blend-multiply`} />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-parchment">
          <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold">
            {exhibit.era}
          </div>
          <h3 className="mt-1 font-display text-2xl font-bold leading-tight">{exhibit.title}</h3>
        </div>
      </div>
      <div className="flex items-center justify-between p-5">
        <p className="text-sm italic text-muted-foreground">{exhibit.tagline}</p>
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-gold text-navy transition-transform group-hover:translate-x-1">
          <ArrowRight size={16} />
        </span>
      </div>
    </Link>
  );
}
