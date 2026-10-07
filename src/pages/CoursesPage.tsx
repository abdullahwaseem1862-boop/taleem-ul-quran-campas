import React, { useState } from 'react';
import { BookOpen, Sparkles, Check, Clock, Users, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import { COURSES } from '../data/academyData';
import { Course } from '../types';

interface CoursesPageProps {
  onOpenFreeTrial: (courseId?: string) => void;
}

export const CoursesPage: React.FC<CoursesPageProps> = ({ onOpenFreeTrial }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedCourseModal, setSelectedCourseModal] = useState<Course | null>(null);

  const categories = ['All', 'Foundation', 'Recitation', 'Tajweed', 'Memorization', 'Tafseer', 'Islamic Studies', 'Language'];

  const filteredCourses = selectedCategory === 'All'
    ? COURSES
    : COURSES.filter(c => c.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#061a14] gold-border text-[#d4af37] text-xs font-bold uppercase tracking-widest rounded-sm">
          <Sparkles className="w-3.5 h-3.5" /> Structured Learning Paths
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#f2f2e8]">
          Our Quran & Islamic Studies Courses
        </h1>
        <p className="text-xs sm:text-sm text-[#b4c3bd] leading-relaxed">
          From basic letter recognition in Noorani Qaida to advanced Tajweed masterclasses and full 30 Juz Quran Hifz, explore our certified online curriculums for children and adults.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 border-b border-[#d4af37]/20 pb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all ${
              selectedCategory === cat
                ? 'bg-[#d4af37] text-[#04120f] font-bold shadow-md'
                : 'bg-[#061a14] border border-[#d4af37]/20 text-[#b4c3bd] hover:border-[#d4af37] hover:text-[#d4af37]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="bg-[#061a14] gold-border rounded-sm p-6 space-y-5 flex flex-col justify-between hover:border-[#d4af37] transition-all gold-glow-hover relative group"
          >
            {course.badge && (
              <div className="absolute -top-3 right-4 px-3 py-0.5 bg-[#d4af37] text-[#04120f] font-bold text-[10px] uppercase tracking-widest rounded-sm shadow-md">
                {course.badge}
              </div>
            )}

            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-[#b4c3bd]">
                <span className="px-2.5 py-0.5 bg-[#04120f] border border-[#d4af37]/30 text-[#d4af37] font-semibold text-[10px] uppercase rounded-sm">
                  {course.category}
                </span>
                <span className="flex items-center gap-1 font-medium">
                  <Clock className="w-3.5 h-3.5 text-[#d4af37]" /> {course.duration}
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#f2f2e8] group-hover:text-[#d4af37] transition-colors">
                {course.title}
              </h3>

              <p className="font-arabic text-right text-xl text-[#d4af37] font-bold">
                {course.arabicTitle}
              </p>

              <div className="flex items-center gap-2 text-xs text-[#b4c3bd]">
                <Users className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Level: <strong className="text-[#f2f2e8]">{course.level}</strong> • {course.ageGroup}</span>
              </div>

              <p className="text-xs text-[#b4c3bd] leading-relaxed line-clamp-3">
                {course.description}
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-[#d4af37]/15">
              <div className="space-y-1.5">
                <span className="text-[11px] uppercase tracking-wider text-[#d4af37] font-bold block">
                  Key Outcomes:
                </span>
                <ul className="space-y-1 text-xs text-[#b4c3bd]">
                  {course.outcomes.slice(0, 2).map((outcome, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2">
                <button
                  onClick={() => setSelectedCourseModal(course)}
                  className="py-2.5 border border-[#d4af37]/30 hover:border-[#d4af37] text-[#f2f2e8] hover:text-[#d4af37] font-bold text-[11px] uppercase tracking-widest rounded-sm transition-colors"
                >
                  View Details
                </button>
                <button
                  onClick={() => onOpenFreeTrial(course.id)}
                  className="py-2.5 bg-[#d4af37] text-[#04120f] hover:bg-[#e2bd47] font-bold text-[11px] uppercase tracking-widest rounded-sm transition-colors"
                >
                  Free Trial
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detail Modal */}
      {selectedCourseModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#061a14] gold-border gold-glow p-6 sm:p-8 rounded-sm text-[#f2f2e8] max-h-[90vh] overflow-y-auto space-y-6">
            <button
              onClick={() => setSelectedCourseModal(null)}
              className="absolute top-4 right-4 p-2 text-[#b4c3bd] hover:text-[#d4af37]"
            >
              ✕
            </button>

            <div className="space-y-2 border-b border-[#d4af37]/20 pb-4">
              <span className="px-3 py-0.5 bg-[#04120f] border border-[#d4af37]/30 text-[#d4af37] font-bold text-xs uppercase tracking-widest rounded-sm">
                {selectedCourseModal.category}
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#f2f2e8]">
                {selectedCourseModal.title}
              </h2>
              <p className="font-arabic text-2xl text-[#d4af37]">
                {selectedCourseModal.arabicTitle}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs bg-[#04120f] p-4 gold-border rounded-sm text-[#b4c3bd]">
              <div>
                <span className="text-[#d4af37] block font-semibold">Duration:</span>
                {selectedCourseModal.duration}
              </div>
              <div>
                <span className="text-[#d4af37] block font-semibold">Age Group:</span>
                {selectedCourseModal.ageGroup}
              </div>
              <div>
                <span className="text-[#d4af37] block font-semibold">Level:</span>
                {selectedCourseModal.level}
              </div>
            </div>

            <p className="text-xs text-[#b4c3bd] leading-relaxed">
              {selectedCourseModal.description}
            </p>

            {/* Curriculum Breakdown */}
            <div className="space-y-2">
              <h4 className="font-serif text-lg font-bold text-[#d4af37]">
                Curriculum Breakdown
              </h4>
              <div className="space-y-2">
                {selectedCourseModal.curriculum.map((item, i) => (
                  <div key={i} className="p-3 bg-[#04120f] border border-[#d4af37]/20 rounded-sm text-xs text-[#f2f2e8]">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Expected Learning Outcomes */}
            <div className="space-y-2">
              <h4 className="font-serif text-lg font-bold text-[#d4af37]">
                Expected Outcomes
              </h4>
              <ul className="space-y-2 text-xs text-[#b4c3bd]">
                {selectedCourseModal.outcomes.map((o, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-[#d4af37]/20 flex items-center justify-between">
              <button
                onClick={() => setSelectedCourseModal(null)}
                className="px-6 py-2.5 border border-[#d4af37]/30 text-[#b4c3bd] text-xs font-bold uppercase"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const cId = selectedCourseModal.id;
                  setSelectedCourseModal(null);
                  onOpenFreeTrial(cId);
                }}
                className="px-8 py-2.5 bg-[#d4af37] text-[#04120f] font-bold text-xs uppercase tracking-widest rounded-sm hover:bg-[#e2bd47]"
              >
                Register Free Trial
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
