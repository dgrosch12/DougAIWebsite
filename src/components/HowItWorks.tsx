"use client";

import AnimatedSection from "./AnimatedSection";

const stepColors = [
  { bg: "bg-accent", bgLight: "bg-accent/10", text: "text-accent" },
  {
    bg: "bg-[#8B5CF6]",
    bgLight: "bg-[#8B5CF6]/10",
    text: "text-[#8B5CF6]",
  },
  {
    bg: "bg-[#10B981]",
    bgLight: "bg-[#10B981]/10",
    text: "text-[#10B981]",
  },
];

const steps = [
  {
    number: "01",
    title: "Tell Me About Your Business",
    description:
      "Fill out the intake form. I'll review your operations and identify the highest-impact automation opportunities.",
    icon: (
      <svg
        className="h-7 w-7"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Get a Personalized Walkthrough",
    description:
      "Within 24 hours, you'll receive a custom Loom video showing exactly what I'd build and the ROI you can expect.",
    icon: (
      <svg
        className="h-7 w-7"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Go Live in Days",
    description:
      "I deploy your system, train you on how it works, and provide ongoing support to keep it running smoothly.",
    icon: (
      <svg
        className="h-7 w-7"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
        />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 lg:py-32 bg-surface-alt">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            <span className="section-eyebrow text-accent">PROCESS</span>
            <h2 className="text-3xl font-bold tracking-tight text-heading sm:text-4xl">
              How It Works
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground/60">
              From first call to live system — in days, not months.
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-14 grid gap-10 lg:gap-12 md:grid-cols-3">
          {steps.map((step, i) => {
            const color = stepColors[i];
            return (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="relative flex h-full flex-col items-center text-center">
                  {i < steps.length - 1 && (
                    <div className="absolute left-1/2 top-12 hidden h-[2px] w-full bg-gradient-to-r from-accent/20 via-[#8B5CF6]/15 to-[#10B981]/20 md:block" />
                  )}

                  <div className="relative flex h-24 w-24 items-center justify-center">
                    <div
                      className={`absolute inset-0 rounded-2xl ${color.bgLight}`}
                    />
                    <span
                      className={`absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full ${color.bg} text-xs font-bold text-accent-foreground`}
                    >
                      {step.number}
                    </span>
                    <div className={`relative ${color.text}`}>{step.icon}</div>
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-heading">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-foreground/60 text-[0.9375rem] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
