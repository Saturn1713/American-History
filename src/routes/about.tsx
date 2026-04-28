import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Eye, Hand, Accessibility, Cpu, Layout, Lightbulb, Wrench } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — American History" },
      {
        name: "description",
        content:
          "About this digital museum: who it's for, how it works, and the design choices behind every gallery.",
      },
      { property: "og:title", content: "About American History Museum" },
      {
        property: "og:description",
        content:
          "A digital museum built for curious learners — accessible, interactive, and beautifully designed.",
      },
    ],
  }),
  component: AboutPage,
});

const sections = [
  {
    icon: BookOpen,
    title: "User Experience",
    text: "Built for learners around age 13. Clear labels, simple navigation, and engaging interactive features keep visitors moving smoothly through every era.",
  },
  {
    icon: Eye,
    title: "Visual Design",
    text: "A museum-quality aesthetic: parchment, antique gold, deep navy, and elegant Playfair Display typography. Artifact images set the mood for every gallery.",
  },
  {
    icon: Hand,
    title: "Interactivity",
    text: "Click any artifact card to open its story. Watch a short video in each gallery's theater. Try the quiz hall to test your knowledge.",
  },
  {
    icon: Accessibility,
    title: "Accessibility",
    text: "High-contrast text, large readable fonts, simple language, alt text on every image, and full keyboard navigation. Designed for every learner.",
  },
  {
    icon: Cpu,
    title: "Technical Functionality",
    text: "Every link and button is tested. Pages load instantly. Videos and images display properly on phones, tablets, and computers alike.",
  },
  {
    icon: Layout,
    title: "Organization",
    text: "Six clearly-labeled exhibits in chronological order, plus a visual timeline and a quiz hall. You always know where you are and what's next.",
  },
  {
    icon: Lightbulb,
    title: "Creativity",
    text: "Rather than a static webpage, this museum reimagines history as a place to walk through — with theatrical lighting, glowing artifacts, and earned badges.",
  },
  {
    icon: Wrench,
    title: "How it was built",
    text: "Built as a fast, modern web app using React and TanStack Router. Hand-illustrated exhibit images, embedded videos, and a custom design system.",
  },
];

function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 md:px-8 md:py-20">
      <div className="text-center">
        <div className="text-xs font-bold uppercase tracking-[0.3em] text-gold">About</div>
        <h1 className="mt-3 font-display text-5xl font-bold text-navy md:text-6xl">
          About the Museum
        </h1>
        <div className="gold-divider mx-auto mt-6 w-40" />
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          A small digital museum dedicated to the story of America — designed to be beautiful,
          accessible, and genuinely fun to explore.
        </p>
        <p className="mx-auto mt-4 max-w-2xl font-serif text-base italic text-navy/80">
          Created by <span className="font-semibold not-italic text-navy">Elias Walid Semaan</span> for a design project.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {sections.map((s) => (
          <div
            key={s.title}
            className="rounded-2xl border border-border bg-card p-6 shadow-museum"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-gold text-navy">
              <s.icon size={20} />
            </div>
            <h3 className="mt-4 font-display text-xl font-bold text-navy">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-14 rounded-3xl bg-gradient-to-br from-navy to-navy-deep p-10 text-center text-parchment shadow-museum">
        <h2 className="font-display text-3xl font-bold text-gold">Ready to explore?</h2>
        <p className="mx-auto mt-3 max-w-xl text-parchment/80">
          Step into any of the six halls — or jump straight to the quiz to see how much you
          already know.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            to="/exhibits"
            className="rounded-full bg-gradient-gold px-6 py-3 font-semibold text-navy shadow-glow"
          >
            Visit the Galleries
          </Link>
          <Link
            to="/quiz"
            className="rounded-full border border-gold/60 px-6 py-3 font-semibold text-parchment hover:bg-navy-deep"
          >
            Take the Quiz
          </Link>
        </div>
      </div>
    </div>
  );
}
