import ProjectCard from "./ProjectCard";
import Sidebar from "./Sidebar";
import { motion } from "framer-motion";
import ContactSection from "./ContactSection";
import {
  SiPython,
  SiMongodb,
  SiMysql,
  SiGit,
  SiDocker,
  SiLinux,
  SiPostman,
  SiSpringboot,
  SiFlask,
  SiApachekafka,
  SiScikitlearn,
  SiPandas,
  SiNumpy
} from "react-icons/si";

import {
  FaJava,
  FaBrain,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaExternalLinkAlt,
  FaCode,
  FaDatabase,
} from "react-icons/fa";

import { TbApi } from "react-icons/tb";
import { useState, useEffect } from "react";

function App() {
  const isDark = document.documentElement.classList.contains("dark");

const color = isDark
  ? "rgba(59,130,246,0.15)"
  : "rgba(59,130,246,0.08)";

  const roles = ["Software Engineer", "AI Developer", "Backend Developer"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [theme, setTheme] = useState("dark");
  const [active, setActive] = useState("about");

 // Typing animation
useEffect(() => {
  let i = 0;
  const current = roles[index];

  const typing = setInterval(() => {
    setText(current.slice(0, i));
    i++;

    if (i > current.length) {
      clearInterval(typing);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % roles.length);
      }, 1500);
    }
  }, 70);

  return () => clearInterval(typing);
}, [index]);

// Load saved theme
useEffect(() => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }
}, []);

// Apply theme change
useEffect(() => {
  document.documentElement.classList.toggle("dark", theme === "dark");
  localStorage.setItem("theme", theme);
}, [theme]);
useEffect(() => {
  const bg = document.getElementById("interactive-bg");
  if (!bg) return;

  let mouseX = 0;
  let mouseY = 0;

  const handleMove = (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  };

  window.addEventListener("mousemove", handleMove);

  const animate = () => {
    bg.style.backgroundImage = `
      radial-gradient(circle at ${mouseX}px ${mouseY}px, rgba(59,130,246,0.12), transparent 200px),
      radial-gradient(circle, rgba(59,130,246,0.15) 1px, transparent 1px)
    `;

    bg.style.backgroundSize = "100% 100%, 40px 40px";

    requestAnimationFrame(animate);
  };

  animate();

  return () => {
    window.removeEventListener("mousemove", handleMove);
  };
}, []);
  

  const skills = [
    { name: "Java", icon: <FaJava />, color: "text-orange-500" },
    { name: "Python", icon: <SiPython />, color: "text-yellow-400" },
    { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500" },
    { name: "MySQL", icon: <SiMysql />, color: "text-blue-400" },
    { name: "Git", icon: <SiGit />, color: "text-red-500" },
    { name: "Docker", icon: <SiDocker />, color: "text-blue-500" },
    { name: "Linux", icon: <SiLinux />, color: "text-yellow-300" },
    { name: "Postman", icon: <SiPostman />, color: "text-orange-400" },
    { name: "REST API", icon: <TbApi />, color: "text-cyan-400" },
    { name: "AI/ML", icon: <FaBrain />, color: "text-pink-400" },
  ];
  const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 }
};

const stagger = {
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
};
useEffect(() => {
  const sections = ["about", "projects", "skills", "experience"];

  const handleScroll = () => {
    let current = "about";

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        const top = el.offsetTop - 150;
        if (window.scrollY >= top) {
          current = id;
        }
      }
    });

    setActive(current);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
