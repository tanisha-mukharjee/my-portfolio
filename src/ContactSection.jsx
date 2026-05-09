import { FaEnvelope, FaCopy, FaCheck } from "react-icons/fa";
import { useState } from "react";

function ContactSection() {
  const [copied, setCopied] = useState(false);

  const email = "mukharjeetanisha05@email.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-32 flex justify-center items-center px-6">

      <div className="relative w-full max-w-2xl p-10 rounded-3xl
      backdrop-blur-xl
      bg-white/60 dark:bg-white/5
      border border-gray-200 dark:border-white/10
      shadow-xl dark:shadow-none
      text-center transition duration-500">

        {/* 🔥 Glow Background */}
        <div className="absolute inset-0 -z-10 blur-3xl opacity-30
        bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Let’s Build Something Impactful 🚀
        </h2>

        {/* SUBTEXT */}
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto">
          Open to Software Engineering roles where I can contribute to scalable backend systems,
          real-world applications, and impactful products.
        </p>

        {/* EMAIL DISPLAY */}
        <div className="flex items-center justify-between gap-4
        bg-white/70 dark:bg-black/40
        border border-gray-200 dark:border-white/10
        px-4 py-3 rounded-xl mb-6">

          <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
            <FaEnvelope className="text-blue-500" />
            {email}
          </div>

          <button
            onClick={handleCopy}
            className="text-xs px-3 py-1 rounded-lg
            bg-blue-500 text-white
            hover:scale-105 transition"
          >
            {copied ? <FaCheck /> : <FaCopy />}
          </button>
        </div>

        {/* CTA BUTTON */}
        <a
          href={`mailto:${email}`}
          className="
            inline-flex items-center gap-2
            px-8 py-3 rounded-xl
            bg-gradient-to-r from-blue-500 to-purple-500
            text-white font-medium
            hover:scale-105 transition duration-300
            shadow-[0_0_25px_rgba(59,130,246,0.5)]
            hover:shadow-[0_0_40px_rgba(139,92,246,0.7)]
          "
        >
          <FaEnvelope />
          Contact Me
        </a>

        {/* SMALL NOTE */}
        
      </div>
    </section>
  );
}

export default ContactSection;