import type { BeforeAfterItem } from "@/lib/products";

interface BeforeAfterProps {
  items: BeforeAfterItem[];
  accentColor: string;
  accentRgb: string;
}

export default function BeforeAfter({
  items,
  accentColor,
  accentRgb,
}: BeforeAfterProps) {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold text-heading sm:text-3xl">
          Without It vs. With It
        </h2>

        <div className="mt-12 grid gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="grid gap-4 md:grid-cols-2"
            >
              <div className="rounded-xl border border-red-500/15 bg-red-500/[0.03] p-5 lg:p-6">
                <div className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-5 w-5 shrink-0 text-red-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                  </svg>
                  <p className="text-[0.9375rem] text-foreground/70 leading-relaxed">
                    {item.before}
                  </p>
                </div>
              </div>
              <div
                className="rounded-xl border p-5 lg:p-6"
                style={{
                  borderColor: `rgba(${accentRgb}, 0.15)`,
                  background: `rgba(${accentRgb}, 0.03)`,
                }}
              >
                <div className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 h-5 w-5 shrink-0"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    style={{ color: accentColor }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-[0.9375rem] text-foreground/70 leading-relaxed">
                    {item.after}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
