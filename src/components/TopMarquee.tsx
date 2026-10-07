"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export default function TopMarquee() {
  const items = [
    "180-DAY COLD MACERATION",
    "35% EXTRAIT DE PARFUM",
    "DELHI · MUMBAI · BENGALURU + WORLDWIDE",
    "COMPLIMENTARY 5ML DISCOVERY VIAL WITH EVERY FLACON",
    "SAME-DAY DISPATCH AVAILABLE",
    "ZERO CHEMICAL FIXATIVES",
    "BATCH NO. 04 LIVE NOW",
  ];

  return (
    <div className="relative z-40 overflow-hidden bg-[#D94528] py-2 text-[#FCF9F3] border-b-2 border-black">
      <div className="flex w-max animate-marquee space-x-6 text-xs md:text-sm font-black tracking-widest uppercase items-center">
        {[...items, ...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center space-x-3 shrink-0">
            <Sparkles className="w-3.5 h-3.5 text-[#F5BA27] fill-[#F5BA27]" />
            <span>{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
