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
    if (!sectionRef.current) return;

    gsap.fromTo(
      contentRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );

    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section id="services" className=" px-2 sm:px-10">

      <div
        ref={sectionRef}
        className="relative bg-[#fdfbf9] w-full max-w-[1400px] mx-auto shadow-2xl overflow-visible"
      >

        <div style={{ backgroundImage: "url('/assets/white-logo-cropped.svg')" }} className="absolute top-0 left-0 w-full h-[50px] overflow-hidden pointer-events-none">
          <svg className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-[50px] " viewBox="0 0 100 50">
            <polygon points="0,0 100,0 50,50" />
          </svg>
        </div>

        <div className="absolute -bottom-[50px] left-0 w-full h-[50px] overflow-hidden pointer-events-none">
          <svg className="absolute top-0 left-1/2 -translate-x-1/2 w-[100px] h-[50px] fill-[#fdfbf9]" viewBox="0 0 100 50">
            <polygon points="0,0 100,0 50,50" />
          </svg>
        </div>

        <div className="flex flex-col px-8 sm:px-16 lg:px-20 pt-32 pb-24">
          
          <h2 className="font-agency text-4xl sm:text-6xl text-[#2E3350] text-center mb-20 tracking-tight leading-none uppercase">
            Our Commitment to Excellence
          </h2>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            
            {/* Left Side: Text */}
            <div className="space-y-12">
              {features.map((feature) => (
                <div key={feature.title}>
                  <h3 className="font-agency text-3xl lg:text-4xl text-[#2E3350] mb-3 leading-tight uppercase">
                    {feature.title}
                  </h3>
                  <p className="font-montserrat text-[#2E3350]/80 text-base lg:text-lg font-medium leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="relative w-full aspect-square lg:aspect-auto lg:h-[600px] border-[12px] border-white shadow-xl">
              <Image 
                src="/assets/excellence.jpg" 
                alt="Security Guard" 
                fill
                className="object-cover"
                priority
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};