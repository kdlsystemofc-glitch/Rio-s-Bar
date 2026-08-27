# 07 — CLIENT DESIGN SYSTEM & BRAND GUARD
**Client:** Rio's Bar & Lounge — Sacomã, São Paulo • SP  
**Authority:** docs/02A-CLIENT-BRAND-LOCK.md & docs/03-REFERENCE-CONTRACT.md  
**Status:** Normalized, Guarded & Production Ready (Phase 04)

---

## 1. DESIGN SYSTEM OVERVIEW & SOVEREIGNTY PRINCIPLES

The Rio's Bar Design System operationalizes the human-approved Phase 03 structure by locking every design decision to authentic client evidence while utilizing high-precision neutral utility systems. 

Under the **Sovereignty Rule**, no reference DNA (e.g., Florentine historical pastry, neoclassical serifs, cream/beige palettes) is permitted to contaminate the client's visual identity. Every production token in this design system is explicitly classified into one of two tiers:
1. **`CLIENT-EVIDENCE`**: Tokens derived directly from physical, photographic, or authentic digital assets of Rio's Bar (palettes, logo script, stage lighting, brick materials).
2. **`NEUTRAL-UTILITY`**: Structural, architectural, and ergonomic tokens (hairline borders, container dimensions, font fallbacks, cubic-bezier motion curves) that support the layout without imposing external identity.

---

## 2. CENTRALIZED CODE TOKEN CATALOG

### 2.1 Palette & Surface Tokens

| Token Name | Value | Classification | Direct Client Evidence / Utility Rationale |
| :--- | :--- | :--- | :--- |
| `--bg-base` | `#08080A` | **CLIENT-EVIDENCE** | Authentic obsidian black from official logo backdrop (`imgi_2`) & stage background (`imgi_23`). |
| `--bg-surface` | `#121217` | **CLIENT-EVIDENCE** | Penumbra dark tone of the night lounge & physical bar environment (`imgi_20`). |
| `--bg-surface-elevated` | `#1A1A22` | **CLIENT-EVIDENCE** | Elevated surface level for cards and interactive components in night ambiance. |
| `--bg-nav` | `rgba(8, 8, 10, 0.90)` | **NEUTRAL-UTILITY** | High-density glass condensation background for sticky header legibility. |
| `--bg-card-glass` | `rgba(18, 18, 23, 0.75)` | **NEUTRAL-UTILITY** | Translucent backdrop for overlay cards and modal panels. |
| `--text-primary` | `#F8F9FA` | **CLIENT-EVIDENCE** | Pure high-contrast luminous white from official logo text & neon stage signage (`imgi_2`, `imgi_23`). |
| `--text-secondary` | `#94A3B8` | **NEUTRAL-UTILITY** | Slate-400 neutral tone optimized for long-form readability on deep dark surfaces. |
| `--text-muted` | `#64748B` | **NEUTRAL-UTILITY** | Slate-500 neutral tone for auxiliary metadata, timestamps, and secondary captions. |

### 2.2 Scenic Accents & Atmospheric Lighting Tokens

| Token Name | Value | Classification | Direct Client Evidence / Utility Rationale |
| :--- | :--- | :--- | :--- |
| `--accent-violet` | `#A855F7` | **CLIENT-EVIDENCE** | Primary scenic violet stage spotlight illuminating live band performances (`imgi_17`, `imgi_23`). |
| `--accent-violet-glow` | `rgba(168, 85, 247, 0.35)` | **CLIENT-EVIDENCE** | Volumetric halo emitted by stage spotlighting and primary CTA interactions. |
| `--accent-blue` | `#3B82F6` | **CLIENT-EVIDENCE** | Lateral electric blue stage spotlights & atmospheric fill lights (`imgi_17`, `imgi_20`). |
| `--accent-blue-glow` | `rgba(59, 130, 246, 0.25)` | **CLIENT-EVIDENCE** | Secondary volumetric fill glow for atmospheric accents. |
| `--accent-amber` | `#F59E0B` | **CLIENT-EVIDENCE** | Warm golden top spot on stage instruments, percussions & trust stars (`imgi_20`, `imgi_23`). |
| `--accent-amber-glow` | `rgba(245, 158, 11, 0.25)` | **CLIENT-EVIDENCE** | Warm halo for rating stars and live highlight badges. |
| `--accent-brick` | `#8C4A3E` | **CLIENT-EVIDENCE** | Real terracotta/exposed brick masonry tone behind the stage & lounge (`imgi_5`, `imgi_17`). |

### 2.3 Typography & Text Treatment Tokens

