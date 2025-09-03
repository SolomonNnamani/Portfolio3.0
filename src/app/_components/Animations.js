'use client'

import { useEffect } from "react";
import { gsap } from "gsap";
import {ScrollTrigger}  from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const initScrollAnimations = () => {
  const fadeElements = document.querySelectorAll(".fade-in");

  fadeElements.forEach((element, i) => {
    gsap.fromTo(
      element,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
       // delay: i * 0.2, // manual stagger
        scrollTrigger: {
           //trigger: fadeElements[0], // ✅ trigger only when the first one is in view
           trigger:element,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  });
};

export function useScrollAnimation(deps=[]) {
  useEffect(() => {
    initScrollAnimations();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  },[...deps]);
};
