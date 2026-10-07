"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export default function CautionMarquee() {
  const items = [
    "ZERO SYNTHETICS",
    "MOOD UP",
    "SILLAGE OUT",
    "180 DAYS COLD MACERATED",
    "35% EXTRAIT CONCENTRATION",
    "DELHI + MUMBAI + BENGALURU",
    "TIME IS AN INGREDIENT",
    "SMALL BATCH DROPS",
    "SMELL UNFORGETTABLE",
  ];

  return (
    <div className="relative z-20 py-4 -my-3 overflow-hidden bg-transparent pointer-events-none select-none">
      <div className="w-[110%] -ml-[5%] transform -rotate-1 bg-[#F5BA27] text-[#11100E] border-y-[3px] border-black py-3 sm:py-4 shadow-[0_4px_10px_rgba(0,0,0,0.3)]">
        <div className="flex w-max animate-marquee space-x-6 text-sm sm:text-base font-black tracking-widest uppercase items-center">
          {[...items, ...items, ...items].map((item, index) => (
            <div key={index} className="flex items-center space-x-3 shrink-0">
              <span className="font-display tracking-wider">{item}</span>
              <Sparkles className="w-4 h-4 fill-[#11100E] text-[#11100E]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
