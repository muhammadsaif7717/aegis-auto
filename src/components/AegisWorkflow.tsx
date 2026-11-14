import React from "react";
import { Sparkles, Cpu, Wind, ShieldCheck, ArrowRight } from "lucide-react";

export const AegisWorkflow: React.FC = () => {
  const steps = [
    {
      number: "01",
      icon: Sparkles,
      title: "24-Stage Decontamination & Clay Cleansing",
      timeline: "Duration: 4–6 Hours",
      description:
        "Every vehicle undergoes pH-neutral foam cleansing, iron fallout chemical dissolution, tar removal, and synthetic clay-bar extraction to produce a sterile optical surface.",
      technicalPoint: "Ultrasonic paint depth gauge verification across 36 body coordinates.",
    },
    {
      number: "02",
      icon: Cpu,
      title: "Software-Plotting & Custom Pre-Cut Patterns",
      timeline: "Duration: 2–3 Hours",
      description:
        "Millimetric 3D CAD patterns are plotted with custom 0.4-inch wrapped edge extensions. Cut on computer plotters, eliminating razor blade contact with OEM clearcoat.",
      technicalPoint: "100% Zero-Blade-on-Paint Cleanroom Protocol.",
    },
    {
      number: "03",
      icon: Wind,
      title: "Climate-Controlled Cleanroom Application",
      timeline: "Duration: 12–24 Hours",
      description:
        "Class-100 positive-pressure bays with 99.99% HEPA filtration prevent airborne dust particles. Master installers tuck film seamlessly behind factory seams and emblems.",
      technicalPoint: "72°F / 45% Relative Humidity controlled slip-solution curing.",
    },
    {
      number: "04",
      icon: ShieldCheck,
      title: "Infrared Heat-Cure & 40-Point QC Inspection",
      timeline: "Duration: 6–8 Hours",
      description:
        "Infrared short-wave baking post-heats all edges to 195°F, permanently locking memory shape. Inspected under multi-spectrum 5000K LED inspection arrays.",
      technicalPoint: "Signed Certificate of Metrology & Carfax Registered Warranty.",
    },
  ];

  return (
    <section id="process" className="py-20 sm:py-28 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-amber-300 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            <span className="text-xs font-mono font-bold tracking-widest text-amber-800 uppercase">
              Atelier Protocol
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            The Cleanroom 4-Step <br />
            <span className="bg-gradient-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent">
              Precision Installation Workflow
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From surgical exterior decontamination to short-wave infrared edge curing, every phase is engineered with clinical rigor to guarantee invisible protection.
          </p>
        </div>

        {/* 4 Process Cards with Connected Visual Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            return (
              <div
                key={idx}
                className="relative group p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 hover:border-amber-400 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_10px_30px_rgba(217,119,6,0.1)] shadow-sm"
              >
                <div>
                  {/* Step Top Row */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl font-extrabold font-mono text-slate-300 group-hover:text-amber-500/50 transition-colors">
                      {st.number}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="text-[11px] font-mono font-bold text-amber-800 block mb-2">
                    {st.timeline}
                  </span>

                  <h3 className="text-base font-bold text-slate-900 mb-3 leading-snug group-hover:text-amber-800 transition-colors">
                    {st.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-5">
                    {st.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200 text-[11px] font-mono text-emerald-800 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                  <span className="text-slate-500 block text-[10px] uppercase font-bold">QC Standard:</span>
                  {st.technicalPoint}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
