import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import CartDrawer from "@/components/CartDrawer";
import CheckoutModal from "@/components/CheckoutModal";
import QuickViewModal from "@/components/QuickViewModal";
import ScentFinderModal from "@/components/ScentFinderModal";

export const metadata: Metadata = {
  title: "NICHE — Artisanal Extrait de Parfum & Rare Fragrance House",
  description:
    "Small-batch cold-macerated perfumes, 35% concentration, hand-poured in architectural flacons. Delhi · Mumbai · Bengaluru & Worldwide Drops.",
  keywords: [
    "niche perfumes",
    "extrait de parfum",
    "luxury fragrances",
    "artisanal perfumes India",
    "cold macerated perfume",
    "florentine orris",
    "rare scents",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-[#11100E] text-[#F6F1E8] antialiased selection:bg-[#F5BA27] selection:text-[#11100E]">
        <CartProvider>
          {children}
          <CartDrawer />
          <CheckoutModal />
          <QuickViewModal />
          <ScentFinderModal />
        </CartProvider>
      </body>
    </html>
  );
}
