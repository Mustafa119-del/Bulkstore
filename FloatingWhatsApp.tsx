import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getWhatsAppMessageUrl } from '../data/storeInfo';
import { MessageCircle, X, Dumbbell } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const { t } = useLanguage();
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 rtl:right-auto rtl:left-5 rtl:sm:left-6 z-40 flex flex-col items-end rtl:items-start select-none">
      
      {/* Interactive Tooltip Bubble */}
      {showTooltip && (
        <div className="mb-2 bg-[#0B1518] text-white text-xs font-semibold px-3.5 py-2 rounded-2xl border border-[#00D2B4]/40 shadow-2xl shadow-black/80 flex items-center gap-2 animate-bounce">
          <div className="w-5 h-5 rounded-full overflow-hidden bg-[#00D2B4] shrink-0 p-0.5">
            <img
              src="/images/gorilla-mascot.png"
              alt="Mascot"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <span>{t('READY TO BULK? 💪 تواصل معنا', 'READY TO BULK? 💪 Chat with us')}</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-gray-400 hover:text-white ml-1 rtl:ml-0 rtl:mr-1"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={getWhatsAppMessageUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/40 hover:shadow-[#25D366]/60 transition-all duration-300 hover:scale-110 active:scale-95"
      >
        {/* Pulse Waves */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none" />
        
        {/* WhatsApp Icon */}
        <MessageCircle className="w-8 h-8 sm:w-9 sm:h-9 fill-white relative z-10" />

        {/* Micro Mascot Mini badge */}
        <div className="absolute -top-1 -right-1 rtl:-right-auto rtl:-left-1 w-5 h-5 rounded-full bg-[#080C0E] border-2 border-[#00D2B4] flex items-center justify-center p-0.5 shadow-md">
          <Dumbbell className="w-2.5 h-2.5 text-[#00D2B4]" />
        </div>
      </a>

    </div>
  );
};
