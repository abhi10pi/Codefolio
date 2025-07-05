export default function EducationSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Education</h2>
        <div className="bg-slate-800/40 p-6 rounded-xl border border-purple-500/30 backdrop-blur-lg">
          <h3 className="text-2xl font-semibold text-purple-300">GH Raisoni College of Engineering & Management</h3>
          <p className="text-gray-400 text-sm italic mb-2">B.Tech in CSE (AI) | 2022 – Present</p>
          <p className="text-gray-300">CGPA: <span className="font-bold text-white">8.84</span></p>
        </div>
      </div>
    </section>
  );
}
