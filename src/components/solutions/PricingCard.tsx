import Link from "next/link";

interface PricingCardProps {
  pricing: string;
  bestFor: string;
  pricingNote?: string;
  slug: string;
  accentColor: string;
  accentRgb: string;
}

export default function PricingCard({
  pricing,
  bestFor,
  pricingNote,
  slug,
  accentColor,
  accentRgb,
}: PricingCardProps) {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-xl px-6 lg:px-8">
        <div
          className="rounded-xl border p-8 lg:p-10 text-center"
          style={{
            borderColor: `rgba(${accentRgb}, 0.15)`,
            background: `rgba(${accentRgb}, 0.03)`,
          }}
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-foreground/50">
            Pricing
          </p>
          <p
            className="mt-4 text-3xl font-bold sm:text-4xl"
            style={{ color: accentColor }}
          >
            {pricing}
          </p>
          {pricingNote && (
            <p className="mt-2 text-sm text-foreground/50">{pricingNote}</p>
          )}
          <span
            className="mt-4 inline-block rounded-full px-4 py-1.5 text-xs font-medium"
            style={{
              color: accentColor,
              background: `rgba(${accentRgb}, 0.1)`,
            }}
          >
            Best for: {bestFor}
          </span>
          <div className="mt-8">
            <Link
              href={`/get-started?product=${slug}`}
              className="inline-block w-full rounded-xl px-10 py-4 text-base font-semibold text-accent-foreground transition-all hover:opacity-90"
              style={{ background: accentColor }}
            >
              Get a Free AI Audit
            </Link>
          </div>
          <p className="mt-4 text-sm text-foreground/40">
            No sales calls. Just a Loom video in your inbox within 24 hours.
          </p>
        </div>
      </div>
    </section>
  );
}
