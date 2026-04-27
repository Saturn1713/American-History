import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { exhibits, getExhibit } from "@/data/exhibits";
import { ArtifactCard } from "@/components/ArtifactCard";
import { VideoEmbed } from "@/components/VideoEmbed";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/exhibits/$slug")({
  loader: ({ params }) => {
    const exhibit = getExhibit(params.slug);
    if (!exhibit) throw notFound();
    return { exhibit };
  },
  head: ({ loaderData }) => {
    const e = loaderData?.exhibit;
    if (!e) return { meta: [{ title: "Exhibit — The American Story" }] };
    return {
      meta: [
        { title: `${e.title} (${e.era}) — The American Story` },
        { name: "description", content: e.intro },
        { property: "og:title", content: `${e.title} — The American Story` },
        { property: "og:description", content: e.tagline },
        { property: "og:image", content: e.image },
        { name: "twitter:image", content: e.image },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <h1 className="font-display text-4xl font-bold text-navy">Exhibit not found</h1>
      <p className="mt-3 text-muted-foreground">That hall doesn't exist in our museum.</p>
      <Link
        to="/exhibits"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-parchment hover:bg-navy-deep"
      >
        <ArrowLeft size={16} /> Back to all exhibits
      </Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <h1 className="font-display text-3xl font-bold text-navy">Something went wrong</h1>
      <p className="mt-3 text-sm text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: ExhibitPage,
});

function ExhibitPage() {
  const { exhibit } = Route.useLoaderData();
  const idx = exhibits.findIndex((e) => e.slug === exhibit.slug);
  const prev = idx > 0 ? exhibits[idx - 1] : null;
  const next = idx < exhibits.length - 1 ? exhibits[idx + 1] : null;

  return (
    <article>
      {/* HERO */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={exhibit.image}
            alt={exhibit.title}
            className="h-full w-full object-cover ken-burns"
          />
          <div className={`absolute inset-0 bg-gradient-to-t ${exhibit.accent} mix-blend-multiply`} />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/60 to-navy-deep/30" />
        </div>
        <div className="relative mx-auto max-w-5xl px-4 py-24 md:px-8 md:py-32">
          <Link
            to="/exhibits"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-gold hover:text-parchment"
          >
            <ArrowLeft size={14} /> All Exhibits
          </Link>
          <div className="mt-6 fade-in-up">
            <div className="text-sm font-bold uppercase tracking-[0.3em] text-gold">
              {exhibit.era}
            </div>
            <h1 className="mt-3 font-display text-5xl font-bold text-parchment md:text-7xl text-balance">
              {exhibit.title}
            </h1>
            <p className="mt-4 font-display text-2xl italic text-gold-soft md:text-3xl">
              {exhibit.tagline}
            </p>
          </div>
        </div>
      </header>

      {/* INTRO */}
      <section className="mx-auto max-w-3xl px-4 py-16 md:px-8">
        <p className="font-serif text-xl leading-relaxed text-foreground text-pretty md:text-2xl">
          {exhibit.intro}
        </p>
        <div className="gold-divider mt-10" />
      </section>

      {/* ARTIFACTS */}
      <section className="mx-auto max-w-7xl px-4 pb-16 md:px-8">
        <div className="mb-10 text-center">
          <div className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
            On Display
          </div>
          <h2 className="mt-2 font-display text-4xl font-bold text-navy">Artifacts</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Click any artifact to learn its story.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {exhibit.artifacts.map((a) => (
            <ArtifactCard key={a.id} artifact={a} />
          ))}
        </div>
      </section>

      {/* VIDEO */}
      <section className="bg-gradient-parchment">
        <div className="mx-auto max-w-4xl px-4 py-20 md:px-8">
          <div className="mb-8 text-center">
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
              Watch & Learn
            </div>
            <h2 className="mt-2 font-display text-4xl font-bold text-navy">In the Theater</h2>
          </div>
          <VideoEmbed videoId={exhibit.videoId} title={exhibit.videoTitle} />
        </div>
      </section>

      {/* PREV / NEXT */}
      <nav className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid gap-4 sm:grid-cols-2">
          {prev ? (
            <Link
              to="/exhibits/$slug"
              params={{ slug: prev.slug }}
              className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 text-left shadow-museum transition-all hover:border-gold"
            >
              <ArrowLeft className="text-gold" size={22} />
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Previous
                </div>
                <div className="font-display text-lg font-bold text-navy group-hover:text-navy">
                  {prev.title}
                </div>
              </div>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              to="/exhibits/$slug"
              params={{ slug: next.slug }}
              className="group flex items-center justify-end gap-4 rounded-xl border border-border bg-card p-5 text-right shadow-museum transition-all hover:border-gold"
            >
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Next
                </div>
                <div className="font-display text-lg font-bold text-navy">{next.title}</div>
              </div>
              <ArrowRight className="text-gold" size={22} />
            </Link>
          ) : (
            <span />
          )}
        </div>
      </nav>
    </article>
  );
}
