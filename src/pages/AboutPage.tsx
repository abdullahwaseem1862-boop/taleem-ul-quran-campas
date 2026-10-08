import React from 'react';
import { BookOpen, Target, Eye, Heart, ShieldCheck, Award, Users, CheckCircle2, Globe, Clock, ArrowRight } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';
import { useLanguage } from '../context/LanguageContext';

interface AboutPageProps {
  onOpenFreeTrial: () => void;
  setActiveTab: (tab: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenFreeTrial, setActiveTab }) => {
  const { t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 space-y-16">
      
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#061a14] gold-border text-[#d4af37] text-xs font-bold uppercase tracking-widest rounded-sm">
          <BookOpen className="w-3.5 h-3.5" /> Dedicated Online Quran Academy
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#f2f2e8]">
          About Taleem Ul Quran Campus
        </h1>
        <p className="font-urdu text-xl text-[#d4af37] leading-relaxed">
          تعلیم القرآن آن لائن اکیڈمی — مستند اور باوقار قرآنی تعلیم
        </p>
        <p className="text-xs sm:text-sm text-[#b4c3bd] leading-relaxed">
          Founded with a singular commitment: to make authentic, Tajweed-compliant Quran education accessible, safe, and spiritually enriching for Muslim families living in any corner of the globe.
        </p>
      </div>

      {/* Mission & Vision Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Mission */}
        <div className="bg-[#061a14] gold-border p-8 rounded-lg space-y-4 gold-glow">
          <div className="w-12 h-12 rounded-full border border-[#d4af37] bg-[#04120f] flex items-center justify-center text-[#d4af37]">
            <Target className="w-6 h-6" />
          </div>
          <h2 className="font-serif text-2xl font-bold text-[#f2f2e8]">
            Our Noble Mission
          </h2>
          <p className="text-xs sm:text-sm text-[#b4c3bd] leading-relaxed">
            Our mission is to nurture a deep, enduring bond between students and the Words of Allah ﷻ. We provide individual attention from certified Qaris and Alimas, focusing not merely on technical recitation, but on fostering genuine love for the Quran, correct articulation (Makharij), and noble Islamic character.
          </p>
          <div className="p-3 bg-[#04120f] border border-[#d4af37]/20 rounded text-xs text-[#d4af37] italic">
            "{ACADEMY_INFO.hadithTranslation}"
          </div>
        </div>

        {/* Vision */}
        <div className="bg-[#061a14] gold-border p-8 rounded-lg space-y-4 gold-glow">
          <div className="w-12 h-12 rounded-full border border-[#d4af37] bg-[#04120f] flex items-center justify-center text-[#d4af37]">
            <Eye className="w-6 h-6" />
          </div>
          <h2 className="font-serif text-2xl font-bold text-[#f2f2e8]">
            Our Educational Vision
          </h2>
          <p className="text-xs sm:text-sm text-[#b4c3bd] leading-relaxed">
            We envision a worldwide community of young and adult believers who can recite the Holy Quran with effortless fluency, understand its moral and ethical wisdom, and implement its teachings in their daily interactions. Through modern virtual classrooms, we remove geographical barriers to traditional Quranic scholarship.
          </p>
          <div className="space-y-2 text-xs text-[#f2f2e8] pt-1">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Preserving authentic classical Tajweed rules</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Strictly verified male and female tutors</span>
            </div>
          </div>
        </div>
      </div>

      {/* Teaching Philosophy & Student-Centered Approach */}
      <div className="bg-[#04120f] gold-border p-8 sm:p-12 rounded-xl space-y-8">
        <div className="max-w-2xl mx-auto text-center space-y-2">
          <span className="text-[#d4af37] text-xs font-bold uppercase tracking-widest">
            Core Principles
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#f2f2e8]">
            Our Quran Education Philosophy
          </h2>
          <p className="text-xs text-[#b4c3bd]">
            How we teach makes all the difference in whether a child embraces or resists learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#b4c3bd]">
          <div className="bg-[#061a14] border border-[#d4af37]/25 p-6 rounded space-y-3">
            <Heart className="w-6 h-6 text-[#d4af37]" />
            <h3 className="font-serif text-base font-bold text-[#f2f2e8]">
              Patience & Gentleness
            </h3>
            <p className="leading-relaxed">
              We never rush, scold, or pressure students. Quranic learning requires time, repetition, and a warm encouraging environment where mistakes are treated as natural steps toward mastery.
            </p>
          </div>

          <div className="bg-[#061a14] border border-[#d4af37]/25 p-6 rounded space-y-3">
            <Users className="w-6 h-6 text-[#d4af37]" />
            <h3 className="font-serif text-base font-bold text-[#f2f2e8]">
              One-to-One Dedication
            </h3>
            <p className="leading-relaxed">
              Every student has distinct memory capacity and learning speeds. Our private 1-on-1 model ensures personalized pacing and direct real-time correction without peer anxiety.
            </p>
          </div>

          <div className="bg-[#061a14] border border-[#d4af37]/25 p-6 rounded space-y-3">
            <ShieldCheck className="w-6 h-6 text-[#d4af37]" />
            <h3 className="font-serif text-base font-bold text-[#f2f2e8]">
              Modesty & Safe Environment
            </h3>
            <p className="leading-relaxed">
              Dedicated female teachers are available for all sisters and young children to ensure complete privacy, comfort, and compliance with Islamic etiquette.
            </p>
          </div>
        </div>
      </div>

      {/* Online Learning Advantages */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-[#d4af37] text-xs font-bold uppercase tracking-widest">
            Modern Convenience
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#f2f2e8]">
            Advantages of Learning Online from Home
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
          <div className="p-5 bg-[#061a14] border border-[#d4af37]/20 rounded space-y-2">
            <Clock className="w-5 h-5 text-[#d4af37]" />
            <h3 className="font-bold text-[#f2f2e8]">No Commuting Fatigue</h3>
            <p className="text-[#b4c3bd]">Eliminate the daily struggle of driving in traffic after school or work. Learn comfortably from your home desk.</p>
          </div>

          <div className="p-5 bg-[#061a14] border border-[#d4af37]/20 rounded space-y-2">
            <Globe className="w-5 h-5 text-[#d4af37]" />
            <h3 className="font-bold text-[#f2f2e8]">Access Top Global Teachers</h3>
            <p className="text-[#b4c3bd]">Even if there are no local Qaris in your neighborhood, connect with certified scholars with authentic Ijazah.</p>
          </div>

          <div className="p-5 bg-[#061a14] border border-[#d4af37]/20 rounded space-y-2">
            <Award className="w-5 h-5 text-[#d4af37]" />
            <h3 className="font-bold text-[#f2f2e8]">Digital Interactive Tools</h3>
            <p className="text-[#b4c3bd]">High-resolution color-coded Tajweed Mushaf, digital whiteboards, and audio playback accelerate comprehension.</p>
          </div>

          <div className="p-5 bg-[#061a14] border border-[#d4af37]/20 rounded space-y-2">
            <Users className="w-5 h-5 text-[#d4af37]" />
            <h3 className="font-bold text-[#f2f2e8]">Direct Parent Supervision</h3>
            <p className="text-[#b4c3bd]">Parents can sit alongside their children during classes and monitor their teacher’s demeanor and progress firsthand.</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center p-8 sm:p-12 bg-gradient-to-r from-[#061a14] via-[#092b21] to-[#061a14] gold-border rounded-xl space-y-4">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#f2f2e8]">
          Ready to Experience Our Teaching Firsthand?
        </h2>
        <p className="text-xs sm:text-sm text-[#b4c3bd] max-w-xl mx-auto">
          We invite you and your family to attend 2 free trial sessions with no fees or commitment required.
        </p>
        <div className="pt-2 flex justify-center gap-4 flex-wrap">
          <button
            onClick={onOpenFreeTrial}
            className="px-8 py-3.5 bg-[#d4af37] text-[#04120f] font-bold uppercase tracking-wider text-xs rounded hover:bg-[#e2bd47] transition-all shadow-md active:scale-95 cursor-pointer"
          >
            {t.hero.bookDemoBtn}
          </button>
          <button
            onClick={() => setActiveTab('courses')}
            className="px-8 py-3.5 border border-[#d4af37]/40 text-[#f2f2e8] hover:text-[#d4af37] font-bold uppercase tracking-wider text-xs rounded hover:bg-[#04120f] transition-all flex items-center gap-2"
          >
            <span>Explore Courses</span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </button>
        </div>
      </div>

    </div>
  );
};
