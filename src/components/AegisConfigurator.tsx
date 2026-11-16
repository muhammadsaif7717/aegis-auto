"use client";

import React, { useState } from "react";
import { Calculator, Check, Sparkles, Shield, Clock, Award, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { PreloadBookingData } from "./AegisQuoteModal";

interface AegisConfiguratorProps {
  onReserveSlot: (configData: PreloadBookingData) => void;
}

interface SegmentOption {
  id: string;
  name: string;
  examples: string;
  multiplier: number;
}

interface PackageOption {
  id: string;
  name: string;
  basePrice: number;
  days: string;
  warranty: string;
  tag: string;
  description: string;
}

interface FinishOption {
  id: string;
  name: string;
  surcharge: number;
  badge: string;
  description: string;
}

const VEHICLE_SEGMENTS: SegmentOption[] = [
  {
    id: "coupe",
    name: "Coupe / Sports Car",
    examples: "Porsche 911, Corvette Z06, BMW M4, Cayman",
    multiplier: 1.0,
  },
  {
    id: "sedan",
    name: "Sedan / Saloon",
    examples: "BMW M5, Audi RS7, Porsche Panamera, Tesla S",
    multiplier: 1.1,
  },
  {
    id: "mid-suv",
    name: "Mid-Size SUV / Crossover",
    examples: "Porsche Macan, Urus, Cayenne, Aston DBX",
    multiplier: 1.25,
  },
  {
    id: "full-suv",
    name: "Full-Size SUV / Truck",
    examples: "G-Wagon, Range Rover SV, Escalade V",
    multiplier: 1.4,
  },
  {
    id: "exotic",
    name: "Exotic / Hypercar",
    examples: "Ferrari SF90, McLaren 720S, Revuelto, GT3 RS",
    multiplier: 1.35,
  },
];

const PACKAGES: PackageOption[] = [
  {
    id: "full-stealth-ppf",
    name: "Full Body Stealth PPF",
    basePrice: 4899,
    days: "3–4 Studio Days",
    warranty: "10-Year Anti-Yellowing Warranty",
    tag: "Signature Atelier Choice",
    description: "Every exterior painted and carbon panel wrapped in 10-mil self-healing satin or gloss urethane.",
  },
  {
    id: "front-track-pack",
    name: "Front Track Pack PPF",
    basePrice: 1899,
    days: "2 Studio Days",
    warranty: "10-Year Impact Warranty",
    tag: "High-Impact Defense",
    description: "Full bumper, complete hood, front fenders, mirrors, and rocker panel impact zones.",
  },
  {
    id: "color-wrap",
    name: "Full Color Change Wrap",
    basePrice: 3499,
    days: "3–4 Studio Days",
    warranty: "5-Year Craftsmanship Guarantee",
    tag: "Complete Transformation",
    description: "300+ colors with non-invasive edge tucking, mirror gloss, satin, or liquid metallic pigments.",
  },
  {
    id: "ceramic-correction",
    name: "Multi-Stage Polish + 9H Ceramic",
    basePrice: 1499,
    days: "2 Studio Days",
    warranty: "5-Year Carfax Registered",
    tag: "Concours Mirror Finish",
    description: "Micron-level ultrasonic paint leveling followed by permanent covalent graphene molecular coating.",
  },
];

const FINISHES: FinishOption[] = [
  {
    id: "stealth-matte",
    name: "Stealth Satin Matte",
    surcharge: 350,
    badge: "Most Popular",
    description: "Converts gloss factory clearcoat into deep satin with thermal healing.",
  },
  {
    id: "ultra-gloss",
    name: "Ultra-Gloss High Clarity",
    surcharge: 0,
    badge: "OEM Match",
    description: "Zero orange-peel optical clarity that maximizes metallic paint flakes.",
  },
  {
    id: "bespoke-color",
    name: "Bespoke Satin Color Cast",
    surcharge: 250,
    badge: "Custom Pigment",
    description: "High-grade 3M/Avery cast vinyl with ultra-smooth air-release channels.",
  },
  {
    id: "graphene-matrix",
    name: "9H Graphene Molecular Infusion",
    surcharge: 450,
    badge: "Extreme Hydrophobic",
    description: "Sacrificial chemical barrier with 115° contact angle over film.",
  },
];

export const AegisConfigurator: React.FC<AegisConfiguratorProps> = ({ onReserveSlot }) => {
  const [selectedSegmentId, setSelectedSegmentId] = useState("coupe");
  const [selectedPackageId, setSelectedPackageId] = useState("full-stealth-ppf");
  const [selectedFinishId, setSelectedFinishId] = useState("stealth-matte");

  const selectedSegment = VEHICLE_SEGMENTS.find((s) => s.id === selectedSegmentId) || VEHICLE_SEGMENTS[0];
  const selectedPackage = PACKAGES.find((p) => p.id === selectedPackageId) || PACKAGES[0];
  const selectedFinish = FINISHES.find((f) => f.id === selectedFinishId) || FINISHES[0];

  // Calculate dynamic price
  const estimatedPrice = Math.round(
    selectedPackage.basePrice * selectedSegment.multiplier + selectedFinish.surcharge
  );

  const handleReserve = () => {
    onReserveSlot({
      segment: selectedSegment.name,
      package: selectedPackage.name,
      finish: selectedFinish.name,
      estimatedPrice,
      estimatedDays: selectedPackage.days,
    });
  };

  return (
    <section id="configurator" className="py-20 sm:py-28 bg-white relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-amber-300 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            <span className="text-xs font-mono font-bold tracking-widest text-amber-800 uppercase">
              Instant Pricing Engine
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Full-Width Vehicle <br />
            <span className="bg-gradient-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent">
              Cost & Studio Days Configurator
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Select your vehicle profile, desired protection architecture, and topcoat finish to receive an instant, transparent estimate with turn-around time and warranty term.
          </p>
        </motion.div>

        {/* 3-Step Interactive Configurator Form */}
        <div className="space-y-12">
          {/* STEP 1: Vehicle Segment */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="w-7 h-7 rounded-full bg-amber-100 border border-amber-300 text-amber-800 font-mono font-bold text-xs flex items-center justify-center">
                01
              </span>
              <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                Select Vehicle Segment & Dimensions
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
              {VEHICLE_SEGMENTS.map((seg) => {
                const isSelected = selectedSegmentId === seg.id;
                return (
                  <button
                    key={seg.id}
                    type="button"
                    onClick={() => setSelectedSegmentId(seg.id)}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      isSelected
                        ? "bg-amber-50 border-2 border-amber-500 shadow-sm ring-1 ring-amber-500"
                        : "bg-[#F8FAFC] border-slate-200 hover:border-slate-300 text-slate-700"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-sm font-bold ${isSelected ? "text-amber-900" : "text-slate-900"}`}>
                        {seg.name}
                      </span>
                      {isSelected && <Check className="w-4 h-4 text-amber-600" />}
                    </div>
                    <p className="text-[11px] text-slate-500 leading-snug line-clamp-2">
                      {seg.examples}
                    </p>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* STEP 2: Protection Package */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="w-7 h-7 rounded-full bg-amber-100 border border-amber-300 text-amber-800 font-mono font-bold text-xs flex items-center justify-center">
                02
              </span>
              <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                Choose Protection & Styling Package
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {PACKAGES.map((pkg) => {
                const isSelected = selectedPackageId === pkg.id;
                return (
                  <button
                    key={pkg.id}
                    type="button"
                    onClick={() => setSelectedPackageId(pkg.id)}
                    className={`p-5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                      isSelected
                        ? "bg-amber-50 border-2 border-amber-500 shadow-md ring-1 ring-amber-500"
                        : "bg-[#F8FAFC] border-slate-200 hover:border-slate-300 text-slate-700"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold text-amber-800 bg-amber-100 border border-amber-200">
                          {pkg.tag}
                        </span>
                        {isSelected && <Check className="w-4 h-4 text-amber-600" />}
                      </div>

                      <h4 className={`text-base font-bold mb-1.5 ${isSelected ? "text-amber-900" : "text-slate-900"}`}>
                        {pkg.name}
                      </h4>

                      <p className="text-xs text-slate-600 leading-relaxed mb-4">
                        {pkg.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-200 space-y-1 text-xs">
                      <div className="flex justify-between text-slate-600">
                        <span>Turnaround:</span>
                        <span className="font-semibold text-slate-900">{pkg.days}</span>
                      </div>
                      <div className="flex justify-between text-slate-600">
                        <span>Base Cost:</span>
                        <span className="font-mono font-bold text-slate-900">${pkg.basePrice.toLocaleString()}</span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* STEP 3: Finish & Material */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="w-7 h-7 rounded-full bg-amber-100 border border-amber-300 text-amber-800 font-mono font-bold text-xs flex items-center justify-center">
                03
              </span>
              <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                Select Topcoat Finish & Chemical Matrix
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {FINISHES.map((fin) => {
                const isSelected = selectedFinishId === fin.id;
                return (
                  <button
                    key={fin.id}
                    type="button"
                    onClick={() => setSelectedFinishId(fin.id)}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      isSelected
                        ? "bg-amber-50 border-2 border-amber-500 shadow-sm ring-1 ring-amber-500"
                        : "bg-[#F8FAFC] border-slate-200 hover:border-slate-300 text-slate-700"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className={`text-sm font-bold ${isSelected ? "text-amber-900" : "text-slate-900"}`}>
                        {fin.name}
                      </span>
                      {isSelected && <Check className="w-4 h-4 text-amber-600" />}
                    </div>
                    <p className="text-[11px] text-slate-600 mb-2 leading-relaxed">
                      {fin.description}
                    </p>
                    <div className="text-[11px] font-mono text-amber-800 font-bold">
                      {fin.surcharge > 0 ? `+ $${fin.surcharge} Material Surcharge` : "Included in Package"}
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Dynamic Full-Width Result Bar (Light Mode Pristine) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-12 p-6 sm:p-8 rounded-2xl bg-amber-50/70 border-2 border-amber-400 shadow-lg flex flex-col lg:flex-row items-center justify-between gap-6"
        >
          {/* Left Details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full lg:w-auto">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-600 font-bold block mb-0.5">
                Calculated Estimate
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight font-mono">
                  ${estimatedPrice.toLocaleString()}
                </span>
                <span className="text-xs text-slate-600 font-medium">All-Inclusive</span>
              </div>
            </div>

            <div className="border-t sm:border-t-0 sm:border-l border-amber-200/80 pt-3 sm:pt-0 sm:pl-6">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-600 font-bold block mb-0.5">
                Estimated Cleanroom Time
              </span>
              <div className="flex items-center gap-1.5 text-slate-900 font-bold text-base sm:text-lg">
                <Clock className="w-4 h-4 text-amber-600" />
                <span>{selectedPackage.days}</span>
              </div>
            </div>

            <div className="border-t sm:border-t-0 sm:border-l border-amber-200/80 pt-3 sm:pt-0 sm:pl-6">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-600 font-bold block mb-0.5">
                Studio Coverage
              </span>
              <div className="flex items-center gap-1.5 text-emerald-700 font-mono text-xs sm:text-sm font-bold">
                <Award className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{selectedPackage.warranty}</span>
              </div>
            </div>
          </div>

          {/* Right Action Button */}
          <div className="w-full lg:w-auto shrink-0">
            <button
              onClick={handleReserve}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm sm:text-base tracking-wide transition-all shadow-[0_2px_14px_rgba(217,119,6,0.3)] hover:shadow-[0_4px_20px_rgba(217,119,6,0.45)] flex items-center justify-center gap-2 active:scale-98 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              <Sparkles className="w-4 h-4 text-slate-950" />
              <span>Reserve Studio Slot With This Config</span>
              <ArrowRight className="w-4 h-4 text-slate-950 ml-1" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
