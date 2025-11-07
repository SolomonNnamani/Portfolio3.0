"use client";

import { useScrollAnimation } from "./_components/Animations";
import React from "react";
import { motion } from "framer-motion";

// ⚙️ ICON IMPORTS
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
  FaMailBulk,
  
} from "react-icons/fa";


import {
  SiNextdotjs,
  SiMongodb,
  SiTailwindcss,
  SiExpress,
  SiCloudinary,
  SiJavascript,
  SiPostman,
  SiOpenai,
  SiGraphql,
  SiShopify,
  SiTypescript,
  SiFramer,
  
} from "react-icons/si";

import { VscVscodeInsiders } from "react-icons/vsc";
import { TbBrandOauth } from "react-icons/tb";
import { FiZap } from "react-icons/fi";

// 🧩 TYPE DEFINITIONS
type SkillItem = { name: string; icon: React.ReactNode };
type SkillGroup = { category: string; items: SkillItem[] };

// 🧠 SKILL DATA
const skills: SkillGroup[] = [
  {
    category: "Frontend",
    items: [
      { name: "Next.js (App Router)", icon: <SiNextdotjs className="text-gray-200" /> },
      { name: "React", icon: <FaReact className="text-sky-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
      { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-500" /> },
      { name: "Framer Motion", icon: <SiFramer className="text-pink-500" /> },
      { name: "GSAP", icon: <FiZap className="text-green-500" /> },
    ],
  },
  {
    category: "Backend / API",
    items: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Next.js API Routes", icon: <SiNextdotjs className="text-gray-200" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-400" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
      { name: "GraphQL", icon: <SiGraphql className="text-pink-400" /> },
      { name: "Shopify", icon: <SiShopify className="text-green-600" /> },
      { name: "OAUTH", icon: <TbBrandOauth className="text-green-400" /> },
    ],
  },
  {
    category: "Tools & Integrations",
    items: [
      { name: "Git & GitHub", icon: <FaGithub className="text-gray-300" /> },
      { name: "Git CLI", icon: <FaGitAlt className="text-orange-500" /> },
      { name: "Resend (Email API)", icon: <FaMailBulk className="text-red-400" /> },
      { name: "Brevo (Email Automation)", icon: <SiPostman className="text-blue-400" /> },
      { name: "Cloudinary", icon: <SiCloudinary className="text-blue-400" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
      { name: "VS Code", icon: <VscVscodeInsiders className="text-blue-500" /> },
      { name: "ChatGPT / AI Tools", icon: <SiOpenai className="text-white" /> },
    ],
  },
];

export default function Skills() {
  useScrollAnimation([]);

  return (
    <section id="skills" className="w-full px-5 md:px-10 lg:px-20 py-20">
      {/* Header */}
      <p className="fade-in text-gray-200 font-bold text-4xl text-center captionFont tracking-wide mb-5">
        Skills
      </p>
      <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        My technical toolkit — the technologies and tools I use to craft
        seamless, performant, and engaging applications.
      </p>

      {/* Skills Grid */}
      <div className="fade-in grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {skills.map((group, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 250, damping: 20 }}
            className="rounded-xl border border-white/10 bg-white/5 p-6 hover:shadow-lg hover:shadow-green-700/20"
          >
            <h3 className="text-xl font-semibold text-gray-200 mb-4">
              {group.category}
            </h3>

            <div className="flex flex-wrap md:flex-col lg:flex-row lg:flex-wrap gap-5">
              {group.items.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition"
                >
                  <span className="text-xl">{skill.icon}</span>
                  <span className="text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
