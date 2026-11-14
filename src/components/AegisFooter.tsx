"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AegisLogo } from "./AegisLogo";
import { MapPin, Phone, Mail, ArrowRight, CheckCircle2 } from "lucide-react";

export const AegisFooter: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-slate-100 border-t border-slate-200 text-slate-600 text-xs pt-16 pb-24 sm:pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Col 1 & 2: Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <AegisLogo size="lg" />
            <p className="text-slate-600 text-sm leading-relaxed max-w-sm pt-2">
              Aegis Auto is an elite cleanroom automotive styling atelier and paint protection film laboratory. Dedicated exclusively to safeguarding and transforming exotic supercars, hypercars, and vintage collector vehicles.
            </p>

            <div className="space-y-2 pt-2 text-slate-700">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
                <span>25 Main Street, New York, NY 11201</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-600 shrink-0" />
                <a href="tel:+18005899727" className="hover:text-amber-800 font-mono font-bold">
                  +1 (800) 589-WRAP
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-600 shrink-0" />
                <a href="mailto:atelier@aegisauto.com" className="hover:text-amber-800 font-medium">
                  atelier@aegisauto.com
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white border border-slate-300 flex items-center justify-center text-slate-600 hover:text-amber-700 hover:border-amber-400 transition-colors shadow-sm"
                aria-label="Aegis Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white border border-slate-300 flex items-center justify-center text-slate-600 hover:text-amber-700 hover:border-amber-400 transition-colors shadow-sm"
                aria-label="Aegis YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 3: Atelier Services */}
          <div>
            <h4 className="text-slate-900 font-extrabold uppercase tracking-wider text-xs font-mono mb-4">
              Atelier Services
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#services" className="hover:text-amber-700 transition-colors">
                  Self-Healing PPF (Gloss & Stealth)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-700 transition-colors">
                  Bespoke Color Change Cast Wrap
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-700 transition-colors">
                  Multi-Stage Machine Correction
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-700 transition-colors">
                  9H Graphene & Ceramic Matrix
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-700 transition-colors">
                  Nano-Ceramic Window Tint
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-700 transition-colors">
                  Track Day High-Velocity Defense
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Links */}
          <div>
            <h4 className="text-slate-900 font-extrabold uppercase tracking-wider text-xs font-mono mb-4">
              Studio Navigation
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#studio" className="hover:text-amber-700 transition-colors">
                  The Aegis Standard
                </a>
              </li>
              <li>
                <a href="#comparison" className="hover:text-amber-700 transition-colors">
                  PPF vs Vinyl Comparison
                </a>
              </li>
              <li>
                <a href="#before-after" className="hover:text-amber-700 transition-colors">
                  Optical Before & After
                </a>
              </li>
              <li>
                <a href="#configurator" className="hover:text-amber-700 transition-colors">
                  Cost & Days Configurator
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-amber-700 transition-colors">
                  Cleanroom 4-Step Process
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-amber-700 transition-colors">
                  Supercar Owner Reviews
                </a>
              </li>
              <li>
                <a href="#journal" className="hover:text-amber-700 transition-colors">
                  Technical Care Journal
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: VIP Waitlist & Dispatch */}
          <div>
            <h4 className="text-slate-900 font-extrabold uppercase tracking-wider text-xs font-mono mb-4">
              VIP Atelier Dispatch
            </h4>
            <p className="text-slate-600 text-xs mb-4 leading-relaxed">
              Receive private invitations for seasonal allocation slots, limited edition satin color releases, and private track-day protection events.
            </p>

            {subscribed ? (
              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                <span className="font-bold">Subscribed to VIP dispatch list.</span>
              </div>
            ) : (
              <form id="footer-newsletter-form" onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="supercar.owner@example.com"
                  className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus:border-amber-500 focus:outline-none shadow-sm"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs tracking-wide transition-all shadow-sm flex items-center justify-center gap-1.5"
                >
                  <span>Join Atelier Registry</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
                </button>
              </form>
            )}

            <div className="mt-4 pt-4 border-t border-slate-200 text-[10px] text-slate-500 font-medium">
              Zero spam policy. Unsubscribe anytime.
            </div>
          </div>
        </div>

        {/* Bottom Accreditations Bar & Copyright */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-4 text-[11px] font-mono font-medium">
            <span>XPEL Certified Facility</span>
            <span>•</span>
            <span>3M Authorized Commercial Studio</span>
            <span>•</span>
            <span>Class-100 Cleanroom Certified</span>
          </div>

          <div className="text-center sm:text-right">
            <p>© {new Date().getFullYear()} Aegis Auto Atelier Inc. All rights reserved.</p>
            <p className="text-[10px] text-slate-400 mt-0.5">
              100% Computer-Cut CAD Patterns • Zero Blade-on-Paint Guarantee
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
