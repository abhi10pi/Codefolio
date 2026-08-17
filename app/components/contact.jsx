'use client';

import { motion } from 'motion/react';
import { useScrollReveal } from '../lib/useScrollReveal';
import { Mail, Github, Linkedin, ExternalLink, ArrowUpRight } from 'lucide-react';

const links = [
  {
    label: 'GitHub',
    value: 'abhi10pi',
    href: 'https://github.com/abhi10pi',
    icon: <Github className="w-4 h-4" />,
  },
  {
    label: 'LinkedIn',
    value: 'abhishekpimpalkar',
    href: 'https://linkedin.com/in/abhishekpimpalkar',
    icon: <Linkedin className="w-4 h-4" />,
  },
  {
    label: 'LeetCode',
    value: 'abhi_pimpalkar01',
    href: 'https://leetcode.com/u/abhi_pimpalkar01/',
    icon: <ExternalLink className="w-4 h-4" />,
  },
];

export default function ContactSection() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="contact" className="bg-[#080810] py-24 px-6 sm:px-10 lg:px-16">
      <div className="max-w-3xl mx-auto" ref={ref}>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-purple-400 text-xs font-semibold tracking-widest uppercase mb-3"
        >
          Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-4"
        >
          Let's work together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-400 text-base leading-relaxed mb-10 max-w-lg"
        >
          I'm actively looking for Backend / Java Spring Boot / Software Engineer roles. If you have an opportunity or just want to connect, my inbox is open.
        </motion.p>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-10"
        >
          <motion.a
            href="mailto:abhishekpimpalkar35@gmail.com"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-medium text-sm transition-colors duration-200 shadow-lg shadow-purple-900/30"
          >
            <Mail className="w-4 h-4" />
            abhishekpimpalkar35@gmail.com
            <ArrowUpRight className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />
          </motion.a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3"
        >
          {links.map((l, i) => (
            <motion.a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.45 + i * 0.08 }}
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

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-16 text-xs text-gray-700 text-center"
        >
          Designed & built by Abhishek Pimpalkar · {new Date().getFullYear()}
        </motion.p>
      </div>
    </section>
  );
}
