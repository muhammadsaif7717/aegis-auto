import React from "react";
import Link from "next/link";

interface AegisLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const AegisLogo: React.FC<AegisLogoProps> = ({
  className = "",
  size = "md",
}) => {
  const iconSizes = {
    sm: "w-7 h-7",
    md: "w-9 h-9",
    lg: "w-11 h-11",
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg p-1 transition-transform active:scale-98 ${className}`}
      aria-label="Aegis Auto Home"
    >
      {/* Aegis Shield Emblem */}
      <div className={`relative ${iconSizes[size]} flex items-center justify-center shrink-0`}>
        <svg
          viewBox="0 0 40 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_2px_6px_rgba(217,119,6,0.2)] transition-transform duration-300 group-hover:scale-105"
        >
          {/* Outer Shield Border */}
          <path
            d="M20 2L37 8.5V22C37 32.5 29.5 41.5 20 44C10.5 41.5 3 32.5 3 22V8.5L20 2Z"
            stroke="url(#shieldGrad)"
            strokeWidth="2.5"
            strokeLinejoin="round"
            fill="#FFFFFF"
          />
          {/* Inner Protective Core */}
          <path
            d="M20 7L32 12V21C32 29 26.5 36 20 38C13.5 36 8 29 8 21V12L20 7Z"
            fill="url(#innerGrad)"
            opacity="0.12"
          />
          {/* Stylized 'A' Crest */}
          <path
            d="M20 12L27 28H23.5L21.8 24H18.2L16.5 28H13L20 12ZM19.2 21.2H20.8L20 18.5L19.2 21.2Z"
            fill="url(#goldTextGrad)"
          />
          {/* Micro Precision Dot */}
          <circle cx="20" cy="33" r="1.5" fill="#D97706" />

          <defs>
            <linearGradient id="shieldGrad" x1="3" y1="2" x2="37" y2="44" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F59E0B" />
              <stop offset="0.5" stopColor="#D97706" />
              <stop offset="1" stopColor="#B45309" />
            </linearGradient>
            <linearGradient id="innerGrad" x1="8" y1="7" x2="32" y2="38" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F59E0B" />
              <stop offset="1" stopColor="#F1F5F9" />
            </linearGradient>
            <linearGradient id="goldTextGrad" x1="13" y1="12" x2="27" y2="28" gradientUnits="userSpaceOnUse">
              <stop stopColor="#B45309" />
              <stop offset="0.6" stopColor="#D97706" />
              <stop offset="1" stopColor="#F59E0B" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex items-center gap-1.5 leading-none select-none">
        <span
          className={`font-black tracking-tight text-slate-900 uppercase ${textSizes[size]}`}
          style={{ letterSpacing: "-0.03em" }}
        >
          AEGIS
        </span>
        <span className="bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black text-[10px] tracking-wider uppercase px-1.5 py-0.5 rounded-[4px] shadow-[0_1px_4px_rgba(217,119,6,0.3)]">
          AUTO
        </span>
      </div>
    </Link>
  );
};
