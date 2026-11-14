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
    <section id="studio" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-amber-300 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
            <span className="text-xs font-mono font-bold tracking-widest text-amber-800 uppercase">
              The Aegis Standard
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Cleanroom Engineering. <br />
            <span className="bg-gradient-to-r from-amber-600 to-amber-700 bg-clip-text text-transparent">
              Obsessive Protection.
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
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
                className="group p-6 sm:p-7 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 hover:border-amber-400 hover:bg-white transition-all duration-300 hover:shadow-[0_8px_30px_rgba(217,119,6,0.1)] flex flex-col justify-between"
              >
                <div>
                  {/* Top Row: Icon & Badge */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-700 group-hover:scale-105 transition-transform duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold tracking-wider text-amber-800 bg-amber-100/70 border border-amber-200 uppercase">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 mb-2.5 leading-snug group-hover:text-amber-800 transition-colors">
                    {item.title}
                  </h3>

                  {/* Body description */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Technical Metric */}
                <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">Standard Spec:</span>
                  <span className="font-mono font-bold text-amber-800">{item.metric}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
