"use client";

import AnimatedSection from "./AnimatedSection";
import { products, cardThemes } from "@/lib/products";

/* ── Icons ──
   Custom SVGs — stopwatch for speed, pen for writing, phone+wave for calls,
   stacked layers for foundations, radar sweep for sourcing, chat-sparkle for
   meeting summaries, puzzle piece for custom builds. */

const cardIcons: Record<string, React.ReactElement> = {
  stopwatch: (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="13" r="8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 9v4l2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 2h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 2v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M19.5 6.5l1-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  quill: (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none">
      <path d="M17 3a2.828 2.828 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 5l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  phonwave: (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14.5 2v4M17 2v6M19.5 2v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
    </svg>
  ),
  layers: (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  radar: (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      <path d="M12 2a10 10 0 0110 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 6a6 6 0 016 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
    </svg>
  ),
  summarize: (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 10h6M9 13h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M17 6l.5-1.5L19 4l-1.5-.5L17 2l-.5 1.5L15 4l1.5.5L17 6z" fill="currentColor" opacity="0.5" />
    </svg>
  ),
  puzzle: (
    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none">
      <path d="M20 7V5a2 2 0 00-2-2h-3a2.5 2.5 0 00-5 0H7a2 2 0 00-2 2v3a2.5 2.5 0 000 5v3a2 2 0 002 2h3a2.5 2.5 0 005 0h3a2 2 0 002-2v-3a2.5 2.5 0 000-5V7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

const iconMap: string[] = [
  "stopwatch",
  "quill",
  "phonwave",
  "layers",
  "radar",
  "summarize",
  "puzzle",
];

const availableProducts = products.filter((p) => p.status === "available" && p.slug !== "custom-build");
const comingSoonProducts = products.filter((p) => p.status === "coming-soon");
const customBuild = products.find((p) => p.slug === "custom-build")!;
const customBuildIndex = products.findIndex((p) => p.slug === "custom-build");

function ProductCard({
  productIndex,
  isComingSoon,
}: {
  productIndex: number;
  isComingSoon?: boolean;
}) {
  const product = products[productIndex];
  const theme = cardThemes[productIndex];
  const iconKey = iconMap[productIndex];

  return (
    <AnimatedSection>
      <div
        className={`relative flex h-full flex-col rounded-2xl border bg-surface-elevated transition-all duration-300 ${
          isComingSoon
            ? "border-dashed border-border/60"
            : "border-border"
        }`}
      >
        {isComingSoon && (
          <div className="absolute top-4 right-4 z-10">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-2.5 py-1 text-[0.6875rem] font-semibold uppercase tracking-wider text-amber-600">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
              Coming Soon
            </span>
          </div>
        )}

        {/* Icon */}
        <div className="px-7 pt-7 lg:px-8 lg:pt-8">
          <div
            className={`inline-flex h-14 w-14 items-center justify-center rounded-xl ${theme.iconBg} ${theme.iconColor}`}
          >
            {cardIcons[iconKey]}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col px-7 pb-7 pt-5 lg:px-8 lg:pb-8">
          <h3 className="text-xl lg:text-2xl font-bold text-heading leading-tight">
            {product.name}
          </h3>

          <p className="mt-3 flex-1 text-[0.9375rem] text-foreground/60 leading-relaxed">
            {product.tagline}
          </p>

        </div>
      </div>
    </AnimatedSection>
  );
}

export default function Solutions() {
  return (
    <section id="solutions" className="relative py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            <p className="section-label">Solutions</p>
            <h2 className="mt-3 headline-xl text-heading">
              What I{" "}
              <span className="gradient-text">Build</span>
            </h2>
            <p className="mt-4 text-lg text-foreground/60">
              Productized AI systems. Pick what fits - running in your business
              within days.
            </p>
          </div>
        </AnimatedSection>

        {/* Built & Running */}
        <div className="mt-14">
          <AnimatedSection>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground/40 mb-6">
              Built &amp; Running
            </h3>
          </AnimatedSection>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {availableProducts.map((product) => {
              const idx = products.indexOf(product);
              return <ProductCard key={product.slug} productIndex={idx} />;
            })}
          </div>
        </div>

        {/* Coming Soon */}
        <div className="mt-12">
          <AnimatedSection>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground/40 mb-6">
              Coming Soon
            </h3>
          </AnimatedSection>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {comingSoonProducts.map((product) => {
              const idx = products.indexOf(product);
              return (
                <ProductCard
                  key={product.slug}
                  productIndex={idx}
                  isComingSoon
                />
              );
            })}
          </div>
        </div>

        {/* Custom Build CTA */}
        <AnimatedSection>
          <div className="mt-16 relative">
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-[#1A8A9E]/20 via-[#2A7DE1]/20 to-[#1A8A9E]/20 pointer-events-none" />
            <div className="relative rounded-2xl bg-surface-elevated p-8 lg:p-12">
              <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:text-left">
                {/* Icon */}
                <div className="relative shrink-0">
                  <div
                    className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl ${cardThemes[customBuildIndex].iconBg} ${cardThemes[customBuildIndex].iconColor}`}
                  >
                    {cardIcons[iconMap[customBuildIndex]]}
                  </div>
                  <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-[#2A7DE1]/20" />
                  <div className="absolute -bottom-2 -left-2 h-2 w-2 rounded-full bg-[#1A8A9E]/20" />
                </div>

                {/* Copy */}
                <div className="flex-1">
                  <h3 className="text-xl lg:text-2xl font-bold text-heading">
                    Don&apos;t see what you need?
                  </h3>
                  <p className="mt-2 text-foreground/60 max-w-xl">
                    {customBuild.heroDescription}
                  </p>
                </div>

              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
