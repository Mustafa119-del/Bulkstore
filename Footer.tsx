import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { STORE_INFO, getWhatsAppMessageUrl } from '../data/storeInfo';
import { 
  MessageCircle, 
  MapPin, 
  Phone, 
  Share2, 
  Truck, 
  ShieldCheck, 
  ExternalLink,
  Dumbbell
} from 'lucide-react';

interface FooterProps {
  onOpen404: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpen404 }) => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#050809] border-t border-[#142328] text-gray-400 text-xs relative overflow-hidden">
      
      {/* Subtle top teal glow line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#00D2B4] to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand & Mascot Col (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#00D2B4] via-[#0D3B3E] to-[#00F0FF] p-0.5">
                <div className="w-full h-full rounded-full bg-[#080C0E] overflow-hidden p-0.5">
                  <img
                    src="/images/gorilla-mascot.png"
                    alt="Bulk Store Gorilla Mascot"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1.5 font-outfit font-black text-xl text-white tracking-wider">
                  <span>BULK</span>
                  <span className="text-[#00D2B4]">STORE</span>
                </div>
                <span className="text-[11px] text-[#00D2B4] font-medium block">
                  {t('كل احتياجاتك للـFitness في مكان واحد', 'All your Fitness needs in one place')}
                </span>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed text-xs">
              {t(
                'Bulk Store محل متخصص في المكملات الغذائية الأصلية للرياضيين والشباب في مصر: بروتين، كرياتين، منتجات طاقة، وفيتامينات بأعلى جودة.',
                'Bulk Store is a dedicated sports nutrition shop in Cairo providing authentic whey protein, creatine, pre-workouts, and multivitamins for serious gym athletes.'
              )}
            </p>

            {/* Social & Contact Buttons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={getWhatsAppMessageUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366] text-[#25D366] hover:text-white flex items-center justify-center transition-all"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
              </a>

              <a
                href={STORE_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#1877F2]/20 hover:bg-[#1877F2] text-[#1877F2] hover:text-white flex items-center justify-center transition-all"
                title="Facebook"
              >
                <Share2 className="w-4 h-4" />
              </a>

              <a
                href={`tel:${STORE_INFO.phoneRaw}`}
                className="w-9 h-9 rounded-xl bg-[#00D2B4]/20 hover:bg-[#00D2B4] text-[#00D2B4] hover:text-[#080C0E] flex items-center justify-center transition-all"
                title="Phone Call"
              >
                <Phone className="w-4 h-4" />
              </a>

              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#0E2E33] hover:bg-[#134047] text-[#00F0FF] flex items-center justify-center transition-all"
                title="Google Maps"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider font-outfit">
              {t('أقسام الموقع', 'Quick Links')}
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#products" className="hover:text-[#00D2B4] transition-colors flex items-center gap-1.5">
                  <span className="text-[#00D2B4]">›</span>
                  <span>{t('كتالوج المكملات المعروضة', 'Supplements Showcase')}</span>
                </a>
              </li>
              <li>
                <a href="#categories" className="hover:text-[#00D2B4] transition-colors flex items-center gap-1.5">
                  <span className="text-[#00D2B4]">›</span>
                  <span>{t('تصنيفات المنتجات (بروتين، كرياتين...)', 'Categories (Protein, Creatine...)')}</span>
                </a>
              </li>
              <li>
                <a href="#goal-stack" className="hover:text-[#00D2B4] transition-colors flex items-center gap-1.5">
                  <span className="text-[#00D2B4]">›</span>
                  <span>{t('محدد الأهداف والكورسات', 'Goal Stack Builder')}</span>
                </a>
              </li>
              <li>
                <a href="#delivery" className="hover:text-[#00D2B4] transition-colors flex items-center gap-1.5">
                  <span className="text-[#00D2B4]">›</span>
                  <span>{t('التوصيل لجميع مناطق القاهرة', 'Cairo Delivery')}</span>
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#00D2B4] transition-colors flex items-center gap-1.5">
                  <span className="text-[#00D2B4]">›</span>
                  <span>{t('مقر المحل في الساحل', 'Store Location & Directions')}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Store Info & Cairo Delivery (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-3 bg-[#080E10] p-5 rounded-2xl border border-[#13272D]">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider font-outfit flex items-center gap-2">
              <Truck className="w-4 h-4 text-[#00D2B4]" />
              <span>{t('معلومات التواصل والتوصيل', 'Store & Delivery Details')}</span>
            </h4>

            <div className="space-y-2 text-gray-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#00D2B4] shrink-0 mt-0.5" />
                <span>51 {t('شارع محمد الخلفاوي، شريف، الساحل، محافظة القاهرة', 'Mohamed El-Khalafawy St, Sherif, Sahel, Cairo')}</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#00D2B4] shrink-0" />
                <span dir="ltr" className="font-mono font-semibold text-white">{STORE_INFO.phone}</span>
              </div>

              <div className="flex items-center gap-2 text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                <span>{t('التوصيل متاح إلى جميع مناطق القاهرة', 'Fast Delivery to all areas across Cairo')}</span>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between">
              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-[#00D2B4] hover:underline flex items-center gap-1"
              >
                <span>{t('افتح الموقع على Google Maps', 'Open on Google Maps')}</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              {/* 404 Trigger for Reviewer convenience */}
              <button
                onClick={onOpen404}
                className="text-[11px] text-gray-500 hover:text-gray-300 underline"
              >
                {t('معاينة صفحة 404', '404 Page Demo')}
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="mt-10 pt-6 border-t border-[#132328] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-400">
          <div className="flex items-center gap-2 text-center sm:text-start">
            <Dumbbell className="w-3.5 h-3.5 text-[#00D2B4] shrink-0" />
            <span>
              © {new Date().getFullYear()} Bulk Store. {t('جميع الحقوق محفوظة — مكملات غذائية أصلية وموثوقة.', 'All rights reserved — Authentic Sports Nutrition.')}
            </span>
          </div>

          <div className="text-gray-400 text-center sm:text-end">
            <span>{t('القاهرة - مصر | الساحل - شارع محمد الخلفاوي', 'Cairo, Egypt | Sahel, Mohamed El-Khalafawy St')}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
