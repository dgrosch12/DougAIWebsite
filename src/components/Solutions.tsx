"use client";

import Link from "next/link";
import AnimatedSection from "./AnimatedSection";
import { products, cardThemes } from "@/lib/products";

const cardIcons = [
  <svg
    key="bolt"
    className="h-6 w-6"
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
  </svg>,
  <svg
    key="doc"
    className="h-6 w-6"
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
  </svg>,
  <svg
    key="people"
    className="h-6 w-6"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
    />
  </svg>,
  <svg
    key="search"
    className="h-6 w-6"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
    />
  </svg>,
  <svg
    key="wrench"
    className="h-6 w-6"
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
  </svg>,
];

function ProductCard({ index }: { index: number }) {
  const product = products[index];
  const theme = cardThemes[index];

  return (
    <AnimatedSection delay={index * 0.08}>
      <Link href={`/solutions/${product.slug}`} className="block h-full">
        <div
          className={`group relative flex h-full flex-col rounded-xl border p-7 lg:p-8 transition-colors ${theme.tintClass}`}
        >
          <div className="flex flex-1 flex-col">
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-lg ${theme.iconBg} ${theme.iconColor}`}
            >
              {cardIcons[index]}
            </div>

            <h3 className="mt-5 text-xl lg:text-[1.375rem] font-bold text-heading">
              {product.name}
            </h3>

            <p className="mt-2.5 flex-1 text-[0.9375rem] text-foreground/60 leading-relaxed">
              {product.tagline}
            </p>

            <div className="mt-5">
              <span
                className="inline-flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-3"
                style={{ color: theme.accentColor }}
              >
                Learn More
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
        </div>
      </Link>
    </AnimatedSection>
  );
}

export default function Solutions() {
  return (
    <section id="solutions" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            <span className="section-eyebrow text-accent">SOLUTIONS</span>
            <h2 className="text-3xl font-bold tracking-tight text-heading sm:text-4xl lg:text-5xl">
              AI Systems You Can Buy{" "}
              <span className="gradient-text">Today</span>
            </h2>
            <p className="mt-4 text-lg text-foreground/60">
              Productized solutions — pick what you need, deployed in days.
            </p>
          </div>
        </AnimatedSection>

        <div className="section-container mt-14">
          <div className="grid gap-6 md:grid-cols-2">
            {products.slice(0, 4).map((_, i) => (
              <ProductCard key={i} index={i} />
            ))}
          </div>
          <div className="mt-6">
            <ProductCard index={4} />
          </div>
        </div>
      </div>
    </section>
  );
}
