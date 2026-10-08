export type Language = 'en' | 'ur' | 'ar' | 'bn' | 'hi' | 'tr';

export interface LanguageConfig {
  code: Language;
  name: string;
  nativeName: string;
  dir: 'ltr' | 'rtl';
  flag: string;
  fontClass: string;
}

export interface Course {
  id: string;
  title: string;
  arabicTitle: string;
  category: 'Foundation' | 'Recitation' | 'Tajweed' | 'Memorization' | 'Tafseer' | 'Islamic Studies' | 'Language';
  duration: string;
  ageGroup: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  description: string;
  outcomes: string[];
  curriculum: string[];
  icon: string;
  badge?: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  arabicTitle?: string;
  role: string;
  gender: 'Male' | 'Female';
  qualification: string;
  experienceYears: number;
  specialization: string[];
  languages: string[];
  bio: string;
  rating: number;
  studentsTaught: number;
  avatar: string;
}

export interface PricingPlan {
  id: string;
  daysPerWeek: number;
  classesPerMonth: number;
  sessionDuration: string;
  monthlyFeeUSD: number;
  popular?: boolean;
  features: string[];
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  preferredMethod: 'WhatsApp' | 'Email' | 'Phone Call';
  courseInterest: string;
  message: string;
}

export interface DemoBookingFormData {
  fullName: string;
  age: string;
  country: string;
  whatsapp: string;
  email: string;
  courseId: string;
  preferredDays: string;
  preferredTime: string;
  teacherPreference: 'No Preference' | 'Male Teacher' | 'Female Teacher';
  message: string;
}

export interface Testimonial {
  id: string;
  parentName: string;
  studentName: string;
  location: string;
  course: string;
  quote: string;
  rating: number;
}

export interface DailyVerse {
  ayahArabic: string;
  ayahTranslation: string;
  surah: string;
  surahNumber: number;
  ayahNumber: number;
  explanation: string;
}

export interface StudentCategory {
  id: string;
  title: string;
  arabicTitle: string;
  description: string;
  icon: string;
  features: string[];
}

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface HowItWorksStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface BlogArticle {
  id: string;
  title: string;
  category: 'Quran' | 'Tajweed' | 'Islamic Studies' | 'Duas' | 'Salah' | 'Parenting' | 'Quran Learning Tips';
  readTime: string;
  date: string;
  summary: string;
  content: string[];
  authenticReferences: string[];
  author: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Classes' | 'Teachers' | 'Fees & Tech';
}
