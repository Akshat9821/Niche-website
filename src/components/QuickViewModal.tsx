"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { BottleSize } from "@/types";
import { X, Sparkles, Check, ArrowRight, Clock, ShieldCheck, Flame } from "lucide-react";

export default function QuickViewModal() {
  const { selectedPerfumeForModal, setSelectedPerfumeForModal, addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<BottleSize>("50ml");
  const [added, setAdded] = useState(false);

  if (!selectedPerfumeForModal) return null;

  const perfume = selectedPerfumeForModal;

  const getPrice = (size: BottleSize) => {
    if (size === "100ml") return perfume.price100ml;
    if (size === "5ml Sample") return perfume.priceSample;
    return perfume.price50ml;
  };

  const handleAddToCart = () => {
    addToCart(perfume, selectedSize, 1);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      setSelectedPerfumeForModal(null);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={() => setSelectedPerfumeForModal(null)}
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-4xl bg-[#FCF9F3] text-[#11100E] border-[3px] border-black rounded-2xl overflow-hidden shadow-[8px_8px_0px_#11100E] my-8">
        {/* Header Bar */}
        <div className="bg-[#11100E] text-[#FCF9F3] p-4 sm:p-5 border-b-2 border-black flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="bg-[#F5BA27] text-[#11100E] text-xs font-mono font-black px-2 py-0.5 rounded">
              {perfume.number} / 06
            </span>
            <span className="text-sm sm:text-base font-black uppercase tracking-wider text-[#FCF9F3]">
              OLFACTORY DOSSIER · {perfume.name}
            </span>
          </div>

          <button
            onClick={() => setSelectedPerfumeForModal(null)}
            className="w-8 h-8 rounded-full border border-[#444] bg-[#222] hover:bg-white hover:text-black flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 sm:p-8">
          {/* Left Column: Flacon Image */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div className="relative h-72 sm:h-96 rounded-xl overflow-hidden border-2 border-black shadow-[4px_4px_0px_#000] bg-[#EAE3D2]">
              <img
                src={perfume.image}
                alt={perfume.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-[#D94528] text-white border border-black text-[10px] font-black uppercase px-2.5 py-1 rounded shadow-[2px_2px_0px_#000]">
                {perfume.concentration}
              </div>
              <div className="absolute bottom-3 left-3 right-3 bg-black/85 text-white p-2.5 rounded border border-black text-[11px] font-mono">
                <span className="text-[#F5BA27] font-bold block">EDITORIAL NOTE:</span>
                {perfume.editorialQuote}
              </div>
            </div>

            {/* Batch & Maceration Meta */}
            <div className="mt-4 bg-[#F6F1E8] border-2 border-black p-3.5 rounded-lg text-xs font-mono space-y-1">
              <div className="flex justify-between">
                <span className="text-[#777]">FORMULATED BY:</span>
                <span className="font-bold text-[#11100E]">{perfume.nose}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#777]">COLD MACERATION:</span>
                <span className="font-bold text-[#D94528]">{perfume.macerationDays} DAYS RESTED</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#777]">BATCH ALLOCATION:</span>
                <span className="font-bold text-[#11100E]">{perfume.batch}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Note Pyramid & Selector */}
          <div className="md:col-span-7 flex flex-col justify-between space-y-5">
            <div>
              <div className="flex items-center space-x-2 text-xs font-mono text-[#D94528] font-bold uppercase mb-1">
                <span>{perfume.house}</span>
                <span>·</span>
                <span>{perfume.categoryLabel}</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-[#11100E] leading-none mb-2">
                {perfume.name}
              </h3>

              <p className="text-xs sm:text-sm font-semibold text-[#666] mb-4">
                {perfume.description}
              </p>

              {/* Olfactory Pyramid Breakdown */}
              <div className="space-y-3 bg-[#11100E] text-[#FCF9F3] p-4 rounded-xl border-2 border-black">
                <div className="text-xs font-black uppercase tracking-widest text-[#F5BA27] flex items-center gap-1.5 pb-2 border-b border-[#333]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>THE OLFACTORY PYRAMID</span>
                </div>

                <div className="space-y-2 text-xs font-mono">
                  <div>
                    <span className="text-[#F5BA27] font-bold block text-[10px]">
                      TOP NOTES (FIRST 15 MINUTES):
                    </span>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {perfume.topNotes.map((note) => (
                        <span key={note} className="bg-[#24211C] border border-[#444] px-2 py-0.5 rounded text-[11px]">
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-[#D94528] font-bold block text-[10px]">
                      HEART NOTES (HOURS 1 TO 6):
                    </span>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {perfume.heartNotes.map((note) => (
                        <span key={note} className="bg-[#24211C] border border-[#444] px-2 py-0.5 rounded text-[11px]">
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-white font-bold block text-[10px]">
                      BASE NOTES (HOURS 6 TO 18+):
                    </span>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {perfume.baseNotes.map((note) => (
                        <span key={note} className="bg-[#24211C] border border-[#444] px-2 py-0.5 rounded text-[11px]">
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Longevity & Sillage Gauges */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="bg-[#F6F1E8] border-2 border-black p-3 rounded-lg text-xs font-mono">
                  <span className="text-[#777] block text-[10px]">SKIN LONGEVITY</span>
                  <span className="font-black text-sm text-[#11100E] flex items-center gap-1 mt-0.5">
                    <Clock className="w-3.5 h-3.5 text-[#D94528]" />
                    {perfume.longevity}
                  </span>
                </div>
                <div className="bg-[#F6F1E8] border-2 border-black p-3 rounded-lg text-xs font-mono">
                  <span className="text-[#777] block text-[10px]">PROJECTION / SILLAGE</span>
                  <span className="font-black text-sm text-[#11100E] flex items-center gap-1 mt-0.5">
                    <Flame className="w-3.5 h-3.5 text-[#F5BA27]" />
                    {perfume.sillage}
                  </span>
                </div>
              </div>
            </div>

            {/* Bottle Size Selector & Cart Action */}
            <div className="pt-4 border-t-2 border-black/20 space-y-4">
              <div>
                <span className="text-xs font-black uppercase text-[#11100E] block mb-2 font-mono">
                  SELECT VOLUME FORMAT:
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {(["50ml", "100ml", "5ml Sample"] as BottleSize[]).map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`p-2.5 rounded-lg border-2 border-black text-xs font-black uppercase text-center transition-all ${
                        selectedSize === size
                          ? "bg-[#F5BA27] text-[#11100E] shadow-[2px_2px_0px_#000]"
                          : "bg-white text-[#555] hover:bg-[#F6F1E8]"
                      }`}
                    >
                      <div className="leading-tight">{size}</div>
                      <div className="text-[11px] font-mono mt-0.5">
                        ₹{getPrice(size).toLocaleString("en-IN")}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className="w-full brutal-btn-red py-4 rounded-md text-xs sm:text-sm font-black uppercase tracking-wider flex items-center justify-center space-x-2 shadow-[4px_4px_0px_#000]"
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4 text-white" />
                    <span>ADDED TO BAG!</span>
                  </>
                ) : (
                  <>
                    <span>
                      ADD TO BAG — ₹{getPrice(selectedSize).toLocaleString("en-IN")}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
