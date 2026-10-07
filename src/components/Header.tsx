import React, { useState } from 'react';
import { BookOpen, Phone, Mail, Clock, Menu, X, Sparkles, User, Award, MessageCircle } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenFreeTrial: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, onOpenFreeTrial }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'courses', label: 'Our Programs' },
    { id: 'faculty', label: 'Faculty' },
    { id: 'pricing', label: 'Fee Plans' },
    { id: 'contact', label: 'Contact Us' },
    { id: 'portal', label: 'Student Portal' },
    { id: 'aitutor', label: 'AI Quran Guide' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#061a14]/95 backdrop-blur-md border-b border-[#d4af37]/25 shadow-xl transition-all">
      {/* Top Utility Bar */}
      <div className="bg-[#04120f] border-b border-[#d4af37]/15 py-1.5 px-4 sm:px-8 text-xs text-[#b4c3bd]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <a href={`tel:${ACADEMY_INFO.contact.phoneFormatted}`} className="flex items-center gap-1.5 hover:text-[#d4af37] transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>{ACADEMY_INFO.contact.phone}</span>
            </a>
            <a href={`https://wa.me/${ACADEMY_INFO.contact.whatsappClean}`} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-[#d4af37] transition-colors text-emerald-400">
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>WhatsApp: {ACADEMY_INFO.contact.whatsapp}</span>
            </a>
            <a href={`mailto:${ACADEMY_INFO.contact.email}`} className="hidden md:flex items-center gap-1.5 hover:text-[#d4af37] transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#d4af37]" />
              <span>{ACADEMY_INFO.contact.email}</span>
            </a>
          </div>

          <div className="flex items-center gap-4 text-[11px] uppercase tracking-wider">
            <span className="hidden lg:flex items-center gap-1 text-[#d4af37]/90">
              <Clock className="w-3 h-3" /> 24/7 Global Live One-on-One Classes
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#d4af37]">
              <Award className="w-3 h-3" /> Certified Alim & Alima Teachers
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 sm:py-4 flex items-center justify-between">
        {/* Brand Logo */}
        <button 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left group focus:outline-none"
        >
          <div className="w-10 h-10 sm:w-11 sm:h-11 border-2 border-[#d4af37] rounded-full flex items-center justify-center bg-[#04120f] gold-glow group-hover:scale-105 transition-transform">
            <span className="font-serif text-[#d4af37] font-bold text-xl sm:text-2xl">T</span>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="inline-block font-serif text-lg sm:text-xl font-bold tracking-wider text-[#f2f2e8] group-hover:text-[#d4af37] group-hover:scale-[1.05] group-hover:[text-shadow:0_0_12px_rgba(212,175,55,0.7)] transition-all duration-300 uppercase origin-left">
                Taleem-ul-Quran
              </span>
            </div>
            <p className="text-[10px] text-[#d4af37] uppercase tracking-widest font-semibold">
              Campus • Online Quran Academy
            </p>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative py-1 text-xs xl:text-sm font-semibold uppercase tracking-wider transition-colors ${
                  isActive ? 'text-[#d4af37]' : 'text-[#f2f2e8]/80 hover:text-[#d4af37]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#d4af37] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenFreeTrial}
            className="px-5 py-2.5 bg-[#d4af37] text-[#04120f] hover:bg-[#e2bd47] transition-all font-bold text-xs uppercase tracking-widest shadow-[0_0_20px_rgba(212,175,55,0.3)] flex items-center gap-2 rounded-sm cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Book Free Trial</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenFreeTrial}
            className="sm:hidden px-3 py-1.5 bg-[#d4af37] text-[#04120f] font-bold text-[10px] uppercase tracking-wider rounded-sm"
          >
            Trial
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 border border-[#d4af37]/30 text-[#d4af37] hover:bg-[#d4af37]/10 rounded-sm"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#04120f] border-b border-[#d4af37]/30 px-6 py-6 space-y-4 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left py-2 px-3 rounded-sm font-semibold uppercase text-xs tracking-widest transition-all ${
                    isActive
                      ? 'bg-[#d4af37]/20 text-[#d4af37] border-l-2 border-[#d4af37]'
                      : 'text-[#f2f2e8]/80 hover:bg-[#061a14] hover:text-[#d4af37]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-[#d4af37]/20 space-y-3">
            <button
              onClick={() => {
                onOpenFreeTrial();
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 bg-[#d4af37] text-[#04120f] font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 rounded-sm"
            >
              <Sparkles className="w-4 h-4" /> Book Free Trial Class
            </button>

            <div className="flex flex-col gap-2 text-xs text-[#b4c3bd] pt-2">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#d4af37]" /> {ACADEMY_INFO.contact.phone}
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#d4af37]" /> {ACADEMY_INFO.contact.email}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
