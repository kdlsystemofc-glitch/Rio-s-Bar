/**
 * RIO'S BAR & LOUNGE ? PHASE 06 MOTION FIDELITY INTERACTION ENGINE
 * Authority: docs/05-REFERENCE-MOTION-MAP.md & docs/07-CLIENT-DESIGN-SYSTEM.md
 * Performance: rAF Throttling, Zero Layout Thrashing, Prefers-Reduced-Motion Support
 */

document.addEventListener('DOMContentLoaded', () => {
  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isDesktop = () => window.innerWidth > 1024;

  // =========================================================================
  // 1. STICKY HEADER & FLOATING BACK-TO-TOP SCROLL CONTROLLER (rAF Throttled)
  // =========================================================================
  const header = document.querySelector('.site-header');
  const floatingBackToTop = document.getElementById('floatingBackToTop');
  const backToTopFooterBtn = document.querySelector('.back-to-top-btn');

  let lastScrollY = window.scrollY;
  let ticking = false;

  const onScrollUpdate = () => {
    // Motion Contract: Header condensation at Y > 60px
    if (lastScrollY > 60) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }

    // Motion Contract: Floating Back-to-Top trigger at Y > 500px
    if (lastScrollY > 500) {
      floatingBackToTop?.classList.add('visible');
    } else {
      floatingBackToTop?.classList.remove('visible');
    }

    ticking = false;
  };

  const handleScroll = () => {
    lastScrollY = window.scrollY;
    if (!ticking) {
      window.requestAnimationFrame(onScrollUpdate);
      ticking = true;
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  onScrollUpdate(); // Initial check

  // Smooth scroll to top for back-to-top triggers
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: isReducedMotion ? 'auto' : 'smooth'
    });
  };

  if (floatingBackToTop) {
    floatingBackToTop.addEventListener('click', scrollToTop);
  }

  if (backToTopFooterBtn) {
    backToTopFooterBtn.addEventListener('click', scrollToTop);
  }

  // =========================================================================
  // 2. SYNCHRONIZED VIEWPORT INTERSECTION OBSERVER (20% Threshold)
  // =========================================================================
  const revealElements = document.querySelectorAll('.reveal-panel, .reveal-card');

  if (!isReducedMotion && 'IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.20,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // If reduced motion is requested or IntersectionObserver not supported
    revealElements.forEach(el => el.classList.add('is-revealed'));
  }

  // =========================================================================
  // 3. DESKTOP HERO CINEMATIC PARALLAX & MICRO-TILT (No Layout Thrashing)
  // =========================================================================
  const heroFrame = document.querySelector('.hero-cinematic-frame');
  const heroPhoto = document.querySelector('.hero-photo-layer');

  if (!isReducedMotion && heroFrame && heroPhoto) {
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    let isHovering = false;
    let animFrameId = null;

    const updateTilt = () => {
      if (!isHovering) return;
      currentX += (mouseX - currentX) * 0.1;
      currentY += (mouseY - currentY) * 0.1;
      heroPhoto.style.transform = 'scale(1.025) translate3d(' + currentX + 'px, ' + currentY + 'px, 0)';
      animFrameId = requestAnimationFrame(updateTilt);
    };

    heroFrame.addEventListener('mousemove', (e) => {
      if (!isDesktop()) return;
      const rect = heroFrame.getBoundingClientRect();
      const xPercent = (e.clientX - rect.left) / rect.width - 0.5;
      const yPercent = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX = xPercent * 12;
      mouseY = yPercent * 12;

      if (!isHovering) {
        isHovering = true;
        animFrameId = requestAnimationFrame(updateTilt);
      }
    }, { passive: true });

    heroFrame.addEventListener('mouseleave', () => {
      isHovering = false;
      if (animFrameId) cancelAnimationFrame(animFrameId);
      heroPhoto.style.transform = 'scale(1.01) translate3d(0, 0, 0)';
    });
  }

  // =========================================================================
  // 4. SMOOTH ANCHOR NAVIGATION WITH HEADER OFFSET
  // =========================================================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || !targetId) return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerHeight = header ? (header.classList.contains('scrolled') ? 70 : 82) : 80;
        const targetPosition = targetEl.getBoundingClientRect().top + window.pageYOffset - (targetId === '#inicio' ? 0 : (headerHeight - 2));

        window.scrollTo({
          top: targetPosition,
          behavior: isReducedMotion ? 'auto' : 'smooth'
        });
      }
    });
  });

  // =========================================================================
  // 5. MOBILE DRAWER NAVIGATION MODAL
  // =========================================================================
  const hamburgerBtn = document.querySelector('.nav-hamburger-btn');
  const drawerOverlay = document.querySelector('.mobile-drawer-overlay');
  const drawerCloseBtn = document.querySelector('.drawer-close-btn');
  const drawerLinks = document.querySelectorAll('.drawer-link-item');

  const openDrawer = () => {
    drawerOverlay?.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    drawerOverlay?.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (hamburgerBtn && drawerOverlay) {
    hamburgerBtn.addEventListener('click', openDrawer);
  }

  if (drawerCloseBtn) {
    drawerCloseBtn.addEventListener('click', closeDrawer);
  }

  if (drawerOverlay) {
    drawerOverlay.addEventListener('click', (e) => {
      if (e.target === drawerOverlay) {
        closeDrawer();
      }
    });
  }

  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawerOverlay && drawerOverlay.classList.contains('active')) {
      closeDrawer();
    }
  });

  console.log("Rio's Bar ? Motion Fidelity System successfully initialized.");
});
