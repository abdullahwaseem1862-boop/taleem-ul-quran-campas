import React, { useState } from 'react';
import { BookOpen, Video, Mic, Volume2, Calendar, Award, CheckCircle2, User, Play, Pause, Sparkles, MessageSquare } from 'lucide-react';

export const StudentPortalPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'classroom' | 'qaida' | 'assignments'>('classroom');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const toggleAudio = () => {
    setIsPlayingAudio(!isPlayingAudio);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#061a14] gold-border text-[#d4af37] text-xs font-bold uppercase tracking-widest rounded-sm">
          <Video className="w-3.5 h-3.5" /> Interactive Learning Experience
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#f2f2e8]">
          Student Portal & Classroom Demo
        </h1>
        <p className="text-xs sm:text-sm text-[#b4c3bd] leading-relaxed">
          Preview how our 1-on-1 live virtual classroom functions, equipped with digital Quran pages, Tajweed audio playback, daily attendance tracking, and teacher notes.
        </p>
      </div>

      {/* Demo Nav Tabs */}
      <div className="flex justify-center border-b border-[#d4af37]/20 pb-4">
        <div className="flex gap-2 bg-[#04120f] p-1.5 border border-[#d4af37]/30 rounded-sm">
          <button
            onClick={() => setActiveTab('classroom')}
            className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-sm transition-all ${
              activeTab === 'classroom'
                ? 'bg-[#d4af37] text-[#04120f]'
                : 'text-[#b4c3bd] hover:text-[#d4af37]'
            }`}
          >
            Live Virtual Classroom
          </button>
          <button
            onClick={() => setActiveTab('qaida')}
            className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-sm transition-all ${
              activeTab === 'qaida'
                ? 'bg-[#d4af37] text-[#04120f]'
                : 'text-[#b4c3bd] hover:text-[#d4af37]'
            }`}
          >
            Digital Noorani Qaida Reader
          </button>
          <button
            onClick={() => setActiveTab('assignments')}
            className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-sm transition-all ${
              activeTab === 'assignments'
                ? 'bg-[#d4af37] text-[#04120f]'
                : 'text-[#b4c3bd] hover:text-[#d4af37]'
            }`}
          >
            Homework & Progress Logs
          </button>
        </div>
      </div>

      {/* Tab 1: Live Virtual Classroom */}
      {activeTab === 'classroom' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Classroom Screen */}
          <div className="lg:col-span-8 bg-[#061a14] gold-border p-6 rounded-sm space-y-4 gold-glow">
            <div className="flex items-center justify-between border-b border-[#d4af37]/20 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping" />
                <span className="text-xs font-bold text-[#f2f2e8]">
                  LIVE CLASS IN PROGRESS • Surah Al-Mulk (Verses 1-10)
                </span>
              </div>
              <span className="text-xs text-[#d4af37] font-semibold">
                Instructor: Qari Abdul Rahman
              </span>
            </div>

            {/* Virtual Board Simulation */}
            <div className="bg-[#04120f] border border-[#d4af37]/30 p-8 rounded-sm text-center space-y-6 relative overflow-hidden min-h-[320px] flex flex-col justify-center items-center">
              <span className="text-[10px] uppercase tracking-widest text-[#d4af37] font-bold">
                Digital Tajweed Screenboard
              </span>

              <div className="font-arabic text-3xl sm:text-4xl leading-loose text-[#d4af37] font-bold tracking-wide">
                تَبَارَكَ الَّذِي بِيَدِهِ الْمُلْكُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ
              </div>

              <div className="p-3 bg-[#061a14] border border-[#d4af37]/20 rounded-sm text-xs text-[#f2f2e8] max-w-lg">
                <span className="text-[#d4af37] font-bold block">Teacher Note:</span>
                Focus on the Qalqalah sound on the letter <strong className="text-[#d4af37]">ق (Qaf)</strong> at the end of the verse.
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={toggleAudio}
                  className="px-4 py-2 bg-[#d4af37] text-[#04120f] font-bold text-xs rounded-sm flex items-center gap-2 hover:bg-[#e2bd47]"
                >
                  {isPlayingAudio ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  <span>{isPlayingAudio ? 'Pause Teacher Recitation' : 'Listen Teacher Recitation'}</span>
                </button>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between pt-2 text-xs text-[#b4c3bd]">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1 text-emerald-400">
                  <Mic className="w-4 h-4" /> Student Mic Active
                </span>
                <span className="flex items-center gap-1 text-[#d4af37]">
                  <Video className="w-4 h-4" /> 720p HD Classroom
                </span>
              </div>
              <span>Session Duration: 22 / 30 mins</span>
            </div>
          </div>

          {/* Right Sidebar: Student Details & Attendance */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#061a14] gold-border p-6 rounded-sm space-y-4">
              <h3 className="font-serif text-xl font-bold text-[#f2f2e8] border-b border-[#d4af37]/20 pb-2">
                Active Student Profile
              </h3>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 border-2 border-[#d4af37] rounded-full bg-[#04120f] flex items-center justify-center text-[#d4af37] font-bold">
                  ZK
                </div>
                <div>
                  <div className="font-bold text-sm text-[#f2f2e8]">Zayd Khan</div>
                  <div className="text-xs text-[#b4c3bd]">Course: Tajweed Masterclass</div>
                  <div className="text-[10px] text-[#d4af37] font-semibold">Attendance: 98% (12/12 Classes)</div>
                </div>
              </div>

              <div className="space-y-2 pt-2 border-t border-[#d4af37]/15 text-xs text-[#b4c3bd]">
                <div className="flex justify-between">
                  <span>Target Completion:</span>
                  <strong className="text-[#f2f2e8]">Juz 29 Tajweed</strong>
                </div>
                <div className="flex justify-between">
                  <span>Weekly Pace:</span>
                  <strong className="text-[#f2f2e8]">3 Sessions / Week</strong>
                </div>
              </div>
            </div>

            <div className="bg-[#061a14] gold-border p-6 rounded-sm space-y-3">
              <h4 className="font-serif text-lg font-bold text-[#d4af37]">
                Teacher Feedback Today
              </h4>
              <p className="text-xs text-[#b4c3bd] leading-relaxed italic">
                "MashaAllah, Zayd's pronunciation of heavy letters (Tafkheem) has improved significantly today. Excellent effort!"
              </p>
            </div>
          </div>

        </div>
      )}

      {/* Tab 2: Digital Qaida */}
      {activeTab === 'qaida' && (
        <div className="bg-[#061a14] gold-border p-6 sm:p-8 rounded-sm space-y-6 text-center">
          <h3 className="font-serif text-2xl font-bold text-[#f2f2e8]">
            Interactive Noorani Qaida Reader
          </h3>
          <p className="text-xs text-[#b4c3bd] max-w-xl mx-auto">
            Click on any Arabic letter below to hear the authentic Makhraj pronunciation point recorded by our chief Qari.
          </p>

          <div className="grid grid-cols-4 sm:grid-cols-7 gap-3 max-w-3xl mx-auto pt-4">
            {['ا', 'ب', 'ت', 'ث', 'ج', 'ح', 'خ', 'د', 'ذ', 'ر', 'ز', 'س', 'ش', 'ص'].map((letter, i) => (
              <button
                key={i}
                onClick={toggleAudio}
                className="p-6 bg-[#04120f] border border-[#d4af37]/30 hover:border-[#d4af37] rounded-sm text-[#d4af37] font-arabic text-3xl font-bold hover:scale-105 transition-all gold-glow-hover flex flex-col items-center justify-center cursor-pointer"
              >
                <span>{letter}</span>
                <span className="text-[10px] font-sans text-[#b4c3bd] font-normal mt-1">Letter {i + 1}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Homework & Progress */}
      {activeTab === 'assignments' && (
        <div className="bg-[#061a14] gold-border p-6 sm:p-8 rounded-sm space-y-6">
          <h3 className="font-serif text-2xl font-bold text-[#f2f2e8]">
            Weekly Revision & Homework Log
          </h3>

          <div className="space-y-3">
            {[
              { title: 'Sabaq (New Lesson)', desc: 'Surah Al-Mulk Verses 1 to 10 with proper Waqf stops.', status: 'Completed', date: 'Today' },
              { title: 'Sabaqi (Recent Revision)', desc: 'Surah Al-Jumuah Verses 1 to 11.', status: 'In Progress', date: 'Yesterday' },
              { title: 'Manzil (Old Revision)', desc: 'Juz 30 Complete Review.', status: 'Due Tomorrow', date: 'Upcoming' },
            ].map((item, idx) => (
              <div key={idx} className="p-4 bg-[#04120f] border border-[#d4af37]/20 rounded-sm flex items-center justify-between gap-4 text-xs">
                <div>
                  <div className="font-bold text-[#d4af37] text-sm">{item.title}</div>
                  <div className="text-[#f2f2e8] mt-0.5">{item.desc}</div>
                </div>
                <span className="px-3 py-1 bg-[#d4af37]/20 text-[#d4af37] font-bold rounded-sm text-[10px] uppercase">
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
