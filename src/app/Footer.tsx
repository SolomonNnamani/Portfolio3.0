'use client';

import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { ReactElement } from "react";

interface SocialLink {
  icons: ReactElement;
  href: string;
}

const links: SocialLink[] = [
  { icons: <FaGithub />, href: "https://github.com/SolomonNnamani" },
  {
    icons: <FaXTwitter />,
    href: "https://x.com/therealnnamani?t=bh8h0RKFWiVjsli5T_K_dA&s=09",
  },
  {
    icons: <FaLinkedinIn />,
    href: "https://www.linkedin.com/in/solomon-nnamani-b5ab8a350/",
  },
  { icons: <FaWhatsapp />, href: "https://wa.me/message/3C62HY2QE2F2N1" },
];

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 pt-10 pb-6 bg-[#0d0c19]">
      <div className="max-w-6xl mx-auto px-5 md:px-10 lg:px-20 text-center space-y-6">
        <h2 className="text-2xl font-semibold text-gray-200">Solomon Nnamani</h2>
        <p className="text-gray-400 max-w-md mx-auto">
          Building full-stack solutions with passion, curiosity and late-night coffee.
        </p>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-6 md:gap-8">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-400  text-2xl hover:text-green-500 hover:scale-110 transition justify-center duration-300"
            >
              {link.icons}
            </a>
          ))}
        </div>

        <p className="text-gray-500 text-sm pt-3">
          © {new Date().getFullYear()} Solomon Nnamani • All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
