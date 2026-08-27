# 08 ? MOTION IMPLEMENTATION: RIO'S BAR & LOUNGE
*KDL Factory V2 ? Phase 06 Motion Fidelity*
*Authority: docs/05-REFERENCE-MOTION-MAP.md & docs/07-CLIENT-DESIGN-SYSTEM.md*

---

### Compact Mechanism List

| # | Mechanism | Trigger | Target Elements | Technical Implementation |
| :--- | :--- | :--- | :--- | :--- |
| **01** | **Hero Entrance & Progressive Expansion** | Page Load / DOM Ready | `.hero-cinematic-frame`, `.hero-content-block > *` | CSS keyframe animation (`heroFrameEntrance`: scale 0.98 -> 1.0, opacity 0 -> 1, 650ms `cubic-bezier(0.16, 1, 0.3, 1)`) with staggered text cascade (80ms increments). |
| **02** | **Sticky Glass Condensation** | Window Scroll (`Y > 60px`) | `.site-header` | `requestAnimationFrame`-throttled scroll listener toggling `.scrolled`; height transitions 82px -> 70px, `backdrop-filter: blur(16px)`, `background: rgba(8, 8, 10, 0.92)`, subtle border `rgba(255, 255, 255, 0.10)`. |
| **03** | **Synchronized Lateral Reveals** | Viewport Intersection (20% visible) | `.section-story .reveal-panel` | `IntersectionObserver` (threshold 0.20); media composite translates 24px with fade, text content enters with 120ms stagger. On mobile (<768px), translates vertically (20px) to prevent lateral layout shifts. |
| **04** | **Staggered Grid Card Entry** | Viewport Intersection (20% visible) | `.editorial-experience-grid`, `.testimonials-editorial-grid` | Staggered `reveal-card` system with progressive delay tokens (`0.05s`, `0.12s`, `0.19s`, `0.26s`) with `translate3d(0, 24px, 0)` to `translate3d(0, 0, 0)`. |
| **05** | **CTA Button & Micro-Arrow Hover** | Cursor Hover / Focus | `.btn-cta-primary`, `.btn-cta-editorial`, arrow links | Scenic glow amplification (`box-shadow: 0 0 32px var(--accent-violet-glow)`), 2px elevation (`translateY(-2px)`), micro-arrows displace `+6px` with violet hue transition. |
| **06** | **Photography Display Micro-Zoom** | Cursor Hover | `.main-media-card`, `.media-inset-card` | Container `overflow: hidden` with internal photo `transform: scale(1.03)` over 400ms ease-out; inset cards lift `-4px` with border glow. |
| **07** | **Desktop Cinematic Micro-Tilt** | Mouse Movement (Desktop only > 1024px) | `.hero-photo-layer` | Smooth interpolated rAF tilt clamped to ?12px within viewport boundaries; automatically disabled on touch devices and mobile screens. |
| **08** | **Floating Back-to-Top Trigger** | Window Scroll (`Y > 500px`) | `#floatingBackToTop` | Opacity 0 -> 1 and scale 0.8 -> 1.0 with smooth-scroll trigger to page top (`window.scrollTo({ top: 0, behavior: 'smooth' })`). |
| **09** | **Accessibility Engine** | OS Preference (`prefers-reduced-motion`) | Global (`*`) & Animated Selectors | Complete media query bypass resetting all transitions, transforms, animations to 0s and immediately revealing all content blocks. |

---

### Verification Summary
- **Desktop Pass (1440x900):** Validated initial load animation, header state transitions at Y > 60px, IntersectionObserver firing on all split panels and grid cards, floating back-to-top button appearance at Y > 500px, and smooth return to top.
- **Mobile Sanity Pass (390x844):** Verified 0 horizontal overflow, responsive vertical reveal adaptation, functional touch drawer modal, and complete touch ergonomics.
- **Accessibility Pass:** Verified instant content visibility under `prefers-reduced-motion: reduce` emulation with 0 layout thrashing or animation delays.
