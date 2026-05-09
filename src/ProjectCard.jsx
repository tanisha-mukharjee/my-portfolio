import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useState } from "react";
function ProjectCard({
  title,
  description,
  image,
  github,
  live,
  tech = []
}) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  return (
    
    <div
  onMouseMove={(e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  }}
  className="group relative rounded-2xl overflow-hidden
    border border-white/10 backdrop-blur-xl
    bg-gradient-to-br from-[#0f172a]/80 to-[#020617]/80
    transition duration-500 hover:-translate-y-3
    hover:shadow-[0_20px_80px_rgba(59,130,246,0.25)]">
      <div
  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition"
  style={{
    background: `radial-gradient(circle at ${pos.x}px ${pos.y}px, rgba(59,130,246,0.25), transparent 200px)`
  }}
/>

      {/* 🔥 Glow Effect */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500
      bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10 blur-2xl"></div>

      {/* IMAGE */}
      <div className="relative h-[220px] overflow-hidden">

        <img
          src={image}
          className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-300"></div>

        {/* 🔗 BUTTONS */}
        <div className="absolute inset-0 flex items-center justify-center gap-4
opacity-100 md:opacity-0 md:group-hover:opacity-100
transition duration-300 z-30">

          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer">
              <button className="flex items-center gap-2
              bg-white text-black px-4 py-2 rounded-lg text-sm font-medium
              hover:scale-110 transition">
                <FaGithub /> Code
              </button>
            </a>
          )}

          {live && live !== "" && (
            <a href={live} target="_blank" rel="noopener noreferrer">
              <button className="flex items-center gap-2
              bg-gradient-to-r from-blue-500 to-purple-500
              text-white px-4 py-2 rounded-lg text-sm font-medium
              hover:scale-110 transition">
                <FaExternalLinkAlt /> Live
              </button>
            </a>
          )}

        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6 relative z-10">

        <h3 className="text-xl font-semibold mb-2
        group-hover:text-blue-400 transition">
          {title}
        </h3>

        <div className="text-gray-400 text-sm mb-4 leading-relaxed space-y-2">

  {/* ORIGINAL DESCRIPTION */}
  <p>{description}</p>

  {/* 🔥 ADD THIS BELOW */}
  {title.includes("Phishing") && (
    <>
      <p>
        <span className="text-white font-medium">Problem:</span> Phishing attacks require real-time detection to prevent fraud.
      </p>
      <p>
        <span className="text-white font-medium">Solution:</span> Built ML model with Flask API for live URL classification.
      </p>
      <p>
        <span className="text-white font-medium">Impact:</span> Achieved 78.7% accuracy with scalable backend pipeline.
      </p>
    </>
  )}
  {title.includes("Cogito") && (
  <>
    <p>
      <span className="text-white font-medium">Problem:</span> Decision-making often lacks structured and data-driven insights.
    </p>
    <p>
      <span className="text-white font-medium">Solution:</span> Built AI-driven system generating recommendation scores using rule-based and ML-assisted logic.
    </p>
    <p>
      <span className="text-white font-medium">Impact:</span> Improves decision clarity with confidence-based evaluation and modular design.
    </p>
  </>
)}

</div>

        {/* TECH STACK */}
        <div className="flex flex-wrap gap-2 text-xs">
          {tech.map((t, i) => (
            <span key={i} className="px-2 py-1 bg-white/10 rounded">
              {t}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
}

export default ProjectCard;