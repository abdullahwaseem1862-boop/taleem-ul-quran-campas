import React, { useState } from 'react';
import { BookOpen, Copy, Check, Share2, Sparkles, Heart } from 'lucide-react';
import { DAILY_VERSE } from '../data/academyData';

export const DailyVerseWidget: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const text = `${DAILY_VERSE.surah} (${DAILY_VERSE.surahNumber}:${DAILY_VERSE.ayahNumber})\n\n${DAILY_VERSE.ayahArabic}\n\n"${DAILY_VERSE.ayahTranslation}"\n\n— Taleem-ul-Quran Campus`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative bg-[#061a14] gold-border gold-glow p-6 sm:p-8 rounded-sm text-[#f2f2e8] overflow-hidden">
      {/* Decorative background badge */}
      <div className="absolute top-0 right-0 p-8 text-[#d4af37]/5 font-serif text-8xl font-bold select-none pointer-events-none">
        القرآن
      </div>

      <div className="relative z-10 space-y-4">
        <div className="flex items-center justify-between border-b border-[#d4af37]/20 pb-3">
          <div className="flex items-center gap-2 text-[#d4af37] text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-4 h-4" />
            <span>Verse of the Day • آية اليوم</span>
          </div>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1 bg-[#04120f] border border-[#d4af37]/30 hover:border-[#d4af37] text-[#d4af37] text-xs rounded-sm transition-colors"
            title="Copy Verse"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Arabic Ayah */}
        <div className="text-right py-2">
          <p className="font-arabic text-2xl sm:text-3xl lg:text-4xl leading-loose text-[#d4af37] font-bold tracking-wide">
            {DAILY_VERSE.ayahArabic}
          </p>
        </div>

        {/* Translation */}
        <p className="font-serif italic text-base sm:text-lg text-[#f2f2e8] leading-relaxed">
          {DAILY_VERSE.ayahTranslation}
        </p>

        {/* Reference & Reflection */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pt-2 border-t border-[#d4af37]/15 text-xs text-[#b4c3bd]">
          <span className="font-semibold text-[#d4af37] uppercase tracking-wider">
            {DAILY_VERSE.surah} • [{DAILY_VERSE.surahNumber}:{DAILY_VERSE.ayahNumber}]
          </span>
          <p className="text-[11px] text-[#b4c3bd]/80 italic max-w-md">
            {DAILY_VERSE.explanation}
          </p>
        </div>
      </div>
    </div>
  );
};
