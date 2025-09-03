'use client'

import Image from "next/image"
import { useScrollAnimation } from "./_components/Animations";
import { FiCode, FiServer, FiTrendingUp, FiMail } from "react-icons/fi";
import { FaReact } from "react-icons/fa";
import { SiNodedotjs, SiExpress, SiMongodb, SiJavascript, SiTailwindcss } from "react-icons/si";



export default function About(){
	useScrollAnimation()
	const pill = [
		{icon:<FaReact className="text-blue-400"/>, label:"React"},
		{icon:<SiJavascript className="text-yellow-500"/>, label:"JavaScript"},
		{icon:<SiTailwindcss className="text-blue-400"/>, label:"Tailwind"},
		{icon:<SiNodedotjs  className="text-green-700"/>, label:"Node.js"},
		{icon:<SiExpress/>, label:"Express"},
		{icon:<SiMongodb className="text-green-700"/>, label:"MongoDB"},

	]
  return (
    <section id="about" className="w-full  px-5 md:px-10 lg:px-20 py-20">
    	<p className="fade-in text-gray-200 font-bold  text-4xl text-center captionFont tracking-wide mb-5 lg:mb-15">About Me</p>
      <div className=" ">
      	<div className="fade-in flex flex-col gap-5 lg:flex-row  lg:gap-10 ">
        {/* Text */}
        <div className=" text-gray-100 text-center space-y-5 lg:w-1/2">
         <p className="md:text-lg lg:text-xl leading-relaxed selectedFon">
            I’m Solomon, a self-taught developer who’s been shaping my skills from the ground up.
            Everything I know, from crafting beautiful interfaces to building robust backend systems
            , I learned through relentless research, practice, and a lot of late-night debugging.
         
            What started as a challenge of learning everything alone, solving my own bugs, and figuring 
            things out without a guide became my greatest strength. It taught me independence, 
            problem-solving, and how to deliver my best work no matter the circumstances.
         
            Like Naruto, I don’t give up on whatever I set my mind to do. My journey is driven by 
            determination, discipline, and a hunger to keep evolving.
          </p>

          {/* quick stats / highlights */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {pill.map((a, index)=> (
            	<div key={index} className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-gray-200" >
            		{a.icon}{a.label} 
            	</div>
            ))}
          </div>

          {/* CTA row */}
          <div className=" lg:flex flex-row justify-center gap-3 hidden">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-green-700 px-5 py-3 font-medium text-white shadow-md transition hover:scale-[1.02] hover:bg-green-600"
            >
              <FiMail className="mr-2"/> Say Hello
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
  

{/*image div*/}
      
      
      	<div className="max-w-[40rem]   mx-auto">
      		<Image
  src="https://res.cloudinary.com/diwn1spcp/image/upload/w_1200,q_85,f_auto,dpr_auto/v1755380253/profile_kdnldz.jpg"
  alt="Profile Picture"
  width={1200} 
  height={1200}
  className="w-full h-full object-cover rounded-lg"
/>
      	</div>
      

      	          {/* CTA row */}
          <div className=" flex flex-row justify-center gap-3 lg:hidden">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-green-700 px-5 py-3 font-medium text-white shadow-md transition hover:scale-[1.02] hover:bg-green-600"
            >
              <FiMail className="mr-2"/> Say Hello
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

<div className="col-span-2 fade-in">
          {/* What I do */}
          <div className="mt-8 grid md:grid-cols-3  gap-4 text-left">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 transform transition duration-300 hover:scale-[1.03] hover:-translate-y-[3px] hover:shadow-lg hover:shadow-green-700/20">
              <FiCode className="text-xl mb-2 text-green-700"/>
              <h3 className="font-semibold text-gray-300">Frontend</h3>
              <p className="text-sm text-gray-300 mt-1">Accessible, responsive UIs with clean components and smooth interactions.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 transform transition duration-300 hover:scale-[1.03] hover:-translate-y-[3px] hover:shadow-lg hover:shadow-green-700/20">
              <FiServer className="text-xl mb-2 text-green-700"/>
              <h3 className="font-semibold text-gray-300">Backend</h3>
              <p className="text-sm text-gray-300 mt-1">REST APIs, auth, DB design, caching, and production‑ready deployments.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 transform transition duration-300 hover:scale-[1.03] hover:-translate-y-[3px] hover:shadow-lg hover:shadow-green-700/20">
              <FiTrendingUp className="text-xl mb-2 text-green-700"/>
              <h3 className="font-semibold text-gray-300">Performance</h3>
              <p className="text-sm text-gray-300 mt-1">Ship fast. Measure. Optimize. Keep it stable under real traffic.</p>
            </div>
          </div>
        </div>
    


      </div>
    </section>
  );
};

