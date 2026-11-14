# 🎨 DESIGN.md — AEGIS AUTO BESPOKE DESIGN SYSTEM SPECIFICATION
*Pristine Cleanroom Studio Light Edition*

## 1. Brand Identity & Aesthetic Direction
- **Brand Name:** Aegis Auto (Atelier for Supercar PPF, Vinyl Wrap & Ceramic Laboratory)
- **Design Philosophy:** Clinical Precision. Flawless Finish. Uncompromising Luxury.
- **Visual Tone:** Pristine Cleanroom Studio White with Liquid Gold Accents, inspired by high-end McLaren & Porsche cleanrooms, polished epoxy floors, surgical illumination, and bespoke supercar craftsmanship.
- **Interface Mode:** Pure Light Mode — Crisp, high-contrast, modern architectural aesthetic.

---

## 2. Color Tokens (Pristine Cleanroom Spec)

### Canvas & Surfaces (Cleanroom White & Light Slate)
- `--bg-canvas`: `#F8FAFC` (Pristine studio canvas)
- `--bg-surface-primary`: `#FFFFFF` (Crisp white card surfaces)
- `--bg-surface-elevated`: `#F1F5F9` (Elevated modules & inputs)
- `--bg-surface-hover`: `#E2E8F0` (Interactive hover & borders)
- `--border-subtle`: `#E2E8F0` / `rgba(15, 23, 42, 0.08)` (Crisp architectural borders)

### Primary Luxury Accent (Burnished Gold & Electric Amber)
- `--color-gold-400`: `#FBBF24` (Subtle highlights & glow accents)
- `--color-gold-500`: `#F59E0B` (Primary luxury accent)
- `--color-gold-600`: `#D97706` (High-contrast gold buttons & hover states)
- `--color-gold-700`: `#B45309` (Deep gold text on light backgrounds)

### Contrast Surface & Typography (Deep Slate & Charcoal)
- `--color-text-primary`: `#0F172A` (Deep slate heading & body text for AAA contrast)
- `--color-text-secondary`: `#475569` (Muted technical details & captions)
- `--color-text-muted`: `#64748B` (Sub-captions & helper specs)
- `--color-text-accent`: `#B45309` (High-contrast readable gold highlights)

### Functional Feedback Tokens
- `--color-status-success`: `#059669` (Verified milestones, active cleanroom status)
- `--color-status-warning`: `#D97706` (In-progress step)
- `--color-status-info`: `#0284C7` (Technical guidance)

---

## 3. Typography Scale & Fonts

- **Primary Sans:** `Plus Jakarta Sans` (weights: 400, 500, 600, 700, 800)
- **Monospace Technical:** `JetBrains Mono` (weights: 400, 500, 700) — for ticket IDs (`AEG-7842`), thickness measurements (`8.5 Mil`), and timestamps.

### Typographic Hierarchy:
- **Display 1 (Hero Headline):** `clamp(2.5rem, 5.5vw, 4.5rem)`, weight: 800, line-height: 1.08, tracking: `-0.025em`, color: `#0F172A`.
- **H2 (Section Header):** `clamp(1.75rem, 3.5vw, 2.75rem)`, weight: 800, line-height: 1.15, tracking: `-0.02em`.
- **H3 (Card Title):** `clamp(1.125rem, 2vw, 1.375rem)`, weight: 700, line-height: 1.25.
- **Body Large:** `1.125rem` (18px), line-height: 1.6, weight: 400, color: `#334155`.
- **Body Base:** `1rem` (16px), line-height: 1.6, weight: 400, color: `#475569`.
- **Technical Caption:** `0.8125rem` (13px), font-mono, tracking: `0.05em`, uppercase.

---

## 4. UI Components, Borders & Shadows

- **Radius Tokens:**
  - Card & Panels: `rounded-2xl` (`16px`)
  - Buttons: `rounded-xl` (`12px`) or `rounded-full` (`9999px` for pill badges)
  - Modals & Drawers: `rounded-2xl` or `rounded-3xl` (`24px`)
- **Cleanroom Glassmorphism Spec:**
  - `background: rgba(255, 255, 255, 0.88)`
  - `backdrop-filter: blur(16px)`
  - `border: 1px solid rgba(226, 232, 240, 0.8)`
  - `box-shadow: 0 4px 20px -2px rgba(15, 23, 42, 0.05)`
- **Interactive Button States:**
  - `hover`: subtle brightness increase, background shift, gold shadow (`shadow-[0_4px_20px_rgba(217,119,6,0.25)]`).
  - `active`: micro-compression (`transform: scale(0.98)`).
  - `focus-visible`: `outline: 2px solid #D97706`, `outline-offset: 2px`.
  - Minimum touch target: `44px` on all mobile devices.

---

## 5. Strict Anti-Slop Bans (Impeccable Compliance)
- ❌ **NO** fake "Learn More → 01" cards with meaningless trailing numbers.
- ❌ **NO** pulsing `animate-ping` neon dots.
- ❌ **NO** tacky AI badges ("✦ AI Powered Engine").
- ❌ **NO** nested cards inside cards creating heavy visual clutter.
- ❌ **NO** washed-out low contrast text on light backgrounds.
- ❌ **NO** placeholder copy or incomplete `TODO` comments.

---

## 6. Layout & Responsiveness
- `overflow-x: hidden` enforced on `html`, `body`, and outer containers.
- Fluid clamp typography to eliminate horizontal overflow on narrow 320px devices.
- Desktop multi-column layouts collapse cleanly into single-column vertical flow on mobile.
- Sticky mobile action dock pinned to bottom with clean white glass backdrop.
