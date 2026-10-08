import React from 'react';
import { FileText, CalendarCheck, Clock, BookOpen, CheckCircle2, ShieldCheck, Laptop, Video, Sparkles, ArrowRight } from 'lucide-react';
import { HOW_IT_WORKS_STEPS, ACADEMY_INFO } from '../data/academyData';
import { useLanguage } from '../context/LanguageContext';

interface HowItWorksPageProps {
  onOpenFreeTrial: () => void;
  setActiveTab: (tab: string) => void;
}

export const HowItWorksPage: React.FC<HowItWorksPageProps> = ({ onOpenFreeTrial, setActiveTab }) => {
  const { t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#061a14] gold-border text-[#d4af37] text-xs font-bold uppercase tracking-widest rounded-sm">
          <Sparkles className="w-3.5 h-3.5" /> Simple & Transparent Onboarding
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#f2f2e8]">
          How Online Quran Classes Work
        </h1>
        <p className="text-xs sm:text-sm text-[#b4c3bd] leading-relaxed">
          From your first demo request to regular 1-on-1 recitation sessions, starting your Quran journey with Taleem Ul Quran Campus is effortless and safe.
        </p>
      </div>

      {/* 4 Steps Showcase */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {HOW_IT_WORKS_STEPS.map((s) => (
          <div
            key={s.step}
            className="bg-[#061a14] gold-border rounded-xl p-6 sm:p-8 space-y-4 hover:border-[#d4af37] transition-all gold-glow-hover flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-full border-2 border-[#d4af37] bg-[#04120f] flex items-center justify-center font-serif text-[#d4af37] font-bold text-xl gold-glow">
                {s.step}
              </div>
              <h3 className="font-serif text-lg font-bold text-[#f2f2e8]">
                {s.title}
              </h3>
              <p className="text-xs text-[#b4c3bd] leading-relaxed">
                {s.description}
              </p>
            </div>

            <div className="pt-3 border-t border-[#d4af37]/15 text-[11px] text-[#d4af37] flex items-center gap-1 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Step {s.step} of 4</span>
            </div>
          </div>
        ))}
      </div>

      {/* Classroom Setup & Tools */}
      <div className="bg-[#04120f] gold-border rounded-xl p-8 sm:p-12 space-y-8 gold-glow">
        <div className="max-w-2xl mx-auto text-center space-y-2">
          <span className="text-[#d4af37] text-xs font-bold uppercase tracking-widest">
            Technology & Learning Environment
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#f2f2e8]">
            What You Need to Get Started
          </h2>
          <p className="text-xs text-[#b4c3bd]">
            No complicated technical setup or expensive hardware required.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#b4c3bd]">
          <div className="bg-[#061a14] border border-[#d4af37]/25 p-6 rounded-lg space-y-3">
            <div className="w-10 h-10 border border-[#d4af37]/40 rounded bg-[#04120f] flex items-center justify-center text-[#d4af37]">
              <Laptop className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base font-bold text-[#f2f2e8]">
              1. Any Internet Device
            </h3>
            <p className="leading-relaxed">
              Use a desktop PC, laptop, iPad, Android tablet, or smartphone with working audio and a stable Wi-Fi connection.
            </p>
          </div>

          <div className="bg-[#061a14] border border-[#d4af37]/25 p-6 rounded-lg space-y-3">
            <div className="w-10 h-10 border border-[#d4af37]/40 rounded bg-[#04120f] flex items-center justify-center text-[#d4af37]">
              <Video className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base font-bold text-[#f2f2e8]">
              2. Interactive Classroom / Zoom
            </h3>
            <p className="leading-relaxed">
              Connect via our built-in student screenboard or familiar apps like Zoom or Skype. The teacher shares high-res Quran pages with colored Tajweed rules.
            </p>
          </div>

          <div className="bg-[#061a14] border border-[#d4af37]/25 p-6 rounded-lg space-y-3">
            <div className="w-10 h-10 border border-[#d4af37]/40 rounded bg-[#04120f] flex items-center justify-center text-[#d4af37]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base font-bold text-[#f2f2e8]">
              3. Flexible Attendance & Logs
            </h3>
            <p className="leading-relaxed">
              Reschedule lessons with 4-hour advance notice. Parents receive weekly revision logs and direct WhatsApp teacher desk communication.
            </p>
          </div>
        </div>
      </div>

      {/* Free Trial Guarantee Callout */}
      <div className="p-8 sm:p-12 bg-gradient-to-r from-[#061a14] via-[#092b21] to-[#061a14] gold-border rounded-xl text-center space-y-4">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#f2f2e8]">
          Experience a Class Before Deciding
        </h2>
        <p className="text-xs sm:text-sm text-[#b4c3bd] max-w-xl mx-auto">
          We believe in complete transparency. Book your 2-day free trial class to meet your assigned teacher with zero obligation.
        </p>
        <div className="pt-2 flex justify-center gap-4 flex-wrap">
          <button
            onClick={onOpenFreeTrial}
            className="px-8 py-3.5 bg-[#d4af37] text-[#04120f] font-bold uppercase tracking-wider text-xs rounded hover:bg-[#e2bd47] transition-all shadow-md active:scale-95 cursor-pointer"
          >
            {t.hero.bookDemoBtn}
          </button>
          <button
            onClick={() => setActiveTab('portal')}
            className="px-6 py-3.5 border border-[#d4af37]/40 text-[#f2f2e8] hover:text-[#d4af37] font-bold uppercase tracking-wider text-xs rounded hover:bg-[#04120f] transition-all"
          >
            Preview Virtual Classroom
          </button>
        </div>
      </div>

    </div>
  );
};
