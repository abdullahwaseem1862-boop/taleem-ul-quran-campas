import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, Calendar, User, Mail, Phone, BookOpen, Clock, ShieldCheck } from 'lucide-react';
import { COURSES } from '../data/academyData';

interface FreeTrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedCourse?: string;
}

export const FreeTrialModal: React.FC<FreeTrialModalProps> = ({ isOpen, onClose, preselectedCourse }) => {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    email: '',
    phone: '',
    courseId: preselectedCourse || COURSES[0].id,
    preferredGender: 'Any',
    preferredTime: 'Evening',
    notes: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setRefId(`TQC-TRIAL-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 1000);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-[#061a14] gold-border gold-glow p-6 sm:p-8 rounded-sm text-[#f2f2e8] max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#b4c3bd] hover:text-[#d4af37] hover:bg-[#04120f] rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 text-[#d4af37] text-xs uppercase tracking-widest font-bold mb-2">
              <Sparkles className="w-4 h-4" /> 100% Free • No Credit Card Required
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#f2f2e8] mb-2">
              Book Your 2-Day Free Trial
            </h3>
            <p className="text-xs text-[#b4c3bd] mb-6">
              Experience live 1-on-1 Quran learning with our certified teachers before making any decision.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#d4af37] font-semibold mb-1 uppercase tracking-wider text-[11px]">
                    Student Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#d4af37]/60 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      required
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      placeholder="Student full name"
                      className="w-full bg-[#04120f] border border-[#d4af37]/30 focus:border-[#d4af37] text-[#f2f2e8] pl-9 pr-3 py-2.5 rounded-sm outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#d4af37] font-semibold mb-1 uppercase tracking-wider text-[11px]">
                    Parent / Guardian Name (If minor)
                  </label>
                  <input
                    type="text"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    placeholder="Parent name (optional)"
                    className="w-full bg-[#04120f] border border-[#d4af37]/30 focus:border-[#d4af37] text-[#f2f2e8] px-3 py-2.5 rounded-sm outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#d4af37] font-semibold mb-1 uppercase tracking-wider text-[11px]">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#d4af37]/60 absolute left-3 top-2.5" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="email@example.com"
                      className="w-full bg-[#04120f] border border-[#d4af37]/30 focus:border-[#d4af37] text-[#f2f2e8] pl-9 pr-3 py-2.5 rounded-sm outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#d4af37] font-semibold mb-1 uppercase tracking-wider text-[11px]">
                    WhatsApp / Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#d4af37]/60 absolute left-3 top-2.5" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-[#04120f] border border-[#d4af37]/30 focus:border-[#d4af37] text-[#f2f2e8] pl-9 pr-3 py-2.5 rounded-sm outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#d4af37] font-semibold mb-1 uppercase tracking-wider text-[11px]">
                    Select Course *
                  </label>
                  <select
                    value={formData.courseId}
                    onChange={(e) => setFormData({ ...formData, courseId: e.target.value })}
                    className="w-full bg-[#04120f] border border-[#d4af37]/30 focus:border-[#d4af37] text-[#f2f2e8] px-3 py-2.5 rounded-sm outline-none transition-all"
                  >
                    {COURSES.map((c) => (
                      <option key={c.id} value={c.id} className="bg-[#04120f] text-[#f2f2e8]">
                        {c.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[#d4af37] font-semibold mb-1 uppercase tracking-wider text-[11px]">
                    Preferred Teacher Gender
                  </label>
                  <select
                    value={formData.preferredGender}
                    onChange={(e) => setFormData({ ...formData, preferredGender: e.target.value })}
                    className="w-full bg-[#04120f] border border-[#d4af37]/30 focus:border-[#d4af37] text-[#f2f2e8] px-3 py-2.5 rounded-sm outline-none transition-all"
                  >
                    <option value="Any">No Preference</option>
                    <option value="Female">Female Teacher (Strict Sister/Kids)</option>
                    <option value="Male">Male Qari / Teacher</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[#d4af37] font-semibold mb-1 uppercase tracking-wider text-[11px]">
                  Preferred Time Slot
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Morning', 'Afternoon', 'Evening'].map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setFormData({ ...formData, preferredTime: slot })}
                      className={`py-2 text-center rounded-sm border transition-all ${
                        formData.preferredTime === slot
                          ? 'bg-[#d4af37] text-[#04120f] font-bold border-[#d4af37]'
                          : 'bg-[#04120f] border-[#d4af37]/30 text-[#b4c3bd] hover:border-[#d4af37]'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[#d4af37] font-semibold mb-1 uppercase tracking-wider text-[11px]">
                  Special Requests / Current Level Notes
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. Student knows basic letters, needs Tajweed help..."
                  className="w-full bg-[#04120f] border border-[#d4af37]/30 focus:border-[#d4af37] text-[#f2f2e8] px-3 py-2 rounded-sm outline-none transition-all"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 bg-[#d4af37] text-[#04120f] hover:bg-[#e2bd47] transition-all font-bold uppercase tracking-widest text-xs rounded-sm shadow-[0_0_20px_rgba(212,175,55,0.3)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {submitting ? (
                    <span>Registering Trial Class...</span>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>Submit Free Trial Request</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[10px] text-[#b4c3bd]/80 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>Our admissions desk will contact you via WhatsApp/Email within 2 hours.</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 bg-[#d4af37]/20 border-2 border-[#d4af37] rounded-full flex items-center justify-center mx-auto text-[#d4af37] gold-glow">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="font-serif text-2xl font-bold text-[#f2f2e8]">
              Trial Registration Successful!
            </h3>

            <div className="p-4 bg-[#04120f] gold-border rounded-sm space-y-2 text-xs">
              <p className="text-[#d4af37] font-semibold">
                Reference ID: <span className="font-mono text-[#f2f2e8] font-bold text-sm">{refId}</span>
              </p>
              <p className="text-[#b4c3bd]">
                JazakAllah Khair <span className="text-[#f2f2e8] font-bold">{formData.studentName}</span>! We have received your request for the{' '}
                <span className="text-[#d4af37]">{COURSES.find(c => c.id === formData.courseId)?.title}</span> trial session.
              </p>
            </div>

            <p className="text-xs text-[#b4c3bd]">
              Our academic coordinator will reach out to you at <span className="text-[#f2f2e8] font-semibold">{formData.phone}</span> /{' '}
              <span className="text-[#f2f2e8] font-semibold">{formData.email}</span> with your class room link and schedule options.
            </p>

            <button
              onClick={handleReset}
              className="px-8 py-3 bg-[#d4af37] text-[#04120f] font-bold uppercase tracking-widest text-xs rounded-sm hover:bg-[#e2bd47] transition-all"
            >
              Back to Academy
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
