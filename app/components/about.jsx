'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import TiltCard from './ui/TiltCard';

const systemRows = [
  { key: 'NAME',     value: 'Abhishek Pimpalkar' },
  { key: 'ROLE',     value: 'Backend Developer' },
  { key: 'STACK',    value: 'Java · Spring Boot · React · Next.js' },
  { key: 'DEGREE',   value: 'B.Tech CSE (AI) — GH Raisoni, Pune' },
  { key: 'CGPA',     value: '8.82 / 10' },
  { key: 'FOCUS',    value: 'Full-Stack · AI/ML · Open Source' },
  { key: 'STATUS',   value: 'Available for opportunities' },
];

const stats = [
  { label: 'CGPA', value: '8.82' },
  { label: 'LeetCode Streak', value: '200+' },
  { label: 'Projects Shipped', value: '5+' },
  { label: 'Open Source', value: 'Active' },
];

export default function AboutMe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px 0px' });

  return (
    <section className="bg-[#080810] py-24 px-6 sm:px-10 lg:px-16">
      <div className="max-w-5xl mx-auto" ref={ref}>

        <motion.p
          initial={{ opacity: 0, y: 12 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-purple-400 text-xs font-semibold tracking-widest uppercase mb-3"
        >
          About Me
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-12"
        >
          System{' '}
          <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
            Initialized
          </span>
        </motion.h2>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">

          {/* System panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="rounded-2xl border border-white/8 bg-white/[0.02] overflow-hidden font-mono">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/8 bg-white/[0.03]">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-3 text-[11px] text-gray-600 tracking-widest">abhishek.profile</span>
              </div>

              {/* Rows */}
              <div className="p-5 space-y-0 divide-y divide-white/5">
                {systemRows.map((row, i) => (
                  <motion.div
                    key={row.key}
                    initial={{ opacity: 0, x: -12 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.35 + i * 0.1 }}
                    className="flex items-start gap-4 py-3"
                  >
                    <span className="text-[11px] text-gray-600 tracking-widest w-20 shrink-0 pt-0.5">{row.key}</span>
                    <span className="text-gray-500 shrink-0">→</span>
                    <span className={`text-sm ${row.key === 'STATUS' ? 'text-green-400' : 'text-gray-300'}`}>
                      {row.value}
                      {row.key === 'STATUS' && (
                        <span className="inline-block ml-2 w-1.5 h-3.5 bg-green-400 animate-pulse align-middle" />
                      )}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Footer line */}
              <div className="px-5 py-3 border-t border-white/8 bg-white/[0.02]">
                <span className="text-[11px] text-gray-700 font-mono">
                  $ ready to build something great_
                  <span className="inline-block w-1.5 h-3 bg-purple-500/60 animate-pulse align-middle ml-0.5" />
                </span>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="lg:col-span-2 grid grid-cols-2 gap-4 content-start"
          >
            {stats.map((s, i) => (
              <TiltCard
                key={s.label} maxTilt={6}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                className="p-4 rounded-xl bg-white/4 border border-white/8 hover:border-purple-500/30 transition-colors duration-300"
              >
                <p className="text-2xl font-bold text-white mb-1">{s.value}</p>
                <p className="text-xs text-gray-500">{s.label}</p>
              </TiltCard>
            ))}

            {/* Brief bio */}
            <motion.p
              initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="col-span-2 text-xs text-gray-500 leading-relaxed pt-2 border-t border-white/6"
            >
              Shipped JWT-secured full-stack platforms, applied CNN/U-Net to satellite imagery, and maintained a 200+ day LeetCode streak. Seeking Backend / Java Spring Boot / SWE roles.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
