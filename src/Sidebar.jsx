import { motion } from "framer-motion";
import { SiGithub, SiLeetcode } from "react-icons/si";
import { FaLinkedin, FaPhone } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

function Sidebar({ active }) {
  const icons = [
    {
      icon: <SiGithub />,
      link: "https://github.com/tanisha-mukharjee/",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/tanisha-mukharjee-2a0a3236b/",
      label: "LinkedIn",
    },
    {
      icon: <SiLeetcode />,
      link: "https://leetcode.com/tanisha-mukharjee",
      label: "LeetCode",
    },
    {
      icon: <HiMail />,
      link: "mukharjeetanisha05@email.com",
      label: "Email",
    },
   
  ];

  return (
    <motion.div
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed left-6 top-28 lg:top-[35%] z-50
      bg-white/60 dark:bg-white/5
      backdrop-blur-xl
      border border-gray-200 dark:border-white/10
      rounded-2xl p-3
      shadow-lg dark:shadow-none
      transition-all duration-500"
    >
      <div className="flex flex-col gap-3">
        {icons.map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            className="group relative flex items-center justify-center p-3 rounded-xl
            text-gray-500 dark:text-gray-400
            hover:text-blue-500
            hover:bg-white/40 dark:hover:bg-white/10
            transition duration-300"
          >
            {/* ICON */}
            <div className="text-lg z-10">{item.icon}</div>

            {/* GLOW EFFECT */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100
            rounded-xl blur-md bg-blue-500/10 transition"></div>

            {/* TOOLTIP */}
            <span
              className="absolute left-14
              px-3 py-1 text-xs rounded-md
              bg-white dark:bg-[#020617]
              border border-gray-200 dark:border-white/10
              text-gray-800 dark:text-white
              opacity-0 group-hover:opacity-100
              translate-x-2 group-hover:translate-x-0
              transition-all duration-300
              whitespace-nowrap"
            >
              {item.label}
            </span>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}

export default Sidebar;