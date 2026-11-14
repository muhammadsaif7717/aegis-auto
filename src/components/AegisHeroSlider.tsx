"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Shield, Sparkles, Calculator, ChevronLeft, ChevronRight, Award, Flame, CheckCircle } from "lucide-react";

interface AegisHeroSliderProps {
  onOpenBooking: () => void;
}

interface HeroSlide {
  id: number;
  tagline: string;
  headlineMain: string;
  headlineSub: string;
  description: string;
  carModel: string;
  specPill: string;
  finishBadge: string;
  imageUrl: string;
  imageAlt: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 0,
    tagline: "Class-100 Cleanroom PPF Atelier",
    headlineMain: "Invisible Armor.",
    headlineSub: "Flawless Finish.",
    description:
      "Precision-shielding hypercars with 10-mil self-healing optical urethane. Micro-tucked edges and 100% blade-free CAD templates preserve your factory clearcoat for eternity.",
    carModel: "Porsche 911 GT3 RS (992)",
    specPill: "Full Stealth Satin Matte PPF",
    finishBadge: "Zero Razor Contact Guaranteed",
    imageUrl:
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=1920&auto=format&fit=crop",
    imageAlt: "Porsche 911 GT3 RS with Stealth Satin Matte Paint Protection Film",
  },
  {
    id: 1,
    tagline: "Self-Healing Optical Elastomer",
    headlineMain: "Self-Healing PPF.",
    headlineSub: "Zero Rock Chips.",
    description:
      "Engineered for high-velocity track debris and blistering road speeds. Thermal memory elastomeric polymers instantly erase swirl marks under direct engine heat or summer sunlight.",
    carModel: "Ferrari SF90 Stradale Hybrid",
    specPill: "Ultra-Gloss High-Clarity Clear Bra",
    finishBadge: "10-Year Anti-Yellowing Warranty",
    imageUrl:
      "https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=1920&auto=format&fit=crop",
    imageAlt: "Ferrari SF90 in High Gloss Clear Bra PPF",
  },
  {
    id: 2,
    tagline: "Bespoke Color Transformation",
    headlineMain: "Bespoke Color Wraps.",
    headlineSub: "Factory Paint Preserved.",
    description:
      "Over 300 ultra-cast satin, gloss, and liquid metallic finishes. Non-invasive panel wrapping without dismantling delicate supercar factory fasteners or voiding warranties.",
    carModel: "Lamborghini Revuelto V12",
    specPill: "Satin Nardo Grey Cast Wrap",
    finishBadge: "Disassembly-Free Methodology",
    imageUrl:
      "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=1920&auto=format&fit=crop",
    imageAlt: "Lamborghini Revuelto in Satin Nardo Grey Cast Vinyl Wrap",
  },
];