| Token Name | Value | Classification | Direct Client Evidence / Utility Rationale |
| :--- | :--- | :--- | :--- |
| `--font-sans` | `'Plus Jakarta Sans', sans-serif` | **NEUTRAL-UTILITY** | Geometric, ultra-clean modern Sans for structural headings, UI microcopy, and operational facts. |
| `--font-script` | `'Great Vibes', cursive` | **CLIENT-EVIDENCE** | Flowing, organic calligraphic script with flourishes matching Rio's Bar signature logotype. |
| `--font-weight-regular` | `400` | **NEUTRAL-UTILITY** | Standard body text reading weight. |
| `--font-weight-medium` | `500` | **NEUTRAL-UTILITY** | Subtitle and badge weight. |
| `--font-weight-semibold` | `600` | **NEUTRAL-UTILITY** | Interactive item and micro-header weight. |
| `--font-weight-bold` | `700` | **NEUTRAL-UTILITY** | Section kicker, button, and highlight weight. |
| `--font-weight-extrabold` | `800` | **NEUTRAL-UTILITY** | Hero headline visual punch. |

### 2.4 Geometry, Radii & Hairline Border Tokens

| Token Name | Value | Classification | Direct Client Evidence / Utility Rationale |
| :--- | :--- | :--- | :--- |
| `--border-hairline` | `rgba(255, 255, 255, 0.12)` | **NEUTRAL-UTILITY** | Ultra-fine architectural container outline for crisp separation on dark backgrounds. |
| `--border-subtle` | `rgba(255, 255, 255, 0.08)` | **NEUTRAL-UTILITY** | Subtle internal divider between content groups. |
| `--border-accent` | `rgba(168, 85, 247, 0.35)` | **CLIENT-EVIDENCE** | Violet-tinted border for active cards and hover states. |
| `--radius-sm` | `6px` | **NEUTRAL-UTILITY** | Small interactive chip and badge radius. |
| `--radius-md` | `10px` | **NEUTRAL-UTILITY** | Standard content frame and card radius. |
| `--radius-lg` | `14px` | **NEUTRAL-UTILITY** | Viewport cinematic hero frame desktop corner radius. |
| `--radius-full` | `9999px` | **NEUTRAL-UTILITY** | Pill CTA buttons and oval brand seal contour. |

### 2.5 Motion & Easing Tokens

| Token Name | Value | Classification | Direct Client Evidence / Utility Rationale |
| :--- | :--- | :--- | :--- |
| `--transition-fast` | `0.2s ease` | **NEUTRAL-UTILITY** | Micro-interactions (hover colors, arrows, opacity). |
| `--transition-normal` | `0.3s cubic-bezier(0.16, 1, 0.3, 1)` | **NEUTRAL-UTILITY** | Structural transforms, modal drawers, and glass condensation. |
| `--transition-smooth` | `0.5s ease-out` | **NEUTRAL-UTILITY** | Media parallax and progressive content reveals. |
| `--ease-out-expo` | `cubic-bezier(0.16, 1, 0.3, 1)` | **NEUTRAL-UTILITY** | Premium friction curve preventing artificial linear motion. |

---

## 3. COMPONENT NORMALIZATION GUIDELINES

### 3.1 3-Zone Sticky Navigation Header
- **Geometry:** 3 distinct zones derived from reference architectural balance:
  - **Left Zone:** Minimal 3-line hamburger menu trigger + pill action button (`RESERVAR`).
  - **Center Zone:** High-contrast double-stroke oval brand seal containing `Rio's` script + `Bar & Lounge` subtitle.
  - **Right Zone:** Regional tag (`Sacomã • SP`) + location pin icon + direct WhatsApp hotline icon.
- **Glass Behavior:** Translucent `rgba(8, 8, 10, 0.90)` with `backdrop-filter: blur(14px)` and `border-bottom: 1px solid rgba(255, 255, 255, 0.08)`.
- **Interactions:** On scroll (Y > 40px), header subtly condenses height (82px → 72px) with enhanced backdrop density.

### 3.2 Viewport Hero Showcase Frame
- **Cinematic Framing:** Architectural frame with desktop margins (32px lateral, 16px bottom) and rounded corners (`--radius-lg: 14px`).
- **Media Layer:** Authentic live performance photograph (`imagens/imgi_17_...`) with responsive object-fit, enhanced by natural edge vignette and bottom-up contrast gradient (`linear-gradient(to top, rgba(8,8,10,0.94) 0%, rgba(8,8,10,0.50) 40%, transparent 80%)`).
- **Typographic Pair:** ExtraBold geometric Sans (`Plus Jakarta Sans`, 800) paired with organic calligraphic accent (`Great Vibes`, 400) for the signature keyword `pagode`.
- **Lead Copy:** Grounded, authentic Brazilian Portuguese copywriting communicating genuine value: live samba de raiz, ice-cold beer, fresh boteco snacks, and hookah lounge sessions.

### 3.3 Buttons & Interactive Controls
- **Primary Action (CTA):** Pill button with violet gradient (`linear-gradient(135deg, #A855F7 0%, #7C3AED 100%)`), luminous border (`rgba(255, 255, 255, 0.2)`), and volumetric neon shadow (`0 0 24px var(--accent-violet-glow)`). Hover lifts by 2px with amplified glow.
- **Editorial / Secondary Action:** Pill button with translucent glass background (`rgba(255, 255, 255, 0.04)`), hairline white border (`rgba(255, 255, 255, 0.18)`), and animated micro-arrow (`→`) that shifts +6px on hover.

