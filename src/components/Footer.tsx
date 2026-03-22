"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { products } from "@/lib/products";

const footerLinks = [
  { label: "Process", href: "#process" },
  { label: "Solutions", href: "#solutions" },
  { label: "Get Started", href: "#contact" },
];

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();
  const isHomepage = pathname === "/";

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    if (isHomepage) {
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/${href}`);
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (isHomepage) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  return (
    <footer className="relative bg-[#172B36] py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand + about blurb */}
          <div>
            {isHomepage ? (
              <a
                href="#"
                onClick={handleLogoClick}
                className="text-lg font-bold tracking-tight text-white"
              >
                Douglas<span className="gradient-text">AI</span>
              </a>
            ) : (
              <Link
                href="/"
                onClick={handleLogoClick}
                className="text-lg font-bold tracking-tight text-white"
              >
                Douglas<span className="gradient-text">AI</span>
              </Link>
            )}
            <p className="mt-3 text-sm text-white/60 leading-relaxed max-w-xs">
              I&apos;m Douglas. I build AI automation systems for small
              businesses — 23+ deployed and running on n8n, Supabase, and
              leading AI APIs.
            </p>
          </div>

          {/* Solutions links */}
          <div>
            <p className="text-sm font-semibold text-white mb-4">Solutions</p>
            <nav className="flex flex-col gap-2.5">
              {products.map((product) => (
                <Link
                  key={product.slug}
                  href={`/solutions/${product.slug}`}
                  className="text-sm text-white/60 transition-colors hover:text-[#5B9FEA]"
                >
                  {product.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Navigation + social */}
          <div>
            <p className="text-sm font-semibold text-white mb-4">Company</p>
            <nav className="flex flex-col gap-2.5">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={isHomepage ? link.href : `/${link.href}`}
                  onClick={(e) => handleClick(e, link.href)}
                  className="text-sm text-white/60 transition-colors hover:text-[#5B9FEA]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/douglas-grosch/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/50 transition-all hover:border-[#5B9FEA]/30 hover:text-[#5B9FEA]"
                aria-label="LinkedIn"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@dougbuilds"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/50 transition-all hover:border-[#5B9FEA]/30 hover:text-[#5B9FEA]"
                aria-label="YouTube"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/douglasgrosch_/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/50 transition-all hover:border-[#5B9FEA]/30 hover:text-[#5B9FEA]"
                aria-label="Instagram"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-white/35">
            &copy; {new Date().getFullYear()} Douglas AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
