import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { products, cardThemes } from "@/lib/products";
import ProductHero from "@/components/solutions/ProductHero";
import VideoSection from "@/components/solutions/VideoSection";
import BeforeAfter from "@/components/solutions/BeforeAfter";
import ProductFeatures from "@/components/solutions/ProductFeatures";
import CaseStudy from "@/components/solutions/CaseStudy";
import ProductTestimonial from "@/components/solutions/ProductTestimonial";
import Timeline from "@/components/solutions/Timeline";
import PricingCard from "@/components/solutions/PricingCard";

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
    <>
      <div className="min-h-screen">
        <ProductHero
          name={product.name}
          tagline={product.tagline}
          heroDescription={product.heroDescription}
          category={product.category}
          accentColor={theme.accentColor}
          accentRgb={theme.accentRgb}
          slug={product.slug}
        />

        <VideoSection
          placeholderText={product.videoPlaceholderText}
          accentColor={theme.accentColor}
          accentRgb={theme.accentRgb}
        />

        <BeforeAfter
          items={product.beforeAfter}
          accentColor={theme.accentColor}
          accentRgb={theme.accentRgb}
        />

        <ProductFeatures
          features={product.features}
          accentColor={theme.accentColor}
          accentRgb={theme.accentRgb}
        />

        <CaseStudy
          caseStudy={product.caseStudy}
          accentColor={theme.accentColor}
          accentRgb={theme.accentRgb}
        />

        <ProductTestimonial
          testimonial={product.testimonial}
          accentColor={theme.accentColor}
          accentRgb={theme.accentRgb}
        />

        <Timeline
          steps={product.timeline}
          accentColor={theme.accentColor}
          accentRgb={theme.accentRgb}
        />

        <PricingCard
          pricing={product.pricing}
          bestFor={product.bestFor}
          pricingNote={product.pricingNote}
          slug={product.slug}
          accentColor={theme.accentColor}
          accentRgb={theme.accentRgb}
        />

        {/* Bottom CTA */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="rounded-xl border border-border bg-surface p-10 lg:p-16 text-center">
              <h2 className="text-2xl font-bold text-heading sm:text-3xl">
                Ready to get started?
              </h2>
              <p className="mt-4 text-foreground/60">
                Fill out a 2-minute form and I&apos;ll send you a personalized
                Loom walkthrough showing exactly how {product.name} works for
                your business.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href={`/get-started?product=${product.slug}`}
                  className="w-full rounded-xl px-10 py-4 text-base font-semibold text-accent-foreground transition-all hover:opacity-90 sm:w-auto"
                  style={{ background: theme.accentColor }}
                >
                  Get a Free AI Audit
                </Link>
                <Link
                  href="/#solutions"
                  className="w-full rounded-xl border border-border px-10 py-4 text-base font-semibold text-heading transition-all hover:border-accent/30 hover:bg-accent/5 sm:w-auto"
                >
                  Back to All Solutions
                </Link>
              </div>
              <p className="mt-4 text-sm text-foreground/40">
                No sales calls. Personalized Loom walkthrough within 24 hours.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
