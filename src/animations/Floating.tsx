"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

interface FloatingProps {
  children: React.ReactNode;
  direction?: "up" | "down"; // الاتجاه
  distance?: number; // المسافة الافتراضية 30px
  duration?: number; // مدة الحركة الافتراضية 0.8s
}

export default function Floating({
  children,
  direction = "down",
  distance = 20,
  duration = 1,
}: FloatingProps) {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (elRef.current) {
      gsap.to(elRef.current, {
        y: direction === "down" ? distance : -distance,
        duration: duration,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut",
      });
    }
  }, [direction, distance, duration]);

  return <div ref={elRef}>{children}</div>;
}