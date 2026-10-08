import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileBottomNav } from './components/MobileBottomNav';
import { FreeTrialModal } from './components/FreeTrialModal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CoursesPage } from './pages/CoursesPage';
import { FacultyPage } from './pages/FacultyPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { PricingPage } from './pages/PricingPage';
import { BlogPage } from './pages/BlogPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';
import { StudentPortalPage } from './pages/StudentPortalPage';
import { LegalPage } from './pages/LegalPage';
import { NotFoundPage } from './pages/NotFoundPage';

const AppContent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [freeTrialModalOpen, setFreeTrialModalOpen] = useState<boolean>(false);
  const [selectedTrialCourse, setSelectedTrialCourse] = useState<string | undefined>(undefined);
  const { config } = useLanguage();

  const handleOpenFreeTrial = (courseId?: string) => {
    setSelectedTrialCourse(courseId);
    setFreeTrialModalOpen(true);
  };

  const renderPage = () => {
    switch (activeTab) {
      case 'home':
        return (
          <HomePage
            setActiveTab={setActiveTab}
            onOpenFreeTrial={handleOpenFreeTrial}
          />
        );
      case 'about':
        return (
          <AboutPage
            onOpenFreeTrial={() => handleOpenFreeTrial()}
            setActiveTab={setActiveTab}
          />
        );
      case 'courses':
        return <CoursesPage onOpenFreeTrial={handleOpenFreeTrial} />;
      case 'faculty':
        return <FacultyPage onOpenFreeTrial={() => handleOpenFreeTrial()} />;
      case 'how-it-works':
        return (
          <HowItWorksPage
            onOpenFreeTrial={() => handleOpenFreeTrial()}
            setActiveTab={setActiveTab}
          />
        );
      case 'pricing':
        return <PricingPage onOpenFreeTrial={() => handleOpenFreeTrial()} />;
      case 'blog':
        return <BlogPage />;
      case 'faq':
        return (
          <FaqPage
            onOpenFreeTrial={() => handleOpenFreeTrial()}
            setActiveTab={setActiveTab}
          />
        );
      case 'contact':
        return <ContactPage />;
      case 'portal':
        return <StudentPortalPage />;
      case 'privacy':
        return <LegalPage initialTab="privacy" />;
      case 'terms':
        return <LegalPage initialTab="terms" />;
      case 'disclaimer':
        return <LegalPage initialTab="disclaimer" />;
      default:
        return <NotFoundPage onReturnHome={() => setActiveTab('home')} />;
    }
  };

  return (
    <div
      className={`min-h-screen bg-[#04120f] text-[#f2f2e8] flex flex-col selection:bg-[#d4af37]/30 selection:text-[#d4af37] pb-14 sm:pb-0 ${config.fontClass}`}
    >
      {/* Sticky Multi-Language Navigation Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenFreeTrial={() => handleOpenFreeTrial()}
      />

      {/* Main Viewport Container */}
      <main className="flex-grow">
        {renderPage()}
      </main>

      {/* Multi-Language Footer */}
      <Footer
        setActiveTab={setActiveTab}
        onOpenFreeTrial={() => handleOpenFreeTrial()}
      />

      {/* Fixed Floating WhatsApp Action */}
      <FloatingWhatsApp />

      {/* Mobile Sticky Quick Bottom Nav */}
      <MobileBottomNav
        onOpenFreeTrial={() => handleOpenFreeTrial()}
        onNavigateCourses={() => {
          setActiveTab('courses');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Free Demo Registration Modal */}
      <FreeTrialModal
        isOpen={freeTrialModalOpen}
        onClose={() => setFreeTrialModalOpen(false)}
        preselectedCourse={selectedTrialCourse}
      />
    </div>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
