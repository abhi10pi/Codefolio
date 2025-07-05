export default function Certifications() {
  const certs = [
    {
      thumb: "/OOPS.png",
      link: "https://moonshot.scaler.com/s/sl/4W-yUp1ftE",
    },
    {
      thumb: "/AI&GREENSkills.png",
      link: "https://drive.google.com/file/d/19iLGRnGeXpS7azr2iC9gWvoI-irtg2aM/view?usp=drive_link",
    },
    {
      thumb: "/AI.png",
      link: "https://drive.google.com/file/d/11KpaZpkwN8hbtuufVzbXiU2PRKDx3FVa/view?usp=drive_link",
    },
    {
      thumb: "/GENAI.png",
      link: "https://drive.google.com/file/d/1rJSV6Vd-RnrkB4caWLNF00YyI1F-_Prj/view?usp=drive_link",
    },
  ];

  return (
    <section
      id="certifications"
      className="py-20 px-6 bg-gradient-to-b from-slate-950 to-slate-900 text-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Certifications
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-center">
          {certs.map((cert, i) => (
            <div
              key={i}
              className="group relative w-full h-40 sm:h-44 md:h-48 bg-slate-800/30 shadow-md hover:shadow-purple-500/20 transition-all overflow-hidden"
            >
              <img
                src={cert.thumb}
                alt={cert.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60 group-hover:opacity-40 transition" />

             

              {/* View Button - Only on Hover */}
              <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pb-3 z-10">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-1 text-xs font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:scale-105 transition-transform rounded-full"
                >
                  View
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
