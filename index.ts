export type Language = 'ar' | 'en';

export type ProductCategory = 
  | 'all'
  | 'protein'
  | 'creatine'
  | 'preworkout'
  | 'mass-gainer'
  | 'vitamins'
  | 'amino-recovery';

export interface NutritionalFact {
  labelAr: string;
  labelEn: string;
  value: string;
  dailyValue?: string;
}

export interface Product {
  id: string;
  name: {
    ar: string;
    en: string;
  };
  brand: string;
  origin: string; // e.g. 'USA', 'UK'
  category: ProductCategory;
  categoryName: {
    ar: string;
    en: string;
  };
  image: string;
  badge?: {
    ar: string;
    en: string;
  };
  description: {
    ar: string;
    en: string;
  };
  features: {
    ar: string[];
    en: string[];
  };
  usageGuide: {
    ar: string;
    en: string;
  };
  timing: {
    ar: string;
    en: string;
  };
  nutritionFacts: NutritionalFact[];
  specs: {
    servings?: string;
    servingSize?: string;
    proteinPerServing?: string;
    creatinePerServing?: string;
    caffeinePerServing?: string;
    caloriesPerServing?: string;
    carbsPerServing?: string;
    weight?: string;
    flavorOptions?: string[];
  };
  goal: 'muscle_building' | 'bulking' | 'energy_endurance' | 'health_recovery';
  inStock: boolean;
}

export interface StoreInfo {
  name: string;
  phone: string;
  phoneRaw: string;
  whatsappLink: string;
  addressAr: string;
  addressEn: string;
  googleMapsUrl: string;
  facebookUrl: string;
  workingHoursAr: string;
  workingHoursEn: string;
  deliveryNoteAr: string;
  deliveryNoteEn: string;
}

export interface DeliveryZone {
  id: string;
  nameAr: string;
  nameEn: string;
  estimatedTimeAr: string;
  estimatedTimeEn: string;
  popularAreasAr: string[];
  popularAreasEn: string[];
  status: 'same-day' | 'next-day' | 'instant';
}

export interface FAQItem {
  id: string;
  questionAr: string;
  questionEn: string;
  answerAr: string;
  answerEn: string;
  category: 'products' | 'delivery' | 'store' | 'usage';
}
