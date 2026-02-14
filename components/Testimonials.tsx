"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import { div } from "framer-motion/client";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "JANE ANDERSON",
    role: "SECURITY COMPANY OWNER",
    text: '"OUTSTANDING SECURITY SERVICES WITH A HIGHLY PROFESSIONAL TEAM. THE IN-HOUSE GUARD MONITORING SYSTEM ADDS AN EXTRA LAYER OF CONFIDENCE AND ACCOUNTABILITY."',
  },
  {
    name: "JAMES WHITAKER",
    role: "CONSTRUCTION COMPANY MANAGER",
    text: '"WE\'VE BEEN USING THEIR SECURITY SERVICES FOR OVER A YEAR NOW, AND THE RELIABILITY IS OUTSTANDING. THE TEAM IS WELL-TRAINED, RESPONSIVE, AND EXTREMELY DISCIPLINED."',
  },
];

export const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title Animation
      gsap.fromTo(
        "h2",
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Cards Animation
      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          {
            opacity: 0,
            y: 60
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power4.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className=" bg-cover bg-[#F8B178]/15 relative z-50  bg-no-repeat overflow-visible" style={{
     backgroundImage: "url('/assets/SVG_BG-for landing-page-2.svg')",
    }}>
      
    <section
      id="testimonials"
      ref={sectionRef}
      style={{
      /* This polygon creates a flat top and an arrow at the bottom.
         The -mt-20 (or similar) might be needed on the section 
         to pull it up under the previous arrow if there is a gap.
      */
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 90%, 55% 90%, 50% 96%, 45% 90%, 0% 90%)',
    WebkitClipPath: 'polygon(0% 0%, 100% 0%, 100% 90%, 55% 90%, 50% 100%, 45% 90%, 0% 90%)',
     backgroundImage: "url('/assets/SVG_BG-for landing-page-2.svg')",
    }}
      className=" z-60  pb-24 lg:py-32 px-6 relative bg-no-repeat bg-cover bg-center overflow-visbile"
    >
      {/* <Image src="/assets/testmonial-bg-0.svg" alt="Logo" width={0} height={0} priority className="w-full h-full absolute inset-0 object-cover mt-10 z-10" /> */}
      {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-t-[50px] border-t-dark-blue z-10" /> */}

      <div className="max-w-7xl mx-auto">
        <h2 className="font-agency px-30 text-5xl md:text-7xl text-white mb-20 tracking-tight uppercase">
          Customer Testimonials
        </h2>

        <div className="relative flex items-center justify-center gap-4 lg:gap-16">
          <button className="hidden lg:block text-white/50 hover:text-white hover:scale-110 transition-all duration-300">
            <ChevronLeft size={60} strokeWidth={1} />
          </button>

          <div
            ref={cardsRef}
            className="grid md:grid-cols-2 gap-8 lg:gap-12 w-full max-w-6xl"
          >
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="group bg-white p-10 md:p-14 shadow-2xl relative flex flex-col justify-between min-h-[400px] transition-transform duration-500 hover:-translate-y-2"
              >
                <div>
                  <h3 className="font-agency text-3xl text-[#151E33] leading-none mb-1 uppercase">
                    {t.name}
                  </h3>
                  <p className="font-agency text-3xl text-[#151E33] leading-none mb-1 uppercase">
                    {t.role}
                  </p>
                  <p className="font-montserrat text-[14px] md:text-[15px] font-bold text-[#2E3350] leading-relaxed italic opacity-90">
                    {t.text}
                  </p>
                </div>

                <div className="mt-10 flex justify-between items-end">
                  <div className="flex gap-1.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} fill="#E9A07D" color="#E9A07D" />
                    ))}
                  </div>

                  <div className="w-10 h-10 grayscale group-hover:grayscale-0 transition-all duration-500 opacity-30 group-hover:opacity-100">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z" fill="#EA4335" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="hidden lg:block text-white/50 hover:text-white hover:scale-110 transition-all duration-300">
            <ChevronRight size={60} strokeWidth={1} />
          </button>
        </div>
      </div>
    </section>
    </div>
  );
};