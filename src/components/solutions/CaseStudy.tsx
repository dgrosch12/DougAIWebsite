"use client";

import type { CaseStudyData } from "@/lib/products";
import AnimatedSection from "@/components/AnimatedSection";

interface CaseStudyProps {
  caseStudy: CaseStudyData;
  accentColor: string;
  accentRgb: string;
}

export default function CaseStudy({
  caseStudy,
  accentColor,
  accentRgb,
}: CaseStudyProps) {
  return (
    <section className="relative overflow-hidden bg-[#172B36] py-16 lg:py-24">
      {/* Subtle radial gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/80">
              Case Study &middot; {caseStudy.industry}
            </span>
            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl">
              {caseStudy.headline}
            </h2>
          </div>
        </AnimatedSection>

        <div className="mt-12">
          <div className="flex flex-wrap items-center justify-center gap-y-8 divide-white/10 md:flex-nowrap md:divide-x">
            {caseStudy.metrics.map((metric, i) => (
              <AnimatedSection
                key={i}
                delay={0.1 + i * 0.1}
                className="w-1/2 px-6 text-center md:w-auto md:flex-1"
              >
                <p
                  className="text-4xl font-extrabold sm:text-5xl"
                  style={{ color: accentColor }}
                >
                  {metric.value}
                </p>
                <p className="mt-2 text-sm text-white/55">{metric.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>

        <AnimatedSection delay={0.3}>
          <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-relaxed text-white/60">
            {caseStudy.description}
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
