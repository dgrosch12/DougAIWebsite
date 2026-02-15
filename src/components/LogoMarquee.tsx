"use client";

import { type ReactNode } from "react";

interface Tool {
  name: string;
  logo: ReactNode;
}

const tools: Tool[] = [
  {
    name: "n8n",
    logo: (
      <svg viewBox="0 121.3 512.1 269.6" className="h-9 w-auto">
        <path d="M458.1 229.1c-25.1 0-46.2-17.2-52.2-40.4h-61.8c-13.2 0-24.4 9.5-26.6 22.5l-2.2 13.3c-2 12.2-8.2 23.4-17.5 31.6 9.3 8.2 15.5 19.3 17.5 31.6l2.2 13.3c2.2 13 13.4 22.5 26.6 22.5h7.9c6-23.2 27.1-40.4 52.2-40.4 29.8 0 53.9 24.1 53.9 53.9s-24.1 53.9-53.9 53.9c-25.1 0-46.2-17.2-52.2-40.4h-7.9c-26.3 0-48.8-19-53.2-45l-2.2-13.3c-2.2-13-13.4-22.5-26.6-22.5h-21.4c-6 23.2-27.1 40.4-52.2 40.4s-46.2-17.2-52.2-40.4H106c-6 23.2-27.1 40.4-52.2 40.4C24.1 309.9 0 285.8 0 256s24.1-53.9 53.9-53.9c25.1 0 46.2 17.2 52.2 40.4h30.3c6-23.2 27.1-40.4 52.2-40.4s46.2 17.2 52.2 40.4h21.4c13.2 0 24.4-9.5 26.6-22.5l2.2-13.3c4.3-26 26.8-45 53.2-45H406c6-23.2 27.1-40.4 52.2-40.4 29.8 0 53.9 24.1 53.9 53.9s-24.2 53.9-54 53.9m0-27c14.9 0 26.9-12.1 26.9-26.9s-12.1-26.9-26.9-26.9-26.9 12.1-26.9 26.9 12 26.9 26.9 26.9M53.9 282.9c14.9 0 26.9-12.1 26.9-26.9s-12.1-26.9-26.9-26.9-27 12-27 26.9 12.1 26.9 27 26.9M215.6 256c0 14.9-12.1 26.9-26.9 26.9s-26.9-12.1-26.9-26.9 12.1-26.9 26.9-26.9 26.9 12 26.9 26.9m215.6 80.8c0 14.9-12.1 26.9-26.9 26.9-14.9 0-26.9-12.1-26.9-26.9s12.1-26.9 26.9-26.9 26.9 12.1 26.9 26.9" fill="#EA4B71" fillRule="evenodd" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    name: "Supabase",
    logo: (
      <svg viewBox="0 0 109 113" fill="none" className="h-9 w-auto">
        <path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#sb0)" />
        <path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#sb1)" fillOpacity="0.2" />
        <path d="M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z" fill="#3ECF8E" />
        <defs>
          <linearGradient id="sb0" x1="53.9738" y1="54.974" x2="94.1635" y2="71.8295" gradientUnits="userSpaceOnUse">
            <stop stopColor="#249361" />
            <stop offset="1" stopColor="#3ECF8E" />
          </linearGradient>
          <linearGradient id="sb1" x1="36.1558" y1="30.578" x2="54.4844" y2="65.0806" gradientUnits="userSpaceOnUse">
            <stop />
            <stop offset="1" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    name: "Twilio",
    logo: (
      <svg viewBox="0 0 256 256" fill="none" className="h-9 w-auto">
        <path d="M128 0C57.308 0 0 57.308 0 128s57.308 128 128 128 128-57.308 128-128S198.692 0 128 0Zm0 224.8c-53.412 0-96.8-43.388-96.8-96.8 0-53.412 43.388-96.8 96.8-96.8 53.412 0 96.8 43.388 96.8 96.8 0 53.412-43.388 96.8-96.8 96.8Z" fill="#F22F46" />
        <circle cx="99.2" cy="99.2" r="25.6" fill="#F22F46" />
        <circle cx="156.8" cy="99.2" r="25.6" fill="#F22F46" />
        <circle cx="99.2" cy="156.8" r="25.6" fill="#F22F46" />
        <circle cx="156.8" cy="156.8" r="25.6" fill="#F22F46" />
      </svg>
    ),
  },
  {
    name: "OpenAI",
    logo: (
      <svg viewBox="0 0 24 24" fill="#FFFFFF" className="h-9 w-auto">
        <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073ZM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494ZM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646ZM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872v.024Zm16.597 3.855-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667Zm2.01-3.023-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66v.018ZM8.318 12.71l-2.016-1.163a.08.08 0 0 1-.038-.057V5.908a4.504 4.504 0 0 1 7.37-3.46l-.14.079-4.78 2.758a.795.795 0 0 0-.392.681v6.737l.003.007Zm1.097-2.368 2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5-.005-2.999Z" />
      </svg>
    ),
  },
  {
    name: "Anthropic",
    logo: (
      <svg viewBox="0 0 24 24" fill="#D97757" className="h-9 w-auto">
        <path d="M13.827 3.52h3.603L24 20.48h-3.603l-6.57-16.96zm-7.258 0h3.767L16.906 20.48h-3.674l-1.343-3.461H5.017l-1.344 3.46H0L6.57 3.522zm1.04 3.872L5.2 13.727h4.819l-2.41-6.336z" />
      </svg>
    ),
  },
  {
    name: "Webflow",
    logo: (
      <svg viewBox="0 0 24 24" fill="#4353FF" className="h-9 w-auto">
        <path d="M17.802 8.56s-1.946 6.023-2.105 6.54c-.047-.404-1.108-6.54-1.108-6.54-2.107 0-3.222 1.47-3.828 3.063 0 0-1.97 5.142-2.137 5.6-.016-.378-.467-5.555-.467-5.555C7.95 9.593 6.232 8.56 5.02 8.56L7.2 19.44c2.211-.009 3.383-1.46 4.01-3.063 0 0 1.76-4.58 1.823-4.76.025.18 1.153 7.823 1.153 7.823 2.228-.009 3.4-1.38 4.05-2.97L21.98 8.56h-4.178Z" />
      </svg>
    ),
  },
  {
    name: "Next.js",
    logo: (
      <svg viewBox="0 0 24 24" fill="#FFFFFF" className="h-9 w-auto">
        <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.86-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.572 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z" />
      </svg>
    ),
  },
  {
    name: "Brizy",
    logo: (
      <svg viewBox="0 0 40 40" fill="none" className="h-9 w-auto">
        <defs>
          <linearGradient id="brizy-grad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6C5CE7" />
            <stop offset="1" stopColor="#51C3FD" />
          </linearGradient>
        </defs>
        <rect width="40" height="40" rx="10" fill="url(#brizy-grad)" />
        <path d="M20 10l8 5v3l-8 5-8-5v-3l8-5zm-8 10l8 5 8-5v3l-8 5-8-5v-3z" fill="white" />
      </svg>
    ),
  },
  {
    name: "Crelate",
    logo: (
      <svg viewBox="0 0 40 40" fill="none" className="h-9 w-auto">
        <rect width="40" height="40" rx="6" fill="#4A90D9" />
        <text x="8" y="29" fill="white" fontSize="22" fontWeight="300" fontStyle="italic" fontFamily="Georgia, serif">cr</text>
      </svg>
    ),
  },
  {
    name: "RingCentral",
    logo: (
      <svg viewBox="0 0 40 40" fill="none" className="h-9 w-auto">
        <rect x="1" y="1" width="38" height="38" rx="8" stroke="#F58220" strokeWidth="4" fill="white" />
        <path d="M12 10h10c3.3 0 6 2.7 6 6v2c0 2.5-1.5 4.6-3.6 5.5L28 32h-6l-3.2-8H18v8h-6V10zm6 5v5h4c1.4 0 2.5-1.1 2.5-2.5S23.4 15 22 15h-4z" fill="#5B9BD5" />
      </svg>
    ),
  },
  {
    name: "2x Connect",
    logo: (
      <svg viewBox="0 0 28 28" fill="none" className="h-9 w-auto">
        <circle cx="14" cy="14" r="14" fill="#4A7CDB" />
        <text x="4" y="19" fill="white" fontSize="14" fontWeight="bold" fontFamily="Arial, sans-serif">2x</text>
      </svg>
    ),
  },
];

function LogoItem({ tool }: { tool: Tool }) {
  return (
    <div className="inline-flex items-center gap-3 px-6 flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity">
      <span className="flex-shrink-0">{tool.logo}</span>
      <span className="text-base font-semibold text-white whitespace-nowrap">
        {tool.name}
      </span>
    </div>
  );
}

export default function LogoMarquee() {
  const repeated = [...tools, ...tools, ...tools, ...tools];

  return (
    <section className="relative py-16 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="text-center text-sm font-medium uppercase tracking-widest text-foreground/40">
          Built With Industry-Leading Tools
        </p>
      </div>

      <div className="relative mt-10">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-background to-transparent" />

        <div className="marquee-track flex w-max items-center gap-12">
          {repeated.map((tool, i) => (
            <LogoItem key={i} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  );
}
