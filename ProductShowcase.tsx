import React, { useState, useMemo } from 'react';
import { PRODUCTS, PRODUCT_CATEGORIES } from '../data/products';
import { Product, ProductCategory } from '../types';
import { ProductCard } from './ProductCard';
import { ProductModal } from './ProductModal';
import { useLanguage } from '../context/LanguageContext';
import { getWhatsAppMessageUrl } from '../data/storeInfo';
import { 
  Search, 
  Filter, 
  MessageCircle, 
  Sparkles, 
  ShieldCheck,
  RotateCcw,
  CheckCircle
} from 'lucide-react';

interface ProductShowcaseProps {
  selectedCategory: ProductCategory;
  onSelectCategory: (category: ProductCategory) => void;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);

  // Extract unique brands
  const brands = useMemo(() => {
    const brandSet = new Set<string>();
    PRODUCTS.forEach((p) => brandSet.add(p.brand));
    return Array.from(brandSet);
  }, []);

  // Filter products based on category, search, and brand
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }
      // Brand filter
      if (selectedBrand !== 'all' && product.brand !== selectedBrand) {
        return false;
      }
      // Search filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase().trim();
        const nameAr = product.name.ar.toLowerCase();
        const nameEn = product.name.en.toLowerCase();
        const brand = product.brand.toLowerCase();
        const catNameAr = product.categoryName.ar.toLowerCase();
        const catNameEn = product.categoryName.en.toLowerCase();

        return (
          nameAr.includes(query) ||
          nameEn.includes(query) ||
          brand.includes(query) ||
          catNameAr.includes(query) ||
          catNameEn.includes(query)
        );
      }
      return true;
    });
  }, [selectedCategory, selectedBrand, searchQuery]);

  const resetFilters = () => {
    onSelectCategory('all');
    setSelectedBrand('all');
    setSearchQuery('');
  };

  return (
    <section id="products" className="py-16 sm:py-24 bg-[#080C0E] relative">
      {/* Background accents */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#0E3D42]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#00D2B4]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E282E] text-[#00D2B4] text-xs font-bold uppercase tracking-wider mb-2.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{t('كتالوج المكملات الأصلية', 'Original Supplements Showcase')}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-alexandria">
              {t('تشكيلة مكملات', 'Premium Supplement')} <span className="text-[#00D2B4]">{t('Bulk Store', 'Collection')}</span>
            </h2>

            <p className="text-sm text-gray-400 mt-1 max-w-xl">
              {t(
                'اختر مكمّلك واستفسر فوراً عبر WhatsApp أو تفضل بزيارتنا في المحل.',
                'Select your supplement and inquire directly on WhatsApp or visit us in store.'
              )}
            </p>
          </div>

          {/* Quick Notice */}
          <div className="bg-[#0D181B] border border-[#183138] rounded-2xl px-4 py-2.5 flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" />
            <div className="text-xs">
              <span className="text-white font-bold block">{t('كل الماركات أصلية ومضمونة', '100% Genuine Imported Brands')}</span>
              <span className="text-gray-400">{t('Optimum Nutrition, MuscleTech, Dymatize, Cellucor...', 'Top certified gym brands')}</span>
            </div>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-[#0C1518] rounded-2xl sm:rounded-3xl p-4 sm:p-5 border border-[#172C33] shadow-xl mb-8 space-y-4">
          
          {/* Search Input and Brand Filter Row */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
            
            {/* Search Input */}
            <div className="sm:col-span-7 md:col-span-8 relative">
              <Search className="w-4 h-4 text-gray-400 absolute top-1/2 -translate-y-1/2 left-3.5 rtl:left-auto rtl:right-3.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('ابحث عن مكمل، بروتين، كرياتين، أو ماركة...', 'Search supplement, brand, or protein...')}
                className="w-full bg-[#080E10] border border-[#1C353E] focus:border-[#00D2B4] rounded-xl py-2.5 pl-10 pr-4 rtl:pl-4 rtl:pr-10 text-sm text-white placeholder-gray-500 focus:outline-none transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute top-1/2 -translate-y-1/2 right-3.5 rtl:right-auto rtl:left-3.5 text-xs text-gray-400 hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Brand Dropdown Selector */}
            <div className="sm:col-span-5 md:col-span-4 relative">
              <div className="relative">
                <Filter className="w-4 h-4 text-gray-400 absolute top-1/2 -translate-y-1/2 left-3 rtl:left-auto rtl:right-3 pointer-events-none" />
                <select
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="w-full bg-[#080E10] border border-[#1C353E] focus:border-[#00D2B4] rounded-xl py-2.5 pl-9 pr-4 rtl:pl-4 rtl:pr-9 text-sm text-gray-200 focus:outline-none transition-colors appearance-none cursor-pointer"
                >
                  <option value="all">{t('كل الماركات (All Brands)', 'All Brands')}</option>
                  {brands.map((brand) => (
                    <option key={brand} value={brand}>
                      {brand}
                    </option>
                  ))}
                </select>
              </div>
            </div>

          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar text-xs font-semibold">
            {PRODUCT_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id as ProductCategory)}
                className={`whitespace-nowrap px-3.5 py-2 rounded-xl transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#00D2B4] text-[#080C0E] font-bold shadow-md shadow-[#00D2B4]/20'
                    : 'bg-[#101E22] hover:bg-[#15272D] text-gray-300 hover:text-white border border-[#1A3138]'
                }`}
              >
                {t(cat.nameAr, cat.nameEn)}
              </button>
            ))}
          </div>

        </div>

        {/* Active Filters Summary & Count */}
        <div className="flex items-center justify-between text-xs text-gray-400 mb-6">
          <div className="flex items-center gap-2">
            <span>
              {t('عرض', 'Showing')} <strong className="text-[#00D2B4]">{filteredProducts.length}</strong> {t('منتجات متاحة', 'products in stock')}
            </span>
            {(selectedCategory !== 'all' || selectedBrand !== 'all' || searchQuery !== '') && (
              <button
                onClick={resetFilters}
                className="text-[#00F0FF] hover:underline flex items-center gap-1 font-semibold ml-2 rtl:mr-2"
              >
                <RotateCcw className="w-3 h-3" />
                <span>{t('إعادة ضبط الفلاتر', 'Reset filters')}</span>
              </button>
            )}
          </div>

          <span className="hidden sm:inline-flex items-center gap-1.5 text-emerald-400">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>{t('جاهز للتسليم الفوري بالقاهرة', 'Ready for immediate Cairo dispatch')}</span>
          </span>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenDetails={(p) => setActiveModalProduct(p)}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-16 px-4 bg-[#0D1619] rounded-3xl border border-[#19323A] max-w-lg mx-auto">
            <div className="w-16 h-16 rounded-full bg-[#14262C] flex items-center justify-center mx-auto mb-4 text-[#00D2B4]">
              <Sparkles className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              {t('لم نجد مكملاً يطابق بحثك', 'No exact match found')}
            </h3>
            <p className="text-xs text-gray-400 mb-6 leading-relaxed">
              {t(
                'هل تبحث عن مكمل معين مش معروض هنا؟ تواصل معنا على WhatsApp وسنوفر لك أي بروتين أو كرياتين تحتاجه!',
                'Looking for a specific supplement not listed here? Send us a WhatsApp message and we will source it for you!'
              )}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={resetFilters}
                className="w-full sm:w-auto px-4 py-2.5 bg-[#14272D] text-gray-200 rounded-xl text-xs font-semibold hover:bg-[#1A343D]"
              >
                {t('عرض كل المنتجات', 'Show All Products')}
              </button>
              <a
                href={getWhatsAppMessageUrl(undefined, `مرحباً Bulk Store 👋 أبحث عن مكمل غذائي: ${searchQuery}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>{t('اسألنا على WhatsApp', 'Ask us on WhatsApp')}</span>
              </a>
            </div>
          </div>
        )}

        {/* Custom Request Banner */}
        <div className="mt-12 bg-gradient-to-r from-[#0C1E22] via-[#0E2C33] to-[#0A1A1D] rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#1D404A] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#080E10] border border-[#00D2B4]/40 p-1 flex items-center justify-center shrink-0">
              <img
                src="/images/gorilla-mascot.png"
                alt="Bulk Store Mascot"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white font-alexandria">
                {t('محتاج استشارة لاختيار الكورس المناسب لجسمك؟', 'Need guidance choosing the right supplement stack?')}
              </h4>
              <p className="text-xs sm:text-sm text-gray-300 mt-0.5">
                {t(
                  'فريق Bulk Store جاهز يساعدك تختار المكمل المناسب لهدفك وتمرينك بدون تكاليف زيادة.',
                  'Bulk Store team provides honest advice on what matches your fitness goals and budget.'
                )}
              </p>
            </div>
          </div>

          <a
            href={getWhatsAppMessageUrl(undefined, 'مرحباً كابتن Bulk Store 👋 محتاج استشارة لاختيار أفضل كورس مكملات لهدفي في الجيم.')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto shrink-0 flex items-center justify-center gap-2 bg-[#00D2B4] hover:bg-[#00ebd0] text-[#080C0E] font-black text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-[#00D2B4]/25 transition-transform hover:scale-105 active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-[#080C0E]" />
            <span>{t('استشارة مجانية عبر WhatsApp', 'Free WhatsApp Consultation')}</span>
          </a>
        </div>

      </div>

      {/* Product Detail Modal */}
      <ProductModal
        product={activeModalProduct}
        onClose={() => setActiveModalProduct(null)}
      />
    </section>
  );
};
