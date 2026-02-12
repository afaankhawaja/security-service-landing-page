"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Excellence } from "@/components/Excellence";
import { Testimonials } from "@/components/Testimonials";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Chatbot } from "@/components/Chatbot";
import { AboutUs } from "@/components/AboutUs";
import { TrustExperience } from "@/components/TrustExperience";
import { ServiceExpertise } from "@/components/ServiceExpertise";
import ServicesGrid from "@/components/ServicesGrid";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative">
      <Navbar />
      <ServicesGrid/>
      {/* <Hero />
      <Excellence />
      <AboutUs/>
      <ServiceExpertise />
      <TrustExperience/>
      <Testimonials />
      <ContactSection />
      <Footer />
      <Chatbot /> */}
    </main>
  );
}
