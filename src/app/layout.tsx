import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Douglas AI - AI Automation That Actually Delivers ROI",
  description:
    "AI automation built for businesses that want measurable outcomes — not guesswork, not demos, not hype.",
  keywords: [
    "AI automation",
    "custom AI automation",
    "AI consulting",
    "speed to lead",
    "AI content automation",
    "call transcription",
    "lead sourcing",
    "n8n automation",
    "business automation",
    "Douglas AI",
  ],
  authors: [{ name: "Douglas Grosch" }],
  creator: "Douglas AI",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Douglas AI - AI Automation That Actually Delivers ROI",
    description:
      "AI automation built for businesses that want measurable outcomes — not guesswork, not demos, not hype.",
    siteName: "Douglas AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Douglas AI - AI Automation That Actually Delivers ROI",
    description:
      "AI automation built for businesses that want measurable outcomes — not guesswork, not demos, not hype.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Douglas AI",
              url: "https://douglasai.co",
              logo: "https://douglasai.co/logo.svg",
              description:
                "AI automation consulting for agency owners and business owners. Douglas Grosch builds custom AI systems including Speed-to-Lead automation, AI blog generation, call transcription & CRM integration, and custom workflow automation.",
              founder: {
                "@type": "Person",
                name: "Douglas Grosch",
                jobTitle: "AI Automation Consultant",
                url: "https://douglasai.co/about",
              },
              serviceType: [
                "AI Automation",
                "Workflow Automation",
                "Speed-to-Lead Systems",
                "AI Blog Generation",
                "Call Transcription",
                "CRM Integration",
                "n8n Workflow Development",
                "Supabase Development",
                "Custom AI Build",
              ],
              areaServed: "United States",
              priceRange: "$$",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "sales",
                url: "https://douglasai.co/get-started",
              },
              sameAs: [
                "https://www.linkedin.com/in/douglas-grosch/",
                "https://www.youtube.com/@dougbuilds",
                "https://www.instagram.com/douglasgrosch_/",
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
