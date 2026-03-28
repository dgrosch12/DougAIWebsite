"use client";

import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    quote:
      "Douglas built our speed-to-lead system and our close rate jumped 35% in the first month. We were leaving so much money on the table before.",
    name: "Marcus T.",
    company: "Elite HVAC Solutions",
    industry: "Home Services",
    initials: "MT",
  },
  {
    quote:
      "We went from publishing 4 blog posts a month to 30+ - all optimized, on-brand, and hands-free. Our organic traffic tripled in 90 days.",
    name: "Sarah K.",
    company: "Bright Digital Agency",
    industry: "Marketing Agency",
    initials: "SK",
  },
  {
    quote:
      "The hiring system saved us easily 20 hours a week on screening. We found our best hire in years through Douglas's automated ranking system.",
    name: "James R.",
    company: "Apex Staffing Group",
    industry: "Recruiting",
    initials: "JR",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 lg:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            <p className="section-label">Results</p>
            <h2 className="mt-3 headline-xl text-heading">
              What Clients{" "}
              <span className="gradient-text">Are Saying</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="relative flex h-full flex-col rounded-2xl border border-border bg-surface-elevated p-7 lg:p-8 transition-colors hover:border-accent/30">
                <span className="absolute top-5 left-7 text-5xl font-bold leading-none text-highlight/20">
                  &ldquo;
                </span>

                <div className="relative flex flex-1 flex-col pt-7">
                  <p className="flex-1 text-[0.9375rem] leading-relaxed text-foreground/70">
                    {testimonial.quote}
                  </p>

                  <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-highlight-soft/25 text-heading text-xs font-bold">
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

        <AnimatedSection>
          <div className="mt-12 text-center">
            <a
              href="#contact"
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-block rounded-xl bg-accent px-8 py-3.5 text-[0.9375rem] font-semibold text-accent-foreground transition-all hover:bg-accent-hover"
            >
              Book a Call
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
