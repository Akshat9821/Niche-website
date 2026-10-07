"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PERFUMES } from "@/data/perfumes";
import { useCart } from "@/context/CartContext";
import { ArrowRight, ArrowDown, Sparkles, Check } from "lucide-react";

export default function HeroSection() {
  const { addToCart, setSelectedPerfumeForModal } = useCart();
  const heroPerfume = PERFUMES[0]; // SMOKED ORRIS & LEATHER
  const [added, setAdded] = useState(false);

  const handleQuickAdd = () => {
    addToCart(heroPerfume, "50ml", 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const scrollToCatalog = () => {
    const el = document.getElementById("mood-picker");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-[#11100E] pt-10 pb-20 sm:pt-16 sm:pb-28 border-b-2 border-black">
      {/* Background subtle radial warm glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#D94528]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Main Headline styled identically to Moodang's hero */}
        <div className="flex flex-col items-center justify-center space-y-0 select-none">
          {/* Outlined display text */}
          <h1 className="text-stroke-white text-5xl sm:text-7xl md:text-8xl lg:text-[104px] font-black uppercase tracking-tight leading-none">
            SCENT THAT
          </h1>

          {/* Solid bold display text */}
          <div className="text-5xl sm:text-7xl md:text-8xl lg:text-[104px] font-black uppercase tracking-tight text-[#FCF9F3] leading-none">
            PUTS YOU
          </div>

          {/* Solid bold with accent word */}
          <div className="text-5xl sm:text-7xl md:text-8xl lg:text-[104px] font-black uppercase tracking-tight leading-none flex flex-wrap justify-center items-center gap-2 sm:gap-4">
            <span className="text-[#FCF9F3]">IN A DEEPER</span>
            <span className="text-[#D94528]">MOOD.</span>
          </div>
        </div>

        {/* Dashed divider line inspired by Moodang */}
        <div className="my-8 sm:my-10 max-w-4xl mx-auto flex items-center justify-between text-[11px] sm:text-xs font-black uppercase tracking-widest text-[#A49E94]">
          <span className="shrink-0 text-[#F5BA27]">PRODUCT NO. 01</span>
          <div className="flex-1 mx-4 sm:mx-8 border-b-2 border-dotted border-[#3E3A33]" />
          <span className="shrink-0 text-[#FCF9F3]">THE ICON · SMOKED ORRIS & LEATHER</span>
        </div>

        {/* Centerpiece Hero Product with layered plate aura & sticker stamps */}
        <div className="relative max-w-lg mx-auto my-6 sm:my-10 flex items-center justify-center">
          {/* Layered decorative circular backdrop plates (like pizza plate aura) */}
          <div className="relative w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] rounded-full flex items-center justify-center">
            {/* Outer golden plate ring */}
            <div className="absolute inset-0 rounded-full bg-[#F5BA27] border-[3px] border-black shadow-[6px_6px_0px_#000] animate-pulse-subtle" />
            {/* Inner ivory plate */}
            <div className="absolute inset-4 sm:inset-6 rounded-full bg-[#FCF9F3] border-2 border-black flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-grid-dots-dark opacity-30" />
            </div>

            {/* Perfume Flacon Image */}
            <div className="relative z-10 w-56 h-56 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border-2 border-black shadow-[4px_4px_0px_#000] rotate-[-2deg] transition-transform duration-300 hover:rotate-0 hover:scale-105 cursor-pointer"
                 onClick={() => setSelectedPerfumeForModal(heroPerfume)}>
              <Image
                src={heroPerfume.image}
                alt="Niche Smoked Orris & Leather Extrait de Parfum"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 250px, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-3">
                <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-white bg-black/80 px-2 py-1 rounded">
                  CLICK TO INSPECT NOTES ↗
                </span>
              </div>
            </div>

            {/* Floating Neo-Brutalist Ingredient Sticker Badges with Drop Shadows */}
            {/* Top Left Sticker: ORRIS */}
            <div className="absolute -top-3 -left-4 sm:-top-4 sm:-left-8 z-20 brutal-badge bg-[#FCF9F3] text-[#11100E] px-3.5 py-1.5 rounded -rotate-6 shadow-[4px_4px_0px_#000] animate-float">
              <span className="text-[11px] sm:text-xs font-black tracking-wider flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#D94528]" />
                FLORENTINE ORRIS (7 YR)
              </span>
            </div>

            {/* Top Right Sticker: BIRCH TAR */}
            <div className="absolute -top-1 -right-4 sm:-top-2 sm:-right-8 z-20 brutal-badge bg-[#D94528] text-white px-3.5 py-1.5 rounded rotate-6 shadow-[4px_4px_0px_#000]">
              <span className="text-[11px] sm:text-xs font-black tracking-wider">
                CHARRED BIRCH TAR
              </span>
            </div>

            {/* Bottom Left Sticker: EXTRAIT */}
            <div className="absolute -bottom-4 -left-3 sm:-bottom-6 sm:-left-6 z-20 brutal-badge bg-[#F5BA27] text-[#11100E] px-3.5 py-1.5 rounded rotate-3 shadow-[4px_4px_0px_#000]">
              <span className="text-[11px] sm:text-xs font-black tracking-wider">
                35% EXTRAIT DE PARFUM
              </span>
            </div>

            {/* Bottom Right Sticker: SILLAGE */}
            <div className="absolute -bottom-3 -right-3 sm:-bottom-5 sm:-right-6 z-20 brutal-badge bg-[#324E39] text-[#FCF9F3] px-3.5 py-1.5 rounded -rotate-4 shadow-[4px_4px_0px_#000]">
              <span className="text-[11px] sm:text-xs font-black tracking-wider">
                16H BEAST SILLAGE
              </span>
            </div>
          </div>
        </div>

        {/* Subtitle tag */}
        <p className="mt-8 text-xs sm:text-sm font-black tracking-[0.2em] uppercase text-[#FCF9F3]">
          AUTHENTIC EXTRAIT DE PARFUM. COLD MACERATED, NEVER COMPROMISED.
        </p>
        <p className="mt-1 text-xs sm:text-sm text-[#A49E94] font-medium max-w-lg mx-auto">
          Hand-poured in heavy architectural flacons. Small batch release of 120 flacons.
        </p>

        {/* Bottom CTAs matching Moodang */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <button
            onClick={handleQuickAdd}
            className="w-full sm:w-auto brutal-btn-cream px-8 py-4 rounded-md text-sm font-black uppercase tracking-wider flex items-center justify-center space-x-3 group"
          >
            <span>{added ? "ADDED TO FLACON BAG!" : "ORDER THE ICON — RS. 8,400"}</span>
            {added ? (
              <Check className="w-4 h-4 text-emerald-600" />
            ) : (
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            )}
          </button>

          <button
            onClick={scrollToCatalog}
            className="text-xs font-black uppercase tracking-widest text-[#FCF9F3] hover:text-[#F5BA27] transition-colors flex items-center space-x-1.5 py-2 group"
          >
            <span>SCROLL TO THE GOOD PART</span>
            <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
