import React from "react";
import { REVIEWS_DATA } from "@/data/aegisData";
import { Star, ShieldCheck, Quote } from "lucide-react";

export const AegisReviews: React.FC = () => {
  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#070A0F] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header & Compact Trust Banner */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-amber-500/30 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase">
                Owner Testimonials
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Verified Supercar Owner &{" "}
              <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Collector Reviews
              </span>
            </h2>
          </div>

          {/* Compact Trust Score Card */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#0F172A] border border-amber-500/30 flex items-center gap-4 shrink-0 shadow-lg">
            <div className="text-3xl font-extrabold text-amber-400 font-mono">4.9 / 5</div>
            <div className="border-l border-slate-700 pl-4">
              <div className="flex items-center gap-1 text-amber-400 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <div className="text-xs text-slate-300 font-medium">
                1,200+ Verified Owner Reviews
              </div>
              <div className="text-[10px] text-slate-400">Google Verified & DuPont Registry</div>
            </div>
          </div>
        </div>

        {/* 6 Rich Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS_DATA.map((rev) => (
            <div
              key={rev.id}
              className="p-6 sm:p-7 rounded-2xl bg-[#0F172A] border border-white/[0.08] hover:border-amber-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Top Row: Stars + Date */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">{rev.date}</span>
                </div>

                {/* Quote Text */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 italic">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              {/* Bottom Client Specs */}
              <div className="pt-4 border-t border-slate-800">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                      <span>{rev.author}</span>
                      {rev.verified && (
                        <span title="Verified Supercar Owner">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 inline" />
                        </span>
                      )}
                    </h4>
                    <span className="text-[11px] text-slate-400">{rev.role} • {rev.location}</span>
                  </div>
                </div>

                <div className="bg-[#0B0F17] p-2.5 rounded-lg border border-slate-800 text-[11px] space-y-1">
                  <div className="flex justify-between text-slate-400">
                    <span>Vehicle:</span>
                    <span className="text-slate-200 font-semibold">{rev.vehicle}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Service:</span>
                    <span className="text-amber-400/90 font-medium truncate max-w-[190px]">
                      {rev.service}
                    </span>
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
