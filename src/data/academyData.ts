import { Course, FacultyMember, PricingPlan, Testimonial, DailyVerse } from '../types';

export const ACADEMY_INFO = {
  name: 'Taleem-ul-Quran Campus',
  shortName: 'TQC Academy',
  tagline: 'Nurturing Hearts with Divine Quranic Knowledge Worldwide',
  arabicTagline: 'خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ',
  hadithTranslation: '"The best among you are those who learn the Quran and teach it." (Sahih Al-Bukhari)',
  contact: {
    address: 'Taleem-ul-Quran Campus, Sector I-8/3, Main Boulevard, Islamabad, Pakistan',
    globalDesks: 'Regional Desk: London, UK | Texas, USA | Toronto, Canada',
    phone: '+92 (370) 3022593',
    phoneFormatted: '+92 370 3022593',
    whatsapp: '+92 (370) 3022593',
    whatsappClean: '923129876543',
    email: 'taleemulquranonlineacademy2026@gmail.com',
    admissionsEmail: 'admissions@taleemulqurancampus.com',
    supportEmail: 'support@taleemulqurancampus.com',
    workingHours: '24/7 Global Live Classes (Monday - Sunday)',
    officeHours: 'Mon - Sat: 8:00 AM - 10:00 PM (PKT/GMT+5)',
  },
  stats: {
    studentsGraduated: '5,000+',
    countriesServed: '35+',
    certifiedTeachers: '30+',
    satisfactionRate: '99.4%',
  }
};

