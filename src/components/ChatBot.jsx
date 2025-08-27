// src/components/ChatBot.jsx
import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const faqs = [
  {
    question: "What types of motors are available?",
    answer:
      "We provide two motor types:\n\n• BLDC Motor – Energy efficient, saves around ₹1500/year, comes with remote, 5 years warranty on motor, 2 years on PCB.\n\n• Induction Motor – Robust and durable, 2 years warranty, no remote included.",
  },
  {
    question: "What fan models are available?",
    answer:
      "We offer 4 fan series:\n\n• Evaara – Only BLDC.\n• Inaara – BLDC + Induction.\n• Skyro – BLDC + Induction.\n• Lara – BLDC + Induction.",
  },
  {
    question: "What is the warranty for BLDC fans?",
    answer:
      "BLDC fans come with 5 Years warranty on Motor and 2 Years on PCB.",
  },
  {
    question: "Do BLDC fans include a remote?",
    answer: "Yes ✅ All BLDC fans come with a remote for easy control.",
  },
  {
    question: "What is special about Induction motors?",
    answer:
      "Induction motors are known for their robustness and durability. They have a 2-year warranty but do not include a remote.",
  },
  {
    question: "Why should I choose BLDC fans?",
    answer:
      "BLDC fans save around ₹1500 per year on electricity, run silently, and come with a remote. They are the most energy-efficient option.",
  },
];

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hi 👋! Ask me anything about our fans." },
  ]);

  const handleQuestionClick = (question, answer) => {
    setMessages((prev) => [
      ...prev,
      { type: "user", text: question },
      { type: "bot", text: answer },
    ]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Chat Window */}
      {isOpen && (
        <div className="w-80 md:w-96 h-[420px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#ba6a5a] to-[#d88a78] text-white px-4 py-3 flex justify-between items-center">
            <h3 className="font-bold">Anthem Fan ChatBot</h3>
            <button onClick={() => setIsOpen(false)}>
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto space-y-2 text-sm">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg max-w-[80%] ${
                  msg.type === "bot"
                    ? "bg-gray-200 text-gray-800 self-start"
                    : "bg-[#ba6a5a] text-white self-end ml-auto"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Predefined Questions */}
          <div className="border-t bg-gray-50 p-2 flex flex-wrap gap-2">
            {faqs.slice(0, 3).map((faq, idx) => (
              <button
                key={idx}
                onClick={() => handleQuestionClick(faq.question, faq.answer)}
                className="text-xs bg-[#ba6a5a] text-white px-3 py-1 rounded-full hover:opacity-80"
              >
                {faq.question}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#ba6a5a] hover:scale-110 transition-transform p-4 rounded-full shadow-lg text-white"
      >
        <MessageCircle size={28} />
      </button>
    </div>
  );
};

export default ChatBot;
