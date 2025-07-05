import React from "react";

function AboutMe() {
  return (
    <section
      id="about"
      className="bg-slate-950 text-gray-300 py-14 px-4 sm:px-10 lg:px-24"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6">
          👋 Hi, I am{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
            Abhishek Pimpalkar
          </span>
        </h2>

        {/* About Content */}
        <p className="text-base leading-relaxed mb-3">
          I’m a{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text font-medium">
            Full Stack Web Developer
          </span>{" "}
          with a strong foundation in both frontend and backend technologies,
          currently in my final year of BTech in Computer Science and
          Engineering (AI) at G.H. Raisoni College of Engineering and
          Management, Pune, with a CGPA of 8.84.
        </p>

        <p className="text-base leading-relaxed mb-3">
          My core{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text font-medium">
            tech stack
          </span>{" "}
          includes{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text font-medium">
            JavaScript, React, Node.js, MongoDB, and Next.js
          </span>
          . I'm currently expanding my knowledge in{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text font-medium">
            Artificial Intelligence
          </span>
          , especially{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text font-medium">
            Natural Language Processing (NLP)
          </span>{" "}
          and{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text font-medium">
            Generative AI (GenAI)
          </span>
          . I love building applications that are efficient, scalable, and
          intelligent.
        </p>

        <p className="text-base leading-relaxed mb-3">
          I have hands-on experience with{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text font-medium">
            Java, Python, and JavaScript
          </span>
          . I’m well-versed in{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text font-medium">
            Object-Oriented Programming (OOP)
          </span>{" "}
          and have a good understanding of{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text font-medium">
            DBMS and SQL
          </span>{" "}
          for building structured and reliable systems.
        </p>

        <p className="text-base leading-relaxed">
          I’m also deeply invested in data structures and algorithms, and
          continuously practice on{" "}
          <a
            href="https://leetcode.com/u/abhi_pimpalkar01/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-purple-300 transition"
          >
            LeetCode
          </a>
          , where I’ve maintained a 200-day streak to enhance my problem-solving
          skills.
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
