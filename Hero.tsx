import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { STORE_INFO, getWhatsAppMessageUrl } from '../data/storeInfo';
import { playPowerPumpSound, playFlexSound, playClickChime } from '../utils/audio';
import { 
  MessageCircle, 
  MapPin, 
  Truck, 
  ShieldCheck, 
  Dumbbell, 
  Flame, 
  ArrowLeft, 
  ArrowRight,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export const Hero: React.FC = () => {
  const { t, isArabic } = useLanguage();
  const [clickedCTA, setClickedCTA] = useState(false);
  const [mascotFlexMode, setMascotFlexMode] = useState(false);

  const handleWhatsAppClick = () => {
    playPowerPumpSound();
    setClickedCTA(true);
    setTimeout(() => {
      setClickedCTA(false);
    }, 3000);
  };

  const handleToggleFlex = () => {
    const next = !mascotFlexMode;
    setMascotFlexMode(next);
    if (next) {
      playFlexSound();
    } else {
      playClickChime();
    }
  };

  return (
    <section className="relative overflow-hidden pt-6 pb-16 md:py-20 lg:py-24 bg-hero-radial">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 bg-gym-grid opacity-35 pointer-events-none" />
      
      {/* Subtle Cyan and Deep Teal Glow Orbs */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#00D2B4]/12 rounded-full blur-3xl pointer-events-none animate-pulse-subtle" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#0E3D42]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content Column (lg:col-span-7) */}
          <div className="lg:col-span-7 flex flex-col items-start text-start space-y-6">
            
            {/* Cairo Delivery & Authenticity Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0E252A] border border-[#00D2B4]/30 shadow-sm text-xs font-semibold text-[#00F0FF] backdrop-blur-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D2B4] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00D2B4]"></span>
              </span>
              <Truck className="w-3.5 h-3.5 text-[#00D2B4]" />
              <span>{t('التوصيل متاح إلى جميع مناطق القاهرة', 'Fast Delivery to all Cairo areas')}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs md:text-sm font-bold tracking-wider text-[#00D2B4] font-outfit uppercase">
                <Dumbbell className="w-4 h-4 text-[#00D2B4]" />
                <span>BULK STORE — PREMIUM FITNESS & SUPPLEMENTS</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight md:leading-[1.15] font-alexandria">
                {t('كل احتياجاتك للـ', 'All your Fitness needs in')}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2B4] via-[#00F0FF] to-[#00D2B4] cyan-text-glow font-outfit px-2">
                  Fitness
                </span>
                <br />
                {t('في مكان واحد', 'one single place')}
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg md:text-xl text-gray-300 font-medium max-w-xl leading-relaxed">
                {t(
                  'مكملات أصلية 100% موثوقة لأبطال الجيم والرياضيين. واي بروتين، كرياتين، طاقة قبل التمرين، وفيتامينات بأعلى جودة.',
                  'Supplements you trust. Results you work for. 100% authentic whey protein, creatine, pre-workouts, and vitamins for serious lifters.'
                )}
              </p>
            </div>

            {/* CTAs Section */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              {/* Primary WhatsApp CTA with Micro-Interaction */}
              <div className="relative group">
                {/* Micro-Interaction Toast Bubble */}
                {clickedCTA && (
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-[#00D2B4] text-[#080C0E] text-xs font-black px-4 py-1.5 rounded-xl shadow-xl shadow-[#00D2B4]/40 animate-bounce whitespace-nowrap z-30 flex items-center gap-1.5 border border-white/20">
                    <Flame className="w-3.5 h-3.5 fill-[#080C0E]" />
                    <span>{t('READY TO BULK? 💪 جاري فتح WhatsApp...', 'READY TO BULK? 💪 Opening WhatsApp...')}</span>
                  </div>
                )}

                <a
                  href={getWhatsAppMessageUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleWhatsAppClick}
                  className="w-full sm:w-auto flex items-center justify-center gap-3 bg-gradient-to-r from-[#25D366] via-[#20BA5A] to-[#128C7E] hover:from-[#2bf075] hover:to-[#17a594] text-white font-bold text-base md:text-lg px-7 py-4 rounded-2xl shadow-xl shadow-[#25D366]/25 hover:shadow-[#25D366]/40 transition-all duration-300 hover:scale-[1.02] active:scale-98"
                >
                  <MessageCircle className="w-6 h-6 fill-white" />
                  <span>{t('تواصل معنا على WhatsApp', 'Chat on WhatsApp')}</span>
                  {isArabic ? (
                    <ArrowLeft className="w-5 h-5 text-white/80 group-hover:-translate-x-1 transition-transform" />
                  ) : (
                    <ArrowRight className="w-5 h-5 text-white/80 group-hover:translate-x-1 transition-transform" />
                  )}
                </a>
              </div>

              {/* Secondary CTA: Store Visit */}
              <a
                href="#location"
                onClick={() => playClickChime()}
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-[#0F1C20] hover:bg-[#15272D] text-gray-200 hover:text-white font-semibold text-base px-6 py-4 rounded-2xl border border-[#1E3740] hover:border-[#00D2B4]/50 transition-all duration-300 hover:shadow-lg"
              >
                <MapPin className="w-5 h-5 text-[#00D2B4]" />
                <span>{t('زورنا في المحل (الساحل)', 'Visit Our Store in Sahel')}</span>
              </a>
            </div>

            {/* Quick Trust Badges */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-[#16272D] w-full max-w-xl">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#0E2D32] flex items-center justify-center text-[#00D2B4] shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">{t('ماركات أصلية 100%', '100% Authentic')}</h4>
                  <p className="text-[11px] text-gray-400">{t('مستوردة ومضمونة', 'Verified Brands')}</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-[#0E2D32] flex items-center justify-center text-[#00D2B4] shrink-0">
                  <Truck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">{t('توصيل القاهرة', 'Cairo Delivery')}</h4>
                  <p className="text-[11px] text-gray-400">{t('سريع لجميع المناطق', 'All Districts')}</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <div className="w-9 h-9 rounded-xl bg-[#0E2D32] flex items-center justify-center text-[#00D2B4] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">{t('محل حقيقي بالساحل', 'Physical Store')}</h4>
                  <p className="text-[11px] text-gray-400">{t('شريف - الخلفاوي', 'El-Khalafawy St')}</p>
                </div>
              </div>
            </div>

          </div>

          {/* Gorilla Mascot Visual Column (lg:col-span-5) */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Ambient Lighting Rings behind Gorilla */}
            <div className="absolute w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-gradient-to-tr from-[#00D2B4]/20 via-[#0A3D42]/30 to-transparent blur-2xl" />
            <div className="absolute -inset-2 rounded-full border border-[#00D2B4]/20 scale-95 pointer-events-none animate-pulse-subtle" />

            {/* Mascot Showcase Card */}
            <div 
              className={`relative z-10 w-full max-w-md rounded-3xl p-4 sm:p-6 bg-gradient-to-b from-[#101D21]/90 via-[#0C1518]/95 to-[#080C0E] border border-[#1D353D] shadow-2xl transition-all duration-500 ${
                mascotFlexMode ? 'scale-105 border-[#00D2B4] cyan-glow' : 'hover:border-[#00D2B4]/50'
              }`}
            >
              {/* Top Tag on Mascot Card */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00D2B4] animate-ping" />
                  <span className="text-xs font-extrabold text-white uppercase tracking-wider font-outfit">
                    THE BULK GORILLA MASCOT
                  </span>
                </div>

                <button
                  onClick={handleToggleFlex}
                  className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#0E2E33] hover:bg-[#00D2B4] text-[#00D2B4] hover:text-[#080C0E] border border-[#00D2B4]/40 transition-all flex items-center gap-1.5 cursor-pointer"
                  title="Gorilla Power Flex"
                >
                  <Dumbbell className="w-3 h-3" />
                  <span>{mascotFlexMode ? t('💪 أقصى قوة!', 'MAX POWER!') : t('جرّب الـ Flex', 'Flex Power')}</span>
                </button>
              </div>

              {/* Gorilla Image with Soft Cyan Rim Light */}
              <div className="relative rounded-2xl overflow-hidden bg-[#071316] border border-[#162D33] aspect-square flex items-center justify-center group cursor-pointer" onClick={handleToggleFlex}>
                <img
                  src="/images/gorilla-hero.png"
                  alt="Bulk Store Gorilla Mascot with Dumbbells"
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    mascotFlexMode 
                      ? 'scale-110 filter brightness-110 drop-shadow-[0_0_25px_rgba(0,210,180,0.6)]' 
                      : 'group-hover:scale-105 filter brightness-100'
                  }`}
                />

                {/* Overlay Badge at Bottom of Mascot */}
                <div className="absolute bottom-3 inset-x-3 bg-[#080C0E]/85 backdrop-blur-md rounded-xl p-3 border border-[#1C3A42] flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-white flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#00D2B4]" />
                      <span>{t('رمز القوة والـ Bulk', 'Strength & Bulk Mascot')}</span>
                    </p>
                    <p className="text-[10px] text-gray-400">
                      {t('مستوحى من هوية المحل وشغف الجيم', 'Bulk Store Official Mascot')}
                    </p>
                  </div>
                  <span className="text-xs font-bold text-[#00D2B4] font-mono">
                    #BULK_STORE
                  </span>
                </div>
              </div>

              {/* Quick Action under Mascot */}
              <div className="mt-4 flex items-center justify-between text-xs text-gray-400">
                <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{t('المحل مفتوح يومياً من 2 ظهراً', 'Store Open Daily from 2 PM')}</span>
                </span>
                <a
                  href={`tel:${STORE_INFO.phoneRaw}`}
                  className="text-[#00D2B4] font-semibold hover:underline font-mono"
                  dir="ltr"
                >
                  {STORE_INFO.phone}
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
