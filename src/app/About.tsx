"use client";

import Image from "next/image";
import { useScrollAnimation } from "./_components/Animations";
import { FiCode, FiServer, FiTrendingUp, FiMail } from "react-icons/fi";
import { FaReact } from "react-icons/fa";
import {
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiJavascript,
  SiTailwindcss,
  SiGo,
  SiPostgresql,
  SiRedis,
} from "react-icons/si";
import { ReactElement } from "react";

interface TechPill {
  icon: ReactElement;
  label: string;
}

export default function About() {
  useScrollAnimation();

  const pill: TechPill[] = [
    { icon: <FaReact className="text-blue-400" />, label: "React" },
    { icon: <SiJavascript className="text-yellow-500" />, label: "JavaScript" },
    { icon: <SiMongodb className="text-green-700" />, label: "MongoDB" },
    { icon: <SiNodedotjs className="text-green-700" />, label: "Node.js" },
    { icon: <SiPostgresql className="text-blue-400"/>, label: "Postgre" },
    { icon: <SiGo className="text-blue-400" />, label: "GO" },
    { icon: <SiRedis className="text-red-500" />, label: "Redis" },
  ];

  return (
    <section
      id="about"
      className="w-full px-5 md:px-10 lg:px-20 md:py-20 pb-20"
    >
      <p className="fade-in text-gray-200 font-bold text-4xl text-center captionFont tracking-wide mb-5 lg:mb-15">
        About Me
      </p>

      <div>
        <div className="fade-in flex flex-col  gap-5 lg:flex-row lg:gap-10">
          {/* Text Section */}
          <div className="text-gray-100 text-center space-y-5 lg:w-1/2">
            <p className="text-sm sm:text-base lg:text-sm xl:text-xl leading-relaxed ">
              I'm Solomon, a self-taught full stack developer building real
              products for real brands. I've gone from figuring out my first bug
              alone at midnight to shipping full scale Shopify storefronts,
              admin dashboards and editorial commerce platforms for clients.
              <br />
              <br />
              Everything I know came from building, breaking things and figuring
              it out anyway. That process gave me something a classroom
              couldn't. The ability to deliver under pressure, adapt fast and
              care about the details that actually matter to a business.
              <br />
              <br />I don't just write code. I build things that work, look
              intentional and make clients come back.
            </p>

            {/* Tech pills */}
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {pill.map((a, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-gray-200"
                >
                  {a.icon}
                  {a.label}
                </div>
              ))}
            </div>

            {/* CTA row (Desktop) */}
            <div className="lg:flex flex-row justify-center gap-3 hidden">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg bg-green-700 px-5 py-3 font-medium text-white shadow-md transition hover:scale-[1.02] hover:bg-green-600"
              >
                <FiMail className="mr-2" /> Say Hello
              </a>
              <a
                href="/solomon_resume.pdf"
                download
                className="inline-flex items-center justify-center rounded-lg border border-green-700/60 bg-transparent px-5 py-3 font-medium text-gray-100 transition hover:bg-green-700/10"
              >
                View Resume
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="w-full lg:w-[35rem] xl:w-[40rem] lg:h-[25rem] xl:h-[30rem] mx-auto overflow-hidden">
            <Image
              src="https://res.cloudinary.com/diwn1spcp/image/upload/w_1200,q_85,f_auto,dpr_auto/v1755380253/profile_kdnldz.jpg"
              alt="Profile Picture"
              width={1200}
              height={1200}
              className="w-full h-full object-cover rounded-lg"
              priority
              unoptimized
            />
          </div>

          {/* CTA row (Mobile) */}
          <div className="flex flex-row justify-center gap-3 lg:hidden">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-green-700 px-5 py-3 font-medium text-white shadow-md transition hover:scale-[1.02] hover:bg-green-600"
            >
              <FiMail className="mr-2" /> Say Hello
            </a>
            <a
              href="/solomon_resume.pdf"
              download
              className="inline-flex items-center justify-center rounded-lg border border-green-700/60 bg-transparent px-5 py-3 font-medium text-gray-100 transition hover:bg-green-700/10"
            >
              View Resume
            </a>
          </div>
        </div>

        {/* What I Do section */}
        <div className="col-span-2 fade-in">
          <div className="mt-8 grid md:grid-cols-3 gap-4 text-left">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 transform transition duration-300 hover:scale-[1.03] hover:-translate-y-[3px] hover:shadow-lg hover:shadow-green-700/20">
              <FiCode className="text-xl mb-2 text-green-700" />
              <h3 className="font-semibold text-gray-300">Frontend</h3>
              <p className="text-sm text-gray-300 mt-1">
                Accessible, responsive UIs with clean components and smooth
                interactions.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-4 transform transition duration-300 hover:scale-[1.03] hover:-translate-y-[3px] hover:shadow-lg hover:shadow-green-700/20">
              <FiServer className="text-xl mb-2 text-green-700" />
              <h3 className="font-semibold text-gray-300">Backend</h3>
              <p className="text-sm text-gray-300 mt-1">
                REST APIs, auth, DB design, caching, and production-ready
                deployments.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-4 transform transition duration-300 hover:scale-[1.03] hover:-translate-y-[3px] hover:shadow-lg hover:shadow-green-700/20">
              <FiTrendingUp className="text-xl mb-2 text-green-700" />
              <h3 className="font-semibold text-gray-300">Performance</h3>
              <p className="text-sm text-gray-300 mt-1">
                Ship fast. Measure. Optimize. Keep it stable under real traffic.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
