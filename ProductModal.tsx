import React, { useEffect, useState } from 'react';
import { Product } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { getWhatsAppMessageUrl } from '../data/storeInfo';
import { playClickChime, playPowerPumpSound } from '../utils/audio';
import { 
  X, 
  MessageCircle, 
  ShieldCheck, 
  Check, 
  Truck, 
  Layers, 
  Sparkles, 
  MapPin, 
  Clock, 
  Dumbbell 
} from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const { t, isArabic } = useLanguage();
  const [selectedFlavor, setSelectedFlavor] = useState<string>('');

  useEffect(() => {
    if (product && product.specs.flavorOptions && product.specs.flavorOptions.length > 0) {
      setSelectedFlavor(product.specs.flavorOptions[0]);
    }
  }, [product]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (product) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  const handleOrderWithFlavor = () => {
    playPowerPumpSound();
    const productName = t(product.name.ar, product.name.en);
    const flavorText = selectedFlavor ? ` بنكهة: (${selectedFlavor})` : '';
    const message = `مرحباً Bulk Store 👋\nأريد الاستفسار وطلب منتج: ${productName}${flavorText}.\nهل متوفر في المحل أو للتوصيل داخل القاهرة؟`;
    window.open(getWhatsAppMessageUrl(undefined, message), '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity animate-fadeIn"
      />

      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-4xl bg-[#0A1215] border border-[#1E3E47] rounded-3xl shadow-2xl shadow-black/90 overflow-hidden my-6 max-h-[90vh] flex flex-col animate-scaleUp">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[#162A31] bg-[#070D0F]">
          <div className="flex items-center gap-2">
            <span className="text-xs font-black uppercase text-[#00D2B4] font-outfit tracking-wider bg-[#0E282E] px-2.5 py-1 rounded-md border border-[#00D2B4]/30">
              {product.brand}
            </span>
            <span className="text-xs text-gray-400 font-medium">
              {t(product.categoryName.ar, product.categoryName.en)} • {product.origin}
            </span>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-[#122429] hover:bg-[#1A333A] text-gray-300 hover:text-white border border-[#23454F] transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-4 sm:p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            
            {/* Left Column: Product Visual & Authenticity */}
            <div className="md:col-span-5 flex flex-col items-center bg-gradient-to-b from-[#102026] to-[#080E10] rounded-2xl p-6 border border-[#183138] relative">
              <div className="absolute w-44 h-44 rounded-full bg-[#00D2B4]/15 blur-2xl pointer-events-none" />
              
              <img
                src={product.image}
                alt={t(product.name.ar, product.name.en)}
                className="relative z-10 max-h-60 sm:max-h-64 object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]"
              />

              {/* Authenticity Badge */}
              <div className="mt-5 w-full bg-[#0E282E]/90 rounded-xl p-2.5 border border-[#00D2B4]/30 flex items-center justify-center gap-2 text-xs text-[#00F0FF] font-bold">
                <ShieldCheck className="w-4 h-4 text-[#00D2B4]" />
                <span>{t('منتج أصلي 100% مغلق ومضمون', '100% Authentic Factory Sealed')}</span>
              </div>
            </div>

            {/* Right Column: Title, Specs & Formula */}
            <div className="md:col-span-7 space-y-4 text-start">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white font-alexandria leading-snug">
                  {t(product.name.ar, product.name.en)}
                </h2>

                <p className="text-xs sm:text-sm text-gray-300 mt-2 leading-relaxed">
                  {t(product.description.ar, product.description.en)}
                </p>
              </div>

              {/* Key Specs Pills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                {product.specs.servings && (
                  <div className="bg-[#0C171A] p-2.5 rounded-xl border border-[#162B32]">
                    <span className="text-gray-400 block text-[10px]">{t('الحصص / الحجم', 'Servings / Size')}</span>
                    <span className="font-bold text-white mt-0.5 block">{product.specs.servings}</span>
                  </div>
                )}

                {product.specs.proteinPerServing && (
                  <div className="bg-[#0C171A] p-2.5 rounded-xl border border-[#162B32]">
                    <span className="text-gray-400 block text-[10px]">{t('البروتين بالسكوب', 'Protein Per Scoop')}</span>
                    <span className="font-bold text-[#00D2B4] mt-0.5 block">{product.specs.proteinPerServing}</span>
                  </div>
                )}

                {product.specs.creatinePerServing && (
                  <div className="bg-[#0C171A] p-2.5 rounded-xl border border-[#162B32]">
                    <span className="text-gray-400 block text-[10px]">{t('الكرياتين بالسكوب', 'Creatine Per Scoop')}</span>
                    <span className="font-bold text-[#00D2B4] mt-0.5 block">{product.specs.creatinePerServing}</span>
                  </div>
                )}

                {product.specs.caffeinePerServing && (
                  <div className="bg-[#0C171A] p-2.5 rounded-xl border border-[#162B32]">
                    <span className="text-gray-400 block text-[10px]">{t('الكافيين بالسكوب', 'Caffeine Per Scoop')}</span>
                    <span className="font-bold text-[#00D2B4] mt-0.5 block">{product.specs.caffeinePerServing}</span>
                  </div>
                )}

                {product.specs.caloriesPerServing && (
                  <div className="bg-[#0C171A] p-2.5 rounded-xl border border-[#162B32]">
                    <span className="text-gray-400 block text-[10px]">{t('السعرات بالسكوب', 'Calories / Scoop')}</span>
                    <span className="font-bold text-white mt-0.5 block">{product.specs.caloriesPerServing}</span>
                  </div>
                )}
              </div>

              {/* Flavor Selector */}
              {product.specs.flavorOptions && product.specs.flavorOptions.length > 0 && (
                <div className="bg-[#081215] p-3.5 rounded-2xl border border-[#162E35]">
                  <span className="text-xs font-bold text-gray-300 block mb-2 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-[#00D2B4]" />
                    <span>{t('اختر النكهة المفضلة للاستفسار عنها:', 'Select Preferred Flavor:')}</span>
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {product.specs.flavorOptions.map((flavor, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => {
                          setSelectedFlavor(flavor);
                          playClickChime();
                        }}
                        className={`text-xs px-3 py-1.5 rounded-xl border transition-all ${
                          selectedFlavor === flavor
                            ? 'bg-[#00D2B4] text-[#080C0E] font-bold border-[#00D2B4] shadow-sm'
                            : 'bg-[#0E1A1D] text-gray-300 border-[#183138] hover:bg-[#14262B]'
                        }`}
                      >
                        {flavor}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* Timing & Usage Guide */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#0C181B] p-4 rounded-2xl border border-[#173038] space-y-1.5">
              <span className="text-xs font-bold text-[#00D2B4] uppercase flex items-center gap-1.5 font-outfit">
                <Clock className="w-4 h-4 text-[#00D2B4]" />
                <span>{t('أفضل توقيت للاستخدام (Timing)', 'Optimal Timing')}</span>
              </span>
              <p className="text-xs text-gray-300 leading-relaxed">
                {t(product.timing.ar, product.timing.en)}
              </p>
            </div>

            <div className="bg-[#0C181B] p-4 rounded-2xl border border-[#173038] space-y-1.5">
              <span className="text-xs font-bold text-[#00D2B4] uppercase flex items-center gap-1.5 font-outfit">
                <Dumbbell className="w-4 h-4 text-[#00D2B4]" />
                <span>{t('طريقة التحضير والجرعة (Directions)', 'How to Use & Directions')}</span>
              </span>
              <p className="text-xs text-gray-300 leading-relaxed">
                {t(product.usageGuide.ar, product.usageGuide.en)}
              </p>
            </div>
          </div>

          {/* Key Formula Highlights */}
          <div className="bg-[#0C181B] rounded-2xl p-4 sm:p-5 border border-[#173038]">
            <h4 className="text-xs font-bold text-[#00D2B4] uppercase tracking-wider mb-2.5 flex items-center gap-1.5 font-outfit">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t('مميزات وتركيبة المكمل', 'Key Formula Highlights')}</span>
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-200">
              {(isArabic ? product.features.ar : product.features.en).map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#00D2B4] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Nutrition Facts Table */}
          {product.nutritionFacts && product.nutritionFacts.length > 0 && (
            <div className="bg-[#080E10] rounded-2xl p-4 border border-[#152A30]">
              <span className="text-xs font-bold text-gray-300 block mb-2.5 uppercase tracking-wider font-outfit">
                {t('حقائق القيمة الغذائية بالسكوب (Supplement Facts):', 'Nutritional Facts per Serving:')}
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                {product.nutritionFacts.map((fact, idx) => (
                  <div key={idx} className="bg-[#0C1619] p-2.5 rounded-xl border border-[#172D34] flex items-center justify-between">
                    <span className="text-gray-400">{t(fact.labelAr, fact.labelEn)}:</span>
                    <span className="font-bold text-white">{fact.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer Order CTA Bar */}
        <div className="p-4 sm:p-5 border-t border-[#162A31] bg-[#070D0F] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3 text-xs text-gray-300">
            <span className="flex items-center gap-1 text-[#00F0FF]">
              <Truck className="w-3.5 h-3.5 text-[#00D2B4]" />
              <span>{t('توصيل لجميع مناطق القاهرة', 'Cairo Delivery Available')}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-gray-400">
              <MapPin className="w-3.5 h-3.5 text-[#00D2B4]" />
              <span>{t('متوفر بالمحل (الساحل)', 'In Store (Sahel)')}</span>
            </span>
          </div>

          <button
            type="button"
            onClick={handleOrderWithFlavor}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-[#25D366] via-[#20BA5A] to-[#128C7E] hover:from-[#2bf075] hover:to-[#17a594] text-white font-bold text-sm py-3.5 px-6 rounded-2xl shadow-xl shadow-[#25D366]/25 transition-transform hover:scale-[1.02] active:scale-98"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>{t('اطلب هذا المكمل عبر WhatsApp الآن', 'Order this Supplement via WhatsApp')}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
