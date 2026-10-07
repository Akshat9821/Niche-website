"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { X, Plus, Minus, Trash2, ArrowRight, Sparkles, ShieldCheck, Tag } from "lucide-react";

export default function CartDrawer() {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    totalCount,
    subtotal,
    discount,
    shipping,
    tax,
    grandTotal,
    appliedCoupon,
    applyCoupon,
    removeCoupon,
    setIsCheckoutOpen,
  } = useCart();

  const [inputCode, setInputCode] = useState("");
  const [couponError, setCouponError] = useState("");

  if (!isCartOpen) return null;

  const freeShippingThreshold = 2500;
  const progressPercent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputCode) return;
    const res = applyCoupon(inputCode);
    if (!res.success) {
      setCouponError(res.message);
    } else {
      setCouponError("");
      setInputCode("");
    }
  };

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer content */}
      <div className="relative z-10 w-full max-w-md bg-[#FCF9F3] text-[#11100E] border-l-[3px] border-black h-full flex flex-col justify-between shadow-[-8px_0px_0px_#11100E]">
        {/* Drawer Header */}
        <div className="p-5 border-b-2 border-black bg-[#F5BA27] flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-black uppercase tracking-wider text-[#11100E]">
              YOUR FLACON BAG
            </span>
            <span className="bg-[#11100E] text-[#F5BA27] text-xs font-mono font-bold px-2 py-0.5 rounded">
              {totalCount} ITEMS
            </span>
          </div>

          <button
            onClick={() => setIsCartOpen(false)}
            className="w-8 h-8 rounded-full border-2 border-black bg-[#FCF9F3] hover:bg-black hover:text-white flex items-center justify-center transition-colors shadow-[2px_2px_0px_#000]"
          >
            <X className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

        {/* Free Shipping Meter */}
        <div className="bg-[#11100E] text-[#FCF9F3] p-3 border-b-2 border-black text-xs font-mono">
          <div className="flex justify-between items-center mb-1.5">
            <span className="flex items-center gap-1 text-[#F5BA27]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>
                {subtotal >= freeShippingThreshold
                  ? "FREE INSULATED SHIPPING UNLOCKED"
                  : `ADD ₹${(freeShippingThreshold - subtotal).toLocaleString("en-IN")} MORE FOR FREE SHIPPING`}
              </span>
            </span>
            <span className="font-bold">{progressPercent}%</span>
          </div>
          <div className="h-2 bg-[#2A2722] rounded-full overflow-hidden border border-[#444]">
            <div
              className="h-full bg-[#F5BA27] transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Cart Items Scroll Area */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-16 space-y-4">
              <div className="w-16 h-16 rounded-full border-2 border-black bg-[#F5BA27] mx-auto flex items-center justify-center shadow-[4px_4px_0px_#000]">
                <Sparkles className="w-8 h-8 text-[#11100E]" />
              </div>
              <h3 className="text-xl font-black uppercase text-[#11100E]">
                YOUR BAG IS EMPTY
              </h3>
              <p className="text-xs text-[#666] max-w-xs mx-auto font-medium">
                Explore our six cold-macerated extract moods and select your signature olfactory flacon.
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="brutal-btn-yellow px-6 py-2.5 rounded text-xs font-black uppercase tracking-wider"
              >
                BROWSE SCENT CATALOGUE
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="bg-[#FCF9F3] border-2 border-black rounded-lg p-3.5 flex gap-3 shadow-[3px_3px_0px_#000]"
              >
                {/* Product Image */}
                <div className="relative w-20 h-20 rounded border border-black overflow-hidden shrink-0 bg-[#EFECE5]">
                  <img
                    src={item.perfume.image}
                    alt={item.perfume.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Info & Quantity */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between">
                      <h4 className="text-xs font-black uppercase text-[#11100E] leading-tight line-clamp-1">
                        {item.perfume.name}
                      </h4>
                      <button
                        onClick={() => removeFromCart(item.perfume.id, item.size)}
                        className="text-[#999] hover:text-[#D94528] ml-2"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[10px] font-mono font-bold bg-[#E7DFCE] border border-black px-1.5 py-0.2 rounded">
                        {item.size}
                      </span>
                      <span className="text-[10px] font-mono text-[#666]">
                        {item.perfume.concentration}
                      </span>
                    </div>
                  </div>

                  {/* Quantity and Price */}
                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#DDD]">
                    <div className="flex items-center border border-black rounded overflow-hidden bg-white">
                      <button
                        onClick={() => updateQuantity(item.perfume.id, item.size, -1)}
                        className="px-2 py-0.5 hover:bg-[#F5BA27] text-xs font-bold"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-2 text-xs font-mono font-black">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.perfume.id, item.size, 1)}
                        className="px-2 py-0.5 hover:bg-[#F5BA27] text-xs font-bold"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <span className="text-sm font-black text-[#11100E]">
                      ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Coupon & Totals Section */}
        {items.length > 0 && (
          <div className="p-5 border-t-2 border-black bg-[#F6F1E8] space-y-3">
            {/* Promo code */}
            <div>
              {appliedCoupon ? (
                <div className="flex items-center justify-between bg-emerald-50 border-2 border-emerald-700 p-2 rounded text-xs font-mono text-emerald-800">
                  <span className="flex items-center gap-1 font-bold">
                    <Tag className="w-3.5 h-3.5" />
                    <span>CODE {appliedCoupon} APPLIED (-10%)</span>
                  </span>
                  <button
                    onClick={removeCoupon}
                    className="text-xs text-red-600 font-bold hover:underline"
                  >
                    REMOVE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplyCoupon} className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Discount code (try NICHE10)"
                    value={inputCode}
                    onChange={(e) => {
                      setInputCode(e.target.value);
                      setCouponError("");
                    }}
                    className="flex-1 bg-white border-2 border-black rounded px-3 py-1.5 text-xs font-mono uppercase focus:outline-none focus:border-[#D94528]"
                  />
                  <button
                    type="submit"
                    className="bg-[#11100E] text-[#FCF9F3] hover:bg-[#D94528] px-3 py-1.5 rounded text-xs font-black uppercase tracking-wider transition-colors"
                  >
                    APPLY
                  </button>
                </form>
              )}
              {couponError && (
                <p className="text-[10px] text-red-600 mt-1 font-mono font-bold">
                  {couponError}
                </p>
              )}
            </div>

            {/* Calculations Breakdown */}
            <div className="space-y-1.5 text-xs font-mono text-[#555] border-t border-[#D9D3C7] pt-2">
              <div className="flex justify-between">
                <span>SUBTOTAL:</span>
                <span className="text-[#11100E] font-bold">
                  ₹{subtotal.toLocaleString("en-IN")}
                </span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-emerald-700 font-bold">
                  <span>DISCOUNT (10%):</span>
                  <span>-₹{discount.toLocaleString("en-IN")}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>GST (18% INCL.):</span>
                <span className="text-[#11100E] font-bold">
                  ₹{tax.toLocaleString("en-IN")}
                </span>
              </div>
              <div className="flex justify-between">
                <span>CLIMATE-CONTROLLED SHIPPING:</span>
                <span className="text-[#11100E] font-bold">
                  {shipping === 0 ? "FREE" : `₹${shipping}`}
                </span>
              </div>
              <div className="flex justify-between text-base font-black text-[#11100E] border-t-2 border-black pt-2">
                <span className="font-display tracking-wider">TOTAL AMOUNT:</span>
                <span>₹{grandTotal.toLocaleString("en-IN")}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              onClick={handleProceedToCheckout}
              className="w-full brutal-btn-red py-3.5 rounded text-xs sm:text-sm font-black uppercase tracking-wider flex items-center justify-center space-x-2 shadow-[4px_4px_0px_#000]"
            >
              <span>PROCEED TO SECURE CHECKOUT</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center space-x-1.5 text-[10px] text-[#777] font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Razorpay 256-bit encrypted checkout</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
