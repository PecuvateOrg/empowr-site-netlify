"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { LINKS } from "@/lib/links";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Our Work", href: "/our-work" },
  { label: "Impact", href: "/impact" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Work With Us", href: "/work-with-us" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-warm-white border-b border-border sticky top-0 z-50 py-1">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" aria-label="Empowr CIC — Home">
          <img src="/logo.png" alt="Empowr CIC" decoding="async" className="h-16 w-auto" />
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors ${
                  isActive
                    ? "font-semibold text-blue border-b-2 border-blue pb-0.5"
                    : "font-medium text-mid hover:text-blue"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href={LINKS.shop}
            target="_blank"
            rel="noopener"
            className="text-sm font-medium text-mid hover:text-blue transition-colors"
          >
            Shop
          </a>
          <a
            href={LINKS.heroesplatform}
            rel="noopener"
            className="bg-blue text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-blue-dark transition-colors"
          >
            Support Us
          </a>
        </div>

        <button
          className="md:hidden text-mid flex h-11 w-11 items-center justify-center"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <span className="text-xl leading-none">{open ? "✕" : "☰"}</span>
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-warm-white border-b border-border px-6 pb-5 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-mid hover:text-blue transition-colors py-3 border-b border-border last:border-0"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={LINKS.shop}
            target="_blank"
            rel="noopener"
            className="text-sm font-medium text-mid hover:text-blue transition-colors py-3 border-b border-border"
            onClick={() => setOpen(false)}
          >
            Shop
          </a>
          <a
            href={LINKS.heroesplatform}
            rel="noopener"
            className="mt-3 bg-blue text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-blue-dark transition-colors text-center"
          >
            Support Us
          </a>
        </div>
      )}
    </header>
  );
}
