"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const links = [
  { href: "/courses", label: "Courses" },
  { href: "/branches", label: "Branches" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/85 backdrop-blur-lg shadow-sm py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between">
        <Link
          href="/"
          className={`flex items-center gap-2 font-display font-bold text-lg ${
            scrolled ? "text-navy" : "text-white"
          }`}
        >
          <span className="w-8 h-8 rounded-lg bg-gold text-navy flex items-center justify-center font-extrabold text-sm">
            P
          </span>
          Premier Driving School
        </Link>

        <div className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-medium hover:text-gold transition-colors ${
                scrolled ? "text-slate" : "text-white/90"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="px-6 py-3 rounded-full bg-navy text-white text-sm font-semibold hover:-translate-y-0.5 transition-transform"
          >
            Enroll now
          </Link>
        </div>

        <button
          className={`md:hidden text-2xl ${scrolled ? "text-navy" : "text-white"}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white px-6 py-6 flex flex-col gap-5 shadow-lg">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-slate font-medium" onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="px-5 py-3 rounded-full bg-navy text-white text-center font-semibold">
            Enroll now
          </Link>
        </div>
      )}
    </nav>
  );
}
