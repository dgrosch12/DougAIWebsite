import Link from "next/link";

interface ProductHeroProps {
  name: string;
  tagline: string;
  heroDescription: string;
  category: string;
  accentColor: string;
  accentRgb: string;
  slug: string;
}

export default function ProductHero({
  name,
  tagline,
  heroDescription,
  category,
  accentColor,
  accentRgb,
  slug,
}: ProductHeroProps) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <span
          className="inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider"
          style={{
            color: accentColor,
            background: `rgba(${accentRgb}, 0.1)`,
          }}
        >
          {category}
        </span>

        <h1 className="mt-6 headline-xl text-heading">{name}</h1>

        <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-foreground/70">
          {tagline}
        </p>

        <p className="mx-auto mt-4 max-w-2xl text-base text-foreground/50 leading-relaxed">
          {heroDescription}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={`/get-started?product=${slug}`}
            className="w-full rounded-xl px-10 py-4 text-base font-semibold text-accent-foreground transition-all hover:opacity-90 sm:w-auto"
            style={{ background: accentColor }}
          >
            Get a Free AI Audit
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
  );
}
