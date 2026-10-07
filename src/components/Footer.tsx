import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowUpRight, ShieldCheck, Heart, Award } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onOpenFreeTrial: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenFreeTrial }) => {
  return (
    <footer className="bg-[#030e0c] border-t border-[#d4af37]/30 text-[#b4c3bd] pt-16 pb-12 relative overflow-hidden">
      {/* Geometric background overlay */}
      <div className="absolute inset-0 islamic-pattern-bg pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Col 1: Academy Overview */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border-2 border-[#d4af37] rounded-full flex items-center justify-center bg-[#04120f]">
                <span className="font-serif text-[#d4af37] font-bold text-xl">T</span>
              </div>
              <span className="font-serif text-lg font-bold text-[#f2f2e8] uppercase tracking-wider">
                Taleem-ul-Quran
              </span>
            </div>
            <p className="text-xs leading-relaxed text-[#b4c3bd]">
              {ACADEMY_INFO.tagline}. Dedicated to delivering authentic, 1-on-1 online Quran recitation, Tajweed, Hifz, and Islamic studies to kids and adults around the globe.
            </p>
            <div className="pt-2 text-xs font-arabic text-[#d4af37] text-lg">
              {ACADEMY_INFO.arabicTagline}
            </div>
            <div className="flex items-center gap-3 pt-3">
              <button 
                onClick={onOpenFreeTrial}
                className="px-4 py-2 bg-[#d4af37] text-[#04120f] font-bold text-xs uppercase tracking-widest rounded-sm hover:bg-[#e2bd47] transition-all"
              >
                Book Free Trial
              </button>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#d4af37] font-bold border-b border-[#d4af37]/20 pb-2">
              Programs & Pages
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => setActiveTab('courses')} className="hover:text-[#d4af37] transition-colors flex items-center gap-1.5">
                  <ArrowUpRight className="w-3 h-3 text-[#d4af37]" /> Noorani Qaida Course
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('courses')} className="hover:text-[#d4af37] transition-colors flex items-center gap-1.5">
                  <ArrowUpRight className="w-3 h-3 text-[#d4af37]" /> Tajweed Masterclass
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('courses')} className="hover:text-[#d4af37] transition-colors flex items-center gap-1.5">
                  <ArrowUpRight className="w-3 h-3 text-[#d4af37]" /> Hifz-ul-Quran Program
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('courses')} className="hover:text-[#d4af37] transition-colors flex items-center gap-1.5">
                  <ArrowUpRight className="w-3 h-3 text-[#d4af37]" /> Quran Translation & Tafseer
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('faculty')} className="hover:text-[#d4af37] transition-colors flex items-center gap-1.5">
                  <ArrowUpRight className="w-3 h-3 text-[#d4af37]" /> Certified Alim & Alima Faculty
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('pricing')} className="hover:text-[#d4af37] transition-colors flex items-center gap-1.5">
                  <ArrowUpRight className="w-3 h-3 text-[#d4af37]" /> Monthly Fee Plans
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('contact')} className="hover:text-[#d4af37] transition-colors flex items-center gap-1.5">
                  <ArrowUpRight className="w-3 h-3 text-[#d4af37]" /> Contact & Campus Location
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Details */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#d4af37] font-bold border-b border-[#d4af37]/20 pb-2">
              Campus & Support Desk
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>{ACADEMY_INFO.contact.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#d4af37] shrink-0" />
                <a href={`tel:${ACADEMY_INFO.contact.phoneFormatted}`} className="hover:text-[#d4af37]">
                  {ACADEMY_INFO.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a 
                  href={`https://wa.me/${ACADEMY_INFO.contact.whatsappClean}`} 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-emerald-400 text-emerald-300 font-medium"
                >
                  WhatsApp: {ACADEMY_INFO.contact.whatsapp}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#d4af37] shrink-0" />
                <a href={`mailto:${ACADEMY_INFO.contact.email}`} className="hover:text-[#d4af37]">
                  {ACADEMY_INFO.contact.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5 pt-1 text-[11px] text-[#b4c3bd]/80">
                <Clock className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>Office: {ACADEMY_INFO.contact.officeHours}</span>
              </div>
            </div>
          </div>

          {/* Col 4: Trust Badges & Global Desks */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#d4af37] font-bold border-b border-[#d4af37]/20 pb-2">
              Global Standards
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="p-3 bg-[#061a14] gold-border rounded-sm flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-[#d4af37] shrink-0" />
                <div>
                  <div className="text-[#f2f2e8] font-bold text-xs">100% Verified Scholars</div>
                  <div className="text-[10px] text-[#b4c3bd]">Wafaq & Al-Azhar Certified</div>
                </div>
              </div>
              <div className="p-3 bg-[#061a14] gold-border rounded-sm flex items-center gap-3">
                <Award className="w-6 h-6 text-[#d4af37] shrink-0" />
                <div>
                  <div className="text-[#f2f2e8] font-bold text-xs">Female Teachers Available</div>
                  <div className="text-[10px] text-[#b4c3bd]">Dedicated for Sisters & Children</div>
                </div>
              </div>
              <p className="text-[11px] italic text-[#b4c3bd]/70 pt-1">
                "{ACADEMY_INFO.hadithTranslation}"
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#d4af37]/20 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#b4c3bd]/70">
          <div>
            © {new Date().getFullYear()} Taleem-ul-Quran Campus. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <button onClick={() => setActiveTab('contact')} className="hover:text-[#d4af37] transition-colors">
              Contact & Support
            </button>
            <button onClick={() => setActiveTab('courses')} className="hover:text-[#d4af37] transition-colors">
              All Courses
            </button>
            <button onClick={() => setActiveTab('portal')} className="hover:text-[#d4af37] transition-colors">
              Student Portal Demo
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
