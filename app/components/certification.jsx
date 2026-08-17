'use client';

import { motion } from 'motion/react';
import { useScrollReveal } from '../lib/useScrollReveal';
import { ExternalLink } from 'lucide-react';

const certs = [
  {
    title: 'Object-Oriented Programming in Java',
    issuer: 'Scaler Academy',
    date: 'March 2025',
    thumb: '/OOPS.png',
    link: 'https://moonshot.scaler.com/s/sl/4W-yUp1ftE',
  },
  {
    title: 'AI & Green Skills',
    issuer: 'Edunet x AICTE x Shell',
    date: '2025',
    thumb: '/AI&GREENSkills.png',
    link: 'https://drive.google.com/file/d/19iLGRnGeXpS7azr2iC9gWvoI-irtg2aM/view?usp=drive_link',
  },
  {
    title: 'AI Primer',
    issuer: 'Infosys Springboard',
    date: '2025',
    thumb: '/AI.png',
    link: 'https://drive.google.com/file/d/11KpaZpkwN8hbtuufVzbXiU2PRKDx3FVa/view?usp=drive_link',
  },
  {
    title: 'Generative AI',
    issuer: 'Infosys Springboard',
    date: '2025',
    thumb: '/GENAI.png',
    link: 'https://drive.google.com/file/d/1rJSV6Vd-RnrkB4caWLNF00YyI1F-_Prj/view?usp=drive_link',
  },
];

export default function Certifications() {
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="certifications" className="bg-[#080810] py-24 px-6 sm:px-10 lg:px-16">
      <div className="max-w-5xl mx-auto" ref={ref}>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-purple-400 text-xs font-semibold tracking-widest uppercase mb-3"
        >
          Certifications
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-12"
        >
          Credentials
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {certs.map((cert, i) => (
            <motion.a
              key={i}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative flex flex-col rounded-xl border border-white/8 bg-white/3 hover:border-purple-500/30 overflow-hidden transition-colors duration-300"
            >
              {/* Thumbnail */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                <img
                  src={cert.thumb}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="p-2 rounded-full bg-white/10 backdrop-blur-sm">
                    <ExternalLink className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-3">
                <p className="text-xs font-medium text-gray-300 leading-snug line-clamp-2">{cert.title}</p>
                <p className="text-[10px] text-gray-600 mt-1">{cert.issuer} · {cert.date}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
