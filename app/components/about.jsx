'use client';

import React from 'react';
import { motion } from 'motion/react';
import { useScrollReveal } from '../lib/useScrollReveal';
import { MapPin, GraduationCap, Code2, Zap } from 'lucide-react';

const stats = [
  { label: 'CGPA', value: '8.82' },
  { label: 'LeetCode Streak', value: '200+' },
  { label: 'Projects Shipped', value: '5+' },
  { label: 'Open Source', value: 'Active' },
];

function AboutMe() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="about" className="bg-[#080810] py-24 px-6 sm:px-10 lg:px-16">
      <div className="max-w-5xl mx-auto" ref={ref}>

        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-purple-400 text-xs font-semibold tracking-widest uppercase mb-3"
        >
          About Me
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-12 leading-tight"
        >
          Building things that{' '}
          <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
            matter
          </span>
        </motion.h2>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Main text — 3 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 space-y-5 text-gray-400 leading-relaxed text-[15px]"
          >
            <p>
              I'm a final-year B.Tech (AI) student and full-stack developer with hands-on experience building{' '}
              <span className="text-gray-200">Java Spring Boot backends</span> and{' '}
              <span className="text-gray-200">React/Next.js frontends</span>. I've shipped role-based, JWT-secured platforms end to end — from API design and database modeling to deployment.
            </p>
            <p>
              I applied deep learning (CNN/U-Net) to a real-world oil-spill segmentation problem during my Infosys Springboard internship, and I'm an active open-source contributor with a{' '}
              <a
                href="https://leetcode.com/u/abhi_pimpalkar01/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 transition-colors underline underline-offset-2"
              >
                200+ day LeetCode streak
              </a>
              .
            </p>
            <p>
              Currently seeking <span className="text-gray-200">Backend / Java Spring Boot / Software Engineer</span> roles where I can contribute to meaningful products and grow with a strong engineering team.
            </p>

            {/* Info pills */}
            <div className="flex flex-wrap gap-3 pt-2">
              {[
                { icon: <GraduationCap className="w-3.5 h-3.5" />, text: 'GH Raisoni College, Pune' },
                { icon: <MapPin className="w-3.5 h-3.5" />, text: 'Pune, India' },
                { icon: <Code2 className="w-3.5 h-3.5" />, text: 'Java · Spring Boot · React' },
                { icon: <Zap className="w-3.5 h-3.5" />, text: 'NLP & GenAI enthusiast' },
              ].map((pill) => (
                <span
                  key={pill.text}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs"
                >
                  <span className="text-purple-400">{pill.icon}</span>
                  {pill.text}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Stats — 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="lg:col-span-2 grid grid-cols-2 gap-4 content-start"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                className="p-4 rounded-xl bg-white/4 border border-white/8 hover:border-purple-500/30 transition-colors duration-300"
              >
                <p className="text-2xl font-bold text-white mb-1">{s.value}</p>
                <p className="text-xs text-gray-500">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
