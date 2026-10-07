import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FreeTrialModal } from './components/FreeTrialModal';
import { HomePage } from './pages/HomePage';
import { CoursesPage } from './pages/CoursesPage';
import { FacultyPage } from './pages/FacultyPage';
import { PricingPage } from './pages/PricingPage';
import { ContactPage } from './pages/ContactPage';
import { StudentPortalPage } from './pages/StudentPortalPage';
import { AiTutorPage } from './pages/AiTutorPage';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [freeTrialModalOpen, setFreeTrialModalOpen] = useState<boolean>(false);
  const [selectedTrialCourse, setSelectedTrialCourse] = useState<string | undefined>(undefined);

  const handleOpenFreeTrial = (courseId?: string) => {
    setSelectedTrialCourse(courseId);
    setFreeTrialModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#04120f] text-[#f2f2e8] font-sans flex flex-col selection:bg-[#d4af37]/30 selection:text-[#d4af37]">
      {/* Navigation Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenFreeTrial={() => handleOpenFreeTrial()}
      />

      {/* Main View Area */}
      <main className="flex-grow">
        {activeTab === 'home' && (
          <HomePage
            setActiveTab={setActiveTab}
            onOpenFreeTrial={handleOpenFreeTrial}
          />
        )}
        {activeTab === 'courses' && (
          <CoursesPage onOpenFreeTrial={handleOpenFreeTrial} />
        )}
        {activeTab === 'faculty' && (
          <FacultyPage onOpenFreeTrial={() => handleOpenFreeTrial()} />
        )}
        {activeTab === 'pricing' && (
          <PricingPage onOpenFreeTrial={() => handleOpenFreeTrial()} />
        )}
        {activeTab === 'contact' && <ContactPage />}
        {activeTab === 'portal' && <StudentPortalPage />}
        {activeTab === 'aitutor' && <AiTutorPage />}
      </main>

      {/* Footer */}
      <Footer
        setActiveTab={setActiveTab}
        onOpenFreeTrial={() => handleOpenFreeTrial()}
      />

      {/* Free Trial Modal Popup */}
      <FreeTrialModal
        isOpen={freeTrialModalOpen}
        onClose={() => setFreeTrialModalOpen(false)}
        preselectedCourse={selectedTrialCourse}
      />
    </div>
  );
}
