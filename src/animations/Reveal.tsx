"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useReveal(selector = ".reveal") {
  useEffect(() => {
    gsap.utils.toArray(selector).forEach(el => {
      const element = el as HTMLElement;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      // opacity
      tl.fromTo(
        element,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.8,
          ease: "linear",
        }
      );

      // الحركة الناعمة
      tl.fromTo(
        element,
        { y: 120, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "cubic-bezier(0.22, 1, 0.3, 1)",
          immediateRender: false, // مهم
        },
        0
      );
    });
  }, [selector]);
}
