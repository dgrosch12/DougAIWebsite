"use client";

import type { Feature } from "@/lib/products";
import AnimatedSection from "@/components/AnimatedSection";

interface ProductFeaturesProps {
  features: Feature[];
  accentColor: string;
  accentRgb: string;
}

const iconMap: Record<string, React.ReactNode> = {
  phone: (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clipRule="evenodd" />
    </svg>
  ),
  refresh: (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H4.598a.75.75 0 00-.75.75v3.634a.75.75 0 001.5 0v-2.033l.312.311a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm-9.624-2.848a.75.75 0 00.726.943h3.634a.75.75 0 000-1.5H7.615l.312-.311A5.5 5.5 0 0117.139 10a.75.75 0 001.449-.39A7 7 0 006.876 6.46l-.312.311V4.738a.75.75 0 00-1.5 0v3.634a.75.75 0 00.324.204z" clipRule="evenodd" />
    </svg>
  ),
  shield: (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M9.661 2.237a.531.531 0 01.678 0 11.947 11.947 0 007.078 2.749.5.5 0 01.479.425c.069.52.104 1.05.104 1.59 0 5.162-3.26 9.563-7.834 11.256a.48.48 0 01-.332 0C5.26 16.564 2 12.163 2 7c0-.538.035-1.069.104-1.589a.5.5 0 01.48-.425 11.947 11.947 0 007.077-2.75z" clipRule="evenodd" />
    </svg>
  ),
  plug: (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path d="M14 6a2.5 2.5 0 00-4-3 2.5 2.5 0 00-4 3H3.25C2.56 6 2 6.56 2 7.25v.5C2 8.44 2.56 9 3.25 9h6v1.382l-1.753 1.17a2.5 2.5 0 00-1.14 1.703l-.171 1.025a.818.818 0 00.808.952h6.012a.818.818 0 00.808-.952l-.171-1.025a2.5 2.5 0 00-1.14-1.703L10.75 10.382V9h6c.69 0 1.25-.56 1.25-1.25v-.5C18 6.56 17.44 6 16.75 6H14z" />
    </svg>
  ),
  pen: (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path d="M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885L17.5 5.5a2.121 2.121 0 00-3-3L3.58 13.42a4 4 0 00-.885 1.343z" />
    </svg>
  ),
  search: (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
    </svg>
  ),
  upload: (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path d="M9.25 13.25a.75.75 0 001.5 0V4.636l2.955 3.129a.75.75 0 001.09-1.03l-4.25-4.5a.75.75 0 00-1.09 0l-4.25 4.5a.75.75 0 101.09 1.03L9.25 4.636v8.614z" />
      <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
    </svg>
  ),
  image: (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M1 5.25A2.25 2.25 0 013.25 3h13.5A2.25 2.25 0 0119 5.25v9.5A2.25 2.25 0 0116.75 17H3.25A2.25 2.25 0 011 14.75v-9.5zm1.5 5.81v3.69c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75v-2.69l-2.22-2.219a.75.75 0 00-1.06 0l-1.91 1.909-4.97-4.969a.75.75 0 00-1.06 0L2.5 11.06zm6.024-5.416a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" clipRule="evenodd" />
    </svg>
  ),
  chart: (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path d="M15.5 2A1.5 1.5 0 0014 3.5v13a1.5 1.5 0 001.5 1.5h1a1.5 1.5 0 001.5-1.5v-13A1.5 1.5 0 0016.5 2h-1zM9.5 6A1.5 1.5 0 008 7.5v9A1.5 1.5 0 009.5 18h1a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0010.5 6h-1zM3.5 10A1.5 1.5 0 002 11.5v5A1.5 1.5 0 003.5 18h1A1.5 1.5 0 006 16.5v-5A1.5 1.5 0 004.5 10h-1z" />
    </svg>
  ),
  star: (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
    </svg>
  ),
  sliders: (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path d="M10 3.75a2 2 0 10-4 0 2 2 0 004 0zM17.25 4.5a.75.75 0 000-1.5h-5.5a.75.75 0 000 1.5h5.5zM5 3.75a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 01.75.75zM4.25 17a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5h1.5zM17.25 17a.75.75 0 000-1.5h-5.5a.75.75 0 000 1.5h5.5zM9 10a.75.75 0 01-.75.75h-5.5a.75.75 0 010-1.5h5.5A.75.75 0 019 10zM17.25 10.75a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5h1.5zM14 10a2 2 0 10-4 0 2 2 0 004 0zM10 16.25a2 2 0 10-4 0 2 2 0 004 0z" />
    </svg>
  ),
  layers: (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path d="M1 12.5A4.5 4.5 0 005.5 17H15a4 4 0 001.866-7.539 3.504 3.504 0 00-4.504-4.272A4.5 4.5 0 004.06 8.235 4.502 4.502 0 001 12.5z" />
    </svg>
  ),
  globe: (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path d="M16.555 5.412a8.028 8.028 0 00-3.503-2.81 14.899 14.899 0 011.663 4.472 8.547 8.547 0 001.84-1.662zM13.326 7.825a13.43 13.43 0 00-2.413-5.773 8.087 8.087 0 00-1.826 0 13.43 13.43 0 00-2.413 5.773A8.473 8.473 0 0010 8.5c1.18 0 2.304-.24 3.326-.675zM14.558 9.5a9.963 9.963 0 01-4.558 1c-1.6 0-3.122-.37-4.558-1a15.006 15.006 0 00.536 6.182 8.024 8.024 0 008.044 0 15.006 15.006 0 00.536-6.182zM6.948 2.602A14.899 14.899 0 005.285 7.074a8.547 8.547 0 01-1.84-1.662 8.028 8.028 0 013.503-2.81zM2.34 7.36a10.034 10.034 0 002.578 2.2A16.485 16.485 0 004.5 15.66 7.966 7.966 0 012 10c0-.94.162-1.841.46-2.676l-.12.036zm15.32 0A7.966 7.966 0 0118 10a7.966 7.966 0 01-2.5 5.66 16.486 16.486 0 00-.418-6.1 10.034 10.034 0 002.578-2.2z" />
    </svg>
  ),
  mail: (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
      <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
    </svg>
  ),
  sparkle: (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path d="M10 1a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 1zM5.05 3.05a.75.75 0 011.06 0l1.062 1.06a.75.75 0 11-1.06 1.06l-1.06-1.06a.75.75 0 010-1.06zm9.9 0a.75.75 0 010 1.06l-1.06 1.06a.75.75 0 01-1.06-1.06l1.06-1.06a.75.75 0 011.06 0zM10 7a3 3 0 100 6 3 3 0 000-6zm-6.25 2.25a.75.75 0 010 1.5h-1.5a.75.75 0 010-1.5h1.5zm14 0a.75.75 0 010 1.5h-1.5a.75.75 0 010-1.5h1.5zM7.172 14.828a.75.75 0 010 1.061l-1.06 1.06a.75.75 0 01-1.06-1.06l1.06-1.06a.75.75 0 011.06 0zm7.656-1.06a.75.75 0 011.06 0l1.06 1.06a.75.75 0 01-1.06 1.06l-1.06-1.06a.75.75 0 010-1.06zM10 16a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 16z" />
    </svg>
  ),
  database: (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 1c-1.828 0-3.623.149-5.371.435a.75.75 0 00-.629.74v.01c0 2.373.444 4.64 1.254 6.731a.75.75 0 001.395-.55A16.78 16.78 0 015.5 3.328 22.078 22.078 0 0110 2.75c1.584 0 3.112.198 4.5.578a16.78 16.78 0 01-1.149 5.038.75.75 0 101.395.55A18.281 18.281 0 0016 2.185v-.01a.75.75 0 00-.629-.74A23.57 23.57 0 0010 1zM4.5 9.5a.75.75 0 00-1.5 0v7.25a.75.75 0 00.629.74 23.57 23.57 0 005.371.435c1.828 0 3.623-.149 5.371-.435a.75.75 0 00.629-.74V9.5a.75.75 0 00-1.5 0v6.672A22.078 22.078 0 0110 16.75c-1.584 0-3.112-.198-4.5-.578V9.5z" clipRule="evenodd" />
    </svg>
  ),
  map: (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M8.157 2.175a1.5 1.5 0 00-1.147 0l-4.084 1.69A1.5 1.5 0 002 5.251v10.877a1.5 1.5 0 002.074 1.386l3.51-1.453 4.259 1.762a1.5 1.5 0 001.147 0l4.084-1.69A1.5 1.5 0 0018 14.749V3.872a1.5 1.5 0 00-2.074-1.386l-3.51 1.453-4.259-1.764zM7.58 5a.75.75 0 01.75.75v6.5a.75.75 0 01-1.5 0v-6.5A.75.75 0 017.58 5zm5.59 2.75a.75.75 0 00-1.5 0v6.5a.75.75 0 001.5 0v-6.5z" clipRule="evenodd" />
    </svg>
  ),
  code: (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M6.28 5.22a.75.75 0 010 1.06L2.56 10l3.72 3.72a.75.75 0 01-1.06 1.06L.97 10.53a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0zm7.44 0a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L17.44 10l-3.72-3.72a.75.75 0 010-1.06zM11.377 2.011a.75.75 0 01.612.867l-2.5 14.5a.75.75 0 01-1.478-.255l2.5-14.5a.75.75 0 01.866-.612z" clipRule="evenodd" />
    </svg>
  ),
  unlock: (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M14.5 1A4.5 4.5 0 0010 5.5V9H3a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-1.5V5.5a3 3 0 116 0v2.75a.75.75 0 001.5 0V5.5A4.5 4.5 0 0014.5 1z" clipRule="evenodd" />
    </svg>
  ),
  headset: (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path d="M10 2a8 8 0 00-8 8v2.5a.75.75 0 001.5 0V10a6.5 6.5 0 1113 0v2.5a.75.75 0 001.5 0V10a8 8 0 00-8-8z" />
      <path fillRule="evenodd" d="M4.5 12a2 2 0 00-2 2v1a2 2 0 002 2h1a1 1 0 001-1v-3a1 1 0 00-1-1h-1zm10 0a1 1 0 00-1 1v3a1 1 0 001 1h1a2 2 0 002-2v-1a2 2 0 00-2-2h-1z" clipRule="evenodd" />
    </svg>
  ),
  tag: (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M5.5 3A2.5 2.5 0 003 5.5v2.879a2.5 2.5 0 00.732 1.767l6.5 6.5a2.5 2.5 0 003.536 0l2.878-2.878a2.5 2.5 0 000-3.536l-6.5-6.5A2.5 2.5 0 008.38 3H5.5zM6 7a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
    </svg>
  ),
  doc: (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M4.5 2A1.5 1.5 0 003 3.5v13A1.5 1.5 0 004.5 18h11a1.5 1.5 0 001.5-1.5V7.621a1.5 1.5 0 00-.44-1.06l-4.12-4.122A1.5 1.5 0 0011.378 2H4.5zm2.25 8.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5zm0 3a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z" clipRule="evenodd" />
    </svg>
  ),
  link: (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z" />
      <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z" />
    </svg>
  ),
  flow: (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm3 5A.75.75 0 015.75 9h8.5a.75.75 0 010 1.5h-8.5A.75.75 0 015 9.75zm5 5a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75z" clipRule="evenodd" />
    </svg>
  ),
  target: (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path d="M17 10a7 7 0 11-14 0 7 7 0 0114 0zm-3.5 0a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0z" />
    </svg>
  ),
  mic: (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path d="M7 4a3 3 0 016 0v6a3 3 0 11-6 0V4z" />
      <path d="M5.5 9.643a.75.75 0 00-1.5 0V10c0 3.06 2.29 5.585 5.25 5.954V17.5h-1.5a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-1.5v-1.546A6.001 6.001 0 0016 10v-.357a.75.75 0 00-1.5 0V10a4.5 4.5 0 01-9 0v-.357z" />
    </svg>
  ),
  check: (
    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
    </svg>
  ),
};

