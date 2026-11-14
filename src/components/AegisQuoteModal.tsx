"use client";

import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { X, CheckCircle2, Shield, Calendar, Clock, Car, Phone, Mail, User, Sparkles } from "lucide-react";

export interface PreloadBookingData {
  segment?: string;
  package?: string;
  finish?: string;
  estimatedPrice?: number;
  estimatedDays?: string;
}

interface AegisQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preloadedData?: PreloadBookingData | null;
}

export const AegisQuoteModal: React.FC<AegisQuoteModalProps> = ({
  isOpen,
  onClose,
  preloadedData,
}) => {
  const [formData, setFormData] = useState({
    vehicleYear: "2025",
    vehicleMake: "Porsche",
    vehicleModel: "911 GT3 RS",
    segment: preloadedData?.segment || "Coupe / Sports Car",
    packageType: preloadedData?.package || "Full Body Stealth PPF",
    finish: preloadedData?.finish || "Stealth Satin Matte",
    date: "",
    timeSlot: "09:00 AM (Cleanroom Morning Slot)",
    fullName: "",
    email: "",
    phone: "",
    notes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedTicket, setSubmittedTicket] = useState<string | null>(null);

  // Sync preloaded data when opened
  useEffect(() => {
    if (preloadedData) {
      setFormData((prev) => ({
        ...prev,
        segment: preloadedData.segment || prev.segment,
        packageType: preloadedData.package || prev.packageType,
        finish: preloadedData.finish || prev.finish,
      }));
    }
  }, [preloadedData]);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const generatedId = `AEG-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmittedTicket(generatedId);

      // Trigger Confetti Celebration
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#F59E0B", "#FBBF24", "#D97706", "#FFFFFF"],
      });
    }, 700);
  };

  const handleResetAndClose = () => {
    setSubmittedTicket(null);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      <div
        className="relative w-full max-w-2xl bg-[#0F172A] border border-slate-700/80 rounded-2xl shadow-2xl p-6 sm:p-8 my-8 text-slate-100 max-h-[92vh] overflow-y-auto custom-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submittedTicket ? (
          /* Confirmation State */
          <div className="text-center py-6">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <span className="inline-block px-3 py-1 text-xs font-mono font-bold tracking-widest text-amber-400 uppercase bg-amber-500/10 border border-amber-500/30 rounded-full mb-3">
              Cleanroom Reservation Confirmed
            </span>

            <h3 id="booking-modal-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
              Studio Bench Reserved
            </h3>

            <p className="text-slate-300 text-sm max-w-md mx-auto mb-6">
              Thank you, <span className="font-semibold text-white">{formData.fullName || "valued client"}</span>. Our master studio director has received your reservation request for your{" "}
              <span className="text-amber-400 font-medium">
                {formData.vehicleYear} {formData.vehicleMake} {formData.vehicleModel}
              </span>.
            </p>

            {/* Build Ticket Badge */}
            <div className="bg-[#0B0F17] border border-slate-700 rounded-xl p-5 mb-6 max-w-sm mx-auto text-left">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
                <span className="text-xs uppercase text-slate-400 font-mono">Build Ticket ID</span>
                <span className="text-lg font-mono font-bold text-amber-400 tracking-wider">
                  {submittedTicket}
                </span>
              </div>
              <div className="space-y-1.5 text-xs text-slate-300">
                <div className="flex justify-between">
                  <span className="text-slate-400">Package:</span>
                  <span className="font-medium text-slate-200">{formData.packageType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Finish:</span>
                  <span className="font-medium text-slate-200">{formData.finish}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Studio Bay:</span>
                  <span className="font-medium text-emerald-400">Class-100 Cleanroom</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-400 mb-6">
              A verification SMS and cleanroom intake protocol document have been sent to{" "}
              <span className="text-slate-200">{formData.phone || "your phone"}</span> and{" "}
              <span className="text-slate-200">{formData.email || "your email"}</span>.
            </p>

            <button
              onClick={handleResetAndClose}
              className="w-full sm:w-auto px-8 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-sm tracking-wide hover:from-amber-400 hover:to-amber-500 transition-all shadow-[0_0_20px_rgba(245,158,11,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 active:scale-98"
            >
              Done & Return to Studio
            </button>
          </div>
        ) : (
          /* Intake Form */
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-5 h-5 text-amber-400" />
              <span className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase">
                Cleanroom Bench Reservation
              </span>
            </div>

            <h3 id="booking-modal-title" className="text-2xl font-extrabold text-white tracking-tight mb-1">
              Book Studio Slot & Estimate
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mb-6">
              Reserve your vehicle’s dedicated cleanroom bay with our certified master installers.
            </p>

            <form id="booking-intake-form" onSubmit={handleSubmit} className="space-y-4">
              {/* Vehicle Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Year *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.vehicleYear}
                    onChange={(e) => setFormData({ ...formData, vehicleYear: e.target.value })}
                    className="w-full bg-[#0B0F17] border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:border-amber-500 focus:outline-none"
                    placeholder="2025"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Make *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.vehicleMake}
                    onChange={(e) => setFormData({ ...formData, vehicleMake: e.target.value })}
                    className="w-full bg-[#0B0F17] border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:border-amber-500 focus:outline-none"
                    placeholder="Porsche"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Model *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.vehicleModel}
                    onChange={(e) => setFormData({ ...formData, vehicleModel: e.target.value })}
                    className="w-full bg-[#0B0F17] border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:border-amber-500 focus:outline-none"
                    placeholder="911 GT3 RS"
                  />
                </div>
              </div>

              {/* Package & Finish */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Protection Package *
                  </label>
                  <select
                    value={formData.packageType}
                    onChange={(e) => setFormData({ ...formData, packageType: e.target.value })}
                    className="w-full bg-[#0B0F17] border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:border-amber-500 focus:outline-none"
                  >
                    <option value="Full Body Stealth PPF">Full Body Stealth PPF ($4,899+)</option>
                    <option value="Front Track Pack PPF">Front Track Pack PPF ($1,899+)</option>
                    <option value="Bespoke Color Change Wrap">Bespoke Color Change Wrap ($3,499+)</option>
                    <option value="Multi-Stage Paint Correction">Paint Correction & Polish ($899+)</option>
                    <option value="9H Ceramic & Graphene Coating">9H Ceramic & Graphene ($999+)</option>
                    <option value="Nano-Ceramic Window Tint">Nano-Ceramic Window Tint ($449+)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Finish / Material *
                  </label>
                  <select
                    value={formData.finish}
                    onChange={(e) => setFormData({ ...formData, finish: e.target.value })}
                    className="w-full bg-[#0B0F17] border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:border-amber-500 focus:outline-none"
                  >
                    <option value="Stealth Satin Matte">Stealth Satin Matte (Self-Healing)</option>
                    <option value="Ultra-Gloss Optical Clear">Ultra-Gloss Optical Clear (10 Mil)</option>
                    <option value="Bespoke Satin Color Cast">Bespoke Satin Color Cast (3M / Avery)</option>
                    <option value="Liquid Metallic Gloss">Liquid Metallic Gloss Cast</option>
                    <option value="9H Covalent Graphene Matrix">9H Covalent Graphene Matrix</option>
                  </select>
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Preferred Studio Date *
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-[#0B0F17] border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:border-amber-500 focus:outline-none [color-scheme:dark]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Intake Time Window *
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full bg-[#0B0F17] border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:border-amber-500 focus:outline-none"
                  >
                    <option value="08:30 AM (Cleanroom Morning Slot)">08:30 AM (Early Intake Slot)</option>
                    <option value="11:00 AM (Mid-Day Bench Slot)">11:00 AM (Mid-Day Bench Slot)</option>
                    <option value="02:30 PM (Afternoon Staging)">02:30 PM (Afternoon Staging)</option>
                    <option value="VIP Flatbed Enclosed Concierge Pickup">VIP Flatbed Enclosed Concierge Pickup</option>
                  </select>
                </div>
              </div>

              {/* Client Info */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-[#0B0F17] border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:border-amber-500 focus:outline-none"
                    placeholder="Marcus Sterling"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#0B0F17] border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:border-amber-500 focus:outline-none"
                    placeholder="marcus@example.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Phone / Mobile *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#0B0F17] border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:border-amber-500 focus:outline-none"
                    placeholder="+1 (212) 555-0198"
                  />
                </div>
              </div>

              {/* Special Notes */}
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Bespoke Notes or Custom Request (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-[#0B0F17] border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:border-amber-500 focus:outline-none"
                  placeholder="e.g. Extended edge wrapping on carbon aero fenders, ceramic coat brake calipers..."
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-500 via-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm tracking-wide transition-all shadow-[0_0_24px_rgba(245,158,11,0.25)] disabled:opacity-50 flex items-center justify-center gap-2 active:scale-98 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-slate-950" />
                      <span>Confirm Studio Reservation & Generate Build Ticket</span>
                    </>
                  )}
                </button>
                <p className="text-center text-[11px] text-slate-400 mt-2">
                  No commitment required today. Our atelier manager will call to confirm panel clearance and vehicle logistics.
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
