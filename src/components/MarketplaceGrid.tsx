"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { PERFUMES } from "@/data/perfumes";
import { Perfume, ScentCategory, BottleSize } from "@/types";
import { useCart } from "@/context/CartContext";
import { Search, Sparkles, Filter, Check, Eye } from "lucide-react";

export default function MarketplaceGrid() {
  const [activeCategory, setActiveCategory] = useState<ScentCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSizes, setSelectedSizes] = useState<Record<string, BottleSize>>({});
  const [addedIds, setAddedIds] = useState<Record<string, boolean>>({});
  const { addToCart, setSelectedPerfumeForModal } = useCart();

  const categories: { id: ScentCategory; label: string }[] = [
    { id: "all", label: "ALL FLACONS (06)" },
    { id: "woody", label: "WOODY & SMOKY" },
    { id: "solar", label: "SOLAR & CITRUS" },
    { id: "gourmand", label: "GOURMAND & WARM" },
    { id: "dark-floral", label: "DARK FLORAL" },
    { id: "fresh", label: "FRESH & GREEN" },
  ];

  const filteredPerfumes = useMemo(() => {
    return PERFUMES.filter((perfume) => {
      const matchesCategory =
        activeCategory === "all" || perfume.category === activeCategory;
      const matchesSearch =
        perfume.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        perfume.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        perfume.house.toLowerCase().includes(searchQuery.toLowerCase()) ||
        perfume.topNotes.some((n) => n.toLowerCase().includes(searchQuery.toLowerCase())) ||
        perfume.heartNotes.some((n) => n.toLowerCase().includes(searchQuery.toLowerCase())) ||
        perfume.baseNotes.some((n) => n.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleSizeChange = (perfumeId: string, size: BottleSize) => {
    setSelectedSizes((prev) => ({ ...prev, [perfumeId]: size }));
  };

  const getActiveSize = (perfumeId: string): BottleSize => {
    return selectedSizes[perfumeId] || "50ml";
  };

  const getPrice = (perfume: Perfume, size: BottleSize) => {
    if (size === "100ml") return perfume.price100ml;
    if (size === "5ml Sample") return perfume.priceSample;
    return perfume.price50ml;
  };

  const handleAddToCart = (perfume: Perfume) => {
    const size = getActiveSize(perfume.id);
    addToCart(perfume, size, 1);
    setAddedIds((prev) => ({ ...prev, [perfume.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [perfume.id]: false }));
    }, 1800);
  };

  return (
    <section id="catalog" className="bg-[#11100E] text-[#FCF9F3] py-20 px-4 sm:px-6 lg:px-8 border-b-[3px] border-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b-2 border-[#2C2924] mb-10">
          <div>
            <div className="flex items-center space-x-2 text-[#F5BA27] text-xs font-black uppercase tracking-widest mb-3">
              <Sparkles className="w-4 h-4" />
              <span>THE FULL PARFUM CATALOGUE · AUTUMN / WINTER 2026</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight leading-none text-[#FCF9F3]">
              INDIE DISTILLATIONS.
              <br />
              <span className="text-[#F5BA27]">EXTRAIT MARKETPLACE.</span>
            </h2>
          </div>

          {/* Search bar */}
          <div className="w-full lg:w-96">
            <div className="relative">
              <input
                type="text"
                placeholder="Search notes (e.g. Orris, Rum, Saffron)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#1A1815] border-2 border-black rounded-md pl-10 pr-4 py-3 text-sm text-[#FCF9F3] placeholder-[#7B7468] focus:outline-none focus:border-[#F5BA27] shadow-[3px_3px_0px_#000]"
              />
              <Search className="w-4 h-4 text-[#7B7468] absolute left-3.5 top-1/2 -translate-y-1/2" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-[#A49E94] hover:text-white"
                >
                  CLEAR
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Category Pills Filter */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-10 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded border-2 border-black text-xs font-black uppercase tracking-wider transition-all whitespace-nowrap ${
                activeCategory === cat.id
                  ? "bg-[#D94528] text-white shadow-[3px_3px_0px_#000] translate-x-[-1px] translate-y-[-1px]"
                  : "bg-[#1A1815] text-[#FCF9F3] hover:bg-[#26231E]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        {filteredPerfumes.length === 0 ? (
          <div className="text-center py-16 bg-[#1A1815] border-2 border-black rounded-xl p-8">
            <p className="text-base font-bold text-[#FCF9F3] uppercase">No olfactory flacons match your search</p>
            <p className="text-sm text-[#7B7468] mt-1">Try searching for other notes like vanilla, wood, or bergamot.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
              }}
              className="mt-4 brutal-btn-yellow px-4 py-2 rounded text-xs font-black uppercase"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredPerfumes.map((perfume) => {
              const currentSize = getActiveSize(perfume.id);
              const currentPrice = getPrice(perfume, currentSize);
              const isAdded = !!addedIds[perfume.id];

              return (
                <div
                  key={perfume.id}
                  className="bg-[#1A1815] border-[3px] border-black rounded-xl overflow-hidden shadow-[6px_6px_0px_#000] hover:shadow-[8px_8px_0px_#F5BA27] transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    {/* Image Container with Badges */}
                    <div className="relative h-64 sm:h-72 w-full bg-[#24211C] overflow-hidden border-b-2 border-black">
                      <Image
                        src={perfume.image}
                        alt={perfume.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
                        <span className="bg-[#11100E] text-[#F5BA27] border-2 border-black text-[10px] font-black uppercase px-2.5 py-1 rounded shadow-[2px_2px_0px_#000]">
                          {perfume.number} · {perfume.categoryLabel}
                        </span>
                        {perfume.badge && (
                          <span className="bg-[#D94528] text-white border-2 border-black text-[10px] font-black uppercase px-2.5 py-0.5 rounded shadow-[2px_2px_0px_#000]">
                            {perfume.badge}
                          </span>
                        )}
                      </div>

                      {/* Stock Badge */}
                      <div className="absolute top-3 right-3 z-10">
                        <span className="bg-[#FCF9F3] text-[#11100E] border-2 border-black text-[10px] font-mono font-bold px-2 py-0.5 rounded shadow-[2px_2px_0px_#000]">
                          {perfume.stockLeft} LEFT
                        </span>
                      </div>

                      {/* Quick view button overlay on hover */}
                      <button
                        onClick={() => setSelectedPerfumeForModal(perfume)}
                        className="absolute inset-x-4 bottom-3 bg-[#11100E]/90 hover:bg-[#11100E] text-[#FCF9F3] border-2 border-black py-2 rounded text-xs font-black uppercase tracking-wider flex items-center justify-center space-x-1.5 opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity shadow-[3px_3px_0px_#000]"
                      >
                        <Eye className="w-3.5 h-3.5 text-[#F5BA27]" />
                        <span>INSPECT SCENT NOTES</span>
                      </button>
                    </div>

                    {/* Content Section */}
                    <div className="p-5 sm:p-6">
                      <div className="flex items-center justify-between text-xs text-[#A49E94] mb-1 font-mono">
                        <span>{perfume.house}</span>
                        <span className="text-[#F5BA27]">★ {perfume.rating} ({perfume.reviewCount})</span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#FCF9F3] mb-1 group-hover:text-[#F5BA27] transition-colors">
                        {perfume.name}
                      </h3>

                      <p className="text-xs font-semibold text-[#D94528] mb-3">
                        {perfume.tagline}
                      </p>

                      <p className="text-xs text-[#A49E94] line-clamp-2 leading-relaxed mb-4">
                        {perfume.description}
                      </p>

                      {/* Vibe Sticker Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {perfume.vibeStickers.slice(0, 2).map((stk, idx) => (
                          <span
                            key={idx}
                            className={`text-[9px] font-black uppercase px-2 py-0.5 border border-black rounded ${stk.color}`}
                          >
                            {stk.text}
                          </span>
                        ))}
                        <span className="text-[9px] font-mono font-bold px-2 py-0.5 border border-[#333] rounded bg-black text-[#A49E94]">
                          {perfume.longevity}
                        </span>
                      </div>

                      {/* Size Selector Tabs */}
                      <div className="bg-[#11100E] border-2 border-black p-1 rounded-md flex items-center gap-1 mb-4">
                        {(["50ml", "100ml", "5ml Sample"] as BottleSize[]).map((size) => (
                          <button
                            key={size}
                            onClick={() => handleSizeChange(perfume.id, size)}
                            className={`flex-1 py-1.5 text-[10px] font-black uppercase rounded transition-all ${
                              currentSize === size
                                ? "bg-[#F5BA27] text-[#11100E] shadow-[1px_1px_0px_#000]"
                                : "text-[#A49E94] hover:text-white"
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer with Price and Add to Cart */}
                  <div className="p-5 sm:p-6 pt-0 border-t border-[#2C2924] mt-2">
                    <div className="flex items-center justify-between gap-3 pt-4">
                      <div>
                        <span className="text-[10px] text-[#A49E94] uppercase font-mono block">
                          FORMAT: {currentSize}
                        </span>
                        <span className="text-lg sm:text-xl font-black text-[#FCF9F3]">
                          ₹{currentPrice.toLocaleString("en-IN")}
                        </span>
                      </div>

                      <button
                        onClick={() => handleAddToCart(perfume)}
                        className="brutal-btn-cream px-4 py-2.5 rounded text-xs font-black uppercase tracking-wider flex items-center space-x-1.5"
                      >
                        {isAdded ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span>ADDED!</span>
                          </>
                        ) : (
                          <span>ADD TO BAG</span>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
