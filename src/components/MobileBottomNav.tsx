import React from 'react';
import { Calendar, MessageCircle, BookOpen } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';
import { useLanguage } from '../context/LanguageContext';

interface MobileBottomNavProps {
  onOpenFreeTrial: () => void;
  onNavigateCourses: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  onOpenFreeTrial,
  onNavigateCourses
}) => {
  const { t } = useLanguage();
  const message = encodeURIComponent("Assalamu Alaikum! I would like to book a free Quran demo class with Taleem Ul Quran Campus.");
  const whatsappUrl = `https://wa.me/${ACADEMY_INFO.contact.whatsappClean}?text=${message}`;

  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#04120f]/95 backdrop-blur-md border-t border-[#d4af37]/30 px-3 py-2 flex items-center justify-between gap-2 shadow-2xl">
      <button
        onClick={onNavigateCourses}
        className="flex-1 min-h-[44px] flex items-center justify-center gap-1.5 px-2 py-2 bg-[#061a14] border border-[#d4af37]/30 text-[#f2f2e8] rounded text-xs font-semibold"
      >
        <BookOpen className="w-4 h-4 text-[#d4af37]" />
        <span>{t.nav.courses}</span>
      </button>

      <button
        onClick={onOpenFreeTrial}
        className="flex-[1.4] min-h-[44px] flex items-center justify-center gap-1.5 px-3 py-2 bg-[#d4af37] text-[#04120f] font-bold rounded text-xs tracking-wide shadow-md active:scale-95 transition-transform"
      >
        <Calendar className="w-4 h-4" />
        <span>{t.hero.bookDemoBtn}</span>
      </button>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="min-h-[44px] min-w-[44px] flex items-center justify-center bg-emerald-600 text-white rounded shadow-md active:scale-95 transition-transform"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
      </a>
    </div>
  );
};
