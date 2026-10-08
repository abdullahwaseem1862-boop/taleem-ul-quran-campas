import React, { useState, useRef, useEffect } from 'react';
import { Phone, Mail, Clock, Menu, X, Award, MessageCircle, Globe, ChevronDown, Check, Calendar, BookOpen } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';
import { useLanguage } from '../context/LanguageContext';
import { LANGUAGES } from '../i18n/translations';
import { Language } from '../types';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenFreeTrial: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, onOpenFreeTrial }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);
  const { language, setLanguage, t, isRTL, config } = useLanguage();

  const navLinks = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'courses', label: t.nav.courses },
    { id: 'faculty', label: t.nav.teachers },
    { id: 'how-it-works', label: t.nav.howItWorks },
    { id: 'pricing', label: t.nav.pricing },
    { id: 'blog', label: t.nav.blog },
    { id: 'faq', label: t.nav.faq },
    { id: 'contact', label: t.nav.contact },
    { id: 'portal', label: t.nav.portal },
  ];

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const selectLanguage = (code: Language) => {
    setLanguage(code);
    setLangDropdownOpen(false);
  };

  const whatsappMessage = encodeURIComponent("Assalamu Alaikum! I would like to book a free Quran demo class with Taleem Ul Quran Campus.");
  const whatsappUrl = `https://wa.me/${ACADEMY_INFO.contact.whatsappClean}?text=${whatsappMessage}`;

  return (
    <header className="sticky top-0 z-50 bg-[#061a14]/95 backdrop-blur-md border-b border-[#d4af37]/25 shadow-xl transition-all">
      {/* Top Utility Bar */}
      <div className="bg-[#04120f] border-b border-[#d4af37]/15 py-1.5 px-4 sm:px-8 text-xs text-[#b4c3bd]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          {/* Contact Details */}
          <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start">
            <a
              href={`tel:${ACADEMY_INFO.contact.phoneFormatted}`}
              className="flex items-center gap-1.5 hover:text-[#d4af37] transition-colors focus-visible:outline-none"
            >
              <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
              <span dir="ltr">{ACADEMY_INFO.contact.phone}</span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[#d4af37] transition-colors text-emerald-400 font-medium"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp: <span dir="ltr">{ACADEMY_INFO.contact.whatsapp}</span></span>
            </a>
            <a
              href={`mailto:${ACADEMY_INFO.contact.email}`}
              className="hidden lg:flex items-center gap-1.5 hover:text-[#d4af37] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>{ACADEMY_INFO.contact.email}</span>
            </a>
          </div>

          {/* Badges & Trust points */}
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-wider flex-wrap justify-center">
            <span className="hidden sm:flex items-center gap-1 text-[#d4af37]">
              <Clock className="w-3 h-3" /> 24/7 Global Live Classes
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-sm bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37] font-semibold">
              <Award className="w-3 h-3" /> Certified Male & Female Teachers
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between gap-4">
        {/* Brand Logo & Name */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left rtl:text-right group focus:outline-none focus-visible:ring-1 focus-visible:ring-[#d4af37] rounded"
          aria-label="Taleem Ul Quran Campus Home"
        >
          {/* Logo Emblem */}
          <div className="w-11 h-11 border-2 border-[#d4af37] rounded-full flex items-center justify-center bg-[#04120f] gold-glow group-hover:scale-105 transition-transform shrink-0">
            <span className="font-serif text-[#d4af37] font-bold text-2xl">TQ</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-block font-serif text-lg sm:text-xl font-bold tracking-wider text-[#f2f2e8] group-hover:text-[#d4af37] group-hover:scale-[1.03] transition-all duration-300 uppercase origin-left">
                Taleem Ul Quran Campus
              </span>
            </div>
            <p className="text-[10px] sm:text-[11px] text-[#d4af37] tracking-widest font-semibold flex items-center gap-1.5">
              <span>{ACADEMY_INFO.urduName}</span>
              <span className="text-[#b4c3bd]/50">·</span>
              <span className="uppercase text-[9px] text-[#b4c3bd]">Online Academy</span>
            </p>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-4 2xl:gap-6">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative py-1.5 px-1 text-xs font-semibold tracking-wider transition-colors whitespace-nowrap ${
                  isActive ? 'text-[#d4af37]' : 'text-[#f2f2e8]/85 hover:text-[#d4af37]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#d4af37] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Section: Language Switcher & Book Demo Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Switcher Dropdown */}
          <div className="relative" ref={langDropdownRef}>
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 bg-[#04120f] border border-[#d4af37]/40 hover:border-[#d4af37] rounded-sm text-xs text-[#f2f2e8] transition-all focus:outline-none focus-visible:ring-1 focus-visible:ring-[#d4af37]"
              aria-label="Select Language"
              aria-expanded={langDropdownOpen}
            >
              <Globe className="w-3.5 h-3.5 text-[#d4af37]" />
              <span className="font-semibold text-xs">{config.flag} {config.nativeName}</span>
              <ChevronDown className={`w-3 h-3 text-[#d4af37] transition-transform ${langDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {langDropdownOpen && (
              <div
                className={`absolute top-full mt-1.5 ${isRTL ? 'left-0' : 'right-0'} w-44 bg-[#04120f] border border-[#d4af37]/40 rounded-sm shadow-2xl py-1 z-50 animate-fadeIn`}
              >
                <div className="px-3 py-1.5 border-b border-[#d4af37]/20 text-[10px] text-[#b4c3bd] uppercase tracking-wider font-semibold">
                  Select Language / زبان
                </div>
                {(Object.keys(LANGUAGES) as Language[]).map((langKey) => {
                  const item = LANGUAGES[langKey];
                  const isSelected = language === langKey;
                  return (
                    <button
                      key={langKey}
                      onClick={() => selectLanguage(langKey)}
                      className={`w-full px-3 py-2 text-left rtl:text-right text-xs flex items-center justify-between transition-colors ${
                        isSelected
                          ? 'bg-[#d4af37]/20 text-[#d4af37] font-bold'
                          : 'text-[#f2f2e8] hover:bg-[#061a14] hover:text-[#d4af37]'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span>{item.flag}</span>
                        <span>{item.nativeName}</span>
                        <span className="text-[10px] text-[#b4c3bd] font-normal">({item.name})</span>
                      </span>
                      {isSelected && <Check className="w-3.5 h-3.5 text-[#d4af37]" />}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Primary CTA: Book Free Demo */}
          <button
            onClick={onOpenFreeTrial}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-[#d4af37] text-[#04120f] hover:bg-[#e2bd47] transition-all font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(212,175,55,0.25)] rounded-sm cursor-pointer active:scale-95 shrink-0"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>{t.nav.bookDemo}</span>
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 border border-[#d4af37]/30 text-[#d4af37] hover:bg-[#d4af37]/10 rounded-sm min-w-[40px] min-h-[40px] flex items-center justify-center"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#04120f] border-b border-[#d4af37]/30 px-5 py-5 space-y-4 shadow-2xl max-h-[85vh] overflow-y-auto">
          {/* Navigation Links */}
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left rtl:text-right py-2.5 px-3 rounded-sm font-semibold text-xs tracking-wider transition-all min-h-[44px] flex items-center ${
                    isActive
                      ? 'bg-[#d4af37]/20 text-[#d4af37] border-l-2 rtl:border-l-0 rtl:border-r-2 border-[#d4af37]'
                      : 'text-[#f2f2e8]/90 hover:bg-[#061a14] hover:text-[#d4af37]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Mobile Actions */}
          <div className="pt-3 border-t border-[#d4af37]/20 space-y-3">
            <button
              onClick={() => {
                onOpenFreeTrial();
                setMobileMenuOpen(false);
              }}
              className="w-full min-h-[44px] py-3 bg-[#d4af37] text-[#04120f] font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 rounded-sm active:scale-95 transition-transform"
            >
              <Calendar className="w-4 h-4" />
              <span>{t.nav.bookDemo}</span>
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[44px] py-2.5 bg-emerald-700/80 hover:bg-emerald-600 text-white font-semibold text-xs flex items-center justify-center gap-2 rounded-sm border border-emerald-500/40"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{t.hero.whatsappBtn}</span>
            </a>

            {/* Language Quick Selector in Mobile Drawer */}
            <div className="pt-2">
              <span className="text-[11px] text-[#d4af37] font-semibold block mb-2 uppercase tracking-wider">
                Language / زبان:
              </span>
              <div className="grid grid-cols-2 gap-1.5">
                {(Object.keys(LANGUAGES) as Language[]).map((key) => {
                  const l = LANGUAGES[key];
                  return (
                    <button
                      key={key}
                      onClick={() => selectLanguage(key)}
                      className={`px-2 py-2 text-xs rounded border text-center transition-all ${
                        language === key
                          ? 'bg-[#d4af37] text-[#04120f] font-bold border-[#d4af37]'
                          : 'bg-[#061a14] text-[#b4c3bd] border-[#d4af37]/20 hover:text-[#d4af37]'
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
      )}
    </header>
  );
};
