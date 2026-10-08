import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowUpRight, ShieldCheck, Award, Globe, Heart } from 'lucide-react';
import { ACADEMY_INFO, COURSES } from '../data/academyData';
import { useLanguage } from '../context/LanguageContext';
import { LANGUAGES } from '../i18n/translations';
import { Language } from '../types';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onOpenFreeTrial: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenFreeTrial }) => {
  const { t, language, setLanguage, config, isRTL } = useLanguage();

  const handleNav = (tab: string) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappMessage = encodeURIComponent("Assalamu Alaikum! I would like to book a free Quran demo class with Taleem Ul Quran Campus.");
  const whatsappUrl = `https://wa.me/${ACADEMY_INFO.contact.whatsappClean}?text=${whatsappMessage}`;

  return (
    <footer className="bg-[#030e0c] border-t border-[#d4af37]/30 text-[#b4c3bd] pt-16 pb-12 relative overflow-hidden">
      {/* Geometric background overlay */}
      <div className="absolute inset-0 islamic-pattern-bg pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 space-y-12">
        {/* Main 4-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: Academy Overview */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border-2 border-[#d4af37] rounded-full flex items-center justify-center bg-[#04120f]">
                <span className="font-serif text-[#d4af37] font-bold text-xl">TQ</span>
              </div>
              <div>
                <span className="font-serif text-lg font-bold text-[#f2f2e8] uppercase tracking-wider block">
                  Taleem Ul Quran
                </span>
                <span className="text-xs text-[#d4af37] font-arabic">
                  {ACADEMY_INFO.urduName}
                </span>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-[#b4c3bd]">
              {t.footer.aboutText}
            </p>

            <div className="pt-1 text-sm font-arabic text-[#d4af37] leading-loose">
              {ACADEMY_INFO.arabicTagline}
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenFreeTrial}
                className="px-4 py-2 bg-[#d4af37] text-[#04120f] font-bold text-xs uppercase tracking-wider rounded-sm hover:bg-[#e2bd47] transition-all cursor-pointer shadow-md"
              >
                {t.hero.bookDemoBtn}
              </button>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#d4af37] font-bold border-b border-[#d4af37]/20 pb-2">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-[#d4af37] transition-colors flex items-center gap-1.5">
                  <ArrowUpRight className="w-3 h-3 text-[#d4af37]" /> {t.nav.home}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-[#d4af37] transition-colors flex items-center gap-1.5">
                  <ArrowUpRight className="w-3 h-3 text-[#d4af37]" /> {t.nav.about}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('courses')} className="hover:text-[#d4af37] transition-colors flex items-center gap-1.5">
                  <ArrowUpRight className="w-3 h-3 text-[#d4af37]" /> {t.nav.courses}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('faculty')} className="hover:text-[#d4af37] transition-colors flex items-center gap-1.5">
                  <ArrowUpRight className="w-3 h-3 text-[#d4af37]" /> {t.nav.teachers}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('how-it-works')} className="hover:text-[#d4af37] transition-colors flex items-center gap-1.5">
                  <ArrowUpRight className="w-3 h-3 text-[#d4af37]" /> {t.nav.howItWorks}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('pricing')} className="hover:text-[#d4af37] transition-colors flex items-center gap-1.5">
                  <ArrowUpRight className="w-3 h-3 text-[#d4af37]" /> {t.nav.pricing}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('blog')} className="hover:text-[#d4af37] transition-colors flex items-center gap-1.5">
                  <ArrowUpRight className="w-3 h-3 text-[#d4af37]" /> {t.nav.blog}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('faq')} className="hover:text-[#d4af37] transition-colors flex items-center gap-1.5">
                  <ArrowUpRight className="w-3 h-3 text-[#d4af37]" /> {t.nav.faq}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('portal')} className="hover:text-[#d4af37] transition-colors flex items-center gap-1.5">
                  <ArrowUpRight className="w-3 h-3 text-[#d4af37]" /> {t.nav.portal}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Programs */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#d4af37] font-bold border-b border-[#d4af37]/20 pb-2">
              {t.footer.coursesHeading}
            </h4>
            <ul className="space-y-2 text-xs">
              {COURSES.slice(0, 6).map((course) => (
                <li key={course.id}>
                  <button
                    onClick={() => handleNav('courses')}
                    className="hover:text-[#d4af37] transition-colors flex items-center gap-1.5 text-left rtl:text-right"
                  >
                    <ArrowUpRight className="w-3 h-3 text-[#d4af37] shrink-0" />
                    <span>{course.title}</span>
                  </button>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <span className="text-[11px] text-[#d4af37] font-semibold block mb-1">
                {t.teachers.femaleTeacherNotice}
              </span>
            </div>
          </div>

          {/* Col 4: Campus & Support Desk */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#d4af37] font-bold border-b border-[#d4af37]/20 pb-2">
              {t.footer.contactHeading}
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>{ACADEMY_INFO.contact.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#d4af37] shrink-0" />
                <a href={`tel:${ACADEMY_INFO.contact.phoneFormatted}`} className="hover:text-[#d4af37]" dir="ltr">
                  {ACADEMY_INFO.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-300 text-emerald-400 font-medium"
                  dir="ltr"
                >
                  WhatsApp: {ACADEMY_INFO.contact.whatsapp}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#d4af37] shrink-0" />
                <a href={`mailto:${ACADEMY_INFO.contact.email}`} className="hover:text-[#d4af37] break-all">
                  {ACADEMY_INFO.contact.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5 pt-1 text-[11px] text-[#b4c3bd]/80">
                <Clock className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>{t.footer.hours}</span>
              </div>
            </div>

            {/* Language Selector In Footer */}
            <div className="pt-3 border-t border-[#d4af37]/15">
              <span className="text-[10px] uppercase tracking-wider text-[#d4af37] font-semibold block mb-1.5 flex items-center gap-1">
                <Globe className="w-3 h-3" /> Select Language / زبان:
              </span>
              <div className="flex flex-wrap gap-1">
                {(Object.keys(LANGUAGES) as Language[]).map((langKey) => {
                  const l = LANGUAGES[langKey];
                  return (
                    <button
                      key={langKey}
                      onClick={() => setLanguage(langKey)}
                      className={`px-2 py-1 text-[11px] rounded border transition-colors ${
                        language === langKey
                          ? 'bg-[#d4af37] text-[#04120f] font-bold border-[#d4af37]'
                          : 'bg-[#04120f] border-[#d4af37]/20 text-[#b4c3bd] hover:text-[#d4af37]'
                      }`}
                    >
                      {l.flag} {l.nativeName}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-6 border-t border-[#d4af37]/20 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#b4c3bd]/80">
          <div>
            © {new Date().getFullYear()} {ACADEMY_INFO.name}. {t.footer.copyright}
          </div>

          <div className="flex items-center gap-5 flex-wrap justify-center">
            <button onClick={() => handleNav('privacy')} className="hover:text-[#d4af37] transition-colors">
              {t.footer.privacy}
            </button>
            <span>·</span>
            <button onClick={() => handleNav('terms')} className="hover:text-[#d4af37] transition-colors">
              {t.footer.terms}
            </button>
            <span>·</span>
            <button onClick={() => handleNav('disclaimer')} className="hover:text-[#d4af37] transition-colors">
              {t.footer.disclaimer}
            </button>
            <span>·</span>
            <button onClick={() => handleNav('contact')} className="hover:text-[#d4af37] transition-colors">
              {t.nav.contact}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
