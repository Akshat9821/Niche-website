export type ScentCategory = "all" | "woody" | "solar" | "gourmand" | "dark-floral" | "fresh";

export type BottleSize = "50ml" | "100ml" | "5ml Sample";

export interface Perfume {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  tagline: string;
  category: ScentCategory;
  categoryLabel: string;
  house: string;
  nose: string;
  concentration: string;
  description: string;
  topNotes: string[];
  heartNotes: string[];
  baseNotes: string[];
  vibeStickers: { text: string; color: string; rotation: string }[];
  price50ml: number;
  price100ml: number;
  priceSample: number;
  longevity: string;
  sillage: "Intimate" | "Moderate" | "Enveloping" | "Nuclear Beast";
  themeColor: string;
  textColor: string;
  plateColor: string;
  badge?: string;
  stockLeft: number;
  batch: string;
  macerationDays: number;
  rating: number;
  reviewCount: number;
  image: string;
  editorialQuote: string;
}

export interface CartItem {
  id: string;
  perfume: Perfume;
  size: BottleSize;
  price: number;
  quantity: number;
}

export interface ClientReview {
  id: string;
  perfumeName: string;
  quote: string;
  author: string;
  city: string;
  rating: number;
  diaryNumber: string;
  flaconPurchased: string;
}
