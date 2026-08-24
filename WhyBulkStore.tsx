import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  ShieldCheck, 
  MapPin, 
  Truck, 
  MessageSquare, 
  Sparkles, 
  CheckCircle,
  Dumbbell
} from 'lucide-react';

export const WhyBulkStore: React.FC = () => {
  const { t } = useLanguage();

  const reasons = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#00D2B4]" />,
      titleAr: 'ماركات أصلية وموثوقة 100%',
      titleEn: '100% Authentic Brands',
      descriptionAr: 'نختار فقط الماركات العالمية المعترف بها رياضياً مثل Optimum Nutrition و MuscleTech و Dymatize و Cellucor مع تواريخ صلاحية واضحة ومضمونة.',
      descriptionEn: 'Only globally recognized sports nutrition brands with clear expiration dates and sealed factory authenticity.'
    },
    {
      icon: <Truck className="w-6 h-6 text-[#00D2B4]" />,
      titleAr: 'توصيل متاح لجميع مناطق القاهرة',
      titleEn: 'Cairo-Wide Delivery',
      descriptionAr: 'خدمة توصيل سريعة تغطي كل أحياء ومناطق القاهرة حتى باب بيتك أو جيمك، مع التنسيق الفوري عبر WhatsApp.',
      descriptionEn: 'Fast courier delivery service covering all districts across Cairo directly to your doorstep or gym.'
    },
    {
      icon: <MapPin className="w-6 h-6 text-[#00D2B4]" />,
      titleAr: 'محل حقيقي يمكنك زيارته ومعاينة المنتجات',
      titleEn: 'Physical Storefront to Visit',
      descriptionAr: 'لسنا مجرد صفحة افتراضية؛ مقرنا معروف في 51 شارع محمد الخلفاوي بالساحل - القاهرة، تقدر تشرفنا وتشوف منتجاتك بنفسك.',
      descriptionEn: 'Not just an online page; visit us at 51 Mohamed El-Khalafawy St, Sahel, Cairo to inspect products in person.'
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-[#00D2B4]" />,
      titleAr: 'سهولة التواصل والمشورة السريعة',
      titleEn: 'Direct WhatsApp Support',
      descriptionAr: 'تواصل مباشر مع شباب متخصصين يفهمون احتياجك وهدفك التدريبي ويساعدونك تختار المكمل الصحيح بدون مبالغة أو تعقيد.',
      descriptionEn: 'Direct contact with knowledgeable fitness staff to assist with your stack selection honestly.'
    },
    {
      icon: <Dumbbell className="w-6 h-6 text-[#00D2B4]" />,
      titleAr: 'تنوع شامل لكل احتياجات الـ Fitness',
      titleEn: 'Complete Fitness Catalog',
      descriptionAr: 'من البروتينات الصافية وكورسات التنشيف، إلى منتجات زيادة الوزن والطاقة والفيتامينات والأحماض الأمينية.',
      descriptionEn: 'From lean isolate proteins and cutting stacks to mass gainers, pre-workouts, and essential athlete multivitamins.'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-[#00D2B4]" />,
      titleAr: 'وضوح وشفافية تامة',
      titleEn: 'Full Transparency',
      descriptionAr: 'أسعار واضحة، تفاصيل المكملات بالسكوب، صور حقيقية، ومعلومات دقيقة تساعدك على تحقيق النتيجة التي تتمرن لأجلها.',
      descriptionEn: 'Clear scoop details, real supplement photos, transparent communication, and genuine fitness focus.'
    }
  ];

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-[#080C0E] relative overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#0E3D42]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E282E] text-[#00D2B4] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('الثقة والأصالة', 'Trust & Authenticity')}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-alexandria">
            {t('لماذا يختار أبطال الجيم', 'Why Lifters Choose')} <span className="text-[#00D2B4]">Bulk Store؟</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-400 mt-2">
            {t(
              'مكملاتك استثمار في صحتك وعضلاتك؛ لذلك نلتزم بتقديم منتجات أصلية وتجربة تسوق موثوقة في القاهرة.',
              'Your supplements are an investment in your fitness and physique; we ensure authentic nutrition you can trust.'
            )}
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {reasons.map((item, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-b from-[#0E181B] to-[#0A1114] rounded-2xl sm:rounded-3xl p-6 sm:p-7 border border-[#172D34] hover:border-[#00D2B4]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#00D2B4]/10 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#112428] border border-[#1A3A42] flex items-center justify-center mb-5 group-hover:bg-[#00D2B4] group-hover:text-[#080C0E] transition-colors">
                  {item.icon}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#00D2B4] transition-colors mb-2.5">
                  {t(item.titleAr, item.titleEn)}
                </h3>

                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {t(item.descriptionAr, item.descriptionEn)}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-[#14262C] flex items-center gap-1.5 text-xs text-[#00D2B4] font-semibold">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>{t('معتمد ومضمون', 'Verified Standard')}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
