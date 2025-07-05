const experiences = [
  {
    role: "AI Internship (Edunet x AICTE x Shell)",
    date: "2025",
    desc: "Built green solutions using AI tools to promote sustainability. Explored data-driven insights with real-world scenarios.",
    certLink: "https://drive.google.com/file/d/1AHDqDFdeqIbTQ/file/view" // replace with actual
  },
  {
    role: "Personal Projects",
    date: "2022–Present",
    desc: "Built full-stack apps using Next.js, MongoDB, Razorpay, Clerk, Prisma, and more — shipping to production regularly.",
    certLink: null
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-6 bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-14 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
          Experience
        </h2>

        <div className="space-y-10 border-l border-purple-500/40 pl-4">
          {experiences.map((exp, i) => (
            <div key={i} className="relative pl-6">
              {/* Dot on the timeline */}
              <div className="absolute left-[-0.45rem] top-1 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full shadow-md"></div>

              {/* Role + Date */}
              <h3 className="text-xl font-semibold text-purple-300 mb-1">
                {exp.role}
              </h3>
              <p className="text-sm text-gray-400 mb-3">{exp.date}</p>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed">{exp.desc}</p>

              {/* Certification Button */}
              {exp.certLink && (
                <a
                  href="https://drive.google.com/file/d/19iLGRnGeXpS7azr2iC9gWvoI-irtg2aM/view?usp=drive_link"
                  target="_blank"
                  className="inline-block mt-4 text-sm font-medium text-purple-400 hover:text-white bg-slate-800/50 px-4 py-2 rounded-lg border border-purple-500/40 hover:bg-purple-600 transition-all duration-300"
                >
                  🎓 View Certification
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
