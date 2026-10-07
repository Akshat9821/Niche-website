"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Perfume, BottleSize, CartItem } from "@/types";
import { PERFUMES } from "@/data/perfumes";

interface CartContextType {
  items: CartItem[];
  addToCart: (perfume: Perfume, size?: BottleSize, quantity?: number) => void;
  removeFromCart: (perfumeId: string, size: BottleSize) => void;
  updateQuantity: (perfumeId: string, size: BottleSize, change: number) => void;
  clearCart: () => void;
  totalCount: number;
  subtotal: number;
  discount: number;
  shipping: number;
  tax: number;
  grandTotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
  isQuizOpen: boolean;
  setIsQuizOpen: (open: boolean) => void;
  selectedPerfumeForModal: Perfume | null;
  setSelectedPerfumeForModal: (perfume: Perfume | null) => void;
  couponCode: string;
  appliedCoupon: string | null;
  applyCoupon: (code: string) => { success: boolean; message: string };
  removeCoupon: () => void;
  flightPerfumes: Perfume[];
  toggleFlightPerfume: (perfume: Perfume) => void;
  addFlightToCart: () => void;
  orderCompleted: boolean;
  setOrderCompleted: (completed: boolean) => void;
  lastOrderId: string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [selectedPerfumeForModal, setSelectedPerfumeForModal] = useState<Perfume | null>(null);
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [flightPerfumes, setFlightPerfumes] = useState<Perfume[]>([]);
  const [orderCompleted, setOrderCompleted] = useState(false);
  const [lastOrderId, setLastOrderId] = useState("");

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("niche_cart");
      if (saved) {
        const parsed: CartItem[] = JSON.parse(saved);
        // Sync perfume image & details with latest catalog data
        const synced = parsed.map((item) => {
          const fresh = PERFUMES.find((p) => p.id === item.perfume.id);
          if (fresh) {
            return {
              ...item,
              perfume: {
                ...item.perfume,
                image: fresh.image,
              },
            };
          }
          return item;
        });
        setItems(synced);
      }
    } catch {
      // ignore
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("niche_cart", JSON.stringify(items));
    } catch {
      // ignore
    }
  }, [items]);

  const addToCart = (perfume: Perfume, size: BottleSize = "50ml", quantity: number = 1) => {
    let price = perfume.price50ml;
    if (size === "100ml") price = perfume.price100ml;
    if (size === "5ml Sample") price = perfume.priceSample;

    setItems((prev) => {
      const existing = prev.find(
        (item) => item.perfume.id === perfume.id && item.size === size
      );
      if (existing) {
        return prev.map((item) =>
          item.perfume.id === perfume.id && item.size === size
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...prev,
        {
          id: `${perfume.id}-${size}`,
          perfume,
          size,
          price,
          quantity,
        },
      ];
    });

    setIsCartOpen(true);
  };

  const removeFromCart = (perfumeId: string, size: BottleSize) => {
    setItems((prev) =>
      prev.filter(
        (item) => !(item.perfume.id === perfumeId && item.size === size)
      )
    );
  };

  const updateQuantity = (perfumeId: string, size: BottleSize, change: number) => {
    setItems((prev) =>
      prev
        .map((item) => {
          if (item.perfume.id === perfumeId && item.size === size) {
            const newQty = item.quantity + change;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const clearCart = () => {
    setItems([]);
    setAppliedCoupon(null);
  };

  const toggleFlightPerfume = (perfume: Perfume) => {
    setFlightPerfumes((prev) => {
      if (prev.some((p) => p.id === perfume.id)) {
        return prev.filter((p) => p.id !== perfume.id);
      }
      if (prev.length >= 3) {
        // replace last
        return [prev[0], prev[1], perfume];
      }
      return [...prev, perfume];
    });
  };

  const addFlightToCart = () => {
    if (flightPerfumes.length === 0) return;
    const flightTitle = `Custom Scent Flight (${flightPerfumes.map((p) => p.subtitle).join(", ")})`;
    const mockPerfume: Perfume = {
      id: `flight-${Date.now()}`,
      number: "FLIGHT",
      name: "3-SCENT DISCOVERY FLIGHT",
      subtitle: flightTitle,
      tagline: flightPerfumes.map((p) => p.name).join(" · "),
      category: "all",
      categoryLabel: "Discovery Set",
      house: "NICHE Curated",
      nose: "Bespoke Selection",
      concentration: "Extrait de Parfum (3x 5ml Vials)",
      description: `Custom curated 3x5ml discovery flight containing: ${flightPerfumes.map((p) => p.name).join(", ")}. Includes Rs. 1,490 voucher valid against your next full 50ml or 100ml flacon.`,
      topNotes: ["Curated Flight"],
      heartNotes: ["Hand-poured 5ml atomizers"],
      baseNotes: ["Redeemable flacon credit"],
      vibeStickers: [
        { text: "3X 5ML VIALS", color: "bg-[#FFFDF7] text-black border-black", rotation: "-rotate-2" },
        { text: "100% REBATE", color: "bg-[#F5BA27] text-black border-black", rotation: "rotate-2" },
      ],
      price50ml: 1490,
      price100ml: 1490,
      priceSample: 1490,
      longevity: "12+ Hours",
      sillage: "Enveloping",
      themeColor: "#F5BA27",
      textColor: "text-black",
      plateColor: "#11100E",
      badge: "BEST VALUE",
      stockLeft: 24,
      batch: "BATCH NO. 04 / DISCOVERY",
      macerationDays: 180,
      rating: 5.0,
      reviewCount: 215,
      image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=1000&q=80",
      editorialQuote: "“The smartest way to find your signature before committing to the full flacon.”",
    };

    addToCart(mockPerfume, "5ml Sample", 1);
    setFlightPerfumes([]);
  };

  const applyCoupon = (code: string) => {
    const clean = code.trim().toUpperCase();
    if (clean === "NICHE10" || clean === "FIRSTDROP" || clean === "DELHI") {
      setAppliedCoupon(clean);
      setCouponCode(clean);
      return { success: true, message: `Code ${clean} applied! 10% off your order.` };
    }
    return { success: false, message: "Invalid code. Try 'NICHE10' or 'FIRSTDROP'." };
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    setCouponCode("");
  };

  const totalCount = items.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = appliedCoupon ? Math.round(subtotal * 0.1) : 0;
  const shipping = subtotal > 2500 || subtotal === 0 ? 0 : 250;
  const tax = Math.round((subtotal - discount) * 0.18); // 18% GST standard on luxury cosmetics
  const grandTotal = subtotal - discount + shipping + tax;

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalCount,
        subtotal,
        discount,
        shipping,
        tax,
        grandTotal,
        isCartOpen,
        setIsCartOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        isQuizOpen,
        setIsQuizOpen,
        selectedPerfumeForModal,
        setSelectedPerfumeForModal,
        couponCode,
        appliedCoupon,
        applyCoupon,
        removeCoupon,
        flightPerfumes,
        toggleFlightPerfume,
        addFlightToCart,
        orderCompleted,
        setOrderCompleted,
        lastOrderId,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
