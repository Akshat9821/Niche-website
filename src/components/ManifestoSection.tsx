"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function ManifestoSection() {
  return (
    <section className="relative z-10 bg-[#D94528] text-[#FCF9F3] border-b-[3px] border-black py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
      {/* Decorative background grid subtle overlay */}
      <div className="absolute inset-0 bg-grid-dots opacity-20 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Subtle pill tag */}
        <div className="inline-block bg-[#11100E] text-[#F5BA27] border-2 border-black px-3.5 py-1 rounded text-[11px] font-black uppercase tracking-widest shadow-[3px_3px_0px_#000] mb-6">
          THE NICHE MANIFESTO
        </div>

        {/* Huge bold headline matching Moodang's 48-hour manifesto */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-black uppercase tracking-tight leading-[0.95] text-[#FCF9F3]">
          THE EXTRACTION TAKES 6 MONTHS.
          <br />
          THE IMPRESSION LASTS FOREVER.
        </h2>

        {/* Angled "worth it!" badge with arrow */}
        <div className="mt-8 flex justify-center sm:justify-end sm:mr-16">
          <div className="transform rotate-[-6deg] hover:rotate-0 transition-transform cursor-pointer inline-flex items-center space-x-1 text-[#F5BA27] font-black text-2xl sm:text-3xl tracking-wider">
            <span>worth it!</span>
            <ArrowUpRight className="w-6 h-6 stroke-[3]" />
          </div>
        </div>

        {/* Supporting manifesto narrative */}
        <p className="mt-6 text-sm sm:text-base font-medium max-w-2xl mx-auto text-[#FCF9F3]/90 leading-relaxed">
          Mass-market fragrances rush out of commercial vats in three days, loaded with synthetic fixatives that give headaches. We wait 180 days in temperature-regulated cold maturation so raw botanical oils cross-link naturally. When you wear NICHE, you wear patient art.
        </p>
      </div>
    </section>
  );
}
