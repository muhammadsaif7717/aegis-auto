"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { Sliders, Sparkles, Check, MoveHorizontal } from "lucide-react";

interface PresetItem {
  id: string;
  name: string;
  car: string;
  beforeLabel: string;
  afterLabel: string;
  beforeDesc: string;
  afterDesc: string;
  beforeImage: string;
  afterImage: string;
}

const PRESETS: PresetItem[] = [
  {
    id: "preset-1",
    name: "Stealth Matte PPF Conversion",
    car: "Porsche 911 GT3 RS (992)",
    beforeLabel: "Factory Gloss Clearcoat",
    afterLabel: "Aegis Stealth Satin Matte PPF",
    beforeDesc: "Standard high-gloss factory clearcoat prone to micro-marring, track rubber scuffs, and high-velocity rock chips.",
    afterDesc: "Transformed into an aggressive satin matte finish with 10-mil self-healing TPU armor and 100% factory paint preservation.",
    beforeImage:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop",
    afterImage:
      "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "preset-2",
    name: "Bespoke Cast Color Shift",
    car: "Lamborghini Huracán Tecnica",
    beforeLabel: "OEM Factory Finish",
    afterLabel: "Bespoke Satin Nardo Grey Cast Wrap",
    beforeDesc: "Standard factory paint finish with visible factory chrome trim and unprotected vulnerable leading edges.",
    afterDesc: "Full seamless cast vinyl wrap in Satin Nardo Grey with custom stealth emblems and full edge tucking.",
    beforeImage:
      "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?q=80&w=1600&auto=format&fit=crop",
    afterImage:
      "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "preset-3",
    name: "Paint Correction & Ceramic Shield",
    car: "Ferrari SF90 Stradale",
    beforeLabel: "Swirled Dealer Clearcoat",
    afterLabel: "Multi-Stage Leveling + 9H Graphene",
    beforeDesc: "Severe rotary buffer trails, heavy spider-web swirls, and water spot etching obscuring clearcoat flake depth.",
    afterDesc: "98% defect elimination with ultrasonic paint depth gauging, jeweled finish, and permanent 9H covalent hydrophobic coating.",
    beforeImage:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1600&auto=format&fit=crop",
    afterImage:
      "https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=1600&auto=format&fit=crop",
  },
];

export const AegisBeforeAfter: React.FC = () => {
  const [activePresetIndex, setActivePresetIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 to 100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const activePreset = PRESETS[activePresetIndex];

  const updatePositionFromClientX = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.min(Math.max((x / rect.width) * 100, 2), 98);
    setSliderPosition(percent);
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    updatePositionFromClientX(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    updatePositionFromClientX(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // Ignore if pointer was already released
    }
  };

  return (
    <section id="before-after" className="py-20 sm:py-28 bg-[#070A0F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-amber-500/30 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase">
              Optical Transformation
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Interactive Optical Inspection: <br />
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Before & After Atelier Standards
            </span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Drag the cursor or touch slider across the image to evaluate the stark difference between vulnerable factory finishes and Aegis precision-protected bodywork.
          </p>
        </div>

        {/* Preset Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {PRESETS.map((preset, idx) => (
            <button
              key={preset.id}
              onClick={() => {
                setActivePresetIndex(idx);
                setSliderPosition(50);
              }}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
                activePresetIndex === idx
                  ? "bg-amber-500/20 border-amber-500 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.2)]"
                  : "bg-slate-900/80 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
              }`}
            >
              <span>{preset.name}</span>
            </button>
          ))}
        </div>

        {/* Interactive Comparison Container */}
        <div className="max-w-5xl mx-auto">
          <div
            ref={containerRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            className="relative w-full h-[360px] sm:h-[480px] lg:h-[580px] rounded-2xl overflow-hidden border border-white/[0.1] shadow-2xl select-none cursor-ew-resize touch-none bg-slate-950"
          >
            {/* After Image (Full width background) */}
            <div className="absolute inset-0">
              <Image
                src={activePreset.afterImage}
                alt={activePreset.afterLabel}
                fill
                priority
                className="object-cover object-center filter brightness-[0.9]"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17]/80 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Before Image (Clipped by slider position) */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <div
                className="relative h-full"
                style={{
                  width: containerRef.current?.clientWidth
                    ? `${containerRef.current.clientWidth}px`
                    : "100%",
                }}
              >
                <Image
                  src={activePreset.beforeImage}
                  alt={activePreset.beforeLabel}
                  fill
                  priority
                  className="object-cover object-center filter brightness-[0.7] contrast-105"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17]/80 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Vertical Divider Line with Handle */}
            <div
              className="absolute top-0 bottom-0 z-30 w-1 bg-amber-400 shadow-[0_0_12px_#F59E0B] pointer-events-none -translate-x-1/2"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Drag Handle Button */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-11 h-11 rounded-full bg-slate-950/90 border-2 border-amber-400 text-amber-400 flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.5)] backdrop-blur-md">
                <MoveHorizontal className="w-5 h-5" />
              </div>
            </div>

            {/* Floating Discreet Badges */}
            {/* Left: Factory Finish Badge */}
            <div className="absolute top-5 left-5 z-20 pointer-events-none">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-[#0B0F17]/85 border border-white/[0.15] text-slate-300 backdrop-blur-md shadow-lg">
                Factory Finish (Vulnerable)
              </span>
            </div>

            {/* Right: Aegis Protected Badge */}
            <div className="absolute top-5 right-5 z-20 pointer-events-none">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-amber-500/90 text-slate-950 backdrop-blur-md shadow-lg shadow-amber-500/20">
                Aegis Protected (Self-Healing)
              </span>
            </div>

            {/* Bottom Comparison Captions */}
            <div className="absolute bottom-5 left-5 right-5 z-20 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 pointer-events-none">
              <div className="bg-[#0B0F17]/85 border border-white/[0.08] backdrop-blur-md p-3.5 rounded-xl max-w-sm">
                <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-0.5">
                  Before: {activePreset.beforeLabel}
                </span>
                <p className="text-xs text-slate-300 line-clamp-2">{activePreset.beforeDesc}</p>
              </div>

              <div className="bg-[#0B0F17]/85 border border-amber-500/30 backdrop-blur-md p-3.5 rounded-xl max-w-sm text-left sm:text-right">
                <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 block mb-0.5">
                  After: {activePreset.afterLabel}
                </span>
                <p className="text-xs text-slate-300 line-clamp-2">{activePreset.afterDesc}</p>
              </div>
            </div>
          </div>

          {/* Touch/Accessibility Slider fallback for screen readers & fine adjustments */}
          <div className="mt-4 flex items-center justify-between text-xs text-slate-400 px-2">
            <span>← Slide left for Aegis finish</span>
            <span className="font-mono text-amber-400">{Math.round(sliderPosition)}% Comparison Position</span>
            <span>Slide right for Factory finish →</span>
          </div>
        </div>
      </div>
    </section>
  );
};
