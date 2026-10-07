import TopMarquee from "@/components/TopMarquee";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CautionMarquee from "@/components/CautionMarquee";
import ManifestoSection from "@/components/ManifestoSection";
import MoodSliderSection from "@/components/MoodSliderSection";
import MarketplaceGrid from "@/components/MarketplaceGrid";
import TheNicheMethod from "@/components/TheNicheMethod";
import ScentFlightBuilder from "@/components/ScentFlightBuilder";
import ClaimSlotRoutine from "@/components/ClaimSlotRoutine";
import ClientDiaries from "@/components/ClientDiaries";
import NewsletterBanner from "@/components/NewsletterBanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#11100E] text-[#FCF9F3] selection:bg-[#F5BA27] selection:text-[#11100E]">
      {/* 01 · Top Announcement Ticker */}
      <TopMarquee />

      {/* 02 · Brutalist Top Navigation */}
      <Navbar />

      {/* 03 · Hero Section inspired by Moodang Pizzeria */}
      <HeroSection />

      {/* 04 · Slanted Caution Tape Marquee Banner */}
      <CautionMarquee />

      {/* 05 · The 6-Month Extraction Manifesto */}
      <ManifestoSection />

      {/* 06 · "Pick Your Scent Mood" Interactive Showcase */}
      <MoodSliderSection />

      {/* 07 · The Full Marketplace Catalogue Grid */}
      <MarketplaceGrid />

      {/* 08 · The Niche Method & Craftsmanship Accordions */}
      <TheNicheMethod />

      {/* 09 · Interactive Custom Scent Flight Builder */}
      <ScentFlightBuilder />

      {/* 10 · Batch Allocation & Flacon Routine */}
      <ClaimSlotRoutine />

      {/* 11 · Client Diaries & Verified Reviews */}
      <ClientDiaries />

      {/* 12 · Private Register & Drop Access Newsletter */}
      <NewsletterBanner />

      {/* 13 · Bold Brutalist Footer */}
      <Footer />
    </main>
  );
}
