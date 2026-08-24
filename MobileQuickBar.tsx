import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { STORE_INFO, getWhatsAppMessageUrl } from '../data/storeInfo';
import { playPowerPumpSound } from '../utils/audio';
import { MessageCircle, Phone, MapPin } from 'lucide-react';

export const MobileQuickBar: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-0 inset-x-0 z-30 sm:hidden bg-[#070D0F]/95 backdrop-blur-md border-t border-[#162C33] p-2.5 shadow-2xl">
      <div className="grid grid-cols-3 gap-2">
        
        {/* WhatsApp */}
        <a
          href={getWhatsAppMessageUrl()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => playPowerPumpSound()}
          className="col-span-1 bg-[#25D366] hover:bg-[#20ba5a] text-white py-2.5 px-2 rounded-xl flex items-center justify-center gap-1.5 text-xs font-bold shadow-md shadow-[#25D366]/20 active:scale-95 transition-transform"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>WhatsApp</span>
        </a>

        {/* Call Store */}
        <a
          href={`tel:${STORE_INFO.phoneRaw}`}
          className="col-span-1 bg-[#102328] hover:bg-[#163037] text-white py-2.5 px-2 rounded-xl border border-[#1C3A42] flex items-center justify-center gap-1.5 text-xs font-bold active:scale-95 transition-transform"
        >
          <Phone className="w-3.5 h-3.5 text-[#00D2B4]" />
          <span>{t('اتصل بنا', 'Call Store')}</span>
        </a>

        {/* GPS Map */}
        <a
          href={STORE_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-1 bg-[#0E1B1E] hover:bg-[#14262C] text-[#00F0FF] py-2.5 px-2 rounded-xl border border-[#00D2B4]/30 flex items-center justify-center gap-1.5 text-xs font-bold active:scale-95 transition-transform"
        >
          <MapPin className="w-3.5 h-3.5" />
          <span>{t('الخريطة', 'Map')}</span>
        </a>

      </div>
    </div>
  );
};
