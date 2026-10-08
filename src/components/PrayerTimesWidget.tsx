import React, { useState } from 'react';
import { Clock, Calendar, BookOpen, Moon, Sun, Sparkles } from 'lucide-react';
import { AUTHENTIC_DUAS } from '../data/academyData';
import { useLanguage } from '../context/LanguageContext';

export const PrayerTimesWidget: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const [selectedDuaIdx, setSelectedDuaIdx] = useState(0);

  // Approximate Hijri date based on current Gregorian date
  const today = new Date();
  const hijriYear = 1447; // 2026 corresponds to 1447-1448 AH
  const hijriMonths = [
    'Muharram', 'Safar', 'Rabi al-Awwal', 'Rabi al-Thani', 'Jumada al-Awwal',
    'Jumada al-Thani', 'Rajab', 'Sha’ban', 'Ramadan', 'Shawwal', 'Dhu al-Qi’dah', 'Dhu al-Hijjah'
  ];
  const hijriMonth = hijriMonths[today.getMonth() % 12];
  const hijriDay = ((today.getDate() + 14) % 29) + 1;

  // Typical prayer times layout
  const prayerTimes = [
    { name: 'Fajr', time: '05:12 AM', icon: Moon },
    { name: 'Sunrise', time: '06:34 AM', icon: Sun },
    { name: 'Dhuhr', time: '12:28 PM', icon: Sun },
    { name: 'Asr', time: '03:45 PM', icon: Sun },
    { name: 'Maghrib', time: '06:22 PM', icon: Moon },
    { name: 'Isha', time: '07:44 PM', icon: Moon },
  ];

  const currentDua = AUTHENTIC_DUAS[selectedDuaIdx];

  return (
    <div className="bg-[#061a14] gold-border rounded-lg p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden">
      <div className="islamic-pattern-bg absolute inset-0 pointer-events-none" />

      {/* Header bar */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-[#d4af37]/20 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#04120f] border border-[#d4af37] flex items-center justify-center text-[#d4af37]">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-serif text-lg font-bold text-[#f2f2e8] flex items-center gap-2">
              <span>Islamic Schedule & Daily Du’a</span>
            </h3>
            <p className="text-xs text-[#b4c3bd]">
              Daily Sunnah reflections and reference prayer schedule
            </p>
          </div>
        </div>

        {/* Hijri Date Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#04120f] border border-[#d4af37]/40 rounded text-xs font-semibold text-[#d4af37]">
          <Calendar className="w-3.5 h-3.5" />
          <span>{hijriDay} {hijriMonth} {hijriYear} AH</span>
        </div>
      </div>

      {/* Grid: Prayer Times + Daily Dua */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left: Prayer Times bar */}
        <div className="lg:col-span-5 space-y-3">
          <div className="text-xs uppercase tracking-wider text-[#d4af37] font-semibold flex items-center justify-between">
            <span>Reference Prayer Times</span>
            <span className="text-[10px] text-[#b4c3bd]/70">(Local Standard)</span>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-3 gap-2">
            {prayerTimes.map((p, idx) => {
              const IconComp = p.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#04120f]/80 border border-[#d4af37]/20 hover:border-[#d4af37]/50 rounded p-2.5 text-center transition-all"
                >
                  <div className="flex items-center justify-center text-[#d4af37] mb-1">
                    <IconComp className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-[11px] font-medium text-[#b4c3bd]">{p.name}</div>
                  <div className="text-xs font-bold text-[#f2f2e8] mt-0.5">{p.time}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Authentic Daily Dua */}
        <div className="lg:col-span-7 bg-[#04120f]/90 border border-[#d4af37]/30 rounded-lg p-5 space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 text-xs text-[#d4af37] font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" /> {currentDua.title}
              </span>
              <div className="flex gap-1.5">
                {AUTHENTIC_DUAS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedDuaIdx(i)}
                    className={`w-6 h-6 rounded text-[11px] font-bold transition-all ${
                      selectedDuaIdx === i
                        ? 'bg-[#d4af37] text-[#04120f]'
                        : 'bg-[#061a14] border border-[#d4af37]/30 text-[#b4c3bd] hover:text-[#d4af37]'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            </div>

            {/* Arabic Script */}
            <p className="font-arabic text-xl sm:text-2xl text-[#d4af37] text-center leading-loose py-2 px-3 bg-[#061a14]/60 rounded border border-[#d4af37]/15">
              {currentDua.arabic}
            </p>

            {/* Transliteration & Translation */}
            <div className="space-y-1.5 text-xs">
              <p className="text-[#b4c3bd] italic font-medium">
                {currentDua.transliteration}
              </p>
              <p className="text-[#f2f2e8] font-normal leading-relaxed">
                {currentDua.translation}
              </p>
            </div>
          </div>

          <div className="border-t border-[#d4af37]/20 pt-2 flex items-center justify-between text-[11px] text-[#d4af37]/80">
            <span>Authentic Reference:</span>
            <span className="font-semibold text-[#f2f2e8]">{currentDua.reference}</span>
          </div>
        </div>

      </div>
    </div>
  );
};
