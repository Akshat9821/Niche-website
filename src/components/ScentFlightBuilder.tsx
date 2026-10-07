"use client";

import React from "react";
import Image from "next/image";
import { PERFUMES } from "@/data/perfumes";
import { useCart } from "@/context/CartContext";
import { Sparkles, Check, Plus, ShoppingBag, ArrowRight } from "lucide-react";

export default function ScentFlightBuilder() {
  const { flightPerfumes, toggleFlightPerfume, addFlightToCart } = useCart();

  const isComplete = flightPerfumes.length === 3;

  return (
    <section id="discovery-flight" className="bg-[#1A1815] text-[#FCF9F3] py-20 px-4 sm:px-6 lg:px-8 border-b-[3px] border-black relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F5BA27]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 bg-[#F5BA27] text-[#11100E] border-2 border-black text-xs font-black uppercase px-3.5 py-1 rounded shadow-[3px_3px_0px_#000] mb-4">
            <Sparkles className="w-3.5 h-3.5 fill-[#11100E]" />
            <span>THE DISCOVERY PROGRAM</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight leading-none text-[#FCF9F3]">
            BUILD YOUR 3-SCENT
            <br />
            <span className="text-[#F5BA27]">DISCOVERY FLIGHT.</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#A49E94] leading-relaxed">
            Select three 5ml miniature atomizers for <strong className="text-[#FCF9F3]">₹1,490</strong>.
            Includes an instant ₹1,490 voucher credit redeemable against your first full-size flacon.
            Essentially test three perfumes for free.
          </p>
        </div>

        {/* The 3 Flight Slots */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-12">
          {[0, 1, 2].map((slotIdx) => {
            const selected = flightPerfumes[slotIdx];

            return (
              <div
                key={slotIdx}
                className={`border-[3px] border-black rounded-xl p-5 min-h-[170px] flex flex-col justify-between transition-all ${
                  selected
                    ? "bg-[#FCF9F3] text-[#11100E] shadow-[6px_6px_0px_#F5BA27]"
                    : "bg-[#11100E]/70 border-dashed border-[#444] text-[#7B7468]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-black uppercase tracking-wider text-[#D94528]">
                    SLOT 0{slotIdx + 1}
                  </span>
                  {selected && (
                    <button
                      onClick={() => toggleFlightPerfume(selected)}
                      className="text-[10px] font-black uppercase text-[#D94528] hover:underline"
                    >
                      REMOVE ×
                    </button>
                  )}
                </div>

                {selected ? (
                  <div className="flex items-center space-x-4 my-2">
                    <div className="relative w-16 h-16 rounded-md overflow-hidden border-2 border-black shrink-0">
                      <img
                        src={selected.image}
                        alt={selected.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-black uppercase leading-tight line-clamp-1">
                        {selected.name}
                      </h4>
                      <p className="text-[11px] font-bold text-[#D94528]">
                        5ML MINI ATOMIZER
                      </p>
                      <p className="text-[10px] text-[#555] font-mono mt-0.5">
                        {selected.concentration}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#A49E94]">
                      + CLICK ANY SCENT BELOW
                    </p>
                    <p className="text-[10px] text-[#666] font-mono mt-1">
                      Choose from 6 extrait profiles
                    </p>
                  </div>
                )}

                <div className="text-[10px] font-mono uppercase tracking-wider text-right">
                  {selected ? (
                    <span className="text-emerald-700 font-bold flex items-center justify-end gap-1">
                      <Check className="w-3 h-3" /> LOCKED IN
                    </span>
                  ) : (
                    <span>EMPTY SLOT</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Scent Selection Grid */}
        <div className="bg-[#11100E] border-2 border-black rounded-xl p-6 mb-10">
          <h3 className="text-sm font-black uppercase tracking-widest text-[#F5BA27] mb-4">
            CHOOSE YOUR 3 SAMPLES ({flightPerfumes.length} / 3 SELECTED):
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {PERFUMES.map((perfume) => {
              const isSelected = flightPerfumes.some((p) => p.id === perfume.id);

              return (
                <button
                  key={perfume.id}
                  onClick={() => toggleFlightPerfume(perfume)}
                  className={`border-2 border-black rounded-lg p-3 text-left transition-all relative ${
                    isSelected
                      ? "bg-[#F5BA27] text-[#11100E] shadow-[3px_3px_0px_#000] translate-x-[-1px] translate-y-[-1px]"
                      : "bg-[#1E1C18] text-[#FCF9F3] hover:bg-[#2A2722]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold">
                      {perfume.number}
                    </span>
                    {isSelected ? (
                      <span className="w-4 h-4 rounded-full bg-[#11100E] text-[#F5BA27] text-[10px] flex items-center justify-center font-black">
                        ✓
                      </span>
                    ) : (
                      <Plus className="w-3.5 h-3.5 text-[#A49E94]" />
                    )}
                  </div>
                  <h4 className="text-xs font-black uppercase leading-tight line-clamp-1">
                    {perfume.name}
                  </h4>
                  <p className="text-[10px] opacity-75 font-mono mt-1">
                    {perfume.categoryLabel}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-[#D94528] border-[3px] border-black rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[6px_6px_0px_#000]">
          <div>
            <div className="flex items-center space-x-2 text-xs font-black uppercase text-[#F5BA27] mb-1">
              <span>SPECIAL DISCOVERY OFFER</span>
              <span>·</span>
              <span>100% REBATE VOUCHER</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#FCF9F3]">
              3X 5ML EXTRAIT FLIGHT — ₹1,490
            </h3>
            <p className="text-xs sm:text-sm text-[#FCF9F3]/90 mt-1">
              Includes complimentary shipping across India & ₹1,490 credit code.
            </p>
          </div>

          <button
            onClick={addFlightToCart}
            disabled={flightPerfumes.length === 0}
            className={`brutal-btn-yellow px-8 py-4 rounded-md text-sm font-black uppercase tracking-wider flex items-center space-x-3 shrink-0 ${
              flightPerfumes.length === 0
                ? "opacity-50 cursor-not-allowed"
                : "shadow-[4px_4px_0px_#000]"
            }`}
          >
            <span>
              {isComplete
                ? "CLAIM DISCOVERY FLIGHT (₹1,490)"
                : `ADD FLIGHT (${flightPerfumes.length}/3 PICKED)`}
            </span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
