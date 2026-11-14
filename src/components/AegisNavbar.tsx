"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AegisLogo } from "./AegisLogo";
import {
  Clock,
  MapPin,
  Phone,
  Search,
  Menu,
  X,
  Shield,
  ChevronRight,
  Sparkles,
} from "lucide-react";

interface AegisNavbarProps {
  onOpenBooking: () => void;
  onOpenTracker: () => void;
}

export const AegisNavbar: React.FC<AegisNavbarProps> = ({
  onOpenBooking,
  onOpenTracker,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#hero", id: "hero" },
    { label: "Studio", href: "#studio", id: "studio" },
    { label: "Services", href: "#services", id: "services" },
    { label: "PPF vs Vinyl", href: "#comparison", id: "comparison" },
    { label: "Configurator", href: "#configurator", id: "configurator" },
    { label: "Process", href: "#process", id: "process" },
    { label: "Reviews", href: "#reviews", id: "reviews" },
    { label: "Journal", href: "#journal", id: "journal" },
    { label: "Location", href: "#location", id: "location" },
  ];

  // Scroll detection & Scroll-Spy
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Section scroll spy
      const sections = navLinks.map((link) => link.id);
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 w-full transition-all duration-300">
      {/* 1. Top Utility Strip */}
      <div className="bg-[#070A0F] border-b border-white/[0.06] text-xs text-slate-300 hidden md:block select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between">
          {/* Left Info */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>Mon–Sat: 8:00 AM – 7:00 PM</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Manhattan Cleanroom Facility • 25 Main St</span>
            </div>
          </div>

          {/* Right Info & Socials */}
          <div className="flex items-center gap-5">
            <a
              href="tel:+18005899727"
              className="flex items-center gap-1.5 font-mono text-amber-400 hover:text-amber-300 transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+1 (800) 589-WRAP</span>
            </a>

            <div className="h-3 w-px bg-slate-800" />

            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-amber-400 transition-colors"
                aria-label="Aegis Auto Instagram"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-amber-400 transition-colors"
                aria-label="Aegis Auto YouTube"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Frosted Glass Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#0B0F17]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-2xl py-3.5"
            : "bg-[#0B0F17]/60 backdrop-blur-md border-b border-white/[0.05] py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <AegisLogo />

          {/* Desktop Nav Links */}
          <ul className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id} className="relative">
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-3 py-1.5 text-xs font-semibold tracking-wide transition-all rounded-lg relative ${
                      isActive
                        ? "text-amber-400"
                        : "text-slate-300 hover:text-white hover:bg-white/[0.04]"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-amber-400 to-amber-600 rounded-full shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Action Cluster (Desktop) */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Track Build Button */}
            <button
              onClick={onOpenTracker}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 hover:border-slate-600 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 active:scale-98"
            >
              <Search className="w-3.5 h-3.5 text-amber-400" />
              <span>Track Build</span>
            </button>

            {/* Book Studio Slot CTA */}
            <button
              onClick={onOpenBooking}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-500 via-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 transition-all shadow-[0_0_20px_rgba(245,158,11,0.25)] hover:shadow-[0_0_28px_rgba(245,158,11,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 active:scale-98"
            >
              <Sparkles className="w-3.5 h-3.5 text-slate-950" />
              <span>Book Studio Slot</span>
            </button>
          </div>

          {/* Mobile Actions & Hamburger */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={onOpenTracker}
              className="sm:hidden p-2 rounded-lg text-slate-300 hover:text-amber-400 hover:bg-slate-800 transition-colors"
              aria-label="Track build"
            >
              <Search className="w-4 h-4 text-amber-400" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-200 hover:text-white hover:bg-slate-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              aria-label="Open mobile navigation menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* 3. Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md xl:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-[#0B0F17] border-l border-slate-800 p-6 flex flex-col justify-between shadow-2xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Drawer Top */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                <AegisLogo size="sm" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  aria-label="Close navigation menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Links */}
              <nav className="space-y-1">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <a
                      key={link.id}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                        isActive
                          ? "bg-amber-500/10 text-amber-400 border border-amber-500/30"
                          : "text-slate-300 hover:bg-slate-800/60 hover:text-white"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronRight className="w-4 h-4 opacity-50" />
                    </a>
                  );
                })}
              </nav>

              {/* Action Cluster in Drawer */}
              <div className="mt-6 pt-6 border-t border-slate-800 space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenTracker();
                  }}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-slate-200 bg-slate-800 hover:bg-slate-750 border border-slate-700 flex items-center justify-center gap-2"
                >
                  <Search className="w-4 h-4 text-amber-400" />
                  <span>Track Vehicle Build (Ticket)</span>
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3 px-4 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(245,158,11,0.25)]"
                >
                  <Sparkles className="w-4 h-4 text-slate-950" />
                  <span>Book Studio Slot</span>
                </button>
              </div>
            </div>

            {/* Bottom Contact in Drawer */}
            <div className="pt-6 border-t border-slate-800 text-xs text-slate-400 space-y-2">
              <a
                href="tel:+18005899727"
                className="flex items-center gap-2 text-amber-400 font-mono font-medium"
              >
                <Phone className="w-4 h-4" />
                <span>+1 (800) 589-WRAP</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-slate-400" />
                <span>Manhattan Cleanroom • 25 Main St</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
