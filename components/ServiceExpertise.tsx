"use client";

import { ShieldCheck, MapPin, Users, Dog, Construction, ShoppingBag } from "lucide-react";

const expertiseAreas = [
  { title: "Manned Guarding", icon: Users },
  { title: "Event Security", icon: ShieldCheck },
  { title: "K9 Dog Handling", icon: Dog },
  { title: "Construction Sites", icon: Construction },
  { title: "Retail & Commercial", icon: ShoppingBag },
];

export const ServiceExpertise = () => {
  return (
    <section className="bg-[#e8e3df] py-24 px-6 relative overflow-hidden">
      {/* Visual link to the dark section below */}
      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-t-[50px] border-t-[#e8e3df] z-10"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: TEXT CONTENT FROM IMAGE */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-agency text-5xl md:text-6xl text-[#2E3350] leading-tight uppercase">
                Professional Security <br /> Covering the UK
              </h2>
              <div className="flex items-center gap-2 text-[#E9A07D] font-agency text-xl tracking-widest uppercase">
                <MapPin size={20} />
                Based in Sheffield
              </div>
            </div>

            <p className="font-montserrat text-[#2E3350]/80 text-lg leading-relaxed">
              Secure Services is a leading security company in Sheffield providing 
              professional and reliable security services across South Yorkshire and the UK. 
              Our experienced **SIA-licensed security officers** provide 24/7 operational 
              support tailored to your needs.
            </p>

            <div className="bg-[#2E3350] text-white p-6 inline-block">
              <p className="font-agency text-2xl tracking-widest uppercase">
                Trusted Protection Solutions
              </p>
            </div>
          </div>

          {/* RIGHT: SERVICE GRID FROM IMAGE LIST */}
          <div className="grid grid-cols-2 gap-4">
            {expertiseAreas.map((item, idx) => (
              <div 
                key={idx} 
                className={`p-8 border border-gray-200 flex flex-col items-center text-center group hover:bg-[#2E3350] transition-all duration-500 ${idx === 2 ? 'col-span-2' : ''}`}
              >
                <item.icon size={40} className="text-[#E9A07D] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-agency text-2xl text-[#2E3350] group-hover:text-white uppercase tracking-wide">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};