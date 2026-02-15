interface VideoSectionProps {
  placeholderText: string;
  accentColor: string;
  accentRgb: string;
}

export default function VideoSection({
  placeholderText,
  accentColor,
  accentRgb,
}: VideoSectionProps) {
  return (
    <section className="py-12 lg:py-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div
          className="relative flex aspect-video items-center justify-center rounded-2xl border"
          style={{
            borderColor: `rgba(${accentRgb}, 0.15)`,
            background: `rgba(${accentRgb}, 0.03)`,
          }}
        >
          <div className="text-center px-6">
            <div
              className="mx-auto flex h-16 w-16 items-center justify-center rounded-full"
              style={{ background: `rgba(${accentRgb}, 0.1)` }}
            >
              <svg
                className="h-8 w-8 ml-1"
                viewBox="0 0 24 24"
                fill="currentColor"
                style={{ color: accentColor }}
              >
                <path d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
              </svg>
            </div>
            <p className="mt-4 text-sm font-medium text-foreground/40 max-w-md mx-auto">
              {placeholderText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
