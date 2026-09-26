'use client';

import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

/**
 * 3D tilt-on-hover card with a cursor-tracking glow.
 * Pass `href` to render as a link instead of a div.
 * All other props (initial/animate/transition/...) pass straight
 * through to the underlying motion element, so existing reveal
 * animations keep working unchanged.
 */
export default function TiltCard({
  children,
  className = '',
  maxTilt = 8,
  href,
  target,
  rel,
  style,
  ...motionProps
}) {
  const ref = useRef(null);
  const [hovering, setHovering] = useState(false);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(py, [0, 1], [maxTilt, -maxTilt]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(px, [0, 1], [-maxTilt, maxTilt]), {
    stiffness: 200,
    damping: 20,
  });
  const glowX = useTransform(px, [0, 1], ['0%', '100%']);
  const glowY = useTransform(py, [0, 1], ['0%', '100%']);
  const glowBackground = useTransform([glowX, glowY], ([gx, gy]) =>
    `radial-gradient(280px circle at ${gx} ${gy}, rgba(168,85,247,0.16), transparent 70%)`
  );

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    px.set(0.5);
    py.set(0.5);
    setHovering(false);
  };

  const Comp = href ? motion.a : motion.div;

  return (
    <Comp
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800, ...style }}
      className={`group relative ${className}`}
      {...motionProps}
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px rounded-[inherit] transition-opacity duration-300"
        style={{ background: glowBackground, opacity: hovering ? 1 : 0 }}
      />
      {children}
    </Comp>
  );
}