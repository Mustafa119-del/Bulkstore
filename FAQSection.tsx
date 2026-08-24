import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { STORE_FAQS } from '../data/storeExtraData';
import { getWhatsAppMessageUrl } from '../data/storeInfo';
import { playClickChime } from '../utils/audio';
import { 
  HelpCircle, 
  ChevronDown, 
  MessageCircle, 
  Sparkles
} from 'lucide-react';

export const FAQSection: React.FC = () => {
  const { t } = useLanguage();
  const [openFaqId, setOpenFaqId] = useState<string | null>(STORE_FAQS[0].id);

  const toggleFaq = (id: string) => {
    playClickChime();
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section className="py-16 sm:py-24 bg-[#080C0E] border-t border-[#15252A] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0E282E] text-[#00D2B4] text-xs font-bold uppercase tracking-wider mb-3 border border-[#00D2B4]/30">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{t('الأسئلة الشائعة وإجاباتها', 'Frequently Asked Questions')}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-alexandria">
            {t('كل ما تريد معرفته عن', 'Everything You Need to Know About')} <br />
            <span className="text-[#00D2B4]">{t('مكملات وتوصيل ومحل Bulk Store', 'Bulk Store Supplements & Services')}</span>
          </h2>

          <p className="text-sm text-gray-400 mt-2">
            {t(
              'إجابات واضحة ومباشرة لجميع تساؤلات أبطال الجيم والرياضيين.',
              'Clear answers regarding supplement authenticity, Cairo delivery, and store visits.'
            )}
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {STORE_FAQS.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#0E1C20] border-[#00D2B4]/60 shadow-lg shadow-[#00D2B4]/10'
                    : 'bg-[#0A1215] border-[#162930] hover:border-[#1F3E48]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-4 sm:p-5 text-start flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-bold text-white flex items-center gap-2.5">
                    <span className={`w-2 h-2 rounded-full transition-colors ${isOpen ? 'bg-[#00D2B4]' : 'bg-gray-600'}`} />
                    <span>{t(faq.questionAr, faq.questionEn)}</span>
                  </span>
                  <div
                    className={`w-7 h-7 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#00D2B4] text-[#080C0E]' : 'bg-[#122328] text-gray-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-[#162D35] bg-[#091316]/60">
                    <p>{t(faq.answerAr, faq.answerEn)}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-10 p-5 bg-[#0D181B] rounded-2xl border border-[#183138] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-start">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#122A30] text-[#00D2B4] flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">{t('عندك سؤال آخر محتاج إجابته؟', 'Have another question?')}</h4>
              <p className="text-xs text-gray-400">{t('فريق Bulk Store جاهز للرد الفوري على WhatsApp', 'Our team responds within minutes on WhatsApp')}</p>
            </div>
          </div>

          <a
            href={getWhatsAppMessageUrl(undefined, 'مرحباً Bulk Store 👋 عندي سؤال بخصوص المكملات والتوصيل.')}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-md transition-transform hover:scale-105"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>{t('اسألنا عبر WhatsApp', 'Ask on WhatsApp')}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
