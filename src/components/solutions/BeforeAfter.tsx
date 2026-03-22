"use client";

import type { BeforeAfterItem } from "@/lib/products";
import AnimatedSection from "@/components/AnimatedSection";

interface BeforeAfterProps {
  items: BeforeAfterItem[];
  accentColor: string;
  accentRgb: string;
}

export default function BeforeAfter({
  items,
  accentColor,
  accentRgb,
}: BeforeAfterProps) {
  return (
    <section className="bg-surface py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <AnimatedSection>
          <h2 className="text-center text-2xl font-bold text-heading sm:text-3xl">
            Without It vs. With It
          </h2>
        </AnimatedSection>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* Without column */}
          <AnimatedSection delay={0.1}>
            <div className="rounded-2xl border-t-4 border-t-red-500 bg-surface-elevated shadow-sm">
              <div className="divide-y divide-border">
                {items.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 px-6 py-5">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-500/10">
                      <svg
                        className="h-4 w-4 text-red-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                      </svg>
                    </div>
                    <p className="text-[0.9375rem] leading-relaxed text-foreground/70">
                      {item.before}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* With column */}
          <AnimatedSection delay={0.2}>
            <div
              className="rounded-2xl bg-surface-elevated shadow-sm"
              style={{ borderTop: `4px solid ${accentColor}` }}
            >
              <div className="divide-y divide-border">
                {items.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 px-6 py-5">
                    <div
                      className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                      style={{ background: `rgba(${accentRgb}, 0.1)` }}
                    >
                      <svg
                        className="h-4 w-4"
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
                    </div>
                    <p className="text-[0.9375rem] leading-relaxed text-foreground/70">
                      {item.after}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
