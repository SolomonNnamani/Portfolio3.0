"use client";
import Image from "next/image";
import { useState,useEffect } from "react";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "./_components/Animations";

type Project = {
  title: string;
  desc: string;
  img: string;
  tools: string[];
  live?: string;
  github?: string;
};

const projects: Project[] = [
   {
  title: "en garde – Technical Winterwear Commerce Platform",
  desc: "A full-scale commerce platform built for a premium winterwear brand. Developed with Shopify (Storefront API) and Next.js, en garde delivers a refined, production-ready storefront powered by GraphQL, custom CMS metaobjects, and dynamic data-driven UX. Core features include real-time product visibility and maintenance controls, inventory-based stock alerts, revenue and performance tracking, automated email workflows (Resend & Brevo), and a back-in-stock notification system — allowing users to request alerts on sold-out items and receive instant notifications once inventory is replenished. Designed to balance brand aesthetics with technical precision, it demonstrates scalable Shopify integration, clean API architecture, and modern front-end craft.",
  img: "https://res.cloudinary.com/diwn1spcp/image/upload/w_1200,q_85,f_auto,dpr_auto/v1762422763/Screenshot_94_m7mtmr.png",
  tools: [
    "Next.js",
    "TypeScript",
    "GraphQL",
    "Shopify",
    "TailwindCSS",
    "Framer Motion",
    "Next API Routes",
    "Resend",
    "Brevo",
    "GitHub",
  ],
  live: "https://www.engardeclothing.com",
},
  {
    title: "ShopSphere – Admin Control Dashboard",
    desc: "Full-stack MERN e-commerce admin dashboard with order tracking, user management, real-time performance analytics, and inventory control.",
    img: "https://res.cloudinary.com/diwn1spcp/image/upload/w_1200,q_85,f_auto,dpr_auto/v1755380053/dashboard_eaf9vg.png",
    tools: [
      "React",
      "Node.js",
      "MongoDB",
      "Tailwind",
      "Gsap",
      "Express",
      "OAuth",
    ],
    live: "https://shopsphere-online.netlify.app/dashboard/dashboard-login",
    github:
      "https://github.com/SolomonNnamani/Shopsphere/tree/main/client/src/components/dashboard",
  },
  {
    title: "ShopSphere – Commerce Platform",
    desc: "Full-stack e-commerce platform with product browsing, secure checkout, inventory tracking, and a sleek, mobile-friendly UI.",
    img: "https://res.cloudinary.com/diwn1spcp/image/upload/w_1200,q_85,f_auto,dpr_auto/v1755380063/mainsite_ssgxp7.png",
    tools: ["React", "Javascript", "MongoDB", "Tailwind", "Gsap", "Cloudinary"],
    live: "https://shopsphere-online.netlify.app/",
    github:
      "https://github.com/SolomonNnamani/Shopsphere/tree/main/client/src/components/mainSite",
  },
  {
    title: "Portfolio Website",
    desc: "Modern personal portfolio with smooth animations, GSAP scroll effects, and responsive design.",
    img: "https://res.cloudinary.com/diwn1spcp/image/upload/w_1200,q_85,f_auto,dpr_auto/v1755380187/portfolio3.0_efwkme.png",
    tools: ["React", "GSAP", "Tailwind"],
    live: "https://solomonnnamani.netlify.app/",
    github: "https://github.com/SolomonNnamani/Portfolio3.0",
  },
];

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  useScrollAnimation();

  useEffect(() => {
  if (selected) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [selected]);

  return (
    <section id="projects" className="w-full px-5 md:px-10 lg:px-20 py-20">
      <p className="fade-in text-gray-200 font-bold text-4xl text-center captionFont tracking-wide mb-5">
        Projects
      </p>
      <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto ">
        A selection of projects I’ve built, from full-stack applications to
        sleek front-end designs. Each one taught me something new.
      </p>

      {/* Project Grid */}
      <div className="fade-in grid sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {projects.map((project, i) => (
          <div
            key={i}
            className="group flex flex-col bg-white/5 border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-green-700/20"
          >
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={project.img}
                alt={project.title}
                width={1200}
                height={1200}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            <div className="flex flex-col justify-between flex-1 p-5 lg:p-3 xl:p-5 space-y-3">
              <div>
                <h3 className="text-lg md:text-xl lg:text-lg xl:text-xl font-semibold text-gray-200">
                  {project.title}
                </h3>
                <p className="text-gray-400  text-sm lg:text-xs xl:text-sm line-clamp-3 mt-1">
                  {project.desc}
                </p>
              </div>

              {/* Tools */}
              <div className="flex flex-wrap gap-2 pt-2 items-center">
                {project.tools.slice(0, 5).map((tool, index) => (
                  <span
                    key={index}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300"
                  >
                    {tool}
                  </span>
                ))}
                {project.tools.length > 5 && (
                  <span className="text-gray-400 text-xs">+{project.tools.length - 5}</span>
                )}
              </div>

              {/* Footer */}
              <div className="flex justify-between items-center pt-4">
                <div className="flex gap-4">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-green-500 hover:underline text-sm"
                    >
                      <FiExternalLink /> Live
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-white text-sm"
                    >
                      <FaGithub /> Code
                    </a>
                  )}
                </div>

                <button
                  onClick={() => setSelected(project)}
                  className="text-xs text-green-500 hover:underline"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
      {selected && (
        <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-5"
          onClick={() => setSelected(null)} // ← This handles outside clicks
        >
          <motion.div
  key="modal"
  initial={{ opacity: 0, scale: 0.9, y: 40 }}
  animate={{ opacity: 1, scale: 1, y: 0 }}
  exit={{ opacity: 0, scale: 0.9, y: 20 }}
  transition={{ duration: 0.35, ease: "easeInOut" }}
  className="
    max-w-lg w-full 
    max-h-[90vh] overflow-y-auto 
    bg-[#121212] border border-white/10 
    rounded-lg p-6 text-gray-300 
    shadow-xl relative 
    scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-track-transparent hide-scrollbar
  "
  onClick={(e) => e.stopPropagation()} // prevent close on inner click
>
  <h3 className="text-2xl font-semibold text-white mb-3">
    {selected.title}
  </h3>
  <p className="text-gray-400 mb-4 text-sm lg:text-sm xl:text-sm leading-relaxed">
    {selected.desc}
  </p>
  <div className="flex flex-wrap gap-2 mb-4">
    {selected.tools.map((tool, index) => (
      <span
        key={index}
        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300"
      >
        {tool}
      </span>
    ))}
  </div>
  <div className="flex gap-4 sticky -bottom-6 bg-[#121212]  py-4">
    {selected.live && (
      <a
        href={selected.live}
        target="_blank"
        className="bg-green-700 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm"
      >
        Visit Site
      </a>
    )}
    <button
      onClick={() => setSelected(null)}
      className="text-gray-400 hover:text-white text-sm"
    >
      Close
    </button>
  </div>
</motion.div>

        </motion.div>
      )}
      </AnimatePresence>
      </section>
  );
}