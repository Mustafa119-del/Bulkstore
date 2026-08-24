import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { 
  ShieldCheck, 
  QrCode, 
  Lock, 
  Calendar, 
  CheckCircle2, 
  Building2,
  Sparkles
} from 'lucide-react';

export const AuthenticityGuide: React.FC = () => {
  const { t } = useLanguage();

  const trustPillars = [
    {
      icon: <Lock className="w-6 h-6 text-[#00D2B4]" />,
      titleAr: 'أختام الغلق الأصلية المحكمة (Factory Seals)',
      titleEn: 'Factory Security Seals',
      descAr: 'كل عبوة بروتين أو كرياتين مغلقة بإحكام بختم المصنع تحت الغطاء (Neck Band & Inner Seal) بدون أي تلاعب.',
      descEn: 'Every tub is 100% factory sealed with intact inner security foil and outer tamper-evident wrap.'
    },
    {
      icon: <QrCode className="w-6 h-6 text-[#00D2B4]" />,
      titleAr: 'باركود ومطابقة رقم الشحنة (Lot & Barcode)',
      titleEn: 'Lot Numbers & Barcode Matching',
      descAr: 'تطابق كامل لرقم التشغيلة وتاريخ الإنتاج المطبوع بالليزر على أسفل العبوة مع سيرفرات الشركة المصنعة.',
      descEn: 'Laser-etched lot numbers and expiration dates easily verifiable on manufacturer portals.'
    },
    {
      icon: <Calendar className="w-6 h-6 text-[#00D2B4]" />,
      titleAr: 'صلاحيات حديثة وتخزين بارد مثالي',
      titleEn: 'Fresh Expiry & Climate-Controlled Storage',
      descAr: 'جميع مكملات Bulk Store بتواريخ صلاحية حديثة ومخزنة في درجات حرارة ورطوبة مضبوطة للحفاظ على جودة البروتين والإنزيمات.',
      descEn: 'All products possess long shelf-life stored under climate-controlled conditions to preserve active enzymes.'
    },
    {
      icon: <Building2 className="w-6 h-6 text-[#00D2B4]" />,
      titleAr: 'محل مرخص وعنوان حقيقي في الساحل',
      titleEn: 'Licensed Physical Presence in Sahel',
      descAr: 'محل حقيقي في 51 شارع محمد الخلفاوي بالساحل، نتحمل مسؤولية كل علبة تخرج من عندنا مع إمكانية الفحص الكامل قبل الشراء.',
      descEn: 'Physical verified store at 51 Mohamed El-Khalafawy St, Sahel. Inspect your supplement before purchasing.'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#0A1013] border-t border-[#16272E] relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#0E3D42]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0E2A30] text-[#00D2B4] text-xs font-bold uppercase tracking-wider mb-3 border border-[#00D2B4]/30">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{t('معايير الجودة والأصالة', 'Authenticity & Quality Guarantee')}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-alexandria">
            {t('ضمان أصالة المكملات 100% في', '100% Guaranteed Genuine Supplements at')} <br />
            <span className="text-[#00D2B4]">Bulk Store Cairo</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-400 mt-2">
            {t(
              'صحتك وعضلاتك خط أحمر. نلتزم بأعلى معايير الشفافية والتوريد المعتمد للمكملات الرياضية في مصر.',
              'Your health and fitness progress are top priority. We operate with strict quality controls and verified sourcing.'
            )}
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {trustPillars.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#0C1518] rounded-3xl p-6 border border-[#183139] hover:border-[#00D2B4]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#00D2B4]/10 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#112429] border border-[#1A3C45] flex items-center justify-center mb-5 text-[#00D2B4]">
                  {item.icon}
                </div>

                <h3 className="text-base font-bold text-white mb-2 leading-snug">
                  {t(item.titleAr, item.titleEn)}
                </h3>

                <p className="text-xs text-gray-300 leading-relaxed">
                  {t(item.descAr, item.descEn)}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#14262C] flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{t('فحص مضمون قبل الاستلام', 'Inspected & Sealed')}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Gorilla Mascot Trust Callout */}
        <div className="mt-12 bg-gradient-to-r from-[#0C1F24] via-[#0E2A30] to-[#0A171A] rounded-3xl p-6 sm:p-8 border border-[#1C3E48] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#080E10] border border-[#00D2B4]/40 p-1 flex items-center justify-center shrink-0">
              <img
                src="/images/gorilla-mascot.png"
                alt="Bulk Mascot"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div>
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#00D2B4]" />
                <span>{t('شعار Bulk Store: مكملات تثق فيها ونتائج تتمرن لأجلها', 'Bulk Store Creed: Supplements You Trust. Results You Work For.')}</span>
              </h4>
              <p className="text-xs text-gray-300 mt-1">
                {t(
                  'تقدر تشرفنا في المحل بالساحل وتعاين العبوة بنفسك وتتأكد من الـ Seal والباركود قبل الدفع.',
                  'Visit us in Sahel to inspect the seal, lot number, and barcode in person before paying.'
                )}
              </p>
            </div>
          </div>

          <div className="shrink-0">
            <span className="text-xs font-mono font-bold bg-[#080E10] text-[#00D2B4] px-4 py-2 rounded-xl border border-[#00D2B4]/30 block text-center">
              100% AUTHENTIC GUARANTEE
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
