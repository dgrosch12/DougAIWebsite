"use client";

import AnimatedSection from "./AnimatedSection";

export default function HomepageCTA() {
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="rounded-xl border border-border bg-surface p-10 lg:p-16 text-center">
            <h2 className="text-2xl font-bold text-heading sm:text-3xl lg:text-4xl">
              Not sure where to start?
            </h2>
            <p className="mt-4 text-foreground/60 text-lg">
              Book a free 30-minute call and I&apos;ll walk you through
              exactly what I&apos;d automate and the ROI you can expect.
            </p>
            <div className="mt-8">
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, "#contact")}
                className="inline-block rounded-xl bg-accent px-10 py-4 text-[1.0625rem] font-semibold text-accent-foreground transition-all hover:bg-accent-hover"
              >
                Book a Free Strategy Call
              </a>
            </div>
            <p className="mt-4 text-sm text-foreground/40">
              30 minutes. No pressure. Just actionable insights for your business.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
