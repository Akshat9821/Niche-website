"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

export default function NewsletterBanner() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <section className="bg-[#D94528] text-[#FCF9F3] py-20 px-4 sm:px-6 lg:px-8 border-b-[3px] border-black relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-dots opacity-20 pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center space-x-2 bg-[#11100E] text-[#F5BA27] border-2 border-black font-black text-xs uppercase px-3 py-1 rounded shadow-[3px_3px_0px_#000] mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>JOIN THE PRIVATE DISPATCH LIST</span>
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-none text-[#FCF9F3] mb-4">
          GET YOUR SCENT.
          <br />
          <span className="text-[#F5BA27]">PERFUMES FOR ALL MOODS.</span>
        </h2>

        <p className="text-sm sm:text-base text-[#FCF9F3]/90 font-medium max-w-xl mx-auto mb-8">
          Join our private register to receive secret password keys 2 hours ahead of public batch drops. Plus ₹500 off your first flacon.
        </p>

        {subscribed ? (
          <div className="bg-[#11100E] text-[#FCF9F3] border-[3px] border-black p-6 rounded-xl max-w-md mx-auto shadow-[6px_6px_0px_#000]">
            <div className="flex items-center justify-center space-x-2 text-[#F5BA27] font-black uppercase text-sm mb-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>YOU ARE ON THE REGISTER!</span>
            </div>
            <p className="text-xs text-[#A49E94] font-mono">
              Use code <strong className="text-[#F5BA27] underline">NICHE10</strong> at checkout for 10% off your entire cart.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto"
          >
            <input
              type="email"
              required
              placeholder="Enter your email for private access..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:flex-1 bg-[#FCF9F3] text-[#11100E] placeholder-[#7B7468] border-[3px] border-black px-5 py-3.5 rounded-md text-sm font-bold focus:outline-none focus:ring-2 focus:ring-[#F5BA27] shadow-[4px_4px_0px_#000]"
            />
            <button
              type="submit"
              className="w-full sm:w-auto brutal-btn-yellow px-8 py-3.5 rounded-md text-xs sm:text-sm font-black uppercase tracking-wider flex items-center justify-center space-x-2 shrink-0 shadow-[4px_4px_0px_#000]"
            >
              <span>CLAIM KEY</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
