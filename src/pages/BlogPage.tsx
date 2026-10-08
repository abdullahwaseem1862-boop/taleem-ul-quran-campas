import React, { useState } from 'react';
import { BookOpen, Sparkles, Clock, Calendar, User, ArrowRight, Tag, Bookmark, CheckCircle2 } from 'lucide-react';
import { BLOG_ARTICLES } from '../data/academyData';
import { BlogArticle } from '../types';
import { useLanguage } from '../context/LanguageContext';

export const BlogPage: React.FC = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeArticle, setActiveArticle] = useState<BlogArticle | null>(null);

  const categories = [
    'All',
    'Quran',
    'Tajweed',
    'Islamic Studies',
    'Duas',
    'Salah',
    'Parenting',
    'Quran Learning Tips'
  ];

  const filteredArticles = selectedCategory === 'All'
    ? BLOG_ARTICLES
    : BLOG_ARTICLES.filter(a => a.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#061a14] gold-border text-[#d4af37] text-xs font-bold uppercase tracking-widest rounded-sm">
          <BookOpen className="w-3.5 h-3.5" /> Authentic Islamic Knowledge & Guidance
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#f2f2e8]">
          Quranic Insights & Learning Articles
        </h1>
        <p className="text-xs sm:text-sm text-[#b4c3bd] leading-relaxed">
          Beneficial guides on Tajweed rules, effective Quran memorization strategies, Islamic parenting in the modern age, and authentic Sunnah supplications.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap items-center justify-center gap-2 border-b border-[#d4af37]/20 pb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider rounded transition-all ${
              selectedCategory === cat
                ? 'bg-[#d4af37] text-[#04120f] font-bold shadow-md'
                : 'bg-[#061a14] border border-[#d4af37]/25 text-[#b4c3bd] hover:border-[#d4af37] hover:text-[#d4af37]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredArticles.map((article) => (
          <article
            key={article.id}
            className="bg-[#061a14] gold-border rounded-xl p-6 sm:p-8 space-y-4 flex flex-col justify-between hover:border-[#d4af37] transition-all gold-glow-hover"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-[#b4c3bd]">
                <span className="px-2.5 py-0.5 bg-[#04120f] border border-[#d4af37]/30 text-[#d4af37] text-[10px] font-bold uppercase rounded">
                  {article.category}
                </span>
                <span className="flex items-center gap-1 font-medium text-[11px]">
                  <Clock className="w-3.5 h-3.5 text-[#d4af37]" /> {article.readTime}
                </span>
              </div>

              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#f2f2e8] hover:text-[#d4af37] transition-colors cursor-pointer" onClick={() => setActiveArticle(article)}>
                {article.title}
              </h2>

              <p className="text-xs text-[#b4c3bd] leading-relaxed">
                {article.summary}
              </p>

              {/* Verified Sources / References preview */}
              <div className="pt-2 border-t border-[#d4af37]/15">
                <span className="text-[10px] uppercase tracking-wider text-[#d4af37] font-semibold block mb-1">
                  Authentic Source Reference:
                </span>
                <p className="text-[11px] text-[#f2f2e8] italic line-clamp-1">
                  {article.authenticReferences[0]}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#d4af37]/20 flex items-center justify-between text-xs">
              <span className="text-[#b4c3bd]">
                By <strong className="text-[#f2f2e8]">{article.author}</strong>
              </span>

              <button
                onClick={() => setActiveArticle(article)}
                className="text-[#d4af37] hover:underline font-bold text-xs uppercase tracking-wider flex items-center gap-1"
              >
                <span>Read Article</span>
                <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Full Article Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-3xl bg-[#061a14] gold-border gold-glow p-6 sm:p-10 rounded-xl text-[#f2f2e8] max-h-[90vh] overflow-y-auto space-y-6">
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-4 right-4 p-2 text-[#b4c3bd] hover:text-[#d4af37]"
              aria-label="Close article"
            >
              ✕
            </button>

            <div className="space-y-3 border-b border-[#d4af37]/20 pb-4">
              <span className="px-3 py-1 bg-[#04120f] border border-[#d4af37]/30 text-[#d4af37] font-bold text-xs uppercase tracking-widest rounded">
                {activeArticle.category}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#f2f2e8] leading-tight">
                {activeArticle.title}
              </h2>
              <div className="flex items-center gap-4 text-xs text-[#b4c3bd]">
                <span>Author: <strong className="text-[#f2f2e8]">{activeArticle.author}</strong></span>
                <span>·</span>
                <span>{activeArticle.readTime}</span>
              </div>
            </div>

            {/* Content Paragraphs */}
            <div className="space-y-4 text-xs sm:text-sm text-[#b4c3bd] leading-relaxed">
              {activeArticle.content.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Authentic References Box */}
            <div className="p-4 bg-[#04120f] gold-border rounded-lg space-y-2">
              <h4 className="text-xs uppercase tracking-wider text-[#d4af37] font-bold flex items-center gap-1.5">
                <Bookmark className="w-3.5 h-3.5" /> Authentic Scriptural References:
              </h4>
              <ul className="space-y-1.5 text-xs text-[#f2f2e8]">
                {activeArticle.authenticReferences.map((ref, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="italic">{ref}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2 text-right">
              <button
                onClick={() => setActiveArticle(null)}
                className="px-6 py-2.5 bg-[#d4af37] text-[#04120f] font-bold text-xs uppercase tracking-wider rounded hover:bg-[#e2bd47]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
