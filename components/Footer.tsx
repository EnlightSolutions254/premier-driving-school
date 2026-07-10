"use client";

import Link from "next/link";
import { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  return (
    <footer className="bg-navy text-white/70 pt-20 pb-8 mt-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pb-14 border-b border-white/10">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 font-display font-bold text-lg text-white">
              <span className="w-8 h-8 rounded-lg bg-gold text-navy flex items-center justify-center font-extrabold text-sm">
                P
              </span>
              Premier Driving School
            </Link>
            <p className="text-sm leading-relaxed max-w-xs mt-4">
              Kenya&apos;s trusted driving school since 2004. NTSA-certified instructors, modern vehicles,
              12 branches nationwide.
            </p>
            <div className="flex gap-3 mt-6">
              {[FaFacebookF, FaInstagram, FaTwitter, FaYoutube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:text-navy hover:border-gold transition-colors"
                  aria-label="Social link"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Quick links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/courses" className="hover:text-gold">Courses</Link></li>
              <li><Link href="/branches" className="hover:text-gold">Branches</Link></li>
              <li><Link href="/gallery" className="hover:text-gold">Gallery</Link></li>
              <li><Link href="/about" className="hover:text-gold">About us</Link></li>
              <li><Link href="/contact" className="hover:text-gold">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Newsletter</h4>
            <p className="text-sm mb-4">Get intake dates and driving tips in your inbox.</p>
            {joined ? (
              <p className="text-sm text-gold">Subscribed — welcome aboard.</p>
            ) : (
              <form
                className="flex gap-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (email) setJoined(true);
                }}
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  className="flex-1 min-w-0 px-3 py-2.5 rounded-lg border border-white/20 bg-white/5 text-sm text-white placeholder:text-white/40"
                />
                <button type="submit" className="px-4 py-2.5 rounded-lg bg-gold text-navy text-sm font-semibold">
                  Join
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-3 pt-6 text-xs">
          <span>&copy; {new Date().getFullYear()} Premier Driving School Kenya. All rights reserved.</span>
          <span>NTSA Reg. No. DS-2004-1187</span>
        </div>
      </div>
    </footer>
  );
}
