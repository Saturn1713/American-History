import { createFileRoute, Link } from "@tanstack/react-router";
import { exhibits } from "@/data/exhibits";
import { ExhibitCard } from "@/components/ExhibitCard";
import heroMuseum from "@/assets/hero-museum.jpg";
import { ArrowRight, Compass, Sparkles, GraduationCap } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "American History — A Digital Museum of US History" },
      {
        name: "description",
        content:
          "An interactive digital museum of American history. Explore six immersive exhibits, click artifacts, watch videos, and test your knowledge.",
      },
      { property: "og:title", content: "American History — A Digital Museum" },
      {
        property: "og:description",
        content:
          "Six interactive exhibits covering 400 years of American history — from Colonial times to today.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroMuseum}
            alt="Grand museum hall displaying a historic American flag"
            className="h-full w-full object-cover ken-burns"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-28 md:px-8 md:py-40">
          <div className="max-w-3xl fade-in-up">
            <h1 className="font-display text-5xl font-bold leading-[1.05] text-parchment md:text-7xl text-balance">
              American History
            </h1>
            <p className="mt-2 font-display text-2xl italic text-gold md:text-3xl">
              A Digital Museum
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-parchment/85 md:text-xl text-pretty">
              Walk through 400 years of American history. Click on artifacts, watch short
              films, and test what you've learned — all from your screen.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/exhibits"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 font-sans text-base font-semibold text-navy shadow-glow transition-transform hover:scale-105"
              >
                Enter the Museum
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link
                to="/quiz"
                className="inline-flex items-center gap-2 rounded-full border border-gold/60 bg-navy-deep/30 px-7 py-3.5 font-sans text-base font-semibold text-parchment backdrop-blur-sm transition-colors hover:bg-navy-deep/60"
              >
                Take the Quiz
              </Link>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="relative border-t border-gold/30 bg-navy-deep/80 backdrop-blur-md">
          <div className="mx-auto grid max-w-7xl grid-cols-3 gap-2 px-4 py-6 md:px-8">
            {[
              { n: "6", l: "Exhibits" },
              { n: "18+", l: "Artifacts" },
              { n: "400 yrs", l: "of History" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="font-display text-3xl font-bold text-gold md:text-4xl">{s.n}</div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-parchment/70">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-bold uppercase tracking-[0.3em] text-gold">Welcome</div>
          <h2 className="mt-3 font-display text-4xl font-bold text-navy md:text-5xl">
            Three ways to explore
          </h2>
          <div className="gold-divider mx-auto mt-6 w-32" />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Compass,
              title: "Wander the Halls",
              text: "Six themed exhibits cover the great chapters of American history, each with its own atmosphere.",
            },
            {
              icon: Sparkles,
              title: "Touch the Artifacts",
              text: "Every glowing card hides a story. Click to reveal details, photos, and surprising fun facts.",
            },
            {
              icon: GraduationCap,
              title: "Test Your Knowledge",
              text: "Head to the Quiz Hall when you're ready. Score yourself and try to earn the Curator badge.",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-border bg-card p-7 shadow-museum"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-gold text-navy">
                <f.icon size={22} />
              </div>
              <h3 className="mt-4 font-display text-2xl font-bold text-navy">{f.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED EXHIBITS */}
      <section className="bg-gradient-parchment">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
                The Galleries
              </div>
              <h2 className="mt-2 font-display text-4xl font-bold text-navy md:text-5xl">
                Choose your era
              </h2>
            </div>
            <Link
              to="/timeline"
              className="inline-flex items-center gap-2 rounded-full border border-navy/20 bg-card px-5 py-2.5 text-sm font-semibold text-navy hover:bg-navy hover:text-parchment"
            >
              View timeline <ArrowRight size={15} />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {exhibits.map((e) => (
              <ExhibitCard key={e.slug} exhibit={e} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
