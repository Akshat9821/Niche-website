"use client";

import React, { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, Sparkles, Menu, X, Compass } from "lucide-react";

export default function Navbar() {
  const { totalCount, setIsCartOpen, setIsQuizOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`sticky top-0 z-30 w-full transition-all duration-200 border-b-2 border-black ${
        isScrolled
          ? "bg-[#11100E]/95 backdrop-blur-md py-3 shadow-md"
          : "bg-[#11100E] py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo inspired by Moodang's boxed letters */}
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <div className="flex items-center space-x-1">
            <span className="w-8 h-9 sm:w-9 sm:h-10 bg-[#FCF9F3] text-[#11100E] border-2 border-black font-black text-xl flex items-center justify-center shadow-[2px_2px_0px_#000]">
              N
            </span>
            <span className="w-8 h-9 sm:w-9 sm:h-10 bg-[#D94528] text-[#FCF9F3] border-2 border-black font-black text-xl flex items-center justify-center shadow-[2px_2px_0px_#000]">
              I
            </span>
            <span className="w-8 h-9 sm:w-9 sm:h-10 bg-[#F5BA27] text-[#11100E] border-2 border-black font-black text-xl flex items-center justify-center shadow-[2px_2px_0px_#000]">
              C
            </span>
            <span className="w-8 h-9 sm:w-9 sm:h-10 bg-[#FCF9F3] text-[#11100E] border-2 border-black font-black text-xl flex items-center justify-center shadow-[2px_2px_0px_#000]">
              H
            </span>
            <span className="w-8 h-9 sm:w-9 sm:h-10 bg-[#D94528] text-[#FCF9F3] border-2 border-black font-black text-xl flex items-center justify-center shadow-[2px_2px_0px_#000]">
              E
            </span>
          </div>
          <div className="hidden sm:flex flex-col border-l-2 border-[#333] pl-3">
            <span className="text-[10px] tracking-[0.25em] font-black text-[#F5BA27] uppercase">
              PARFUMERIE
            </span>
            <span className="text-[9px] tracking-wider text-[#A49E94] uppercase font-mono">
              EXTRAIT DE PARFUM
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-7 text-xs font-bold tracking-widest uppercase text-[#FCF9F3]">
          <button
            onClick={() => scrollToSection("mood-picker")}
            className="hover:text-[#F5BA27] transition-colors"
          >
            SCENT MOODS
          </button>
          <button
            onClick={() => scrollToSection("catalog")}
            className="hover:text-[#F5BA27] transition-colors"
          >
            MARKETPLACE
          </button>
          <button
            onClick={() => scrollToSection("the-method")}
            className="hover:text-[#F5BA27] transition-colors"
          >
            THE METHOD
          </button>
          <button
            onClick={() => scrollToSection("discovery-flight")}
            className="hover:text-[#F5BA27] transition-colors flex items-center gap-1.5"
          >
            <span>DISCOVERY FLIGHT</span>
            <span className="bg-[#D94528] text-white text-[9px] px-1.5 py-0.5 rounded-sm border border-black font-black">
              POPULAR
            </span>
          </button>
          <button
            onClick={() => scrollToSection("client-diaries")}
            className="hover:text-[#F5BA27] transition-colors"
          >
            DIARIES
          </button>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          {/* Scent Quiz trigger */}
          <button
            onClick={() => setIsQuizOpen(true)}
            className="hidden md:flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-[#F5BA27] hover:text-white transition-colors bg-[#1E1C18] px-3 py-2 border border-[#333] rounded-sm"
          >
            <Compass className="w-3.5 h-3.5 text-[#F5BA27]" />
            <span>SCENT QUIZ</span>
          </button>

          {/* Cart Trigger */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="flex items-center space-x-1.5 text-xs font-black tracking-widest uppercase text-[#FCF9F3] hover:text-[#F5BA27] transition-colors py-2 px-1"
          >
            <ShoppingBag className="w-4 h-4 text-[#F5BA27]" />
            <span>CART ({totalCount})</span>
          </button>

          {/* Primary CTA (Chunky cream button like Moodang's "GET PIZZA") */}
          <button
            onClick={() => scrollToSection("mood-picker")}
            className="brutal-btn-cream px-4 py-2 sm:px-6 sm:py-2.5 rounded-md text-xs sm:text-sm font-black uppercase tracking-wider flex items-center space-x-1.5"
          >
            <span>GET SCENT</span>
            <span className="hidden sm:inline">→</span>
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#FCF9F3] border border-[#333] rounded bg-[#1A1815]"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1A1815] border-t-2 border-black px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3 text-sm font-bold tracking-widest uppercase">
            <button
              onClick={() => scrollToSection("mood-picker")}
              className="text-left py-2 border-b border-[#2C2924] hover:text-[#F5BA27]"
            >
              01 · SCENT MOODS
            </button>
            <button
              onClick={() => scrollToSection("catalog")}
              className="text-left py-2 border-b border-[#2C2924] hover:text-[#F5BA27]"
            >
              02 · FULL MARKETPLACE
            </button>
            <button
              onClick={() => scrollToSection("the-method")}
              className="text-left py-2 border-b border-[#2C2924] hover:text-[#F5BA27]"
            >
              03 · THE NICHE METHOD
            </button>
            <button
              onClick={() => scrollToSection("discovery-flight")}
              className="text-left py-2 border-b border-[#2C2924] hover:text-[#F5BA27] flex items-center justify-between"
            >
              <span>04 · DISCOVERY FLIGHT BUILDER</span>
              <span className="bg-[#D94528] text-white text-[10px] px-2 py-0.5 rounded-sm">
                RS. 1,490
              </span>
            </button>
            <button
              onClick={() => scrollToSection("client-diaries")}
              className="text-left py-2 border-b border-[#2C2924] hover:text-[#F5BA27]"
            >
              05 · CLIENT DIARIES
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsQuizOpen(true);
              }}
              className="text-left py-2 text-[#F5BA27] flex items-center space-x-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>TAKE 30-SEC SCENT FINDER QUIZ</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
