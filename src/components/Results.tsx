"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

interface StatProps {
  value: number;
  suffix: string;
  label: string;
}

function AnimatedCounter({ value, suffix, label }: StatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const end = value;
    const duration = 2000;
    const startTime = Date.now();

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));

      if (progress >= 1) {
        clearInterval(timer);
        setCount(end);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl font-bold sm:text-5xl lg:text-6xl text-accent">
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-foreground/55 font-medium sm:text-base">
        {label}
      </p>
    </div>
  );
}

const stats: StatProps[] = [
  { value: 23, suffix: "+", label: "Automation systems deployed" },
  { value: 10, suffix: "s", label: "Average lead response time" },
  { value: 150, suffix: "+", label: "Blog posts published per month" },
  { value: 40, suffix: "+", label: "Hours saved per client monthly" },
];

const testimonials = [
  {
    quote:
      "Douglas built our speed-to-lead system and our close rate jumped 35% in the first month. We were leaving so much money on the table before.",
    name: "Marcus T.",
    company: "Elite HVAC Solutions",
    industry: "Home Services",
    initials: "MT",
    colorClass: "bg-accent/15 text-accent",
  },
  {
    quote:
      "We went from publishing 4 blog posts a month to 30+ — all optimized, on-brand, and hands-free. Our organic traffic tripled in 90 days.",
    name: "Sarah K.",
    company: "Bright Digital Agency",
    industry: "Marketing Agency",
    initials: "SK",
    colorClass: "bg-accent-warm/15 text-accent-warm",
  },
  {
    quote:
      "The hiring system saved us easily 20 hours a week on screening. We found our best hire in years through Douglas's automated ranking system.",
    name: "James R.",
    company: "Apex Staffing Group",
    industry: "Recruiting",
    initials: "JR",
    colorClass: "bg-[#8B5CF6]/15 text-[#8B5CF6]",
  },
];

export default function Results() {
  return (
    <section id="results" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            <span className="section-eyebrow text-accent">RESULTS</span>
            <h2 className="text-3xl font-bold tracking-tight text-heading sm:text-4xl">
              What Happens When You{" "}
              <span className="gradient-text">Automate</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="section-container mt-14">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-10">
            {stats.map((stat, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <AnimatedCounter {...stat} />
              </AnimatedSection>
            ))}
          </div>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="relative flex h-full flex-col rounded-xl border border-border bg-surface p-7 lg:p-8 transition-colors hover:border-border-hover">
                <span className="absolute top-5 left-7 text-5xl font-bold leading-none text-accent/15">
                  &ldquo;
                </span>

                <div className="relative flex flex-1 flex-col pt-7">
                  <p className="flex-1 text-[0.9375rem] leading-relaxed text-foreground/70">
                    {testimonial.quote}
                  </p>

                  <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                    <div
                      className={`flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold ${testimonial.colorClass}`}
                    >
                      {testimonial.initials}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-heading">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-foreground/50">
                        {testimonial.company} · {testimonial.industry}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
