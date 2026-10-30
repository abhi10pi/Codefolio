'use client';

import { useState } from 'react';
import { Github, ExternalLink, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useScrollReveal } from '../lib/useScrollReveal';

const projects = [
  {
    title: 'GitMind',
    subtitle: 'Chat with Your GitHub Repositories (RAG)',
    tech: ['Spring Boot', 'Spring Security OAuth2', 'PostgreSQL', 'pgvector', 'Redis', 'RabbitMQ', 'Nginx', 'Docker'],
    bullets: [
      'Designed and built a Spring Boot RAG platform with GitHub OAuth2 login, letting users chat with their own repositories, with answers grounded in retrieved code and cited to the exact file, lines, and commit on GitHub.',
      'Built an asynchronous indexing pipeline (code chunking, embeddings, pgvector) with RabbitMQ workers, live status tracking, and LLM responses streamed to the client over SSE.',
      'Implemented HMAC-verified, idempotent push webhooks for auto-sync that re-index only changed files, with Redis caching, rate limiting, and circuit breakers, deployed via Docker Compose behind an Nginx load balancer.',
    ],
    github: 'https://github.com/abhi10pi/GitMind',
    live: null,
    tag: 'RAG · AI',
  },
  {
    title: 'HookFlow',
    subtitle: 'Reliable Webhook Delivery Platform',
    tech: ['Java', 'Spring Boot', 'Spring Security', 'PostgreSQL', 'Redis', 'RabbitMQ', 'Docker', 'Flyway'],
    bullets: [
      'A multi-tenant webhook delivery platform for reliably receiving and delivering events between applications with secure event processing.',
      'Building an asynchronous, scalable processing system with background workers, automatic retries, failure handling, rate limiting, and dead-letter queues.',
      'Implementing duplicate prevention, delivery tracking, and failed-delivery replay to ensure reliable event delivery while keeping APIs responsive.',
    ],
    github: 'https://github.com/abhi10pi/HookFlow',
    live: null,
    tag: 'Backend · Infra',
  },
  {
    title: 'Nexly',
    subtitle: 'NextCareer AI',
    tech: ['Next.js', 'PostgreSQL', 'Prisma', 'Gemini API', 'Clerk'],
    bullets: [
      'AI-powered interview-preparation platform that generates personalized quizzes and tailored resumes/cover letters using the Gemini API.',
      'Includes a market-insights module surfacing salary benchmarks and in-demand skills.',
    ],
    github: 'https://github.com/abhi10pi/Nexly-NextCareer-AI.git',
    live: 'https://nexly-nextcareer-ai.vercel.app/',
    tag: 'Full-Stack · AI',
  },
];

const variants = {
  enter: (dir) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
  center: { opacity: 1, x: 0 },
  exit:  (dir) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
};

export default function ProjectsSection() {
  const { ref, isInView } = useScrollReveal();
  const [index, setIndex] = useState(0);
  const [dir, setDir]     = useState(1);

  const go = (next) => {
    setDir(next > index ? 1 : -1);
    setIndex(next);
  };
  const prev = () => go(index === 0 ? projects.length - 1 : index - 1);
  const next = () => go(index === projects.length - 1 ? 0 : index + 1);

  const proj = projects[index];

  return (
    <section className="bg-[#080810] py-24 px-6 sm:px-10 lg:px-16">
      <div className="max-w-4xl mx-auto" ref={ref}>

        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 12 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-purple-400 text-xs font-semibold tracking-widest uppercase mb-3"
        >
          Work
        </motion.p>

        <div className="flex items-end justify-between gap-4 flex-wrap mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-white"
          >
            Featured Projects
          </motion.h2>
          <motion.a
            initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            href="https://github.com/abhi10pi" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-purple-400 transition-colors"
          >
            View all on GitHub <ExternalLink className="w-3.5 h-3.5" />
          </motion.a>
        </div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.03] min-h-[360px]">
            {/* top accent */}
            <div className="h-px w-full bg-gradient-to-r from-purple-500/60 via-pink-500/40 to-transparent" />

            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={proj.title}
                custom={dir}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="p-7 sm:p-9"
              >
                {/* Title row */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div>
                    <span className="text-[10px] font-semibold text-purple-400 tracking-widest uppercase px-2 py-0.5 rounded-full border border-purple-500/25 bg-purple-500/8 mb-2 inline-block">
                      {proj.tag}
                    </span>
                    <h3 className="text-2xl font-bold text-white leading-tight">{proj.title}</h3>
                    <p className="text-sm text-gray-500 mt-0.5">{proj.subtitle}</p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0 mt-1">
                    <a href={proj.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                      className="p-2 rounded-lg border border-white/8 text-gray-500 hover:text-white hover:border-white/25 transition-all duration-200">
                      <Github className="w-4 h-4" />
                    </a>
                    {proj.live && (
                      <a href={proj.live} target="_blank" rel="noopener noreferrer" aria-label="Live site"
                        className="p-2 rounded-lg border border-white/8 text-gray-500 hover:text-purple-400 hover:border-purple-500/30 transition-all duration-200">
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-3 mb-7">
                  {proj.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3 text-sm text-gray-400 leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-purple-500/60 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 pt-5 border-t border-white/6">
                  {proj.tech.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-full bg-white/4 border border-white/8 text-gray-500 text-xs">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-between mt-6"
        >
          {/* Dots */}
          <div className="flex items-center gap-2">
            {projects.map((_, i) => (
              <button
                key={i} onClick={() => go(i)}
                aria-label={`Go to project ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === index
                    ? 'w-6 h-2 bg-purple-500'
                    : 'w-2 h-2 bg-white/15 hover:bg-white/30'
                }`}
              />
            ))}
          </div>

          {/* Counter + arrows */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-600 tabular-nums">
              {String(index + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
            </span>
            <button onClick={prev} aria-label="Previous project"
              className="p-2 rounded-xl border border-white/8 text-gray-400 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all duration-200">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button onClick={next} aria-label="Next project"
              className="p-2 rounded-xl border border-purple-500/30 text-purple-400 hover:bg-purple-500/10 hover:border-purple-500/50 transition-all duration-200">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
