# REFERENCE MOTION MAP — DERIVED

Authority: docs/03-REFERENCE-CONTRACT.md.

| Trigger | Target | Behavior |
| :--- | :--- | :--- |
| **Page Initial Load** | Header & Hero Frame | Fade-in progressivo suave combinado com expansão dimensional sutil do frame (scale: 0.98 -> 1.0, opacity: 0 -> 1, duração 600ms, curva ease-out). |
| **Window Scroll (Y > 60px)** | Sticky Navigation Header | Transição de altura e densidade de fundo para estado compacto com ackdrop-filter: blur(16px), fundo #08080A/90 e borda inferior sutil #FFFFFF/10. |
| **Viewport Intersection (20% visible)** | Split Content Panels | Revelação lateral sincronizada: imagem desliza 24px com fade suave enquanto o bloco de texto correspondente entra com atraso de 120ms. |
| **Cursor Hover** | CTA Action Buttons | Intensificação do glow cênico (ox-shadow: 0 0 24px var(--accent-violet-glow)), elevação sutil de 2px e transição cromática rápida (200ms). |
| **Cursor Hover** | Photography Display Cards | Micro-zoom interno da fotografia (scale: 1.03, 400ms ease-out) mantendo os limites do container perfeitamente estáveis. |
| **Cursor Hover** | Micro-Arrow Links (→) | Deslocamento horizontal da seta em +6px com mudança de cor para o tom violeta de destaque (--accent-violet). |
| **Window Scroll (Y > 500px)** | Floating Back-to-Top Button | Transição de opacidade (0 para 1) e escala (0.8 para 1.0); ao clique, rolagem suave contínua (smooth-scroll) para o topo da página. |

---
