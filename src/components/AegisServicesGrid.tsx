"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SERVICES_DATA, ServiceItem } from "@/data/aegisData";
import { Shield, Clock, Check, Sparkles, ArrowRight, Layers } from "lucide-react";
import { PreloadBookingData } from "./AegisQuoteModal";

interface AegisServicesGridProps {
  onSelectService: (service: PreloadBookingData) => void;
}

export const AegisServicesGrid: React.FC<AegisServicesGridProps> = ({ onSelectService }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const handleBookService = (service: ServiceItem) => {
    onSelectService({
      package: service.title,
      estimatedPrice: service.startingPrice,
      estimatedDays: service.turnaround,
    });
  };

  const handleConfigureClick = (service: ServiceItem) => {
    const configElem = document.getElementById("configurator");
    if (configElem) {
      configElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-amber-300 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <span className="text-xs font-mono font-bold tracking-widest text-amber-800 uppercase">
                Bespoke Atelier Roster
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Elite Vehicle Protection &{" "}
              <span className="bg-gradient-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent">
                Aesthetic Engineering
              </span>
            </h2>
          </div>

          <p className="text-slate-600 text-sm max-w-md">
            Every vehicle enters our sealed cleanroom bays under controlled temperature and positive air pressure. We guarantee seamless edge tucking with zero knife-to-clearcoat contact.
          </p>
        </div>

        {/* 6 Rich Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="group flex flex-col rounded-2xl bg-white border border-slate-200/90 hover:border-amber-400 transition-all duration-300 overflow-hidden hover:shadow-[0_12px_36px_rgba(217,119,6,0.12)] shadow-sm"
            >
              {/* Card Image Header */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[0.85]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500 text-slate-950 shadow-md">
                    {service.badge}
                  </span>
                </div>

                {/* Thickness / Metrology Pill */}
                {service.thickness && (
                  <div className="absolute top-4 right-4">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-white/95 border border-slate-200 text-amber-800 backdrop-blur-md shadow-sm">
                      {service.thickness}
                    </span>
                  </div>
                )}

                {/* Turnaround Time Floating Strip */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white">
                  <div className="flex items-center gap-1.5 font-medium bg-slate-950/70 px-2.5 py-1 rounded-lg backdrop-blur-sm">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>{service.turnaround}</span>
                  </div>
                  <div className="text-[11px] font-mono text-emerald-300 font-semibold bg-slate-950/70 px-2.5 py-1 rounded-lg backdrop-blur-sm">
                    {service.warranty}
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-amber-800 transition-colors">
                    {service.title}
                  </h3>
                  <div className="text-xs text-amber-850 font-bold mb-3">
                    {service.subtitle}
                  </div>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Feature Specs */}
                  <ul className="space-y-2 mb-6">
                    {service.specs.map((spec, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price & Action Row */}
                <div className="pt-4 border-t border-slate-200">
                  <div className="flex items-baseline justify-between mb-4">
                    <span className="text-xs text-slate-500 font-medium">Starting from:</span>
                    <div className="text-right">
                      <span className="text-2xl font-extrabold text-slate-900 tracking-tight font-mono">
                        ${service.startingPrice.toLocaleString()}
                      </span>
                      <span className="text-[10px] text-slate-500 block">+ Tax & Prep</span>
                    </div>
                  </div>

                  {/* Dual Action Buttons */}
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => handleConfigureClick(service)}
                      className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold border border-slate-300 transition-colors text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                    >
                      Configure
                    </button>
                    <button
                      onClick={() => handleBookService(service)}
                      className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs font-bold transition-all shadow-[0_2px_10px_rgba(217,119,6,0.25)] text-center flex items-center justify-center gap-1 active:scale-98 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                    >
                      <span>Book Bench</span>
                      <ArrowRight className="w-3 h-3 text-slate-950" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
