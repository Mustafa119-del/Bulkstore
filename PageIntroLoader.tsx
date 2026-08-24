import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Dumbbell, Zap } from 'lucide-react';

interface PageIntroLoaderProps {
  onComplete: () => void;
}

export const PageIntroLoader: React.FC<PageIntroLoaderProps> = ({ onComplete }) => {
  const { t } = useLanguage();
  const [step, setStep] = useState<number>(1); // 1: mascot fade in, 2: dumbbell flex, 3: logo reveal, 4: exit
  const [fadeOut, setFadeOut] = useState<boolean>(false);

  useEffect(() => {
    // Step 1: Mascot emerges (0ms)
    // Step 2: Dumbbell lift / pump (600ms)
    const t1 = setTimeout(() => setStep(2), 650);

    // Step 3: Logo BULK STORE reveals (1300ms)
    const t2 = setTimeout(() => setStep(3), 1300);

    // Step 4: Start fade out (2400ms)
    const t3 = setTimeout(() => {
      setFadeOut(true);
    }, 2400);

    // Final finish (2850ms)
    const t4 = setTimeout(() => {
      onComplete();
    }, 2850);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setFadeOut(true);
    setTimeout(() => {
      onComplete();
    }, 300);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#080C0E] transition-all duration-700 ${
        fadeOut ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100'
      }`}
    >
      {/* Subtle background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,61,66,0.35)_0%,rgba(8,12,14,0.95)_70%)] pointer-events-none" />

      {/* Skip Button */}
      <button
        onClick={handleSkip}
        className="absolute top-6 right-6 text-xs text-gray-400 hover:text-[#00D2B4] transition-colors py-1.5 px-3 rounded-full border border-gray-800 hover:border-[#00D2B4]/40 bg-black/40 backdrop-blur-sm z-10"
      >
        {t('تخطي', 'Skip Intro')} ✕
      </button>

      {/* Center Animation Container */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-sm">
        {/* Gorilla Mascot with Dumbbell Motion */}
        <div className="relative mb-6">
          {/* Subtle Cyan Aura Ring */}
          <div
            className={`absolute -inset-4 rounded-full bg-[#00D2B4]/20 blur-xl transition-all duration-700 ${
              step >= 2 ? 'opacity-80 scale-110' : 'opacity-20 scale-90'
            }`}
          />

          {/* Gorilla Mascot Image */}
          <div
            className={`relative w-36 h-36 md:w-44 md:h-44 rounded-full p-1 border-2 transition-all duration-700 transform ${
              step === 1
                ? 'scale-90 opacity-40 border-gray-800'
                : step === 2
                ? 'scale-105 opacity-100 border-[#00D2B4]/60 rotate-[-2deg]'
                : 'scale-100 opacity-100 border-[#00D2B4]'
            }`}
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-[#0A1A1E] flex items-center justify-center p-2 shadow-2xl">
              <img
                src="/images/gorilla-mascot.png"
                alt="Bulk Store Gorilla Mascot"
                className={`w-full h-full object-cover transition-transform duration-500 ${
                  step === 2 ? 'scale-110' : 'scale-100'
                }`}
              />
            </div>

            {/* Micro floating workout icon */}
            <div
              className={`absolute -bottom-1 -right-1 bg-[#00D2B4] text-[#080C0E] p-2 rounded-full shadow-lg transition-all duration-500 transform ${
                step >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
              }`}
            >
              <Dumbbell className="w-4 h-4 animate-bounce" />
            </div>
          </div>
        </div>

        {/* Brand Name BULK STORE */}
        <div className="overflow-hidden mb-2">
          <h1
            className={`text-3xl md:text-4xl font-extrabold tracking-wider font-outfit uppercase transition-all duration-700 transform ${
              step >= 3
                ? 'translate-y-0 opacity-100'
                : 'translate-y-6 opacity-0'
            }`}
          >
            <span className="text-white">BULK</span>{' '}
            <span className="text-[#00D2B4] drop-shadow-[0_0_12px_rgba(0,210,180,0.6)]">STORE</span>
          </h1>
        </div>

        {/* Tagline / Loading Status */}
        <p
          className={`text-sm text-gray-300 font-medium transition-all duration-700 delay-100 ${
            step >= 3 ? 'opacity-90' : 'opacity-0'
          }`}
        >
          {t('كل احتياجاتك للـFitness في مكان واحد', 'Supplements you trust. Results you work for.')}
        </p>

        {/* Subtle Progress Bar */}
        <div className="w-48 h-1 bg-gray-800 rounded-full mt-6 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#00D2B4] to-[#00F0FF] transition-all duration-1000 ease-out"
            style={{ width: step === 1 ? '30%' : step === 2 ? '70%' : '100%' }}
          />
        </div>

        {/* Small motivational badge */}
        <div className="mt-3 flex items-center gap-1.5 text-xs text-[#00D2B4]/80 font-mono">
          <Zap className="w-3.5 h-3.5 text-[#00D2B4]" />
          <span>GETTING THE STACK READY...</span>
        </div>
      </div>
    </div>
  );
};
