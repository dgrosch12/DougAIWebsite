import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Douglas AI — Productized AI Automation for Home Services & Agencies",
  description:
    "I build AI systems that make your business money while you sleep. Productized AI automation for home service companies and marketing agencies — from 10-second lead response to fully automated content engines.",
  keywords: [
    "AI automation",
    "home service automation",
    "marketing agency automation",
    "speed to lead",
    "AI blog automation",
    "AI hiring system",
    "lead enrichment",
    "n8n automation",
    "business automation",
    "Douglas AI",
  ],
  authors: [{ name: "Douglas" }],
  creator: "Douglas AI",
  openGraph: {
    type: "website",
    locale: "en_US",
    title:
      "Douglas AI — Productized AI Automation for Home Services & Agencies",
    description:
      "Productized AI automation deployed in days, not months. Speed-to-lead systems, AI blog engines, hiring automation, and custom builds.",
    siteName: "Douglas AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Douglas AI — Productized AI Automation",
    description:
      "I build AI systems that make your business money while you sleep. 23+ systems deployed. Trusted by agencies and service businesses nationwide.",
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,600;12..96,700&family=Instrument+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="light"){document.documentElement.classList.remove("dark")}else if(t==="dark"){document.documentElement.classList.add("dark")}else{window.matchMedia("(prefers-color-scheme:light)").matches?void 0:document.documentElement.classList.add("dark")}}catch(e){document.documentElement.classList.add("dark")}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Douglas AI",
              description:
                "Productized AI automation for home service companies and marketing agencies.",
              founder: {
                "@type": "Person",
                name: "Douglas",
              },
              areaServed: "US",
              serviceType: [
                "AI Automation",
                "Lead Response Systems",
                "AI Content Generation",
                "Hiring Automation",
                "Lead Enrichment",
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
