"use client";

import React, { useState, useEffect } from "react";
import { X, Search, Shield, CheckCircle2, Clock, Wrench, Sparkles, AlertCircle } from "lucide-react";
import { INITIAL_TRACK_BUILDS, BuildTrackStatus } from "@/data/aegisData";

interface AegisTrackerModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTicket?: string;
}

export const AegisTrackerModal: React.FC<AegisTrackerModalProps> = ({
  isOpen,
  onClose,
  initialTicket = "AEG-7842",
}) => {
  const [searchTicket, setSearchTicket] = useState(initialTicket);
  const [currentBuild, setCurrentBuild] = useState<BuildTrackStatus | null>(
    INITIAL_TRACK_BUILDS[initialTicket] || null
  );
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (initialTicket && INITIAL_TRACK_BUILDS[initialTicket]) {
      setSearchTicket(initialTicket);
      setCurrentBuild(INITIAL_TRACK_BUILDS[initialTicket]);
      setNotFound(false);
    }
  }, [initialTicket, isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchTicket.trim().toUpperCase();
    if (INITIAL_TRACK_BUILDS[query]) {
      setCurrentBuild(INITIAL_TRACK_BUILDS[query]);
      setNotFound(false);
    } else {
      setCurrentBuild(null);
      setNotFound(true);
    }
  };

  const handleQuickSelect = (ticket: string) => {
    setSearchTicket(ticket);
    setCurrentBuild(INITIAL_TRACK_BUILDS[ticket] || null);
    setNotFound(false);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/50 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="tracker-modal-title"
    >
      <div
        className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-2xl shadow-2xl p-6 sm:p-8 my-8 text-slate-900 max-h-[92vh] overflow-y-auto custom-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 mb-2">
          <Shield className="w-5 h-5 text-amber-600" />
          <span className="text-xs font-mono font-bold tracking-widest text-amber-800 uppercase">
            Live Atelier Build Portal
          </span>
        </div>

        <h3 id="tracker-modal-title" className="text-2xl font-extrabold text-slate-900 tracking-tight mb-2">
          Track Vehicle Cleanroom Status
        </h3>
        <p className="text-slate-600 text-xs sm:text-sm mb-6">
          Enter your 7-character Aegis build ticket number to inspect real-time stage progress, cleanroom sensor conditions, and estimated completion.
        </p>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="mb-4">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                value={searchTicket}
                onChange={(e) => setSearchTicket(e.target.value.toUpperCase())}
                placeholder="e.g. AEG-7842"
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm font-mono tracking-wider text-slate-900 uppercase focus:border-amber-500 focus:outline-none focus:bg-white placeholder:text-slate-400 placeholder:normal-case font-bold"
              />
            </div>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm tracking-wide transition-all shadow-sm active:scale-98 flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              <Search className="w-4 h-4" />
              <span>Track</span>
            </button>
          </div>
        </form>

        {/* Quick Sample Tickets */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="text-xs text-slate-500 font-medium">Sample Active Builds:</span>
          {Object.keys(INITIAL_TRACK_BUILDS).map((tId) => (
            <button
              key={tId}
              type="button"
              onClick={() => handleQuickSelect(tId)}
              className={`text-xs font-mono font-bold px-2.5 py-1 rounded-md border transition-all ${
                searchTicket === tId
                  ? "bg-amber-100 border-amber-400 text-amber-900"
                  : "bg-slate-100 border-slate-200 text-slate-700 hover:border-slate-300"
              }`}
            >
              {tId}
            </button>
          ))}
        </div>

        {notFound ? (
          <div className="p-6 rounded-xl bg-rose-50 border border-rose-200 text-center">
            <AlertCircle className="w-8 h-8 text-rose-600 mx-auto mb-2" />
            <h4 className="text-base font-bold text-slate-900 mb-1">Ticket Not Found</h4>
            <p className="text-xs text-slate-600 mb-3">
              We could not find active cleanroom records for &ldquo;{searchTicket}&rdquo;. Please verify your booking receipt or contact the studio concierge directly.
            </p>
            <button
              onClick={() => handleQuickSelect("AEG-7842")}
              className="text-xs text-amber-700 font-bold underline hover:text-amber-800"
            >
              View demo ticket AEG-7842
            </button>
          </div>
        ) : currentBuild ? (
          <div className="space-y-6">
            {/* Overview Card (Light Mode) */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#F8FAFC] border border-slate-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-3 mb-3">
                <div>
                  <div className="text-xs font-mono text-amber-800 font-bold mb-0.5">
                    {currentBuild.ticketId} • {currentBuild.clientName}
                  </div>
                  <h4 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
                    {currentBuild.vehicle}
                  </h4>
                </div>
                <div className="text-left sm:text-right">
                  <div className="text-[11px] uppercase tracking-wider text-slate-500 font-bold">Target Delivery</div>
                  <div className="text-xs font-bold text-emerald-700 font-mono">
                    {currentBuild.completionDate}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                <div>
                  <span className="text-slate-500">Service: </span>
                  <span className="font-bold text-slate-900">{currentBuild.service}</span>
                </div>
                <div>
                  <span className="text-slate-500">Cleanroom Bay: </span>
                  <span className="font-bold text-slate-900">{currentBuild.cleanroomBay}</span>
                </div>
                <div>
                  <span className="text-slate-500">Lead Tech: </span>
                  <span className="font-bold text-slate-900">{currentBuild.leadTechnician}</span>
                </div>
                <div>
                  <span className="text-slate-500">Atmospheric Air: </span>
                  <span className="font-bold text-emerald-700">Class-100 HEPA 99.99% Dust Free</span>
                </div>
              </div>

              {currentBuild.notes && (
                <div className="mt-3 pt-3 border-t border-slate-200 text-xs text-amber-950 bg-amber-50 p-2.5 rounded-lg border border-amber-200">
                  <span className="font-bold text-amber-900">Technician Log: </span>
                  {currentBuild.notes}
                </div>
              )}
            </div>

            {/* Step-by-Step Progress Timeline */}
            <div>
              <h5 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold mb-3">
                Installation Audit Stages
              </h5>

              <div className="space-y-3">
                {currentBuild.steps.map((st) => (
                  <div
                    key={st.number}
                    className={`p-3.5 rounded-xl border transition-all flex items-start gap-3 ${
                      st.completed
                        ? "bg-white border-emerald-300 shadow-sm"
                        : st.number === currentBuild.currentStep
                        ? "bg-amber-50/80 border-2 border-amber-400 shadow-sm"
                        : "bg-slate-50 border-slate-200 opacity-60"
                    }`}
                  >
                    <div className="mt-0.5 shrink-0">
                      {st.completed ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      ) : st.number === currentBuild.currentStep ? (
                        <div className="w-5 h-5 rounded-full border-2 border-amber-600 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-amber-600" />
                        </div>
                      ) : (
                        <div className="w-5 h-5 rounded-full border border-slate-300 flex items-center justify-center text-[10px] font-mono text-slate-500">
                          {st.number}
                        </div>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-bold text-slate-900 tracking-tight">
                          Step 0{st.number}: {st.title}
                        </span>
                        <span className="text-[11px] font-mono text-slate-500 shrink-0 font-medium">
                          {st.time}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 mt-0.5">{st.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Studio Hotline */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600 border-t border-slate-200">
              <span>Have technical questions for your installer?</span>
              <a
                href="tel:+18005899727"
                className="text-amber-800 hover:text-amber-900 font-bold flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded px-1"
              >
                Call Concierge: +1 (800) 589-WRAP
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
