"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
    const heroRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!heroRef.current) return;

        const tl = gsap.timeline();

        tl.fromTo(
            logoRef.current,
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 1, ease: "power3.out" }
        ).fromTo(
            titleRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
            "-=0.5"
        );

        gsap.to(heroRef.current, {
            backgroundPosition: "50% 100%",
            ease: "none",
            scrollTrigger: {
                trigger: heroRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
            },
        });
    }, []);

    return (
        // <section
        //     id="home"
        //     ref={heroRef}
        //     className="relative h-screen min-h-[700px] w-full flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-cover bg-center"
        //     style={{
        //         backgroundImage: 'linear-gradient(rgba(10, 11, 16, 0.4), rgba(10, 11, 16, 0.4)), url("/assets/hero-bg.jpg")',
        //     }}
        // >
        //     <div ref={logoRef} className="mb-10 w-full h-full absolute left-10 top-[50%]">
        //         <Image src="/assets/white-logo-cropped.svg" alt="Logo" width={0} height={0} className="object-cover w-[500px] h-[40vh] " />
        //     </div>
        //     <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-navy-dark/50 to-transparent pointer-events-none"></div>
        // </section>
        <div className=" w-full bg-cover  bg-center  bg-[#F8B178]/5" style={{
          backgroundImage: "url('/assets/new/bg-2-cropped.svg')",
        }}>
        <section
  id="home"
  ref={heroRef}
  className="relative h-screen min-h-[700px] w-full flex flex-col items-center justify-center text-center px-5 overflow-visible bg-cover bg-center"
  style={{
    backgroundImage: 'linear-gradient(rgba(10, 11, 16, 0.4), rgba(10, 11, 16, 0.4)), url("/assets/hero-bg.jpg")',
    // Flat top edge, arrow at the bottom
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 90%, 55% 90%, 50% 100%, 45% 90%, 0% 90%)',
    WebkitClipPath: 'polygon(0% 0%, 100% 0%, 100% 90%, 53.5% 90%, 50% 95.5%, 46% 90%, 0% 90%)'
  }}
>
  {/* LOGO CONTAINER */}
  <div 
    ref={logoRef} 
    className="absolute left-0 top-1/2 -translate-y-1/2 z-20"
  >
    <Image 
      src="/assets/white-logo-cropped.svg" 
      alt="Logo" 
      width={500} 
      height={250} 
      priority
      className="lg:w-[500px] w-[240px] lg:h-[50vh] h-[40vh] object-contain" 
    />
  </div>
</section>
</div>
    );
};
