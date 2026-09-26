// 'use client';

// import React from 'react';
// import Image from 'next/image';
// import { motion } from 'motion/react';
// import { useScrollReveal } from '../lib/useScrollReveal';

// const skillCategories = [
//   {
//     label: 'Languages',
//     skills: [
//       { name: 'Java', img: '/JAVA.png' },
//       { name: 'JavaScript', img: '/JAVASCRIPT.png' },
//       { name: 'TypeScript', img: '/JAVASCRIPT.png' },
//       { name: 'Python', img: '/PYTHON.png' },
//       { name: 'SQL', img: '/SQL.png' },
//     ],
//   },
//   {
//     label: 'Backend',
//     skills: [
//       { name: 'Spring Boot', img: '/JAVA.png' },
//       { name: 'Node.js', img: '/NODEJS.png' },
//       { name: 'Express.js', img: '/EXPRESSJS.png' },
//     ],
//   },
//   {
//     label: 'Frontend',
//     skills: [
//       { name: 'React', img: '/REACT.png' },
//       { name: 'Next.js', img: '/NEXTJS.png' },
//       { name: 'Tailwind CSS', img: '/TAILWIND.png' },
//       { name: 'HTML5', img: '/HTML.png' },
//       { name: 'CSS3', img: '/CSS.png' },
//     ],
//   },
//   {
//     label: 'Databases',
//     skills: [
//       { name: 'PostgreSQL', img: '/POSTGRESQL.png' },
//       { name: 'MySQL', img: '/MYSQL.png' },
//       { name: 'MongoDB', img: '/MONGODB.png' },
//     ],
//   },
//   {
//     label: 'Tools & DevOps',
//     skills: [
//       { name: 'Git', img: '/GIT.png' },
//       { name: 'GitHub', img: '/GITHUB.png' },
//     ],
//   },
// ];

// const coreConcepts = [
//   'OOP', 'Data Structures & Algorithms', 'Spring MVC',
//   'Spring Data JPA', 'Hibernate', 'RESTful APIs',
//   'JWT Authentication', 'JDBC', 'MVC Architecture',
//   'Docker', 'Maven', 'Postman',
// ];

// function SkillsSectionV2() {
//   const { ref, isInView } = useScrollReveal();

//   return (
//     <section className="bg-[#080810] py-24 px-6 sm:px-10 lg:px-16">
//       <div className="max-w-5xl mx-auto" ref={ref}>

//         <motion.p
//           initial={{ opacity: 0, y: 12 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.5 }}
//           className="text-purple-400 text-xs font-semibold tracking-widest uppercase mb-3"
//         >
//           Technical Skills
//         </motion.p>

//         <motion.h2
//           initial={{ opacity: 0, y: 16 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.5, delay: 0.1 }}
//           className="text-3xl sm:text-4xl font-bold text-white mb-12"
//         >
//           Tools & Technologies
//         </motion.h2>

//         {/* Category rows */}
//         <div className="space-y-0 divide-y divide-white/5 border border-white/8 rounded-2xl overflow-hidden">
//           {skillCategories.map((cat, catIdx) => (
//             <motion.div
//               key={cat.label}
//               initial={{ opacity: 0, y: 12 }}
//               animate={isInView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.45, delay: 0.2 + catIdx * 0.08 }}
//               className="flex flex-col sm:flex-row sm:items-center gap-4 px-5 py-5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-200"
//             >
//               {/* Category label */}
//               <div className="sm:w-36 shrink-0">
//                 <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-widest">
//                   {cat.label}
//                 </span>
//               </div>

//               {/* Skills row */}
//               <div className="flex flex-wrap gap-2.5">
//                 {cat.skills.map((skill, skillIdx) => (
//                   <motion.div
//                     key={skill.name}
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     animate={isInView ? { opacity: 1, scale: 1 } : {}}
//                     transition={{ duration: 0.3, delay: 0.25 + catIdx * 0.08 + skillIdx * 0.04 }}
//                     whileHover={{ y: -2, transition: { duration: 0.15 } }}
//                     className="group flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/8 hover:border-white/20 hover:bg-white/8 transition-all duration-200 cursor-default"
//                   >
//                     <div className="relative w-4 h-4 shrink-0">
//                       <Image
//                         src={skill.img}
//                         alt={skill.name}
//                         fill
//                         style={{ objectFit: 'contain' }}
//                       />
//                     </div>
//                     <span className="text-xs text-gray-400 group-hover:text-gray-200 transition-colors duration-200 whitespace-nowrap">
//                       {skill.name}
//                     </span>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Core concepts */}
//         <motion.div
//           initial={{ opacity: 0, y: 16 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.5, delay: 0.65 }}
//           className="mt-8"
//         >
//           <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-widest mb-4">
//             Core Concepts
//           </p>
//           <div className="flex flex-wrap gap-2">
//             {coreConcepts.map((concept, i) => (
//               <motion.span
//                 key={concept}
//                 initial={{ opacity: 0 }}
//                 animate={isInView ? { opacity: 1 } : {}}
//                 transition={{ duration: 0.3, delay: 0.7 + i * 0.03 }}
//                 className="px-3 py-1.5 rounded-full bg-white/4 border border-white/8 text-gray-500 text-xs hover:text-gray-300 hover:border-white/15 transition-colors duration-200"
//               >
//                 {concept}
//               </motion.span>
//             ))}
//           </div>
//         </motion.div>

