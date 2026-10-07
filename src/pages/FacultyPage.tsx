import React, { useState } from 'react';
import { Award, Star, CheckCircle, Sparkles, Filter, Languages, BookOpen } from 'lucide-react';
import { FACULTY } from '../data/academyData';

interface FacultyPageProps {
  onOpenFreeTrial: () => void;
}

export const FacultyPage: React.FC<FacultyPageProps> = ({ onOpenFreeTrial }) => {
  const [genderFilter, setGenderFilter] = useState<'All' | 'Male' | 'Female'>('All');

  const filteredFaculty = genderFilter === 'All'
    ? FACULTY
    : FACULTY.filter(f => f.gender === genderFilter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#061a14] gold-border text-[#d4af37] text-xs font-bold uppercase tracking-widest rounded-sm">
          <Award className="w-3.5 h-3.5" /> Authenticated Islamic Scholars
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#f2f2e8]">
          Our Qualified Quran Faculty
        </h1>
        <p className="text-xs sm:text-sm text-[#b4c3bd] leading-relaxed">
          Learn directly from experienced male Qaris and female Alima scholars certified by Wafaq-ul-Madaris and Al-Azhar institutions, equipped with classical Ijazah and fluent English & Urdu communication.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-center items-center gap-3">
        <span className="text-xs text-[#b4c3bd] uppercase tracking-wider font-semibold flex items-center gap-1">
          <Filter className="w-3.5 h-3.5 text-[#d4af37]" /> Filter Faculty:
        </span>
        {['All', 'Female', 'Male'].map((g) => (
          <button
            key={g}
            onClick={() => setGenderFilter(g as any)}
            className={`px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all ${
              genderFilter === g
                ? 'bg-[#d4af37] text-[#04120f] font-bold shadow-md'
                : 'bg-[#061a14] border border-[#d4af37]/20 text-[#b4c3bd] hover:border-[#d4af37]'
            }`}
          >
            {g === 'All' ? 'All Teachers' : g === 'Female' ? 'Female Scholars (Sisters/Kids)' : 'Male Qaris & Scholars'}
          </button>
        ))}
      </div>

      {/* Roster Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredFaculty.map((member) => (
          <div
            key={member.id}
            className="bg-[#061a14] gold-border rounded-sm p-6 sm:p-8 flex flex-col sm:flex-row gap-6 hover:border-[#d4af37] transition-all gold-glow-hover"
          >
            {/* Avatar */}
            <div className="shrink-0 flex flex-col items-center space-y-3">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-[#d4af37] overflow-hidden gold-glow relative bg-[#04120f]">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="px-2.5 py-0.5 bg-[#04120f] border border-[#d4af37]/30 text-[#d4af37] text-[10px] font-bold uppercase rounded-sm">
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

              <p className="text-xs text-[#b4c3bd] italic">
                "{member.bio}"
              </p>

              <div className="space-y-1 text-xs text-[#b4c3bd]">
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
                    className="px-2 py-0.5 bg-[#04120f] border border-[#d4af37]/20 text-[10px] text-[#f2f2e8] rounded-sm"
                  >
                    {spec}
                  </span>
                ))}
              </div>

              <div className="pt-3 border-t border-[#d4af37]/15 flex items-center justify-between">
                <div className="flex items-center gap-1 text-xs text-[#d4af37] font-bold">
                  <Star className="w-4 h-4 fill-current" />
                  <span>{member.rating}</span>
                  <span className="text-[10px] text-[#b4c3bd] font-normal">({member.studentsTaught}+ Students)</span>
                </div>

                <button
                  onClick={onOpenFreeTrial}
                  className="px-4 py-2 bg-[#d4af37] text-[#04120f] hover:bg-[#e2bd47] font-bold text-xs uppercase tracking-widest rounded-sm transition-colors"
                >
                  Request Teacher
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
