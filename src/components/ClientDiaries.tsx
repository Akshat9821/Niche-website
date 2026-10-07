"use client";

import React from "react";
import { CLIENT_REVIEWS } from "@/data/perfumes";
import { Star, Quote, ArrowUpRight } from "lucide-react";

export default function ClientDiaries() {
  return (
    <section id="client-diaries" className="bg-[#F6F1E8] text-[#11100E] py-20 px-4 sm:px-6 lg:px-8 border-b-[3px] border-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.25em] text-[#D94528] bg-[#F5BA27]/30 border border-[#D94528]/30 px-3 py-1 rounded">
              VERIFIED NOSE DIARIES
            </span>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight leading-none text-[#11100E] mt-3">
              GOOD MOODS,
              <br />
              <span className="text-[#D94528]">DELIVERED.</span>
            </h2>
          </div>

          <div className="max-w-xs text-sm font-semibold text-[#555]">
            Unfiltered notes from collectors, connoisseurs and first-time flacon owners across Delhi, Mumbai & beyond.
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CLIENT_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-[#FCF9F3] border-[3px] border-black rounded-xl p-6 shadow-[6px_6px_0px_#11100E] hover:shadow-[8px_8px_0px_#D94528] transition-all flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center space-x-1 text-[#F5BA27] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F5BA27] text-[#11100E]" />
                  ))}
                </div>

                {/* Big Quote text in bold uppercase */}
                <p className="text-lg sm:text-xl font-black uppercase leading-snug tracking-tight text-[#11100E] mb-6">
                  {review.quote}
                </p>
              </div>

              {/* Author & Diary Meta */}
              <div className="pt-4 border-t-2 border-black/20">
                <div className="flex items-center justify-between text-[11px] font-mono font-bold text-[#D94528] uppercase mb-1">
                  <span>{review.diaryNumber}</span>
                  <span className="bg-[#F5BA27] text-black px-1.5 py-0.5 rounded text-[9px]">
                    VERIFIED
                  </span>
                </div>
                <div className="font-black text-sm uppercase text-[#11100E]">
                  {review.author}
                </div>
                <div className="text-xs text-[#7B7468] font-mono mt-0.5">
                  {review.city}
                </div>
                <div className="text-[10px] text-[#A49E94] font-mono mt-1">
                  {review.flaconPurchased}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
