import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Home, ArrowRight, ArrowLeft, MessageCircle } from 'lucide-react';
import { getWhatsAppMessageUrl } from '../data/storeInfo';

interface Page404Props {
  onBackHome: () => void;
}

export const Page404: React.FC<Page404Props> = ({ onBackHome }) => {
  const { t, isArabic } = useLanguage();

  return (
    <div className="min-h-screen bg-[#080C0E] text-[#E2E8F0] flex flex-col justify-between p-6 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#0E3D42]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-gym-grid opacity-25 pointer-events-none" />

      {/* Top Bar */}
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between z-10">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-[#0E2E33] p-0.5 border border-[#00D2B4]/40">
            <img src="/images/gorilla-mascot.png" alt="Mascot" className="w-full h-full object-cover rounded-full" />
          </div>
          <span className="font-outfit font-black text-lg text-white">BULK <span className="text-[#00D2B4]">STORE</span></span>
        </div>
      </div>

      {/* Center 404 Hero */}
      <div className="relative z-10 max-w-xl mx-auto text-center space-y-6 my-auto py-12">
        {/* Mascot Lost Card */}
        <div className="relative inline-block">
          <div className="w-48 h-48 sm:w-56 sm:h-56 mx-auto rounded-3xl overflow-hidden bg-[#0A1619] border-2 border-[#1E3840] p-3 shadow-2xl">
            <img
              src="/images/gorilla-404.png"
              alt="404 Gorilla Lost"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#00D2B4] text-[#080C0E] font-black text-xs px-4 py-1 rounded-full font-mono shadow-lg">
            ERROR 404
          </span>
        </div>

        {/* Headlines */}
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-alexandria">
            {t('يبدو أنك ضللت الطريق', 'Looks like you got lost.')}
          </h1>
          <p className="text-sm sm:text-base text-gray-400 max-w-md mx-auto leading-relaxed">
            {t(
              'الصفحة التي تبحث عنها غير موجودة، لكن كورس المكملات وبناء العضلات بانتظارك في الصفحة الرئيسية!',
              'The page you requested does not exist, but our authentic supplement collection is waiting on the home page!'
            )}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={onBackHome}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#00D2B4] hover:bg-[#00ebd0] text-[#080C0E] font-black text-sm px-6 py-3.5 rounded-2xl shadow-xl shadow-[#00D2B4]/20 transition-all hover:scale-105"
          >
            <Home className="w-4 h-4" />
            <span>{t('العودة للرئيسية', 'Back to Home')}</span>
            {isArabic ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
          </button>

          <a
            href={getWhatsAppMessageUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#122428] hover:bg-[#183137] text-[#00D2B4] font-semibold text-sm px-5 py-3.5 rounded-2xl border border-[#00D2B4]/30 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{t('تواصل مع المحل', 'Contact Store')}</span>
          </a>
        </div>
      </div>

      {/* Footer Info */}
      <div className="text-center text-xs text-gray-500 z-10">
        Bulk Store • 51 Mohamed El-Khalafawy St, Sahel, Cairo • +20 15 09907801
      </div>
    </div>
  );
};
