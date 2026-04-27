import { createFileRoute } from "@tanstack/react-router";
import { exhibits } from "@/data/exhibits";
import { ExhibitCard } from "@/components/ExhibitCard";

export const Route = createFileRoute("/exhibits/")({
  head: () => ({
    meta: [
      { title: "All Exhibits — The American Story" },
      {
        name: "description",
        content:
          "Browse all six exhibits in the digital museum: Colonial America, the Revolution, the Civil War, Westward Expansion, Civil Rights, and Modern America.",
      },
      { property: "og:title", content: "All Exhibits — The American Story" },
      {
        property: "og:description",
        content: "Six immersive exhibits spanning 400 years of American history.",
      },
    ],
  }),
  component: ExhibitsIndex,
});

function ExhibitsIndex() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-20">
      <div className="text-center">
        <div className="text-xs font-bold uppercase tracking-[0.3em] text-gold">Floor Plan</div>
        <h1 className="mt-3 font-display text-5xl font-bold text-navy md:text-6xl">
          The Galleries
        </h1>
        <div className="gold-divider mx-auto mt-6 w-40" />
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Six exhibits, each one a window into a chapter of America's past. Pick a hall to enter.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {exhibits.map((e) => (
          <ExhibitCard key={e.slug} exhibit={e} />
        ))}
      </div>
    </div>
  );
}
