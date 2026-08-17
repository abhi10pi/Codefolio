'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { Vortex } from './ui/vortex';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const socialLinks = [
  {
    href: 'https://github.com/abhi10pi',
    label: 'GitHub',
    icon: <Github className="w-4 h-4" />,
    hoverClass: 'hover:border-gray-400 hover:text-white',
  },
  {
    href: 'http://www.linkedin.com/in/abhishekpimpalkar',
    label: 'LinkedIn',
    icon: <Linkedin className="w-4 h-4" />,
    hoverClass: 'hover:border-blue-400 hover:text-blue-400',
  },
  {
    href: 'https://leetcode.com/u/abhi_pimpalkar01/',
    label: 'LeetCode',
    icon: <ExternalLink className="w-4 h-4" />,
    hoverClass: 'hover:border-yellow-400 hover:text-yellow-400',
  },
  {
    href: 'mailto:abhishekpimpalkar35@gmail.com',
    label: 'Email',
    icon: <Mail className="w-4 h-4" />,
    hoverClass: 'hover:border-pink-400 hover:text-pink-400',
  },
];

function Hero1() {
  return (
    <Vortex
      backgroundColor="#000000"
      className="min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      <div className="relative z-10 max-w-screen-xl w-full mx-auto px-6 sm:px-10 py-24 sm:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Column */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-7"
          >
            <motion.div variants={item} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-white/5 text-gray-400 text-xs font-medium tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Available for opportunities
            </motion.div>

            <motion.div variants={item} className="space-y-2">
              <p className="text-gray-400 text-sm font-medium tracking-widest uppercase">Hello, I'm</p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight">
                Abhishek
                <span className="block text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                  Pimpalkar
                </span>
              </h1>
            </motion.div>

            <motion.p variants={item} className="text-lg text-gray-400 font-light leading-relaxed max-w-md">
              Backend Developer specializing in{' '}
              <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-medium">Java & Spring Boot</span> with full-stack capabilities in{' '}
              <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-medium">React & Next.js</span>.
            </motion.p>

            <motion.div variants={item} className="flex flex-col sm:flex-row gap-3">
              <Link href="#projects">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-6 py-3 rounded-xl font-medium text-sm transition-all duration-200 shadow-lg shadow-purple-900/30"
                >
                  View Projects
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </motion.button>
              </Link>

              <Link href="#contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-gray-300 hover:text-white px-6 py-3 rounded-xl font-medium text-sm transition-all duration-200 bg-white/5 hover:bg-white/10"
                >
                  <Mail className="w-4 h-4" />
                  Get in Touch
                </motion.button>
              </Link>
            </motion.div>

            <motion.div variants={item} className="flex items-center gap-3 pt-1">
              {socialLinks.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ scale: 1.1, y: -1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-2.5 rounded-lg border border-white/10 text-gray-500 transition-all duration-200 bg-white/5 ${s.hoverClass}`}
                >
                  {s.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column — Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">

              {/* Rotating dashed ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-purple-500/30"
              />

              {/* Static outer ring */}
              <div className="absolute inset-3 rounded-full border border-white/10" />

              {/* Image */}
              <div className="absolute inset-6 rounded-full overflow-hidden border border-white/15 shadow-2xl">
                <img
                  src="./Profile-Photo-Abhi.png"
                  alt="Abhishek Pimpalkar"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              {/* Floating badge — top right */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.0, duration: 0.4 }}
                className="absolute top-4 -right-2 flex items-center gap-1.5 px-3 py-1.5 bg-white/5 backdrop-blur-sm border border-white/20 rounded-full text-xs text-gray-300 whitespace-nowrap"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Open to work
              </motion.div>

              {/* Floating badge — bottom left */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.15, duration: 0.4 }}
                className="absolute bottom-4 -left-2 flex items-center gap-1.5 px-3 py-1.5 bg-white/5 backdrop-blur-sm border border-white/20 rounded-full text-xs text-gray-300 whitespace-nowrap"
              >
                🎓 CGPA 8.82
              </motion.div>

            </div>
          </motion.div>

        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-gray-600 text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent"
          />
        </motion.div>
      </div>
    </Vortex>
  );
}

export default Hero1;
