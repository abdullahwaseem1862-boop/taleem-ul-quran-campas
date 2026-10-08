import React from 'react';
import { BookOpen, Home, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface NotFoundPageProps {
  onReturnHome: () => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onReturnHome }) => {
  const { t } = useLanguage();

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-16 text-center">
      <div className="max-w-md w-full bg-[#061a14] gold-border p-8 sm:p-12 rounded-xl space-y-6 gold-glow">
        <div className="w-16 h-16 border-2 border-[#d4af37] rounded-full mx-auto flex items-center justify-center text-[#d4af37] font-serif font-bold text-2xl bg-[#04120f]">
          404
        </div>

        <div className="space-y-2">
          <h1 className="font-serif text-3xl font-bold text-[#f2f2e8]">
            Page Not Found
          </h1>
          <p className="font-arabic text-lg text-[#d4af37]">
            الصفحة غير موجودة
          </p>
          <p className="text-xs text-[#b4c3bd] leading-relaxed">
            The page you are looking for does not exist or may have been relocated. Please return to the academy homepage.
          </p>
        </div>

        <div>
          <button
            onClick={onReturnHome}
            className="w-full py-3 bg-[#d4af37] text-[#04120f] font-bold text-xs uppercase tracking-widest rounded hover:bg-[#e2bd47] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg active:scale-95"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </button>
        </div>
      </div>
    </div>
  );
};
