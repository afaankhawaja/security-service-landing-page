"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export const TrustExperience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    // 1. Counter Animation Logic
    const target = { val: 0 };
    gsap.to(target, {
      val: 15,
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
      },
      onUpdate: () => {
        setCount(Math.ceil(target.val));
      },
    });

    // 2. Image Reveal Animation
    gsap.fromTo(
      ".trust-image",
      { clipPath: "inset(0 100% 0 0)" },
      {
        clipPath: "inset(0 0% 0 0)",
        duration: 1.5,
        ease: "expo.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        },
      }
    );
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-[600px] flex items-center py-24 overflow-hidden"
    >
      {/* BACKGROUND IMAGE WITH OVERLAY */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/security-guard-workspace.jpg" // Use a high-quality dark security-related image
          alt="Security Operations"
          fill
          className="object-cover brightness-[0.2]"
          priority
        />
        {/* Geometric pattern overlay to match brand */}
        <div className="absolute inset-0 bg-geometric-pattern opacity-20"></div>
      </div>

      {/* TOP NOTCH (White to Dark Transition) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-t-[50px] border-t-[#e8e3df] z-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT SIDE: TEXT & COUNTER */}
          <div className="space-y-6 text-center lg:text-left">
            <h4 className="font-agency text-gold text-2xl tracking-[0.4em] uppercase">
              Our Legacy
            </h4>
            <div className="flex flex-col">
              <span className="font-agency text-[120px] md:text-[180px] text-white leading-none font-bold">
                {count}+
              </span>
              <h2 className="font-agency text-4xl md:text-6xl text-white tracking-tight uppercase leading-tight">
                Years of Proven <br /> Experience
              </h2>
            </div>
            <p className="font-montserrat text-white/70 text-lg max-w-md mx-auto lg:mx-0">
              Since our inception, we have provided unwavering protection and peace of mind 
              to thousands of clients across the UK.
            </p>
          </div>

          {/* RIGHT SIDE: ANIMATED IMAGE BLOCK */}
          <div className="trust-image relative aspect-video lg:aspect-square w-[90%] border-[12px] border-white/10 shadow-2xl overflow-hidden">
            <Image
              src="/assets/security-guard-workspace-2.jpg" 
              alt="Security Control Room"
              fill
              className="object-cover"
            />
            {/* Inner frame styling to match Excellence image */}
            <div className="absolute inset-0 border-[1px] border-white/20 m-4"></div>
          </div>

        </div>
      </div>

      {/* BOTTOM NOTCH (Dark to Next Section Transition) */}
      <div className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-t-[50px] border-t-[#0a0b10] z-10"></div>
    </section>
  );
};