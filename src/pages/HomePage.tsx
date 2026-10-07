import React from 'react';
import { Sparkles, BookOpen, Users, Award, ShieldCheck, CheckCircle2, ArrowRight, MessageCircle, Star, Clock, Globe } from 'lucide-react';
import { ACADEMY_INFO, COURSES, FACULTY, TESTIMONIALS } from '../data/academyData';
import { DailyVerseWidget } from '../components/DailyVerseWidget';

interface HomePageProps {
  setActiveTab: (tab: string) => void;
  onOpenFreeTrial: (courseId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ setActiveTab, onOpenFreeTrial }) => {
  return (
    <div className="space-y-16 pb-12">
      
      {/* HERO SECTION - Sophisticated Dark Theme */}
      <section className="relative min-h-[580px] lg:min-h-[640px] flex flex-col justify-center px-4 sm:px-8 py-12 bg-[#061a14] border-b border-[#d4af37]/25 overflow-hidden">
        {/* Background Islamic Geometric Grid */}
        <div className="absolute inset-0 islamic-pattern-bg pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Column Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#04120f] border border-[#d4af37]/40 text-[#d4af37] text-xs font-semibold uppercase tracking-widest rounded-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Worldwide Online Quran Academy</span>
            </div>

            <p className="text-[#d4af37] font-serif italic text-lg sm:text-xl">
              Nurturing the Heart with Divine Knowledge
            </p>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-[#f2f2e8]">
              Master the <br />
              <span className="text-[#d4af37] drop-shadow-[0_0_15px_rgba(212,175,55,0.2)]">Holy Quran</span> <br />
              from Anywhere.
            </h1>

            <p className="text-[#b4c3bd] text-sm sm:text-base leading-relaxed max-w-xl">
              Experience world-class, 1-on-1 live Islamic education. Learn Noorani Qaida, Tajweed, Hifz, and Tafseer with certified male and female Alim scholars tailored to your schedule.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onOpenFreeTrial()}
                className="px-8 py-4 bg-[#d4af37] text-[#04120f] font-bold uppercase tracking-widest text-xs rounded-sm hover:bg-[#e2bd47] transition-all shadow-[0_0_25px_rgba(212,175,55,0.3)] flex items-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Book Free Trial Class</span>
              </button>

              <button
                onClick={() => setActiveTab('courses')}
                className="px-8 py-4 border border-[#f2f2e8]/30 hover:border-[#d4af37] text-[#f2f2e8] hover:text-[#d4af37] font-bold uppercase tracking-widest text-xs rounded-sm hover:bg-[#04120f] transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Explore All Courses</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Micro Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#d4af37]/15 text-xs text-[#b4c3bd]">
              <div>
                <span className="text-[#d4af37] font-bold text-lg block">5,000+</span>
                <span className="text-[11px]">Certified Students</span>
              </div>
              <div>
                <span className="text-[#d4af37] font-bold text-lg block">30+</span>
                <span className="text-[11px]">Qualified Scholars</span>
              </div>
              <div>
                <span className="text-[#d4af37] font-bold text-lg block">35+</span>
                <span className="text-[11px]">Countries Served</span>
              </div>
            </div>
          </div>

          {/* Right Column Visual Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md bg-[#04120f] gold-border p-6 rounded-t-full gold-glow flex flex-col items-center text-center space-y-6">
              <div className="w-full h-80 border border-[#d4af37]/20 rounded-t-full flex flex-col items-center justify-center p-6 bg-[#061a14]/80 relative overflow-hidden">
                
                {/* Quran Icon Graphic */}
                <div className="w-20 h-20 border-2 border-[#d4af37] rounded-full flex items-center justify-center bg-[#04120f] text-[#d4af37] mb-4 gold-glow">
                  <BookOpen className="w-10 h-10" />
                </div>

                <div className="font-serif text-2xl font-bold text-[#d4af37] uppercase tracking-widest">
                  1-on-1 Live Class
                </div>
                <p className="text-xs text-[#b4c3bd] mt-2 max-w-xs leading-relaxed">
                  Dedicated male & female Alim Quran teachers with individual attention & flexible scheduling.
                </p>

                {/* Floating badge */}
                <div className="absolute -bottom-4 bg-[#04120f] border border-[#d4af37]/40 py-2 px-6 rounded-sm text-center shadow-lg">
                  <span className="text-[#f2f2e8] font-bold text-sm block">100% Satisfaction</span>
                  <span className="text-[10px] text-[#d4af37] uppercase tracking-wider font-semibold">
                    2 Days Free Trial Guarantee
                  </span>
                </div>
              </div>

              <div className="pt-2 w-full flex items-center justify-between text-xs text-[#b4c3bd] px-2">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" /> Wafaq Certified
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-[#d4af37]" /> 30-Min Sessions
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        
        {/* Daily Verse Widget */}
        <DailyVerseWidget />

        {/* WHY CHOOSE US */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[#d4af37] text-xs font-bold uppercase tracking-widest">
              Excellence in Islamic Education
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#f2f2e8]">
              Why Choose Taleem-ul-Quran Campus?
            </h2>
            <p className="text-xs text-[#b4c3bd]">
              We blend classical Quranic pedagogy with modern interactive online tools to ensure smooth, enjoyable, and effective learning for every family.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#061a14] gold-border p-6 rounded-sm space-y-3 hover:border-[#d4af37]/60 transition-all gold-glow-hover">
              <div className="w-10 h-10 border border-[#d4af37]/40 rounded-sm bg-[#04120f] flex items-center justify-center text-[#d4af37]">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#f2f2e8]">
                1-on-1 Live Online Sessions
              </h3>
              <p className="text-xs text-[#b4c3bd] leading-relaxed">
                Zero crowded group classrooms. Every student receives 100% focused, personalized correction from their assigned teacher.
              </p>
            </div>

            <div className="bg-[#061a14] gold-border p-6 rounded-sm space-y-3 hover:border-[#d4af37]/60 transition-all gold-glow-hover">
              <div className="w-10 h-10 border border-[#d4af37]/40 rounded-sm bg-[#04120f] flex items-center justify-center text-[#d4af37]">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#f2f2e8]">
                Certified Male & Female Scholars
              </h3>
              <p className="text-xs text-[#b4c3bd] leading-relaxed">
                Choose qualified male Qaris or certified female Alimas (ideal for sisters and young kids) who speak fluent English and Urdu.
              </p>
            </div>

            <div className="bg-[#061a14] gold-border p-6 rounded-sm space-y-3 hover:border-[#d4af37]/60 transition-all gold-glow-hover">
              <div className="w-10 h-10 border border-[#d4af37]/40 rounded-sm bg-[#04120f] flex items-center justify-center text-[#d4af37]">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#f2f2e8]">
                Flexible Timezone Scheduling
              </h3>
              <p className="text-xs text-[#b4c3bd] leading-relaxed">
                Whether you live in the USA, UK, Canada, Australia, or Middle East, schedule classes around school and work hours.
              </p>
            </div>

            <div className="bg-[#061a14] gold-border p-6 rounded-sm space-y-3 hover:border-[#d4af37]/60 transition-all gold-glow-hover">
              <div className="w-10 h-10 border border-[#d4af37]/40 rounded-sm bg-[#04120f] flex items-center justify-center text-[#d4af37]">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#f2f2e8]">
                Parent Progress Reports
              </h3>
              <p className="text-xs text-[#b4c3bd] leading-relaxed">
                Track your child’s weekly Quran reading pace, Tajweed score, attendance, and homework notes via the student portal.
              </p>
            </div>
          </div>
        </section>

        {/* POPULAR COURSES PREVIEW */}
        <section className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#d4af37]/20 pb-4">
            <div>
              <span className="text-[#d4af37] text-xs font-bold uppercase tracking-widest">
                Comprehensive Curriculums
              </span>
              <h2 className="font-serif text-3xl font-bold text-[#f2f2e8]">
                Featured Quranic Programs
              </h2>
            </div>
            <button
              onClick={() => setActiveTab('courses')}
              className="text-[#d4af37] hover:underline text-xs font-bold uppercase tracking-wider flex items-center gap-1"
            >
              <span>View All 7 Courses</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {COURSES.slice(0, 3).map((course) => (
              <div
                key={course.id}
                className="bg-[#061a14] gold-border rounded-sm p-6 space-y-4 flex flex-col justify-between hover:border-[#d4af37] transition-all gold-glow-hover"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 bg-[#d4af37]/15 border border-[#d4af37]/30 text-[#d4af37] text-[10px] font-bold uppercase tracking-wider rounded-sm">
                      {course.category}
                    </span>
                    <span className="text-xs text-[#b4c3bd] font-medium">{course.duration}</span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#f2f2e8]">
                    {course.title}
                  </h3>

                  <p className="font-arabic text-right text-lg text-[#d4af37]">
                    {course.arabicTitle}
                  </p>

                  <p className="text-xs text-[#b4c3bd] leading-relaxed line-clamp-3">
                    {course.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#d4af37]/15 space-y-3">
                  <div className="text-[11px] text-[#b4c3bd]">
                    <span className="text-[#d4af37] font-semibold">Key Goal:</span> {course.outcomes[0]}
                  </div>

                  <button
                    onClick={() => onOpenFreeTrial(course.id)}
                    className="w-full py-2.5 bg-[#d4af37] text-[#04120f] hover:bg-[#e2bd47] font-bold text-xs uppercase tracking-widest rounded-sm transition-colors"
                  >
                    Enroll in Trial
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PARENT & STUDENT TESTIMONIALS */}
        <section className="bg-[#061a14] gold-border p-8 rounded-sm space-y-8 gold-glow">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-[#d4af37] text-xs font-bold uppercase tracking-widest">
              Alhamdulillah
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#f2f2e8]">
              What Our Global Families Say
            </h2>
            <p className="text-xs text-[#b4c3bd]">
              Hear from parents in the UK, USA, Canada, and Australia learning with Taleem-ul-Quran Campus.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-[#04120f] border border-[#d4af37]/20 p-6 rounded-sm space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex text-[#d4af37]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <p className="text-xs italic text-[#f2f2e8] leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#d4af37]/15">
                  <div className="font-bold text-xs text-[#d4af37]">{t.parentName}</div>
                  <div className="text-[10px] text-[#b4c3bd]">{t.studentName} • {t.location}</div>
                  <div className="text-[10px] text-[#d4af37]/80 mt-1 font-semibold">{t.course}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* QUICK CONTACT BANNER */}
        <section className="bg-gradient-to-r from-[#061a14] via-[#08261e] to-[#061a14] gold-border p-8 sm:p-12 rounded-sm text-center space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#f2f2e8]">
            Have Questions Before Registering?
          </h2>
          <p className="text-xs sm:text-sm text-[#b4c3bd] max-w-2xl mx-auto leading-relaxed">
            Our admissions coordinators are available 24/7 on WhatsApp and email to answer fee questions, schedule options, or match you with a specific teacher.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setActiveTab('contact')}
              className="px-8 py-3.5 bg-[#d4af37] text-[#04120f] font-bold uppercase tracking-widest text-xs rounded-sm hover:bg-[#e2bd47] transition-all"
            >
              Go to Contact Us Page
            </button>
            <a
              href={`https://wa.me/${ACADEMY_INFO.contact.whatsappClean}`}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3.5 border border-emerald-500/50 text-emerald-400 font-bold uppercase tracking-widest text-xs rounded-sm hover:bg-emerald-500/10 transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp Now</span>
            </a>
          </div>
        </section>

      </div>
    </div>
  );
};
