"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const navLinks = [
  { name: "HOME", href: "home" },
  { name: "SERVICES", href: "services" },
  { name: "ABOUT US", href: "about" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = navLinks.map(link => link.href);
      for (const id of sectionIds.reverse()) {
        const element = document.getElementById(id);
        if (element && window.scrollY >= element.offsetTop - 100) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const activeElement = document.getElementById(`nav-${activeSection}`);
    if (activeElement && navRef.current) {
      const { offsetLeft, offsetWidth } = activeElement;
      setIndicatorStyle({
        left: offsetLeft + offsetWidth / 2,
        width: 20,
      });
    }
  }, [activeSection]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 sm:px-12 flex items-center justify-between h-20",
        isScrolled ? "bg-white shadow-md h-16" : "bg-white border-b border-gray-100"
      )}
    >
      <div className="flex items-center">
        <Image src="/assets/nav-logo-cropped.svg" alt="Logo" width={50} height={50} className="object-contain" />
      </div>

      <div ref={navRef} className="relative hidden lg:flex items-center gap-x-12 h-full">
        {navLinks.map((link) => (
          <button
            key={link.name}
            id={`nav-${link.href}`}
            onClick={() => scrollToSection(link.href)}
            className={cn(
              "font-montserrat text-[13px] font-bold transition-colors tracking-widest outline-none",
              activeSection === link.href ? "text-[#2E3350]" : "text-gray-400 hover:text-[#2E3350]"
            )}
          >
            {link.name}
          </button>
        ))}

        <div
          className="absolute -bottom-6 transition-all duration-500 ease-in-out"
          style={{
            left: `${indicatorStyle.left}px`,
            transform: "translateX(-50%)",
          }}
        >
          <div 
            className="w-10 h-5 bg-[#E9A07D] shadow-sm"
            style={{
              clipPath: "polygon(50% 100%, 0 0, 100% 0)",
              filter: "drop-shadow(0 -2px 2px rgba(0,0,0,0.1))"
            }}
          />
        </div>
      </div>

      <div className="flex items-center w-fit gap-x-6 px-7 py-2.5">
        <a href="tel:+447519300050">
          <div
            className="hidden sm:block px-3 py-2 bg-[#2E3350] text-white rounded-full font-montserrat text-[11px] font-bold hover:brightness-125 transition-all tracking-wider cursor-pointer"
          >
            GET A FREE QUOTE
          </div>
        </a>
      </div>

    </nav>
  );
};