"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PERFUMES } from "@/data/perfumes";
import { Perfume, BottleSize } from "@/types";
import { useCart } from "@/context/CartContext";
import { ArrowLeft, ArrowRight, Sparkles, Check, Eye } from "lucide-react";

export default function MoodSliderSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<BottleSize>("50ml");
  const [added, setAdded] = useState(false);
  const { addToCart, setSelectedPerfumeForModal } = useCart();

  const currentPerfume = PERFUMES[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % PERFUMES.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + PERFUMES.length) % PERFUMES.length);
  };

  const handleAddToCart = () => {
    addToCart(currentPerfume, selectedSize, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const getPrice = (perfume: Perfume, size: BottleSize) => {
    if (size === "100ml") return perfume.price100ml;
    if (size === "5ml Sample") return perfume.priceSample;
    return perfume.price50ml;
  };

  return (
    <section id="mood-picker" className="relative bg-[#F6F1E8] text-[#11100E] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b-[3px] border-black">
      <div className="max-w-7xl mx-auto">
        {/* Header matching Moodang's section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.25em] text-[#D94528] bg-[#F5BA27]/20 border border-[#D94528]/30 px-3 py-1 rounded">
              THE CURATED FLIGHT · 01—06
            </span>
            <div className="mt-4">
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-none text-[#11100E]">
                PICK YOUR
                <br />
                <span className="text-[#D94528]">SCENT MOOD.</span>
              </h2>
            </div>
          </div>

          <div className="max-w-md">
            <p className="text-sm sm:text-base font-semibold text-[#3B3833] leading-relaxed">
              Fresh cold-macerated extract, poured by hand. Six signature moods.
              Prices include 18% GST with complimentary delivery across India.
            </p>
            <div className="mt-3 flex items-center space-x-2 text-xs font-mono font-bold text-[#7B7468]">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping inline-block" />
              <span>CURRENTLY RESTING: {currentPerfume.batch}</span>
            </div>
          </div>
        </div>

        {/* Featured Showcase Card */}
        <div
          className="relative rounded-2xl border-[3px] border-black shadow-[8px_8px_0px_#11100E] p-6 sm:p-10 lg:p-12 overflow-hidden transition-colors duration-500"
          style={{ backgroundColor: currentPerfume.themeColor }}
        >
          {/* Subtle noise grid */}
          <div className="absolute inset-0 bg-grid-dots opacity-15 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Product Info */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                {/* Stamp Tag & Archetype */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="bg-[#11100E] text-[#F5BA27] border-2 border-black font-black text-xs px-3 py-1 rounded shadow-[2px_2px_0px_#000]">
                    {currentPerfume.number} / 06 {currentPerfume.subtitle}
                  </span>
                  <span className="bg-[#FCF9F3] text-[#11100E] border-2 border-black font-black text-xs px-3 py-1 rounded shadow-[2px_2px_0px_#000]">
                    {currentPerfume.concentration}
                  </span>
                  <span className="bg-[#F5BA27] text-[#11100E] border-2 border-black font-mono font-bold text-[11px] px-2.5 py-1 rounded shadow-[2px_2px_0px_#000]">
                    ONLY {currentPerfume.stockLeft} LEFT
                  </span>
                </div>

                {/* Big Title */}
                <h3 className={`text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-none mb-3 ${currentPerfume.textColor}`}>
                  {currentPerfume.name}
                </h3>

                {/* Tagline / Olfactory notes preview */}
                <p className="text-sm sm:text-base font-bold tracking-wide text-[#F5BA27] mb-4">
                  {currentPerfume.tagline}
                </p>

                {/* Description */}
                <p className="text-sm sm:text-base text-[#FCF9F3]/90 leading-relaxed max-w-xl mb-6">
                  {currentPerfume.description}
                </p>

                {/* Olfactory pyramid pill tags */}
                <div className="mb-6 space-y-2 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="bg-black/60 text-[#F5BA27] px-2 py-0.5 rounded font-bold">TOP:</span>
                    <span className="text-[#FCF9F3]">{currentPerfume.topNotes.join(" · ")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="bg-black/60 text-[#F5BA27] px-2 py-0.5 rounded font-bold">HEART:</span>
                    <span className="text-[#FCF9F3]">{currentPerfume.heartNotes.join(" · ")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="bg-black/60 text-[#F5BA27] px-2 py-0.5 rounded font-bold">BASE:</span>
                    <span className="text-[#FCF9F3]">{currentPerfume.baseNotes.join(" · ")}</span>
                  </div>
                </div>

                {/* Sillage and Longevity meters */}
                <div className="grid grid-cols-2 gap-4 max-w-sm mb-8 bg-black/40 border-2 border-black p-3.5 rounded-lg text-xs">
                  <div>
                    <span className="text-[#A49E94] uppercase font-mono block text-[10px]">LONGEVITY</span>
                    <span className="text-[#FCF9F3] font-black text-sm">{currentPerfume.longevity}</span>
                  </div>
                  <div>
                    <span className="text-[#A49E94] uppercase font-mono block text-[10px]">SILLAGE</span>
                    <span className="text-[#F5BA27] font-black text-sm">{currentPerfume.sillage}</span>
                  </div>
                </div>

                {/* Size Selector */}
                <div className="mb-6">
                  <span className="text-xs font-black uppercase tracking-wider text-[#FCF9F3] block mb-2">
                    SELECT FLACON FORMAT:
                  </span>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {(["50ml", "100ml", "5ml Sample"] as BottleSize[]).map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 rounded border-2 border-black text-xs font-black uppercase tracking-wider transition-all ${
                          selectedSize === size
                            ? "bg-[#F5BA27] text-[#11100E] shadow-[3px_3px_0px_#000] translate-x-[-1px] translate-y-[-1px]"
                            : "bg-[#FCF9F3] text-[#11100E] hover:bg-[#EAE3D2]"
                        }`}
                      >
                        {size} — ₹{getPrice(currentPerfume, size).toLocaleString("en-IN")}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-4 border-t-2 border-black/30">
                <button
                  onClick={handleAddToCart}
                  className="brutal-btn-cream px-6 py-3.5 rounded-md text-xs sm:text-sm font-black uppercase tracking-wider flex items-center space-x-2 shadow-[4px_4px_0px_#000]"
                >
                  <span>
                    {added
                      ? "ADDED TO CART!"
                      : `GET THIS SCENT — ₹${getPrice(currentPerfume, selectedSize).toLocaleString("en-IN")}`}
                  </span>
                  {added ? <Check className="w-4 h-4 text-emerald-600" /> : <ArrowRight className="w-4 h-4" />}
                </button>

                <button
                  onClick={() => setSelectedPerfumeForModal(currentPerfume)}
                  className="bg-black/60 hover:bg-black text-[#FCF9F3] border-2 border-black px-4 py-3.5 rounded-md text-xs font-black uppercase tracking-wider flex items-center space-x-1.5 shadow-[3px_3px_0px_#000] transition-colors"
                >
                  <Eye className="w-4 h-4 text-[#F5BA27]" />
                  <span>DEEP DIVE NOTES</span>
                </button>
              </div>
            </div>

            {/* Right Column: Visual Flacon with Rotating Plate & Badges */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center">
                {/* Aura Plate */}
                <div
                  className="absolute inset-2 sm:inset-4 rounded-full border-[3px] border-black shadow-[6px_6px_0px_#000] transition-colors duration-500"
                  style={{ backgroundColor: currentPerfume.plateColor }}
                />

                {/* Inner Plate */}
                <div className="absolute inset-8 sm:inset-12 rounded-full bg-[#FCF9F3] border-2 border-black flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-grid-dots-dark opacity-20" />
                </div>

                {/* Flacon Image */}
                <div className="relative z-10 w-52 h-52 sm:w-64 sm:h-64 rounded-xl overflow-hidden border-[3px] border-black shadow-[4px_4px_0px_#000] rotate-[-2deg] transition-transform duration-300 hover:rotate-0 hover:scale-105">
                  <Image
                    src={currentPerfume.image}
                    alt={currentPerfume.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 250px, 350px"
                  />
                  <div className="absolute top-2 right-2 bg-black text-[#F5BA27] text-[10px] font-mono font-bold px-2 py-0.5 border border-black rounded">
                    {currentPerfume.macerationDays}D AGED
                  </div>
                </div>

                {/* Dynamic Floating Ingredient Badges */}
                {currentPerfume.vibeStickers.map((sticker, idx) => {
                  const positions = [
                    "-top-2 -left-2 sm:-top-3 sm:-left-4",
                    "-top-2 -right-2 sm:-top-3 sm:-right-4",
                    "-bottom-3 left-6 sm:-bottom-4 sm:left-10",
                  ];
                  return (
                    <div
                      key={idx}
                      className={`absolute ${positions[idx % positions.length]} z-20 brutal-badge ${sticker.color} px-3 py-1 rounded ${sticker.rotation} shadow-[3px_3px_0px_#000] animate-float`}
                    >
                      <span className="text-[10px] sm:text-xs font-black tracking-wider">
                        {sticker.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Pagination & Arrows matching Moodang */}
        <div className="mt-8 flex items-center justify-between">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border-2 border-black bg-[#FCF9F3] hover:bg-[#F5BA27] text-[#11100E] flex items-center justify-center font-black text-xl shadow-[3px_3px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 transition-all"
            aria-label="Previous scent"
          >
            <ArrowLeft className="w-5 h-5 stroke-[2.5]" />
          </button>

          {/* Numbered Indicators */}
          <div className="flex items-center space-x-4 sm:space-x-8">
            {PERFUMES.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => setActiveIndex(idx)}
                className={`group flex flex-col items-center transition-all ${
                  activeIndex === idx ? "scale-110" : "opacity-60 hover:opacity-100"
                }`}
              >
                <span
                  className={`text-sm sm:text-base font-black tracking-wider ${
                    activeIndex === idx ? "text-[#D94528]" : "text-[#11100E]"
                  }`}
                >
                  {p.number}
                </span>
                <span
                  className={`h-1 w-6 sm:w-8 mt-1 rounded-full transition-all ${
                    activeIndex === idx ? "bg-[#D94528]" : "bg-transparent group-hover:bg-[#11100E]/20"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full border-2 border-black bg-[#FCF9F3] hover:bg-[#F5BA27] text-[#11100E] flex items-center justify-center font-black text-xl shadow-[3px_3px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 transition-all"
            aria-label="Next scent"
          >
            <ArrowRight className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </section>
  );
}
