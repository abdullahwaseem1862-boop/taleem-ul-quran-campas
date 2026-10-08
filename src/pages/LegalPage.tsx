import React, { useState } from 'react';
import { Shield, FileText, AlertCircle, Cookie, CheckCircle2 } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';
import { useLanguage } from '../context/LanguageContext';

interface LegalPageProps {
  initialTab?: 'privacy' | 'terms' | 'disclaimer';
}

export const LegalPage: React.FC<LegalPageProps> = ({ initialTab = 'privacy' }) => {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms' | 'disclaimer'>(initialTab);
  const { t } = useLanguage();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-8 py-12 space-y-10">
      
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#f2f2e8]">
          Legal Policies & Academic Standards
        </h1>
        <p className="text-xs sm:text-sm text-[#b4c3bd]">
          Taleem Ul Quran Campus operates under strict ethical guidelines, student safety standards, and full data privacy.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center border-b border-[#d4af37]/20 pb-4">
        <div className="flex gap-2 bg-[#04120f] p-1 border border-[#d4af37]/30 rounded">
          <button
            onClick={() => setActiveTab('privacy')}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded transition-all ${
              activeTab === 'privacy'
                ? 'bg-[#d4af37] text-[#04120f]'
                : 'text-[#b4c3bd] hover:text-[#d4af37]'
            }`}
          >
            Privacy Policy
          </button>
          <button
            onClick={() => setActiveTab('terms')}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded transition-all ${
              activeTab === 'terms'
                ? 'bg-[#d4af37] text-[#04120f]'
                : 'text-[#b4c3bd] hover:text-[#d4af37]'
            }`}
          >
            Terms & Conditions
          </button>
          <button
            onClick={() => setActiveTab('disclaimer')}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded transition-all ${
              activeTab === 'disclaimer'
                ? 'bg-[#d4af37] text-[#04120f]'
                : 'text-[#b4c3bd] hover:text-[#d4af37]'
            }`}
          >
            Academic Disclaimer
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="bg-[#061a14] gold-border p-6 sm:p-10 rounded-xl space-y-6 text-xs sm:text-sm text-[#b4c3bd] leading-relaxed gold-glow">
        
        {activeTab === 'privacy' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#d4af37] font-bold text-base sm:text-lg">
              <Shield className="w-5 h-5" /> Student & Family Privacy Policy
            </div>
            <p>
              At Taleem Ul Quran Campus ({ACADEMY_INFO.urduName}), protecting the privacy and dignity of our students and their families is of paramount importance. This Privacy Policy details how we collect, handle, and protect your information.
            </p>

            <h3 className="font-serif text-base font-bold text-[#f2f2e8] pt-2">
              1. Information Collection
            </h3>
            <p>
              We only collect information necessary to deliver educational classes, specifically: student name, age, guardian contact details, WhatsApp number, email address, time zone, and language preferences. We do not store sensitive payment card details on our local servers.
            </p>

            <h3 className="font-serif text-base font-bold text-[#f2f2e8] pt-2">
              2. Student Safety & Minor Protection
            </h3>
            <p>
              We maintain a zero-tolerance policy against inappropriate conduct. Parents have the full right to attend, observe, or record classes for their children at any time. Female tutors are exclusively assigned for sisters and female students upon request.
            </p>

            <h3 className="font-serif text-base font-bold text-[#f2f2e8] pt-2">
              3. No Commercial Selling of Data
            </h3>
            <p>
              Your contact numbers and email addresses are never sold, rented, or distributed to third-party marketing companies. They are used exclusively for official admissions, scheduling, and progress reports by Taleem Ul Quran Campus administration.
            </p>
          </div>
        )}

        {activeTab === 'terms' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#d4af37] font-bold text-base sm:text-lg">
              <FileText className="w-5 h-5" /> Terms and Academic Conditions
            </div>
            <p>
              By scheduling a free trial or enrolling in any program at Taleem Ul Quran Campus, you agree to the following terms:
            </p>

            <h3 className="font-serif text-base font-bold text-[#f2f2e8] pt-2">
              1. Free Trial & Satisfaction Guarantee
            </h3>
            <p>
              Every new student is entitled to 2 free trial sessions with no upfront fee or credit card requirement. If you choose not to continue after the trial, there is zero financial obligation.
            </p>

            <h3 className="font-serif text-base font-bold text-[#f2f2e8] pt-2">
              2. Rescheduling & Makeup Classes
            </h3>
            <p>
              Students may reschedule any class by providing at least 4 hours' advance notice to their teacher or academic coordinator. Makeup classes are coordinated based on mutual schedule availability.
            </p>

            <h3 className="font-serif text-base font-bold text-[#f2f2e8] pt-2">
              3. Punctuality & Respectful Conduct
            </h3>
            <p>
              Teachers and students are expected to arrive punctually at their confirmed class times. Both instructors and students must maintain noble Islamic decorum and adab throughout sessions.
            </p>
          </div>
        )}

        {activeTab === 'disclaimer' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#d4af37] font-bold text-base sm:text-lg">
              <AlertCircle className="w-5 h-5" /> Academic & Religious Disclaimer
            </div>
            <p>
              Taleem Ul Quran Campus is an independent online Quranic teaching institute adhering strictly to mainstream Ahl us-Sunnah wal-Jama'ah methodologies and authentic recitation traditions (Qira'at Hafs 'an 'Asim).
            </p>

            <h3 className="font-serif text-base font-bold text-[#f2f2e8] pt-2">
              Authentic Scriptural References
            </h3>
            <p>
              All Hadith narrations and Quranic explanations provided across our platform and courses are grounded in verified classical collections (Sahih Al-Bukhari, Sahih Muslim, Sunan Abi Dawud, and classical commentaries). We do not author personal interpretations or unverified theological assertions.
            </p>

            <h3 className="font-serif text-base font-bold text-[#f2f2e8] pt-2">
              Educational Scope
            </h3>
            <p>
              Our programs are designed for Quranic literacy, Tajweed perfection, Hifz memorization, and essential Islamic ethics. We do not issue formal legal religious edicts (Fatwas). Students seeking complex legal rulings should consult local recognized Muftis and Islamic scholarly councils.
            </p>
          </div>
        )}

      </div>
    </div>
  );
};
