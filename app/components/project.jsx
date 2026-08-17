'use client';

import React from 'react';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useScrollReveal } from '../lib/useScrollReveal';

const projects = [
  {
    title: 'SignalRoom',
    subtitle: 'Signal Validation & Credibility Platform',
    tech: ['Next.js', 'Spring Boot', 'PostgreSQL', 'Docker', 'JWT'],
    desc: 'Full-stack signal-validation platform enabling users to submit market signals and build a verifiable credibility history. Features a credibility-scoring algorithm, role-based access control (User, Consultant, Admin), and a responsive analytics dashboard.',
    github: 'https://github.com/abhi10pi/SignalRoom.git',
    live: null,
    highlight: true,
  },
  {
    title: 'Nexly',
    subtitle: 'NextCareer AI',
    tech: ['Next.js', 'PostgreSQL', 'Prisma', 'Gemini API', 'Clerk'],
    desc: 'AI-powered interview-preparation platform that generates personalized quizzes and tailored resumes/cover letters using the Gemini API. Includes a market-insights module surfacing salary benchmarks and in-demand skills.',
    github: 'https://github.com/abhi10pi/Nexly-NextCareer-AI.git',
    live: 'https://nexly-nextcareer-ai.vercel.app/',
    highlight: false,
  },
];

function ProjectCard({ proj, index, isInView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group relative flex flex-col rounded-2xl border border-white/8 bg-white/3 hover:border-purple-500/30 hover:bg-white/5 transition-all duration-300 overflow-hidden"
    >
      {/* Top accent line */}
      <div className={`h-px w-full bg-gradient-to-r ${proj.highlight ? 'from-purple-500/60 via-pink-500/40 to-transparent' : 'from-white/10 to-transparent'} transition-all duration-500 group-hover:from-purple-500/60 group-hover:via-pink-500/40`} />

      <div className="flex flex-col h-full p-6 sm:p-7">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <h3 className="text-lg font-semibold text-white group-hover:text-purple-200 transition-colors duration-200">
              {proj.title}
            </h3>
            <p className="text-xs text-gray-500 mt-0.5">{proj.subtitle}</p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={proj.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg border border-white/8 text-gray-500 hover:text-white hover:border-white/20 transition-all duration-200"
            >
              <Github className="w-4 h-4" />
            </a>
            {proj.live && proj.live !== '#' && (
              <a
                href={proj.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live site"
                className="p-2 rounded-lg border border-white/8 text-gray-500 hover:text-purple-400 hover:border-purple-500/30 transition-all duration-200"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-400 leading-relaxed mb-6 flex-1">
          {proj.desc}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2">
          {proj.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-full bg-white/5 border border-white/8 text-gray-400 text-xs group-hover:border-purple-500/20 transition-colors duration-300"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section className="bg-[#080810] py-24 px-6 sm:px-10 lg:px-16">
      <div className="max-w-5xl mx-auto" ref={ref}>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-purple-400 text-xs font-semibold tracking-widest uppercase mb-3"
        >
          Work
        </motion.p>

        <div className="flex items-end justify-between mb-12 gap-4 flex-wrap">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-white"
          >
            Featured Projects
          </motion.h2>

          <motion.a
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            href="https://github.com/abhi10pi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-purple-400 transition-colors duration-200"
          >
            View all on GitHub
            <ExternalLink className="w-3.5 h-3.5" />
          </motion.a>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((proj, i) => (
            <ProjectCard key={proj.title} proj={proj} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
