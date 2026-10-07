import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle2, Copy, Check, Sparkles, Globe, ShieldCheck } from 'lucide-react';
import { ACADEMY_INFO, COURSES } from '../data/academyData';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: 'Free Trial Inquiry',
    preferredMethod: 'WhatsApp' as 'WhatsApp' | 'Email' | 'Phone Call',
    courseInterest: COURSES[0].title,
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionRef, setSubmissionRef] = useState('');
  const [copiedRef, setCopiedRef] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setSubmissionRef(`TQC-MSG-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 1200);
  };

  const handleCopyRef = () => {
    navigator.clipboard.writeText(submissionRef);
    setCopiedRef(true);
    setTimeout(() => setCopiedRef(false), 2000);
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      subject: 'Free Trial Inquiry',
      preferredMethod: 'WhatsApp',
      courseInterest: COURSES[0].title,
      message: '',
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 space-y-12">
      
      {/* Page Heading */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#061a14] gold-border text-[#d4af37] text-xs font-bold uppercase tracking-widest rounded-sm">
          <MessageCircle className="w-3.5 h-3.5" /> Get in Touch
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#f2f2e8]">
          Contact Taleem-ul-Quran Campus
        </h1>
        <p className="text-xs sm:text-sm text-[#b4c3bd] leading-relaxed">
          We are here to support your Quranic learning journey. Reach out for admissions, free trial scheduling, fee inquiries, or general academic assistance.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Campus Physical Address, Phone, Email & Desks */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="bg-[#061a14] gold-border p-6 sm:p-8 rounded-sm space-y-6 gold-glow">
            <h3 className="font-serif text-2xl font-bold text-[#f2f2e8] border-b border-[#d4af37]/20 pb-3">
              Campus & Contact Details
            </h3>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 border border-[#d4af37]/40 rounded-sm bg-[#04120f] flex items-center justify-center text-[#d4af37] shrink-0 mt-0.5">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider text-[#d4af37] font-bold block">
                  Physical Campus Address
                </span>
                <p className="text-xs text-[#f2f2e8] leading-relaxed font-medium">
                  {ACADEMY_INFO.contact.address}
                </p>
                <span className="text-[11px] text-[#b4c3bd] block">
                  {ACADEMY_INFO.contact.globalDesks}
                </span>
              </div>
            </div>

            {/* Phone & WhatsApp */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 border border-[#d4af37]/40 rounded-sm bg-[#04120f] flex items-center justify-center text-[#d4af37] shrink-0 mt-0.5">
                <Phone className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider text-[#d4af37] font-bold block">
                  Phone & WhatsApp Desk
                </span>
                <div className="text-xs text-[#f2f2e8]">
                  <p>
                    Call: <a href={`tel:${ACADEMY_INFO.contact.phoneFormatted}`} className="text-[#d4af37] font-bold hover:underline">{ACADEMY_INFO.contact.phone}</a>
                  </p>
                  <p className="pt-1">
                    WhatsApp:{' '}
                    <a
                      href={`https://wa.me/${ACADEMY_INFO.contact.whatsappClean}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-emerald-400 font-bold hover:underline inline-flex items-center gap-1"
                    >
                      {ACADEMY_INFO.contact.whatsapp} (Instant Chat)
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Email Addresses */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 border border-[#d4af37]/40 rounded-sm bg-[#04120f] flex items-center justify-center text-[#d4af37] shrink-0 mt-0.5">
                <Mail className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider text-[#d4af37] font-bold block">
                  Email Admissions & Support
                </span>
                <div className="text-xs text-[#f2f2e8] space-y-1">
                  <p>
                    General Info: <a href={`mailto:${ACADEMY_INFO.contact.email}`} className="text-[#d4af37] hover:underline font-semibold">{ACADEMY_INFO.contact.email}</a>
                  </p>
                  <p>
                    Admissions: <a href={`mailto:${ACADEMY_INFO.contact.admissionsEmail}`} className="text-[#d4af37] hover:underline font-semibold">{ACADEMY_INFO.contact.admissionsEmail}</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="flex items-start gap-4 pt-2 border-t border-[#d4af37]/15">
              <div className="w-10 h-10 border border-[#d4af37]/40 rounded-sm bg-[#04120f] flex items-center justify-center text-[#d4af37] shrink-0 mt-0.5">
                <Clock className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider text-[#d4af37] font-bold block">
                  Global Class & Office Hours
                </span>
                <p className="text-xs text-[#f2f2e8]">
                  Classes: <strong className="text-[#d4af37]">24 Hours / 7 Days</strong> (Worldwide Timezones)
                </p>
                <p className="text-[11px] text-[#b4c3bd]">
                  Office Desk: {ACADEMY_INFO.contact.officeHours}
                </p>
              </div>
            </div>

          </div>

          {/* Location Map / Card Placeholder */}
          <div className="bg-[#04120f] gold-border p-6 rounded-sm text-center space-y-3">
            <Globe className="w-8 h-8 text-[#d4af37] mx-auto" />
            <h4 className="font-serif text-lg font-bold text-[#f2f2e8]">
              Serving Students in 35+ Countries
            </h4>
            <p className="text-xs text-[#b4c3bd] leading-relaxed">
              Our teachers conduct live sessions synchronized with student local times across USA, UK, Canada, Australia, Europe, and Asia.
            </p>
          </div>

        </div>

        {/* Right Column: Functional Interactive Contact Form */}
        <div className="lg:col-span-7">
          <div className="bg-[#061a14] gold-border p-6 sm:p-8 rounded-sm space-y-6 gold-glow relative">
            
            <div className="border-b border-[#d4af37]/20 pb-4">
              <span className="text-xs uppercase tracking-widest text-[#d4af37] font-bold">
                Online Inquiry Form
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#f2f2e8] mt-1">
                Send Us a Direct Message
              </h2>
              <p className="text-xs text-[#b4c3bd] mt-1">
                Fill out the form below and our admissions coordinator will get back to you within 2 hours.
              </p>
            </div>

            {/* Clearly indicated Form Submission State */}
            {isSubmitted ? (
              <div className="bg-[#04120f] border-2 border-[#d4af37] p-6 sm:p-8 rounded-sm text-center space-y-6 gold-glow animate-in fade-in duration-300">
                <div className="w-16 h-16 bg-[#d4af37]/20 border-2 border-[#d4af37] rounded-full flex items-center justify-center mx-auto text-[#d4af37] gold-glow">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-bold text-[#f2f2e8]">
                    Message Submitted Successfully!
                  </h3>
                  <p className="text-xs text-[#b4c3bd]">
                    JazakAllah Khair <strong className="text-[#f2f2e8]">{formData.fullName}</strong>. Your inquiry has been logged in our academic system.
                  </p>
                </div>

                {/* Reference Box */}
                <div className="p-4 bg-[#061a14] border border-[#d4af37]/30 rounded-sm space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-[#d4af37] font-semibold">Reference Ticket Number:</span>
                    <button
                      onClick={handleCopyRef}
                      className="flex items-center gap-1 text-[#d4af37] hover:underline text-[11px]"
                    >
                      {copiedRef ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedRef ? 'Copied' : 'Copy ID'}</span>
                    </button>
                  </div>
                  <div className="font-mono text-lg font-bold text-[#f2f2e8] tracking-wider text-left border-t border-[#d4af37]/15 pt-2">
                    {submissionRef}
                  </div>
                </div>

                <div className="text-xs text-[#b4c3bd] space-y-1 text-left bg-[#061a14]/60 p-4 border border-[#d4af37]/20 rounded-sm">
                  <p className="font-semibold text-[#d4af37] uppercase tracking-wider text-[11px]">
                    Submission Summary:
                  </p>
                  <p>• <strong>Subject:</strong> {formData.subject}</p>
                  <p>• <strong>Email:</strong> {formData.email}</p>
                  <p>• <strong>Phone / WhatsApp:</strong> {formData.phone || 'Not provided'}</p>
                  <p>• <strong>Preferred Response Method:</strong> {formData.preferredMethod}</p>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleResetForm}
                    className="w-full sm:w-auto px-6 py-3 bg-[#d4af37] text-[#04120f] font-bold text-xs uppercase tracking-widest rounded-sm hover:bg-[#e2bd47] transition-all cursor-pointer"
                  >
                    Send Another Message
                  </button>
                  <a
                    href={`https://wa.me/${ACADEMY_INFO.contact.whatsappClean}?text=Salam,%20I%20just%20submitted%20ticket%20${submissionRef}%20regarding%20${encodeURIComponent(formData.subject)}.`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto px-6 py-3 border border-emerald-500/50 text-emerald-400 font-bold text-xs uppercase tracking-widest rounded-sm hover:bg-emerald-500/10 transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Instant WhatsApp Follow Up</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                
                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#d4af37] font-semibold mb-1 uppercase tracking-wider text-[11px]">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Abdullah Waseem"
                      className="w-full bg-[#04120f] border border-[#d4af37]/30 focus:border-[#d4af37] text-[#f2f2e8] px-3 py-2.5 rounded-sm outline-none transition-all placeholder:text-[#b4c3bd]/40"
                    />
                  </div>

                  <div>
                    <label className="block text-[#d4af37] font-semibold mb-1 uppercase tracking-wider text-[11px]">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full bg-[#04120f] border border-[#d4af37]/30 focus:border-[#d4af37] text-[#f2f2e8] px-3 py-2.5 rounded-sm outline-none transition-all placeholder:text-[#b4c3bd]/40"
                    />
                  </div>
                </div>

                {/* Phone & Subject */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#d4af37] font-semibold mb-1 uppercase tracking-wider text-[11px]">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+92 300 0000000"
                      className="w-full bg-[#04120f] border border-[#d4af37]/30 focus:border-[#d4af37] text-[#f2f2e8] px-3 py-2.5 rounded-sm outline-none transition-all placeholder:text-[#b4c3bd]/40"
                    />
                  </div>

                  <div>
                    <label className="block text-[#d4af37] font-semibold mb-1 uppercase tracking-wider text-[11px]">
                      Subject *
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-[#04120f] border border-[#d4af37]/30 focus:border-[#d4af37] text-[#f2f2e8] px-3 py-2.5 rounded-sm outline-none transition-all"
                    >
                      <option value="Free Trial Inquiry">Free Trial Inquiry</option>
                      <option value="Course Information">Course Curriculum Information</option>
                      <option value="Fees & Schedule Question">Fee Plans & Time Slot Scheduling</option>
                      <option value="Female Teacher Request">Request Female Scholar</option>
                      <option value="Other Assistance">Other General Inquiry</option>
                    </select>
                  </div>
                </div>

                {/* Preferred Method & Course Interest */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#d4af37] font-semibold mb-1 uppercase tracking-wider text-[11px]">
                      Preferred Response Method
                    </label>
                    <div className="flex items-center gap-2 pt-1">
                      {(['WhatsApp', 'Email', 'Phone Call'] as const).map((method) => (
                        <button
                          key={method}
                          type="button"
                          onClick={() => setFormData({ ...formData, preferredMethod: method })}
                          className={`flex-1 py-2 text-center rounded-sm border transition-all ${
                            formData.preferredMethod === method
                              ? 'bg-[#d4af37] text-[#04120f] font-bold border-[#d4af37]'
                              : 'bg-[#04120f] border-[#d4af37]/30 text-[#b4c3bd] hover:border-[#d4af37]'
                          }`}
                        >
                          {method}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#d4af37] font-semibold mb-1 uppercase tracking-wider text-[11px]">
                      Course of Interest
                    </label>
                    <select
                      value={formData.courseInterest}
                      onChange={(e) => setFormData({ ...formData, courseInterest: e.target.value })}
                      className="w-full bg-[#04120f] border border-[#d4af37]/30 focus:border-[#d4af37] text-[#f2f2e8] px-3 py-2.5 rounded-sm outline-none transition-all"
                    >
                      {COURSES.map((c) => (
                        <option key={c.id} value={c.title}>
                          {c.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[#d4af37] font-semibold mb-1 uppercase tracking-wider text-[11px]">
                    Message / Details *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Type your message, questions regarding class timings, or preferred start date..."
                    className="w-full bg-[#04120f] border border-[#d4af37]/30 focus:border-[#d4af37] text-[#f2f2e8] p-3 rounded-sm outline-none transition-all placeholder:text-[#b4c3bd]/40"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-[#d4af37] text-[#04120f] hover:bg-[#e2bd47] font-bold uppercase tracking-widest text-xs rounded-sm shadow-[0_0_20px_rgba(212,175,55,0.3)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 transition-all"
                  >
                    {isSubmitting ? (
                      <span>Sending Message to Admissions Desk...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message Now</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="text-[10px] text-[#b4c3bd]/70 text-center pt-1">
                  🔒 We respect your privacy. Your information is strictly used for Taleem-ul-Quran Campus admissions communications only.
                </p>

              </form>
            )}

          </div>
        </div>

      </div>

    </div>
  );
};
