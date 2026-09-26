// 'use client';

// import { motion } from 'motion/react';
// import { useScrollReveal } from '../lib/useScrollReveal';
// import { Briefcase, ExternalLink } from 'lucide-react';

// const experiences = [
//   {
//     role: 'Software Engineering Intern',
//     company: 'Rasika & Co.',
//     location: 'Pune',
//     period: 'Feb 2026 – Jun 2026',
//     type: 'Frontend Engineering',
//     bullets: [
//       'Built responsive, user-facing features for production web applications, translating UI/UX designs into functional interfaces.',
//       'Integrated frontend applications with backend REST APIs, ensuring reliable data flow between client and server.',
//       'Optimized application performance and collaborated with cross-functional teams to ship high-quality features on schedule.',
//     ],
//     certLink: null,
//   },
//   {
//     role: 'AI/ML Intern (Virtual)',
//     company: 'Infosys Springboard',
//     location: 'Remote',
//     period: 'Sep 2025 – Nov 2025',
//     type: 'Machine Learning',
//     bullets: [
//       'Developed a deep learning pipeline using CNN and U-Net architectures to detect and segment oil-spill regions in satellite imagery.',
//       'Built an end-to-end web interface with drag-and-drop uploads, real-time segmentation visualization, and downloadable reports.',
//     ],
//     certLink: 'https://drive.google.com/file/d/11KpaZpkwN8hbtuufVzbXiU2PRKDx3FVa/view?usp=drive_link',
//   },
// ];

// export default function ExperienceSection() {
//   const { ref, isInView } = useScrollReveal();

//   return (
//     <section id="experience" className="bg-[#080810] py-24 px-6 sm:px-10 lg:px-16">
//       <div className="max-w-3xl mx-auto" ref={ref}>

//         <motion.p
//           initial={{ opacity: 0, y: 12 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.5 }}
//           className="text-purple-400 text-xs font-semibold tracking-widest uppercase mb-3"
//         >
//           Experience
//         </motion.p>

//         <motion.h2
//           initial={{ opacity: 0, y: 16 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.5, delay: 0.1 }}
//           className="text-3xl sm:text-4xl font-bold text-white mb-12"
//         >
//           Where I've Worked
//         </motion.h2>

//         <div className="relative">
//           {/* Timeline line */}
//           <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-purple-500/40 via-purple-500/20 to-transparent" />

//           <div className="space-y-10">
//             {experiences.map((exp, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={isInView ? { opacity: 1, x: 0 } : {}}
//                 transition={{ duration: 0.6, delay: 0.2 + i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
//                 className="relative pl-8"
//               >
//                 {/* Timeline dot */}
//                 <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full bg-[#080810] border-2 border-purple-500/60 shadow-sm shadow-purple-500/30" />

//                 <div className="p-5 sm:p-6 rounded-2xl border border-white/8 bg-white/3 hover:border-purple-500/20 hover:bg-white/5 transition-all duration-300">
//                   {/* Header */}
//                   <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
//                     <div>
//                       <h3 className="text-base font-semibold text-white">{exp.role}</h3>
//                       <p className="text-sm text-purple-400 mt-0.5">
//                         {exp.company} · {exp.location}
//                       </p>
//                     </div>
//                     <div className="text-right shrink-0">
//                       <span className="text-xs text-gray-500 font-medium">{exp.period}</span>
//                       <p className="text-xs text-gray-600 mt-0.5">{exp.type}</p>
//                     </div>
//                   </div>

//                   {/* Bullets */}
//                   <ul className="space-y-2">
//                     {exp.bullets.map((b, bi) => (
//                       <li key={bi} className="flex gap-3 text-sm text-gray-400 leading-relaxed">
//                         <span className="mt-2 w-1 h-1 rounded-full bg-purple-500/60 shrink-0" />
//                         {b}
//                       </li>
//                     ))}
//                   </ul>

//                   {/* Cert link */}
//                   {exp.certLink && (
//                     <a
//                       href={exp.certLink}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="inline-flex items-center gap-1.5 mt-4 text-xs text-purple-400 hover:text-purple-300 transition-colors"
//                     >
//                       <ExternalLink className="w-3 h-3" />
//                       View Certificate
//                     </a>
//                   )}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


'use client';

import { useRef } from 'react';
import { motion, useScroll } from 'motion/react';
import { useScrollReveal } from '../lib/useScrollReveal';
import { ExternalLink } from 'lucide-react';

const experiences = [
  {
    role: 'Software Engineering Intern',
    company: 'Rasika & Co.',
    location: 'Pune',
    period: 'Feb 2026 – Jun 2026',
    type: 'Frontend Engineering',
    bullets: [
      'Built responsive, user-facing features for production web applications, translating UI/UX designs into functional interfaces.',
      'Integrated frontend applications with backend REST APIs, ensuring reliable data flow between client and server.',
      'Optimized application performance and collaborated with cross-functional teams to ship high-quality features on schedule.',
    ],
    certLink: null,
  },
  {
    role: 'AI/ML Intern (Virtual)',
    company: 'Infosys Springboard',
    location: 'Remote',
    period: 'Sep 2025 – Nov 2025',
    type: 'Machine Learning',
    bullets: [
      'Developed a deep learning pipeline using CNN and U-Net architectures to detect and segment oil-spill regions in satellite imagery.',
      'Built an end-to-end web interface with drag-and-drop uploads, real-time segmentation visualization, and downloadable reports.',
    ],
    certLink: 'https://drive.google.com/file/d/11KpaZpkwN8hbtuufVzbXiU2PRKDx3FVa/view?usp=drive_link',
  },
];

export default function ExperienceSection() {
  const { ref, isInView } = useScrollReveal();
  const timelineRef = useRef(null);

  // Ties the timeline line's length to how far the user has scrolled through it.
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 0.85', 'end 0.6'],
  });

  return (
    <section className="bg-[#080810] py-24 px-6 sm:px-10 lg:px-16">
      <div className="max-w-3xl mx-auto" ref={ref}>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-purple-400 text-xs font-semibold tracking-widest uppercase mb-3"
        >
          Experience
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-12"
        >
          Where I've Worked
        </motion.h2>

        <div className="relative" ref={timelineRef}>
          {/* Track (always visible, faint) */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-white/5" />
          {/* Progress line (draws in as you scroll) */}
          <motion.div
            style={{ scaleY: scrollYProgress, transformOrigin: 'top' }}
            className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-purple-500 via-purple-500/60 to-pink-500/30"
          />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative pl-8"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full bg-[#080810] border-2 border-purple-500/60 shadow-sm shadow-purple-500/30" />

                <div className="p-5 sm:p-6 rounded-2xl border border-white/8 bg-white/3 hover:border-purple-500/20 hover:bg-white/5 transition-all duration-300">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-base font-semibold text-white">{exp.role}</h3>
                      <p className="text-sm text-purple-400 mt-0.5">
                        {exp.company} · {exp.location}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-xs text-gray-500 font-medium">{exp.period}</span>
                      <p className="text-xs text-gray-600 mt-0.5">{exp.type}</p>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2">
                    {exp.bullets.map((b, bi) => (
                      <li key={bi} className="flex gap-3 text-sm text-gray-400 leading-relaxed">
                        <span className="mt-2 w-1 h-1 rounded-full bg-purple-500/60 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Cert link */}
                  {exp.certLink && (
                    <a
                      href={exp.certLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-4 text-xs text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <ExternalLink className="w-3 h-3" />
                      View Certificate
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}