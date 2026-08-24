import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { STORE_INFO, getWhatsAppMessageUrl } from '../data/storeInfo';
import { toggleSoundMute, getSoundMuted, playClickChime } from '../utils/audio';
import { 
  MessageCircle, 
  MapPin, 
  Truck, 
  Menu, 
  X, 
  Globe, 
  PhoneCall,
  Volume2,
  VolumeX
} from 'lucide-react';

interface NavbarProps {
  onOpen404Demo?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpen404Demo }) => {
  const { lang, toggleLang, t, isArabic } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(getSoundMuted());
  const [isStoreOpen, setIsStoreOpen] = useState(true);

  // Check Egypt Cairo time (2 PM to 12 Midnight)
  useEffect(() => {
    const checkStoreStatus = () => {
      const now = new Date();
      // Egypt is UTC+2
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const cairoDate = new Date(utc + 3600000 * 2);
      const hour = cairoDate.getHours();
      // Store open 14:00 (2 PM) to 24:00 (12 Midnight)
      const open = hour >= 14 || hour === 0;
      setIsStoreOpen(open);
    };

    checkStoreStatus();
    const interval = setInterval(checkStoreStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleSound = () => {
    const muted = toggleSoundMute();
    setIsMuted(muted);
    if (!muted) playClickChime();
  };

  const navLinks = [
    { href: '#products', labelAr: 'المنتجات', labelEn: 'Products' },
    { href: '#categories', labelAr: 'الأقسام', labelEn: 'Categories' },
    { href: '#goal-stack', labelAr: 'محدد الأهداف', labelEn: 'Stack Builder' },
    { href: '#calculator', labelAr: 'حاسبة البروتين', labelEn: 'Calculator' },
    { href: '#comparison', labelAr: 'المقارنة', labelEn: 'Compare' },
    { href: '#delivery', labelAr: 'التوصيل بالقاهرة', labelEn: 'Delivery' },
    { href: '#location', labelAr: 'المحل والخريطة', labelEn: 'Location' },
    { href: '#contact', labelAr: 'تواصل معنا', labelEn: 'Contact' },
  ];

  return (
    <>
      {/* Top Cairo Announcement & Real-Time Status Bar */}
      <div className="bg-[#0A2326] border-b border-[#00D2B4]/20 text-xs py-1.5 px-4 text-center text-[#E2E8F0] relative z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Store Live Open Status */}
          <div className="hidden sm:flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${isStoreOpen ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
            <span className="text-gray-300 font-medium">
              {isStoreOpen 
                ? t('المحل مفتوح الآن بالساحل 🟢 (حتى 12 ليلاً)', 'Sahel Store is Open Now 🟢 (Until Midnight)') 
                : t('المحل يفتح يومياً الساعة 2 ظهراً', 'Sahel Store Opens Daily at 2:00 PM')}
            </span>
          </div>

          {/* Cairo Delivery Badge */}
          <div className="flex items-center justify-center gap-2 mx-auto sm:mx-0 font-medium">
            <span className="inline-block w-2 h-2 rounded-full bg-[#00D2B4] animate-ping" />
            <Truck className="w-3.5 h-3.5 text-[#00D2B4]" />
            <span className="text-[#00F0FF] font-semibold">
              {t('التوصيل متاح إلى جميع مناطق القاهرة', 'Fast Delivery to all Cairo districts')}
            </span>
          </div>

          {/* Direct Phone Call */}
          <div className="hidden md:flex items-center gap-4 text-gray-300">
            <a
              href={`tel:${STORE_INFO.phoneRaw}`}
              className="flex items-center gap-1.5 hover:text-[#00D2B4] transition-colors"
            >
              <PhoneCall className="w-3 h-3 text-[#00D2B4]" />
              <span dir="ltr">{STORE_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#080C0E]/95 backdrop-blur-md border-b border-[#182A30] shadow-xl shadow-black/40 py-2.5 sm:py-3'
            : 'bg-[#080C0E]/85 backdrop-blur-sm border-b border-transparent py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & Gorilla Mascot Emblem */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
          >
            {/* Mascot Avatar Ring */}
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full p-[2px] bg-gradient-to-tr from-[#00D2B4] via-[#0E3D42] to-[#00F0FF] group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full rounded-full bg-[#080C0E] overflow-hidden p-0.5 flex items-center justify-center">
                <img
                  src="/images/gorilla-mascot.png"
                  alt="Bulk Store Gorilla Mascot"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-[#00D2B4] rounded-full border-2 border-[#080C0E]" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-black font-outfit tracking-wider text-white">
                  BULK
                </span>
                <span className="text-xl sm:text-2xl font-black font-outfit tracking-wider text-[#00D2B4] drop-shadow-[0_0_8px_rgba(0,210,180,0.5)]">
                  STORE
                </span>
              </div>
              <span className="text-[10px] text-gray-400 font-medium tracking-wide uppercase">
                {t('مكملات غذائية أصلية', 'Authentic Supplements')}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-5 2xl:gap-6 text-xs sm:text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-[#00D2B4] transition-colors relative py-1 hover:drop-shadow-[0_0_6px_rgba(0,210,180,0.4)]"
              >
                {t(link.labelAr, link.labelEn)}
              </a>
            ))}
          </nav>

          {/* Action CTAs, Sound & Language Switch */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            
            {/* Sound FX Toggle Button */}
            <button
              type="button"
              onClick={handleToggleSound}
              className="text-xs text-gray-400 hover:text-[#00D2B4] bg-[#0F1A1D] hover:bg-[#14262B] border border-[#1C3238] rounded-lg p-2 transition-colors"
              title={isMuted ? t('تشغيل المؤثرات الصوتية', 'Unmute Sound Effects') : t('كتم المؤثرات الصوتية', 'Mute Sound Effects')}
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-[#00D2B4]" />}
            </button>

            {/* Language Switch Button */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1 text-xs text-gray-300 hover:text-[#00D2B4] bg-[#0F1A1D] hover:bg-[#14262B] border border-[#1C3238] rounded-lg px-2.5 py-1.5 transition-colors"
              title={isArabic ? 'Switch to English' : 'التحويل للعربية'}
            >
              <Globe className="w-3.5 h-3.5 text-[#00D2B4]" />
              <span className="font-semibold">{lang === 'ar' ? 'EN' : 'عربي'}</span>
            </button>

            {/* Direct WhatsApp CTA Button */}
            <a
              href={getWhatsAppMessageUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#2bf075] hover:to-[#17a594] text-white text-xs sm:text-sm font-bold px-3.5 sm:px-4 py-2 rounded-xl shadow-lg shadow-[#25D366]/20 hover:shadow-[#25D366]/40 transition-all duration-300 hover:scale-[1.03] active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>{t('اطلب عالـ WhatsApp', 'Order on WhatsApp')}</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden text-gray-300 hover:text-[#00D2B4] p-2 rounded-lg bg-[#0F1A1D] border border-[#1C3238] focus:outline-none"
              aria-label="Open Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-[#1A2E33] bg-[#090E10] px-4 py-5 shadow-2xl animate-fadeIn">
            <div className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-gray-200 hover:bg-[#102226] hover:text-[#00D2B4] font-medium text-sm transition-colors"
                >
                  {t(link.labelAr, link.labelEn)}
                </a>
              ))}

              <div className="pt-3 border-t border-gray-800 flex flex-col gap-2.5">
                <a
                  href={getWhatsAppMessageUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-3 rounded-xl shadow-lg"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>{t('تواصل معنا على WhatsApp', 'Contact on WhatsApp')}</span>
                </a>

                <a
                  href={STORE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#0E2428] hover:bg-[#133339] text-[#00D2B4] font-semibold py-2.5 rounded-xl border border-[#00D2B4]/30 text-xs"
                >
                  <MapPin className="w-4 h-4" />
                  <span>{t('افتح العنوان على Google Maps', 'Open Google Maps')}</span>
                </a>

                {onOpen404Demo && (
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpen404Demo();
                    }}
                    className="text-xs text-gray-500 hover:text-gray-400 py-1"
                  >
                    {t('عرض صفحة 404', 'View 404 Page Demo')}
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
