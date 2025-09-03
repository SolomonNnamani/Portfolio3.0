"use client"
import Image from "next/image"
import {useState} from "react";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { useScrollAnimation } from "./_components/Animations";


const projects = [
  {
    title: "ShopSphere – Admin Control Dashboard",
    desc: "Full-stack MERN e-commerce admin dashboard with order tracking, user management, real-time performance analytics, and inventory control.",
    img: "https://res.cloudinary.com/diwn1spcp/image/upload/w_1200,q_85,f_auto,dpr_auto/v1755380053/dashboard_eaf9vg.png",
    tools: ["React", "Node.js", "MongoDB", "Tailwind", "Gsap", "Express", "OAuth"],
    live: "https://shopsphere-online.netlify.app/dashboard/dashboard-login", // link to live site
    github: "https://github.com/SolomonNnamani/Shopsphere/tree/main/client/src/components/dashboard" // link to repo
  },
  {
    title: "ShopSphere – E-Commerce Platform",
    desc: "Full-stack e-commerce platform with product browsing, secure checkout, inventory tracking, and a sleek, mobile-friendly UI.",
    img: "https://res.cloudinary.com/diwn1spcp/image/upload/w_1200,q_85,f_auto,dpr_auto/v1755380063/mainsite_ssgxp7.png",
    tools: ["React", "Javascript", "MongoDB", "Tailwind", "Gsap", "Cloudinary"],
    live: "https://shopsphere-online.netlify.app/",
    github: "https://github.com/SolomonNnamani/Shopsphere/tree/main/client/src/components/mainSite"
  },
  {
    title: "Portfolio Website",
    desc: "Modern personal portfolio with smooth animations, GSAP scroll effects, and responsive design.",
    img: "https://res.cloudinary.com/diwn1spcp/image/upload/w_1200,q_85,f_auto,dpr_auto/v1755380187/portfolio3.0_efwkme.png",
    tools: ["React", "GSAP", "Tailwind"],
    live: "https://solomonnnamani.netlify.app/",
    github: "https://github.com/SolomonNnamani/Portfolio3.0"
  },
  
];

export default function Projects(){
  
  const [showAllTags, setShowAllTags] = useState(false)
   useScrollAnimation([showAllTags])
 
  return (
    <section id="projects" className="w-full px-5 md:px-10 lg:px-20 py-20">
      {/* Title */}
      <p className="fade-in text-gray-200 font-bold text-4xl text-center captionFont tracking-wide mb-5">
        Projects
      </p>
      <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto ">
        A selection of projects I’ve built, from full-stack applications to
        sleek front-end designs. Each one taught me something new.
      </p>

      {/* Projects Grid */}
      <div className="fade-in grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.slice(0, showAllTags ? projects.length : 6).map((project, i) => (
          <div
            key={i}
            className=" rounded-xl border border-white/10 bg-white/5 overflow-hidden transform transition duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-green-700/20"
          >
            {/* Image */}
            <div className="h-48 w-full overflow-hidden">
              <Image
                src={project.img}
                alt={project.title}
                width={1200} 
                height={1200}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="p-2 md:p-5 space-y-3">
              <h3 className="md:text-xl font-semibold text-gray-200">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm">{project.desc}</p>

              {/* Tools */}
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 pt-3">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank" // Opens in a new tab
                    rel="noopener noreferrer" // Prevents new tab from accessing this page (security) & hides referrer info. add am oh make new tab no give scamer(window.opener) link to ur site make it post malicious stuff for ur site.
                    className="flex items-center gap-2 text-green-500 hover:underline"
                  >
                    <FiExternalLink /> Live
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-white"
                  >
                    <FaGithub /> Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
        
      </div>
{
          projects.length > 6 && (
            <div>
              <button
                onClick={() => setShowAllTags(prev => !prev)}
              className="inline-flex outline-none mt-5 items-center justify-center rounded-lg bg-green-700 px-5 py-3 font-medium text-white shadow-md transition hover:scale-[1.02] hover:bg-green-600 cursor-pointer"
            >
              {showAllTags ? "Show Less..." : "See More ..."}
            </button>
            </div>
            )
        }

    </section>
  );
};


