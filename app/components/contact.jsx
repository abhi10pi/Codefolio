export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-slate-950 to-slate-900 text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Let’s Connect
        </h2>
        <p className="text-gray-400 mb-6">
          Have a project idea or collaboration in mind? Feel free to reach out!
        </p>
        <a
          href="mailto:abhishekpimpalkar35@gmail.com"
          className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
        >
          📧 abhishekpimpalkar35@gmail.com
        </a>
      </div>
    </section>
  );
}
