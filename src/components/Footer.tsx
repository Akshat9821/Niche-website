"use client";

import React from "react";
import { ArrowUpRight, Instagram, Mail, Phone, MapPin, Sparkles } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#11100E] text-[#FCF9F3] pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-t-2 border-black relative">
      <div className="max-w-7xl mx-auto">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b-2 border-[#2C2924]">
          {/* Col 1: Brand intro */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-1">
              <span className="w-8 h-8 bg-[#FCF9F3] text-[#11100E] border-2 border-black font-black text-lg flex items-center justify-center">
                N
              </span>
              <span className="w-8 h-8 bg-[#D94528] text-[#FCF9F3] border-2 border-black font-black text-lg flex items-center justify-center">
                I
              </span>
              <span className="w-8 h-8 bg-[#F5BA27] text-[#11100E] border-2 border-black font-black text-lg flex items-center justify-center">
                C
              </span>
              <span className="w-8 h-8 bg-[#FCF9F3] text-[#11100E] border-2 border-black font-black text-lg flex items-center justify-center">
                H
              </span>
              <span className="w-8 h-8 bg-[#D94528] text-[#FCF9F3] border-2 border-black font-black text-lg flex items-center justify-center">
                E
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#A49E94] leading-relaxed max-w-sm">
              Artisanal luxury parfumerie. 180-day cold maceration in small-batch releases. 35% Extrait de Parfum strength. Formulated with zero synthetic shortcuts.
            </p>
            <div className="flex items-center space-x-2 text-xs font-mono text-[#F5BA27]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>DELHI + MUMBAI + BENGALURU + WORLDWIDE</span>
            </div>
          </div>

          {/* Col 2: Olfactory Collection */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-[#F5BA27] mb-4">
              COLLECTION
            </h4>
            <ul className="space-y-2.5 text-xs font-bold text-[#FCF9F3]/80 uppercase">
              <li>
                <a href="#mood-picker" className="hover:text-[#F5BA27] transition-colors">
                  Smoked Orris & Leather
                </a>
              </li>
              <li>
                <a href="#mood-picker" className="hover:text-[#F5BA27] transition-colors">
                  Solar Neroli & Sea Salt
                </a>
              </li>
              <li>
                <a href="#mood-picker" className="hover:text-[#F5BA27] transition-colors">
                  Dark Rum & Balsamic Vanilla
                </a>
              </li>
              <li>
                <a href="#mood-picker" className="hover:text-[#F5BA27] transition-colors">
                  Cypriol & Kyoto Incense
                </a>
              </li>
              <li>
                <a href="#mood-picker" className="hover:text-[#F5BA27] transition-colors">
                  Cherry Incense & Saffron
                </a>
              </li>
              <li>
                <a href="#discovery-flight" className="hover:text-[#F5BA27] transition-colors text-[#F5BA27]">
                  3-Scent Discovery Flight ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Brand & Routine */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-[#F5BA27] mb-4">
              THE HOUSE
            </h4>
            <ul className="space-y-2.5 text-xs font-bold text-[#FCF9F3]/80 uppercase">
              <li>
                <a href="#the-method" className="hover:text-[#F5BA27] transition-colors">
                  The Niche Method
                </a>
              </li>
              <li>
                <a href="#the-method" className="hover:text-[#F5BA27] transition-colors">
                  180-Day Cold Maceration
                </a>
              </li>
              <li>
                <a href="#client-diaries" className="hover:text-[#F5BA27] transition-colors">
                  Client Diaries
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-[#F5BA27] transition-colors">
                  Batch Allocation Routine
                </a>
              </li>
              <li>
                <span className="text-[#A49E94] cursor-not-allowed">
                  Bespoke Formulation (Waitlist)
                </span>
              </li>
            </ul>
          </div>

          {/* Col 4: Concierge & Contact */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-[#F5BA27] mb-4">
              CONCIERGE
            </h4>
            <div className="space-y-3 text-xs font-mono text-[#FCF9F3]/90">
              <a
                href="mailto:concierge@nicheparfums.com"
                className="flex items-center space-x-2 hover:text-[#F5BA27] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#F5BA27]" />
                <span>concierge@niche.com</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 hover:text-[#F5BA27] transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-[#F5BA27]" />
                <span>Instagram @nicheparfums ↗</span>
              </a>
              <a
                href="tel:+919811024900"
                className="flex items-center space-x-2 hover:text-[#F5BA27] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#F5BA27]" />
                <span>+91 98110 24900</span>
              </a>
              <div className="flex items-center space-x-2 text-[#A49E94]">
                <MapPin className="w-3.5 h-3.5 text-[#D94528]" />
                <span>Hauz Khas, New Delhi 110016</span>
              </div>
            </div>
          </div>
        </div>

        {/* Big Giant Brutalist Footer Logo Wordmark like Moodang */}
        <div className="py-12 sm:py-16 text-center select-none overflow-hidden">
          <div
            onClick={scrollToTop}
            className="cursor-pointer text-5xl sm:text-8xl md:text-9xl lg:text-[140px] font-black tracking-tight text-[#FCF9F3]/90 hover:text-[#F5BA27] transition-colors leading-none uppercase font-display"
          >
            N I C H E
          </div>
          <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.3em] text-[#7B7468] mt-2">
            EXTRAIT DE PARFUM · ARTISANAL SCENT HOUSE
          </p>
        </div>

        {/* Bottom Sub-footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#7B7468] pt-6 border-t border-[#2C2924] gap-4">
          <div className="flex flex-wrap items-center gap-4">
            <span>© 2026 NICHE LABS PVT. LTD.</span>
            <span>·</span>
            <span>PRICES INCL. 18% GST</span>
            <span>·</span>
            <span>PAYMENTS POWERED BY RAZORPAY SECURE</span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="hover:text-white cursor-pointer">PRIVACY</span>
            <span className="hover:text-white cursor-pointer">TERMS</span>
            <span className="hover:text-white cursor-pointer">SHIPPING</span>
            <button
              onClick={scrollToTop}
              className="text-[#F5BA27] hover:underline font-bold"
            >
              TOP ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
