'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { useRef } from 'react';
import { Mail, Github, Linkedin, ExternalLink, ArrowUpRight } from 'lucide-react';
import MagneticButton from './ui/MagneticButton';

const terminalLines = [
  { delay: 0.3,  text: '$ ./connect-with-abhishek',       color: 'text-purple-400' },
  { delay: 0.7,  text: 'Initializing connection...',       color: 'text-gray-500' },
  { delay: 1.1,  text: '✓ Portfolio loaded',               color: 'text-green-400' },
  { delay: 1.4,  text: '✓ Projects loaded',                color: 'text-green-400' },
  { delay: 1.7,  text: '✓ Experience loaded',              color: 'text-green-400' },
  { delay: 2.1,  text: 'Ready to build something great?',  color: 'text-white' },
];

const links = [
  { label: 'GitHub',   value: 'abhi10pi',          href: 'https://github.com/abhi10pi',                  icon: <Github className="w-4 h-4" /> },
  { label: 'LinkedIn', value: 'abhishekpimpalkar',  href: 'https://linkedin.com/in/abhishekpimpalkar',    icon: <Linkedin className="w-4 h-4" /> },
  { label: 'LeetCode', value: 'abhi_pimpalkar01',   href: 'https://leetcode.com/u/abhi_pimpalkar01/',     icon: <ExternalLink className="w-4 h-4" /> },
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px 0px' });
  const [particles, setParticles] = useState([]);

  const handleEmailClick = () => {
    const id = Date.now();
    const next = Array.from({ length: 12 }).map((_, i) => ({
      id: `${id}-${i}`,
      angle: (i / 12) * 360 + Math.random() * 15,
      dist: 40 + Math.random() * 30,
    }));
    setParticles(p => [...p, ...next]);
    setTimeout(() => setParticles(p => p.filter(x => !next.some(n => n.id === x.id))), 700);
  };

  return (
    <section className="bg-[#080810] py-24 px-6 sm:px-10 lg:px-16">
      <div className="max-w-3xl mx-auto" ref={ref}>

        <motion.p
          initial={{ opacity: 0, y: 12 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-purple-400 text-xs font-semibold tracking-widest uppercase mb-3"
        >
          Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-10"
        >
          Let's work{' '}
          <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">together</span>
        </motion.h2>

        {/* Terminal block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl border border-white/8 bg-white/[0.02] overflow-hidden font-mono mb-10"
        >
          {/* Header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/8 bg-white/[0.03]">
            <span className="w-3 h-3 rounded-full bg-red-500/70" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <span className="w-3 h-3 rounded-full bg-green-500/70" />
            <span className="ml-3 text-[11px] text-gray-600 tracking-widest">terminal</span>
          </div>

          {/* Lines */}
          <div className="p-6 space-y-2">
            {terminalLines.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: line.delay }}
                className={`text-sm ${line.color}`}
              >
                {line.text}
              </motion.p>
            ))}

            {/* CTA inside terminal */}
            <motion.div
              initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 2.5 }}
              className="pt-4"
            >
              <div className="relative inline-block">
                <MagneticButton strength={0.3}>
                  <motion.a
                    href="mailto:abhishekpimpalkar35@gmail.com"
                    onClick={handleEmailClick}
                    whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-medium text-sm transition-all duration-200 shadow-lg shadow-purple-900/30"
                  >
                    <Mail className="w-4 h-4" />
                    LET'S TALK
                    <ArrowUpRight className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                </MagneticButton>

                {/* Particle burst */}
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <AnimatePresence>
                    {particles.map((p) => {
                      const rad = (p.angle * Math.PI) / 180;
                      return (
                        <motion.span
                          key={p.id}
                          initial={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                          animate={{ opacity: 0, x: Math.cos(rad) * p.dist, y: Math.sin(rad) * p.dist, scale: 0.3 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.65, ease: 'easeOut' }}
                          className="absolute w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"
                        />
                      );
                    })}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-3"
        >
          {links.map((l, i) => (
            <motion.a
              key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.55 + i * 0.08 }}
              whileHover={{ y: -2, transition: { duration: 0.15 } }}
              className="flex items-center gap-3 px-4 py-3 rounded-xl border border-white/8 bg-white/3 hover:border-purple-500/30 hover:bg-white/5 text-gray-400 hover:text-gray-200 transition-all duration-200 text-sm"
            >
              <span className="text-purple-400">{l.icon}</span>
              <div>
                <p className="text-[10px] text-gray-600 leading-none mb-0.5">{l.label}</p>
                <p className="text-xs text-gray-300">{l.value}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="mt-16 text-xs text-gray-700 text-center"
        >
          Designed & built by Abhishek Pimpalkar · {new Date().getFullYear()}
        </motion.p>
      </div>
    </section>
  );
}
