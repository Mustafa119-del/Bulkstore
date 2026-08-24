import React from 'react';
import { Product } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { getWhatsAppMessageUrl } from '../data/storeInfo';
import { 
  MessageCircle, 
  CheckCircle2, 
  Info, 
  Zap, 
  ShieldCheck,
  Flame
} from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onOpenDetails: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onOpenDetails,
}) => {
  const { t } = useLanguage();

  return (
    <div className="group bg-gradient-to-b from-[#101B1E] via-[#0C1518] to-[#080E10] rounded-2xl sm:rounded-3xl border border-[#1A2E35] hover:border-[#00D2B4]/60 transition-all duration-300 flex flex-col justify-between overflow-hidden hover:shadow-xl hover:shadow-[#00D2B4]/10 hover:-translate-y-1 relative">
      
      {/* Top Bar: Brand & Badges */}
      <div className="p-4 sm:p-5 pb-0 flex items-start justify-between gap-2 relative z-10">
        <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#00D2B4] font-outfit bg-[#0E282E] px-2.5 py-1 rounded-lg border border-[#00D2B4]/20">
          {product.brand}
        </span>

        {product.badge && (
          <span className="text-[10px] sm:text-[11px] font-bold text-[#E2E8F0] bg-gradient-to-r from-[#0E3D42] to-[#124B4F] px-2.5 py-1 rounded-lg border border-[#00F0FF]/30 flex items-center gap-1 shadow-sm">
            <Flame className="w-3 h-3 text-[#00D2B4]" />
            <span>{t(product.badge.ar, product.badge.en)}</span>
          </span>
        )}
      </div>

      {/* Product Image Container */}
      <div 
        onClick={() => onOpenDetails(product)}
        className="relative px-6 py-4 flex items-center justify-center cursor-pointer group-hover:scale-105 transition-transform duration-500 min-h-[200px]"
      >
        {/* Subtle cyan halo behind product */}
        <div className="absolute w-36 h-36 rounded-full bg-[#00D2B4]/10 blur-xl group-hover:bg-[#00D2B4]/20 transition-all duration-500" />
        
        <img
          src={product.image}
          alt={t(product.name.ar, product.name.en)}
          className="relative z-10 max-h-48 sm:max-h-52 w-auto object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)] filter brightness-95 group-hover:brightness-105 transition-all"
          loading="lazy"
        />

        {/* Floating Quick View Hint */}
        <div className="absolute inset-x-0 bottom-2 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          <span className="text-[11px] font-bold text-gray-200 bg-[#080C0E]/90 px-3 py-1 rounded-full border border-[#00D2B4]/40 flex items-center gap-1 backdrop-blur-sm">
            <Info className="w-3 h-3 text-[#00D2B4]" />
            <span>{t('اضغط للتفاصيل', 'Click for specs')}</span>
          </span>
        </div>
      </div>

      {/* Product Information Body */}
      <div className="p-4 sm:p-5 pt-2 flex-1 flex flex-col justify-between border-t border-[#15252A] bg-[#0A1316]/50">
        <div>
          {/* Category Tag */}
          <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-1.5">
            <Zap className="w-3 h-3 text-[#00D2B4]" />
            <span>{t(product.categoryName.ar, product.categoryName.en)}</span>
          </div>

          {/* Product Name */}
          <h3 
            onClick={() => onOpenDetails(product)}
            className="text-base sm:text-lg font-bold text-white group-hover:text-[#00D2B4] transition-colors line-clamp-2 cursor-pointer leading-snug"
          >
            {t(product.name.ar, product.name.en)}
          </h3>

          {/* Key Specs Pills */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {product.specs.proteinPerServing && (
              <span className="text-[11px] font-semibold bg-[#122328] text-gray-200 px-2 py-0.5 rounded-md border border-[#1F3942]">
                ⚡ {product.specs.proteinPerServing} {t('بروتين', 'Protein')}
              </span>
            )}
            {product.specs.creatinePerServing && (
              <span className="text-[11px] font-semibold bg-[#122328] text-gray-200 px-2 py-0.5 rounded-md border border-[#1F3942]">
                💪 {product.specs.creatinePerServing} {t('كرياتين', 'Creatine')}
              </span>
            )}
            {product.specs.caffeinePerServing && (
              <span className="text-[11px] font-semibold bg-[#122328] text-gray-200 px-2 py-0.5 rounded-md border border-[#1F3942]">
                🔥 {product.specs.caffeinePerServing} {t('كافيين', 'Caffeine')}
              </span>
            )}
            {product.specs.servings && (
              <span className="text-[11px] font-semibold bg-[#122328] text-gray-300 px-2 py-0.5 rounded-md border border-[#1F3942]">
                📦 {product.specs.servings}
              </span>
            )}
          </div>

          {/* In Stock Badge */}
          <div className="mt-3 flex items-center justify-between text-xs text-gray-400">
            <span className="flex items-center gap-1 text-emerald-400 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{t('متوفر بالمحل وللتوصيل', 'In Stock & Ready for Delivery')}</span>
            </span>
            <span className="flex items-center gap-1 text-gray-400 text-[11px]">
              <ShieldCheck className="w-3 h-3 text-[#00D2B4]" />
              <span>{t('أصلي 100%', '100% Original')}</span>
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-4 pt-3 border-t border-[#14262C] flex items-center gap-2">
          {/* Primary Action: Direct WhatsApp Order Inquiry */}
          <a
            href={getWhatsAppMessageUrl(t(product.name.ar, product.name.en))}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-[#25D366] to-[#1DA851] hover:from-[#2bf075] hover:to-[#22c35e] text-white font-bold text-xs sm:text-sm py-2.5 px-3 rounded-xl shadow-md shadow-[#25D366]/20 transition-all hover:scale-[1.02] active:scale-98"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>{t('استفسر عبر WhatsApp', 'Inquire on WhatsApp')}</span>
          </a>

          {/* Details Button */}
          <button
            onClick={() => onOpenDetails(product)}
            className="p-2.5 rounded-xl bg-[#122025] hover:bg-[#182C33] text-gray-300 hover:text-white border border-[#1B343D] transition-colors"
            title={t('تفاصيل المكمل', 'Product Details')}
          >
            <Info className="w-4 h-4 text-[#00D2B4]" />
          </button>
        </div>

      </div>

    </div>
  );
};
