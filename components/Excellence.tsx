"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "TRAINED & CERTIFIED PROFESSIONALS",
    description:
      "Our security personnel are carefully selected, fully trained, and certified to handle all types of security situations with professionalism, discipline, and confidence.",
  },
  {
    title: "24/7 RELIABLE PROTECTION",
    description:
      "We provide round-the-clock security services to ensure continuous protection of your people, property, and assets—day and night, without compromise.",
  },
  {
    title: "IN-HOUSE GUARD MONITORING SYSTEM",
    description:
      "Our proprietary guard monitoring system allows real-time tracking, reporting, and supervision—ensuring accountability, transparency, and superior service quality.",
  },
];

export const Excellence = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title Animation
      gsap.fromTo(
        "h2",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Features Stagger Animation
      gsap.fromTo(
        ".feature-item",
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Image Animation
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: 50, clipPath: "inset(0 0 0 100%)" },
        {
          opacity: 1,
          x: 0,
          clipPath: "inset(0 0 0 0%)",
          duration: 1.5,
          ease: "expo.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" className="h-full relative overflow-visible">
      <div className="absolute top-0 left-0 z-0 bg-contain opacity-10 pointer-events-none" style={{ backgroundImage: "url('/assets/top-side.png')" }}></div>
  <div
    ref={sectionRef}
    className="relative z-10 bg-[#F8B178]/5 py-20 w-full max-w-full mx-auto bg-no-repeat bg-cover overflow-visible"
    style={{ 
    //   clipPath: 'polygon(0% 0%, 100% 0%, 100% 90%, 55% 90%, 50% 96%, 45% 90%, 0% 90%)',
    // WebkitClipPath: 'polygon(0% 0%, 100% 0%, 100% 90%, 55% 90%, 50% 96%, 45% 90%, 0% 90%)',
      backgroundImage: "url('/assets/SVG_BG-for-landing-page.svg')",
    }}
  >
    {/* Background Watermark */}
    <div
      className="absolute top-0 left-0 z-0 bg-contain opacity-10 pointer-events-none"
      style={{
        backgroundImage: "url('/assets/SVG_BG-for-landing-page.svg')",
        backgroundSize: "180%",
        backgroundPosition: "0% 0%",
      }}
    />

    <div className="relative z-10 flex flex-col px-8 sm:px-16 lg:px-20 pb-24">
      {/* Section Header: Hierarchy Level 1 */}
      <h2 className="font-agency font-extralight text-3xl sm:text-5xl lg:text-6xl xl:text-7xl text-[#151E33] text-center mb-24 tracking-tight lg:text-nowrap leading-none uppercase">
        Our Commitment to Excellence
      </h2>

      <div className="grid lg:grid-cols-3 gap-10 lg:gap-20 items-stretch">
        {/* Left Side: Text Container */}
        <div className="lg:col-span-2 space-y-12 lg:space-y-16">
          {features.map((feature) => (
            <div key={feature.title} className="feature-item opacity-0">
              {/* Feature Title: Hierarchy Level 2 (Scaled down for readability) */}
              <h3 className="font-agency text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-[#151E33] mb-3 leading-tight uppercase tracking-tight font-bold">
                {feature.title}
              </h3>
              {/* Description: Hierarchy Level 3 */}
              <p className="font-montserrat text-[#151E33]/80 text-base lg:text-lg xl:text-xl font-medium leading-relaxed max-w-2xl">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Right Side: Image Container (Stretches to match text height) */}
        <div className="lg:col-span-1 hidden lg:block">
          <div 
            ref={imageRef} 
            className="relative w-full h-full border-[12px] border-white shadow-2xl opacity-0"
          >
            <Image
              src="/assets/excellence.jpg"
              alt="Security Guard"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Mobile Image: Balanced Aspect Ratio */}
        <div className="lg:hidden relative w-full aspect-[4/5] border-[8px] mb-10 border-white shadow-lg">
          <Image
            src="/assets/excellence.jpg"
            alt="Security Guard"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</section>
  );
};