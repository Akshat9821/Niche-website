"use client";

import React, { useState } from "react";
import Image from "next/image";
import { METHOD_ACCORDIONS } from "@/data/perfumes";
import { Plus, X, Sparkles, Clock, Flame, ShieldCheck } from "lucide-react";

export default function TheNicheMethod() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="the-method" className="relative border-b-[3px] border-black">
      {/* Top Half: Terracotta Red Section matching Moodang */}
      <div className="bg-[#D94528] text-[#FCF9F3] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Outlined Watermark Text */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-stroke-white text-8xl sm:text-[180px] font-black uppercase opacity-15 select-none pointer-events-none">
          180D
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Metadata Rule */}
          <div className="flex items-center justify-between text-xs font-black uppercase tracking-widest text-[#FCF9F3] pb-6 border-b-2 border-black/30 mb-8">
            <span>THE NICHE METHOD</span>
            <span className="font-mono">01 — 04</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              {/* Stamp Badge */}
              <div className="inline-block bg-[#F5BA27] text-[#11100E] border-2 border-black font-black text-xs uppercase px-3.5 py-1 rounded shadow-[3px_3px_0px_#000] mb-6">
                TIME IS AN INGREDIENT.
              </div>

              {/* Bold Headline */}
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-none text-[#FCF9F3] mb-6">
                GOOD SCENT
                <br />
                <span className="text-[#F5BA27]">TAKES TIME.</span>
              </h2>

              <p className="text-base sm:text-lg font-medium text-[#FCF9F3]/90 leading-relaxed max-w-xl">
                French master formulation, Himalayan and Indian heritage botanicals. Every NICHE extrait begins with untamed essences, a patient 180-day cold maturation cycle, and the strict discipline to leave pure botanical resins alone.
              </p>

              {/* Fast stats row */}
              <div className="mt-8 grid grid-cols-3 gap-4 border-t-2 border-black/30 pt-6">
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-[#F5BA27] block">180</span>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#FCF9F3]">DAYS COLD AGED</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-[#F5BA27] block">35%</span>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#FCF9F3]">OIL CONCENTRATION</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-[#F5BA27] block">0%</span>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#FCF9F3]">SYNTHETIC FIXERS</span>
                </div>
              </div>
            </div>

            {/* Right graphic with 180D badge */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative">
                {/* Yellow frame */}
                <div className="w-64 h-64 sm:w-80 sm:h-80 bg-[#F5BA27] border-[3px] border-black rounded-xl shadow-[8px_8px_0px_#000] rotate-2 overflow-hidden relative">
                  <Image
                    src="https://images.unsplash.com/photo-1547887537-6158d64c35b3?auto=format&fit=crop&w=800&q=80"
                    alt="Artisanal Cold Extraction Vault"
                    fill
                    className="object-cover p-3"
                    sizes="350px"
                  />
                  {/* Top stamp */}
                  <div className="absolute top-2 left-2 right-2 bg-[#FCF9F3] border-2 border-black text-center py-1 text-[10px] font-black uppercase tracking-wider text-[#11100E]">
                    COLD EXTRACTION · AGED IN FRENCH OAK
                  </div>
                </div>

                {/* Big circular stamp */}
                <div className="absolute -bottom-6 -left-6 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#F5BA27] border-[3px] border-black flex flex-col items-center justify-center shadow-[4px_4px_0px_#000] -rotate-12 z-20">
                  <span className="text-2xl sm:text-3xl font-black text-[#11100E] leading-none">180D</span>
                  <span className="text-[9px] font-black uppercase text-[#11100E] tracking-tighter">COLD AGED</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Half: Interactive Accordion in Warm Cream Background */}
      <div className="bg-[#F6F1E8] text-[#11100E] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t-[3px] border-black">
        <div className="max-w-4xl mx-auto space-y-4">
          {METHOD_ACCORDIONS.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={item.number}
                className="border-[3px] border-black rounded-xl overflow-hidden shadow-[5px_5px_0px_#000] transition-all bg-[#FCF9F3]"
              >
                {/* Header Button */}
                <button
                  onClick={() => toggleAccordion(idx)}
                  className={`w-full p-5 sm:p-6 text-left flex items-center justify-between transition-colors ${
                    isOpen ? "bg-[#F5BA27]" : "bg-[#FCF9F3] hover:bg-[#F5BA27]/30"
                  }`}
                >
                  <div className="flex items-center space-x-4 sm:space-x-6">
                    <span className="text-sm sm:text-base font-black text-[#D94528] font-mono">
                      {item.number}
                    </span>
                    <span className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight text-[#11100E]">
                      {item.title}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-full border-2 border-black bg-[#FCF9F3] flex items-center justify-center shrink-0 shadow-[2px_2px_0px_#000]">
                    {isOpen ? (
                      <X className="w-5 h-5 text-[#11100E] stroke-[3]" />
                    ) : (
                      <Plus className="w-5 h-5 text-[#11100E] stroke-[3]" />
                    )}
                  </div>
                </button>

                {/* Expanded Accordion Body */}
                {isOpen && (
                  <div className="p-6 sm:p-8 bg-[#FCF9F3] border-t-2 border-black space-y-4">
                    <div className="inline-block bg-[#11100E] text-[#F5BA27] text-xs font-black uppercase px-3 py-1 rounded border border-black shadow-[2px_2px_0px_#000]">
                      {item.badge}
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-[#D94528]">
                      {item.highlight}
                    </h4>
                    <p className="text-sm sm:text-base text-[#3B3833] leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
