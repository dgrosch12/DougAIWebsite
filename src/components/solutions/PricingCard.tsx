"use client";

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

interface PricingCardProps {
  pricing: string;
  bestFor: string;
  pricingNote?: string;
  slug: string;
  accentColor: string;
  accentRgb: string;
}

const trustSignals = [
  "No contracts",
  "Free AI audit included",
  "Setup in under a week",
];

export default function PricingCard({
  pricing,
  bestFor,
  pricingNote,
  slug,
  accentColor,
  accentRgb,
}: PricingCardProps) {
  return (
    <section className="bg-surface py-16 lg:py-24">
      <div className="mx-auto max-w-xl px-6 lg:px-8">
        <AnimatedSection>
          {/* Gradient border wrapper */}
          <div
            className="rounded-2xl p-px"
            style={{
              background: `linear-gradient(135deg, ${accentColor}, rgba(${accentRgb}, 0.3), ${accentColor})`,
            }}
          >
            <div className="rounded-2xl bg-surface-elevated p-8 text-center lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-wider text-foreground/50">
                Pricing
              </p>
              <p
                className="mt-4 text-4xl font-extrabold sm:text-5xl"
                style={{ color: accentColor }}
              >
                {pricing}
              </p>
              {pricingNote && (
                <p className="mt-2 text-sm text-foreground/50">
                  {pricingNote}
                </p>
              )}
              <span
                className="mt-4 inline-block rounded-full px-4 py-1.5 text-xs font-medium"
                style={{
                  color: accentColor,
                  background: `rgba(${accentRgb}, 0.1)`,
                }}
              >
                Best for: {bestFor}
              </span>

              {/* Trust signals */}
              <div className="mt-6 space-y-2">
                {trustSignals.map((signal) => (
                  <div
                    key={signal}
                    className="flex items-center justify-center gap-2 text-sm text-foreground/60"
                  >
                    <svg
                      className="h-4 w-4 shrink-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      style={{ color: accentColor }}
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {signal}
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href={`/get-started?product=${slug}`}
                  className="inline-block w-full rounded-xl px-10 py-4 text-base font-semibold text-accent-foreground transition-all hover:opacity-90"
                  style={{
                    background: accentColor,
                    boxShadow: `0 8px 24px rgba(${accentRgb}, 0.25)`,
                  }}
                >
                  Get a Free AI Audit
                </Link>
              </div>
              <p className="mt-4 text-sm text-foreground/40">
                No sales calls. Just a Loom video in your inbox within 24 hours.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
