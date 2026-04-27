import { createFileRoute, Link } from "@tanstack/react-router";
import { exhibits } from "@/data/exhibits";

export const Route = createFileRoute("/timeline")({
  head: () => ({
    meta: [
      { title: "Timeline of American History — The American Story" },
      {
        name: "description",
        content:
          "An illustrated timeline of American history from 1607 to today, with quick links into each museum exhibit.",
      },
      { property: "og:title", content: "Timeline of American History" },
      {
        property: "og:description",
        content: "From colonial settlements to the smartphone era — 400 years at a glance.",
      },
    ],
  }),
  component: TimelinePage,
});

function TimelinePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 md:px-8 md:py-20">
      <div className="text-center">
        <div className="text-xs font-bold uppercase tracking-[0.3em] text-gold">Walk the Years</div>
        <h1 className="mt-3 font-display text-5xl font-bold text-navy md:text-6xl">
          Timeline of America
        </h1>
        <div className="gold-divider mx-auto mt-6 w-40" />
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
          Six chapters, four centuries, one unfolding story.
        </p>
      </div>

      <ol className="relative mt-16">
        {/* central line */}
        <span
          aria-hidden
          className="pointer-events-none absolute left-6 top-0 h-full w-1 rounded bg-gradient-to-b from-gold via-gold/50 to-transparent md:left-1/2 md:-translate-x-1/2"
        />

        {exhibits.map((e, i) => (
          <li key={e.slug} className="relative mb-12 md:mb-16">
            <div
              className={`flex items-start gap-6 md:items-center ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* dot */}
              <div className="absolute left-6 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-4 border-parchment bg-gradient-gold font-display text-lg font-bold text-navy shadow-glow md:left-1/2">
                {i + 1}
              </div>

              {/* card */}
              <div className="ml-16 flex-1 md:ml-0 md:w-1/2">
                <Link
                  to="/exhibits/$slug"
                  params={{ slug: e.slug }}
                  className="group block overflow-hidden rounded-2xl border border-border bg-card shadow-museum transition-all hover:-translate-y-1 hover:shadow-glow"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={e.image}
                      alt={e.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${e.accent} mix-blend-multiply`}
                    />
                  </div>
                  <div className="p-5">
                    <div className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
                      {e.era}
                    </div>
                    <h3 className="mt-1 font-display text-2xl font-bold text-navy">{e.title}</h3>
                    <p className="mt-2 text-sm italic text-muted-foreground">{e.tagline}</p>
                  </div>
                </Link>
              </div>

              {/* spacer for alternating layout */}
              <div className="hidden md:block md:w-1/2" />
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
