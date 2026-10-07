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
