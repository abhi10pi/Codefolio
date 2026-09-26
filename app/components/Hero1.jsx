'use client';

import { useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { ArrowRight, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Vortex } from './ui/vortex';
import MagneticButton from './ui/MagneticButton';

const HeroOrbit = dynamic(() => import('./three/HeroOrbit'), { ssr: false });

if (typeof window !== 'undefined') gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
  { href: 'https://github.com/abhi10pi', label: 'GitHub', icon: <Github className="w-4 h-4" />, hover: 'hover:border-gray-400 hover:text-white' },
  { href: 'http://www.linkedin.com/in/abhishekpimpalkar', label: 'LinkedIn', icon: <Linkedin className="w-4 h-4" />, hover: 'hover:border-blue-400 hover:text-blue-400' },
  { href: 'https://leetcode.com/u/abhi_pimpalkar01/', label: 'LeetCode', icon: <ExternalLink className="w-4 h-4" />, hover: 'hover:border-yellow-400 hover:text-yellow-400' },
  { href: 'mailto:abhishekpimpalkar35@gmail.com', label: 'Email', icon: <Mail className="w-4 h-4" />, hover: 'hover:border-pink-400 hover:text-pink-400' },
];

export default function Hero1() {
  const sectionRef      = useRef(null);
  const roleRef         = useRef(null);
  const nameRef         = useRef(null);
  const descRef         = useRef(null);
  const btnsRef         = useRef(null);
  const socialsRef      = useRef(null);
  const badgesRef       = useRef(null);
  const portraitRef     = useRef(null);
  const portraitWrapRef = useRef(null);
  const scrollIndRef    = useRef(null);

  // Cursor parallax for portrait + 3D scene
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotX   = useSpring(useTransform(py, [0,1], [8,-8]),   { stiffness: 150, damping: 20 });
  const rotY   = useSpring(useTransform(px, [0,1], [-8,8]),   { stiffness: 150, damping: 20 });
  const shiftX = useSpring(useTransform(px, [0,1], [-10,10]), { stiffness: 150, damping: 20 });
  const shiftY = useSpring(useTransform(py, [0,1], [-10,10]), { stiffness: 150, damping: 20 });

  const onMouseMove = (e) => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const r = portraitRef.current?.getBoundingClientRect();
    if (!r) return;
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top)  / r.height);
  };
  const onMouseLeave = () => { px.set(0.5); py.set(0.5); };

  // Entrance animation only — no scroll-out, no pin
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const els = [roleRef, nameRef, descRef, btnsRef, socialsRef, badgesRef].map(r => r.current);
    gsap.set(els, { opacity: 0, y: 30 });
    gsap.set(portraitWrapRef.current, { opacity: 0, scale: 0.92 });

    if (reduced) {
      gsap.set([...els, portraitWrapRef.current], { opacity: 1, y: 0, scale: 1 });
      return;
    }

    const tl = gsap.timeline({ delay: 0.1 });
    tl.to(roleRef.current,        { opacity: 1, y: 0, duration: 0.55, ease: 'power2.out' }, 0.5)
      .to(nameRef.current,        { opacity: 1, y: 0, duration: 0.55, ease: 'power2.out' }, 0.7)
      .to(descRef.current,        { opacity: 1, y: 0, duration: 0.5,  ease: 'power2.out' }, 1.1)
      .to(btnsRef.current,        { opacity: 1, y: 0, duration: 0.5,  ease: 'power2.out' }, 1.3)
      .to(socialsRef.current,     { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out' }, 1.45)
      .to(portraitWrapRef.current,{ opacity: 1, scale: 1, duration: 0.8, ease: 'power2.out' }, 0.4)
      .to(badgesRef.current,      { opacity: 1, y: 0, duration: 0.4,  ease: 'power2.out' }, 1.55);

    return () => tl.kill();
  }, []);

  return (
    <section id="hero" ref={sectionRef} className="relative">
      <Vortex
        backgroundColor="#000000"
        className="min-h-screen w-full flex items-center justify-center overflow-hidden"
      >
        <div className="relative z-10 max-w-screen-xl w-full mx-auto px-6 sm:px-10 py-24 sm:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* ── Left column ── */}
            <div className="space-y-7">

              {/* Role badge */}
              <div ref={roleRef} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-white/5 text-gray-400 text-xs font-medium tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Backend Developer
              </div>

              {/* Name */}
              <div ref={nameRef} className="space-y-1">
                <p className="text-gray-500 text-sm font-medium tracking-widest uppercase">Hello, I'm</p>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight">
                  Abhishek
                  <span className="block text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                    Pimpalkar
                  </span>
                </h1>
              </div>

              {/* Description */}
              <p ref={descRef} className="text-lg text-gray-400 font-light leading-relaxed max-w-md">
                Specializing in{' '}
                <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-medium">Java & Spring Boot</span>
                {' '}with full-stack capabilities in{' '}
                <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-medium">React & Next.js</span>.
              </p>

              {/* Buttons */}
              <div ref={btnsRef} className="flex flex-col sm:flex-row gap-3">
                <MagneticButton strength={0.4}>
                  <Link href="#projects">
                    <motion.button
                      whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                      className="group flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-6 py-3 rounded-xl font-medium text-sm transition-all duration-200 shadow-lg shadow-purple-900/30"
                    >
                      View Projects
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </motion.button>
                  </Link>
                </MagneticButton>
                <MagneticButton strength={0.4}>
                  <Link href="#contact">
                    <motion.button
                      whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                      className="flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-gray-300 hover:text-white px-6 py-3 rounded-xl font-medium text-sm transition-all duration-200 bg-white/5 hover:bg-white/10"
                    >
                      <Mail className="w-4 h-4" />
                      Contact Me
                    </motion.button>
                  </Link>
                </MagneticButton>
              </div>

              {/* Socials */}
              <div ref={socialsRef} className="flex items-center gap-3 pt-1">
                {socialLinks.map((s) => (
                  <motion.a
                    key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                    whileHover={{ scale: 1.15, y: -2 }} whileTap={{ scale: 0.95 }}
                    className={`p-2.5 rounded-lg border border-white/10 text-gray-500 transition-all duration-200 bg-white/5 ${s.hover}`}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* ── Right column — 3D orbit + portrait ── */}
            <div ref={portraitWrapRef} className="flex justify-center lg:justify-end">
              <div
                ref={portraitRef}
                onMouseMove={onMouseMove}
                onMouseLeave={onMouseLeave}
                className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
              >
                {/* 3D orbit scene */}
                <div className="absolute -inset-16 sm:-inset-20 lg:-inset-24 pointer-events-none">
                  <HeroOrbit px={px} py={py} />
                </div>

                {/* Portrait */}
                <motion.div
                  style={{ x: shiftX, y: shiftY, rotateX: rotX, rotateY: rotY, transformPerspective: 1000 }}
                  className="absolute inset-6 rounded-full overflow-hidden border border-white/15 shadow-2xl"
                >
                  <img src="./PROFILE.png" alt="Abhishek Pimpalkar" className="w-full h-full object-cover object-top" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </motion.div>

                {/* Floating badges */}
                <div ref={badgesRef} className="opacity-0">
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-4 -right-2 flex items-center gap-1.5 px-3 py-1.5 bg-white/5 backdrop-blur-sm border border-white/20 rounded-full text-xs text-gray-300 whitespace-nowrap"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    Open to work
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute bottom-4 -left-2 flex items-center gap-1.5 px-3 py-1.5 bg-white/5 backdrop-blur-sm border border-white/20 rounded-full text-xs text-gray-300 whitespace-nowrap"
                  >
                    🎓 CGPA 8.82
                  </motion.div>
                </div>
              </div>
            </div>

          </div>

          {/* Scroll indicator */}
          <div ref={scrollIndRef} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <span className="text-gray-600 text-xs tracking-widest uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
            />
          </div>
        </div>
      </Vortex>
    </section>
  );
}
