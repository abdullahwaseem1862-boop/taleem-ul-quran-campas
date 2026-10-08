import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, User, Mail, Phone, BookOpen, Clock, ShieldCheck, MapPin, MessageCircle, Calendar } from 'lucide-react';
import { COURSES, ACADEMY_INFO } from '../data/academyData';
import { useLanguage } from '../context/LanguageContext';

interface FreeTrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedCourse?: string;
}

export const FreeTrialModal: React.FC<FreeTrialModalProps> = ({ isOpen, onClose, preselectedCourse }) => {
  const { t, isRTL } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    country: '',
    whatsapp: '',
    email: '',
    courseId: preselectedCourse || COURSES[0].id,
    preferredDays: 'Weekend (Sat-Sun)',
    preferredTime: 'Evening (6:00 PM - 9:00 PM)',
    teacherPreference: 'No Preference',
    message: '',
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
      setRefId(`TQC-DEMO-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 800);
  };

  const handleSendWhatsApp = () => {
    const selectedCourseObj = COURSES.find(c => c.id === formData.courseId);
    const text = `Assalamu Alaikum! I would like to book a free Quran demo class with Taleem Ul Quran Campus.
*Name:* ${formData.fullName || 'Not provided'}
*Age:* ${formData.age || 'Not provided'}
*Country:* ${formData.country || 'Not provided'}
*Course:* ${selectedCourseObj?.title || formData.courseId}
*Preferred Days:* ${formData.preferredDays}
*Preferred Time:* ${formData.preferredTime}
*Teacher:* ${formData.teacherPreference}
*Notes:* ${formData.message || 'None'}`;

    const url = `https://wa.me/${ACADEMY_INFO.contact.whatsappClean}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#061a14] gold-border gold-glow p-5 sm:p-8 rounded-lg text-[#f2f2e8] max-h-[92vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} p-2 text-[#b4c3bd] hover:text-[#d4af37] hover:bg-[#04120f] rounded-full transition-colors`}
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 text-[#d4af37] text-xs uppercase tracking-widest font-bold mb-1.5">
              <Sparkles className="w-4 h-4 text-[#d4af37]" />
              <span>{t.demoModal.guarantee}</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#f2f2e8] mb-1">
              {t.demoModal.title}
            </h3>
            <p className="text-xs text-[#b4c3bd] mb-6">
              {t.demoModal.subtitle}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              {/* Row 1: Name and Age */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#d4af37] font-semibold mb-1 uppercase tracking-wider text-[11px]">
                    {t.demoModal.fullName} *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#d4af37]/60 absolute left-3 rtl:left-auto rtl:right-3 top-3" />
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Zayd Ahmad"
                      className="w-full bg-[#04120f] border border-[#d4af37]/30 focus:border-[#d4af37] text-[#f2f2e8] pl-9 rtl:pl-3 rtl:pr-9 pr-3 py-2.5 rounded text-xs outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#d4af37] font-semibold mb-1 uppercase tracking-wider text-[11px]">
                    {t.demoModal.age} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    placeholder="e.g. 8 years (or Adult)"
                    className="w-full bg-[#04120f] border border-[#d4af37]/30 focus:border-[#d4af37] text-[#f2f2e8] px-3 py-2.5 rounded text-xs outline-none transition-all"
                  />
                </div>
              </div>

              {/* Row 2: Country and WhatsApp */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#d4af37] font-semibold mb-1 uppercase tracking-wider text-[11px]">
                    {t.demoModal.country} *
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-[#d4af37]/60 absolute left-3 rtl:left-auto rtl:right-3 top-3" />
                    <input
                      type="text"
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      placeholder="e.g. London, UK / Texas, USA"
                      className="w-full bg-[#04120f] border border-[#d4af37]/30 focus:border-[#d4af37] text-[#f2f2e8] pl-9 rtl:pl-3 rtl:pr-9 pr-3 py-2.5 rounded text-xs outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#d4af37] font-semibold mb-1 uppercase tracking-wider text-[11px]">
                    {t.demoModal.whatsappNumber} *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#d4af37]/60 absolute left-3 rtl:left-auto rtl:right-3 top-3" />
                    <input
                      type="tel"
                      required
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      placeholder="+44 7123 456789"
                      dir="ltr"
                      className="w-full bg-[#04120f] border border-[#d4af37]/30 focus:border-[#d4af37] text-[#f2f2e8] pl-9 rtl:pl-3 rtl:pr-9 pr-3 py-2.5 rounded text-xs outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Row 3: Email and Course */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#d4af37] font-semibold mb-1 uppercase tracking-wider text-[11px]">
                    {t.demoModal.email} *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#d4af37]/60 absolute left-3 rtl:left-auto rtl:right-3 top-3" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="student@example.com"
                      className="w-full bg-[#04120f] border border-[#d4af37]/30 focus:border-[#d4af37] text-[#f2f2e8] pl-9 rtl:pl-3 rtl:pr-9 pr-3 py-2.5 rounded text-xs outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#d4af37] font-semibold mb-1 uppercase tracking-wider text-[11px]">
                    {t.demoModal.course} *
                  </label>
                  <select
                    value={formData.courseId}
                    onChange={(e) => setFormData({ ...formData, courseId: e.target.value })}
                    className="w-full bg-[#04120f] border border-[#d4af37]/30 focus:border-[#d4af37] text-[#f2f2e8] px-3 py-2.5 rounded text-xs outline-none transition-all"
                  >
                    {COURSES.map((c) => (
                      <option key={c.id} value={c.id} className="bg-[#04120f] text-[#f2f2e8]">
                        {c.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 4: Preferred Days & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#d4af37] font-semibold mb-1 uppercase tracking-wider text-[11px]">
                    {t.demoModal.preferredDays}
                  </label>
                  <select
                    value={formData.preferredDays}
                    onChange={(e) => setFormData({ ...formData, preferredDays: e.target.value })}
                    className="w-full bg-[#04120f] border border-[#d4af37]/30 focus:border-[#d4af37] text-[#f2f2e8] px-3 py-2.5 rounded text-xs outline-none transition-all"
                  >
                    <option value="Monday - Wednesday">Monday - Wednesday</option>
                    <option value="Thursday - Saturday">Thursday - Saturday</option>
                    <option value="Weekend (Sat - Sun)">Weekend Only (Sat - Sun)</option>
                    <option value="Flexible / Any Days">Flexible / Any Days</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[#d4af37] font-semibold mb-1 uppercase tracking-wider text-[11px]">
                    {t.demoModal.preferredTime}
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full bg-[#04120f] border border-[#d4af37]/30 focus:border-[#d4af37] text-[#f2f2e8] px-3 py-2.5 rounded text-xs outline-none transition-all"
                  >
                    <option value="Morning (6:00 AM - 11:00 AM)">Morning (6:00 AM - 11:00 AM)</option>
                    <option value="Afternoon (1:00 PM - 5:00 PM)">Afternoon (1:00 PM - 5:00 PM)</option>
                    <option value="Evening (6:00 PM - 10:00 PM)">Evening (6:00 PM - 10:00 PM)</option>
                    <option value="Night / Flexible Slot">Night / Custom Slot</option>
                  </select>
                </div>
              </div>

              {/* Row 5: Teacher Preference */}
              <div>
                <label className="block text-[#d4af37] font-semibold mb-1 uppercase tracking-wider text-[11px]">
                  {t.demoModal.teacherPreference}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { val: 'No Preference', label: t.demoModal.noPref },
                    { val: 'Male Teacher', label: t.demoModal.maleTeacher },
                    { val: 'Female Teacher', label: t.demoModal.femaleTeacher }
                  ].map((opt) => (
                    <button
                      key={opt.val}
                      type="button"
                      onClick={() => setFormData({ ...formData, teacherPreference: opt.val })}
                      className={`py-2 px-1 text-center rounded border text-[11px] font-semibold transition-all ${
                        formData.teacherPreference === opt.val
                          ? 'bg-[#d4af37] text-[#04120f] border-[#d4af37]'
                          : 'bg-[#04120f] border-[#d4af37]/30 text-[#b4c3bd] hover:border-[#d4af37]'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Row 6: Message */}
              <div>
                <label className="block text-[#d4af37] font-semibold mb-1 uppercase tracking-wider text-[11px]">
                  {t.demoModal.message}
                </label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="e.g. Current Quran reading level, specific Surah, or learning pace goals..."
                  className="w-full bg-[#04120f] border border-[#d4af37]/30 focus:border-[#d4af37] text-[#f2f2e8] px-3 py-2 rounded text-xs outline-none transition-all"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 py-3 bg-[#d4af37] text-[#04120f] hover:bg-[#e2bd47] transition-all font-bold uppercase tracking-wider text-xs rounded shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 active:scale-95"
                >
                  {submitting ? (
                    <span>{t.demoModal.submitting}</span>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4" />
                      <span>{t.demoModal.submitBtn}</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg border border-emerald-400/30"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{t.demoModal.submitWhatsAppBtn}</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[10px] text-[#b4c3bd]/80 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>We respect your privacy. No spam, no sales calls.</span>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation Success State */
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 bg-[#d4af37]/20 border-2 border-[#d4af37] rounded-full flex items-center justify-center mx-auto text-[#d4af37] gold-glow">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="font-serif text-2xl font-bold text-[#f2f2e8]">
              {t.demoModal.successTitle}
            </h3>

            <div className="p-4 bg-[#04120f] gold-border rounded space-y-2 text-xs">
              <p className="text-[#d4af37] font-semibold">
                Reference ID: <span className="font-mono text-[#f2f2e8] font-bold text-sm">{refId}</span>
              </p>
              <p className="text-[#b4c3bd]">
                {t.demoModal.successDesc}
              </p>
            </div>

            <p className="text-xs text-[#b4c3bd]">
              Student: <strong className="text-[#f2f2e8]">{formData.fullName}</strong> · WhatsApp:{' '}
              <strong className="text-[#f2f2e8]" dir="ltr">{formData.whatsapp}</strong>
            </p>

            <div className="flex justify-center gap-3 pt-2">
              <button
                onClick={handleSendWhatsApp}
                className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Confirm on WhatsApp</span>
              </button>
              <button
                onClick={handleReset}
                className="px-6 py-2.5 bg-[#d4af37] text-[#04120f] font-bold uppercase tracking-wider text-xs rounded hover:bg-[#e2bd47]"
              >
                {t.demoModal.closeBtn}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
