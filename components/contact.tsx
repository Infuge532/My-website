"use client";

import { useActionState } from "react";
import { Mail, MessageSquare, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { submitContact } from "@/app/actions";

const inputClass =
  "w-full rounded-lg border border-border/50 bg-input px-3 py-2.5 text-sm outline-none transition-all placeholder:text-muted-foreground/50 focus:border-brand/60 focus:ring-2 focus:ring-brand/20";

export function Contact() {
  const [state, action, pending] = useActionState(submitContact, null);

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-40" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent" />

      {/* Glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-brand/8 blur-[100px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* Left */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
              Get in touch
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Ready to get started?
            </h2>
            <p className="mb-8 text-muted-foreground">
              Fill out the form and we&rsquo;ll get back to you within one
              business day with a free quote and a clear path forward.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand/15 ring-1 ring-brand/20">
                  <Mail className="h-4 w-4 text-brand" />
                </div>
                <span>eli@builtforsmallbiz.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand/15 ring-1 ring-brand/20">
                  <MessageSquare className="h-4 w-4 text-brand" />
                </div>
                <span>Usually responds within a few hours</span>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="relative rounded-2xl border border-border/50 bg-card p-8 shadow-2xl">
            {/* Gradient top border */}
            <div className="absolute inset-x-0 top-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-brand/50 to-transparent" />

            {state?.success ? (
              <div className="flex flex-col items-center py-10 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand/15 ring-1 ring-brand/30">
                  <CheckCircle2 className="h-8 w-8 text-brand" />
                </div>
                <h3 className="text-xl font-bold mb-2">Message received!</h3>
                <p className="text-muted-foreground">
                  We&rsquo;ll be in touch within one business day.
                </p>
              </div>
            ) : (
              <form action={action} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                      Name <span className="text-brand">*</span>
                    </label>
                    <input id="name" name="name" required className={inputClass} placeholder="Jane Smith" />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                      Email <span className="text-brand">*</span>
                    </label>
                    <input id="email" name="email" type="email" required className={inputClass} placeholder="jane@yourbiz.com" />
                  </div>
                </div>

                <div>
                  <label htmlFor="business" className="mb-1.5 block text-sm font-medium">
                    Business Name
                  </label>
                  <input id="business" name="business" className={inputClass} placeholder="Acme Plumbing Co." />
                </div>

                <div>
                  <label htmlFor="budget" className="mb-1.5 block text-sm font-medium">
                    Budget
                  </label>
                  <select id="budget" name="budget" className={inputClass}>
                    <option value="">Select a range</option>
                    <option>Under $1,000</option>
                    <option>$1,000 – $2,000</option>
                    <option>$2,000 – $3,000</option>
                    <option>$3,000+</option>
                    <option>Not sure yet</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                    Tell us about your project <span className="text-brand">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className={`${inputClass} resize-none`}
                    placeholder="What kind of website do you need? What does your business do?"
                  />
                </div>

                {state?.error && (
                  <p className="text-sm text-destructive">{state.error}</p>
                )}

                <Button type="submit" className="w-full shadow-lg shadow-brand/20" disabled={pending}>
                  {pending ? "Sending…" : "Send Message"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
