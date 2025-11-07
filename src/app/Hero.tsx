'use client';

import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { useScrollAnimation } from "./_components/Animations";
import { ReactElement } from "react";

interface SocialLink {
  icons: ReactElement;
  href: string;
}

export default function Hero(){
  useScrollAnimation();

  const links: SocialLink[] = [
    { icons: <FaGithub />, href: "https://github.com/SolomonNnamani" },
    { icons: <FaXTwitter />, href: "https://x.com/therealnnamani?t=bh8h0RKFWiVjsli5T_K_dA&s=09" },
    { icons: <FaLinkedinIn />, href: "https://www.linkedin.com/in/solomon-nnamani-b5ab8a350/" },
    { icons: <FaWhatsapp />, href: "https://wa.me/message/3C62HY2QE2F2N1" },
  ];

  return (
    <section
      id="home"
      className="pt-15 px-5 md:px-10 lg:px-20 text-gray-200 h-screen  w-full flex items-center justify-center"
    >
      <div className="flex justify-center">
        {/* Text Section */}
        <div className="fade-in space-y-3 text-center">
          <p className="flex flex-col w-full leading-tight">
            <span className="text-xl lg:text-2xl font-semibold text-green-700">Hello! I&apos;m</span>{" "}
            <span className="font-bold text-[clamp(2rem,5vw+1rem,4.5rem)] captionFont">
              Solomon Nnamani
            </span>
          </p>

          <p className="text-xl md:text-2xl font-bold text-green-700">
            Full Stack Developer
          </p>

          <p className="md:text-xl  xl:text-2xl md:px-15 lg:px-50">
            I build seamless digital experiences using modern technologies, from
            pixel-perfect interfaces to powerful, reliable backend systems.
          </p>

          {/* CTA + Socials */}
          <div className="flex flex-col mt-10 gap-10">
            <div className="flex gap-4 justify-center">
              <a
                href="#contact"
                className="bg-green-700 text-white px-3 md:px-6 py-3 rounded-lg font-medium md:text-lg hover:bg-green-800 hover:scale-105 transform transition duration-300"
              >
                Connect With Me
              </a>

              <a
                href="#projects"
                className="bg-transparent border border-green-700 text-white px-3 md:px-6 py-3 hover:bg-green-700/10 rounded-lg font-medium md:text-lg shadow-md hover:scale-105 transform transition duration-300"
              >
                View My Work
              </a>
            </div>

            <div className="flex items-center justify-center gap-6 md:gap-8 lg:gap-10">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-2xl xl:text-3xl hover:text-green-500 hover:scale-110 transition  justify-center duration-300"
                >
                  {link.icons}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
