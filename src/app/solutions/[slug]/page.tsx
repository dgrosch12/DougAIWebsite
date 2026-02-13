import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { products, cardThemes } from "@/lib/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};

  return {
    title: `${product.name} — Douglas AI`,
    description: product.heroDescription,
    openGraph: {
      title: `${product.name} — Douglas AI`,
      description: product.tagline,
    },
  };
}

const featureIcons = [
  <svg
    key="check"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
      clipRule="evenodd"
    />
  </svg>,
  <svg
    key="bolt"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M11.983 1.907a.75.75 0 00-1.292-.657l-8.5 9.5A.75.75 0 002.75 12h6.572l-1.305 6.093a.75.75 0 001.292.657l8.5-9.5A.75.75 0 0017.25 8h-6.572l1.305-6.093z" />
  </svg>,
  <svg
    key="cog"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M7.84 1.804A1 1 0 018.82 1h2.36a1 1 0 01.98.804l.331 1.652a6.993 6.993 0 011.929 1.115l1.598-.54a1 1 0 011.186.447l1.18 2.044a1 1 0 01-.205 1.251l-1.267 1.113a7.047 7.047 0 010 2.228l1.267 1.113a1 1 0 01.206 1.25l-1.18 2.045a1 1 0 01-1.187.447l-1.598-.54a6.993 6.993 0 01-1.929 1.115l-.33 1.652a1 1 0 01-.98.804H8.82a1 1 0 01-.98-.804l-.331-1.652a6.993 6.993 0 01-1.929-1.115l-1.598.54a1 1 0 01-1.186-.447l-1.18-2.044a1 1 0 01.205-1.251l1.267-1.114a7.05 7.05 0 010-2.227L1.821 7.773a1 1 0 01-.206-1.25l1.18-2.045a1 1 0 011.187-.447l1.598.54A6.993 6.993 0 017.51 3.456l.33-1.652zM10 13a3 3 0 100-6 3 3 0 000 6z"
      clipRule="evenodd"
    />
  </svg>,
  <svg
    key="chart"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M15.5 2A1.5 1.5 0 0014 3.5v13a1.5 1.5 0 001.5 1.5h1a1.5 1.5 0 001.5-1.5v-13A1.5 1.5 0 0016.5 2h-1zM9.5 6A1.5 1.5 0 008 7.5v9A1.5 1.5 0 009.5 18h1a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0010.5 6h-1zM3.5 10A1.5 1.5 0 002 11.5v5A1.5 1.5 0 003.5 18h1A1.5 1.5 0 006 16.5v-5A1.5 1.5 0 004.5 10h-1z" />
  </svg>,
];

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const productIndex = products.findIndex((p) => p.slug === slug);
  if (productIndex === -1) notFound();

  const product = products[productIndex];
  const theme = cardThemes[productIndex];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <span
            className="inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider"
            style={{
              color: theme.accentColor,
              background: `rgba(${theme.accentRgb}, 0.1)`,
            }}
          >
            {product.bestFor.split(",")[0]}
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-heading sm:text-5xl lg:text-6xl">
            {product.name}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground/60 leading-relaxed">
            {product.heroDescription}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/#contact"
              className="w-full rounded-xl px-10 py-4 text-base font-semibold text-accent-foreground transition-all hover:opacity-90 sm:w-auto"
              style={{ background: theme.accentColor }}
            >
              Book a Call
            </Link>
            <Link
              href="/#solutions"
              className="w-full rounded-xl border border-border px-10 py-4 text-base font-semibold text-heading transition-all hover:border-accent/30 hover:bg-accent/5 sm:w-auto"
            >
              Back to Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Video Placeholder */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div
            className="relative flex aspect-video items-center justify-center rounded-2xl border"
            style={{
              borderColor: `rgba(${theme.accentRgb}, 0.15)`,
              background: `rgba(${theme.accentRgb}, 0.03)`,
            }}
          >
            <div className="text-center">
              <div
                className="mx-auto flex h-16 w-16 items-center justify-center rounded-full"
                style={{ background: `rgba(${theme.accentRgb}, 0.1)` }}
              >
                <svg
                  className="h-8 w-8 ml-1"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style={{ color: theme.accentColor }}
                >
                  <path d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                </svg>
              </div>
              <p className="mt-4 text-sm font-medium text-foreground/40">
                Demo coming soon
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-heading sm:text-3xl">
            What&apos;s Included
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {product.features.map((feature, i) => (
              <div
                key={i}
                className="rounded-xl border p-6 lg:p-8 transition-colors"
                style={{
                  borderColor: `rgba(${theme.accentRgb}, 0.12)`,
                  background: `rgba(${theme.accentRgb}, 0.03)`,
                }}
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-lg"
                  style={{
                    background: `rgba(${theme.accentRgb}, 0.1)`,
                    color: theme.accentColor,
                  }}
                >
                  {featureIcons[i % featureIcons.length]}
                </div>
                <p className="mt-4 text-base font-medium text-heading leading-relaxed">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Card */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-xl px-6 lg:px-8">
          <div
            className="rounded-xl border p-8 lg:p-10 text-center"
            style={{
              borderColor: `rgba(${theme.accentRgb}, 0.15)`,
              background: `rgba(${theme.accentRgb}, 0.03)`,
            }}
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-foreground/50">
              Pricing
            </p>
            <p
              className="mt-4 text-3xl font-bold sm:text-4xl"
              style={{ color: theme.accentColor }}
            >
              {product.pricing}
            </p>
            <span
              className="mt-4 inline-block rounded-full px-4 py-1.5 text-xs font-medium"
              style={{
                color: theme.accentColor,
                background: `rgba(${theme.accentRgb}, 0.1)`,
              }}
            >
              Best for: {product.bestFor}
            </span>
            <div className="mt-8">
              <Link
                href="/#contact"
                className="inline-block w-full rounded-xl px-10 py-4 text-base font-semibold text-accent-foreground transition-all hover:opacity-90"
                style={{ background: theme.accentColor }}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="rounded-xl border border-border bg-surface p-10 lg:p-16 text-center">
            <h2 className="text-2xl font-bold text-heading sm:text-3xl">
              Ready to get started?
            </h2>
            <p className="mt-4 text-foreground/60">
              Book a free call and I&apos;ll walk you through exactly how{" "}
              {product.name} can work for your business.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/#contact"
                className="w-full rounded-xl bg-accent px-10 py-4 text-base font-semibold text-accent-foreground transition-all hover:bg-accent-hover sm:w-auto"
              >
                Book a Call
              </Link>
              <Link
                href="/#solutions"
                className="w-full rounded-xl border border-border px-10 py-4 text-base font-semibold text-heading transition-all hover:border-accent/30 hover:bg-accent/5 sm:w-auto"
              >
                Back to All Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
