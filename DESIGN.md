# 🎨 DESIGN.md — AEGIS AUTO BESPOKE DESIGN SYSTEM SPECIFICATION
*Google Stitch & Impeccable Atelier Edition*

## 1. Brand Identity & Aesthetic Direction
- **Brand Name:** Aegis Auto (Atelier for Supercar PPF, Vinyl Wrap & Ceramic Laboratory)
- **Design Philosophy:** Invisible Armor. Flawless Finish. Uncompromising Precision.
- **Visual Tone:** Ultra-Luxury Obsidian Studio with Liquid Gold Accents, inspired by ThemeForest CarFlex and top-tier detailing labs (XPEL Cleanroom, TopCar, Yiannimize).
- **Interface Mode:** *Persuade* with *Operate* precision (seamless interactive calculators, before/after comparisons, real-time build tracking, and instant booking modal).

---

## 2. Color Tokens (Google Stitch Spec)

### Canvas & Backgrounds (Deep Obsidian)
- `--bg-canvas`: `#070A0F` (Deepest studio black)
- `--bg-surface-primary`: `#0B0F17` (Main app background)
- `--bg-surface-elevated`: `#0F172A` (Elevated cards & modules)
- `--bg-surface-hover`: `#1E293B` (Interactive hover & borders)
- `--bg-surface-border`: `rgba(255, 255, 255, 0.08)` (Subtle hairline dividers)

### Primary Luxury Accent (Electric Amber / Liquid Gold)
- `--color-gold-400`: `#FBBF24` (Subtle glow, badges, active indicator)
- `--color-gold-500`: `#F59E0B` (Primary luxury accent, main CTA)
- `--color-gold-600`: `#D97706` (Hover state, pressed button)
- `--color-gold-glow`: `rgba(245, 158, 11, 0.25)` (Glow aura on hover/active states)

### Contrast Surface & Typography
- `--color-text-primary`: `#F8FAFC` (High contrast studio white)
- `--color-text-secondary`: `#94A3B8` (Muted technical details)
- `--color-text-muted`: `#64748B` (Sub-captions & helper specs)
- `--color-text-accent`: `#FBBF24` (Emphasized highlights & prices)

### Functional Feedback Tokens
- `--color-status-success`: `#10B981` (Completed milestone, active cleanroom status)
- `--color-status-warning`: `#F59E0B` (In-progress step)
- `--color-status-info`: `#38BDF8` (Technical guidance)

---

## 3. Typography Scale & Fonts

- **Primary Sans:** `Plus Jakarta Sans` (weights: 400, 500, 600, 700, 800)
- **Monospace Technical:** `JetBrains Mono` (weights: 400, 500, 700) — for ticket IDs (e.g. `AEG-7842`), thickness measurements (`8.5 Mil`), paint depth (`42.5 µm`), and timestamps.

### Typographic Hierarchy:
- **Display 1 (Hero Headline):** `clamp(2.5rem, 5.5vw, 4.5rem)`, weight: 800, line-height: 1.08, tracking: `-0.025em`.
- **H2 (Section Header):** `clamp(1.75rem, 3.5vw, 2.75rem)`, weight: 800, line-height: 1.15, tracking: `-0.02em`.
- **H3 (Card Title):** `clamp(1.125rem, 2vw, 1.375rem)`, weight: 700, line-height: 1.25.
- **Body Large:** `1.125rem` (18px), line-height: 1.6, weight: 400.
- **Body Base:** `1rem` (16px), line-height: 1.6, weight: 400.
- **Technical Caption:** `0.8125rem` (13px), font-mono, tracking: `0.05em`, uppercase.

---

## 4. UI Components, Borders & Radii

- **Radius Tokens:**
  - Card & Panels: `rounded-2xl` (`16px`)
  - Buttons: `rounded-xl` (`12px`) or `rounded-full` (`9999px` for pill badges)
  - Modals & Drawers: `rounded-2xl` or `rounded-3xl` (`24px`)
- **Glassmorphism Spec:**
  - `background: rgba(15, 23, 42, 0.75)`
  - `backdrop-filter: blur(16px)`
  - `border: 1px solid rgba(255, 255, 255, 0.08)`
- **Interactive Button States:**
  - `hover`: subtle brightness increase, background shift, and gold aura glow (`shadow-[0_0_24px_rgba(245,158,11,0.25)]`).
  - `active`: micro-compression (`transform: scale(0.98)`).
  - `focus-visible`: `outline: 2px solid #F59E0B`, `outline-offset: 2px`.
  - Minimum touch target: `44px` on all mobile devices.

---

## 5. Strict Anti-Slop Bans (Impeccable Compliance)
- ❌ **NO** fake "Learn More → 01" cards with meaningless trailing numbers.
- ❌ **NO** pulsing `animate-ping` neon green or pink notification dots.
- ❌ **NO** tacky AI badges ("✦ AI Powered Engine").
- ❌ **NO** nested cards inside cards creating heavy visual clutter.
- ❌ **NO** text truncation or clipping on mobile viewports down to 320px.
- ❌ **NO** placeholder copy or incomplete `TODO` comments.

---

## 6. Layout & Responsiveness
- `overflow-x: hidden` enforced on `html`, `body`, and outer section containers.
- Fluid fluid clamp sizes to eliminate horizontal overflow on narrow 320px devices.
- Desktop multi-column layouts (6-col map & 6-col schedule, 3-step configurator, 6-card services grid) collapse cleanly into single-column vertical flow on mobile.
- Sticky mobile action dock pinned to bottom on small viewports with dedicated safe area padding.
