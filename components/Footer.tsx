"use client";

import Image from "next/image";
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative bg-navy-dark pt-20 pb-12 px-6 overflow-visible">
      <div className="absolute inset-0 bg-geometric-pattern opacity-50 pointer-events-none"></div>

      <div className="absolute top-0 left-0 w-full h-[2px] bg-white"></div>
      <div className="absolute top-0 left-1/2 bg-transparent -translate-x-1/2 w-0 h-0 border-l-[40px] border-l-transparent border-r-[40px] border-r-transparent border-t-[40px] border-t-white z-10"></div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-center text-center lg:text-left">
        
        <div className="flex flex-col items-center lg:items-start space-y-4">
          <div className="relative w-48 h-48">
            <Image 
              src="/assets/white-logo-cropped.svg" 
              alt="Secure Services Logo" 
              fill 
              className="object-contain"
            />
          </div>
        </div>

        <div className="flex flex-col items-center space-y-6">
          <div className="text-center">
            <h3 className="font-agency text-3xl text-white mb-3 tracking-widest uppercase">
              Address
            </h3>
            <p className="font-agency text-lg text-white/90 leading-tight uppercase max-w-[250px]">
              Suite F14, Epic House, Darnal Road, Sheffield, UK.
            </p>
          </div>

          <div className="relative flex items-center justify-center w-full">
            <div className="absolute w-full h-[1px] bg-white/20"></div>
            <span className="relative bg-navy-dark px-3 font-agency text-gold text-sm border border-gold rounded-full italic py-1">
              OR
            </span>
          </div>

          <div className="text-center">
            <p className="font-agency text-2xl text-white tracking-widest uppercase">
              Call Us: +44 7519 300050
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center lg:items-end space-y-8">
          <button className="bg-white text-navy-dark font-agency text-lg px-8 py-2 rounded-full tracking-widest hover:bg-[#E9A07D] hover:text-white transition-all duration-300 uppercase">
           <a href="tel:+447519300050">Get In Touch</a>
          </button>

          <div className="flex gap-4">
            {[
              { Icon: Facebook, link: "https://www.facebook.com/" },
              { Icon: Instagram, link: "https://www.instagram.com/ss_secureservices?igsh=MTh4ZDAxZ2ZsN2twaw%3D%3D" },
              { Icon: Linkedin, link: "https://www.linkedin.com/" },
              { Icon: Mail, link: "mailto:nas@secureservicesltd.co.uk" },
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.link} 
                target="_blank"
                className="w-10 h-10 rounded-full border border-white flex items-center justify-center text-white hover:bg-white hover:text-navy-dark transition-all"
              >
                <social.Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="relative mt-20 pt-8 border-t border-white/10 text-center">
        <p className="font-montserrat text-[10px] text-white/40 tracking-widest uppercase">
          © 2026 Secure Services Ltd. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};