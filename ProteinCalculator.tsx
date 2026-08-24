import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { playPowerPumpSound, playClickChime } from '../utils/audio';
import { 
  Calculator, 
  Dumbbell, 
  Flame, 
  TrendingUp, 
  Droplet, 
  MessageCircle, 
  Sparkles, 
  Send,
  Zap
} from 'lucide-react';

export const ProteinCalculator: React.FC = () => {
  const { t, isArabic } = useLanguage();

  const [weight, setWeight] = useState<number>(75);
  const [goal, setGoal] = useState<'bulk' | 'cut' | 'maintain'>('bulk');
  const [trainingFrequency, setTrainingFrequency] = useState<number>(4);

  // Calculations
  // Bulking: 2.0g to 2.2g per kg
  // Cutting: 2.2g to 2.5g per kg (high protein to preserve muscle in deficit)
  // Maintenance: 1.8g to 2.0g per kg
  const multiplier = goal === 'bulk' ? 2.0 : goal === 'cut' ? 2.3 : 1.8;
  const dailyProteinGrams = Math.round(weight * multiplier);
  const dailyWaterLiters = (weight * 0.04).toFixed(1);
  const scoopsNeeded = (dailyProteinGrams * 0.4 / 24).toFixed(1); // approx 40% from shakes

  const getRecommendedStack = () => {
    if (goal === 'bulk') {
      return {
        stackNameAr: 'كورس التضخيم وزيادة الوزن (Bulk & Mass Stack)',
        stackNameEn: 'Bulking & Mass Stack',
        supplementsAr: ['Serious Mass أو Gold Standard Whey', 'Creatine Monohydrate (5g يومياً)', 'C4 Pre-Workout لطاقة التمرين'],
        supplementsEn: ['Serious Mass or Gold Standard Whey', 'Creatine Monohydrate (5g daily)', 'C4 Pre-Workout for high energy'],
      };
    } else if (goal === 'cut') {
      return {
        stackNameAr: 'كورس التنشيف والعضل الصافي (Shred & Cut Stack)',
        stackNameEn: 'Lean Shred & Cut Stack',
        supplementsAr: ['Dymatize ISO 100 (أيزوليت 0 دهون)', 'Platinum Creatine (للحفاظ على العضل)', 'Animal Pak Multivitamins'],
        supplementsEn: ['Dymatize ISO 100 (Hydrolyzed zero fat)', 'Platinum Creatine (Retain muscle mass)', 'Animal Pak Multivitamins'],
      };
    } else {
      return {
        stackNameAr: 'كورس اللياقة والاستشفاء (Fitness & Recovery Stack)',
        stackNameEn: 'Daily Fitness & Recovery Stack',
        supplementsAr: ['Gold Standard 100% Whey', 'Animal Pak Vitamins', 'Creatine Monohydrate'],
        supplementsEn: ['Gold Standard 100% Whey', 'Animal Pak Vitamins', 'Creatine Monohydrate'],
      };
    }
  };

  const stack = getRecommendedStack();

  const handleWhatsAppSendReport = () => {
    playPowerPumpSound();
    const goalTitle = goal === 'bulk' ? 'تضخيم وبناء عضلات' : goal === 'cut' ? 'تنشيف وعضل صافي' : 'لياقة واستشفاء';
    const text = `مرحباً Bulk Store 👋\nحسبت احتياجي عبر موقعكم:\n- الوزن: ${weight} كجم\n- الهدف: ${goalTitle}\n- أيام التمرين: ${trainingFrequency} أيام أسبوعياً\n- الاحتياج اليومي للبروتين: ${dailyProteinGrams} جم\n- الكورس المقترح: ${stack.stackNameAr}\n\nعايز أعرف المكملات المتاحة لديكم والأسعار للتوصيل بالقاهرة! 💪`;
    window.open(`https://wa.me/201509907801?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section className="py-16 sm:py-24 bg-[#090F12] border-t border-[#15272E] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-[#00D2B4]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0E2A30] text-[#00D2B4] text-xs font-bold uppercase tracking-wider mb-3 border border-[#00D2B4]/30">
            <Calculator className="w-3.5 h-3.5" />
            <span>{t('حاسبة البروتين والكورس الذكية', 'Smart Protein & Stack Calculator')}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-alexandria">
            {t('احسب احتياجك اليومي من البروتين', 'Calculate Your Daily Protein & Stack')} <br />
            <span className="text-[#00D2B4]">{t('واكتشف الكورس الأنسب لجسمك', 'Tailored to Your Weight & Goal')}</span>
          </h2>
          <p className="text-sm text-gray-400 mt-2">
            {t(
              'أدخل وزنك وهدفك في الجيم وسيقوم النظام بحساب احتياجك من البروتين والماء وترشيح كورس المكملات المناسب فوراً.',
              'Input your body weight and gym target to receive an exact daily protein target and customized stack.'
            )}
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Inputs Column (lg:col-span-6) */}
          <div className="lg:col-span-6 bg-[#0C1619] rounded-3xl p-6 sm:p-8 border border-[#1A343D] shadow-2xl flex flex-col justify-between space-y-6">
            
            <div className="space-y-6">
              {/* Weight Slider */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-gray-200 flex items-center gap-2">
                    <Dumbbell className="w-4 h-4 text-[#00D2B4]" />
                    <span>{t('وزنك الحالي (كجم):', 'Current Body Weight (kg):')}</span>
                  </label>
                  <span className="text-lg font-black text-[#00D2B4] font-mono bg-[#071114] px-3 py-1 rounded-xl border border-[#162D34]">
                    {weight} {t('كجم', 'kg')}
                  </span>
                </div>
                <input
                  type="range"
                  min="45"
                  max="140"
                  value={weight}
                  onChange={(e) => {
                    setWeight(Number(e.target.value));
                    playClickChime();
                  }}
                  className="w-full accent-[#00D2B4] cursor-pointer h-2 bg-[#122328] rounded-lg"
                />
                <div className="flex justify-between text-[10px] text-gray-500 mt-1 font-mono">
                  <span>45 kg</span>
                  <span>75 kg</span>
                  <span>105 kg</span>
                  <span>140 kg</span>
                </div>
              </div>

              {/* Goal Selector */}
              <div>
                <label className="text-xs font-bold text-gray-200 block mb-2.5">
                  {t('هدفك الرياضي الأساسي:', 'Your Primary Fitness Goal:')}
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  <button
                    type="button"
                    onClick={() => {
                      setGoal('bulk');
                      playClickChime();
                    }}
                    className={`p-3 rounded-2xl border text-center transition-all flex flex-col items-center gap-1.5 ${
                      goal === 'bulk'
                        ? 'bg-[#102D33] border-[#00D2B4] text-white cyan-glow-sm'
                        : 'bg-[#080E10] border-[#182F36] text-gray-400 hover:text-gray-200'
                    }`}
                  >
                    <TrendingUp className={`w-5 h-5 ${goal === 'bulk' ? 'text-[#00D2B4]' : 'text-gray-400'}`} />
                    <span className="text-xs font-bold">{t('تضخيم (Bulk)', 'Bulking')}</span>
                    <span className="text-[10px] text-gray-400">2.0g / kg</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setGoal('cut');
                      playClickChime();
                    }}
                    className={`p-3 rounded-2xl border text-center transition-all flex flex-col items-center gap-1.5 ${
                      goal === 'cut'
                        ? 'bg-[#102D33] border-[#00D2B4] text-white cyan-glow-sm'
                        : 'bg-[#080E10] border-[#182F36] text-gray-400 hover:text-gray-200'
                    }`}
                  >
                    <Flame className={`w-5 h-5 ${goal === 'cut' ? 'text-[#00D2B4]' : 'text-gray-400'}`} />
                    <span className="text-xs font-bold">{t('تنشيف (Cut)', 'Cutting')}</span>
                    <span className="text-[10px] text-gray-400">2.3g / kg</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setGoal('maintain');
                      playClickChime();
                    }}
                    className={`p-3 rounded-2xl border text-center transition-all flex flex-col items-center gap-1.5 ${
                      goal === 'maintain'
                        ? 'bg-[#102D33] border-[#00D2B4] text-white cyan-glow-sm'
                        : 'bg-[#080E10] border-[#182F36] text-gray-400 hover:text-gray-200'
                    }`}
                  >
                    <Zap className={`w-5 h-5 ${goal === 'maintain' ? 'text-[#00D2B4]' : 'text-gray-400'}`} />
                    <span className="text-xs font-bold">{t('لياقة عامة', 'Fitness')}</span>
                    <span className="text-[10px] text-gray-400">1.8g / kg</span>
                  </button>
                </div>
              </div>

              {/* Training Frequency */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-gray-200">
                    {t('عدد أيام التمرين بالأسبوع:', 'Training Days Per Week:')}
                  </label>
                  <span className="text-sm font-bold text-[#00D2B4] font-mono">
                    {trainingFrequency} {t('أيام', 'Days')}
                  </span>
                </div>
                <div className="flex gap-2">
                  {[2, 3, 4, 5, 6].map((days) => (
                    <button
                      key={days}
                      type="button"
                      onClick={() => {
                        setTrainingFrequency(days);
                        playClickChime();
                      }}
                      className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-colors ${
                        trainingFrequency === days
                          ? 'bg-[#00D2B4] text-[#080C0E] border-[#00D2B4]'
                          : 'bg-[#080E10] text-gray-300 border-[#182F36] hover:bg-[#102025]'
                      }`}
                    >
                      {days} {t('يوم', 'd')}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Scientific Tip */}
            <div className="p-3.5 bg-[#081215] rounded-2xl border border-[#142A30] text-xs text-gray-400 flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-[#00D2B4] shrink-0 mt-0.5" />
              <span>
                {t(
                  'المعادلة مبنية على أحدث المعايير الرياضية الدولية للاعبي كمال الأجسام لضمان أفضل نمو واستشفاء عضلي.',
                  'Formulated according to international sports nutrition standards for optimal hypertrophy and tissue repair.'
                )}
              </span>
            </div>

          </div>

          {/* Results Output Column (lg:col-span-6) */}
          <div className="lg:col-span-6 bg-gradient-to-b from-[#0E2025] via-[#0A1619] to-[#080D0F] rounded-3xl p-6 sm:p-8 border border-[#1E3E47] shadow-2xl flex flex-col justify-between space-y-6">
            
            <div>
              {/* Top Result Badge */}
              <div className="flex items-center justify-between pb-4 border-b border-[#18343D]">
                <div className="flex items-center gap-2 text-xs font-bold text-[#00D2B4] uppercase tracking-wider font-outfit">
                  <span className="w-2 h-2 rounded-full bg-[#00D2B4] animate-ping" />
                  <span>{t('نتائجك المحسوبة بدقة', 'Your Customized Breakdown')}</span>
                </div>
                <span className="text-xs font-mono text-gray-400">
                  Bulk Store Coach
                </span>
              </div>

              {/* Big Protein Metric */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-[#080E10] p-4 sm:p-5 rounded-2xl border border-[#163138] text-start">
                  <div className="text-xs text-gray-400 mb-1 flex items-center gap-1.5">
                    <Dumbbell className="w-3.5 h-3.5 text-[#00D2B4]" />
                    <span>{t('احتياج البروتين اليومي', 'Daily Protein Target')}</span>
                  </div>
                  <div className="text-3xl sm:text-4xl font-black text-white font-outfit">
                    <span className="text-[#00D2B4] cyan-text-glow">{dailyProteinGrams}</span>
                    <span className="text-sm font-normal text-gray-400 ml-1"> {t('جم / يوم', 'g / day')}</span>
                  </div>
                  <p className="text-[11px] text-gray-500 mt-1">
                    ≈ {scoopsNeeded} {t('سكوب واي بروتين مع الوجبات', 'scoops of whey + meals')}
                  </p>
                </div>

                <div className="bg-[#080E10] p-4 sm:p-5 rounded-2xl border border-[#163138] text-start">
                  <div className="text-xs text-gray-400 mb-1 flex items-center gap-1.5">
                    <Droplet className="w-3.5 h-3.5 text-[#00F0FF]" />
                    <span>{t('احتياج الماء اليومي', 'Daily Water Intake')}</span>
                  </div>
                  <div className="text-3xl sm:text-4xl font-black text-white font-outfit">
                    <span className="text-[#00F0FF]">{dailyWaterLiters}</span>
                    <span className="text-sm font-normal text-gray-400 ml-1"> {t('لتر / يوم', 'L / day')}</span>
                  </div>
                  <p className="text-[11px] text-gray-500 mt-1">
                    {t('ضروري مع الكرياتين والتمرين', 'Essential with Creatine & training')}
                  </p>
                </div>
              </div>

              {/* Recommended Stack Box */}
              <div className="mt-6 bg-[#081216] p-4 sm:p-5 rounded-2xl border border-[#18343D] space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white uppercase font-outfit flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#00D2B4]" />
                    <span>{t(stack.stackNameAr, stack.stackNameEn)}</span>
                  </span>
                  <span className="text-[10px] bg-[#00D2B4]/20 text-[#00D2B4] px-2 py-0.5 rounded-full font-bold">
                    {t('المكملات المقترحة', 'Recommended')}
                  </span>
                </div>

                <ul className="space-y-1.5 text-xs text-gray-300">
                  {(isArabic ? stack.supplementsAr : stack.supplementsEn).map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-[#00D2B4] font-bold">⚡</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Direct WhatsApp Report CTA */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleWhatsAppSendReport}
                className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#25D366] via-[#20BA5A] to-[#128C7E] hover:from-[#2bf075] hover:to-[#17a594] text-white font-bold text-sm sm:text-base py-4 px-6 rounded-2xl shadow-xl shadow-[#25D366]/25 transition-transform hover:scale-[1.01] active:scale-98"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>{t('أرسل خطتي إلى Bulk Store على WhatsApp للتجهيز', 'Send My Plan to Bulk Store on WhatsApp')}</span>
                <Send className="w-4 h-4 rtl:rotate-180" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
