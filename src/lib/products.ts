export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface BeforeAfterItem {
  before: string;
  after: string;
}

export interface CaseStudyData {
  headline: string;
  metrics: { value: string; label: string }[];
  description: string;
  industry: string;
}

export interface TestimonialData {
  quote: string;
  name: string;
  company: string;
  role: string;
  initials: string;
}

export interface TimelineStep {
  day: string;
  title: string;
  description: string;
}

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  heroDescription: string;
  features: Feature[];
  pricing: string;
  bestFor: string;
  details: string;
  beforeAfter?: BeforeAfterItem[];
  caseStudy?: CaseStudyData;
  testimonial?: TestimonialData;
  timeline?: TimelineStep[];
  category: string;
  pricingNote?: string;
  status: "available" | "coming-soon";
  comingSoonNote?: string;
}

export interface CardTheme {
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
      "Twilio-powered system that calls you the moment a lead submits your web form — while they're still on your site. Includes spam filtering to block junk submissions.",
    features: [
      {
        title: "Instant Call to You",
        description:
          "The moment a lead submits a form, Twilio calls your phone. You answer, and the lead's info is read to you so you can call them back immediately — while they're still on your site.",
        icon: "phone",
      },
      {
        title: "Spam Filtering",
        description:
          "Every submission is checked before it reaches you. Bot submissions, test fills, and junk entries are filtered out so you only get calls for real leads.",
        icon: "shield",
      },
      {
        title: "Universal Form Integration",
        description:
          "Works with any web form — Webflow, WordPress, custom HTML. Webhook-based, so there's no ripping out your existing tech stack.",
        icon: "plug",
      },
      {
        title: "24/7 Monitoring",
        description:
          "The system watches your forms around the clock. Nights, weekends, holidays — every submission triggers a call so no lead slips through.",
        icon: "refresh",
      },
    ],
    pricing: "$2,500 setup + $400/month",
    bestFor: "HVAC, plumbing, roofing, electrical, pest control, home services",
    details:
      "Watches your web forms around the clock. The moment someone submits, Twilio calls you with the lead details — while they're still on your site.",
    beforeAfter: [
      {
        before: "30+ minute average response time to new leads",
        after: "Under 10 seconds — you're called while the lead is still on your site",
      },
      {
        before: "Leads go cold before your team even sees the notification",
        after: "Instant phone call to you the moment a form is submitted",
      },
      {
        before: "No way to know which leads are real vs. spam",
        after: "Spam filtering blocks bots and junk before they reach you",
      },
      {
        before: "After-hours leads sit in your inbox until morning",
        after: "24/7 monitoring — every submission triggers a call, nights and weekends included",
      },
    ],
    caseStudy: {
      headline: "Elite HVAC Solutions responds to every lead in under 10 seconds",
      metrics: [
        { value: "<10s", label: "Response time" },
        { value: "24/7", label: "Lead monitoring" },
        { value: "0", label: "Leads missed" },
      ],
      description:
        "Elite HVAC was losing web leads to slow follow-up — most went hours without a response. After deploying Speed-to-Lead, every form submission triggers an instant call. Their team now responds in under 10 seconds, around the clock.",
      industry: "Home Services",
    },
    testimonial: {
      quote:
        "Before Speed-to-Lead, we were missing leads left and right. Now I get a call the second someone fills out our form. It's been a game changer for our business.",
      name: "Marcus T.",
      company: "Elite HVAC Solutions",
      role: "Owner",
      initials: "MT",
    },
    timeline: [
      {
        day: "Day 1",
        title: "Discovery & Setup",
        description:
          "We map your lead sources, configure Twilio call routing, and set up your notification preferences.",
      },
      {
        day: "Day 2-3",
        title: "Integration & Testing",
        description:
          "System is connected to your forms via webhook. We run live tests with your team to make sure calls come through correctly.",
      },
      {
        day: "Day 4-5",
        title: "Go Live & Monitor",
        description:
          "System goes live. We monitor the first 48 hours of real leads and fine-tune spam filters.",
      },
      {
        day: "Ongoing",
        title: "Optimize & Support",
        description:
          "Monthly performance reviews, filter tuning, and priority support. Your system gets smarter over time.",
      },
    ],
    category: "Lead Response",
    pricingNote: "Includes 30 days of monitoring and support",
    status: "available",
  },
  {
    slug: "blog-automation",
    name: "AI Blog Generator for SEO",
    tagline:
      "Publish 30+ SEO-optimized, 2,000-3,000 word articles per month on autopilot",
    heroDescription:
      "End-to-end content pipeline that researches keywords, writes 2,000-3,000 word articles matched to your brand voice, generates AI images via Nano Banana, embeds relevant YouTube videos, and publishes directly to Webflow or Brizy. Includes a Claude-powered editing dashboard for review before publish.",
    features: [
      {
        title: "Long-Form Content Generation",
        description:
          "Every article is 2,000-3,000 words with proper heading structure, internal linking, and keyword density. Not thin content — real, rankable articles that compete with hand-written pieces.",
        icon: "pen",
      },
      {
        title: "AI Image Generation & YouTube Embeds",
        description:
          "Each post gets custom AI-generated images via Nano Banana and automatically embedded YouTube videos relevant to the topic. No more stock photo hunting.",
        icon: "image",
      },
      {
        title: "Claude-Powered Editing Dashboard",
        description:
          "Review and edit articles in a Claude-powered dashboard before they go live. Make tweaks, approve, or regenerate sections — all in one place.",
        icon: "search",
      },
      {
        title: "Auto-Publish to Webflow & Brizy",
        description:
          "Posts are published directly to Webflow or Brizy on a schedule you control. Formatted, tagged, and SEO-optimized. Zero manual uploads.",
        icon: "upload",
      },
    ],
    pricing: "$1,500 setup + $300/month",
    bestFor:
      "Marketing agencies, web design firms, businesses that need content at scale",
    details:
      "Generates 30+ long-form articles per month, optimized for search and matched to your voice. Published straight to your CMS on a schedule you set.",
    beforeAfter: [
      {
        before: "Paying writers $3,000/month for 4 blog posts",
        after: "30+ SEO-optimized posts per month at a fraction of the cost",
      },
      {
        before: "Weeks of back-and-forth on edits and revisions",
        after:
          "Claude-powered editing dashboard for quick review before publish",
      },
      {
        before: "No keyword strategy — writing whatever feels right",
        after: "AI-driven keyword research targeting high-intent searches",
      },
      {
        before: "Manual uploads, formatting, and scheduling for every post",
        after: "Auto-published to Webflow or Brizy on a schedule you set",
      },
    ],
    caseStudy: {
      headline: "DAS Consultants scaled content output 10x",
      metrics: [
        { value: "10x", label: "Content output increase" },
        { value: "30+", label: "Posts published per month" },
        { value: "2,500", label: "Avg words per article" },
        { value: "$300/mo", label: "Total content cost" },
      ],
      description:
        "DAS Consultants needed consistent, high-quality blog content to drive organic traffic but couldn't justify a full-time writer. After deploying the AI Blog Generator, they went from sporadic posting to 30+ articles per month — each 2,000-3,000 words with AI images and YouTube embeds — all for $300/month.",
      industry: "Consulting",
    },
    testimonial: {
      quote:
        "We went from publishing a couple blog posts a month to 30+ — all long-form, on-brand, and hands-free. The editing dashboard makes it easy to review before anything goes live.",
      name: "DAS Consultants",
      company: "DAS Consultants",
      role: "Client",
      initials: "DC",
    },
    timeline: [
      {
        day: "Day 1-2",
        title: "Brand Voice & Keywords",
        description:
          "We analyze your existing content, extract your brand voice, and build a keyword strategy aligned with your business goals.",
      },
      {
        day: "Day 3-5",
        title: "System Build & CMS Integration",
        description:
          "We configure the content pipeline, connect to Webflow or Brizy, and set up the Claude editing dashboard. First batch of test articles generated for your review.",
      },
      {
        day: "Day 6-7",
        title: "Calibration & Launch",
        description:
          "You review sample posts in the editing dashboard, we fine-tune voice and quality. Then we flip the switch and start publishing on schedule.",
      },
      {
        day: "Ongoing",
        title: "Optimize & Scale",
        description:
          "Monthly performance reports, keyword refreshes, and content calendar updates. Scale up or adjust as you grow.",
      },
    ],
    category: "Content",
    pricingNote: "Includes keyword research and CMS setup",
    status: "available",
  },
  {
    slug: "call-transcript-crm",
    name: "Call Transcript CRM System",
    tagline: "Automatically transcribe, classify, and log every call to your CRM",
    heroDescription:
      "n8n-powered pipeline that pulls call recordings from RingCentral or 2X Connect, transcribes them with OpenAI Whisper, classifies the call type with AI, formats the transcript using role-specific templates, and pushes everything into Crelate CRM with smart contact matching. Eliminates 30+ minutes per day of manual CRM data entry.",
    features: [
      {
        title: "Dual Source Support",
        description:
          "Pulls recordings from both RingCentral and 2X Connect phone systems. Handles different audio formats, metadata structures, and API quirks automatically.",
        icon: "headset",
      },
      {
        title: "AI Call Classification",
        description:
          "Every call is automatically classified as Screen, Call, Discovery, Debrief, or Voicemail. Classification drives which formatting template is applied and where the note lands in your CRM.",
        icon: "tag",
      },
      {
        title: "Template-Based Formatting",
        description:
          "Each call type gets a purpose-built transcript format. Screen calls highlight qualifications. Discovery calls pull out key requirements. Debriefs capture hiring decisions. No more walls of raw text.",
        icon: "doc",
      },
      {
        title: "Smart Contact Matching",
        description:
          "Matches transcripts to the right contact in Crelate using phone number lookup, fuzzy name matching, and recent activity correlation. Creates new contacts when no match is found.",
        icon: "link",
      },
    ],
    pricing: "$600 setup",
    bestFor: "Recruiting firms, staffing agencies, sales teams with high call volume",
    details:
      "End-to-end call logging pipeline: record → transcribe → classify → format → CRM. Built on n8n with OpenAI Whisper and Crelate integration.",
    beforeAfter: [
      {
        before: "30+ minutes per day manually typing call notes into CRM",
        after: "Every call automatically transcribed and logged — zero manual entry",
      },
      {
        before: "Inconsistent note quality depending on who took the call",
        after: "Standardized templates for every call type (Screen, Discovery, Debrief)",
      },
      {
        before: "Call notes lost in personal notebooks or forgotten entirely",
        after: "100% of calls captured, classified, and searchable in your CRM",
      },
      {
        before: "No way to search or analyze past call content",
        after: "Full-text transcripts linked to contacts for instant lookup",
      },
    ],
    caseStudy: {
      headline: "Network Mountain eliminated 30+ min/day of manual CRM work",
      metrics: [
        { value: "30+", label: "Minutes saved per day" },
        { value: "100%", label: "Calls captured" },
        { value: "5", label: "Call types auto-classified" },
        { value: "$600", label: "One-time setup cost" },
      ],
      description:
        "Network Mountain's recruiting team was spending over 30 minutes per day manually logging call notes into Crelate. After deploying the Call Transcript CRM System, every call from RingCentral and 2X Connect is automatically transcribed, classified, and formatted — with smart contact matching that puts the right notes on the right candidate record.",
      industry: "Recruiting / Staffing",
    },
    testimonial: {
      quote:
        "Our recruiters were wasting half an hour a day on call notes. Now every call is transcribed and in the right contact record before they hang up. Game changer.",
      name: "Ryan Gonyo",
      company: "Network Mountain",
      role: "Owner",
      initials: "RG",
    },
    timeline: [
      {
        day: "Day 1",
        title: "Phone System & CRM Mapping",
        description:
          "We connect to your RingCentral or 2X Connect account, map your Crelate fields, and configure call type classification rules.",
      },
      {
        day: "Day 2",
        title: "Pipeline Build & Template Setup",
        description:
          "n8n workflow is built with Whisper transcription, AI classification, and template-based formatting for each call type.",
      },
      {
        day: "Day 3",
        title: "Testing & Go Live",
        description:
          "We process a batch of real calls, verify CRM entries, tune contact matching, and go live with monitoring in place.",
      },
    ],
    category: "CRM Automation",
    pricingNote: "One-time setup — no monthly fees",
    status: "available",
  },
  {
    slug: "website-foundation",
    name: "Website Foundation System",
    tagline:
      "Automated competitor research, sitemap generation, and keyword strategy in hours — not weeks",
    heroDescription:
      "4-stage automation pipeline that takes a client intake form and produces a complete website foundation: competitor analysis, AI-generated sitemap, and deep keyword research with search volume data. Uses DataForSEO, Google Ads API, and Claude to replace 35-55 hours of manual agency work per client.",
    features: [
      {
        title: "Automated Competitor Research",
        description:
          "Pulls top competitors from DataForSEO, analyzes their site structure, content strategy, and keyword positioning. Delivers a competitive landscape report without a single manual search.",
        icon: "search",
      },
      {
        title: "AI-Generated Sitemap",
        description:
          "Claude analyzes the intake form, competitor data, and industry patterns to generate a recommended sitemap with page hierarchy, content suggestions, and internal linking strategy.",
        icon: "globe",
      },
      {
        title: "Deep Keyword Research",
        description:
          "Google Ads API pulls real search volume, competition, and CPC data. Keywords are clustered by intent and mapped to specific pages in the sitemap.",
        icon: "chart",
      },
      {
        title: "4-Stage Pipeline",
        description:
          "Intake → Competitor Research → Sitemap → Keyword Research. Each stage feeds the next. The entire pipeline runs automatically once a client fills out the intake form.",
        icon: "flow",
      },
    ],
    pricing: "$1,500 setup + $400/month",
    bestFor:
      "Web design agencies, SEO firms, marketing agencies onboarding new clients",
    details:
      "End-to-end website planning pipeline: intake form → competitor research → AI sitemap → keyword research. Replaces 35-55 hours of manual work per client.",
    category: "Agency Tools",
    pricingNote: "Per-client processing included in monthly fee",
    status: "coming-soon",
    comingSoonNote:
      "Currently being built for CK (Gerald Griffin HVAC). This system replaces the most time-consuming part of website projects — the research and planning phase that typically takes 35-55 hours of manual agency work per client.",
  },
  {
    slug: "lead-sourcing",
    name: "Lead Sourcing System",
    tagline:
      "Automatically find and deliver business owner phone numbers for cold outreach",
    heroDescription:
      "Scrapes targeted business owner contact information — including direct phone numbers — from public sources and delivers qualified lead lists ready for cold calling. Define your target industry, geography, and company size, and get fresh leads on a recurring schedule.",
    features: [
      {
        title: "Targeted Business Search",
        description:
          "Define your ideal customer profile by industry, location, company size, and revenue. The system finds matching businesses from public directories and data sources.",
        icon: "target",
      },
      {
        title: "Direct Phone Number Extraction",
        description:
          "Goes beyond generic office numbers to find direct lines and cell phones for business owners and decision makers. Verified and deduplicated before delivery.",
        icon: "phone",
      },
      {
        title: "Recurring Lead Delivery",
        description:
          "Set your volume and schedule — get fresh lead lists delivered weekly or monthly. No duplicate leads across deliveries.",
        icon: "refresh",
      },
      {
        title: "CRM-Ready Export",
        description:
          "Leads are formatted and ready to import into your CRM or dialer. Includes business name, owner name, phone, email (when available), and address.",
        icon: "upload",
      },
    ],
    pricing: "TBD",
    bestFor:
      "Home services companies, B2B sales teams, agencies doing cold outreach",
    details:
      "Automated lead sourcing pipeline that finds business owner phone numbers for cold calling campaigns.",
    category: "Lead Generation",
    status: "coming-soon",
    comingSoonNote:
      "This system is in development. If you're spending hours manually searching for prospects or paying per-lead fees to data brokers, get notified when this launches.",
  },
  {
    slug: "meeting-summarizer",
    name: "Enterprise Meeting Summarizer",
    tagline:
      "AI meeting transcription with searchable summaries and action item tracking",
    heroDescription:
      "Records and transcribes meetings automatically, generates structured summaries with key decisions and action items, and stores everything in a searchable database. Never lose track of what was discussed or who's responsible for what.",
    features: [
      {
        title: "Automatic Transcription",
        description:
          "Joins your Zoom, Teams, or Google Meet calls and transcribes the full conversation with speaker identification. No manual recording or note-taking required.",
        icon: "mic",
      },
      {
        title: "Structured Summaries",
        description:
          "AI generates a summary with key decisions, discussion points, and action items — tagged by participant. Skip the 60-minute recording, read the 2-minute summary.",
        icon: "doc",
      },
      {
        title: "Action Item Tracking",
        description:
          "Action items are extracted automatically with assignees and due dates. Syncs with your project management tool so nothing falls through the cracks.",
        icon: "check",
      },
      {
        title: "Searchable Meeting Database",
        description:
          "Every meeting transcript and summary is stored and indexed. Search across months of meetings to find exactly what was discussed and when.",
        icon: "search",
      },
    ],
    pricing: "TBD",
    bestFor:
      "Companies with frequent internal meetings, client calls, or cross-team coordination",
    details:
      "End-to-end meeting intelligence: record → transcribe → summarize → store. Searchable database of every meeting your team has.",
    category: "Productivity",
    status: "coming-soon",
    comingSoonNote:
      "This system is in development. If your team is drowning in meetings with no record of what was decided, get notified when this launches.",
  },
  {
    slug: "custom-build",
    name: "Custom AI Build",
    tagline: "Got a unique workflow? I'll automate it.",
    heroDescription:
      "Don't see what you need above? I'll build it from scratch. End-to-end — discovery, build, deployment. Runs on n8n, Supabase, and best-in-class AI APIs. You own everything.",
    features: [
      {
        title: "End-to-End Discovery",
        description:
          "We map your entire workflow, identify bottlenecks, and design a system that eliminates manual steps.",
        icon: "map",
      },
      {
        title: "Built on Open Infrastructure",
        description:
          "Everything runs on n8n, Supabase, and leading AI APIs. No proprietary platforms. You own the code.",
        icon: "code",
      },
      {
        title: "No Vendor Lock-In",
        description:
          "Full ownership of your system. Export, modify, or migrate at any time. Your data, your infrastructure.",
        icon: "unlock",
      },
      {
        title: "Ongoing Support Available",
        description:
          "Optional monthly support for monitoring, optimization, and iteration as your business evolves.",
        icon: "headset",
      },
    ],
    pricing: "Starting at $5,000+",
    bestFor:
      "Any business with repetitive processes eating up time and money",
    details:
      "Got a workflow that doesn't fit the productized systems? I'll build it custom — end-to-end, from discovery to deployment.",
    beforeAfter: [
      {
        before: "Hours spent on repetitive manual processes every week",
        after: "Fully automated workflow that runs itself 24/7",
      },
      {
        before: "Locked into expensive SaaS tools that don't fit",
        after: "Custom-built system you own — no monthly platform fees",
      },
      {
        before: "Months-long development timelines with dev agencies",
        after: "Deployed in days, not months — using proven automation patterns",
      },
      {
        before: "No visibility into what's happening in your workflows",
        after: "Full monitoring, logging, and alerting built in",
      },
    ],
    timeline: [
      {
        day: "Day 1",
        title: "Discovery Session",
        description:
          "We map your workflow end-to-end, identify the highest-impact automation opportunities, and define success criteria.",
      },
      {
        day: "Day 2-3",
        title: "System Design & Build",
        description:
          "Architecture is designed, automations are built, and integrations are configured. You get progress updates throughout.",
      },
      {
        day: "Day 4-5",
        title: "Testing & Deployment",
        description:
          "System is tested with real data, edge cases are handled, and we deploy to production with monitoring in place.",
      },
      {
        day: "Ongoing",
        title: "Support & Iteration",
        description:
          "Optional monthly support for monitoring, performance optimization, and adding new capabilities as your needs evolve.",
      },
    ],
    category: "Custom",
    pricingNote: "Scope and pricing determined during discovery",
    status: "available",
  },
];

