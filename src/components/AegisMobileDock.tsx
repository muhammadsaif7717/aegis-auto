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

  return (
    <aside
      aria-label="Mobile quick actions"
      className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-white/95 backdrop-blur-xl border-t border-slate-200 px-4 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-[0_-4px_20px_rgba(0,0,0,0.08)]"
    >
      <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
        {/* Direct Call Button */}
        <a
          href="tel:+18005899727"
          className="flex-1 py-2.5 px-2 rounded-xl bg-slate-100 border border-slate-300 text-slate-800 text-xs font-bold flex flex-col items-center justify-center gap-1 active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 text-amber-600" />
          <span>Call Studio</span>
        </a>

        {/* Location Button */}
        <button
          onClick={handleScrollToLocation}
          className="flex-1 py-2.5 px-2 rounded-xl bg-slate-100 border border-slate-300 text-slate-800 text-xs font-bold flex flex-col items-center justify-center gap-1 active:scale-95 transition-transform"
        >
          <MapPin className="w-4 h-4 text-amber-600" />
          <span>Location</span>
        </button>

        {/* Primary Booking / Config CTA */}
        <button
          onClick={onOpenBooking}
          className="flex-[1.5] py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-500 via-amber-500 to-amber-600 text-slate-950 text-xs font-bold flex items-center justify-center gap-1.5 shadow-[0_2px_10px_rgba(217,119,6,0.3)] active:scale-95 transition-transform"
        >
          <Sparkles className="w-3.5 h-3.5 text-slate-950" />
          <span>Book Bench</span>
        </button>
      </div>
    </aside>
  );
};
