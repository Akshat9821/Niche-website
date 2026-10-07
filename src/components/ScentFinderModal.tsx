"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PERFUMES } from "@/data/perfumes";
import { useCart } from "@/context/CartContext";
import { X, Sparkles, Compass, Check, ArrowRight, RotateCcw } from "lucide-react";

export default function ScentFinderModal() {
  const { isQuizOpen, setIsQuizOpen, addToCart, setSelectedPerfumeForModal } = useCart();
  const [step, setStep] = useState(1);
  const [selectedVibe, setSelectedVibe] = useState("");
  const [selectedIntensity, setSelectedIntensity] = useState("");
  const [matchedPerfumeId, setMatchedPerfumeId] = useState("smoked-orris-leather");

  if (!isQuizOpen) return null;

  const handleVibeSelect = (vibeId: string, defaultMatch: string) => {
    setSelectedVibe(vibeId);
    setMatchedPerfumeId(defaultMatch);
    setStep(2);
  };

  const handleIntensitySelect = (intensity: string) => {
    setSelectedIntensity(intensity);
    setStep(3); // Result
  };

  const resetQuiz = () => {
    setStep(1);
    setSelectedVibe("");
    setSelectedIntensity("");
  };

  const matchedPerfume =
    PERFUMES.find((p) => p.id === matchedPerfumeId) || PERFUMES[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={() => setIsQuizOpen(false)}
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-2xl bg-[#FCF9F3] text-[#11100E] border-[3px] border-black rounded-2xl overflow-hidden shadow-[8px_8px_0px_#11100E] my-8">
        {/* Header */}
        <div className="bg-[#11100E] text-[#FCF9F3] p-5 border-b-2 border-black flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Compass className="w-5 h-5 text-[#F5BA27]" />
            <span className="text-sm sm:text-base font-black uppercase tracking-wider text-[#F5BA27]">
              NICHE 30-SEC SCENT FINDER
            </span>
          </div>

          <button
            onClick={() => setIsQuizOpen(false)}
            className="w-8 h-8 rounded-full border border-[#444] bg-[#222] hover:bg-white hover:text-black flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Quiz Steps */}
        <div className="p-6 sm:p-8">
          {step === 1 && (
            <div className="space-y-6">
              <div className="text-center">
                <span className="bg-[#F5BA27] text-[#11100E] text-xs font-black uppercase px-3 py-1 rounded border border-black shadow-[2px_2px_0px_#000]">
                  QUESTION 01 OF 02
                </span>
                <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#11100E] mt-3">
                  WHAT ATMOSPHERE ARE YOU CRAVING?
                </h3>
                <p className="text-xs text-[#666] font-mono mt-1">
                  Choose the olfactory landscape that moves you.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <button
                  onClick={() =>
                    handleVibeSelect("smoky", "smoked-orris-leather")
                  }
                  className="p-4 bg-[#FCF9F3] hover:bg-[#F5BA27] border-2 border-black rounded-xl text-left transition-all shadow-[3px_3px_0px_#000] hover:translate-x-[-1px] hover:translate-y-[-1px]"
                >
                  <span className="text-[10px] font-mono font-bold text-[#D94528] block">
                    VIBE 01
                  </span>
                  <div className="font-black text-sm uppercase text-[#11100E] mt-1">
                    Midnight Smoke & Suede
                  </div>
                  <p className="text-xs text-[#555] mt-1">
                    Dark orris root, charred birch, and leather armchairs.
                  </p>
                </button>

                <button
                  onClick={() =>
                    handleVibeSelect("solar", "solar-neroli-sea-salt")
                  }
                  className="p-4 bg-[#FCF9F3] hover:bg-[#F5BA27] border-2 border-black rounded-xl text-left transition-all shadow-[3px_3px_0px_#000] hover:translate-x-[-1px] hover:translate-y-[-1px]"
                >
                  <span className="text-[10px] font-mono font-bold text-[#D94528] block">
                    VIBE 02
                  </span>
                  <div className="font-black text-sm uppercase text-[#11100E] mt-1">
                    Aegean Salt & Citrus
                  </div>
                  <p className="text-xs text-[#555] mt-1">
                    Solar neroli, sea cliffs, and sun-baked driftwood.
                  </p>
                </button>

                <button
                  onClick={() =>
                    handleVibeSelect("gourmand", "dark-rum-balsamic-vanilla")
                  }
                  className="p-4 bg-[#FCF9F3] hover:bg-[#F5BA27] border-2 border-black rounded-xl text-left transition-all shadow-[3px_3px_0px_#000] hover:translate-x-[-1px] hover:translate-y-[-1px]"
                >
                  <span className="text-[10px] font-mono font-bold text-[#D94528] block">
                    VIBE 03
                  </span>
                  <div className="font-black text-sm uppercase text-[#11100E] mt-1">
                    Boozy Rum & Dark Vanilla
                  </div>
                  <p className="text-xs text-[#555] mt-1">
                    Aged Demerara rum, smoked cacao, and bourbon vanilla pods.
                  </p>
                </button>

                <button
                  onClick={() =>
                    handleVibeSelect("incense", "cypriol-black-pepper")
                  }
                  className="p-4 bg-[#FCF9F3] hover:bg-[#F5BA27] border-2 border-black rounded-xl text-left transition-all shadow-[3px_3px_0px_#000] hover:translate-x-[-1px] hover:translate-y-[-1px]"
                >
                  <span className="text-[10px] font-mono font-bold text-[#D94528] block">
                    VIBE 04
                  </span>
                  <div className="font-black text-sm uppercase text-[#11100E] mt-1">
                    Kyoto Temple & Rain
                  </div>
                  <p className="text-xs text-[#555] mt-1">
                    Hinoki cedarwood, earthy cypriol root, and frankincense.
                  </p>
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="text-center">
                <span className="bg-[#D94528] text-white text-xs font-black uppercase px-3 py-1 rounded border border-black shadow-[2px_2px_0px_#000]">
                  QUESTION 02 OF 02
                </span>
                <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#11100E] mt-3">
                  WHAT LEVEL OF PRESENCE DO YOU DEMAND?
                </h3>
                <p className="text-xs text-[#666] font-mono mt-1">
                  How much sillage trail should your flacon leave behind?
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <button
                  onClick={() => handleIntensitySelect("nuclear")}
                  className="w-full p-4 bg-[#FCF9F3] hover:bg-[#F5BA27] border-2 border-black rounded-xl text-left transition-all shadow-[3px_3px_0px_#000]"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-black text-sm uppercase text-[#11100E]">
                      NUCLEAR BEAST MODE (16+ HOURS)
                    </span>
                    <span className="text-xs font-mono font-bold bg-[#D94528] text-white px-2 py-0.5 rounded">
                      MAX IMPACT
                    </span>
                  </div>
                  <p className="text-xs text-[#555] mt-1 font-mono">
                    You walk into a room and command attention. Scent trail lingers for hours.
                  </p>
                </button>

                <button
                  onClick={() => handleIntensitySelect("enveloping")}
                  className="w-full p-4 bg-[#FCF9F3] hover:bg-[#F5BA27] border-2 border-black rounded-xl text-left transition-all shadow-[3px_3px_0px_#000]"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-black text-sm uppercase text-[#11100E]">
                      ENVELOPING AURA (12+ HOURS)
                    </span>
                    <span className="text-xs font-mono font-bold bg-[#324E39] text-white px-2 py-0.5 rounded">
                      SOPHISTICATED
                    </span>
                  </div>
                  <p className="text-xs text-[#555] mt-1 font-mono">
                    Distinct bubble of luxury that draws people closer without overpowering.
                  </p>
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6 text-center">
              <div className="inline-block bg-emerald-100 text-emerald-900 border-2 border-emerald-700 px-3.5 py-1 rounded text-xs font-black uppercase shadow-[2px_2px_0px_#000]">
                98.4% OLFACTORY MATCH DETECTED
              </div>

              <h3 className="text-3xl sm:text-4xl font-black uppercase text-[#11100E] tracking-tight">
                YOUR SIGNATURE SCENT IS:
                <br />
                <span className="text-[#D94528]">{matchedPerfume.name}</span>
              </h3>

              {/* Matched Product Card */}
              <div className="bg-[#11100E] text-[#FCF9F3] border-[3px] border-black rounded-xl p-6 text-left flex flex-col sm:flex-row gap-6 items-center shadow-[6px_6px_0px_#F5BA27]">
                <div className="relative w-36 h-36 rounded-lg overflow-hidden border-2 border-black shrink-0 bg-[#222]">
                  <img
                    src={matchedPerfume.image}
                    alt={matchedPerfume.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="bg-[#D94528] text-white text-[10px] font-black uppercase px-2 py-0.5 rounded">
                      {matchedPerfume.subtitle}
                    </span>
                    <span className="text-[10px] font-mono text-[#A49E94]">
                      {matchedPerfume.concentration}
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-[#F5BA27]">
                    {matchedPerfume.tagline}
                  </p>

                  <p className="text-xs text-[#FCF9F3]/80 line-clamp-2">
                    {matchedPerfume.description}
                  </p>

                  <div className="text-sm font-black text-[#FCF9F3] pt-1">
                    ₹{matchedPerfume.price50ml.toLocaleString("en-IN")}{" "}
                    <span className="text-xs font-mono font-normal text-[#A49E94]">
                      (50ml Extrait)
                    </span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={() => {
                    addToCart(matchedPerfume, "50ml", 1);
                    setIsQuizOpen(false);
                  }}
                  className="w-full sm:w-auto brutal-btn-red px-8 py-3.5 rounded text-xs sm:text-sm font-black uppercase tracking-wider flex items-center justify-center space-x-2"
                >
                  <span>CLAIM THIS MATCH (50ML)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => {
                    setSelectedPerfumeForModal(matchedPerfume);
                    setIsQuizOpen(false);
                  }}
                  className="w-full sm:w-auto brutal-btn-yellow px-6 py-3.5 rounded text-xs sm:text-sm font-black uppercase tracking-wider"
                >
                  INSPECT SCENT NOTES
                </button>

                <button
                  onClick={resetQuiz}
                  className="text-xs font-mono font-bold text-[#666] hover:text-black flex items-center gap-1 py-2"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>RETAKE</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