export const COURSES: Course[] = [
  {
    id: 'noorani-qaida',
    title: 'Noorani Qaida Course',
    arabicTitle: 'نُورَانِي قَاعِدَة',
    category: 'Foundation',
    duration: '8 - 12 Weeks',
    ageGroup: 'Kids (4+) & Beginners',
    level: 'Beginner',
    badge: 'Most Popular for Kids',
    description: 'The essential foundational course designed to teach children and beginners Arabic letter recognition, correct Makharij (pronunciation points), and fundamental reading rules required to recite the Holy Quran.',
    outcomes: [
      'Recognize all 28 Arabic letters in isolated, initial, medial, and final forms',
      'Master correct Makharij (points of articulation) for guttural and emphatic letters',
      'Understand Harkat (short vowels), Tanween, Sukoon, and Tashdeed',
      'Read compound Arabic words with confidence and natural rhythm'
    ],
    curriculum: [
      'Lesson 1-3: Single Letters & Pronunciation Accuracy',
      'Lesson 4-6: Compound Letters (Murakkabat) & Vowel Signs',
      'Lesson 7-9: Madd (Prolongation), Leen Letters & Tanween',
      'Lesson 10-12: Sukoon, Tashdeed, and Rules of Stopping (Waqf)'
    ],
    icon: 'BookOpen'
  },
  {
    id: 'quran-reading',
    title: 'Quran Reading (Nazra)',
    arabicTitle: 'تِلَاوَةُ الْقُرْآنِ الْكَرِيم',
    category: 'Recitation',
    duration: '3 - 6 Months',
    ageGroup: 'Kids & Adults',
    level: 'Intermediate',
    badge: 'Essential',
    description: 'Fluent step-by-step recitation of the complete Holy Quran with proper accent, pace, and basic Tajweed rules under direct guidance of certified Qaris.',
    outcomes: [
      'Develop smooth, confident, and melodious Quranic recitation',
      'Apply essential Tajweed rules naturally while reading',
      'Recognize Quranic symbols, pauses (Waqf), and Sajdah verses',
      'Complete full Nazra Khatam-e-Quran with personalized guidance'
    ],
    curriculum: [
      'Juz 1-5: Building Pace & Accuracy in Short Surahs',
      'Juz 6-15: Mastering Rhythmic Recitation & Smooth Transitions',
      'Juz 16-25: Advanced Pronunciation Polish & Long Verses',
      'Juz 26-30: Completion, Final Khatam & Recitation Test'
    ],
    icon: 'Book'
  },
  {
    id: 'tajweed-masterclass',
    title: 'Tajweed Rules Masterclass',
    arabicTitle: 'إِتْقَانُ التَّجْوِيد',
    category: 'Tajweed',
    duration: '4 - 8 Months',
    ageGroup: 'All Ages',
    level: 'Advanced',
    badge: 'Certificate Included',
    description: 'An in-depth theoretical and practical study of classical Tajweed rules, including Noon Sakinah, Meem Sakinah, Qalqalah, Sifaat (characteristics), and Rules of Heavy/Light letters.',
    outcomes: [
      'Understand the classical rules of Tajweed systematically',
      'Master Ahkam-e-Noon Sakinah & Tanween (Izhar, Idgham, Iqlab, Ikhfa)',
      'Differentiate between Sifaat Lazimah and Aridhah',
      'Recite with the exact dialect and elegance of renowned Al-Azhar Qaris'
    ],
    curriculum: [
      'Module 1: Deep Dive into Articulation Points (Makharij al-Huruf)',
      'Module 2: Rules of Noon Sakinah, Tanween & Meem Sakinah',
      'Module 3: Madd Types (Original vs Secondary Prolongations)',
      'Module 4: Characteristics of Letters (Sifaat) & Final Sanad Exam'
    ],
    icon: 'Sparkles'
  },
  {
    id: 'hifz-quran',
    title: 'Hifz-ul-Quran (Memorization)',
    arabicTitle: 'حِفْظُ الْقُرْآنِ الْكَرِيم',
    category: 'Memorization',
    duration: '1 - 3 Years (Customized)',
    ageGroup: 'Dedicated Students',
    level: 'Advanced',
    badge: '1-on-1 Dedicated Hafiz',
    description: 'A structured, highly disciplined Quran memorization program tailored to individual memory capability, with daily lesson (Sabaq), recent revision (Sabaqi), and old revision (Manzil).',
    outcomes: [
      'Memorize selected Surahs, Juz, or the entire 30 Juz of the Holy Quran',
      'Establish a rock-solid long-term memory retention routine (Manzil)',
      'Receive constant error corrections and Tajweed refinement',
      'Earn official Hifz Completion Certificate upon final review'
    ],
    curriculum: [
      'Daily Sabaq: New verses memorized with teacher assistance',
      'Daily Sabaqi: Revision of last 5-10 pages',
      'Daily Manzil: Systematically reviewing older memorized Juz',
      'Monthly Exam: Comprehensive oral examination'
    ],
    icon: 'Award'
  },
  {
    id: 'quran-tafseer',
    title: 'Quran Translation & Tafseer',
    arabicTitle: 'تَرْجَمَةٌ وَتَفْسِيرُ الْقُرْآن',
    category: 'Tafseer',
    duration: '6 - 12 Months',
    ageGroup: 'Teens & Adults',
    level: 'All Levels',
    badge: 'Life Changing',
    description: 'Understand the divine message of Allah subhanahu wa ta\'ala through word-for-word translation, historical context (Asbab al-Nuzul), and practical life application of Quranic wisdom.',
    outcomes: [
      'Understand word-for-word and contextual translation of Quranic verses',
      'Grasp historical context and reasons for revelation of key Surahs',
      'Extract moral, ethical, and spiritual guidelines for daily living',
      'Strengthen personal faith (Imaan) through deeper comprehension'
    ],
    curriculum: [
      'Juz Amma Tafseer: Moral lessons from short Surahs',
      'Surah Al-Baqarah & Al-Imran: Core jurisprudence & faith foundation',
      'Surah Yaseen, Al-Mulk, Al-Kahf: Spiritual reflections & admonitions',
      'Thematic Studies: Family ethics, economic justice, and character'
    ],
    icon: 'Compass'
  },
  {
    id: 'islamic-studies',
    title: 'Islamic Studies & Daily Masnoon Duas',
    arabicTitle: 'الدِّرَاسَاتُ الإِسْلَامِيَّة',
    category: 'Islamic Studies',
    duration: '12 Weeks',
    ageGroup: 'Kids & Youth',
    level: 'Beginner',
    description: 'Comprehensive Islamic character building covering Seerah of Prophet Muhammad (PBUH), daily prayers (Salah), purification (Taharah), 40 essential Duas, and Islamic manners (Adab).',
    outcomes: [
      'Perform Salah (Namaz) with complete posture, recitation, and understanding',
      'Memorize 40 daily Masnoon Duas (before eating, sleeping, travelling, etc.)',
      'Learn the inspiring life story (Seerah) of the Holy Prophet (PBUH)',
      'Develop strong Islamic etiquette, honesty, and respect for parents'
    ],
    curriculum: [
      'Pillar 1: Faith & Creed (Aqeedah, 6 Kalimas, Pillars of Islam)',
      'Pillar 2: Practical Worship (Wudu, Ghusl, Salah step-by-step)',
      'Pillar 3: Prophet Stories & Seerah Lessons',
      'Pillar 4: Islamic Etiquette, Duas & Social Responsibilities'
    ],
    icon: 'Heart'
  },
  {
    id: 'arabic-language',
    title: 'Quranic Arabic Language',
    arabicTitle: 'اللُّغَةُ الْعَرَبِيَّةُ لِلْقُرْآن',
    category: 'Language',
    duration: '6 Months',
    ageGroup: 'Teens & Adults',
    level: 'Intermediate',
    description: 'Learn fundamental Arabic grammar (Nahw and Sarf), essential Quranic vocabulary (representing 80% of Quranic words), and basic conversation skills.',
    outcomes: [
      'Recognize over 1,000 frequent Quranic vocabulary roots',
      'Grasp basic Arabic noun and verb conjugations (Sarf)',
      'Understand simple Quranic sentence structures without translation',
      'Enhance focus (Khushoo) in daily Salah prayers'
    ],
    curriculum: [
      'Level 1: Nouns, Pronouns, and Prepositions in Quranic Context',
      'Level 2: Past and Present Verb Conjugation Patterns',
      'Level 3: Sentence Types (Ismiyyah & Fi\'liyyah) & Parsing',
      'Level 4: Direct Quranic Text Comprehension Exercises'
    ],
    icon: 'Languages'
  }
];

