import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MessageSquare, Star } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

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

const feedbackSchema = z.object({
  name: z.string().trim().nonempty({ message: "Please enter your name" }).max(100),
  email: z.string().trim().email({ message: "Please enter a valid email" }).max(255),
  rating: z.number().min(1, { message: "Please pick a rating" }).max(5),
  message: z
    .string()
    .trim()
    .nonempty({ message: "Please share your feedback" })
    .max(1000, { message: "Feedback must be under 1000 characters" }),
});

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = feedbackSchema.safeParse({ name, email, rating, message });
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }
    setSubmitting(true);
    // No backend wired yet — acknowledge locally.
    setTimeout(() => {
      toast.success("Thank you! Your feedback has been received.");
      setName("");
      setEmail("");
      setRating(0);
      setMessage("");
      setSubmitting(false);
    }, 400);
  };

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

      <div className="gold-divider mt-16" />

      <div className="mt-10">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy text-parchment ring-2 ring-gold/60">
            <MessageSquare size={20} />
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-navy md:text-3xl">
              Share Your Feedback
            </h2>
            <p className="text-sm text-foreground/70">
              Tell us what you loved or what we could improve.
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5 rounded-xl border border-border bg-card p-6 shadow-sm md:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="fb-name">Name</Label>
              <Input
                id="fb-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                maxLength={100}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="fb-email">Email</Label>
              <Input
                id="fb-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                maxLength={255}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Rating</Label>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((n) => {
                const filled = (hoverRating || rating) >= n;
                return (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setRating(n)}
                    onMouseEnter={() => setHoverRating(n)}
                    onMouseLeave={() => setHoverRating(0)}
                    aria-label={`${n} star${n > 1 ? "s" : ""}`}
                    className="rounded p-1 transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    <Star
                      size={26}
                      className={
                        filled ? "fill-gold text-gold" : "text-muted-foreground"
                      }
                    />
                  </button>
                );
              })}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="fb-message">Your feedback</Label>
            <Textarea
              id="fb-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="What did you think of the exhibits?"
              rows={5}
              maxLength={1000}
              required
            />
            <div className="text-right text-xs text-muted-foreground">
              {message.length}/1000
            </div>
          </div>

          <Button
            type="submit"
            disabled={submitting}
            className="bg-navy text-parchment hover:bg-navy/90"
          >
            {submitting ? "Sending..." : "Send Feedback"}
          </Button>
        </form>
      </div>
    </section>
  );
}
