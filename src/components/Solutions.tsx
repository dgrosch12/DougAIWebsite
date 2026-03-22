"use client";

import Link from "next/link";
import AnimatedSection from "./AnimatedSection";
import { products, cardThemes } from "@/lib/products";

const cardIcons: Record<string, React.ReactElement> = {
  // Bolt - Speed to Lead
  bolt: (
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
        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
      />
    </svg>
  ),
  // Document - Blog
  doc: (
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
  // Headset - Call Transcript
  headset: (
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
        d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M8.25 3a9 9 0 019.5 0M3.75 12.75V12a8.25 8.25 0 0116.5 0v.75m-16.5 0a2.25 2.25 0 00-2.25 2.25v.75a2.25 2.25 0 002.25 2.25h.75m15.75-5.25a2.25 2.25 0 012.25 2.25v.75a2.25 2.25 0 01-2.25 2.25h-.75"
      />
    </svg>
  ),
  // Globe - Website Foundation
  globe: (
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
        d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 003 12c0-1.605.42-3.113 1.157-4.418"
      />
    </svg>
  ),
  // Target - Lead Sourcing
  target: (
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
        d="M12 12m-3 0a3 3 0 106 0 3 3 0 10-6 0m3-7.5a7.5 7.5 0 107.5 7.5M12 4.5A7.5 7.5 0 0119.5 12M12 1.5a10.5 10.5 0 1010.5 10.5M12 1.5A10.5 10.5 0 0122.5 12"
      />
    </svg>
  ),
  // Calendar/Mic - Meeting Summarizer
  mic: (
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
        d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 1.5a3 3 0 00-3 3v6a3 3 0 006 0v-6a3 3 0 00-3-3z"
      />
    </svg>
  ),
  // Wrench - Custom Build
  wrench: (
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
        d="M11.42 15.17l-5.25 5.25a2.121 2.121 0 01-3-3l5.25-5.25m3-3l2.83-2.83a2.121 2.121 0 013 0l.17.17a2.121 2.121 0 010 3l-2.83 2.83m-3-3l3 3M3.375 7.5h3.008c.478 0 .936.19 1.273.529l.454.454a1.8 1.8 0 001.274.529h1.99a1.8 1.8 0 001.273-.529l.454-.454c.338-.339.795-.529 1.273-.529H17.25"
      />
    </svg>
  ),
};

const iconMap: string[] = [
  "bolt",
  "doc",
  "headset",
  "globe",
  "target",
  "mic",
  "wrench",
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
      <Link href={`/solutions/${product.slug}`} className="block h-full">
        <div
          className={`solution-card group relative flex h-full flex-col rounded-2xl border bg-surface-elevated transition-all duration-300 hover:shadow-sm ${
            isComingSoon
              ? "border-dashed border-border/60 hover:border-accent/20"
              : "border-border hover:border-accent/30"
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

          {/* Icon area */}
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

            <p className="mt-3 flex-1 text-[0.9375rem] text-foreground/60 leading-relaxed line-clamp-3">
              {product.tagline}
            </p>

            {/* Bottom row */}
            <div className="mt-6 flex items-center justify-between">
              <span
                className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-300 group-hover:gap-3"
                style={{
                  backgroundColor: `${theme.accentColor}15`,
                  color: theme.accentColor,
                }}
              >
                {isComingSoon ? "Get Notified" : "Learn More"}
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 10h10m-4-4l4 4-4 4"
                  />
                </svg>
              </span>
              {!isComingSoon && (
                <span className="text-xs font-medium text-foreground/40">
                  {extractStartingPrice(product.pricing)}
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </AnimatedSection>
  );
}

function extractStartingPrice(pricing: string): string {
  const match = pricing.match(/\$[\d,]+/);
  return match ? `From ${match[0]}` : "";
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
              Productized AI systems. Pick what fits — running in your business
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
          <div className="mt-12">
            <Link href={`/solutions/${customBuild.slug}`} className="block">
              <div className="group relative rounded-2xl border border-border bg-surface-elevated p-8 lg:p-10 transition-all duration-300 hover:border-accent/30 hover:shadow-sm">
                <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:text-left">
                  <div
                    className={`inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${cardThemes[customBuildIndex].iconBg} ${cardThemes[customBuildIndex].iconColor}`}
                  >
                    {cardIcons[iconMap[customBuildIndex]]}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl lg:text-2xl font-bold text-heading">
                      Don&apos;t see what you need?
                    </h3>
                    <p className="mt-2 text-foreground/60">
                      {customBuild.heroDescription}
                    </p>
                  </div>
                  <span
                    className="inline-flex shrink-0 items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-300 group-hover:gap-3"
                    style={{
                      backgroundColor: `${cardThemes[customBuildIndex].accentColor}15`,
                      color: cardThemes[customBuildIndex].accentColor,
                    }}
                  >
                    Tell Me About It
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 10h10m-4-4l4 4-4 4"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
