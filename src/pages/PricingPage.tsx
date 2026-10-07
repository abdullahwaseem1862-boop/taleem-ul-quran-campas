import React, { useState } from 'react';
import { PRICING_PLANS, FAQS } from '../data/academyData';
import { Check, Sparkles, HelpCircle, ShieldCheck, ChevronDown, ChevronUp } from 'lucide-react';

interface PricingPageProps {
  onOpenFreeTrial: () => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onOpenFreeTrial }) => {
  const [currency, setCurrency] = useState<'USD' | 'GBP' | 'EUR' | 'PKR' | 'CAD'>('USD');
  const [siblingDiscount, setSiblingDiscount] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const rates: Record<string, { symbol: string; rate: number }> = {
    USD: { symbol: '$', rate: 1 },
    GBP: { symbol: '£', rate: 0.78 },
    EUR: { symbol: '€', rate: 0.92 },
    CAD: { symbol: 'C$', rate: 1.35 },
    PKR: { symbol: '₨', rate: 278 },
  };

  const getPrice = (usd: number) => {
    let finalUSD = siblingDiscount ? usd * 0.85 : usd;
    const converted = finalUSD * rates[currency].rate;
    if (currency === 'PKR') {
      return Math.round(converted / 100) * 100;
    }
    return Math.round(converted);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#061a14] gold-border text-[#d4af37] text-xs font-bold uppercase tracking-widest rounded-sm">
          <Sparkles className="w-3.5 h-3.5" /> Transparent & Affordable Plans
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#f2f2e8]">
          Monthly Quran Fee Plans
        </h1>
        <p className="text-xs sm:text-sm text-[#b4c3bd] leading-relaxed">
          No admission fees or long-term contracts. Start with a 100% free 2-day trial, then choose the weekly schedule that fits your family's routine best.
        </p>
      </div>

      {/* Currency Switcher & Sibling Discount Toggle */}
      <div className="bg-[#061a14] gold-border p-4 sm:p-6 rounded-sm max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Currency Picker */}
        <div className="flex items-center gap-2">
          <span className="text-xs uppercase font-bold text-[#d4af37]">Currency:</span>
          <div className="flex items-center gap-1 bg-[#04120f] p-1 border border-[#d4af37]/30 rounded-sm">
            {(['USD', 'GBP', 'EUR', 'CAD', 'PKR'] as const).map((curr) => (
              <button
                key={curr}
                onClick={() => setCurrency(curr)}
                className={`px-2.5 py-1 text-xs font-bold rounded-sm transition-all ${
                  currency === curr
                    ? 'bg-[#d4af37] text-[#04120f]'
                    : 'text-[#b4c3bd] hover:text-[#d4af37]'
                }`}
              >
                {curr}
              </button>
            ))}
          </div>
        </div>

        {/* Sibling Toggle */}
        <label className="flex items-center gap-3 cursor-pointer text-xs">
          <input
            type="checkbox"
            checked={siblingDiscount}
            onChange={(e) => setSiblingDiscount(e.target.checked)}
            className="w-4 h-4 accent-[#d4af37] rounded-sm"
          />
          <span className="text-[#f2f2e8] font-semibold">
            Apply 15% Sibling Discount
          </span>
        </label>

      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PRICING_PLANS.map((plan) => {
          const finalPrice = getPrice(plan.monthlyFeeUSD);

          return (
            <div
              key={plan.id}
              className={`bg-[#061a14] gold-border rounded-sm p-6 sm:p-8 space-y-6 flex flex-col justify-between relative transition-all gold-glow-hover ${
                plan.popular ? 'border-[#d4af37] gold-glow scale-102' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-0.5 bg-[#d4af37] text-[#04120f] font-bold text-[10px] uppercase tracking-widest rounded-sm shadow-md">
                  Most Popular Choice
                </div>
              )}

              <div className="space-y-4">
                <div className="text-center pb-4 border-b border-[#d4af37]/20 space-y-1">
                  <h3 className="font-serif text-2xl font-bold text-[#f2f2e8]">
                    {plan.daysPerWeek} Days / Week
                  </h3>
                  <p className="text-xs text-[#d4af37] font-semibold">
                    {plan.classesPerMonth} Live 1-on-1 Classes / Month
                  </p>
                  <p className="text-[11px] text-[#b4c3bd]">
                    {plan.sessionDuration}
                  </p>
                </div>

                <div className="text-center py-2">
                  <div className="font-serif text-4xl sm:text-5xl font-bold text-[#d4af37]">
                    {rates[currency].symbol}{finalPrice}
                    <span className="text-xs font-sans text-[#b4c3bd] font-normal"> / month</span>
                  </div>
                  {siblingDiscount && (
                    <span className="text-[10px] text-emerald-400 font-semibold block mt-1">
                      (15% Sibling Discount Applied)
                    </span>
                  )}
                </div>

                <ul className="space-y-2.5 text-xs text-[#b4c3bd] pt-2">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-[#d4af37]/15">
                <button
                  onClick={onOpenFreeTrial}
                  className={`w-full py-3 font-bold text-xs uppercase tracking-widest rounded-sm transition-all cursor-pointer ${
                    plan.popular
                      ? 'bg-[#d4af37] text-[#04120f] hover:bg-[#e2bd47] shadow-[0_0_20px_rgba(212,175,55,0.3)]'
                      : 'border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#04120f]'
                  }`}
                >
                  Start 2-Day Free Trial
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Guarantee Badge */}
      <div className="bg-[#04120f] gold-border p-6 rounded-sm text-center max-w-2xl mx-auto space-y-2">
        <ShieldCheck className="w-8 h-8 text-[#d4af37] mx-auto" />
        <h3 className="font-serif text-xl font-bold text-[#f2f2e8]">
          100% Commitment-Free Trial Policy
        </h3>
        <p className="text-xs text-[#b4c3bd]">
          You will never be asked for payment credentials before your 2-day trial is completed and you are thoroughly satisfied with your assigned teacher.
        </p>
      </div>

      {/* FAQs Section */}
      <section className="space-y-6 max-w-3xl mx-auto">
        <div className="text-center space-y-2">
          <span className="text-[#d4af37] text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-1">
            <HelpCircle className="w-3.5 h-3.5" /> Frequently Asked Questions
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#f2f2e8]">
            Got Questions? We Have Answers.
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div key={idx} className="bg-[#061a14] gold-border rounded-sm overflow-hidden">
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full text-left p-4 sm:p-5 font-serif font-bold text-sm sm:text-base text-[#f2f2e8] flex items-center justify-between gap-4 hover:text-[#d4af37] transition-colors"
                >
                  <span>{faq.q}</span>
                  {isOpen ? <ChevronUp className="w-4 h-4 text-[#d4af37]" /> : <ChevronDown className="w-4 h-4 text-[#b4c3bd]" />}
                </button>
                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 text-xs text-[#b4c3bd] leading-relaxed border-t border-[#d4af37]/15 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};
