import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — American History" },
      { name: "description", content: "Get in touch with the American History digital museum team." },
      { property: "og:title", content: "Contact — American History" },
      { property: "og:description", content: "Get in touch with the American History digital museum team." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 md:px-8 md:py-24">
      <h1 className="font-display text-4xl font-bold text-navy md:text-5xl">Contact Us</h1>
      <p className="mt-4 font-serif text-lg text-foreground/80">
        Have a question, suggestion, or want to collaborate on an exhibit? Reach out — we'd love
        to hear from curious minds, teachers, and history fans alike.
      </p>

      <div className="gold-divider mt-10" />

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <a
          href="tel:+971553566057"
          className="group flex items-start gap-4 rounded-xl border border-border bg-card p-6 shadow-sm transition-colors hover:bg-secondary"
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy text-parchment ring-2 ring-gold/60">
            <Phone size={20} />
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Phone</div>
            <div className="mt-1 font-display text-xl font-semibold text-navy group-hover:underline">
              +971 55 356 6057
            </div>
            <div className="mt-1 text-sm text-foreground/70">Tap to call</div>
          </div>
        </a>

        <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-6 shadow-sm">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy text-parchment ring-2 ring-gold/60">
            <Mail size={20} />
          </div>
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Hours</div>
            <div className="mt-1 font-display text-xl font-semibold text-navy">
              Mon – Fri, 9am – 6pm
            </div>
            <div className="mt-1 text-sm text-foreground/70">We reply within one business day</div>
          </div>
        </div>
      </div>
    </section>
  );
}
