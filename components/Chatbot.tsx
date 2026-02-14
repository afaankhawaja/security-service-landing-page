"use client";

import { useState } from "react";
import { MessageSquare, X } from "lucide-react";
import Image from "next/image";

const faqData = [
  {
    question: "Where are you based?",
    answer: "Our headquarters is located at Suite F14, Epic House, Darnal Road, Sheffield, UK. We provide professional security services across South Yorkshire and throughout the UK.",
  },
  {
    question: "What specific security services do you provide?",
    answer: "We specialize in Manned Guarding, Event Security, K9 Dog Handling, Construction Site Security, and Retail & Commercial protection.",
  },
  {
    question: "Are your security officers licensed?",
    answer: "Absolutely. All our security officers are experienced and SIA-licensed, providing 24/7 operational support tailored to your specific needs.",
  },
  {
    question: "Do you offer construction site security?",
    answer: "Yes, we deliver trusted protection solutions specifically for construction sites, as well as retail premises, private clients, and large-scale events.",
  },
  {
    question: "How much experience do you have?",
    answer: "We are a leading security provider with 15+ years of proven experience delivering reliable and professional protection solutions across the UK.",
  },
];

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState<{ type: "user" | "bot"; text: string }[]>([]);

  const handleQuestionClick = (q: string, a: string) => {
    setChatHistory([...chatHistory, { type: "user", text: q }, { type: "bot", text: a }]);
  };

  return (
    <div className={`fixed  bottom-2 right-4 sm:bottom-6 sm:right-6 ${isOpen?"z-[9999]":"z-[9999]"} flex flex-col items-end`}>
      {isOpen && (
        <div className={`${!isOpen ? "hidden" : ""} mb-4 w-[calc(100vw-2rem)] max-w-96 sm:w-96 bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-100 flex flex-col h-[calc(100vh-8rem)] sm:max-h-[65vh]`}>
          
          {/* Header */}
          <div className="bg-[#2E3350] p-3 sm:p-4 flex justify-between items-center flex-shrink-0">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center">
                <MessageSquare size={16} className="sm:w-[18px] sm:h-[18px] text-[#2E3350]" />
              </div>
              <span className="font-agency text-lg sm:text-xl text-white tracking-wide">SECURE CHAT</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:opacity-70">
              <X size={20} />
            </button>
          </div>

          {/* Chat Body (Answers appear here) */}
          <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 bg-gray-50">
            {chatHistory.length === 0 && (
              <p className="font-montserrat text-sm text-gray-500 italic text-center">
                Hello! How can we help you today?
              </p>
            )}
            {chatHistory.map((msg, i) => (
              <div key={i} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] sm:max-w-[80%] p-2.5 sm:p-3 rounded-xl text-xs sm:text-sm font-montserrat break-words ${
                  msg.type === "user" ? "bg-[#2E3350] text-white" : "bg-white border border-gray-200 text-[#2E3350]"
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* FAQ Area (Now with fixed height and scroll) */}
          <div className="p-3 sm:p-4 bg-white border-t border-gray-100 flex-shrink-0">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Frequently Asked</p>
            
            {/* SCROLLABLE FAQ CONTAINER */}
            <div className="max-h-28 overflow-y-auto pr-1 space-y-1.5 scrollbar-thin scrollbar-thumb-gray-200">
              <div className="flex flex-col gap-1.5 sm:gap-2">
                {faqData.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => handleQuestionClick(item.question, item.answer)}
                    className="text-left text-[11px] sm:text-xs bg-gray-50 hover:bg-[#E9A07D]/10 border border-gray-200 p-2 rounded-lg transition-colors font-montserrat text-[#2E3350] w-full"
                  >
                    {item.question}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className=" text-white p-3 sm:p-4 transition-all duration-300 transform hover:scale-110  items-center group"
      >
        
        <div className="relative  w-[5vw] h-[5vw]  ml-0  transition-all">
          <Image src="/assets/only-logo-cropped.svg" alt="Logo" fill className="object-cover" />
        </div>
        <span className="max-w-fit overflow-hidden group-hover:max-w-xs transition-all duration-500 font-agency text-xs sm:text-sm tracking-widest uppercase whitespace-nowrap">
          Live Chat
        </span>
      </button>
    </div>
  );
};