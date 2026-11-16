"use client";

import React from "react";
import Image from "next/image";
import { Award, ShieldCheck, CheckCircle2, Sparkles, Star, Users, Shield, Cpu } from "lucide-react";
import { motion } from "framer-motion";

export const AegisMilestones: React.FC = () => {
  const pillars = [
    {
      title: "Master Certified Installers",
      desc: "Factory-trained senior technicians with over a decade of dedicated exotic supercar handling.",
    },
    {
      title: "100% Computer-Cut CAD Patterns",
      desc: "Precision digital templates plotted with extended wrap margins to guarantee zero razor blade contact.",
    },
    {
      title: "Lifetime Edge Peeling Guarantee",
      desc: "Infrared heat-forming edge protocol ensures permanent adhesion without lifting or moisture ingress.",
    },
    {
      title: "Climate-Controlled Cleanroom",
      desc: "Positive-pressure Class-100 HEPA air circulation eliminates dust particles during slip installation.",
    },
  ];

  const stats = [
    {
      value: "12+",
      label: "Years Atelier Experience",
      sub: "Founded in Manhattan, NY",
    },
    {
      value: "4,500+",
      label: "Supercars Protected",
      sub: "Ferrari, Porsche, McLaren, Lambo",
    },
    {
      value: "10-Year",
      label: "Anti-Yellowing Warranty",
      sub: "Comprehensive Film Coverage",
    },
    {
      value: "100%",
      label: "Pre-Cut CAD Accuracy",
      sub: "Zero Knife-on-Paint Policy",
    },
    {
      value: "99.8%",
      label: "5-Star Client Rating",
      sub: "1,200+ Verified Owner Reviews",
    },
  ];

  return (
    <section id="milestones" className="py-20 sm:py-28 bg-white relative scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid: Image + Pillars with Lateral Entry Animations */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left Column: Authentic Photography with Lateral Entry (Left to Right) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative h-[420px] sm:h-[500px] w-full rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100">
              <Image
                src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1200&auto=format&fit=crop"
                alt="Certified Aegis technician heat-forming wrap on supercar bodywork"
                fill
                className="object-cover object-center filter brightness-[0.95] contrast-105"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />

              {/* Floating Experience Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 border border-amber-400 backdrop-blur-md shadow-xl flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-slate-950 font-black shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-sm font-extrabold text-slate-900 block">
                    12+ Years Craftsmanship
                  </span>
                  <span className="text-xs text-amber-800 font-mono font-bold">
                    Manhattan Flagship Cleanroom Atelier
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 4 Core Pillars with Lateral Entry (Right to Left) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-amber-300 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <span className="text-xs font-mono font-bold tracking-widest text-amber-800 uppercase">
                Studio Accreditations
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              Engineering Excellence for the World&apos;s Most Exclusive Machines
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
              We do not treat supercars like everyday commuters. Every project is assigned to a certified master installer, documented under calibrated cleanroom lighting, and verified against factory paint thickness baselines.
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((pil, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200 hover:border-amber-400 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                    <h3 className="text-sm font-bold text-slate-900">{pil.title}</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-6">
                    {pil.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom 5 Animated Stats Counters with Staggered Motion */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 pt-10 border-t border-slate-200">
          {stats.map((st, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
              className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 text-center flex flex-col justify-center shadow-sm"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-amber-700 font-mono tracking-tight mb-1">
                {st.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                {st.label}
              </div>
              <div className="text-[11px] text-slate-500 leading-snug">
                {st.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
