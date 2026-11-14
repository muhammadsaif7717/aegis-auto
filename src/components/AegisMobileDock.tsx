"use client";

import React from "react";
import { Phone, Calculator, MapPin, Sparkles } from "lucide-react";

interface AegisMobileDockProps {
  onOpenBooking: () => void;
}

export const AegisMobileDock: React.FC<AegisMobileDockProps> = ({ onOpenBooking }) => {
  const handleScrollToLocation = () => {
    const locElem = document.getElementById("location");
    if (locElem) {
      locElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToConfig = () => {
    const confElem = document.getElementById("configurator");
    if (confElem) {
      confElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside
      aria-label="Mobile quick actions"
      className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-[#070A0F]/95 backdrop-blur-xl border-t border-white/[0.1] px-4 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-[0_-8px_30px_rgba(0,0,0,0.8)]"
    >
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        {/* Direct Call Button */}
        <a
          href="tel:+18005899727"
          className="flex-1 py-2.5 px-2 rounded-xl bg-slate-800/90 border border-slate-700/80 text-slate-200 text-xs font-semibold flex flex-col items-center justify-center gap-1 active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 text-amber-400" />
          <span>Call Studio</span>
        </a>

        {/* Location Button */}
        <button
          onClick={handleScrollToLocation}
          className="flex-1 py-2.5 px-2 rounded-xl bg-slate-800/90 border border-slate-700/80 text-slate-200 text-xs font-semibold flex flex-col items-center justify-center gap-1 active:scale-95 transition-transform"
        >
          <MapPin className="w-4 h-4 text-amber-400" />
          <span>Location</span>
        </button>

        {/* Primary Booking / Config CTA */}
        <button
          onClick={onOpenBooking}
          className="flex-[1.5] py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-500 via-amber-500 to-amber-600 text-slate-950 text-xs font-bold flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(245,158,11,0.3)] active:scale-95 transition-transform"
        >
          <Sparkles className="w-3.5 h-3.5 text-slate-950" />
          <span>Book Bench</span>
        </button>
      </div>
    </aside>
  );
};
