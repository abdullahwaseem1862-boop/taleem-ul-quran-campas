import React, { useState } from 'react';
import { Award, Star, CheckCircle, Sparkles, Filter, Languages, BookOpen, User, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';
import { FACULTY } from '../data/academyData';
import { useLanguage } from '../context/LanguageContext';

interface FacultyPageProps {
  onOpenFreeTrial: () => void;
}

export const FacultyPage: React.FC<FacultyPageProps> = ({ onOpenFreeTrial }) => {
  const { t } = useLanguage();
  const [genderFilter, setGenderFilter] = useState<'All' | 'Male' | 'Female'>('All');

  const filteredFaculty = genderFilter === 'All'
    ? FACULTY
    : FACULTY.filter(f => f.gender === genderFilter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#061a14] gold-border text-[#d4af37] text-xs font-bold uppercase tracking-widest rounded-sm">
          <Award className="w-3.5 h-3.5" /> Certified Islamic Scholars & Qaris
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#f2f2e8]">
          Our Distinguished Faculty
        </h1>
        <p className="text-xs sm:text-sm text-[#b4c3bd] leading-relaxed">
          Learn directly from experienced male Qaris and certified female Alima scholars equipped with authentic Ijazah and fluent multilingual communication.
        </p>

        {/* Sister notification */}
        <div className="inline-flex items-center gap-2 p-2 px-4 bg-[#04120f] border border-[#d4af37]/30 text-[#d4af37] text-xs rounded">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>{t.teachers.femaleTeacherNotice}</span>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-center items-center gap-3 flex-wrap">
        <span className="text-xs text-[#b4c3bd] uppercase tracking-wider font-semibold flex items-center gap-1">
          <Filter className="w-3.5 h-3.5 text-[#d4af37]" /> Filter:
        </span>
        {['All', 'Female', 'Male'].map((g) => (
          <button
            key={g}
            onClick={() => setGenderFilter(g as any)}
            className={`px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded transition-all ${
              genderFilter === g
                ? 'bg-[#d4af37] text-[#04120f] font-bold shadow-md'
                : 'bg-[#061a14] border border-[#d4af37]/20 text-[#b4c3bd] hover:border-[#d4af37]'
            }`}
          >
            {g === 'All' ? 'All Teachers' : g === 'Female' ? 'Female Scholars (Sisters/Kids)' : 'Male Qaris & Scholars'}
          </button>
        ))}
      </div>

      {/* Faculty Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredFaculty.map((member) => (
          <div
            key={member.id}
            className="bg-[#061a14] gold-border rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 hover:border-[#d4af37] transition-all gold-glow-hover"
          >
            {/* Islamic Monogram Badge */}
            <div className="shrink-0 flex flex-col items-center space-y-3">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-[#d4af37] flex flex-col items-center justify-center bg-[#04120f] gold-glow text-[#d4af37]">
                <span className="font-serif font-bold text-2xl">
                  {member.name.charAt(0)}
                </span>
                <span className="text-[9px] uppercase tracking-widest text-[#b4c3bd]">
                  {member.gender === 'Female' ? 'Alima' : 'Qari'}
                </span>
              </div>
              <span className="px-2.5 py-0.5 bg-[#04120f] border border-[#d4af37]/30 text-[#d4af37] text-[10px] font-bold uppercase rounded">
                {member.gender} Teacher
              </span>
            </div>

            {/* Content */}
            <div className="space-y-3 flex-1">
              <div>
                <h3 className="font-serif text-xl font-bold text-[#f2f2e8]">
                  {member.name}
                </h3>
                <p className="font-arabic text-lg text-[#d4af37]">
                  {member.arabicTitle}
                </p>
                <p className="text-xs text-[#d4af37] font-semibold">
                  {member.role}
                </p>
              </div>

              <p className="text-xs text-[#b4c3bd] leading-relaxed">
                {member.bio}
              </p>

              <div className="space-y-1 text-xs text-[#b4c3bd] bg-[#04120f]/60 p-3 rounded border border-[#d4af37]/15">
                <div>
                  <strong className="text-[#d4af37]">Qualification:</strong> {member.qualification}
                </div>
                <div>
                  <strong className="text-[#d4af37]">Experience:</strong> {member.experienceYears}+ Years Teaching Online
                </div>
                <div className="flex items-center gap-1">
                  <Languages className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Languages: {member.languages.join(', ')}</span>
                </div>
              </div>

              {/* Specializations Badges */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {member.specialization.map((spec, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 bg-[#04120f] border border-[#d4af37]/20 text-[10px] text-[#f2f2e8] rounded"
                  >
                    {spec}
                  </span>
                ))}
              </div>

              <div className="pt-3 border-t border-[#d4af37]/15 flex items-center justify-between">
                <div className="flex items-center gap-1 text-xs text-[#d4af37] font-bold">
                  <Star className="w-4 h-4 fill-current" />
                  <span>{member.rating}</span>
                  <span className="text-[10px] text-[#b4c3bd] font-normal">({member.studentsTaught}+ Students Taught)</span>
                </div>

                <button
                  onClick={onOpenFreeTrial}
                  className="px-4 py-2 bg-[#d4af37] text-[#04120f] hover:bg-[#e2bd47] font-bold text-xs uppercase tracking-wider rounded transition-colors"
                >
                  Request Trial
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Faculty Application Note */}
      <div className="p-6 bg-[#04120f] gold-border rounded text-center text-xs text-[#b4c3bd]">
        <span>Are you a qualified Qari or Alima seeking to join our global teaching faculty? </span>
        <button
          onClick={() => {
            const subject = encodeURIComponent("Teacher Application - Taleem Ul Quran Campus");
            window.location.href = `mailto:taleemulquranonlineacademy2026@gmail.com?subject=${subject}`;
          }}
          className="text-[#d4af37] hover:underline font-bold"
        >
          Submit your credentials to admissions desk
        </button>
      </div>

    </div>
  );
};
