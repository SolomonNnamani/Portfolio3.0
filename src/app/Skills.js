"use client"
import { useScrollAnimation } from "./_components/Animations";
import { FaReact, FaNodeJs, FaGithub, FaGitAlt } from "react-icons/fa";
import {SiNextdotjs ,SiMongodb, SiTailwindcss, SiExpress, SiCloudinary, SiJavascript, SiPostman, SiOpenai } from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";
import { TbBrandOauth } from "react-icons/tb";
import { FiZap } from "react-icons/fi";


const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: <FaReact className="text-sky-400" /> },
       { name: "Next.js", icon: <SiNextdotjs className="text-gray-200" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-500" /> },
      { name: "GSAP Animations", icon: <FiZap className="text-green-500" /> }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
       { name: "OAUTH", icon: <TbBrandOauth className="text-green-400" /> }
    ]
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git & GitHub", icon: <FaGithub className="text-gray-300" /> },
      { name: "Cloudinary", icon: <SiCloudinary className="text-blue-400" /> },
      { name: "Git CLI", icon: <FaGitAlt className="text-orange-500" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-500"/> },
       { name: "Vs code", icon: <VscVscodeInsiders  className="text-blue-500"/> },
       { name: "ChatGPT / AI Tools", icon: <SiOpenai className="text-white" /> }

    ]
  }
];

export default function Skills(){
  useScrollAnimation([]);

  return (
    <section id="skills" className="w-full px-5 md:px-10 lg:px-20 py-20">
      {/* Title */}
      <p className="fade-in text-gray-200 font-bold text-4xl text-center captionFont tracking-wide mb-5">
        Skills
      </p>
      <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
        My technical toolkit — the technologies and tools I use to craft 
        seamless, performant, and engaging applications.
      </p>

      {/* Skills Grid */}
      <div className="fade-in grid md:grid-cols-3 gap-8 ">
        {skills.map((group, i) => (
          <div
            key={i}
            className=" rounded-xl border border-white/10 bg-white/5 p-6 transform transition duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-green-700/20"
          >
            <h3 className="text-xl font-semibold text-gray-200 mb-4">{group.category}</h3>
            <div className=" flex flex-wrap md:flex-col lg:flex-row lg:flex-wrap gap-5   ">
              {group.items.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition"
                >
                  <span className="text-2xl">{skill.icon}</span>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


