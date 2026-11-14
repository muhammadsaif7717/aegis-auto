import React from "react";
import { ShieldCheck, Wind, Cpu, Sparkles, Gauge, Scissors } from "lucide-react";

export const AegisStudioIdentity: React.FC = () => {
  const standards = [
    {
      icon: ShieldCheck,
      badge: "Master Certified",
      title: "XPEL DAP & 3M Certified Installers",
      description:
        "Every technician holds factory Master PPF Certification with a minimum of 8 years of cleanroom exotic vehicle experience.",
      metric: "100% Factory Trained",
    },
    {
      icon: Wind,
      badge: "Micro-Environment",
      title: "Class-100 Positive-Pressure Bays",
      description:
        "Hospital-grade laminar HEPA filtration cycling clean air 30 times per hour prevents airborne dust particles from contaminating film tack.",
      metric: "99.99% Dust Particle Elimination",
    },
    {
      icon: Cpu,
      badge: "Non-Invasive",
      title: "Disassembly-Free Wrapping",
      description:
        "We preserve OEM factory panel gap tolerances, acoustic seals, and torque specs by avoiding unnecessary bumper and trim removal.",
      metric: "Preserves Factory Fasteners",
    },
    {
      icon: Sparkles,
      badge: "Molecular Armor",
      title: "Reduced Graphene-Oxide Infusion",
      description:
        "Permanent covalent bonding fills porous topcoat channels, creating 115° contact angles and unprecedented bug-acid chemical resistance.",
      metric: "pH 2–12 Chemical Shield",
    },
    {
      icon: Gauge,
      badge: "Metrology Precision",
      title: "Digital Ultrasonic Paint Depth Gauging",
      description:
        "Every supercar undergoes ultrasonic depth readings across 36 body coordinates to map factory clearcoat thickness before correction.",
      metric: "Micron-Level Metrology",
    },
    {
      icon: Scissors,
      badge: "Zero Contact Guarantee",
      title: "Guaranteed Zero Blade-on-Paint Cut Marks",
      description:
        "All patterns are 100% pre-cut on computerized Roland plotters with custom extended edge wraps. Razor blades never contact your finish.",
      metric: "100% Pre-Cut CAD Guarantee",
    },
  ];

  return (
    <section id="studio" className="py-20 sm:py-28 bg-[#0B0F17] relative">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/[0.03] blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-amber-500/30 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase">
              The Aegis Standard
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Cleanroom Engineering. <br />
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Obsessive Protection.
            </span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Most detailing shops work in drafty garages with hand-held utility knives. Aegis operates like a high-precision cleanroom aerospace laboratory dedicated to preserving multi-million dollar automotive art.
          </p>
        </div>

        {/* 6 Clean Flat Standard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {standards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group p-6 sm:p-7 rounded-2xl bg-[#0F172A]/70 border border-white/[0.07] hover:border-amber-500/40 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(245,158,11,0.08)] flex flex-col justify-between"
              >
                <div>
                  {/* Top Row: Icon & Badge */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold tracking-wider text-amber-400/90 bg-amber-500/10 border border-amber-500/20 uppercase">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-2.5 leading-snug group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>

                  {/* Body description */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Technical Metric */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">Standard Spec:</span>
                  <span className="font-mono font-bold text-amber-400">{item.metric}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
