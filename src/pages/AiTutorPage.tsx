import React, { useState } from 'react';
import { Sparkles, Send, BookOpen, Bot, User, MessageCircle, HelpCircle } from 'lucide-react';

export const AiTutorPage: React.FC = () => {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'ai'; text: string }>>([
    {
      sender: 'ai',
      text: 'Assalamu Alaikum! I am the Taleem-ul-Quran AI Learning Assistant. You can ask me questions about Tajweed rules, Quranic verse meanings, Noorani Qaida tips, or daily Islamic etiquette.'
    }
  ]);
  const [loading, setLoading] = useState(false);

  const sampleQuestions = [
    'What are the 4 rules of Noon Sakinah and Tanween?',
    'What is the difference between Izhar and Ikhfa?',
    'How many letters of Qalqalah are there?',
    'Why is Noorani Qaida important before reading the Quran?'
  ];

  const handleSend = (textToSend?: string) => {
    const q = textToSend || query;
    if (!q.trim()) return;

    const newMessages = [...messages, { sender: 'user' as const, text: q }];
    setMessages(newMessages);
    if (!textToSend) setQuery('');
    setLoading(true);

    // Provide intelligent contextual answer
    setTimeout(() => {
      let aiResponse = '';
      const lower = q.toLowerCase();

      if (lower.includes('noon') || lower.includes('tanween') || lower.includes('rule')) {
        aiResponse = 'The 4 primary rules of Noon Sakinah (نْ) and Tanween (ــًــٍــٌ) in Tajweed are:\n1. Izhar (Clear pronunciation without nasalization)\n2. Idgham (Merging into following letter)\n3. Iqlab (Converting Noon into Meem)\n4. Ikhfa (Concealing sound with Ghunnah nasalization).';
      } else if (lower.includes('qalqalah')) {
        aiResponse = 'There are 5 letters of Qalqalah (Echoing / Bouncing sound when Sukoon occurs):\nק, ط, ب, ج, د (Combined in the phrase قُطْبُ جَدٍّ).\nLevels: Qalqalah Kubra (Strong bounce at end of verse) and Qalqalah Sughra (Gentle bounce in middle of word).';
      } else if (lower.includes('qaida')) {
        aiResponse = 'Noorani Qaida is the fundamental foundation for all non-Arabic speakers. It teaches letter recognition, correct points of articulation (Makharij), short/long vowels, and compound words, enabling students to read the Quran accurately without errors.';
      } else {
        aiResponse = `JazakAllah Khair for asking! In Tajweed and Quranic learning, consistency (Istiqamah) and practicing 15–20 minutes daily with a qualified teacher brings maximum clarity. Would you like to schedule a free 1-on-1 trial session with a Taleem-ul-Quran Qari?`;
      }

      setMessages([...newMessages, { sender: 'ai', text: aiResponse }]);
      setLoading(false);
    }, 800);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-12 space-y-8">
      
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#061a14] gold-border text-[#d4af37] text-xs font-bold uppercase tracking-widest rounded-sm">
          <Sparkles className="w-3.5 h-3.5" /> AI Quran & Tajweed Guide
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#f2f2e8]">
          Interactive Tajweed Assistant
        </h1>
        <p className="text-xs text-[#b4c3bd]">
          Ask any questions about Tajweed rules, Arabic letter pronunciation, or course recommendations.
        </p>
      </div>

      {/* Suggested Chips */}
      <div className="flex flex-wrap items-center justify-center gap-2 text-xs">
        {sampleQuestions.map((sq, i) => (
          <button
            key={i}
            onClick={() => handleSend(sq)}
            className="px-3 py-1.5 bg-[#061a14] border border-[#d4af37]/25 hover:border-[#d4af37] text-[#b4c3bd] hover:text-[#d4af37] rounded-sm transition-all"
          >
            {sq}
          </button>
        ))}
      </div>

      {/* Chat Container */}
      <div className="bg-[#061a14] gold-border p-6 rounded-sm space-y-4 gold-glow min-h-[380px] flex flex-col justify-between">
        
        {/* Messages */}
        <div className="space-y-4 max-h-[420px] overflow-y-auto pr-2 text-xs">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex gap-3 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {m.sender === 'ai' && (
                <div className="w-8 h-8 rounded-full border border-[#d4af37] bg-[#04120f] flex items-center justify-center text-[#d4af37] shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`p-4 rounded-sm max-w-lg whitespace-pre-line leading-relaxed ${
                  m.sender === 'user'
                    ? 'bg-[#d4af37] text-[#04120f] font-semibold'
                    : 'bg-[#04120f] border border-[#d4af37]/30 text-[#f2f2e8]'
                }`}
              >
                {m.text}
              </div>

              {m.sender === 'user' && (
                <div className="w-8 h-8 rounded-full border border-[#d4af37]/40 bg-[#061a14] flex items-center justify-center text-[#d4af37] shrink-0">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="flex gap-3 justify-start">
              <div className="w-8 h-8 rounded-full border border-[#d4af37] bg-[#04120f] flex items-center justify-center text-[#d4af37]">
                <Bot className="w-4 h-4 animate-spin" />
              </div>
              <div className="p-3 bg-[#04120f] border border-[#d4af37]/30 text-[#b4c3bd] rounded-sm text-xs italic">
                Thinking and fetching Tajweed reference...
              </div>
            </div>
          )}
        </div>

        {/* Input Bar */}
        <div className="pt-4 border-t border-[#d4af37]/20 flex items-center gap-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about Tajweed rules, Quran reading, or course advice..."
            className="flex-1 bg-[#04120f] border border-[#d4af37]/30 focus:border-[#d4af37] text-[#f2f2e8] px-4 py-2.5 text-xs rounded-sm outline-none transition-all"
          />
          <button
            onClick={() => handleSend()}
            disabled={loading || !query.trim()}
            className="px-5 py-2.5 bg-[#d4af37] text-[#04120f] font-bold text-xs uppercase tracking-widest rounded-sm hover:bg-[#e2bd47] transition-all disabled:opacity-50"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>

      </div>

    </div>
  );
};
