import React, { useState } from 'react';
import {
  Sparkles,
  BookOpen,
  Users,
  Award,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Star,
  Clock,
  Globe,
  Calendar,
  GraduationCap,
  Heart,
  ChevronDown,
  Layers,
  Baby,
  Shield,
  Briefcase,
  UserCheck,
  Sliders,
  Gift,
  HeartHandshake,
  TrendingUp,
  FileText,
  CalendarCheck
} from 'lucide-react';
import {
  ACADEMY_INFO,
  COURSES,
  FACULTY,
  TESTIMONIALS,
  STUDENT_CATEGORIES,
  WHY_CHOOSE_ITEMS,
  HOW_IT_WORKS_STEPS,
  FAQS
} from '../data/academyData';
import { DailyVerseWidget } from '../components/DailyVerseWidget';
import { PrayerTimesWidget } from '../components/PrayerTimesWidget';
import { useLanguage } from '../context/LanguageContext';

interface HomePageProps {
  setActiveTab: (tab: string) => void;
  onOpenFreeTrial: (courseId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ setActiveTab, onOpenFreeTrial }) => {
  const { t, isRTL, language } = useLanguage();
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const whatsappMessage = encodeURIComponent("Assalamu Alaikum! I would like to book a free Quran demo class with Taleem Ul Quran Campus.");
  const whatsappUrl = `https://wa.me/${ACADEMY_INFO.contact.whatsappClean}?text=${whatsappMessage}`;

  const renderIcon = (name: string, className = "w-5 h-5") => {
    switch (name) {
      case 'Baby': return <Baby className={className} />;
      case 'Shield': return <Shield className={className} />;
      case 'Sparkles': return <Sparkles className={className} />;
      case 'Briefcase': return <Briefcase className={className} />;
      case 'Heart': return <Heart className={className} />;
      case 'UserCheck': return <UserCheck className={className} />;
      case 'BookOpen': return <BookOpen className={className} />;
      case 'Award': return <Award className={className} />;
      case 'GraduationCap': return <GraduationCap className={className} />;
      case 'Clock': return <Clock className={className} />;
      case 'Home': return <BookOpen className={className} />;
      case 'ShieldCheck': return <ShieldCheck className={className} />;
      case 'Sliders': return <Sliders className={className} />;
      case 'Gift': return <Gift className={className} />;
      case 'HeartHandshake': return <HeartHandshake className={className} />;
      case 'TrendingUp': return <TrendingUp className={className} />;
      case 'FileText': return <FileText className={className} />;
      case 'CalendarCheck': return <CalendarCheck className={className} />;
      default: return <BookOpen className={className} />;
    }
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[600px] lg:min-h-[680px] flex flex-col justify-center px-4 sm:px-8 py-16 bg-[#061a14] border-b border-[#d4af37]/25 overflow-hidden">
        {/* Background Islamic Geometric Grid */}
        <div className="absolute inset-0 islamic-pattern-bg pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Column Text Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Academy Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#04120f] border border-[#d4af37]/40 text-[#d4af37] text-xs font-semibold uppercase tracking-widest rounded-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.hero.badge}</span>
            </div>

            {/* Hadith / Quranic Banner Quote */}
            <div className="p-3 bg-[#04120f]/80 border-l-2 rtl:border-l-0 rtl:border-r-2 border-[#d4af37] rounded-r rtl:rounded-r-none rtl:rounded-l max-w-xl">
              <p className="font-arabic text-sm sm:text-base text-[#d4af37] leading-relaxed">
                {ACADEMY_INFO.arabicTagline}
              </p>
              <p className="text-[11px] text-[#b4c3bd] mt-0.5">
                {t.hero.hadithQuote} <span className="text-[#d4af37]/80">({t.hero.hadithRef})</span>
              </p>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold leading-[1.15] text-[#f2f2e8]">
              {t.hero.title}
            </h1>

            {/* Urdu Title Variant */}
            <p className="font-urdu text-xl sm:text-2xl text-[#d4af37] font-semibold leading-relaxed">
              گھر بیٹھے قرآنِ کریم سیکھیں — آسان، مستند اور بہترین انداز میں
            </p>

            <p className="text-[#b4c3bd] text-sm sm:text-base leading-relaxed max-w-2xl">
              {t.hero.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <button
                onClick={() => onOpenFreeTrial()}
                className="px-7 py-3.5 bg-[#d4af37] text-[#04120f] font-bold uppercase tracking-wider text-xs rounded shadow-[0_0_25px_rgba(212,175,55,0.3)] hover:bg-[#e2bd47] transition-all flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <Calendar className="w-4 h-4" />
                <span>{t.hero.bookDemoBtn}</span>
              </button>

              <button
                onClick={() => setActiveTab('courses')}
                className="px-6 py-3.5 border border-[#f2f2e8]/30 hover:border-[#d4af37] text-[#f2f2e8] hover:text-[#d4af37] font-bold uppercase tracking-wider text-xs rounded hover:bg-[#04120f] transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>{t.hero.exploreCoursesBtn}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 bg-emerald-700/80 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider rounded border border-emerald-500/40 flex items-center gap-2 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t.hero.whatsappBtn}</span>
              </a>
            </div>

            {/* Trust Points */}
            <div className="pt-4 border-t border-[#d4af37]/20 flex flex-wrap items-center gap-4 text-xs text-[#b4c3bd]">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="w-4 h-4" /> 2-Day Free Trial
              </span>
              <span className="flex items-center gap-1.5 text-[#d4af37]">
                <CheckCircle2 className="w-4 h-4" /> Dedicated 1-on-1 Sessions
              </span>
              <span className="flex items-center gap-1.5 text-[#f2f2e8]">
                <CheckCircle2 className="w-4 h-4" /> Separate Female Teachers
              </span>
            </div>
          </div>

          {/* Right Column: Visual Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md bg-[#04120f] gold-border p-6 sm:p-8 rounded-2xl gold-glow space-y-6">
              {/* Islamic Medallion Header */}
              <div className="text-center space-y-2 border-b border-[#d4af37]/20 pb-4">
                <div className="w-16 h-16 border-2 border-[#d4af37] rounded-full mx-auto flex items-center justify-center bg-[#061a14] text-[#d4af37] gold-glow">
                  <BookOpen className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#f2f2e8]">
                  Taleem Ul Quran Campus
                </h3>
                <p className="font-arabic text-[#d4af37] text-base">
                  تعلیم القرآن آن لائن اکیڈمی
                </p>
              </div>

              {/* Live Program Highlight Box */}
              <div className="space-y-3 bg-[#061a14] p-4 rounded border border-[#d4af37]/20 text-xs">
                <div className="flex items-center justify-between text-[#d4af37] font-semibold">
                  <span>Class Format:</span>
                  <span className="text-[#f2f2e8]">Private 1-on-1 Screenboard</span>
                </div>
                <div className="flex items-center justify-between text-[#d4af37] font-semibold">
                  <span>Session Length:</span>
                  <span className="text-[#f2f2e8]">30 Minutes / Session</span>
                </div>
                <div className="flex items-center justify-between text-[#d4af37] font-semibold">
                  <span>Instructor Match:</span>
                  <span className="text-[#f2f2e8]">Male Qari or Female Alima</span>
                </div>
                <div className="flex items-center justify-between text-[#d4af37] font-semibold">
                  <span>Evaluation:</span>
                  <span className="text-emerald-400 font-bold">100% Free 2-Day Trial</span>
                </div>
              </div>

              {/* Direct Booking CTA */}
              <button
                onClick={() => onOpenFreeTrial()}
                className="w-full py-3 bg-[#d4af37] text-[#04120f] font-bold text-xs uppercase tracking-widest rounded hover:bg-[#e2bd47] transition-all cursor-pointer shadow-lg active:scale-95 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>{t.hero.bookDemoBtn}</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 2. TRUST / STATISTICS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-[#061a14] gold-border rounded-xl p-8 sm:p-10 gold-glow">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            
            <div className="space-y-1.5 border-r rtl:border-r-0 rtl:border-l last:border-none border-[#d4af37]/20 p-2">
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#d4af37]">
                {ACADEMY_INFO.stats.certifiedTeachers}
              </div>
              <div className="text-sm font-bold text-[#f2f2e8]">
                {t.stats.teachers}
              </div>
              <p className="text-xs text-[#b4c3bd]">
                {t.stats.teachersDesc}
              </p>
            </div>

            <div className="space-y-1.5 border-r rtl:border-r-0 rtl:border-l last:border-none border-[#d4af37]/20 p-2">
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#d4af37]">
                {ACADEMY_INFO.stats.studentsGraduated}
              </div>
              <div className="text-sm font-bold text-[#f2f2e8]">
                {t.stats.students}
              </div>
              <p className="text-xs text-[#b4c3bd]">
                {t.stats.studentsDesc}
              </p>
            </div>

            <div className="space-y-1.5 border-r rtl:border-r-0 rtl:border-l last:border-none border-[#d4af37]/20 p-2">
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#d4af37]">
                {ACADEMY_INFO.stats.countriesServed}
              </div>
              <div className="text-sm font-bold text-[#f2f2e8]">
                {t.stats.countries}
              </div>
              <p className="text-xs text-[#b4c3bd]">
                {t.stats.countriesDesc}
              </p>
            </div>

            <div className="space-y-1.5 p-2">
              <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#d4af37]">
                24/7
              </div>
              <div className="text-sm font-bold text-[#f2f2e8]">
                {t.stats.schedule}
              </div>
              <p className="text-xs text-[#b4c3bd]">
                {t.stats.scheduleDesc}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. STUDENT CATEGORIES: "CLASSES FOR EVERYONE" */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-[#d4af37] text-xs font-bold uppercase tracking-widest">
            {t.categories.heading}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#f2f2e8]">
            Classes Designed for Every Family Member
          </h2>
          <p className="text-xs sm:text-sm text-[#b4c3bd]">
            {t.categories.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STUDENT_CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="bg-[#061a14] gold-border p-6 rounded-lg space-y-3 hover:border-[#d4af37] transition-all gold-glow-hover flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="w-10 h-10 border border-[#d4af37]/40 rounded bg-[#04120f] flex items-center justify-center text-[#d4af37]">
                  {renderIcon(category.icon)}
                </div>
                <div className="flex items-baseline justify-between">
                  <h3 className="font-serif text-base font-bold text-[#f2f2e8]">
                    {category.title}
                  </h3>
                  <span className="font-arabic text-xs text-[#d4af37]">
                    {category.arabicTitle}
                  </span>
                </div>
                <p className="text-xs text-[#b4c3bd] leading-relaxed">
                  {category.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#d4af37]/15 space-y-1 text-[11px] text-[#f2f2e8]">
                {category.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 text-[#b4c3bd]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. COURSES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#d4af37]/20 pb-4">
          <div>
            <span className="text-[#d4af37] text-xs font-bold uppercase tracking-widest">
              {t.courses.heading}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#f2f2e8]">
              Structured Academic Curriculums
            </h2>
          </div>
          <button
            onClick={() => setActiveTab('courses')}
            className="text-[#d4af37] hover:underline text-xs font-bold uppercase tracking-wider flex items-center gap-1 cursor-pointer"
          >
            <span>{t.courses.viewAll} ({COURSES.length})</span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COURSES.slice(0, 6).map((course) => (
            <div
              key={course.id}
              className="bg-[#061a14] gold-border rounded-lg p-6 space-y-4 flex flex-col justify-between hover:border-[#d4af37] transition-all gold-glow-hover"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#d4af37] text-[10px] font-bold uppercase tracking-wider rounded">
                    {course.category}
                  </span>
                  <span className="text-xs text-[#b4c3bd]">{course.duration}</span>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-bold text-[#f2f2e8]">
                    {course.title}
                  </h3>
                  <p className="font-arabic text-sm text-[#d4af37] mt-0.5">
                    {course.arabicTitle}
                  </p>
                </div>

                <p className="text-xs text-[#b4c3bd] leading-relaxed line-clamp-3">
                  {course.description}
                </p>

                <div className="space-y-1.5 text-[11px] text-[#b4c3bd] pt-2">
                  <div className="flex justify-between">
                    <span>{t.courses.ageGroup}:</span>
                    <strong className="text-[#f2f2e8]">{course.ageGroup}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>{t.courses.level}:</span>
                    <strong className="text-[#f2f2e8]">{course.level}</strong>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#d4af37]/20 flex gap-2">
                <button
                  onClick={() => onOpenFreeTrial(course.id)}
                  className="flex-1 py-2.5 bg-[#d4af37] text-[#04120f] hover:bg-[#e2bd47] font-bold text-xs uppercase tracking-wider rounded transition-colors text-center cursor-pointer shadow-md"
                >
                  {t.courses.enrollBtn}
                </button>
                <button
                  onClick={() => setActiveTab('courses')}
                  className="py-2.5 px-3 border border-[#d4af37]/40 hover:border-[#d4af37] text-[#f2f2e8] text-xs rounded transition-colors"
                >
                  {t.courses.detailsBtn}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. WHY CHOOSE US */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-[#d4af37] text-xs font-bold uppercase tracking-widest">
            {t.whyUs.heading}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#f2f2e8]">
            Authentic Pedagogy & Uncompromising Quality
          </h2>
          <p className="text-xs sm:text-sm text-[#b4c3bd]">
            {t.whyUs.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {WHY_CHOOSE_ITEMS.map((item) => (
            <div
              key={item.id}
              className="bg-[#061a14] gold-border p-5 rounded-lg space-y-2.5 hover:border-[#d4af37]/60 transition-all gold-glow-hover"
            >
              <div className="w-9 h-9 border border-[#d4af37]/40 rounded bg-[#04120f] flex items-center justify-center text-[#d4af37]">
                {renderIcon(item.icon, "w-4 h-4")}
              </div>
              <h3 className="font-serif text-sm font-bold text-[#f2f2e8]">
                {item.title}
              </h3>
              <p className="text-[11px] text-[#b4c3bd] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. HOW IT WORKS - 4 STEP PROCESS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-[#061a14] gold-border rounded-xl p-8 sm:p-12 space-y-8 gold-glow">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[#d4af37] text-xs font-bold uppercase tracking-widest">
              {t.howItWorks.heading}
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#f2f2e8]">
              Start in 4 Simple Steps
            </h2>
            <p className="text-xs text-[#b4c3bd]">
              {t.howItWorks.subheading}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOW_IT_WORKS_STEPS.map((s) => (
              <div
                key={s.step}
                className="bg-[#04120f] border border-[#d4af37]/25 p-6 rounded-lg text-center space-y-3 relative group hover:border-[#d4af37] transition-all"
              >
                <div className="w-12 h-12 border-2 border-[#d4af37] rounded-full mx-auto flex items-center justify-center bg-[#061a14] text-[#d4af37] font-bold text-lg">
                  {s.step}
                </div>
                <h3 className="font-serif text-base font-bold text-[#f2f2e8]">
                  {s.title}
                </h3>
                <p className="text-xs text-[#b4c3bd] leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <button
              onClick={() => onOpenFreeTrial()}
              className="px-8 py-3 bg-[#d4af37] text-[#04120f] font-bold uppercase tracking-wider text-xs rounded hover:bg-[#e2bd47] transition-all shadow-md active:scale-95 cursor-pointer"
            >
              {t.hero.bookDemoBtn}
            </button>
          </div>
        </div>
      </section>

      {/* 7. ISLAMIC SCHEDULE & DAILY DUA WIDGET */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
        <PrayerTimesWidget />
      </section>

      {/* 8. DAILY VERSE INSPIRATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <DailyVerseWidget />
      </section>

      {/* 9. DISTINGUISHED FACULTY PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#d4af37]/20 pb-4">
          <div>
            <span className="text-[#d4af37] text-xs font-bold uppercase tracking-widest">
              {t.teachers.heading}
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#f2f2e8]">
              Qualified Qaris & Certified Alimas
            </h2>
          </div>
          <button
            onClick={() => setActiveTab('faculty')}
            className="text-[#d4af37] hover:underline text-xs font-bold uppercase tracking-wider flex items-center gap-1 cursor-pointer"
          >
            <span>View All Faculty Members</span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FACULTY.map((teacher) => (
            <div
              key={teacher.id}
              className="bg-[#061a14] gold-border p-6 rounded-lg space-y-4 flex flex-col justify-between hover:border-[#d4af37] transition-all gold-glow-hover"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full border border-[#d4af37] bg-[#04120f] flex items-center justify-center font-serif text-[#d4af37] font-bold text-lg">
                    {teacher.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-serif text-sm font-bold text-[#f2f2e8] leading-snug">
                      {teacher.name}
                    </h3>
                    <p className="text-[11px] text-[#d4af37]">{teacher.role}</p>
                  </div>
                </div>

                <p className="text-xs text-[#b4c3bd] leading-relaxed line-clamp-3">
                  {teacher.bio}
                </p>

                <div className="space-y-1 text-[11px] text-[#b4c3bd] pt-2 border-t border-[#d4af37]/15">
                  <div className="flex justify-between">
                    <span>Experience:</span>
                    <strong className="text-[#f2f2e8]">{teacher.experienceYears}+ Years</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Languages:</span>
                    <strong className="text-[#f2f2e8]">{teacher.languages.join(', ')}</strong>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onOpenFreeTrial()}
                className="w-full py-2 bg-[#04120f] border border-[#d4af37]/40 hover:border-[#d4af37] text-[#d4af37] hover:text-[#f2f2e8] font-bold text-xs uppercase tracking-wider rounded transition-colors text-center"
              >
                Request Trial
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 10. REAL TESTIMONIALS & REVIEWS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-[#061a14] gold-border p-8 sm:p-12 rounded-xl space-y-8 gold-glow">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-[#d4af37] text-xs font-bold uppercase tracking-widest">
              Student & Parent Reflections
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#f2f2e8]">
              Trusted by Families Around the Globe
            </h2>
            <p className="text-xs text-[#b4c3bd]">
              Real testimonials from parents and adult students in the UK, USA, and Canada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((rev) => (
              <div
                key={rev.id}
                className="bg-[#04120f] border border-[#d4af37]/25 p-6 rounded-lg space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex text-[#d4af37]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs italic text-[#f2f2e8] leading-relaxed">
                    "{rev.quote}"
                  </p>
                </div>

                <div className="pt-3 border-t border-[#d4af37]/15 text-xs">
                  <div className="font-bold text-[#d4af37]">{rev.parentName}</div>
                  <div className="text-[11px] text-[#b4c3bd]">{rev.studentName} · {rev.location}</div>
                  <div className="text-[10px] text-[#d4af37]/80 mt-0.5">{rev.course}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Genuine Student Reviews Placeholder */}
          <div className="p-4 bg-[#04120f]/60 border border-[#d4af37]/20 rounded text-center text-xs text-[#b4c3bd]">
            <span>Are you a currently enrolled student or parent? </span>
            <button
              onClick={() => setActiveTab('contact')}
              className="text-[#d4af37] hover:underline font-semibold"
            >
              Share your feedback with the academic board
            </button>
          </div>
        </div>
      </section>

      {/* 11. FAQ ACCORDION PREVIEW */}
      <section className="max-w-4xl mx-auto px-4 sm:px-8 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-[#d4af37] text-xs font-bold uppercase tracking-widest">
            {t.nav.faq}
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#f2f2e8]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.slice(0, 5).map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-[#061a14] gold-border rounded-lg overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-5 py-4 text-left rtl:text-right flex items-center justify-between gap-4 font-serif text-sm font-bold text-[#f2f2e8] hover:text-[#d4af37] transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 text-[#d4af37] shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-4 text-xs text-[#b4c3bd] leading-relaxed border-t border-[#d4af37]/15 pt-3 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center pt-2">
          <button
            onClick={() => setActiveTab('faq')}
            className="text-xs text-[#d4af37] hover:underline font-bold uppercase tracking-wider flex items-center gap-1 mx-auto"
          >
            <span>View All Frequently Asked Questions</span>
            <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
          </button>
        </div>
      </section>

      {/* 12. FINAL CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-gradient-to-r from-[#061a14] via-[#092b21] to-[#061a14] gold-border p-8 sm:p-14 rounded-xl text-center space-y-6 gold-glow">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#04120f] border border-[#d4af37]/40 text-[#d4af37] text-xs font-semibold uppercase tracking-widest rounded-sm">
            <Sparkles className="w-3.5 h-3.5" /> 100% Free Trial Class
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#f2f2e8] max-w-3xl mx-auto">
            Give Your Family the Gift of Quranic Knowledge Today
          </h2>

          <p className="text-xs sm:text-sm text-[#b4c3bd] max-w-2xl mx-auto leading-relaxed">
            Take the first step with Taleem Ul Quran Campus. Schedule your 2-day free trial class and experience our authentic, gentle, and structured 1-on-1 teaching firsthand.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenFreeTrial()}
              className="px-8 py-3.5 bg-[#d4af37] text-[#04120f] font-bold uppercase tracking-wider text-xs rounded hover:bg-[#e2bd47] transition-all shadow-xl active:scale-95 cursor-pointer"
            >
              {t.hero.bookDemoBtn}
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 border border-emerald-500/50 bg-emerald-600/20 text-emerald-300 font-bold uppercase tracking-wider text-xs rounded hover:bg-emerald-600/40 transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t.hero.whatsappBtn}</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
