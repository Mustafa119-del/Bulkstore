import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { STORE_INFO, getWhatsAppMessageUrl } from '../data/storeInfo';
import { 
  MessageCircle, 
  Phone, 
  MapPin, 
  Share2, 
  Send, 
  Sparkles, 
  ExternalLink,
  ShieldCheck
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  const [customerName, setCustomerName] = useState('');
  const [selectedGoal, setSelectedGoal] = useState('تضخيم وبناء عضلات');
  const [cairoArea, setCairoArea] = useState('');
  const [customNotes, setCustomNotes] = useState('');

  const handleCustomWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `مرحباً Bulk Store 👋\nأنا ${customerName || 'كابتن'} من منطقة (${cairoArea || 'القاهرة'}).\nهدفي في الجيم: ${selectedGoal}.\nتفاصيل إضافية: ${customNotes || 'أريد معرفة المكملات المناسبة والأسعار المتوفرة والتوصيل.'}`;
    window.open(`https://wa.me/201509907801?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#0A0F12] border-t border-[#15252A] relative">
      {/* Background Accent */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#00D2B4]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E282E] text-[#00D2B4] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('تواصل مباشر وطلب سريع', 'Direct WhatsApp & Contact')}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-alexandria">
            {t('جاهز تبدأ رحلة الـ', 'Ready to Start Your')} <span className="text-[#00D2B4]">{t('Bulk؟ تواصل معنا', 'Bulk? Contact Us')}</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-400 mt-2">
            {t(
              'راسلنا على WhatsApp أو كلمنا مباشرة على +20 15 09907801 وسنرد عليك فوراً بكل التفاصيل.',
              'Message us on WhatsApp or call +20 15 09907801 for instant supplement guidance and orders.'
            )}
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Direct Channels Cards (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* WhatsApp Primary Card */}
            <a
              href={getWhatsAppMessageUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-gradient-to-r from-[#113123] to-[#0D211A] hover:from-[#153e2d] hover:to-[#112a21] p-6 rounded-3xl border border-[#25D366]/40 hover:border-[#25D366] transition-all duration-300 shadow-xl hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 rounded-2xl bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-[#25D366]/30">
                  <MessageCircle className="w-6 h-6 fill-white" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider bg-[#25D366]/20 text-[#25D366] px-3 py-1 rounded-full border border-[#25D366]/30">
                  {t('الرد الأسرع', 'Fastest Response')}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-[#25D366] transition-colors">
                {t('محادثة WhatsApp الفورية', 'Instant WhatsApp Chat')}
              </h3>
              <p className="text-xs text-gray-300 mt-1">
                {t('استفسر عن أي مكمل، اطلب توصيل للقاهرة، أو احجز منتجك.', 'Direct chat for inquiries, stacks, and Cairo orders.')}
              </p>
              <span className="inline-block mt-3 text-sm font-black text-[#25D366] font-mono" dir="ltr">
                +20 15 09907801
              </span>
            </a>

            {/* Direct Phone Call Card */}
            <a
              href={`tel:${STORE_INFO.phoneRaw}`}
              className="group block bg-[#0E181B] hover:bg-[#122024] p-5 rounded-2xl border border-[#182F36] hover:border-[#00D2B4]/40 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#132A30] text-[#00D2B4] flex items-center justify-center shrink-0 group-hover:bg-[#00D2B4] group-hover:text-[#080C0E] transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{t('اتصال هاتفي مباشر', 'Direct Phone Call')}</h4>
                  <p className="text-xs text-gray-400 mt-0.5">{t('يومياً من 2 ظهراً حتى 12 ليلاً', 'Daily 2 PM - Midnight')}</p>
                  <span className="text-xs font-bold text-[#00D2B4] font-mono mt-1 inline-block" dir="ltr">
                    {STORE_INFO.phone}
                  </span>
                </div>
              </div>
            </a>

            {/* Facebook Official Page */}
            <a
              href={STORE_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-[#0E181B] hover:bg-[#122024] p-5 rounded-2xl border border-[#182F36] hover:border-[#1877F2]/60 transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#1877F2]/20 text-[#1877F2] flex items-center justify-center shrink-0">
                    <Share2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-[#1877F2] transition-colors">
                      {t('صفحة الفيسبوك الرسمية', 'Official Facebook Page')}
                    </h4>
                    <p className="text-xs text-gray-400 mt-0.5">{t('تابع أحدث العروض والوصول الجديد', 'Follow news & supplement restocks')}</p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-[#1877F2] transition-colors" />
              </div>
            </a>

            {/* Storefront summary */}
            <div className="bg-[#0A1316] p-4 rounded-2xl border border-[#15282E] flex items-center gap-3 text-xs text-gray-300">
              <MapPin className="w-4 h-4 text-[#00D2B4] shrink-0" />
              <span>
                <strong>{t('عنوان المحل:', 'Address:')}</strong> 51 {t('شارع محمد الخلفاوي، الساحل، القاهرة', 'Mohamed El-Khalafawy St, Sahel, Cairo')}
              </span>
            </div>

          </div>

          {/* Quick WhatsApp Inquiry Form Helper (lg:col-span-7) */}
          <div className="lg:col-span-7 bg-gradient-to-b from-[#0E1C20] to-[#0A1316] rounded-3xl p-6 sm:p-8 border border-[#1A3740] shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#080E10] border border-[#00D2B4]/40 p-1 flex items-center justify-center shrink-0">
                <img
                  src="/images/gorilla-mascot.png"
                  alt="Bulk Mascot"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-alexandria">
                  {t('نموذج تجهيز الطلب والاستفسار السريع', 'Quick WhatsApp Order Builder')}
                </h3>
                <p className="text-xs text-gray-400">
                  {t('املأ التفاصيل وسيتم تحويلها لرسالة WhatsApp جاهزة بضغطة زر', 'Fill details to generate a prefilled WhatsApp inquiry')}
                </p>
              </div>
            </div>

            <form onSubmit={handleCustomWhatsAppSend} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                    {t('اسم الكابتن', 'Your Name')}
                  </label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder={t('مثال: أحمد محمد', 'e.g., Ahmed')}
                    className="w-full bg-[#080E10] border border-[#183138] focus:border-[#00D2B4] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none transition-colors"
                  />
                </div>

                {/* Cairo Area */}
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                    {t('منطقتك في القاهرة (للتوصيل)', 'Cairo Area / District')}
                  </label>
                  <input
                    type="text"
                    value={cairoArea}
                    onChange={(e) => setCairoArea(e.target.value)}
                    placeholder={t('مثال: شبرا، مدينة نصر، المعادي...', 'e.g., Sahel, Nasr City, Maadi...')}
                    className="w-full bg-[#080E10] border border-[#183138] focus:border-[#00D2B4] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Fitness Goal Select */}
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                  {t('هدفك الرياضي الأساسي', 'Primary Fitness Goal')}
                </label>
                <select
                  value={selectedGoal}
                  onChange={(e) => setSelectedGoal(e.target.value)}
                  className="w-full bg-[#080E10] border border-[#183138] focus:border-[#00D2B4] rounded-xl px-4 py-2.5 text-sm text-gray-200 focus:outline-none transition-colors cursor-pointer"
                >
                  <option value="تضخيم وبناء عضلات (Bulk)">{t('تضخيم وبناء عضلات وزيادة وزن (Bulk)', 'Bulking & Muscle Mass')}</option>
                  <option value="تنشيف وعضل صافي (Cut)">{t('تنشيف وحرق دهون وعضل صافي (Cut)', 'Lean Cutting & Shredding')}</option>
                  <option value="طاقة وبمب للتمرين (Pre-Workout & Energy)">{t('طاقة وبمب وتركيز عالي قبل التمرين', 'Explosive Energy & Pump')}</option>
                  <option value="فيتامينات وصحة ومفاصل">{t('فيتامينات وصحة عامة ومفاصل واستشفاء', 'Vitamins, Joint Health & Recovery')}</option>
                  <option value="استفسار عن مكمل معين">{t('استفسار عن توفر وسعر مكمل محدد', 'Inquiring about a specific supplement')}</option>
                </select>
              </div>

              {/* Custom Notes */}
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                  {t('المكملات المطلوبة أو أي تفاصيل إضافية', 'Specific Supplements or Extra Notes')}
                </label>
                <textarea
                  rows={3}
                  value={customNotes}
                  onChange={(e) => setCustomNotes(e.target.value)}
                  placeholder={t('مثال: عايز واي جولد ستاندرد شوكولاتة + كرياتين بلاتينيوم وتوصيل للساحل...', 'e.g., ON Gold Standard Chocolate + MuscleTech Creatine...')}
                  className="w-full bg-[#080E10] border border-[#183138] focus:border-[#00D2B4] rounded-xl p-3 text-sm text-white focus:outline-none transition-colors"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#25D366] via-[#20BA5A] to-[#128C7E] hover:from-[#2bf075] hover:to-[#17a594] text-white font-bold text-sm sm:text-base py-3.5 px-6 rounded-2xl shadow-xl shadow-[#25D366]/20 transition-transform hover:scale-[1.01] active:scale-98"
              >
                <Send className="w-4 h-4 fill-white" />
                <span>{t('إرسال الاستفسار على WhatsApp الآن', 'Send Inquiry to WhatsApp Now')}</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-gray-400 text-center pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00D2B4]" />
                <span>{t('سيتم تحويلك مباشرة لمحادثة المحل الرسمية +20 15 09907801', 'Direct connection to official store WhatsApp')}</span>
              </div>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
