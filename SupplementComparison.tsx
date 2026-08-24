import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PRODUCTS } from '../data/products';
import { getWhatsAppMessageUrl } from '../data/storeInfo';
import { playClickChime, playPowerPumpSound } from '../utils/audio';
import { 
  GitCompare, 
  MessageCircle, 
  ShieldCheck 
} from 'lucide-react';

export const SupplementComparison: React.FC = () => {
  const { t } = useLanguage();
  
  const [productAId, setProductAId] = useState<string>(PRODUCTS[0].id);
  const [productBId, setProductBId] = useState<string>(PRODUCTS[1].id);

  const productA = PRODUCTS.find((p) => p.id === productAId) || PRODUCTS[0];
  const productB = PRODUCTS.find((p) => p.id === productBId) || PRODUCTS[1];

  return (
    <section className="py-16 sm:py-24 bg-[#080C0E] border-t border-[#15252A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0E282E] text-[#00D2B4] text-xs font-bold uppercase tracking-wider mb-3 border border-[#00D2B4]/30">
            <GitCompare className="w-3.5 h-3.5" />
            <span>{t('مقارنة المكملات جنباً إلى جنب', 'Side-by-Side Supplement Comparison')}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-alexandria">
            {t('قارن بين المكملات واختر', 'Compare Formulas & Pick')} <br />
            <span className="text-[#00D2B4]">{t('الأنسب لهدفك الرياضي', 'The Ideal Match for Your Goal')}</span>
          </h2>
          <p className="text-sm text-gray-400 mt-2">
            {t(
              'مقارنة سريعة لنسب البروتين، السعرات، الحصص، وأفضل توقيت للاستخدام لمساعدتك في اتخاذ القرار الصحيح.',
              'Evaluate protein content, calories, scoop size, and optimal timing side-by-side.'
            )}
          </p>
        </div>

        {/* Product Selectors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-8">
          <div className="bg-[#0D171A] p-3.5 rounded-2xl border border-[#1A343D]">
            <label className="text-xs font-bold text-gray-400 block mb-1.5 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#00D2B4]" />
              <span>{t('المكمل الأول (المقارنة أ):', 'Product A:')}</span>
            </label>
            <select
              value={productAId}
              onChange={(e) => {
                setProductAId(e.target.value);
                playClickChime();
              }}
              className="w-full bg-[#080E10] border border-[#1B353E] focus:border-[#00D2B4] rounded-xl p-2.5 text-xs sm:text-sm text-white focus:outline-none cursor-pointer"
            >
              {PRODUCTS.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.brand} - {t(p.name.ar, p.name.en)}
                </option>
              ))}
            </select>
          </div>

          <div className="bg-[#0D171A] p-3.5 rounded-2xl border border-[#1A343D]">
            <label className="text-xs font-bold text-gray-400 block mb-1.5 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#00F0FF]" />
              <span>{t('المكمل الثاني (المقارنة ب):', 'Product B:')}</span>
            </label>
            <select
              value={productBId}
              onChange={(e) => {
                setProductBId(e.target.value);
                playClickChime();
              }}
              className="w-full bg-[#080E10] border border-[#1B353E] focus:border-[#00F0FF] rounded-xl p-2.5 text-xs sm:text-sm text-white focus:outline-none cursor-pointer"
            >
              {PRODUCTS.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.brand} - {t(p.name.ar, p.name.en)}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Comparison Table / Card */}
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-[#0F1D22] to-[#0A1215] rounded-3xl border border-[#1E3B45] shadow-2xl overflow-hidden">
          
          {/* Header Row with Images & Titles */}
          <div className="grid grid-cols-2 divide-x divide-[#183139] rtl:divide-x-reverse border-b border-[#183139] bg-[#091114]">
            {/* Product A */}
            <div className="p-5 sm:p-6 flex flex-col items-center text-center">
              <span className="text-[11px] font-bold text-[#00D2B4] uppercase tracking-wider bg-[#0E282E] px-2.5 py-0.5 rounded-md mb-3 font-outfit">
                {productA.brand}
              </span>
              <img
                src={productA.image}
                alt={t(productA.name.ar, productA.name.en)}
                className="h-28 sm:h-36 object-contain mb-3 drop-shadow-lg"
              />
              <h3 className="text-sm sm:text-base font-bold text-white font-alexandria line-clamp-2">
                {t(productA.name.ar, productA.name.en)}
              </h3>
              <a
                href={getWhatsAppMessageUrl(t(productA.name.ar, productA.name.en))}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playPowerPumpSound()}
                className="mt-3 inline-flex items-center gap-1.5 bg-[#00D2B4] hover:bg-[#00ebd0] text-[#080C0E] text-xs font-black px-3.5 py-2 rounded-xl transition-transform hover:scale-105"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-[#080C0E]" />
                <span>{t('استفسر عن المنتج أ', 'Inquire Product A')}</span>
              </a>
            </div>

            {/* Product B */}
            <div className="p-5 sm:p-6 flex flex-col items-center text-center">
              <span className="text-[11px] font-bold text-[#00F0FF] uppercase tracking-wider bg-[#0E282E] px-2.5 py-0.5 rounded-md mb-3 font-outfit">
                {productB.brand}
              </span>
              <img
                src={productB.image}
                alt={t(productB.name.ar, productB.name.en)}
                className="h-28 sm:h-36 object-contain mb-3 drop-shadow-lg"
              />
              <h3 className="text-sm sm:text-base font-bold text-white font-alexandria line-clamp-2">
                {t(productB.name.ar, productB.name.en)}
              </h3>
              <a
                href={getWhatsAppMessageUrl(t(productB.name.ar, productB.name.en))}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playPowerPumpSound()}
                className="mt-3 inline-flex items-center gap-1.5 bg-[#00F0FF] hover:bg-[#46f5ff] text-[#080C0E] text-xs font-black px-3.5 py-2 rounded-xl transition-transform hover:scale-105"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-[#080C0E]" />
                <span>{t('استفسر عن المنتج ب', 'Inquire Product B')}</span>
              </a>
            </div>
          </div>

          {/* Comparison Rows */}
          <div className="divide-y divide-[#14262C] text-xs sm:text-sm">
            
            {/* Category Row */}
            <div className="grid grid-cols-2 divide-x divide-[#183139] rtl:divide-x-reverse p-4">
              <div className="text-center px-2">
                <span className="text-gray-400 block text-[11px] mb-0.5">{t('القسم / النوع', 'Category')}</span>
                <span className="font-bold text-white">{t(productA.categoryName.ar, productA.categoryName.en)}</span>
              </div>
              <div className="text-center px-2">
                <span className="text-gray-400 block text-[11px] mb-0.5">{t('القسم / النوع', 'Category')}</span>
                <span className="font-bold text-white">{t(productB.categoryName.ar, productB.categoryName.en)}</span>
              </div>
            </div>

            {/* Protein per Serving */}
            <div className="grid grid-cols-2 divide-x divide-[#183139] rtl:divide-x-reverse p-4 bg-[#0B1518]">
              <div className="text-center px-2">
                <span className="text-gray-400 block text-[11px] mb-0.5">{t('البروتين بالسكوب', 'Protein Per Scoop')}</span>
                <span className="font-bold text-[#00D2B4] text-base">{productA.specs.proteinPerServing || '—'}</span>
              </div>
              <div className="text-center px-2">
                <span className="text-gray-400 block text-[11px] mb-0.5">{t('البروتين بالسكوب', 'Protein Per Scoop')}</span>
                <span className="font-bold text-[#00F0FF] text-base">{productB.specs.proteinPerServing || '—'}</span>
              </div>
            </div>

            {/* Calories per Serving */}
            <div className="grid grid-cols-2 divide-x divide-[#183139] rtl:divide-x-reverse p-4">
              <div className="text-center px-2">
                <span className="text-gray-400 block text-[11px] mb-0.5">{t('السعرات الحرارية', 'Calories Per Serving')}</span>
                <span className="font-bold text-white">{productA.specs.caloriesPerServing || '—'}</span>
              </div>
              <div className="text-center px-2">
                <span className="text-gray-400 block text-[11px] mb-0.5">{t('السعرات الحرارية', 'Calories Per Serving')}</span>
                <span className="font-bold text-white">{productB.specs.caloriesPerServing || '—'}</span>
              </div>
            </div>

            {/* Servings count */}
            <div className="grid grid-cols-2 divide-x divide-[#183139] rtl:divide-x-reverse p-4 bg-[#0B1518]">
              <div className="text-center px-2">
                <span className="text-gray-400 block text-[11px] mb-0.5">{t('عدد الحصص والعبوة', 'Servings & Size')}</span>
                <span className="font-semibold text-gray-200">{productA.specs.servings}</span>
              </div>
              <div className="text-center px-2">
                <span className="text-gray-400 block text-[11px] mb-0.5">{t('عدد الحصص والعبوة', 'Servings & Size')}</span>
                <span className="font-semibold text-gray-200">{productB.specs.servings}</span>
              </div>
            </div>

            {/* Best Timing */}
            <div className="grid grid-cols-2 divide-x divide-[#183139] rtl:divide-x-reverse p-4">
              <div className="text-center px-2">
                <span className="text-gray-400 block text-[11px] mb-0.5">{t('أفضل توقيت للاستخدام', 'Optimal Timing')}</span>
                <span className="text-xs text-gray-300">{t(productA.timing.ar, productA.timing.en)}</span>
              </div>
              <div className="text-center px-2">
                <span className="text-gray-400 block text-[11px] mb-0.5">{t('أفضل توقيت للاستخدام', 'Optimal Timing')}</span>
                <span className="text-xs text-gray-300">{t(productB.timing.ar, productB.timing.en)}</span>
              </div>
            </div>

            {/* Origin & Guarantee */}
            <div className="grid grid-cols-2 divide-x divide-[#183139] rtl:divide-x-reverse p-4 bg-[#081013]">
              <div className="text-center px-2 flex items-center justify-center gap-1.5 text-xs text-emerald-400">
                <ShieldCheck className="w-4 h-4 text-[#00D2B4]" />
                <span>{productA.origin} {t('• أصلي 100% مغلق', '• 100% Factory Sealed')}</span>
              </div>
              <div className="text-center px-2 flex items-center justify-center gap-1.5 text-xs text-emerald-400">
                <ShieldCheck className="w-4 h-4 text-[#00F0FF]" />
                <span>{productB.origin} {t('• أصلي 100% مغلق', '• 100% Factory Sealed')}</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
