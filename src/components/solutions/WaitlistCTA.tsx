"use client";

import { useState, FormEvent } from "react";

interface WaitlistCTAProps {
  productName: string;
  accentColor: string;
}

export default function WaitlistCTA({
  productName,
  accentColor,
}: WaitlistCTAProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setSubmitting(true);
    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          interestedProduct: productName,
          formType: "waitlist",
        }),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setSubmitted(true);
    } catch {
      console.error("Waitlist submission failed");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="waitlist" className="py-16 lg:py-24">
      <div className="mx-auto max-w-2xl px-6 lg:px-8">
        <div className="rounded-2xl border border-border bg-surface-elevated p-8 lg:p-12 text-center">
          {submitted ? (
            <>
              <div
                className="mx-auto flex h-14 w-14 items-center justify-center rounded-full"
                style={{ backgroundColor: `${accentColor}15` }}
              >
                <svg
                  className="h-7 w-7"
                  viewBox="0 0 20 20"
                  fill={accentColor}
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="mt-5 text-2xl font-bold text-heading">
                You&apos;re on the list!
              </h3>
              <p className="mt-3 text-foreground/60">
                I&apos;ll email you as soon as {productName} is ready to go.
              </p>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-heading sm:text-3xl">
                Get Notified When This Launches
              </h2>
              <p className="mt-3 text-foreground/60">
                {productName} is currently in development. Drop your email and
                I&apos;ll let you know the moment it&apos;s ready.
              </p>
              <form
                onSubmit={handleSubmit}
                className="mt-8 flex flex-col gap-3 sm:flex-row"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  required
                  className="flex-1 rounded-lg border border-border bg-surface px-4 py-3 text-base text-heading placeholder-foreground/35 transition-all focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/15"
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="rounded-lg px-8 py-3 text-base font-semibold text-white transition-all hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ backgroundColor: accentColor }}
                >
                  {submitting ? "Joining..." : "Notify Me"}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
