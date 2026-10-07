"use client";

import React from "react";
import { ArrowRight, Sparkles, CheckCircle2, ShieldAlert } from "lucide-react";

export default function ClaimSlotRoutine() {
  const scrollToCatalog = () => {
    const el = document.getElementById("catalog");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-[#11100E] text-[#FCF9F3] py-20 px-4 sm:px-6 lg:px-8 border-b-[3px] border-black relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7">
            <div className="inline-block bg-[#D94528] text-white border-2 border-black font-black text-xs uppercase px-3 py-1 rounded shadow-[2px_2px_0px_#000] mb-4">
              BATCH ALLOCATION PROTOCOL
            </div>

            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight leading-none text-[#FCF9F3] mb-4">
              BEFORE IT’S GONE,
              <br />
              <span className="text-[#F5BA27]">CLAIM YOUR FLACON.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#A49E94] leading-relaxed max-w-xl mb-8">
              Because our maceration takes six months, each batch is strictly capped at 120 flacons.
              Pre-allocated orders guarantee your bottle from the resting cask.
            </p>

            {/* 3 Step Ordered Routine matching Moodang */}
            <div className="space-y-3 font-black text-sm sm:text-base uppercase tracking-wider mb-8">
              <div
                onClick={scrollToCatalog}
                className="flex items-center justify-between p-4 bg-[#1A1815] border-2 border-black rounded-lg hover:border-[#F5BA27] hover:bg-[#25221C] transition-all cursor-pointer shadow-[3px_3px_0px_#000]"
              >
                <span className="text-[#FCF9F3]">01 CHOOSE YOUR SCENT MOOD</span>
                <ArrowRight className="w-4 h-4 text-[#F5BA27]" />
              </div>

              <div
                onClick={scrollToCatalog}
                className="flex items-center justify-between p-4 bg-[#1A1815] border-2 border-black rounded-lg hover:border-[#F5BA27] hover:bg-[#25221C] transition-all cursor-pointer shadow-[3px_3px_0px_#000]"
              >
                <span className="text-[#FCF9F3]">02 PICK FLACON VOLUME (50ML / 100ML)</span>
                <ArrowRight className="w-4 h-4 text-[#F5BA27]" />
              </div>

              <div className="flex items-center justify-between p-4 bg-[#F5BA27] text-[#11100E] border-2 border-black rounded-lg shadow-[3px_3px_0px_#000]">
                <span>03 COMPLIMENTARY 5ML TRAVEL ATOMIZER INCLUDED</span>
                <CheckCircle2 className="w-5 h-5 text-[#11100E]" />
              </div>
            </div>

            <button
              onClick={scrollToCatalog}
              className="brutal-btn-cream px-8 py-4 rounded-md text-sm font-black uppercase tracking-wider flex items-center space-x-3 shadow-[4px_4px_0px_#000]"
            >
              <span>EXPLORE ACTIVE BATCHES</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Column: Live Batch Status Box */}
          <div className="lg:col-span-5">
            <div className="bg-[#1A1815] border-[3px] border-black rounded-2xl p-6 sm:p-8 shadow-[8px_8px_0px_#000]">
              <div className="flex items-center justify-between pb-4 border-b-2 border-black mb-6">
                <div>
                  <span className="text-[10px] font-mono text-[#A49E94] uppercase tracking-wider block">
                    CURRENT VAULT STATUS
                  </span>
                  <span className="text-xl font-black text-[#F5BA27] uppercase">
                    BATCH NO. 04 · LIVE
                  </span>
                </div>
                <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
              </div>

              {/* Progress Allocation Bar */}
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-xs font-mono font-bold">
                  <span className="text-[#A49E94]">ALLOCATION:</span>
                  <span className="text-[#D94528]">87% RESERVED</span>
                </div>
                <div className="h-4 bg-[#11100E] border-2 border-black rounded-full overflow-hidden p-0.5">
                  <div
                    className="h-full bg-gradient-to-r from-[#F5BA27] to-[#D94528] rounded-full"
                    style={{ width: "87%" }}
                  />
                </div>
                <div className="text-[11px] font-mono text-right text-[#A49E94]">
                  Only 16 flacons remain for this cycle
                </div>
              </div>

              {/* Feature list */}
              <div className="space-y-3 text-xs font-mono text-[#FCF9F3]/90 bg-[#11100E] p-4 rounded-lg border border-[#333] mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-[#F5BA27]">✦</span>
                  <span>Dispatched in climate-secure insulated boxing</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#F5BA27]">✦</span>
                  <span>Hand-waxed seal with serial numbered batch tag</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#F5BA27]">✦</span>
                  <span>Try first guarantee: 5ml sample vial included on the side</span>
                </div>
              </div>

              <div className="text-center">
                <span className="text-[11px] font-black uppercase text-[#D94528] tracking-wider block">
                  DELHI · MUMBAI · BENGALURU SAME-DAY DISPATCH
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
