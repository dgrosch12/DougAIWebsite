"use client";

import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    number: "01",
    title: "Audit",
    description:
      "I map your operations end-to-end - tools, handoffs, bottlenecks, and where time is being wasted.",
  },
  {
    number: "02",
    title: "Discovery",
    description:
      "We define what success looks like, scope the build, and align on timeline and budget.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "I design and deploy your custom AI system using n8n, Supabase, and leading AI APIs.",
  },
  {
    number: "04",
    title: "Monitor",
    description:
      "Your system goes live with monitoring, support, and continuous optimization.",
  },
];

export default function Process() {
  return (
    <section className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            <p className="section-label">Process</p>
            <h2 className="mt-3 headline-xl text-heading">How I Work</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/70">
              A proven four-step process that takes you from operational bottleneck to AI-powered efficiency.
            </p>
          </div>
        </AnimatedSection>

        {/* Desktop: horizontal timeline */}
        <div className="mt-16 hidden md:block">
          <div className="relative">
            {/* Connector line */}
            <div className="absolute top-12 left-0 right-0 h-px bg-border" />

            <div className="grid grid-cols-4 gap-6">
              {steps.map((step, i) => (
                <AnimatedSection key={step.number} delay={i * 0.1}>
                  <div className="relative flex flex-col h-full">
                    {/* Number circle */}
                    <div className="relative z-10 mx-auto flex h-24 w-24 items-center justify-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-highlight-soft text-sm font-bold text-heading">
                        {step.number}
                      </div>
                    </div>

                    {/* Card */}
                    <div className="mt-4 flex-1 rounded-2xl border border-border bg-surface-elevated p-6 transition-all hover:border-accent/30 hover:shadow-sm">
                      <h3 className="text-lg font-bold text-heading">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-[0.9375rem] text-foreground/60 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="mt-14 md:hidden">
          <div className="relative">
            {/* Vertical connector */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-8">
              {steps.map((step, i) => (
                <AnimatedSection key={step.number} delay={i * 0.1}>
                  <div className="relative flex gap-5 pl-0">
                    {/* Number circle */}
                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-highlight-soft text-sm font-bold text-heading">
                      {step.number}
                    </div>

                    {/* Card */}
                    <div className="flex-1 rounded-2xl border border-border bg-surface-elevated p-5">
                      <h3 className="text-lg font-bold text-heading">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-[0.9375rem] text-foreground/60 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
