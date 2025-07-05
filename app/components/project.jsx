import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Nexly – AI Career Platform",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Gemini API"],
    desc: "AI-powered platform with resume builder, mock interviews, and job market insights.",
    github: "https://github.com/abhi10pi/Nexly",
    live: "https://nexly.vercel.app",
  },
  {
    title: "FundUp – Fundraising for Creators",
    tech: ["Next.js", "MongoDB", "Express", "Razorpay"],
    desc: "Full-stack platform for creators to raise funds securely with integrated Razorpay payments.",
    github: "https://github.com/abhi10pi/FundRaising",
    live: "https://fundup.vercel.app",
  },
];

export default function ProjectsSection() {
  return (
    <section className="bg-gradient-to-b from-slate-950 to-slate-900 py-2 px-6 sm:px-5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-4xl sm:text-5xl font-bold mb-16 text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text tracking-tight">
          Featured Projects
        </h2>

        <div className="grid gap-10 sm:grid-cols-2">
          {projects.map((proj, index) => (
            <div
              key={index}
              className="relative rounded-2xl p-6 border border-purple-500/20 bg-slate-800/20 backdrop-blur-md shadow-md hover:shadow-purple-500/30 transition-all duration-300"
            >
              {/* Glowing Border Ring */}
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-purple-500/30 to-pink-500/30 blur-lg opacity-30 group-hover:opacity-70 transition duration-500"></div>

              {/* Card Content */}
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-xl font-semibold text-white mb-2">{proj.title}</h3>
                <p className="text-sm text-gray-300 mb-4">{proj.desc}</p>

                <div className="flex flex-wrap gap-2 text-xs mb-6">
                  {proj.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-slate-700/50 text-gray-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex gap-4">
                  <a
                    href={proj.github}
                    target="_blank"
                    className="flex items-center gap-1 text-gray-300 hover:text-white transition"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                  <a
                    href={proj.live}
                    target="_blank"
                    className="flex items-center gap-1 text-gray-300 hover:text-pink-400 transition"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Site
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
