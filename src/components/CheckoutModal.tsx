"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { useCart } from "@/context/CartContext";
import {
  X,
  ShieldCheck,
  CheckCircle2,
  Lock,
  CreditCard,
  Truck,
  Sparkles,
  ArrowRight,
  Package,
} from "lucide-react";

export default function CheckoutModal() {
  const {
    isCheckoutOpen,
    setIsCheckoutOpen,
    items,
    clearCart,
    grandTotal,
    subtotal,
    discount,
    shipping,
    tax,
    appliedCoupon,
  } = useCart();

  const [paymentMethod, setPaymentMethod] = useState<"razorpay" | "cod">("razorpay");
  const [formData, setFormData] = useState({
    name: "Aarav Sharma",
    email: "aarav.sharma@example.com",
    phone: "+91 98765 43210",
    address: "Flat 402, Oakwood Court, Golf Course Road",
    city: "Gurugram",
    state: "Haryana",
    pincode: "122002",
    deliveryWindow: "morning",
    notes: "Leave package with building concierge if unavailable",
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");
  const [paidTotal, setPaidTotal] = useState(0);

  if (!isCheckoutOpen) return null;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    const amountToPay = grandTotal;
    setPaidTotal(amountToPay);

    // Simulate Razorpay checkout initialization
    setTimeout(() => {
      setIsProcessing(false);
      setOrderComplete(true);
      const generatedOrder = `NICHE-${Math.floor(100000 + Math.random() * 900000)}`;
      setOrderNumber(generatedOrder);

      // Trigger celebratory confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#F5BA27", "#D94528", "#11100E", "#FCF9F3"],
      });

      // Clear the cart
      clearCart();
    }, 1500);
  };

  const handleClose = () => {
    setIsCheckoutOpen(false);
    setOrderComplete(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      />

      {/* Modal Dialog */}
      <div className="relative z-10 w-full max-w-3xl bg-[#FCF9F3] text-[#11100E] border-[3px] border-black rounded-2xl overflow-hidden shadow-[8px_8px_0px_#11100E] my-8">
        {/* Header */}
        <div className="bg-[#11100E] text-[#FCF9F3] p-5 border-b-2 border-black flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="w-6 h-6 bg-[#D94528] text-white border border-black font-black text-xs flex items-center justify-center">
              N
            </span>
            <span className="text-base font-black uppercase tracking-wider text-[#F5BA27]">
              NICHE FLACON CHECKOUT
            </span>
            <span className="text-xs font-mono text-[#A49E94]">· POWERED BY RAZORPAY</span>
          </div>

          <button
            onClick={handleClose}
            className="w-8 h-8 rounded-full border border-[#444] bg-[#222] hover:bg-white hover:text-black flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {orderComplete ? (
          /* Order Success Confirmation View */
          <div className="p-8 sm:p-12 text-center space-y-6">
            <div className="w-20 h-20 bg-[#F5BA27] border-[3px] border-black rounded-full mx-auto flex items-center justify-center shadow-[4px_4px_0px_#000] animate-bounce">
              <CheckCircle2 className="w-10 h-10 text-[#11100E] stroke-[2.5]" />
            </div>

            <div>
              <span className="bg-[#D94528] text-white text-xs font-black uppercase px-3 py-1 rounded border border-black shadow-[2px_2px_0px_#000]">
                ORDER CONFIRMED
              </span>
              <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#11100E] mt-3">
                YOUR FLACON IS BEING PREPARED.
              </h3>
              <p className="text-sm font-mono text-[#666] mt-2">
                ORDER REFERENCE: <strong className="text-[#11100E]">{orderNumber}</strong>
              </p>
            </div>

            <div className="bg-[#F6F1E8] border-2 border-black rounded-xl p-6 text-left max-w-lg mx-auto space-y-3 font-mono text-xs">
              <div className="flex justify-between border-b border-[#D9D3C7] pb-2">
                <span className="text-[#777]">DISPATCH TO:</span>
                <span className="font-bold text-[#11100E]">{formData.name}</span>
              </div>
              <div className="flex justify-between border-b border-[#D9D3C7] pb-2">
                <span className="text-[#777]">DELIVERY ADDRESS:</span>
                <span className="font-bold text-[#11100E] text-right max-w-[240px]">
                  {formData.address}, {formData.city} - {formData.pincode}
                </span>
              </div>
              <div className="flex justify-between border-b border-[#D9D3C7] pb-2">
                <span className="text-[#777]">DELIVERY WINDOW:</span>
                <span className="font-bold text-[#D94528] uppercase">
                  {formData.deliveryWindow === "morning" ? "Morning 10 AM - 1 PM" : "Evening 4 PM - 8 PM"}
                </span>
              </div>
              <div className="flex justify-between text-sm font-black pt-1">
                <span>TOTAL PAID:</span>
                <span className="text-[#D94528]">₹{paidTotal.toLocaleString("en-IN")}</span>
              </div>
            </div>

            <div className="text-xs text-[#555] max-w-md mx-auto leading-relaxed">
              A temperature-insulated flacon box has been assigned to your batch. A WhatsApp dispatch tracking link has been sent to <strong>{formData.phone}</strong>.
            </div>

            <div className="pt-2">
              <button
                onClick={handleClose}
                className="brutal-btn-cream px-8 py-3.5 rounded text-xs sm:text-sm font-black uppercase tracking-wider shadow-[4px_4px_0px_#000]"
              >
                RETURN TO PARFUMERIE
              </button>
            </div>
          </div>
        ) : (
          /* Checkout Form View */
          <form onSubmit={handlePayment} className="p-6 sm:p-8 space-y-6">
            {/* Razorpay Integration Notice Banner */}
            <div className="bg-[#F5BA27]/20 border-2 border-[#F5BA27] rounded-lg p-3 text-xs font-mono flex items-center justify-between text-[#805B00]">
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#F5BA27]" />
                <span>RAZORPAY PAYMENT ENGINE READY · SIMULATION / TEST MODE ACTIVE</span>
              </span>
              <span className="bg-[#11100E] text-[#F5BA27] text-[10px] font-bold px-2 py-0.5 rounded">
                SECURE 256-BIT
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column: Customer and Shipping Info */}
              <div className="space-y-4">
                <h4 className="text-xs font-black uppercase tracking-widest text-[#D94528] flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5" />
                  <span>01 · DISPATCH & DELIVERY DETAILS</span>
                </h4>

                <div>
                  <label className="block text-[11px] font-bold uppercase text-[#555] mb-1 font-mono">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-white border-2 border-black rounded px-3 py-2 text-xs font-bold focus:outline-none focus:border-[#D94528]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-[#555] mb-1 font-mono">
                      Phone (WhatsApp) *
                    </label>
                    <input
                      type="text"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-white border-2 border-black rounded px-3 py-2 text-xs font-bold focus:outline-none focus:border-[#D94528]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-[#555] mb-1 font-mono">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-white border-2 border-black rounded px-3 py-2 text-xs font-bold focus:outline-none focus:border-[#D94528]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase text-[#555] mb-1 font-mono">
                    Street Address / Flacon Delivery Point *
                  </label>
                  <input
                    type="text"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full bg-white border-2 border-black rounded px-3 py-2 text-xs font-bold focus:outline-none focus:border-[#D94528]"
                  />
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-[#555] mb-1 font-mono">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full bg-white border-2 border-black rounded px-3 py-2 text-xs font-bold focus:outline-none focus:border-[#D94528]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-[#555] mb-1 font-mono">
                      State *
                    </label>
                    <input
                      type="text"
                      name="state"
                      required
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full bg-white border-2 border-black rounded px-3 py-2 text-xs font-bold focus:outline-none focus:border-[#D94528]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-[#555] mb-1 font-mono">
                      Pincode *
                    </label>
                    <input
                      type="text"
                      name="pincode"
                      required
                      value={formData.pincode}
                      onChange={handleInputChange}
                      className="w-full bg-white border-2 border-black rounded px-3 py-2 text-xs font-bold focus:outline-none focus:border-[#D94528]"
                    />
                  </div>
                </div>

                {/* Delivery Window (like Moodang's slot choice) */}
                <div>
                  <label className="block text-[11px] font-bold uppercase text-[#555] mb-1 font-mono">
                    Preferred Delivery Window *
                  </label>
                  <select
                    name="deliveryWindow"
                    value={formData.deliveryWindow}
                    onChange={handleInputChange}
                    className="w-full bg-white border-2 border-black rounded px-3 py-2 text-xs font-bold focus:outline-none focus:border-[#D94528]"
                  >
                    <option value="morning">Morning Slot (10:00 AM — 1:00 PM)</option>
                    <option value="evening">Evening Slot (4:00 PM — 8:00 PM)</option>
                    <option value="sameday">Same-Day Priority (Delhi NCR / Mumbai)</option>
                  </select>
                </div>
              </div>

              {/* Right Column: Payment Gateway & Order Summary */}
              <div className="space-y-4">
                <h4 className="text-xs font-black uppercase tracking-widest text-[#D94528] flex items-center gap-1.5">
                  <CreditCard className="w-3.5 h-3.5" />
                  <span>02 · PAYMENT METHOD</span>
                </h4>

                {/* Gateway Options */}
                <div className="space-y-2">
                  <div
                    onClick={() => setPaymentMethod("razorpay")}
                    className={`border-2 border-black rounded-lg p-3.5 cursor-pointer flex items-center justify-between transition-all ${
                      paymentMethod === "razorpay"
                        ? "bg-[#F5BA27] text-[#11100E] shadow-[3px_3px_0px_#000]"
                        : "bg-white text-[#555]"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 rounded-full border-2 border-black flex items-center justify-center bg-white">
                        {paymentMethod === "razorpay" && (
                          <div className="w-2 h-2 rounded-full bg-black" />
                        )}
                      </div>
                      <div>
                        <div className="font-black text-xs uppercase">
                          RAZORPAY SECURE GATEWAY
                        </div>
                        <div className="text-[10px] font-mono">
                          UPI (GPay/PhonePe), Credit/Debit Cards, NetBanking, CRED
                        </div>
                      </div>
                    </div>
                    <span className="bg-[#11100E] text-[#F5BA27] text-[9px] font-black uppercase px-2 py-0.5 rounded">
                      RECOMMENDED
                    </span>
                  </div>

                  <div
                    onClick={() => setPaymentMethod("cod")}
                    className={`border-2 border-black rounded-lg p-3.5 cursor-pointer flex items-center justify-between transition-all ${
                      paymentMethod === "cod"
                        ? "bg-[#F5BA27] text-[#11100E] shadow-[3px_3px_0px_#000]"
                        : "bg-white text-[#555]"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 rounded-full border-2 border-black flex items-center justify-center bg-white">
                        {paymentMethod === "cod" && (
                          <div className="w-2 h-2 rounded-full bg-black" />
                        )}
                      </div>
                      <div>
                        <div className="font-black text-xs uppercase">
                          PAY ON DELIVERY (CARD / UPI / CASH)
                        </div>
                        <div className="text-[10px] font-mono">
                          Available for Delhi NCR, Mumbai & Bengaluru
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Order Line Items Brief */}
                <div className="bg-[#F6F1E8] border-2 border-black rounded-xl p-4 space-y-2 text-xs font-mono">
                  <div className="font-black text-xs text-[#11100E] uppercase border-b border-[#D9D3C7] pb-1.5 flex justify-between">
                    <span>FLACON ITEMS ({items.length})</span>
                    <span>PRICE</span>
                  </div>

                  <div className="max-h-28 overflow-y-auto space-y-1.5 pr-1">
                    {items.map((item) => (
                      <div key={item.id} className="flex justify-between text-[11px]">
                        <span className="truncate max-w-[180px]">
                          {item.quantity}x {item.perfume.name} ({item.size})
                        </span>
                        <span className="font-bold">
                          ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-[#D9D3C7] pt-2 space-y-1 text-[11px] text-[#666]">
                    <div className="flex justify-between">
                      <span>Subtotal:</span>
                      <span className="text-black font-bold">₹{subtotal.toLocaleString("en-IN")}</span>
                    </div>
                    {discount > 0 && (
                      <div className="flex justify-between text-emerald-700 font-bold">
                        <span>Discount ({appliedCoupon}):</span>
                        <span>-₹{discount.toLocaleString("en-IN")}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span>GST (18% included):</span>
                      <span className="text-black font-bold">₹{tax.toLocaleString("en-IN")}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Insulated Shipping:</span>
                      <span className="text-black font-bold">
                        {shipping === 0 ? "FREE" : `₹${shipping}`}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm font-black text-[#11100E] border-t-2 border-black pt-1.5">
                      <span>GRAND TOTAL:</span>
                      <span className="text-[#D94528]">₹{grandTotal.toLocaleString("en-IN")}</span>
                    </div>
                  </div>
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full brutal-btn-red py-4 rounded-md text-xs sm:text-sm font-black uppercase tracking-wider flex items-center justify-center space-x-2 shadow-[4px_4px_0px_#000]"
                >
                  {isProcessing ? (
                    <div className="flex items-center space-x-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>CONTACTING RAZORPAY...</span>
                    </div>
                  ) : (
                    <>
                      <span>
                        PAY ₹{grandTotal.toLocaleString("en-IN")} VIA {paymentMethod === "razorpay" ? "RAZORPAY" : "COD"}
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center space-x-1.5 text-[10px] text-[#777] font-mono">
                  <Lock className="w-3 h-3 text-emerald-600" />
                  <span>Razorpay API readiness configured. All payments SSL encrypted.</span>
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
