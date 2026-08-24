import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { STORE_INFO } from '../data/storeInfo';
import { 
  MapPin, 
  Navigation, 
  Clock, 
  Phone, 
  Store, 
  ExternalLink,
  ShieldCheck
} from 'lucide-react';

export const LocationSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="location" className="py-16 sm:py-24 bg-[#080C0E] border-t border-[#15252A] relative">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#0E3D42]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E282E] text-[#00D2B4] text-xs font-bold uppercase tracking-wider mb-3">
            <Store className="w-3.5 h-3.5" />
            <span>{t('مقرنا وعنوان المحل', 'Store Location & Visit')}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-alexandria">
            {t('شرفنا بزيارة محل', 'Visit Our Physical')} <span className="text-[#00D2B4]">Bulk Store</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-400 mt-2">
            {t(
              'تعال عاين المكملات بنفسك، استشرنا، واشترِ كورس الـ Fitness المناسب لك في قلب الساحل بالقاهرة.',
              'Inspect your supplements in person, get direct advice, and pick up your fitness stack in Sahel, Cairo.'
            )}
          </p>
        </div>

        {/* Location & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Store Info Card (lg:col-span-5) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#0E1B1F] via-[#0C1619] to-[#080E10] rounded-3xl p-6 sm:p-8 border border-[#1B363F] shadow-2xl flex flex-col justify-between space-y-6">
            
            <div className="space-y-6">
              {/* Store Title & Badge */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-black text-white font-outfit uppercase tracking-wide">
                    BULK STORE
                  </h3>
                  <p className="text-xs text-[#00D2B4] font-semibold">
                    {t('مكملات غذائية أصلية - الساحل', 'Authentic Supplements - Sahel')}
                  </p>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-[#080E10] border border-[#00D2B4]/40 p-1 flex items-center justify-center">
                  <img
                    src="/images/gorilla-mascot.png"
                    alt="Bulk Mascot"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>

              {/* Address Box */}
              <div className="bg-[#080E10] p-4 rounded-2xl border border-[#162A30] space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-[#00D2B4]">
                  <MapPin className="w-4 h-4" />
                  <span>{t('العنوان بالتفصيل', 'Detailed Address')}</span>
                </div>
                <p className="text-sm font-semibold text-white leading-relaxed">
                  {t(STORE_INFO.addressAr, STORE_INFO.addressEn)}
                </p>
                <p className="text-xs text-gray-400">
                  {t('قريب من محطة مترو الخلفاوي ومنطقة شبرا والساحل', 'Easily accessible from El-Khalafawy Metro & Shubra')}
                </p>
              </div>

              {/* Working Hours Box */}
              <div className="bg-[#080E10] p-4 rounded-2xl border border-[#162A30] space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-[#00D2B4]">
                  <Clock className="w-4 h-4" />
                  <span>{t('مواعيد العمل', 'Opening Hours')}</span>
                </div>
                <p className="text-sm font-semibold text-white">
                  {t(STORE_INFO.workingHoursAr, STORE_INFO.workingHoursEn)}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{t('مفتوح يومياً لخدمتكم', 'Open 7 days a week')}</span>
                </div>
              </div>

              {/* Phone & Contact */}
              <div className="bg-[#080E10] p-4 rounded-2xl border border-[#162A30] space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-[#00D2B4]">
                  <Phone className="w-4 h-4" />
                  <span>{t('رقم المحل والـ WhatsApp', 'Phone & WhatsApp')}</span>
                </div>
                <a
                  href={`tel:${STORE_INFO.phoneRaw}`}
                  className="text-base font-bold text-white hover:text-[#00D2B4] transition-colors block"
                  dir="ltr"
                >
                  {STORE_INFO.phone}
                </a>
              </div>
            </div>

            {/* Direct Google Maps Action Button */}
            <div className="pt-2">
              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 bg-[#00D2B4] hover:bg-[#00ebd0] text-[#080C0E] font-black text-sm py-4 px-6 rounded-2xl shadow-xl shadow-[#00D2B4]/20 transition-all hover:scale-[1.02] active:scale-98"
              >
                <Navigation className="w-5 h-5 fill-[#080C0E]" />
                <span>{t('افتح الاتجاهات على Google Maps', 'Get Directions on Google Maps')}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Store Interior Photo & Interactive Map Embed (lg:col-span-7) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Storefront / Interior Image Card */}
            <div className="relative rounded-3xl overflow-hidden border border-[#1C363E] bg-[#0E1A1D] h-64 sm:h-72 group shadow-xl">
              <img
                src="/images/store-interior.jpg"
                alt="Bulk Store Cairo Interior"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080C0E] via-transparent to-black/30" />
              
              <div className="absolute bottom-4 inset-x-4 flex items-center justify-between">
                <div className="bg-[#080C0E]/85 backdrop-blur-md px-3.5 py-2 rounded-xl border border-[#1A3840]">
                  <p className="text-xs font-bold text-white flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#00D2B4]" />
                    <span>{t('أرفف ممتلئة بأحدث الماركات العالمية', 'Fully Stocked with Genuine Global Brands')}</span>
                  </p>
                </div>
                <span className="hidden sm:inline-block bg-[#00D2B4] text-[#080C0E] text-[11px] font-black px-3 py-1.5 rounded-xl">
                  #BULK_STORE_CAIRO
                </span>
              </div>
            </div>

            {/* Styled Map Container with Direct Link */}
            <div className="flex-1 min-h-[260px] bg-[#0A1417] rounded-3xl border border-[#1A333C] p-4 flex flex-col justify-between relative overflow-hidden shadow-xl">
              
              {/* Map Preview UI Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-xs font-mono text-gray-400 ml-2">Cairo, Sahel • Google Maps</span>
                </div>
                <a
                  href={STORE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#00D2B4] font-bold hover:underline flex items-center gap-1"
                >
                  <span>{t('فتح بالخريطة الكاملة', 'View Full Map')}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Map Visual / Mockup with Pin */}
              <div className="relative flex-1 rounded-2xl bg-[#081013] border border-[#16292F] overflow-hidden flex items-center justify-center p-6 text-center">
                {/* Background grid pattern */}
                <div className="absolute inset-0 bg-gym-grid opacity-30" />
                <div className="absolute w-44 h-44 rounded-full bg-[#00D2B4]/10 blur-xl" />

                <div className="relative z-10 space-y-3 max-w-md">
                  <div className="w-14 h-14 rounded-full bg-[#00D2B4] text-[#080C0E] flex items-center justify-center mx-auto shadow-xl shadow-[#00D2B4]/40 animate-bounce">
                    <MapPin className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-base font-black text-white font-alexandria">
                      51 {t('شارع محمد الخلفاوي - الساحل - القاهرة', 'Mohamed El-Khalafawy St - Sahel - Cairo')}
                    </h4>
                    <p className="text-xs text-gray-400 mt-1">
                      {t('اضغط على الزر أدناه لفتح موقع المحل المباشر والوصول بأسرع طريق عبر GPS.', 'Click below to open GPS navigation directly to Bulk Store.')}
                    </p>
                  </div>
                  <a
                    href={STORE_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#12282E] hover:bg-[#1A3A43] text-[#00D2B4] text-xs font-bold px-4 py-2 rounded-xl border border-[#00D2B4]/40 transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>https://maps.app.goo.gl/oNRVWSCZBfXB1qmG8</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
