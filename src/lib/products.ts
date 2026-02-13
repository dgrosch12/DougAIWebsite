export interface Product {
  slug: string;
  name: string;
  tagline: string;
  heroDescription: string;
  features: string[];
  pricing: string;
  bestFor: string;
  details: string;
}

export interface CardTheme {
  tintClass: string;
  accentColor: string;
  accentRgb: string;
  iconBg: string;
  iconColor: string;
}

export const products: Product[] = [
  {
    slug: "speed-to-lead",
    name: "Speed-to-Lead System",
    tagline: "Connect with every lead within 10 seconds of form submission",
    heroDescription:
      "Stop losing leads to slow response times. Our Speed-to-Lead System monitors your web forms 24/7 and instantly connects you to prospects via conference call — while they're still on your website. Intelligent callback, spam filtering, and lead qualification included.",
    features: [
      "Automated conference call connecting you to the lead instantly",
      "Hangup detection & intelligent callback system",
      "Spam filtering & lead qualification",
      "Works with any web form, CRM, or landing page",
    ],
    pricing: "Starting at $2,500 setup + $400/month",
    bestFor: "HVAC, plumbing, roofing, electrical, pest control, home services",
    details:
      "The Speed-to-Lead System monitors your web forms 24/7. The moment a lead submits a form, the system instantly initiates a conference call — connecting you directly with the prospect while they're still on your website. It includes intelligent hangup detection that triggers automatic callbacks, spam filtering to save you from junk leads, and full lead qualification scoring. Integrates with any web form, CRM, or landing page you're currently using.",
  },
  {
    slug: "blog-automation",
    name: "AI Blog Automation System",
    tagline: "Publish 30+ SEO-optimized blog posts per month on autopilot",
    heroDescription:
      "Stop paying writers thousands for a handful of blog posts. Our AI Blog Automation System generates 30+ high-quality, SEO-optimized articles per month — matched to your brand voice and target keywords. Published directly to your CMS on autopilot.",
    features: [
      "AI-generated content matched to your brand voice",
      "Keyword research & SEO optimization built in",
      "Auto-publishes directly to Webflow, WordPress, or Brizy",
      "Performance tracking & content calendar management",
    ],
    pricing: "Starting at $3,000 setup + $750/month",
    bestFor:
      "Marketing agencies, web design firms, businesses that need content at scale",
    details:
      "Stop paying writers thousands for a handful of blog posts. This system generates 30+ high-quality, SEO-optimized articles per month — matched to your brand voice and target keywords. It handles keyword research, content planning, writing, editing, image selection, and publishing — all automatically. Posts are published directly to your Webflow, WordPress, or Brizy site on a schedule you control. Includes a performance dashboard to track rankings and traffic.",
  },
  {
    slug: "hiring-screening",
    name: "AI Hiring & Screening System",
    tagline: "Screen hundreds of applicants in minutes, not days",
    heroDescription:
      "Every applicant is automatically scored and ranked against your custom criteria the moment they apply. Get a ranked shortlist of top candidates within minutes — not days. Custom screening rubrics, automated tier assignments, and full integration with your application source.",
    features: [
      "AI scores and ranks every candidate against your criteria",
      "Custom screening rubrics tailored to your role",
      "Automated tier assignments (S/A/B/C/F)",
      "Integrates with Google Forms, Typeform, or any application source",
    ],
    pricing: "Starting at $3,000 setup + $500/month",
    bestFor: "Recruiting firms, growing companies, high-volume hiring",
    details:
      "Every applicant is automatically scored and ranked against your custom criteria the moment they apply. The system assigns tier ratings (S/A/B/C/F) based on screening rubrics you define — experience, skills, culture fit, deal-breakers, and more. You get a ranked shortlist of top candidates within minutes of receiving applications, not days. Works with Google Forms, Typeform, or any existing application source.",
  },
  {
    slug: "lead-enrichment",
    name: "Job Scraping & Lead Enrichment",
    tagline: "Find, verify, and enrich leads from any source automatically",
    heroDescription:
      "Automatically scrape leads from job boards, business directories, and Google Maps. Each lead is enriched with verified emails, company data, and AI-powered qualification scores. Clean, deduplicated lead lists delivered straight to your CRM — ready for outreach.",
    features: [
      "Multi-source scraping (job boards, directories, Google Maps)",
      "Automated email finding & verification",
      "AI-powered data enrichment & qualification",
      "Clean, deduplicated lead lists delivered to your CRM",
    ],
    pricing: "Starting at $2,000 setup + $300/month",
    bestFor: "Recruiting firms, sales teams, agencies doing outbound",
    details:
      "This system automatically scrapes leads from job boards, business directories, Google Maps, and other public sources. Each lead is enriched with verified email addresses, company data, and AI-powered qualification scores. Duplicates are removed, data is cleaned, and the final lead lists are delivered directly to your CRM — ready for outreach. Perfect for recruiting firms and sales teams doing outbound prospecting at scale.",
  },
  {
    slug: "custom-build",
    name: "Custom AI Build",
    tagline: "Got a unique workflow? I'll automate it.",
    heroDescription:
      "If you have a unique workflow that doesn't fit neatly into one of our productized systems, we'll build something custom. End-to-end discovery, design, and deployment — built on n8n, Supabase, and leading AI APIs. You own the entire system with no vendor lock-in.",
    features: [
      "End-to-end discovery, design, and deployment",
      "Built on n8n, Supabase, and leading AI APIs",
      "Full ownership of your system — no vendor lock-in",
      "Ongoing support & optimization available",
    ],
    pricing: "Starting at $5,000+",
    bestFor:
      "Any business with repetitive processes eating up time and money",
    details:
      "If you have a unique workflow that doesn't fit neatly into one of my productized systems, I'll build something custom. We start with a discovery session to map your process, then I design and deploy a tailored automation system. Everything is built on n8n, Supabase, and leading AI APIs — you own the entire system with no vendor lock-in. Ongoing support and optimization are available to keep everything running smoothly.",
  },
];

export const cardThemes: CardTheme[] = [
  {
    tintClass: "card-blue",
    accentColor: "#3B82F6",
    accentRgb: "59,130,246",
    iconBg: "bg-[#3B82F6]/10",
    iconColor: "text-[#3B82F6]",
  },
  {
    tintClass: "card-emerald",
    accentColor: "#10B981",
    accentRgb: "16,185,129",
    iconBg: "bg-[#10B981]/10",
    iconColor: "text-[#10B981]",
  },
  {
    tintClass: "card-violet",
    accentColor: "#8B5CF6",
    accentRgb: "139,92,246",
    iconBg: "bg-[#8B5CF6]/10",
    iconColor: "text-[#8B5CF6]",
  },
  {
    tintClass: "card-amber",
    accentColor: "#F59E0B",
    accentRgb: "245,158,11",
    iconBg: "bg-[#F59E0B]/10",
    iconColor: "text-[#F59E0B]",
  },
  {
    tintClass: "card-rose",
    accentColor: "#F43F5E",
    accentRgb: "244,63,94",
    iconBg: "bg-[#F43F5E]/10",
    iconColor: "text-[#F43F5E]",
  },
];
