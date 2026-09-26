'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ExternalLink, Trophy, Code2, Users } from 'lucide-react';
import { gsap } from 'gsap';

function Counter({ target, suffix = '', duration = 1.8 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const obj = useRef({ val: 0 });

  useEffect(() => {
    if (!isInView) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) { if (ref.current) ref.current.textContent = target + suffix; return; }
    gsap.to(obj.current, {
      val: target,
      duration,
      ease: 'power2.out',
      onUpdate: () => {
        if (ref.current) ref.current.textContent = Math.round(obj.current.val) + suffix;
      },
    });
  }, [isInView, target, suffix, duration]);

  return <span ref={ref}>0{suffix}</span>;
}

const achievements = [
  {
    icon: <Trophy className="w-4 h-4" />,
    title: 'Super Contributor — Hacktoberfest 2025',
    desc: 'Earned the Super Contributor Badge from DigitalOcean & GitHub for significant open-source contributions.',
    link: 'https://www.holopin.io/hacktoberfest2025/userbadge/cmgkihuso0029i804g7rzz6ic',
    linkLabel: 'View Badge',
    counter: null,
  },
  {
    icon: <Code2 className="w-4 h-4" />,
    title: 'LeetCode Streak',
    desc: 'Maintained a 200+ day problem-solving streak, earning 11 badges for consistency and contest performance.',
    link: 'https://leetcode.com/u/abhi_pimpalkar01/',
    linkLabel: 'LeetCode Profile',
    counter: { target: 200, suffix: '+', label: 'Days' },
    hasBadges: true,
  },
  {
    icon: <Users className="w-4 h-4" />,
    title: 'Top 500 — MumbaiHacks 2025',
    desc: 'Shortlisted among top 500 teams nationally for an AI-powered Generic Medicine Finder in the Healthcare track.',
    link: null,
    counter: { target: 500, suffix: '+', label: 'Teams' },
  },
];

const badges = ['/HUNDD.png','/HUND.png','/FIFTY1.png','/FIFTY.png','/JAN.png','/FEB.png','/MAR.png','/SEP.png','/OCT.png','/NOV.png','/DEC.png'];

export default function AchievementsSection() {
  const [showAll, setShowAll] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px 0px' });

  return (
    <section className="bg-[#080810] py-24 px-6 sm:px-10 lg:px-16">
      <div className="max-w-3xl mx-auto" ref={ref}>

        <motion.p
          initial={{ opacity: 0, y: 12 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-purple-400 text-xs font-semibold tracking-widest uppercase mb-3"
        >
          Achievements
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-12"
        >
          Highlights
        </motion.h2>

        <div className="space-y-4">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
              className="p-5 sm:p-6 rounded-2xl border border-white/8 bg-white/3 hover:border-purple-500/20 hover:bg-white/5 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  whileHover={{ scale: 1.15, rotate: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                  className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 shrink-0 mt-0.5"
                >
                  {item.icon}
                </motion.div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <h3 className="text-sm font-semibold text-white mb-1">{item.title}</h3>
                    {/* Animated counter */}
                    {item.counter && (
                      <div className="text-right shrink-0">
                        <p className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text leading-none">
                          <Counter target={item.counter.target} suffix={item.counter.suffix} />
                        </p>
                        <p className="text-[10px] text-gray-600 mt-0.5">{item.counter.label}</p>
                      </div>
                    )}
                  </div>

                  <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>

                  {item.link && (
                    <a href={item.link} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-3 text-xs text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <ExternalLink className="w-3 h-3" />
                      {item.linkLabel}
                    </a>
                  )}

                  {item.hasBadges && (
                    <div className="mt-4">
                      <div className="flex flex-wrap gap-2">
                        {(showAll ? badges : badges.slice(0, 6)).map((badge, bi) => (
                          <motion.div
                            key={bi}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            whileHover={{ y: -3, scale: 1.08 }}
                            transition={{ delay: 0.5 + bi * 0.04 }}
                            className="w-12 h-16 rounded-lg overflow-hidden bg-slate-800/60 border border-white/8"
                          >
                            <img src={badge} alt={`Badge ${bi + 1}`} className="w-full h-full object-cover" />
                          </motion.div>
                        ))}
                      </div>
                      {badges.length > 6 && (
                        <button onClick={() => setShowAll(!showAll)}
                          className="mt-3 text-xs text-purple-400 hover:text-purple-300 transition-colors"
                        >
                          {showAll ? 'Show less' : `+${badges.length - 6} more badges`}
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