useEffect(() => {
  const bg = document.getElementById("interactive-bg");

  if (!bg) return;

  const handleMove = (e) => {
    const x = e.clientX;
    const y = e.clientY;

    bg.style.backgroundImage = `
      radial-gradient(circle at ${x}px ${y}px, rgba(59,130,246,0.08), transparent 200px),
      radial-gradient(circle, rgba(59,130,246,0.15) 1px, transparent 1px)
    `;
  };

  bg.style.backgroundSize = "100% 100%, 40px 40px";

  window.addEventListener("mousemove", handleMove);

  return () => window.removeEventListener("mousemove", handleMove);
}, []);

  return (
    
  <div className="flex min-h-screen relative overflow-hidden transition-colors duration-500
bg-gradient-to-b from-[#f8fafc] via-[#e2e8f0] to-[#f1f5f9]
dark:bg-gradient-to-b dark:from-[#020617] dark:via-[#020617] dark:to-[#020617]
text-gray-900 dark:text-white">
  {/* 🔥 INTERACTIVE BACKGROUND */}
<div
  id="interactive-bg"
  className="pointer-events-none absolute inset-0 z-0"
/>

      <Sidebar active={active} />
      <div className="flex-1 ml-24 relative z-10">
      {/* GRID BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 opacity-5 dark:opacity-10
bg-[radial-gradient(circle,_rgba(59,130,246,0.15)_1px,_transparent_1px)] bg-[size:40px_40px]"></div>
      {/* NAVBAR */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-8 px-8 py-3 rounded-full backdrop-blur-xl
bg-white/70 dark:bg-white/10
border border-gray-200 dark:border-white/10
shadow-md dark:shadow-none">

          <div className="font-bold text-lg tracking-wide text-blue-500">TM</div>

          <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-300">

<a
  href="#about"
  className={`transition ${
    active === "about" ? "text-blue-500 font-semibold" : "hover:text-blue-500"
  }`}
>
  About
</a>
<a href="#projects" className="hover:text-blue-500 transition">Projects</a>
<a href="#skills" className="hover:text-blue-500 transition">Skills</a>
<a href="#experience" className="hover:text-blue-500 transition">Experience</a>
<a
  href="/resume.pdf"
  download
  className="hover:text-blue-500 transition"
>
  Resume ↓
</a>

  {/* 🔥 THEME TOGGLE */}
  <button
  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
  className="ml-2 w-16 h-8 flex items-center px-1 rounded-full
  bg-gradient-to-r from-blue-400 to-purple-400
  dark:from-blue-500 dark:to-purple-500
  border border-white/10 backdrop-blur-xl
  transition-all duration-500 shadow-inner
  hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]"
>

    {/* 🔵 SLIDING CIRCLE */}
    <div
      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs
      bg-white dark:bg-[#0a0a23]
      shadow-md transition-all duration-500
      ${theme === "dark"
        ? "translate-x-8 rotate-180"
        : "translate-x-0 rotate-0"}`}
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </div>

  </button>

</div>
 

        </div>
      </div>

      
      
      {/* HERO */}
      {/* 🌊 SMOOTH FADE TO NEXT SECTION */}
<div className="absolute bottom-0 left-0 w-full h-32
bg-gradient-to-b from-transparent to-[#f1f5f9]
dark:to-[#020617]
pointer-events-none"></div>
      <div className="relative min-h-screen flex items-center justify-center px-6 pt-24 md:pt-32 overflow-hidden">

{/* 🌌 GLOBAL DOT PATTERN (IMPROVED) */}
<div className="absolute inset-0 pointer-events-none
opacity-30 dark:opacity-20 bg-[radial-gradient(circle,_rgba(59,130,246,0.15)_1px,_transparent_1px)] bg-[size:40px_40px]
[background-size:32px_32px]"></div>
{/* 🌌 MINIMAL PREMIUM GRID */}
<div className="absolute inset-0 pointer-events-none
opacity-10 dark:opacity-10
bg-[radial-gradient(circle,_rgba(59,130,246,0.15)_1px,_transparent_1px)] bg-[size:40px_40px]
[background-size:48px_48px]"></div>
<div className="absolute inset-0 pointer-events-none
opacity-10
bg-[radial-gradient(circle,_rgba(59,130,246,0.15)_1px,_transparent_1px)] bg-[size:40px_40px]
[background-size:40px_40px]
animate-[pulse_6s_ease-in-out_infinite]"></div>
{/* 🌟 RIGHT SIDE GLOW */}
<div className="absolute right-0 top-0 w-[500px] h-[500px]
bg-blue-500/10 blur-[140px] rounded-full pointer-events-none"></div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger}
          className="grid md:grid-cols-2 gap-10 md:gap-16 items-center max-w-6xl"
        >

          <motion.img
        
  src="/profile.png"
  alt="profile"
  className="rounded-2xl w-[260px] md:w-[300px] shadow-lg"
/>
         

          <div>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-bold mb-3 leading-tight">
              Hi, I'm <span className="text-blue-500">Tanisha 👋</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-gray-600 dark:text-gray-400 mb-4">
                Mumbai, India • Open to Software Engineer Roles
            </motion.p>
            <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-lg">
  Software Engineer focused on building scalable backend systems and integrating
  machine learning into real-world applications. Experienced in designing APIs,
  handling real-time data, and developing production-oriented systems.
</p>

<p className="text-sm text-gray-500 dark:text-gray-400">
  Interested in Backend Engineering • AI Systems • Distributed Systems
</p>
            

            <h2 className="text-lg md:text-xl mb-6 font-medium text-blue-500">{text}</h2>

            <motion.div
  variants={fadeUp}
  className="bg-gray-100 dark:bg-[#020617] p-6 rounded-2xl font-mono text-sm"
>
  <p>$ whoami</p>
  <p className="text-blue-400">Software Engineer</p>

  <p>$ skills</p>
  <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
  Java • Spring Boot • Python • Flask • Kafka • REST APIs
</p>
</motion.div>

          </div>
        </motion.div>
      </div>

      {/* SUMMARY */}
      <div id="about" className="py-20 md:py-28 px-6 max-w-6xl mx-auto">
        <motion.h2 variants={fadeUp} className="text-xl mb-6">Professional Summary</motion.h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-3xl">
          Software Engineer with strong expertise in backend systems,
          REST APIs, and ML-enabled applications using Spring Boot and Flask.
          Built & deployed backend systems with real-time data processing
        </p>
      </div>
      <div className="py-16 max-w-6xl mx-auto px-6">
  <h2 className="text-2xl font-semibold mb-6">Core Strengths</h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

    {[
      "Backend System Design",
      "REST API Development",
      "ML Integration",
      "Scalable Systems (Kafka)"
    ].map((item, i) => (
      <div
        key={i}
        className="p-4 rounded-xl bg-white/70 dark:bg-white/5
        border border-gray-200 dark:border-white/10
        backdrop-blur-xl text-sm"
      >
        {item}
      </div>
    ))}

  </div>
</div>




<div id="projects" className="relative z-20 py-24 max-w-6xl mx-auto px-6">
    <h2 className="text-3xl font-bold mb-10">Projects</h2>

  <div className="grid md:grid-cols-2 gap-8">

   <ProjectCard
  title="Phishing Detection System"
description="Built an ML-based phishing detection system with real-time prediction APIs using Flask and MongoDB, achieving 78.7% accuracy."  image="/projects/phishing.png"
  github="https://github.com/tanisha-mukharjee/phishing-detection-system"
  live="https://phishing-detection-system-8inq.onrender.com/"
  tech={["Python", "Flask", "Scikit-learn", "MongoDB"]}
/>

<ProjectCard
  title="Cogito – AI Decision System"
description="Developed an AI-based decision intelligence system that generates structured recommendations with confidence scoring using rule-based and ML-assisted logic."  image="/projects/cogito.png"
  github="https://github.com/tanisha-mukharjee"
  live="https://hzxry2hlbsary1k4dwe6.share.dreamflow.app/"
  tech={["Flutter", "Dart", "AI", "REST API"]}
/>
  </div>
  <div className="max-w-4xl mx-auto mt-16 text-center">
  <h3 className="text-xl font-semibold mb-4">Why These Projects Matter</h3>

  <p className="text-gray-400 text-sm leading-relaxed">
    These projects demonstrate my ability to build scalable backend systems,
    integrate machine learning into real-world applications, and design APIs
    that handle real-time data efficiently.
  </p>
</div>

</div>

      {/* EXPERIENCE */}
      <motion.section
  id="experience"
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  variants={{
    hidden: {},
    show: {
      transition: { staggerChildren: 0.25 }
    }
  }}
  className="py-32 px-6 max-w-6xl mx-auto relative"
>

  {/* TITLE */}
  <h2 className="text-4xl font-bold text-center mb-24">
    Experience
  </h2>

  {/* TIMELINE WRAPPER */}
  <div className="relative">

    {/* 🔥 STATIC LINE */}
    <div className="absolute left-1/2 top-0 h-full w-[2px] bg-white/10"></div>

    {/* 🔥 ANIMATED GLOW LINE */}
    <motion.div
      initial={{ height: 0 }}
      whileInView={{ height: "100%" }}
      transition={{ duration: 1.5 }}
      className="absolute left-1/2 top-0 w-[3px]
      bg-gradient-to-b from-blue-500 via-purple-500 to-transparent"
    ></motion.div>

    {/* ================= ITEM 1 ================= */}
    <motion.div
      variants={{
        hidden: { opacity: 0, x: -100 },
        show: { opacity: 1, x: 0 }
      }}
      className="mb-24 flex justify-between items-center w-full group"
    >

      {/* LEFT CARD */}
      <div className="w-[45%] text-right">
        <div className="relative p-6 rounded-2xl 
        backdrop-blur-xl bg-white/70 dark:bg-white/5
border border-gray-200 dark:border-white/10
        hover:border-blue-500/40
        hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]
        hover:-translate-y-2 transition duration-500">

          {/* GLOW */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100
          bg-gradient-to-r from-blue-500/10 via-transparent to-transparent blur-xl"></div>

          <h3 className="text-lg font-semibold relative z-10">
            JPMorgan Chase – Software Engineering Simulation
          </h3>

          <p className="text-gray-600 dark:text-gray-400 text-sm">Nov 2025</p>

          <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
            Integrated Apache Kafka for high-throughput data processing in Spring Boot microservices.
          </p>

         <a
  href="/jpmorgan-certificate.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-400 text-sm mt-3 inline-flex items-center gap-2 hover:text-blue-300 transition"
>
  📄 View Certificate →
</a>

        </div>
      </div>

      {/* CENTER NODE */}
      <div className="relative z-20 flex items-center justify-center">
        <div className="w-5 h-5 bg-blue-500 rounded-full
        shadow-[0_0_25px_rgba(59,130,246,1)]
        animate-pulse"></div>
      </div>

      {/* EMPTY */}
      <div className="w-[45%]"></div>

    </motion.div>

    {/* ================= ITEM 2 ================= */}
    <motion.div
      variants={{
        hidden: { opacity: 0, x: 100 },
        show: { opacity: 1, x: 0 }
      }}
      className="mb-24 flex justify-between items-center w-full group"
    >

      {/* EMPTY */}
      <div className="w-[45%]"></div>

      {/* CENTER NODE */}
      <div className="relative z-20 flex items-center justify-center">
        <div className="w-5 h-5 bg-purple-500 rounded-full
        shadow-[0_0_25px_rgba(168,85,247,1)]
        animate-pulse"></div>
      </div>

      {/* RIGHT CARD */}
      <div className="w-[45%] text-left">
        <div className="relative p-6 rounded-2xl 
        backdrop-blur-xl bg-white/70 dark:bg-white/5
border border-gray-200 dark:border-white/10
        hover:border-purple-500/40
        hover:shadow-[0_0_40px_rgba(168,85,247,0.3)]
        hover:-translate-y-2 transition duration-500">

          {/* GLOW */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100
          bg-gradient-to-r from-purple-500/10 via-transparent to-transparent blur-xl"></div>

          <h3 className="text-lg font-semibold relative z-10">
            Hewlett Packard Enterprise – Software Engineering Simulation
          </h3>

          <p className="text-gray-600 dark:text-gray-400 text-sm">Nov 2025</p>

          <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
            Built REST APIs using Spring Boot with JSON processing & testing.
          </p>

          <a
  href="/hpe-certificate.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="text-purple-400 text-sm mt-3 inline-flex items-center gap-2 hover:text-purple-300 transition"
>
  📄 View Certificate →
</a>

        </div>
      </div>

    </motion.div>

  </div>

</motion.section>
<div id="achievements" className="py-24 max-w-6xl mx-auto">
  <h2 className="text-3xl font-bold mb-10">Achievements</h2>

  <div className="space-y-6">

    <div className="p-6 rounded-2xl bg-bg-card/70 border border-border">
      <h3 className="font-semibold text-lg">
        🏆 Runner-Up – QuDeCo Technical Competition
      </h3>
      <p className="text-text-secondary text-sm mt-2">
        Ranked 2nd in quiz, C++ debugging, and web development rounds.
      </p>
    </div>

    <div className="p-6 rounded-2xl bg-bg-card/70 border border-border">
      <h3 className="font-semibold text-lg">
        💻 LeetCode – 110+ Problems Solved
      </h3>
      <p className="text-text-secondary text-sm mt-2">
        Strong foundation in DSA including trees, graphs, recursion, and DP.
      </p>
    </div>

  </div>
</div>
      {/* SKILLS */}
      <div id="skills" className="py-32 px-6 max-w-6xl mx-auto">

  <h2 className="text-4xl font-bold mb-4">Skills</h2>

  <p className="text-gray-500 dark:text-gray-400 mb-10">
    Strong foundation in backend systems, scalable APIs, and machine learning.
  </p>
  <p className="text-gray-400 mb-6">
  Technologies I use to build scalable systems
</p>
  

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

    {/* LANGUAGES */}
    <div className="skill-card group">
      <h3 className="text-blue-400 mb-4">Languages</h3>

      <div className="flex flex-wrap gap-3">
        <div className="skill-item"><FaJava /><span>Java</span></div>
        <div className="skill-item"><SiPython /><span>Python</span></div>
        <div className="skill-item"><FaDatabase /><span>SQL</span></div>
      </div>
    </div>

    {/* BACKEND */}
    <div className="skill-card group">
      <h3 className="text-purple-400 mb-4">Backend</h3>

      <div className="flex flex-wrap gap-3">
        <div className="skill-item"><SiSpringboot /><span>Spring Boot</span></div>
        <div className="skill-item"><SiFlask /><span>Flask</span></div>
        <div className="skill-item"><FaDatabase /><span>REST APIs</span></div>
        <div className="skill-item"><SiApachekafka /><span>Kafka</span></div>
      </div>
    </div>

    {/* DATABASE */}
    <div className="skill-card group">
      <h3 className="text-green-400 mb-4">Databases</h3>

      <div className="flex flex-wrap gap-3">
        <div className="skill-item"><SiMongodb /><span>MongoDB</span></div>
        <div className="skill-item"><SiMysql /><span>MySQL</span></div>
        <div className="skill-item"><FaDatabase /><span>H2</span></div>
      </div>
    </div>

    {/* TOOLS */}
    <div className="skill-card group">
      <h3 className="text-yellow-400 mb-4">Tools</h3>

      <div className="flex flex-wrap gap-3">
        <div className="skill-item"><SiGit /><span>Git</span></div>
        <div className="skill-item"><SiPostman /><span>Postman</span></div>
        <div className="skill-item"><SiApachekafka /><span>Kafka</span></div>
      </div>
    </div>

    {/* CORE IT */}
    <div className="skill-card group">
      <h3 className="text-pink-400 mb-4">Core IT </h3>

      <div className="flex flex-wrap gap-3">
        <div className="skill-item"><FaBrain /><span>DSA</span></div>
        <div className="skill-item"><FaBrain /><span>OOP</span></div>
        <div className="skill-item"><FaBrain /><span>DBMS</span></div>
        <div className="skill-item"><FaBrain /><span>OS</span></div>
        <div className="skill-item"><FaBrain /><span>CN</span></div>
      </div>
    </div>

    {/* MACHINE LEARNING */}
    <div className="skill-card group">
      <h3 className="text-cyan-400 mb-4">Machine Learning</h3>

      <div className="flex flex-wrap gap-3">
        <div className="skill-item"><SiScikitlearn /><span>Scikit-learn</span></div>
        <div className="skill-item"><SiPandas /><span>Pandas</span></div>
        <div className="skill-item"><SiNumpy /><span>NumPy</span></div>
      </div>
    </div>

  </div>
</div>
  {/* ✨ Glow Background */}
  <div className="absolute inset-0 flex justify-center">
    <div className="w-[400px] h-[200px] bg-blue-500/10 blur-[120px] rounded-full"></div>
  </div>


 <ContactSection />


<div className="py-16 text-center border-t border-white/10 mt-20">

  <p className="text-gray-400 text-sm">
    Built with ❤️ by <span className="text-blue-400 font-medium">Tanisha Mukharjee</span>
  </p>

  <p className="text-gray-500 text-xs mt-2">
    Open-source • Available on GitHub
  </p>
  
</div>

</div>

    </div>
  
    
    
  );
}



export default App;
