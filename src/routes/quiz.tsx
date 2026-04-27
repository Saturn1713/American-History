import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { CheckCircle2, XCircle, Trophy, RotateCcw } from "lucide-react";

export const Route = createFileRoute("/quiz")({
  head: () => ({
    meta: [
      { title: "Quiz Hall — The American Story" },
      {
        name: "description",
        content:
          "Test your knowledge of American history with an interactive 8-question quiz spanning the colonies to the modern day.",
      },
      { property: "og:title", content: "Quiz Hall — The American Story" },
      {
        property: "og:description",
        content: "Eight questions, four centuries, one badge. Can you become a Curator?",
      },
    ],
  }),
  component: QuizPage,
});

type Question = {
  q: string;
  options: string[];
  answer: number;
  explain: string;
};

const QUESTIONS: Question[] = [
  {
    q: "In what year was the Declaration of Independence signed?",
    options: ["1492", "1620", "1776", "1812"],
    answer: 2,
    explain: "Signed on July 4, 1776 — America's birthday.",
  },
  {
    q: "Who was the first President of the United States?",
    options: ["Thomas Jefferson", "George Washington", "Benjamin Franklin", "John Adams"],
    answer: 1,
    explain: "George Washington took office in 1789.",
  },
  {
    q: "What ship brought the Pilgrims to America in 1620?",
    options: ["Santa María", "The Mayflower", "HMS Victory", "The Constitution"],
    answer: 1,
    explain: "The Mayflower carried 102 passengers to Plymouth.",
  },
  {
    q: "Which President wrote the Emancipation Proclamation?",
    options: ["Andrew Jackson", "Ulysses S. Grant", "Abraham Lincoln", "Theodore Roosevelt"],
    answer: 2,
    explain: "Lincoln signed it on January 1, 1863.",
  },
  {
    q: "In what year did the U.S. land astronauts on the Moon?",
    options: ["1957", "1961", "1969", "1975"],
    answer: 2,
    explain: "Apollo 11's Neil Armstrong stepped onto the Moon on July 20, 1969.",
  },
  {
    q: "Who delivered the famous 'I Have a Dream' speech in 1963?",
    options: [
      "Malcolm X",
      "Rosa Parks",
      "Martin Luther King Jr.",
      "John F. Kennedy",
    ],
    answer: 2,
    explain: "Dr. King spoke to 250,000 people at the Lincoln Memorial.",
  },
  {
    q: "How many original colonies became the first U.S. states?",
    options: ["7", "10", "13", "16"],
    answer: 2,
    explain: "13 colonies — represented by the 13 stripes on the U.S. flag.",
  },
  {
    q: "What 1849 event sent 300,000 people rushing to California?",
    options: [
      "The transcontinental railroad",
      "The California Gold Rush",
      "The Louisiana Purchase",
      "The Oregon Treaty",
    ],
    answer: 1,
    explain: "Gold was discovered at Sutter's Mill in 1848 — the rush began the next year.",
  },
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function QuizPage() {
  const [seed, setSeed] = useState(0);
  const questions = useMemo(() => shuffle(QUESTIONS), [seed]);
  const [step, setStep] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const current = questions[step];

  function pick(i: number) {
    if (picked !== null) return;
    setPicked(i);
    if (i === current.answer) setScore((s) => s + 1);
  }

  function next() {
    if (step < questions.length - 1) {
      setStep(step + 1);
      setPicked(null);
    } else {
      setDone(true);
    }
  }

  function reset() {
    setSeed((s) => s + 1);
    setStep(0);
    setPicked(null);
    setScore(0);
    setDone(false);
  }

  if (done) {
    const percent = Math.round((score / questions.length) * 100);
    const badge =
      percent === 100
        ? { label: "Curator", emoji: "🏛️", note: "A perfect score! You know your history." }
        : percent >= 75
        ? { label: "Historian", emoji: "📚", note: "Excellent work — almost a master." }
        : percent >= 50
        ? { label: "Apprentice", emoji: "🔍", note: "A good start — try another walk through the halls!" }
        : { label: "Visitor", emoji: "🎟️", note: "Welcome! Explore the exhibits and try again." };

    return (
      <div className="mx-auto max-w-2xl px-4 py-20 md:px-8">
        <div className="rounded-3xl border border-border bg-card p-10 text-center shadow-museum fade-in-up">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-gold text-3xl shadow-glow">
            <Trophy className="text-navy" size={36} />
          </div>
          <div className="mt-6 text-xs font-bold uppercase tracking-[0.3em] text-gold">
            Your Result
          </div>
          <h1 className="mt-2 font-display text-5xl font-bold text-navy">
            {score} / {questions.length}
          </h1>
          <div className="gold-divider mx-auto mt-6 w-32" />
          <div className="mt-6 text-6xl">{badge.emoji}</div>
          <div className="mt-2 font-display text-3xl font-bold text-navy">{badge.label}</div>
          <p className="mt-3 text-muted-foreground">{badge.note}</p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button
              onClick={reset}
              className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 font-semibold text-parchment hover:bg-navy-deep"
            >
              <RotateCcw size={16} /> Try Again
            </button>
            <Link
              to="/exhibits"
              className="inline-flex items-center gap-2 rounded-full border border-navy/20 bg-card px-6 py-3 font-semibold text-navy hover:bg-secondary"
            >
              Back to Exhibits
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 md:px-8 md:py-20">
      <div className="text-center">
        <div className="text-xs font-bold uppercase tracking-[0.3em] text-gold">Quiz Hall</div>
        <h1 className="mt-3 font-display text-4xl font-bold text-navy md:text-5xl">
          Test Your Knowledge
        </h1>
      </div>

      {/* progress */}
      <div className="mt-10">
        <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          <span>
            Question {step + 1} of {questions.length}
          </span>
          <span>Score: {score}</span>
        </div>
        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-secondary">
          <div
            className="h-full bg-gradient-gold transition-all duration-500"
            style={{ width: `${((step + (picked !== null ? 1 : 0)) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* question card */}
      <div key={step} className="mt-8 rounded-2xl border border-border bg-card p-8 shadow-museum fade-in-up">
        <h2 className="font-display text-2xl font-bold text-navy md:text-3xl text-balance">
          {current.q}
        </h2>

        <div className="mt-6 grid gap-3">
          {current.options.map((opt, i) => {
            const isCorrect = i === current.answer;
            const isPicked = picked === i;
            const reveal = picked !== null;

            const base =
              "flex w-full items-center justify-between rounded-xl border-2 px-5 py-4 text-left font-serif text-base transition-all";
            let style = "border-border bg-secondary/40 hover:border-gold hover:bg-secondary";

            if (reveal && isCorrect) style = "border-emerald-600 bg-emerald-50 text-emerald-900";
            else if (reveal && isPicked && !isCorrect)
              style = "border-crimson bg-red-50 text-red-900";
            else if (reveal) style = "border-border bg-secondary/30 text-muted-foreground";

            return (
              <button
                key={i}
                onClick={() => pick(i)}
                disabled={picked !== null}
                className={`${base} ${style}`}
              >
                <span>{opt}</span>
                {reveal && isCorrect && <CheckCircle2 size={20} className="text-emerald-600" />}
                {reveal && isPicked && !isCorrect && (
                  <XCircle size={20} className="text-crimson" />
                )}
              </button>
            );
          })}
        </div>

        {picked !== null && (
          <div className="mt-6 rounded-xl border-l-4 border-gold bg-gradient-parchment p-4 fade-in-up">
            <div className="text-[11px] font-bold uppercase tracking-wider text-gold">
              {picked === current.answer ? "Correct!" : "Not quite"}
            </div>
            <p className="mt-1 text-sm text-foreground">{current.explain}</p>
          </div>
        )}

        {picked !== null && (
          <button
            onClick={next}
            className="mt-6 w-full rounded-full bg-navy px-6 py-3.5 font-semibold text-parchment transition-colors hover:bg-navy-deep"
          >
            {step < questions.length - 1 ? "Next Question →" : "See My Result"}
          </button>
        )}
      </div>
    </div>
  );
}
