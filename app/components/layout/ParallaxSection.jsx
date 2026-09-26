'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger);

/**
 * Wraps a section with a scroll-linked parallax background layer.
 * The bg layer moves at `speed` (0–1) relative to scroll — slower = more depth.
 * Children render above the parallax layer at normal scroll speed.
 */
export default function ParallaxSection({
  children,
  className = '',
  speed = 0.35,
  accent = 'purple',
  id,
}) {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    const section = sectionRef.current;
    const bg = bgRef.current;
    if (!section || !bg) return;

    // How far the bg travels: section height * (1 - speed) gives the offset range
    const ctx = gsap.context(() => {
      gsap.fromTo(
        bg,
        { yPercent: -15 * (1 - speed) * 100 / 100 },
        {
          yPercent: 15 * (1 - speed) * 100 / 100,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, [speed]);

  const accentMap = {
    purple: 'parallax-bg-purple',
    pink:   'parallax-bg-pink',
    blue:   'parallax-bg-blue',
    teal:   'parallax-bg-teal',
  };

  return (
    <div ref={sectionRef} id={id} className={`relative overflow-hidden ${className}`}>
      {/* Parallax background layer */}
      <div
        ref={bgRef}
        aria-hidden="true"
        className={`parallax-bg ${accentMap[accent] ?? accentMap.purple}`}
      />
      {/* Content at normal scroll speed */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
