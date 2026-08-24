import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PRODUCT_CATEGORIES } from '../data/products';
import { ProductCategory } from '../types';
import { 
  Flame, 
  Zap, 
  Activity, 
  TrendingUp, 
  Shield, 
  Dumbbell, 
  Sparkles,
  ArrowDown
} from 'lucide-react';

interface CategoryShowcaseProps {
  selectedCategory: ProductCategory;
  onSelectCategory: (cat: ProductCategory) => void;
}

export const CategoryShowcase: React.FC<CategoryShowcaseProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  const { t } = useLanguage();
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flame':
        return <Flame className="w-6 h-6" />;
      case 'Zap':
        return <Zap className="w-6 h-6" />;
      case 'Activity':
        return <Activity className="w-6 h-6" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6" />;
      case 'Shield':
        return <Shield className="w-6 h-6" />;
      default:
        return <Dumbbell className="w-6 h-6" />;
    }
  };

  const activeCategoryInfo = PRODUCT_CATEGORIES.find((c) => c.id === (hoveredCategory || selectedCategory));

  return (
    <section id="categories" className="py-14 sm:py-20 bg-[#0A0F12] border-y border-[#142329] relative overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-[#0A2E33]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E272C] text-[#00D2B4] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('أقسام وتصنيفات المكملات', 'Product Categories')}</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-alexandria">
            {t('اختر الفئة اللي تكمل', 'Choose the Category for')} <span className="text-[#00D2B4]">{t('هدفك الرياضي', 'Your Fitness Goal')}</span>
          </h2>
          
          <p className="text-sm sm:text-base text-gray-400 mt-2">
            {t(
              'كل احتياجاتك من أشهر الماركات العالمية لزيادة الوزن، التنشيف، أو رفع مستويات الطاقة.',
              'From lean whey protein to explosive pre-workouts and pure micronized creatine.'
            )}
          </p>
        </div>

        {/* Gorilla Mascot Reaction Bar */}
        <div className="mb-8 max-w-2xl mx-auto bg-[#0E1C20]/80 backdrop-blur-md rounded-2xl p-3.5 border border-[#1E3841] flex items-center justify-between shadow-lg">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#071316] border border-[#00D2B4]/40 p-1 flex items-center justify-center shrink-0">
              <img
                src="/images/gorilla-mascot.png"
                alt="Gorilla"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium">
                {t('تفاعل الـ Mascot مع القسم:', 'Mascot Workout Reaction:')}
              </p>
              <p className="text-xs sm:text-sm font-bold text-[#00F0FF]">
                {activeCategoryInfo ? t(activeCategoryInfo.mascotActionAr, activeCategoryInfo.mascotActionEn) : t('اختر قسماً لعرض المنتجات', 'Select a category to explore')}
              </p>
            </div>
          </div>

          <a
            href="#products"
            className="text-xs text-[#00D2B4] hover:underline flex items-center gap-1 font-bold shrink-0"
          >
            <span>{t('عرض المنتجات', 'View')}</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {PRODUCT_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            const isHovered = hoveredCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => {
                  onSelectCategory(cat.id as ProductCategory);
                  const el = document.getElementById('products');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                onMouseEnter={() => setHoveredCategory(cat.id)}
                onMouseLeave={() => setHoveredCategory(null)}
                className={`relative group text-start p-4 sm:p-5 rounded-2xl transition-all duration-300 flex flex-col justify-between border ${
                  isSelected
                    ? 'bg-gradient-to-b from-[#133238] to-[#0D2125] border-[#00D2B4] cyan-glow shadow-xl -translate-y-1'
                    : isHovered
                    ? 'bg-[#122227] border-[#00D2B4]/50 cyan-glow-sm -translate-y-1'
                    : 'bg-[#0E171A] hover:bg-[#122025] border-[#182A30] hover:border-[#1E3A42]'
                }`}
              >
                {/* Icon Badge */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-colors ${
                    isSelected
                      ? 'bg-[#00D2B4] text-[#080C0E] shadow-md shadow-[#00D2B4]/30'
                      : 'bg-[#14262C] text-[#00D2B4] group-hover:bg-[#00D2B4] group-hover:text-[#080C0E]'
                  }`}
                >
                  {getCategoryIcon(cat.icon)}
                </div>

                {/* Text Content */}
                <div>
                  <h3
                    className={`text-sm sm:text-base font-bold transition-colors ${
                      isSelected ? 'text-white' : 'text-gray-200 group-hover:text-white'
                    }`}
                  >
                    {t(cat.nameAr, cat.nameEn)}
                  </h3>
                  <p className="text-[11px] text-gray-400 mt-1 line-clamp-1">
                    {t('استكشف المنتجات', 'Explore products')}
                  </p>
                </div>

                {/* Active Indicator dot */}
                {isSelected && (
                  <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-[#00D2B4] animate-ping" />
                )}
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
