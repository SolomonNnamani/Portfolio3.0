"use client";

import { useState, useEffect, useRef } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { TbHexagonLetterSFilled } from "react-icons/tb";
import gsap from "gsap";

export default function Sidebar() {
  const [toggleBtn, setToggleBtn] = useState<boolean>(false);
  const mobileRef = useRef<HTMLDivElement | null>(null);

  const navItems: { label: string; href: string }[] = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  //Lock scroll when menu open
  useEffect(() => {
    document.body.style.overflow = toggleBtn ? "hidden" : "";
  }, [toggleBtn]);

  // Set initial position once
  useEffect(() => {
    if (mobileRef.current)
      gsap.set(mobileRef.current, { y: "-100%", opacity: 0 });
  }, []);

  useEffect(() => {
    const mobileContent = mobileRef.current;
    if (!mobileContent) return;

    if (toggleBtn) {
      gsap.set(mobileContent, { display: "block" }); // make visible
      gsap.to(mobileContent, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
      });
    } else {
      gsap.to(mobileContent, {
        y: "-100%",
        opacity: 0,
        duration: 0.5,
        ease: "power3.in",
        onComplete: () => {
          gsap.set(mobileContent, { display: "none" });
        },
      });
    }
  }, [toggleBtn]);

  const handleClick = () => {
    setToggleBtn(false);
  };

  return (
    <div>
      {/*for mobile*/}
      <div className="relative md:hidden">
        {/*-----Visible bar-----*/}
        <div className="flex items-center fixed z-10 justify-between px-5 py-3 bg-black/30 backdrop-blur-sm border-b border-white/10 w-full shadow-sm">
          <div>
            <TbHexagonLetterSFilled size={35} className="text-green-700" />
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="bg-green-700 text-white text-sm px-4 py-2 rounded-lg hover:bg-green-600"
            >
              Schedule a Meeting
            </a>

            <button
              onClick={() => setToggleBtn((prev) => !prev)}
              className="outline-none cursor-pointer text-gray-300 hover:text-green-600 transition"
            >
              <RiMenu3Fill size={25} />
            </button>
          </div>
        </div>

        {/*----mobile content------*/}
        <div
          ref={mobileRef}
          className="bg-[rgba(13,12,25)] text-gray-300 fixed h-dvh w-full z-10 top-0 left-0 "
          style={{ display: "none" }}
        >
          <div className=" flex justify-between p-5 ">
            <div>
              <div>
                <TbHexagonLetterSFilled size={35} className="text-green-700" />
              </div>
            </div>

            <button
              onClick={() => setToggleBtn((prev) => !prev)}
              className="outline-none cursor-pointer "
            >
              <IoClose size={25} />
            </button>
          </div>

          <div>
            {navItems.map((nav) => (
              <div key={nav.label}>
                <a
                  href={nav.href}
                  className="flex items-center px-5 h-15 mb-2 hover:text-green-700 hover:text-xl hover:pl-7
									  transition-all duration-300 ease-in-out"
                  onClick={handleClick}
                >
                  {nav.label}{" "}
                </a>
              </div>
            ))}
          </div>

          <div className="absolute bottom-5 w-full">
            <a
              href="#contact"
              className="block m-5   bg-green-700 text-white  font-medium rounded-md text-center py-3
								active:scale-95 transition-transform duration-100"
              onClick={handleClick}
            >
              Let&apos;s Work
            </a>
          </div>
        </div>
      </div>
      {/*end of mobile*/}

      {/* Desktop Navbar */}
      <div className="hidden md:block">
        <div className="flex fixed z-10 justify-between px-8 lg:px-20 py-3 bg-black/30 backdrop-blur-md border-b border-white/10 w-full items-center shadow-sm">
          {/* Logo */}
          <TbHexagonLetterSFilled size={35} className="text-green-700" />

          {/* Nav links */}
          <div className="flex items-center">
            {navItems.map((nav) => (
              <a
                key={nav.label}
                href={nav.href}
                className="px-5 text-gray-200 hover:text-green-500 transition duration-300 hover:underline underline-offset-4"
              >
                {nav.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
