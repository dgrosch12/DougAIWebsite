import type { CaseStudyData } from "@/lib/products";

interface CaseStudyProps {
  caseStudy: CaseStudyData;
  accentColor: string;
  accentRgb: string;
}

export default function CaseStudy({
  caseStudy,
  accentColor,
  accentRgb,
}: CaseStudyProps) {
  return (
    <section className="py-16 lg:py-24 bg-surface-alt">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="text-center">
          <span
            className="inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider"
            style={{
              color: accentColor,
              background: `rgba(${accentRgb}, 0.1)`,
            }}
          >
            Case Study · {caseStudy.industry}
          </span>
          <h2 className="mt-6 text-2xl font-bold text-heading sm:text-3xl">
            {caseStudy.headline}
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
          {caseStudy.metrics.map((metric, i) => (
            <div
              key={i}
              className="rounded-xl border p-5 text-center"
              style={{
                borderColor: `rgba(${accentRgb}, 0.12)`,
                background: `rgba(${accentRgb}, 0.03)`,
              }}
            >
              <p
                className="text-2xl font-bold sm:text-3xl"
                style={{ color: accentColor }}
              >
                {metric.value}
              </p>
              <p className="mt-1 text-sm text-foreground/55">{metric.label}</p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-base text-foreground/60 leading-relaxed">
          {caseStudy.description}
        </p>
      </div>
    </section>
  );
}
