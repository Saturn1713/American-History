import { useState } from "react";
import type { Artifact } from "@/data/exhibits";
import { Sparkles, X } from "lucide-react";

export function ArtifactCard({ artifact }: { artifact: Artifact }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="artifact-card group relative flex h-full flex-col items-start overflow-hidden rounded-xl border border-border bg-card p-6 text-left shadow-museum"
      >
        <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-gradient-gold px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-navy glow-pulse">
          <Sparkles size={11} /> Click
        </div>
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-4xl">
          {artifact.emoji}
        </div>
        <div className="text-xs font-bold uppercase tracking-[0.18em] text-gold">{artifact.year}</div>
        <h3 className="mt-1 font-display text-2xl font-bold text-navy">{artifact.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{artifact.short}</p>
        <div className="mt-4 text-xs font-semibold uppercase tracking-wider text-navy/60 group-hover:text-navy">
          Tap to explore →
        </div>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-deep/80 p-4 backdrop-blur-sm fade-in-up"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-card p-8 shadow-museum"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground hover:bg-secondary hover:text-navy"
            >
              <X size={20} />
            </button>
            <div className="text-6xl">{artifact.emoji}</div>
            <div className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-gold">
              {artifact.year}
            </div>
            <h3 className="mt-1 font-display text-3xl font-bold text-navy">{artifact.title}</h3>
            <div className="gold-divider my-5" />
            <p className="text-base leading-relaxed text-foreground">{artifact.details}</p>
            <div className="mt-6 rounded-xl border-l-4 border-gold bg-gradient-parchment p-4">
              <div className="text-[11px] font-bold uppercase tracking-wider text-gold">
                Did you know?
              </div>
              <p className="mt-1 text-sm text-foreground">{artifact.funFact}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
