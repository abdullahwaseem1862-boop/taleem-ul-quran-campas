import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageCircle, Phone, Mail, Sparkles } from 'lucide-react';
import { FAQS, ACADEMY_INFO } from '../data/academyData';
import { useLanguage } from '../context/LanguageContext';

interface FaqPageProps {
  onOpenFreeTrial: () => void;
  setActiveTab: (tab: string) => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onOpenFreeTrial, setActiveTab }) => {
  const { t } = useLanguage();
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'faq-1': true,
    'faq-2': true,
  });
  const [categoryFilter, setCategoryFilter] = useState<string>('All');

  const toggleFaq = (id: string) => {
    setOpenIds(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const categories = ['All', 'General', 'Classes', 'Teachers', 'Fees & Tech'];

  const filteredFaqs = categoryFilter === 'All'
    ? FAQS
    : FAQS.filter(f => f.category === categoryFilter);

  const whatsappMessage = encodeURIComponent("Assalamu Alaikum! I have a question regarding Taleem Ul Quran Campus courses.");
  const whatsappUrl = `https://wa.me/${ACADEMY_INFO.contact.whatsappClean}?text=${whatsappMessage}`;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-12 space-y-12">
      
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#061a14] gold-border text-[#d4af37] text-xs font-bold uppercase tracking-widest rounded-sm">
          <HelpCircle className="w-3.5 h-3.5" /> Clear & Honest Answers
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#f2f2e8]">
          Frequently Asked Questions
        </h1>
        <p className="text-xs sm:text-sm text-[#b4c3bd] leading-relaxed max-w-2xl mx-auto">
          Everything you need to know about our teaching methodology, female tutors, demo classes, software requirements, and scheduling.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 border-b border-[#d4af37]/20 pb-4">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCategoryFilter(c)}
            className={`px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded transition-all ${
              categoryFilter === c
                ? 'bg-[#d4af37] text-[#04120f] font-bold shadow-md'
                : 'bg-[#061a14] border border-[#d4af37]/25 text-[#b4c3bd] hover:border-[#d4af37]'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Accordion list */}
      <div className="space-y-3">
        {filteredFaqs.map((faq) => {
          const isOpen = !!openIds[faq.id];
          return (
            <div
              key={faq.id}
              className="bg-[#061a14] gold-border rounded-lg overflow-hidden transition-all shadow-md"
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full px-6 py-4 text-left rtl:text-right flex items-center justify-between gap-4 font-serif text-base font-bold text-[#f2f2e8] hover:text-[#d4af37] transition-colors focus:outline-none"
                aria-expanded={isOpen}
              >
                <span className="flex items-center gap-2.5">
                  <span className="text-[#d4af37] text-xs font-sans">Q.</span>
                  <span>{faq.question}</span>
                </span>
                <ChevronDown className={`w-4 h-4 text-[#d4af37] shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
              </button>

              {isOpen && (
                <div className="px-6 pb-5 pt-2 text-xs sm:text-sm text-[#b4c3bd] leading-relaxed border-t border-[#d4af37]/15 animate-fadeIn">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Still Have Questions Box */}
      <div className="p-8 bg-[#04120f] gold-border rounded-xl text-center space-y-4">
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#f2f2e8]">
          Have a Specific Question We Haven't Covered?
        </h3>
        <p className="text-xs text-[#b4c3bd] max-w-lg mx-auto">
          Our admissions desk is available 24/7 on WhatsApp and email to assist you with customized schedules or questions.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded flex items-center gap-2 transition-all shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat with Academic Coordinator</span>
          </a>

          <button
            onClick={() => setActiveTab('contact')}
            className="px-6 py-3 border border-[#d4af37]/40 text-[#f2f2e8] hover:text-[#d4af37] font-bold text-xs uppercase tracking-wider rounded hover:bg-[#061a14] transition-all"
          >
            Go to Contact Form
          </button>
        </div>
      </div>

    </div>
  );
};
