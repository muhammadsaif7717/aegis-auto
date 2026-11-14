"use client";

import React from "react";
import { MapPin, Phone, Mail, Clock, Calendar, Sparkles, Navigation } from "lucide-react";

interface AegisLocationProps {
  onOpenBooking: () => void;
}

export const AegisLocation: React.FC<AegisLocationProps> = ({ onOpenBooking }) => {
  const schedule = [
    { days: "Monday – Friday", hours: "8:00 AM – 7:00 PM", status: "Open / Standard Cleanroom" },
    { days: "Saturday", hours: "9:00 AM – 5:00 PM", status: "Open / Handover & Intake" },
    { days: "Sunday", hours: "Closed", status: "VIP Private Appointments Only" },
  ];

  return (
    <section id="location" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-amber-300 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            <span className="text-xs font-mono font-bold tracking-widest text-amber-800 uppercase">
              Flagship Atelier Location
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Visit Our Manhattan <br />
            <span className="bg-gradient-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent">
              Cleanroom Facility
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Conveniently situated in the premier New York automotive district with high-security subterranean private intake bays for low-ground-clearance exotics.
          </p>
        </div>

        {/* Direct Side-by-Side 6-Col / 6-Col Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: 6 Cols Crisp Interactive Map Embed */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative w-full h-[380px] sm:h-[450px] lg:h-full min-h-[380px] rounded-2xl overflow-hidden border border-slate-300 shadow-md bg-slate-100">
              <iframe
                title="Aegis Auto Cleanroom Studio Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.361465225016!2d-73.99304382347141!3d40.7045763377289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a315024cfbb%3A0xe5ecfa748f219739!2s25%20Main%20St%2C%20Brooklyn%2C%20NY%2011201!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full object-cover"
              />

              {/* Custom Pin Overlay Card (Light Mode) */}
              <div className="absolute top-4 left-4 right-4 sm:right-auto sm:max-w-xs p-3.5 rounded-xl bg-white/95 border border-amber-400 backdrop-blur-md shadow-lg">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500 shadow-[0_0_6px_#D97706]" />
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Aegis Auto Flagship Atelier
                  </span>
                </div>
                <p className="text-[11px] text-slate-600">
                  25 Main Street, New York, NY 11201 (DUMBO / Manhattan Bridge District)
                </p>
                <div className="mt-2 text-[10px] font-mono text-emerald-700 font-bold">
                  ✓ Low-Approach Ramps & 24/7 Monitored Cleanrooms
                </div>
              </div>
            </div>
          </div>

          {/* Right: 6 Cols Studio Details & Schedule Table */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200 shadow-md flex flex-col justify-between">
            <div>
              {/* Direct Contacts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-bold block mb-1">
                    Direct Studio Phone
                  </span>
                  <a
                    href="tel:+18005899727"
                    className="text-base sm:text-lg font-mono font-bold text-amber-700 hover:text-amber-800 flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4 shrink-0 text-amber-600" />
                    <span>+1 (800) 589-WRAP</span>
                  </a>
                  <span className="text-[10px] text-slate-500 block mt-1">
                    Direct line to Master Technician
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-bold block mb-1">
                    Concierge Inquiries
                  </span>
                  <a
                    href="mailto:atelier@aegisauto.com"
                    className="text-sm sm:text-base font-bold text-slate-900 hover:text-amber-700 flex items-center gap-2 truncate"
                  >
                    <Mail className="w-4 h-4 shrink-0 text-amber-600" />
                    <span className="truncate">atelier@aegisauto.com</span>
                  </a>
                  <span className="text-[10px] text-slate-500 block mt-1">
                    Response within 2 hours
                  </span>
                </div>
              </div>

              {/* Schedule Table */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-4 h-4 text-amber-600" />
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-mono">
                    Cleanroom Operating Hours
                  </h3>
                </div>

                <div className="rounded-xl border border-slate-200 overflow-hidden divide-y divide-slate-200 bg-white shadow-sm">
                  {schedule.map((row, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs"
                    >
                      <div className="font-bold text-slate-900">{row.days}</div>
                      <div className="font-mono font-bold text-amber-800">{row.hours}</div>
                      <div className="text-[11px] text-slate-500 font-medium">{row.status}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Supercar Logistics Guarantee */}
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-slate-700 space-y-1 mb-8">
                <div className="font-bold text-amber-900">Enclosed Concierge Transport Available:</div>
                <p>
                  We coordinate insured enclosed flatbed vehicle transport throughout NY, NJ, CT, and PA for high-profile track and hypercar deliveries.
                </p>
              </div>
            </div>

            {/* Single Prominent Primary CTA */}
            <div>
              <button
                onClick={onOpenBooking}
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-amber-500 via-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm sm:text-base tracking-wide transition-all shadow-[0_2px_12px_rgba(217,119,6,0.3)] hover:shadow-[0_4px_18px_rgba(217,119,6,0.45)] flex items-center justify-center gap-2 active:scale-98 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>Reserve Studio Bench Online</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
