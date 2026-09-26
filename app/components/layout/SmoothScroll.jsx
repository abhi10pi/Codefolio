'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Wrap the app body in this once, in app/layout.tsx.
 * Requires: npm install lenis gsap
 *
 * Now also drives GSAP's ScrollTrigger off Lenis's scroll position, so any
 * pin/scrub animation (like the Hero's) tracks the smoothed scroll instead
 * of the raw native one — without this sync, pinned sections drift out of
 * time with what the user is actually seeing.
 *
 * Skips Lenis (but not ScrollTrigger) on prefers-reduced-motion or touch
 * devices, where native scroll already feels right.
 */
export default function SmoothScroll({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouch = window.matchMedia('(pointer: coarse)').matches;

    if (prefersReduced || isTouch) {
      // No Lenis, but ScrollTrigger still works fine off native scroll.
      ScrollTrigger.refresh();
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });
    lenisRef.current = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    const update = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}