### 3.4 Trust Bar & Social Signals
- **Format:** Low-profile horizontal metadata bar with subtle border separation (`border-top: 1px solid var(--border-subtle)`).
- **Data Points:** 
  - Real Google rating: `★ 4.4 no Google (216 avaliações)` with golden star (`#F59E0B`).
  - Verified address: `Av. Gal. Leite de Castro, 423`.
  - Operating window: `Quintas a Domingos a partir das 18h`.

### 3.5 Transition Teaser
- **Scroll Cue:** Vertical uppercase label (`EXPLORAR`) with a pulsing gradient hairline indicator.
- **Section Teaser Bar:** Preview card for Section 01 (*Pagode & Música ao Vivo*) with neon violet action link.

### 3.6 Mobile Drawer Navigation
- **Architecture:** Slide-in panel from left using `--ease-out-expo`, backed by dark frosted glass overlay (`rgba(8, 8, 10, 0.94)`, blur 20px).
- **Items:** Clean uppercase links with directional arrows, oval brand emblem, and full-width WhatsApp CTA button.

---

## 4. AUTHENTIC ASSET & TEXTURE USAGE MATRIX

| Asset Path | Core Scene | Tone & Texture | Approved Component Destination |
| :--- | :--- | :--- | :--- |
| `imagens/imgi_2_...` | Official Brand Logo | Black background, crisp white script | Header Oval Seal, Favicon, Footer signature |
| `imagens/imgi_17_...` | Live Stage Performance | Violet/blue spotlights, brick backdrop, percussions | Hero Cinematic Frame, Feature Story 1 |
| `imagens/imgi_20_...` | Night Crowd & Lounge | Deep ambient lighting, amber spotlights, packed house | Social Atmosphere Banner, Experience Grid |
| `imagens/imgi_23_...` | Stage Musicians & Logo | Neon backlit logo, warm top lights, tantã instrument | Hero alternative, Feature Story 1 |
| `imagens/imgi_28_...` | Lounge & Hookah Session | Exposed brick, smoky haze, intimate lighting | Feature Story 2 (Lounge & Narguilé) |
| `imagens/imgi_5_...` | Lounge Corner & Brick | Authentic brick wall, relaxing lounge corner | Feature Story 2, Location Context |
| `imagens/imgi_31_...` | Musician Performance | High-energy pagode performance | Feature Story 1, Experience Grid |

---

## 5. MANDATORY BRAND CONTAMINATION AUDIT

| Contamination Vector | Reference Risk (Caffè Gilli) | Client Brand Lock Resolution | Audit Status |
| :--- | :--- | :--- | :--- |
| **Color Palettes** | Cream/beige backgrounds (`#FBF8F5`, `#F5EFE6`), antique gold (`#C5A880`), navy blue. | Replaced with obsidian black (`#08080A`), surface darks (`#121217`), and stage neons (`#A855F7`, `#3B82F6`). | **PASSED (0% Reference DNA)** |
| **Typography** | Editorial luxury serifs (Didot, Bodoni, Garamond, Cinzel). | Replaced with modern geometric Sans (`Plus Jakarta Sans`) & client script (`Great Vibes`). Zero serifs. | **PASSED (0% Reference DNA)** |
| **Emblems & Graphics** | Neoclassical crests, 1733 medallions, historical Italian monuments. | Modernized into double-stroke oval badge hosting client-authentic "Rio's Bar & Lounge" signature. | **PASSED (0% Reference DNA)** |
| **Imagery** | European pastries, espresso cups, vintage 1950s Florence photography. | Strictly 100% verified authentic Rio's Bar photography from `imagens/` directory. | **PASSED (0% Reference DNA)** |
| **Narrative & Copy** | "Tradição Florentina", "Dal 1733", e-commerce pastry orders. | Authentic Portuguese copy: pagode de raiz, cerveja trincando, petiscos de boteco, Sacomã SP. | **PASSED (0% Reference DNA)** |

---

## 6. BRAND GUARD CONSTRAINTS & FORBIDDEN ANTI-PATTERNS

1. **NO Light Theme Degradation:** Never render white/light gray background canvases. The Rio's Bar identity is intrinsically nocturnal.
2. **NO Serif Typography:** Never introduce serif font families into any header, card, or body copy.
3. **NO Generic Stock Photography:** Never use third-party stock photos of cocktail lounges or generic bars. All imagery must be sourced from authentic client captures in `imagens/`.
4. **NO Fictional Gourmet Narrative:** Never describe Rio's Bar as an "exclusive luxury gourmet bistro". It is an authentic, vibrant Brazilian pagode & lounge bar in Sacomã.
5. **NO E-Commerce / Cart Patterns:** Interactions must route directly to the official WhatsApp reservation hotline (`https://wa.me/5511949846311`).

---

**CLIENT DESIGN SYSTEM NORMALIZED AND GUARDED**