const fallbackIcon = (
  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
  </svg>
);

export default function ProductFeatures({
  features,
  accentColor,
  accentRgb,
}: ProductFeaturesProps) {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <AnimatedSection>
          <p
            className="text-center text-sm font-semibold uppercase tracking-wider"
            style={{ color: accentColor }}
          >
            Capabilities
          </p>
          <h2 className="mt-2 text-center text-2xl font-bold text-heading sm:text-3xl">
            What&apos;s Included
          </h2>
        </AnimatedSection>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {features.map((feature, i) => (
            <AnimatedSection
              key={i}
              delay={0.1 + i * 0.05}
              className={i === 0 ? "sm:col-span-2" : ""}
            >
              <div
                className={`h-full rounded-xl border-l-4 bg-surface-elevated p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md lg:p-8 ${
                  i === 0 ? "sm:flex sm:items-start sm:gap-6" : ""
                }`}
                style={{ borderLeftColor: accentColor }}
              >
                <div
                  className={`flex shrink-0 items-center justify-center rounded-lg ${
                    i === 0 ? "h-14 w-14" : "h-10 w-10"
                  }`}
                  style={{
                    background: `rgba(${accentRgb}, 0.1)`,
                    color: accentColor,
                  }}
                >
                  {iconMap[feature.icon] || fallbackIcon}
                </div>
                <div className={i === 0 ? "" : "mt-4"}>
                  <h3
                    className={`font-bold text-heading ${
                      i === 0 ? "text-xl" : "text-lg"
                    }`}
                  >
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-foreground/60">
                    {feature.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
