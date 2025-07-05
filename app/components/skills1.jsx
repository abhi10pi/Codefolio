import React from "react";
import Image from "next/image";

function SkillsSectionV2() {
  const skills = [
    { name: "Java", img: "/JAVA.png" },
    { name: "JavaScript", img: "/JAVASCRIPT.png" },
    { name: "Python", img: "/PYTHON.png" },
    { name: "HTML", img: "/HTML.png" },
    { name: "CSS", img: "/CSS.png" },
    { name: "Tailwind CSS", img: "/TAILWIND.png" },
    { name: "React", img: "/REACT.png" },
    { name: "Next.js", img: "/NEXTJS.png" },
    { name: "Node.js", img: "/NODEJS.png" },
    { name: "Express.js", img: "/EXPRESSJS.png" },
    { name: "MongoDB", img: "/MONGODB.png" },
    { name: "MySQL", img: "/MYSQL.png" },
    { name: "PostgreSQL", img: "/POSTGRESQL.png" },
    { name: "Git", img: "/GIT.png" },
    { name: "GitHub", img: "/GITHUB.png" },
  ];

  return (
    <section className="bg-slate-950 py-10 px-4 sm:px-6 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl font-bold mb-10 bg-gradient-to-r from-purple-500 via-pink-400 to-purple-500 text-transparent bg-clip-text">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-slate-900 hover:bg-slate-800 transition p-2 rounded-xl shadow-md hover:shadow-purple-500/30 flex flex-col items-center justify-center"
            >
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 mb-2">
                <Image
                  src={skill.img}
                  alt={skill.name}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-full"
                />
              </div>
              <p className="text-xs text-gray-200 text-center">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSectionV2;
