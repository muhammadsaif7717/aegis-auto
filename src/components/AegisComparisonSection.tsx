"use client";

import React, { useState } from "react";
import { Shield, Palette, Check, Minus, HelpCircle, ArrowRight } from "lucide-react";

interface AegisComparisonSectionProps {
  onOpenBooking: () => void;
}

export const AegisComparisonSection: React.FC<AegisComparisonSectionProps> = ({ onOpenBooking }) => {
  const comparisonRows = [
    {
      feature: "Primary Engineering Purpose",
      ppf: "Kinetic impact defense & clearcoat preservation",
      vinyl: "Aesthetic color change & custom styling",
    },
    {
      feature: "Material & Physical Thickness",
      ppf: "8.5 to 10.0 Mil (Heavy-duty Thermoplastic Polyurethane)",
      vinyl: "3.5 to 4.2 Mil (Dual-Cast Polyvinyl Chloride)",
    },
    {
      feature: "Self-Healing Thermal Memory",
      ppf: "Instantaneous with engine heat or 120°F water",
      vinyl: "Limited thermal relaxation; cannot heal rock cuts",
    },
    {
      feature: "Track Rock Chip & Gravel Defense",
      ppf: "Maximum High-Speed Kinetic Resistance (10/10)",
      vinyl: "Light scratch defense only (4/10)",
    },
    {
      feature: "Longevity & Weathering Lifespan",
      ppf: "10+ Years with Aegis Anti-Yellowing Warranty",
      vinyl: "5 to 7 Years with proper atelier care",
    },
    {
      feature: "Finish Varieties",
      ppf: "Optical High-Gloss or Stealth Satin Matte",
      vinyl: "300+ colors (Matte, Satin, Gloss, Chrome Delete, Iridescent)",
    },
    {
      feature: "Impact on Vehicle Resale Value",
      ppf: "Preserves 100% factory original paint; boosts collector value",
      vinyl: "Preserves paint beneath; 100% peel-off reversible",
    },
    {
      feature: "Recommended Application",
      ppf: "Porsche GT3 RS, Ferrari SF90, high-speed tracking supercars",
      vinyl: "Bespoke styling projects, color shifts, commercial wraps",
    },
  ];

  return (
    <section id="comparison" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-amber-300 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            <span className="text-xs font-mono font-bold tracking-widest text-amber-800 uppercase">
              Material Metrology Guide
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Paint Protection Film <br />
            <span className="bg-gradient-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent">
              Versus Vinyl Color Wrap
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Understanding the structural physics and chemical distinction between elastomeric urethane armor (PPF) and cast aesthetic film (Vinyl) helps you choose the perfect investment for your supercar.
          </p>
        </div>

        {/* Feature Cards Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Card 1: PPF */}
          <div className="p-8 rounded-2xl bg-[#F8FAFC] border-2 border-amber-500/60 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Paint Protection Film (PPF)</h3>
                    <p className="text-xs text-amber-800 font-mono font-semibold">Thermoplastic Polyurethane (TPU)</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500 text-slate-950 font-mono shadow-sm">
                  10 Mil Armor
                </span>
              </div>

              <p className="text-slate-700 text-sm leading-relaxed mb-6">
                Engineered specifically for impact deflection. Thicker, optical-grade elastomeric film designed to absorb track rubber marbles, high-speed gravel, and self-heal surface swirls instantaneously.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2.5 text-xs text-slate-800">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-medium">100% Protection from High-Velocity Rock Chips</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-800">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-medium">Instant Thermal Self-Healing Topcoat</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-800">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-medium">Available in High-Gloss or Stealth Satin Matte</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs">
              <span className="text-slate-500">Starting from:</span>
              <span className="text-lg font-mono font-extrabold text-slate-900">$1,899 (Track Pack)</span>
            </div>
          </div>

          {/* Card 2: Vinyl */}
          <div className="p-8 rounded-2xl bg-[#F8FAFC] border border-slate-300 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-slate-200 border border-slate-300 flex items-center justify-center text-slate-700">
                    <Palette className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Bespoke Vinyl Wrap</h3>
                    <p className="text-xs text-slate-600 font-mono font-medium">Dual-Cast PVC Film</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-200 border border-slate-300 text-slate-800 font-mono">
                  3.5–4.2 Mil
                </span>
              </div>

              <p className="text-slate-700 text-sm leading-relaxed mb-6">
                Engineered for bespoke visual expression. Allows complete exterior transformation with hundreds of pigment shades, matte sheens, iridescent shifts, and chrome deletes while keeping OEM paint intact.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2.5 text-xs text-slate-800">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-medium">300+ Bespoke Colors & Metallic Textures</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-800">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-medium">100% Reversible with Zero Residue</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-800">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-medium">Protects Clearcoat from UV Oxidation & Bird Lime</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs">
              <span className="text-slate-500">Starting from:</span>
              <span className="text-lg font-mono font-extrabold text-slate-900">$2,499 (Full Vehicle)</span>
            </div>
          </div>
        </div>

        {/* Detailed Side-by-Side Metrology Table */}
        <div className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm">
          <div className="px-6 py-4 bg-slate-100/80 border-b border-slate-200 flex items-center justify-between">
            <h4 className="text-sm font-bold text-slate-900 font-mono uppercase tracking-wider">
              Technical Comparison Matrix
            </h4>
            <span className="text-xs text-slate-600 hidden sm:inline">XPEL / 3M Laboratory Metrology</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-slate-600 font-mono uppercase text-[11px] bg-slate-50">
                  <th className="py-3.5 px-6 font-semibold">Specification Parameter</th>
                  <th className="py-3.5 px-6 font-semibold text-amber-800">Paint Protection Film (PPF)</th>
                  <th className="py-3.5 px-6 font-semibold text-slate-800">Bespoke Vinyl Wrap</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                {comparisonRows.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-900">{row.feature}</td>
                    <td className="py-4 px-6 text-amber-850 font-semibold">{row.ppf}</td>
                    <td className="py-4 px-6 text-slate-700">{row.vinyl}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <HelpCircle className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Not sure which solution suits your vehicle usage? Our atelier master provides free paint depth consultations.</span>
            </div>
            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-xs tracking-wide hover:from-amber-400 hover:to-amber-500 transition-all flex items-center gap-1.5 shrink-0 shadow-sm"
            >
              <span>Request Consultation</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
