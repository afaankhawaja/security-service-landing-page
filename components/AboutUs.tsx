"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export const AboutUs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section id="about"
      ref={sectionRef} 
      className="relative border-t-navy-dark border-t-4  bg-white  py-24 lg:py-32 px-6 overflow-visible"
    >

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-t-[50px] border-t-navy-dark z-20"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        <div className="relative order-2 lg:order-1">
          <div className="relative z-10 border-[10px] border-[#fdfbf9] shadow-2xl">
            <Image 
              src="/assets/about-us.jpg" 
              alt="About Our Security" 
              width={600} 
              height={400} 
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-geometric-pattern opacity-20 -z-10"></div>
        </div>

        <div ref={textRef} className="order-1 lg:order-2 space-y-8">
          <div className="space-y-2">
            <h4 className="font-agency text-[#E9A07D] text-xl tracking-[0.3em] uppercase">
              Who We Are
            </h4>
            <h2 className="font-agency text-5xl md:text-6xl text-[#2E3350] leading-none uppercase">
              Securing Your Future <br /> Since 2010
            </h2>
          </div>

          <div className="space-y-6 font-montserrat text-[#2E3350]/80 text-lg leading-relaxed">
            <p>
              We are a premier security provider dedicated to delivering high-end protection 
              solutions for corporate, residential, and industrial clients. Our mission 
              is built on the pillars of **Professionalism**, **Integrity**, and **Vigilance**.
            </p>
            <p>
              By combining state-of-the-art technology with elite personnel, we ensure 
              that your safety is never compromised. Our team is available 24/7 to provide 
              the peace of mind you deserve.
            </p>
          </div>

          <div className="pt-4">
            <button className="bg-[#2E3350] text-white font-agency text-xl px-10 py-3 tracking-widest hover:bg-[#E9A07D] transition-colors uppercase">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-[50px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-t-[50px] border-t-white z-20"></div>
    </section>
  );
};