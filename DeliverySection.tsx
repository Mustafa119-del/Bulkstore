import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CAIRO_DELIVERY_ZONES } from '../data/storeExtraData';
import { getWhatsAppMessageUrl } from '../data/storeInfo';
import { playClickChime, playPowerPumpSound } from '../utils/audio';
import { 
  Truck, 
  MapPin, 
  MessageCircle, 
  CheckCircle2, 
  Clock, 
  CreditCard, 
  ShieldCheck, 
  Zap
} from 'lucide-react';

export const DeliverySection: React.FC = () => {
  const { t } = useLanguage();
  const [selectedZoneId, setSelectedZoneId] = useState<string>(CAIRO_DELIVERY_ZONES[0].id);

  const selectedZone = CAIRO_DELIVERY_ZONES.find((z) => z.id === selectedZoneId) || CAIRO_DELIVERY_ZONES[0];

  const steps = [
    {
      step: '01',
      titleAr: 'اختر مكملاتك وتواصل عالـ WhatsApp',
      titleEn: 'Select Supplements & Message Us',
      descAr: 'راسلنا على +20 15 09907801 بالمنتجات التي تحتاجها أو استشرنا لاختيار الأنسب.',
      descEn: 'Send us the items you need or ask for stack advice on WhatsApp.'
    },
    {
      step: '02',
      titleAr: 'تأكيد التوفر وتفاصيل العنوان',
      titleEn: 'Confirm Stock & Cairo Address',
      descAr: 'نؤكد لك توفر المنتجات وتحديد موعد تسليم سريع مناسب ليومك.',
      descEn: 'We verify availability and schedule the fastest courier delivery.'
    },
    {
      step: '03',
      titleAr: 'استلام الأوردر والدفع براحتك',
      titleEn: 'Receive Order & Pay on Delivery',
      descAr: 'استلم المكملات مغلفة ومضمونة حتى باب بيتك أو الجيم مع إمكانية الدفع كاش أو إنستاباي.',
      descEn: 'Receive factory-sealed supplements with Cash or InstaPay on delivery.'
    }
  ];

  return (
    <section id="delivery" className="py-16 sm:py-24 bg-[#0A0F12] border-t border-[#15252A] relative overflow-hidden">
      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#00D2B4]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Banner Card */}
        <div className="bg-gradient-to-r from-[#0C1E23] via-[#0E282E] to-[#0A1619] rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#1C3E47] shadow-2xl relative overflow-hidden">
          
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#11353C] border border-[#00D2B4]/40 text-xs font-bold text-[#00F0FF] mb-6">
            <Truck className="w-4 h-4 text-[#00D2B4]" />
            <span>{t('خدمة التوصيل السريع داخل القاهرة', 'Cairo Fast Supplement Delivery')}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Content Left */}
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-alexandria leading-snug">
                {t('التوصيل متاح إلى', 'Delivery Available to')} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2B4] to-[#00F0FF]">
                  {t('جميع مناطق وأحياء القاهرة', 'All Areas Across Cairo')}
                </span>
              </h2>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                {t(
                  'مش محتاج تنزل أو تعطل تمرينك! اطلب مكملاتك من Bulk Store وهنوصلهالك مغلفة ومضمونة لأي مكان داخل القاهرة أو الجيزة بأعلى سرعة وأمان.',
                  'No need to skip your gym session. Order your supplements from Bulk Store and get fast, secure delivery anywhere in Cairo & Giza.'
                )}
              </p>

              {/* Interactive Zone Selector */}
              <div className="pt-2">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-2.5 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-[#00D2B4]" />
                  <span>{t('اختر منطقتك لمعرفة سرعة التوصيل:', 'Select Your District to Check Delivery Speed:')}</span>
                </span>
                
                {/* Zone buttons */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {CAIRO_DELIVERY_ZONES.map((zone) => {
                    const isSelected = selectedZoneId === zone.id;
                    return (
                      <button
                        key={zone.id}
                        type="button"
                        onClick={() => {
                          setSelectedZoneId(zone.id);
                          playClickChime();
                        }}
                        className={`text-xs px-3 py-1.5 rounded-xl border transition-all flex items-center gap-1.5 ${
                          isSelected
                            ? 'bg-[#00D2B4] text-[#080C0E] font-bold border-[#00D2B4] shadow-md shadow-[#00D2B4]/30'
                            : 'bg-[#081215] text-gray-300 hover:text-white border-[#172D34] hover:bg-[#0E1F24]'
                        }`}
                      >
                        <MapPin className="w-3 h-3" />
                        <span>{t(zone.nameAr, zone.nameEn)}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Selected Zone Details Box */}
                <div className="bg-[#071114] rounded-2xl p-4 border border-[#17323A] space-y-2 animate-fadeIn">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-[#00D2B4]" />
                      <span>{t(selectedZone.estimatedTimeAr, selectedZone.estimatedTimeEn)}</span>
                    </span>
                    <span className="text-[10px] font-bold uppercase bg-[#00D2B4]/20 text-[#00F0FF] px-2.5 py-0.5 rounded-full border border-[#00D2B4]/30">
                      {selectedZone.status === 'instant' ? t('⚡ فوري نفس اليوم', 'Instant') : t('⚡ توصيل سريع', 'Fast Delivery')}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {selectedZone.popularAreasAr.map((area, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] bg-[#0E1E22] text-gray-200 px-2.5 py-0.5 rounded-md border border-[#1A3740]"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Box Right */}
            <div className="lg:col-span-5 bg-[#080E10] rounded-2xl p-6 border border-[#183138] space-y-5">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#00D2B4]" />
                <span>{t('مزايا توصيل Bulk Store', 'Delivery Advantages')}</span>
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-gray-300">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00D2B4] shrink-0 mt-0.5" />
                  <span>{t('تغليف آمن ومحكم للمكملات والبروتين ضد الصدمات', 'Heavy duty shock-proof packaging')}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-[#00D2B4] shrink-0 mt-0.5" />
                  <span>{t('تنسيق موعد مناسب للتسليم معك خطوة بخطوة', 'Flexible scheduling to suit your training day')}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CreditCard className="w-4 h-4 text-[#00D2B4] shrink-0 mt-0.5" />
                  <span>{t('دفع عند الاستلام كاش أو عبر InstaPay', 'Cash on Delivery or InstaPay options')}</span>
                </div>
              </div>

              {/* Order via WhatsApp */}
              <a
                href={getWhatsAppMessageUrl(undefined, `مرحباً Bulk Store 👋 أريد طلب مكملات غذائية مع توصيل لمنطقة (${selectedZone.nameAr}).`)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playPowerPumpSound()}
                className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#2bf075] hover:to-[#17a594] text-white font-bold text-sm py-3.5 px-4 rounded-xl shadow-lg transition-transform hover:scale-[1.02]"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>{t('اطلب توصيل فوري على WhatsApp', 'Order Cairo Delivery via WhatsApp')}</span>
              </a>
            </div>

          </div>
        </div>

        {/* 3 Step Ordering Process */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#0D1518] rounded-2xl p-6 border border-[#16292F] relative group hover:border-[#00D2B4]/40 transition-colors"
            >
              <span className="text-3xl font-black text-[#00D2B4]/20 group-hover:text-[#00D2B4]/40 font-outfit absolute top-4 right-5 rtl:right-auto rtl:left-5 transition-colors">
                {item.step}
              </span>
              <h4 className="text-base font-bold text-white mb-2 pt-2">
                {t(item.titleAr, item.titleEn)}
              </h4>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                {t(item.descAr, item.descEn)}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