//       </div>
//     </section>
//   );
// }

// export default SkillsSectionV2;


'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { useScrollReveal } from '../lib/useScrollReveal';

const skillCategories = [
  {
    label: 'Languages',
    skills: [
      { name: 'Java', img: '/JAVA.png' },
      { name: 'JavaScript', img: '/JAVASCRIPT.png' },
      { name: 'TypeScript', img: '/JAVASCRIPT.png' },
      { name: 'Python', img: '/PYTHON.png' },
      { name: 'SQL', img: '/SQL.png' },
    ],
  },
  {
    label: 'Backend',
    skills: [
      { name: 'Spring Boot', img: '/JAVA.png' },
      { name: 'Node.js', img: '/NODEJS.png' },
      { name: 'Express.js', img: '/EXPRESSJS.png' },
    ],
  },
  {
    label: 'Frontend',
    skills: [
      { name: 'React', img: '/REACT.png' },
      { name: 'Next.js', img: '/NEXTJS.png' },
      { name: 'Tailwind CSS', img: '/TAILWIND.png' },
      { name: 'HTML5', img: '/HTML.png' },
      { name: 'CSS3', img: '/CSS.png' },
    ],
  },
  {
    label: 'Databases',
    skills: [
      { name: 'PostgreSQL', img: '/POSTGRESQL.png' },
      { name: 'MySQL', img: '/MYSQL.png' },
      { name: 'MongoDB', img: '/MONGODB.png' },
    ],
  },
  {
    label: 'Tools & DevOps',
    skills: [
      { name: 'Git', img: '/GIT.png' },
      { name: 'GitHub', img: '/GITHUB.png' },
    ],
  },
];

const coreConcepts = [
  'OOP', 'Data Structures & Algorithms', 'Spring MVC',
  'Spring Data JPA', 'Hibernate', 'RESTful APIs',
  'JWT Authentication', 'JDBC', 'MVC Architecture',
  'Docker', 'Maven', 'Postman',
];

function SkillsSectionV2() {
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
          Technical Skills
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl font-bold text-white mb-12"
        >
          Tools & Technologies
        </motion.h2>

        {/* Category rows */}
        <div className="space-y-0 divide-y divide-white/5 border border-white/8 rounded-2xl overflow-hidden">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.2 + catIdx * 0.08 }}
              className="flex flex-col sm:flex-row sm:items-center gap-4 px-5 py-5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-200"
            >
              {/* Category label */}
              <div className="sm:w-36 shrink-0">
                <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-widest">
                  {cat.label}
                </span>
              </div>

              {/* Skills row */}
              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.25 + catIdx * 0.08 + skillIdx * 0.04 }}
                    whileHover={{ y: -3, transition: { duration: 0.15 } }}
                    className="group flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/8 hover:border-white/20 hover:bg-white/8 transition-all duration-200 cursor-default"
                  >
                    <div className="relative w-4 h-4 shrink-0">
                      <Image
                        src={skill.img}
                        alt={skill.name}
                        fill
                        style={{ objectFit: 'contain' }}
                      />
                    </div>
                    <span className="text-xs text-gray-400 group-hover:text-gray-200 transition-colors duration-200 whitespace-nowrap">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Core concepts — seamless marquee, pauses on hover */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="mt-8"
        >
          <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-widest mb-4">
            Core Concepts
          </p>
          <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <div className="marquee-track flex gap-2 w-max">
              {[...coreConcepts, ...coreConcepts].map((concept, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-full bg-white/4 border border-white/8 text-gray-500 text-xs whitespace-nowrap hover:text-white hover:border-purple-500/40 transition-colors duration-200"
                >
                  {concept}
                </span>
              ))}
            </div>
          </div>
          <style jsx>{`
            @keyframes marquee {
              from { transform: translateX(0); }
              to { transform: translateX(-50%); }
            }
            .marquee-track {
              animation: marquee 28s linear infinite;
            }
            .group:hover .marquee-track {
              animation-play-state: paused;
            }
            @media (prefers-reduced-motion: reduce) {
              .marquee-track { animation: none; }
            }
          `}</style>
        </motion.div>

      </div>
    </section>
  );
}

export default SkillsSectionV2;