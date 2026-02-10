"use client";

import { useState } from "react";
import { MessageSquare, X, Send } from "lucide-react";
import Image from "next/image";

const faqData = [
  {
    question: "What security services do you offer?",
    answer: "We offer 24/7 reliable protection, including trained security guards, certified professionals, and an in-house monitoring system.",
  },
  {
    question: "Are your guards certified?",
    answer: "Yes, all our personnel are carefully selected, fully trained, and certified to handle diverse security situations professionally.",
  },
  {
    question: "How does the monitoring system work?",
    answer: "Our proprietary system allows real-time tracking and reporting to ensure accountability and superior service quality.",
  },
];

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState<{ type: "user" | "bot"; text: string }[]>([]);

  const handleQuestionClick = (q: string, a: string) => {
    setChatHistory([...chatHistory, { type: "user", text: q }, { type: "bot", text: a }]);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9999] flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-[calc(100vw-2rem)] max-w-96 sm:w-96 bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-100 flex flex-col h-[calc(100vh-8rem)] sm:max-h-[65vh]">
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

          <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 bg-gray-50" style={{ minHeight: 0 }}>
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

          <div className="p-3 sm:p-4 bg-white border-t border-gray-100 flex-shrink-0">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Frequently Asked</p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {faqData.map((item, i) => (
                <button
                  key={i}
                  onClick={() => handleQuestionClick(item.question, item.answer)}
                  className="text-left text-[11px] sm:text-xs bg-gray-100 hover:bg-[#E9A07D]/20 border border-gray-200 p-1.5 sm:p-2 rounded-lg transition-colors font-montserrat text-[#2E3350]"
                >
                  {item.question}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#2E3350] hover:bg-[#E9A07D] text-white p-3 sm:p-4 rounded-full shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center group"
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-agency text-xs sm:text-sm tracking-widest uppercase whitespace-nowrap">
          Live Chat
        </span>

        <Image src="/assets/only-logo-cropped.svg" alt="Logo" width={40} height={40} className="w-8 h-8 sm:w-10 sm:h-10 object-cover" />
        
      </button>
    </div>
  );
};