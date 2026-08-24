import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { playPowerPumpSound, playFlexSound } from '../utils/audio';
import { 
  Dumbbell, 
  Sparkles, 
  MessageCircle 
} from 'lucide-react';
import { getWhatsAppMessageUrl } from '../data/storeInfo';

export const GorillaFlexWidget: React.FC = () => {
  const { t } = useLanguage();
  const [activeMove, setActiveMove] = useState<'curl' | 'flex' | 'pump' | 'power'>('flex');

  const moves = [
    {
      id: 'flex',
      nameAr: '💪 Most Muscular Flex',
      nameEn: '💪 Most Muscular Flex',
      quoteAr: 'الـ Bulk الحقيقي يبدأ من هنا! لا تتوقف أبداً.',
      quoteEn: 'Real bulk starts here! Never stop lifting heavy.',
      scale: 'scale-105 rotate-[-2deg]',
      glow: 'cyan-glow-lg',
      sfx: playFlexSound
    },
    {
      id: 'curl',
      nameAr: '🏋️‍♂️ Dumbbell Bicep Curl',
      nameEn: '🏋️‍♂️ Bicep Curl Pump',
      quoteAr: 'عضلة البايسبس جاهزة للنمو مع واي بروتين أصلي!',
      quoteEn: 'Biceps pumped and ready for pure whey isolate!',
      scale: 'scale-110 -translate-y-2',
      glow: 'cyan-glow',
      sfx: playPowerPumpSound
    },
    {
      id: 'pump',
      nameAr: '🔥 Pre-Workout Boost',
      nameEn: '🔥 Pre-Workout Boost',
      quoteAr: 'طاقة وتركيز 100%! البمب اليوم هيكسر الأرقام القياسية.',
      quoteEn: '100% explosive energy! Smashing personal records today.',
      scale: 'scale-105 brightness-110',
      glow: 'cyan-glow-lg',
      sfx: playPowerPumpSound
    },
    {
      id: 'power',
      nameAr: '⚡ Creatine Power',
      nameEn: '⚡ Creatine Power',
      quoteAr: 'تخزين الـ ATP في أقصى مستوياته!',
      quoteEn: 'ATP stores maxed out with pure micronized creatine!',
      scale: 'scale-100 rotate-[2deg]',
      glow: 'cyan-glow',
      sfx: playFlexSound
    }
  ];

  const currentMove = moves.find((m) => m.id === activeMove) || moves[0];

  const handleSelectMove = (move: typeof moves[0]) => {
    setActiveMove(move.id as 'curl' | 'flex' | 'pump' | 'power');
    move.sfx();
  };

  return (
    <section className="py-14 sm:py-20 bg-[#080C0E] border-t border-[#15252A] relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-72 bg-[#0E3D42]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Card */}
        <div className="bg-gradient-to-br from-[#0F1D22] via-[#0B1518] to-[#070D0E] rounded-3xl p-6 sm:p-10 border border-[#1B3842] shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Mascot Showcase */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative">
                {/* Aura */}
                <div className="absolute -inset-4 rounded-full bg-[#00D2B4]/20 blur-2xl animate-pulse-subtle" />

                {/* Mascot Image */}
                <div className={`relative w-56 h-56 sm:w-64 sm:h-64 rounded-3xl bg-[#060D0F] border-2 border-[#00D2B4]/60 p-2 shadow-2xl transition-all duration-500 transform ${currentMove.scale} ${currentMove.glow}`}>
                  <img
                    src="/images/gorilla-mascot.png"
                    alt="Bulk Store Gorilla Flex"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-[#00D2B4] text-[#080C0E] p-2 rounded-xl shadow-lg">
                    <Dumbbell className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Status Quote */}
              <div className="mt-5 text-center max-w-xs">
                <span className="text-xs font-bold text-[#00F0FF] bg-[#0E282E] px-3 py-1 rounded-full border border-[#00D2B4]/30 inline-block mb-1 font-outfit">
                  THE GORILLA PUMP
                </span>
                <p className="text-xs text-gray-300 font-medium">
                  {t(currentMove.quoteAr, currentMove.quoteEn)}
                </p>
              </div>
            </div>

            {/* Right Interactive Controls */}
            <div className="lg:col-span-7 space-y-6 text-start">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E282E] text-[#00D2B4] text-xs font-bold uppercase tracking-wider mb-2 font-outfit">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>BULK STORE MOTIVATION & MASCOT INTERACTION</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-alexandria">
                  {t('تفاعل مع ماسكوت الغوريلا واختر تمرينك!', 'Interact with The Bulk Gorilla Mascot!')}
                </h3>
                <p className="text-sm text-gray-400 mt-1">
                  {t(
                    'رمز القوة والـ Bulk الذي يعبر عن التزامنا بتوفير أفضل مكملات رياضية أصلية في مصر.',
                    'The visual emblem of pure gym power and authentic nutrition dedication.'
                  )}
                </p>
              </div>

              {/* Moves Buttons Grid */}
              <div className="grid grid-cols-2 gap-3">
                {moves.map((move) => {
                  const isActive = activeMove === move.id;
                  return (
                    <button
                      key={move.id}
                      type="button"
                      onClick={() => handleSelectMove(move)}
                      className={`p-3.5 rounded-2xl border text-start transition-all flex items-center gap-3 ${
                        isActive
                          ? 'bg-[#102B30] border-[#00D2B4] text-white cyan-glow-sm scale-[1.02]'
                          : 'bg-[#080E10] border-[#182F36] text-gray-400 hover:text-gray-200 hover:bg-[#0E1C20]'
                      }`}
                    >
                      <span className="text-xs sm:text-sm font-bold block">
                        {t(move.nameAr, move.nameEn)}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Bottom WhatsApp CTA */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={getWhatsAppMessageUrl(undefined, 'مرحباً Bulk Store! أريد كورس مكملات غذائية لبناء العضلات والقوة.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playPowerPumpSound()}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs sm:text-sm font-bold py-3.5 px-6 rounded-2xl shadow-lg transition-transform hover:scale-105"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>{t('READY TO BULK? تواصل معنا على WhatsApp', 'READY TO BULK? Chat on WhatsApp')}</span>
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
