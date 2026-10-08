import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';
import { useLanguage } from '../context/LanguageContext';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const { isRTL } = useLanguage();

  const message = encodeURIComponent("Assalamu Alaikum! I would like to book a free Quran demo class with Taleem Ul Quran Campus.");
  const whatsappUrl = `https://wa.me/${ACADEMY_INFO.contact.whatsappClean}?text=${message}`;

  return (
    <div
      className={`fixed bottom-20 sm:bottom-6 ${isRTL ? 'left-4 sm:left-6' : 'right-4 sm:right-6'} z-40 flex items-center gap-3`}
    >
      {/* Tooltip speech bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#061a14] text-[#f2f2e8] border border-[#d4af37] px-4 py-2.5 rounded-lg shadow-2xl text-xs max-w-xs animate-fadeIn">
          <span>Need help or want to book a class? Chat with us live!</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#b4c3bd] hover:text-[#d4af37]"
            aria-label="Close"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Action button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 border-2 border-[#d4af37] group relative"
        aria-label="Chat on WhatsApp with Taleem Ul Quran Campus"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 rounded-full animate-ping" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 rounded-full border border-[#04120f]" />
        <MessageCircle className="w-7 h-7 text-white fill-current" />
      </a>
    </div>
  );
};