export const cardThemes: CardTheme[] = [
  // Speed to Lead
  {
    accentColor: "#114C5A",
    accentRgb: "17,76,90",
    iconBg: "bg-[#114C5A]/10",
    iconColor: "text-[#114C5A]",
  },
  // Blog Generator
  {
    accentColor: "#FF9932",
    accentRgb: "255,153,50",
    iconBg: "bg-[#FF9932]/12",
    iconColor: "text-[#FF9932]",
  },
  // Call Transcript CRM
  {
    accentColor: "#6366F1",
    accentRgb: "99,102,241",
    iconBg: "bg-[#6366F1]/10",
    iconColor: "text-[#6366F1]",
  },
  // Website Foundation
  {
    accentColor: "#0EA5E9",
    accentRgb: "14,165,233",
    iconBg: "bg-[#0EA5E9]/10",
    iconColor: "text-[#0EA5E9]",
  },
  // Lead Sourcing
  {
    accentColor: "#F43F5E",
    accentRgb: "244,63,94",
    iconBg: "bg-[#F43F5E]/10",
    iconColor: "text-[#F43F5E]",
  },
  // Meeting Summarizer
  {
    accentColor: "#8B5CF6",
    accentRgb: "139,92,246",
    iconBg: "bg-[#8B5CF6]/10",
    iconColor: "text-[#8B5CF6]",
  },
  // Custom Build
  {
    accentColor: "#172B36",
    accentRgb: "23,43,54",
    iconBg: "bg-[#172B36]/8",
    iconColor: "text-[#172B36]",
  },
];