export const FACULTY: FacultyMember[] = [
  {
    id: 'qari-abdul-rahman',
    name: 'Qari Abdul Rahman Al-Hassani',
    arabicTitle: 'الْقَارِئ عَبْدُ الرَّحْمَن',
    role: 'Head of Tajweed & Recitation',
    gender: 'Male',
    qualification: 'Shahadat-ul-Alimiyyah (Wafaq-ul-Madaris) & Ijazah in Hafs \'an \'Asim',
    experienceYears: 14,
    specialization: ['Advanced Tajweed', 'Quran Recitation', 'Qira\'at'],
    languages: ['English', 'Urdu', 'Arabic'],
    bio: 'Renowned Qari with Ijazah linked back to the Holy Prophet (PBUH). Has trained over 1,200 students worldwide in classical Egyptian and Hijazi recitation styles.',
    rating: 4.98,
    studentsTaught: 1250,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'alima-fatima-zahra',
    name: 'Ustadha Alima Fatima Zahra',
    arabicTitle: 'الْأُسْتَاذَةُ فَاطِمَة الزَّهْرَاء',
    role: 'Senior Female Quran & Tafseer Scholar',
    gender: 'Female',
    qualification: 'Dars-e-Nizami (Alimiyyah Degree) & MA Islamic Studies',
    experienceYears: 11,
    specialization: ['Female & Kids Quran Teaching', 'Tafseer', 'Islamic Studies', 'Noorani Qaida'],
    languages: ['English', 'Urdu'],
    bio: 'Dedicated female scholar specializing in nurturing young minds and sisters. Known for her gentle, patient teaching methodology and structured Tajweed drills.',
    rating: 4.99,
    studentsTaught: 980,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'hafiz-usman-tariq',
    name: 'Hafiz Qari Usman Tariq',
    arabicTitle: 'الْحَافِظ عُثْمَان طَارِق',
    role: 'Lead Hifz Program Instructor',
    gender: 'Male',
    qualification: 'Hafiz-e-Quran & BS Islamic Sciences (International Islamic University)',
    experienceYears: 9,
    specialization: ['Hifz-ul-Quran', 'Speed Memorization', 'Revision Techniques'],
    languages: ['English', 'Urdu', 'Pashto'],
    bio: 'Expert in memorization psychology and daily revision strategy. Guided more than 85 young students to complete their full 30 Juz Hifz-ul-Quran.',
    rating: 4.95,
    studentsTaught: 640,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'alima-maryam-siddiqui',
    name: 'Ustadha Alima Maryam Siddiqui',
    arabicTitle: 'الْأُسْتَاذَةُ مَرْيَم صِدِّيقِي',
    role: 'Noorani Qaida & Arabic Specialist for Children',
    gender: 'Female',
    qualification: 'Fazilat-e-Aarabiyyah & Certified Child Pedagogy Specialist',
    experienceYears: 8,
    specialization: ['Noorani Qaida for Kids', 'Arabic Phonetics', 'Daily Duas & Masnoon Supplications'],
    languages: ['English', 'Urdu', 'Arabic'],
    bio: 'Specializes in early childhood Quranic education using interactive visual flashcards and friendly encouragement to make Quran learning a joyous habit.',
    rating: 4.97,
    studentsTaught: 810,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'plan-2days',
    daysPerWeek: 2,
    classesPerMonth: 8,
    sessionDuration: '30 Mins / Class',
    monthlyFeeUSD: 35,
    popular: false,
    features: [
      '2 Live 1-on-1 Sessions Per Week',
      'Dedicated Male or Female Teacher',
      'Flexible Scheduling (Your Timezone)',
      'Free Class Recording Access',
      'Monthly Progress Report',
      '24/7 Portal & Homework Support'
    ]
  },
  {
    id: 'plan-3days',
    daysPerWeek: 3,
    classesPerMonth: 12,
    sessionDuration: '30 Mins / Class',
    monthlyFeeUSD: 48,
    popular: true,
    features: [
      '3 Live 1-on-1 Sessions Per Week',
      'Recommended Choice for Regular Pace',
      'Dedicated Male or Female Teacher',
      'Free Tajweed & Qaida PDF Workbooks',
      'Bi-Weekly Parent Teacher Review',
      'Full Student Portal Access'
    ]
  },
  {
    id: 'plan-5days',
    daysPerWeek: 5,
    classesPerMonth: 20,
    sessionDuration: '30 Mins / Class',
    monthlyFeeUSD: 75,
    popular: false,
    features: [
      '5 Live 1-on-1 Sessions Per Week',
      'Accelerated Learning & Hifz Focus',
      'Priority Teacher Match & Time Slot',
      'Weekly Comprehensive Assessment',
      'Sibling Discount (-15%) Eligible',
      'Direct WhatsApp Teacher Desk Access'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    parentName: 'Saima Khan',
    studentName: 'Zayd Khan (Age 7)',
    location: 'London, United Kingdom',
    course: 'Noorani Qaida & Tajweed',
    quote: 'My son Zayd struggled with Arabic letters before joining Taleem-ul-Quran Campus. Within 10 weeks with Ustadha Maryam, he finished Noorani Qaida and is now reciting Surah Al-Fatiha with flawless Makharij! Highly professional and trustworthy.',
    rating: 5
  },
  {
    id: 't2',
    parentName: 'Muhammad Tariq',
    studentName: 'Hamza & Ayesha',
    location: 'Houston, Texas, USA',
    course: 'Quran Reading & Daily Duas',
    quote: 'Living in the US, finding qualified, punctual Quran teachers with fluent English was tough until we found TQC Campus. The 1-on-1 focus and monthly progress reports keep us completely assured of our kids\' spiritual growth.',
    rating: 5
  },
  {
    id: 't3',
    parentName: 'Dr. Bilal Chaudhry',
    studentName: 'Self (Adult Learner)',
    location: 'Toronto, Canada',
    course: 'Quran Translation & Tafseer',
    quote: 'As a busy physician, the flexible night timings allowed me to connect deeply with the Quran after work. Qari Abdul Rahman\'s explanations of Tafseer are eye-opening. Truly a blessed platform.',
    rating: 5
  }
];

export const DAILY_VERSE: DailyVerse = {
  surah: 'Surah Al-Baqarah',
  surahNumber: 2,
  ayahNumber: 152,
  ayahArabic: 'فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ',
  ayahTranslation: '"So remember Me; I will remember you. And be grateful to Me and do not deny Me."',
  explanation: 'This divine verse reminds us that regular remembrance (Dhikr) and recitation of the Holy Quran establishes a direct connection with Allah, bringing peace and light into our daily homes.'
};

export const FAQS = [
  {
    q: 'How do online live 1-on-1 Quran classes work?',
    a: 'Once registered, you or your child will connect directly with your assigned qualified teacher via our interactive live classroom portal or Zoom/Skype. The teacher shares digital Quran pages, highlights pronunciation, and provides immediate individual feedback.'
  },
  {
    q: 'Can we request a female Quran teacher for sisters or young daughters?',
    a: 'Yes, absolutely! We have a distinguished team of certified female Alima Quran teachers specifically dedicated to female students and young children.'
  },
  {
    q: 'Is there a free trial class before paying any fees?',
    a: 'Yes! We offer a 100% free, no-obligation 2-day trial class so you can evaluate the teacher’s methodology and compatibility before committing to a monthly plan.'
  },
  {
    q: 'What if we need to reschedule a class due to illness or travel?',
    a: 'Classes can easily be rescheduled with 4-hour advance notice to your assigned teacher or via your student portal support desk.'
  },
  {
    q: 'What equipment is required for online Quran learning?',
    a: 'All you need is a stable internet connection and a laptop, tablet, or smartphone with audio capability.'
  }
];
