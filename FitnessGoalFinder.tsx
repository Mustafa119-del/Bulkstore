import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getWhatsAppMessageUrl } from '../data/storeInfo';
import { 
  Flame, 
  TrendingUp, 
  Zap, 
  ShieldCheck, 
  MessageCircle, 
  Check, 
  ArrowRight,
  ArrowLeft,
  Dumbbell
} from 'lucide-react';

interface GoalConfig {
  id: string;
  titleAr: string;
  titleEn: string;
  subtitleAr: string;
  subtitleEn: string;
  icon: React.ReactNode;
  recommendedStackAr: string[];
  recommendedStackEn: string[];
  descriptionAr: string;
  descriptionEn: string;
  whatsappMessage: string;
}

export const FitnessGoalFinder: React.FC = () => {
  const { t, isArabic } = useLanguage();
  const [activeGoal, setActiveGoal] = useState<string>('bulking');

  const goals: GoalConfig[] = [
    {
      id: 'bulking',
      titleAr: 'تضخيم وبناء عضلات (Bulk)',
      titleEn: 'Bulking & Mass Gain',
      subtitleAr: 'زيادة الوزن وكسر ثبات الكتلة العضلية',
      subtitleEn: 'Fast weight gain and maximum muscle size',
      icon: <TrendingUp className="w-6 h-6 text-[#00D2B4]" />,
      recommendedStackAr: [
        'Serious Mass Gainer (سعرات عالية وبروتين 50 جم)',
        'Creatine Monohydrate (لزيادة تخزين الـ ATP والضخامة)',
        'Pre-Workout (لطاقة جبارة لرفع أوزان أثقل)'
      ],
      recommendedStackEn: [
        'Serious Mass Gainer (High calories & 50g protein)',
        'Creatine Monohydrate (Max cell volume & ATP power)',
        'Explosive Pre-Workout (Heavy lifting energy)'
      ],
      descriptionAr: 'الباقة المخصصة لأصحاب الحرق العالي والشباب اللي عايزين يزيدوا في الوزن وحجم العضلات بأسرع وقت.',
      descriptionEn: 'Engineered for hardgainers looking to pack on pounds and breakthrough strength plateaus.',
      whatsappMessage: 'مرحباً Bulk Store 👋 عايز استفسر عن مكملات كورس التضخيم (Bulk Stack) المتاح عندكم.'
    },
    {
      id: 'cutting',
      titleAr: 'تنشيف وعضل صافي (Cut & Shred)',
      titleEn: 'Lean Cutting & Definition',
      subtitleAr: 'حرق الدهون وإبراز تفاصيل العضلات',
      subtitleEn: 'Zero fat, ultra-pure protein & vascularity',
      icon: <Flame className="w-6 h-6 text-[#00D2B4]" />,
      recommendedStackAr: [
        'Dymatize ISO 100 (أيزوليت هيدرولايزد خالٍ من السكر والدهون)',
        'Platinum Creatine (للحفاظ على الكتلة العضلية أثناء الدايت)',
        'Multivitamin Animal Pak (لتعويض نقص الفيتامينات)'
      ],
      recommendedStackEn: [
        'Dymatize ISO 100 (Hydrolyzed isolate with <1g fat/carb)',
        'Platinum Creatine (Retain muscle mass during caloric deficit)',
        'Universal Animal Pak (Full spectrum daily micronutrients)'
      ],
      descriptionAr: 'الخيار الأفضل للوصول لأفضل نسبة دهون مع الحفاظ على كامل الكتلة العضلية المكتسبة.',
      descriptionEn: 'The gold standard for getting shredded while safeguarding your hard-earned muscle mass.',
      whatsappMessage: 'مرحباً Bulk Store 👋 عايز استفسر عن مكملات كورس التنشيف والعضل الصافي (Shred Stack).'
    },
    {
      id: 'energy',
      titleAr: 'طاقة انفجارية وبمب (Energy & Pump)',
      titleEn: 'Energy, Pump & PRs',
      subtitleAr: 'تحطيم الأرقام القياسية والتمرين بأعلى تركيز',
      subtitleEn: 'Crush your personal records with high focus',
      icon: <Zap className="w-6 h-6 text-[#00D2B4]" />,
      recommendedStackAr: [
        'Cellucor C4 Pre-Workout (كافيين وبيتا ألانين وبمب قوي)',
        'ON Gold Standard Whey (تغذية العضلات فور انتهاء التمرين)',
        'Creatine Monohydrate (لدعم الطاقة المستمرة)'
      ],
      recommendedStackEn: [
        'Cellucor C4 Pre-Workout (Beta-alanine & razor sharp focus)',
        'ON Gold Standard Whey (Post-workout recovery protein)',
        'Creatine Monohydrate (Sustained power replenishment)'
      ],
      descriptionAr: 'مخصصة للرياضيين اللي محتاجين تركيز عالي ومستوى أداء استثنائي يخليهم يخلصوا أصعب تمرين بدون إرهاق.',
      descriptionEn: 'Maximized intensity and focus to fuel your most grueling gym workouts with zero sluggishness.',
      whatsappMessage: 'مرحباً Bulk Store 👋 محتاج استفسر عن مكملات الطاقة والـ Pre-Workout المتوفرة لديكم.'
    },
    {
      id: 'recovery',
      titleAr: 'استشفاء وصحة عامة (Health & Recovery)',
      titleEn: 'Recovery & Overall Health',
      subtitleAr: 'تقليل آلام العضلات وحماية المفاصل والمناعة',
      subtitleEn: 'Joint health, immunity & muscle repair',
      icon: <ShieldCheck className="w-6 h-6 text-[#00D2B4]" />,
      recommendedStackAr: [
        'Optimum Gold Standard Whey (24 جم بروتين مع BCAAs)',
        'Animal Pak Training Multi (أكثر من 85 عنصر وفيتامين)',
        'Omega-3 & Joint Support (لحماية المفاصل والأوتار)'
      ],
      recommendedStackEn: [
        'Optimum Gold Standard Whey (24g clean protein with BCAAs)',
        'Animal Pak Multi (85+ active performance vitamins)',
        'Omega-3 & Joint Support (Ligaments & joint protection)'
      ],
      descriptionAr: 'لكل من يتمرن بانتظام ويريد المحافظة على صحته العامة والمناعة وسرعة الاستشفاء بين أيام التمرين.',
      descriptionEn: 'Daily nutritional foundation for dedicated athletes demanding fast recovery and robust health.',
      whatsappMessage: 'مرحباً Bulk Store 👋 محتاج استفسر عن باقة الاستشفاء والفيتامينات (Recovery Stack).'
    }
  ];

  const currentGoal = goals.find((g) => g.id === activeGoal) || goals[0];

  return (
    <section id="goal-stack" className="py-16 sm:py-24 bg-[#0A1012] border-y border-[#15252A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E282E] text-[#00D2B4] text-xs font-bold uppercase tracking-wider mb-3">
            <Dumbbell className="w-3.5 h-3.5" />
            <span>{t('محدد الأهداف الرياضية', 'Supplement Stack Builder')}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-alexandria">
            {t('اختر هدفك في الجيم،', 'Choose Your Fitness Goal,')} <br className="hidden sm:inline" />
            <span className="text-[#00D2B4]">{t('واكتشف أفضل كورس مناسب لك', 'Discover Your Recommended Stack')}</span>
          </h2>
          <p className="text-sm text-gray-400 mt-2">
            {t(
              'كل هدف يحتاج تركيبة مختلفة من المكملات للوصول لأفضل نتيجة بأسرع وقت.',
              'Every fitness goal requires a targeted supplement combination to achieve maximum results.'
            )}
          </p>
        </div>

        {/* Goal Tabs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {goals.map((goal) => {
            const isActive = activeGoal === goal.id;
            return (
              <button
                key={goal.id}
                onClick={() => setActiveGoal(goal.id)}
                className={`p-4 sm:p-5 rounded-2xl text-start transition-all duration-300 border flex flex-col justify-between ${
                  isActive
                    ? 'bg-[#102428] border-[#00D2B4] cyan-glow shadow-xl -translate-y-1'
                    : 'bg-[#0D1619] hover:bg-[#111D22] border-[#182A30] text-gray-400 hover:text-gray-200'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors ${
                      isActive ? 'bg-[#00D2B4] text-[#080C0E]' : 'bg-[#142327] text-[#00D2B4]'
                    }`}
                  >
                    {goal.icon}
                  </div>
                  {isActive && (
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-[#00D2B4]/20 text-[#00F0FF] px-2 py-0.5 rounded-full border border-[#00D2B4]/30">
                      {t('محدد حالياً', 'Selected')}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className={`text-base font-bold transition-colors ${isActive ? 'text-white' : 'text-gray-200'}`}>
                    {t(goal.titleAr, goal.titleEn)}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1 line-clamp-1">
                    {t(goal.subtitleAr, goal.subtitleEn)}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Stack Details Card */}
        <div className="bg-gradient-to-br from-[#0F1C20] via-[#0D181B] to-[#080E10] rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#1C363E] shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2 text-xs font-bold text-[#00D2B4] uppercase tracking-wider font-outfit">
                <span className="w-2 h-2 rounded-full bg-[#00D2B4] animate-ping" />
                <span>{t('الكورس المقترح من Bulk Store', 'Recommended Supplement Stack')}</span>
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white font-alexandria">
                {t(currentGoal.titleAr, currentGoal.titleEn)}
              </h3>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                {t(currentGoal.descriptionAr, currentGoal.descriptionEn)}
              </p>

              {/* Stack items */}
              <div className="space-y-2.5 pt-2">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wide block">
                  {t('المكملات الموصى بها في هذا الكورس:', 'Included Supplements in this Stack:')}
                </span>
                {(isArabic ? currentGoal.recommendedStackAr : currentGoal.recommendedStackEn).map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 bg-[#0B1417] p-3 rounded-xl border border-[#172D34] text-xs sm:text-sm text-gray-200"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#00D2B4]/20 text-[#00D2B4] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Action Box */}
            <div className="lg:col-span-5 bg-[#091114] rounded-2xl p-6 border border-[#1B343D] flex flex-col justify-between space-y-6 text-center lg:text-start">
              
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#0E262B] p-1 border border-[#00D2B4]/40 flex items-center justify-center shrink-0">
                  <img
                    src="/images/gorilla-mascot.png"
                    alt="Bulk Mascot"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="text-start">
                  <h4 className="text-sm font-bold text-white">{t('استفسر عن كورس أهدافك', 'Inquire About Your Stack')}</h4>
                  <p className="text-xs text-gray-400">{t('متوفر فوراً مع خدمة توصيل القاهرة', 'In Stock with Cairo Delivery')}</p>
                </div>
              </div>

              <div className="space-y-2 text-xs text-gray-300 text-start bg-[#0D181B] p-3.5 rounded-xl border border-[#162B32]">
                <div className="flex items-center gap-2">
                  <span className="text-[#00D2B4]">✓</span>
                  <span>{t('جميع المنتجات أصلية 100% ومستوردة', '100% Authentic verified supplements')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#00D2B4]">✓</span>
                  <span>{t('إمكانية التعديل حسب ميزانيتك وخبرتك', 'Customizable to your budget & level')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#00D2B4]">✓</span>
                  <span>{t('توصيل لباب بيتك بجميع مناطق القاهرة', 'Doorstep delivery anywhere in Cairo')}</span>
                </div>
              </div>

              {/* Direct WhatsApp Stack CTA */}
              <a
                href={getWhatsAppMessageUrl(undefined, currentGoal.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#2bf075] hover:to-[#17a594] text-white font-bold text-sm py-3.5 px-5 rounded-xl shadow-lg shadow-[#25D366]/20 transition-all hover:scale-[1.02]"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>{t('اطلب هذا الكورس على WhatsApp', 'Order this Stack via WhatsApp')}</span>
                {isArabic ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </a>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
