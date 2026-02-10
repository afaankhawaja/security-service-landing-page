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
        <section
            id="home"
            ref={heroRef}
            className="relative h-screen min-h-[700px] w-full flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-cover bg-center"
            style={{
                backgroundImage: 'linear-gradient(rgba(10, 11, 16, 0.4), rgba(10, 11, 16, 0.4)), url("/assets/hero-bg.jpg")',
            }}
        >
            <div ref={logoRef} className="mb-10 w-fit h-fit absolute left-10 top-72">
                <Image src="/assets/white-logo-cropped.svg" alt="Logo" width={200} height={250} className="object-cover " />
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-navy-dark/50 to-transparent pointer-events-none"></div>
        </section>
    );
};