export const AegisHeroSlider: React.FC<AegisHeroSliderProps> = ({ onOpenBooking }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  // Automatic crossfading interval
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 6500);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  const slide = HERO_SLIDES[currentSlide];

  const handleConfiguratorScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const configElem = document.getElementById("configurator");
    if (configElem) {
      configElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-24 sm:pt-28 pb-16 overflow-hidden bg-[#070A0F]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Aegis Auto Hero Showcase"
    >
      {/* Background Slides with Crossfade */}
      <div className="absolute inset-0 z-0">
        {HERO_SLIDES.map((s, idx) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <Image
              src={s.imageUrl}
              alt={s.imageAlt}
              fill
              priority={idx === 0}
              className="object-cover object-center filter brightness-[0.42] scale-105 transition-transform duration-10000 ease-linear"
              sizes="100vw"
            />
            {/* Cinematic Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-[#0B0F17]/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#070A0F]/90 via-[#070A0F]/60 to-transparent" />
            {/* Fine Studio Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#070A0F_90%)] opacity-80" />
          </div>
        ))}
      </div>

      {/* Main Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Top Atelier Category Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-amber-500/30 backdrop-blur-md mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_#F59E0B]" />
            <span className="text-xs font-mono font-bold tracking-wider text-amber-400 uppercase">
              {slide.tagline}
            </span>
          </div>

          {/* Grand Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.06] mb-6">
            <span className="block drop-shadow-md">{slide.headlineMain}</span>
            <span className="block bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent drop-shadow-sm">
              {slide.headlineSub}
            </span>
          </h1>

          {/* Descriptive Body */}
          <p className="text-slate-300 text-base sm:text-lg lg:text-xl font-normal leading-relaxed mb-8 max-w-2xl">
            {slide.description}
          </p>

          {/* Dual Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
            <button
              onClick={onOpenBooking}
              className="px-7 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm sm:text-base tracking-wide transition-all shadow-[0_0_28px_rgba(245,158,11,0.35)] hover:shadow-[0_0_36px_rgba(245,158,11,0.5)] flex items-center justify-center gap-2.5 active:scale-98 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              <Sparkles className="w-4 h-4 text-slate-950" />
              <span>Book Studio Bench</span>
            </button>

            <a
              href="#configurator"
              onClick={handleConfiguratorScroll}
              className="px-7 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-850/90 text-white font-semibold text-sm sm:text-base tracking-wide border border-slate-700/80 hover:border-amber-500/50 backdrop-blur-md transition-all flex items-center justify-center gap-2.5 active:scale-98 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 shadow-lg"
            >
              <Calculator className="w-4 h-4 text-amber-400" />
              <span>Vehicle Price Configurator</span>
            </a>
          </div>

          {/* Active Featured Vehicle Tag */}
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 pt-2 border-t border-white/[0.08]">
            <span className="text-slate-500 uppercase font-mono tracking-wider">Featured Vehicle:</span>
            <span className="font-semibold text-slate-200">{slide.carModel}</span>
            <span className="text-slate-600">•</span>
            <span className="text-amber-400/90 font-medium">{slide.specPill}</span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="text-emerald-400 font-mono hidden sm:inline">{slide.finishBadge}</span>
          </div>
        </div>
      </div>

      {/* Trust Pill Strip (Floating Minimalist Footer) */}
      <div className="absolute bottom-4 left-0 right-0 z-20 px-4">
        <div className="max-w-5xl mx-auto py-2.5 px-4 sm:px-6 rounded-2xl bg-[#0B0F17]/85 border border-white/[0.08] backdrop-blur-xl shadow-xl flex flex-wrap items-center justify-around gap-3 text-xs sm:text-sm text-slate-300">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="font-semibold text-white">10-Year Film Warranty</span>
          </div>
          <span className="text-slate-700 hidden md:inline">•</span>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="font-semibold text-white">Dust-Free Class-100 Cleanroom</span>
          </div>
          <span className="text-slate-700 hidden md:inline">•</span>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="font-semibold text-white">Computer-Cut Pre-Cut Kits</span>
          </div>
          <span className="text-slate-700 hidden md:inline">•</span>
          <div className="flex items-center gap-2">
            <Flame className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="font-semibold text-white">Zero Knife On Factory Paint</span>
          </div>
        </div>
      </div>

      {/* Slide Navigation Controls */}
      <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 z-20 flex-col items-center gap-3">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-2.5 transition-all duration-300 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
              idx === currentSlide
                ? "h-8 bg-amber-400 shadow-[0_0_10px_#F59E0B]"
                : "h-2.5 bg-slate-600/80 hover:bg-slate-400"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Mobile Slide Arrows */}
      <div className="lg:hidden absolute bottom-20 right-4 z-20 flex items-center gap-2">
        <button
          onClick={prevSlide}
          className="p-2 rounded-xl bg-slate-900/80 border border-slate-700 text-slate-300 hover:text-white"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={nextSlide}
          className="p-2 rounded-xl bg-slate-900/80 border border-slate-700 text-slate-300 hover:text-white"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
