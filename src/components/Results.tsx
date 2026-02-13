"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
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

    let start = 0;
    const end = value;
    const duration = 2000;
    const startTime = Date.now();

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.floor(eased * end);
      setCount(start);

      if (progress >= 1) {
        clearInterval(timer);
        setCount(end);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <p className="stat-glow text-4xl font-bold text-accent sm:text-5xl">
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-[#E8E8ED]/50">{label}</p>
    </div>
  );
}

const stats: StatProps[] = [
  { value: 23, suffix: "+", label: "Automation systems deployed" },
  { value: 10, suffix: "s", label: "Average lead response time" },
  { value: 150, suffix: "+", label: "Blog posts published per month" },
  { value: 40, suffix: "+", label: "Hours saved per client monthly" },
];

/* PLACEHOLDER TESTIMONIALS — Replace with real testimonials */
const testimonials = [
  {
    quote:
      "Douglas built our speed-to-lead system and our close rate jumped 35% in the first month. We were leaving so much money on the table before.",
    name: "Marcus T.",
    company: "Elite HVAC Solutions",
    industry: "Home Services",
  },
  {
    quote:
      "We went from publishing 4 blog posts a month to 30+ — all optimized, on-brand, and hands-free. Our organic traffic tripled in 90 days.",
    name: "Sarah K.",
    company: "Bright Digital Agency",
    industry: "Marketing Agency",
  },
  {
    quote:
      "The hiring system saved us easily 20 hours a week on screening. We found our best hire in years through Douglas's automated ranking system.",
    name: "James R.",
    company: "Apex Staffing Group",
    industry: "Recruiting",
  },
];

export default function Results() {
  return (
    <section id="results" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              What Happens When You{" "}
              <span className="gradient-text">Automate</span>
            </h2>
          </div>
        </AnimatedSection>

        {/* Stats grid */}
        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <AnimatedCounter {...stat} />
            </AnimatedSection>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="glass-card relative rounded-2xl p-8"
              >
                {/* Quote mark */}
                <span className="absolute top-6 left-8 text-5xl font-bold leading-none text-accent-warm/30">
                  &ldquo;
                </span>

                <div className="relative pt-6">
                  {/* PLACEHOLDER — Replace with real testimonial */}
                  <p className="text-sm leading-relaxed text-[#E8E8ED]/60 italic">
                    {testimonial.quote}
                  </p>

                  <div className="mt-6 border-t border-white/[0.06] pt-4">
                    <p className="text-sm font-semibold text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-[#E8E8ED]/40">
                      {testimonial.company} · {testimonial.industry}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
