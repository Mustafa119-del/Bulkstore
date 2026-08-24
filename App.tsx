import { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { ProductCategory } from './types';
import { PageIntroLoader } from './components/PageIntroLoader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoryShowcase } from './components/CategoryShowcase';
import { ProductShowcase } from './components/ProductShowcase';
import { ProteinCalculator } from './components/ProteinCalculator';
import { SupplementComparison } from './components/SupplementComparison';
import { FitnessGoalFinder } from './components/FitnessGoalFinder';
import { GorillaFlexWidget } from './components/GorillaFlexWidget';
import { WhyBulkStore } from './components/WhyBulkStore';
import { AuthenticityGuide } from './components/AuthenticityGuide';
import { DeliverySection } from './components/DeliverySection';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { FAQSection } from './components/FAQSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileQuickBar } from './components/MobileQuickBar';
import { Footer } from './components/Footer';
import { Page404 } from './components/Page404';

export function AppContent() {
  const [introCompleted, setIntroCompleted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [show404, setShow404] = useState(false);

  if (show404) {
    return <Page404 onBackHome={() => setShow404(false)} />;
  }

  return (
    <div className="min-h-screen bg-[#080C0E] text-[#E2E8F0] selection:bg-[#00D2B4] selection:text-[#080C0E] relative pb-16 sm:pb-0">
      {/* Initial Page Load Gorilla Animation */}
      {!introCompleted && (
        <PageIntroLoader onComplete={() => setIntroCompleted(true)} />
      )}

      {/* Main Website Structure */}
      <div className={`transition-opacity duration-700 ${introCompleted ? 'opacity-100' : 'opacity-0'}`}>
        
        {/* Navigation Bar */}
        <Navbar onOpen404Demo={() => setShow404(true)} />

        {/* Hero Section with Gorilla Mascot */}
        <Hero />

        {/* Categories Showcase with Mascot Reactions */}
        <CategoryShowcase
          selectedCategory={selectedCategory}
          onSelectCategory={(cat) => setSelectedCategory(cat)}
        />

        {/* Product Catalog Showcase */}
        <ProductShowcase
          selectedCategory={selectedCategory}
          onSelectCategory={(cat) => setSelectedCategory(cat)}
        />

        {/* Daily Protein & Stack Calculator */}
        <div id="calculator">
          <ProteinCalculator />
        </div>

        {/* Side-by-Side Supplement Comparison */}
        <div id="comparison">
          <SupplementComparison />
        </div>

        {/* Goal Stack Builder */}
        <FitnessGoalFinder />

        {/* Gorilla Mascot Interactive Flex Workout Widget */}
        <GorillaFlexWidget />

        {/* Why Bulk Store? */}
        <WhyBulkStore />

        {/* 100% Authenticity & Quality Guide */}
        <AuthenticityGuide />

        {/* Cairo Delivery Zones & Speed Estimator */}
        <DeliverySection />

        {/* Store Location & Google Maps */}
        <LocationSection />

        {/* Frequently Asked Questions */}
        <FAQSection />

        {/* Contact & Custom WhatsApp Order Builder */}
        <ContactSection />

        {/* Footer */}
        <Footer onOpen404={() => setShow404(true)} />

        {/* Floating Action WhatsApp Button */}
        <FloatingWhatsApp />

        {/* Mobile Sticky Quick Action Bar */}
        <MobileQuickBar />
      </div>
    </div>
  );
}

export function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
