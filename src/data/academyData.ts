import { Course, FacultyMember, PricingPlan, Testimonial, DailyVerse, StudentCategory, WhyChooseItem, HowItWorksStep, BlogArticle, FAQItem } from '../types';

export const ACADEMY_INFO = {
  name: 'Taleem Ul Quran Campus',
  urduName: 'تعلیم القرآن آن لائن اکیڈمی',
  shortName: 'TQC Academy',
  tagline: 'Nurturing Hearts with Divine Quranic Knowledge Worldwide',
  arabicTagline: 'خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ',
  hadithTranslation: '"The best among you are those who learn the Quran and teach it." (Sahih Al-Bukhari 5027)',
  contact: {
    address: 'Taleem-ul-Quran Campus, Sector I-8/3, Main Boulevard, Islamabad, Pakistan',
    globalDesks: 'Regional Desk: London, UK | Texas, USA | Toronto, Canada | Sydney, Australia',
    phone: '+92 (370) 3022593',
    phoneFormatted: '+92 370 3022593',
    whatsapp: '+92 (370) 3022593',
    whatsappClean: '923703022593',
    email: 'taleemulquranonlineacademy2026@gmail.com',
    admissionsEmail: 'taleemulquranonlineacademy2026@gmail.com',
    supportEmail: 'taleemulquranonlineacademy2026@gmail.com',
    workingHours: '24/7 Global Live Classes (Monday - Sunday)',
    officeHours: 'Mon - Sun: 24 Hours Worldwide',
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
    badge: 'Foundation',
    description: 'The essential foundational course designed to teach children and adult beginners Arabic letter recognition, correct Makharij (pronunciation points), and fundamental reading rules required to recite the Holy Quran.',
    outcomes: [
      'Recognize all 28 Arabic letters in isolated, initial, medial, and final forms',
      'Master correct Makharij (points of articulation) for guttural and emphatic letters',
      'Understand Harkat (short vowels), Tanween, Sukoon, and Tashdeed',
      'Read compound Arabic words with confidence and natural rhythm'
    ],
    curriculum: [
      'Lesson 1-3: Single Letters & Pronunciation Accuracy (Makharij)',
      'Lesson 4-6: Compound Letters (Murakkabat) & Vowel Signs (Harkat)',
      'Lesson 7-9: Letters of Madd (Prolongation), Leen & Tanween Rules',
      'Lesson 10-14: Sukoon, Tashdeed, and Rules of Stopping (Waqf)'
    ],
    icon: 'BookOpen'
  },
  {
    id: 'quran-reading',
    title: 'Quran Reading (Nazra)',
    arabicTitle: 'تِلَاوَةُ الْقُرْآنِ الْكَرِيم (نَاظِرَہ)',
    category: 'Recitation',
    duration: '3 - 6 Months',
    ageGroup: 'Kids, Teens & Adults',
    level: 'Intermediate',
    badge: 'Essential',
    description: 'Fluent step-by-step recitation of the complete Holy Quran with proper accent, pace, and basic Tajweed rules under direct guidance of certified Qaris and Alimas.',
    outcomes: [
      'Develop smooth, confident, and melodious Quranic recitation',
      'Apply essential Tajweed rules naturally while reading verses',
      'Recognize Quranic symbols, pauses (Waqf), and Sajdah verses',
      'Complete full Nazra Khatam-e-Quran with personalized guidance'
    ],
    curriculum: [
      'Juz 1-5: Building Pace & Accuracy in Short Surahs',
      'Juz 6-15: Mastering Rhythmic Recitation & Smooth Transitions',
      'Juz 16-25: Advanced Pronunciation Polish & Long Verses',
      'Juz 26-30: Completion, Final Khatam & Recitation Certification'
    ],
    icon: 'Book'
  },
  {
    id: 'tajweed-masterclass',
    title: 'Quran with Tajweed Masterclass',
    arabicTitle: 'إِتْقَانُ التَّجْوِيد',
    category: 'Tajweed',
    duration: '4 - 8 Months',
    ageGroup: 'All Ages',
    level: 'Advanced',
    badge: 'Certified',
    description: 'An in-depth theoretical and practical study of classical Tajweed rules, including Noon Sakinah, Meem Sakinah, Qalqalah, Sifaat (characteristics), and Rules of Heavy/Light letters.',
    outcomes: [
      'Understand the classical rules of Tajweed systematically',
      'Master Ahkam-e-Noon Sakinah & Tanween (Izhar, Idgham, Iqlab, Ikhfa)',
      'Differentiate between Sifaat Lazimah and Aridhah',
      'Recite with the exact dialect and elegance of classical Qaris'
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
    ageGroup: 'Dedicated Students & Youth',
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
      'Daily Sabaqi: Daily revision of the last 5-10 pages',
      'Daily Manzil: Systematically reviewing older memorized Juz',
      'Monthly Exam: Comprehensive oral examination with academic board'
    ],
    icon: 'Award'
  },
  {
    id: 'islamic-studies',
    title: 'Islamic Studies & Daily Masnoon Duas',
    arabicTitle: 'الدِّرَاسَاتُ الإِسْلَامِيَّة وَالْأَدْعِيَة',
    category: 'Islamic Studies',
    duration: '12 - 16 Weeks',
    ageGroup: 'Kids & Youth',
    level: 'Beginner',
    badge: 'Character Building',
    description: 'Comprehensive Islamic character building covering Seerah of Prophet Muhammad ﷺ, daily prayers (Salah), purification (Taharah), essential Masnoon Duas, and Islamic manners (Adab).',
    outcomes: [
      'Perform Salah (Namaz) with complete posture, recitation, and understanding',
      'Memorize 40 daily Masnoon Duas (before eating, sleeping, travelling, etc.)',
      'Learn the inspiring life story (Seerah) of the Holy Prophet ﷺ',
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
    id: 'quran-tafseer',
    title: 'Quran Translation & Understanding (Tafseer)',
    arabicTitle: 'تَرْجَمَةٌ وَتَفْسِيرُ الْقُرْآن',
    category: 'Tafseer',
    duration: '6 - 12 Months',
    ageGroup: 'Teens & Adults',
    level: 'All Levels',
    badge: 'Spiritual Growth',
    description: 'Understand the divine message of Allah ﷻ through word-for-word translation, historical context (Asbab al-Nuzul), and practical life application of Quranic wisdom.',
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
    id: 'arabic-language',
    title: 'Quranic Arabic Language',
    arabicTitle: 'اللُّغَةُ الْعَرَبِيَّةُ لِلْقُرْآن',
    category: 'Language',
    duration: '6 Months',
    ageGroup: 'Teens & Adults',
    level: 'Intermediate',
    badge: 'Language',
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

export const STUDENT_CATEGORIES: StudentCategory[] = [
  {
    id: 'kids',
    title: 'Kids & Children',
    arabicTitle: 'الأَطْفَال',
    description: 'Engaging, interactive methods designed specifically for young minds (ages 4-9) with patience and digital visual aids.',
    icon: 'Baby',
    features: ['Gentle teaching pace', 'Gamified letter recognition', 'Friendly certified teachers']
  },
  {
    id: 'boys',
    title: 'Boys & Youth',
    arabicTitle: 'الْفِتْيَان',
    description: 'Mentorship and disciplined Quran recitation and Hifz coaching with dedicated male Qaris.',
    icon: 'Shield',
    features: ['Male Qari mentorship', 'Focus on Makharij & Tajweed', 'Flexible school-friendly timings']
  },
  {
    id: 'girls',
    title: 'Girls & Young Sisters',
    arabicTitle: 'الْفَتَيَات',
    description: 'Nurturing classes with certified female Alimas providing Tajweed and Islamic character lessons in a comfortable environment.',
    icon: 'Sparkles',
    features: ['Certified female teachers', '1-on-1 private screenboard', 'Duas & Islamic manners']
  },
  {
    id: 'men',
    title: 'Men & Brothers',
    arabicTitle: 'الرِّجَال',
    description: 'Tailored for busy working professionals and university students with evening and weekend flexibility.',
    icon: 'Briefcase',
    features: ['Flexible night/weekend slots', 'Fluent English/Urdu/Arabic', 'Fast-track recitation improvement']
  },
  {
    id: 'women',
    title: 'Women & Sisters',
    arabicTitle: 'النِّسَاء',
    description: '100% private classes conducted exclusively by qualified female Alimas with full modesty and privacy.',
    icon: 'Heart',
    features: ['Strictly female instructors', 'Safe & comfortable environment', 'Tafseer and Tajweed focus']
  },
  {
    id: 'adults',
    title: 'Adult Learners',
    arabicTitle: 'الْكِبَار',
    description: 'It is never too late to learn the Quran. Respectful, non-judgmental guidance adapted to adult learners.',
    icon: 'UserCheck',
    features: ['Patient, supportive attitude', 'Learn from zero without hesitation', 'Convenient home schedule']
  },
  {
    id: 'beginners',
    title: 'Complete Beginners',
    arabicTitle: 'الْمُبْتَدِئُون',
    description: 'Starting from single Arabic alphabet recognition and phonetic drills using Noorani Qaida.',
    icon: 'BookOpen',
    features: ['Alphabet recognition from scratch', 'Phonetic articulation drills', 'Step-by-step guidance']
  },
  {
    id: 'advanced',
    title: 'Advanced & Hifz',
    arabicTitle: 'الْمُتَقَدِّمُون',
    description: 'Intensive memorization, Qira\'at variations, and classical Tajweed rules for ambitious students.',
    icon: 'Award',
    features: ['Structured revision (Manzil)', 'Ijazah preparation', 'Rigorous Tajweed perfection']
  }
];

export const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    id: 'qualified-teachers',
    title: 'Qualified & Experienced Teachers',
    description: 'Graduates of prestigious Islamic seminaries with verified Ijazah and extensive teaching experience.',
    icon: 'GraduationCap'
  },
  {
    id: 'one-on-one',
    title: 'One-to-One Dedicated Attention',
    description: 'Each 30-minute session is private, ensuring your teacher focuses 100% on your recitation and pacing.',
    icon: 'UserCheck'
  },
  {
    id: 'flexible-timings',
    title: 'Flexible Class Timings 24/7',
    description: 'Choose any morning, afternoon, or evening time slot that fits your job, school, or family routine.',
    icon: 'Clock'
  },
  {
    id: 'learn-from-home',
    title: 'Online Classes From Home',
    description: 'Safe, comfortable online environment without commute stress, parking, or travel expenses.',
    icon: 'Home'
  },
  {
    id: 'authentic-tajweed',
    title: 'Quran With Authentic Tajweed',
    description: 'Correct articulation points (Makharij) and recitation rules taught meticulously from the first lesson.',
    icon: 'Sparkles'
  },
  {
    id: 'separate-classes',
    title: 'Dedicated Separate Classes',
    description: 'Qualified female Alimas exclusively assigned for sisters and young girls with complete modesty.',
    icon: 'ShieldCheck'
  },
  {
    id: 'personalized-pace',
    title: 'Personalized Learning Pace',
    description: 'Syllabus is tailored to each student’s memory and learning speed—never hurried or stressed.',
    icon: 'Sliders'
  },
  {
    id: 'free-demo',
    title: 'Free Trial / Demo Class',
    description: 'Attend 2 live trial sessions with no fees and no commitment required before enrolling.',
    icon: 'Gift'
  },
  {
    id: 'safe-environment',
    title: 'Safe Learning Environment',
    description: 'Respectful, supportive, and spiritually uplifting atmosphere reflecting noble Islamic values.',
    icon: 'HeartHandshake'
  },
  {
    id: 'progress-monitoring',
    title: 'Regular Progress Monitoring',
    description: 'Bi-weekly parental updates, homework tracking, and monthly evaluations to celebrate milestones.',
    icon: 'TrendingUp'
  }
];

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    step: 1,
    title: '1. Register Online',
    description: 'Submit our simple booking form with your contact details and preferred course.',
    icon: 'FileText'
  },
  {
    step: 2,
    title: '2. Book Your Free Demo',
    description: 'Our coordinator connects via WhatsApp/Email to confirm your preferred teacher and time slot.',
    icon: 'CalendarCheck'
  },
  {
    step: 3,
    title: '3. Choose Your Schedule',
    description: 'Attend your 2 free demo classes and choose how many days per week you wish to learn.',
    icon: 'Clock'
  },
  {
    step: 4,
    title: '4. Start Learning Quran',
    description: 'Begin regular 1-on-1 live classes with direct teacher support and digital workbooks.',
    icon: 'BookOpen'
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
    specialization: ['Advanced Tajweed', 'Quran Recitation', 'Qira\'at Rules'],
    languages: ['English', 'Urdu', 'Arabic'],
    bio: 'Renowned Qari holding authentic Ijazah. Has guided hundreds of international students to achieve flawless Quranic recitation.',
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
    bio: 'Dedicated female scholar specializing in educating young children and sisters. Renowned for her gentle, patient approach.',
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
    specialization: ['Hifz-ul-Quran', 'Memory Retention', 'Manzil Revision'],
    languages: ['English', 'Urdu', 'Pashto'],
    bio: 'Specialist in Quranic memorization strategy and consistent revision cycles. Supported dozens of students in completing full Hifz.',
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
    bio: 'Specializes in early childhood Quranic education using interactive visual screenboards and friendly encouragement.',
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
      'Digital Noorani Qaida & Quran PDFs',
      'Monthly Progress Report',
      '24/7 Student Desk & WhatsApp Support'
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
      'Free Tajweed & Qaida Workbooks',
      'Bi-Weekly Parent Teacher Updates',
      'Full Virtual Classroom Portal Access'
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
    quote: 'My son Zayd struggled with Arabic letters before joining Taleem Ul Quran Campus. Within 10 weeks with Ustadha Maryam, he finished Noorani Qaida and is now reciting Surah Al-Fatiha with proper Makharij! Highly professional and trustworthy.',
    rating: 5
  },
  {
    id: 't2',
    parentName: 'Muhammad Tariq',
    studentName: 'Hamza & Ayesha',
    location: 'Houston, Texas, USA',
    course: 'Quran Reading & Daily Duas',
    quote: 'Living in the US, finding punctual Quran teachers with fluent English was challenging until we found Taleem Ul Quran Campus. The 1-on-1 focus and monthly progress reports keep us completely assured of our kids\' spiritual growth.',
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

export const AUTHENTIC_DUAS = [
  {
    title: 'Dua for Seeking Beneficial Knowledge',
    arabic: 'رَّبِّ زِدْنِي عِلْمًا',
    transliteration: 'Rabbi zidni \'ilma',
    translation: '“My Lord, increase me in knowledge.”',
    reference: 'Surah Ta-Ha (20:114)'
  },
  {
    title: 'Dua for Ease in Tasks & Speech',
    arabic: 'رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي يَفْقَهُوا قَوْلِي',
    transliteration: 'Rabbish rah li sadri, wa yassir li amri, wahlul \'uqdatan min lisani, yafqahu qawli',
    translation: '“My Lord, expand for me my chest, and ease for me my task, and untie the knot from my tongue that they may understand my speech.”',
    reference: 'Surah Ta-Ha (20:25-28)'
  },
  {
    title: 'Dua for Parents',
    arabic: 'رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا',
    transliteration: 'Rabbir hamhuma kama rabbayani sagheera',
    translation: '“My Lord, have mercy upon them both as they brought me up when I was small.”',
    reference: 'Surah Al-Isra (17:24)'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'How do online live 1-on-1 Quran classes work?',
    answer: 'Once registered, you or your child connect directly with your assigned qualified teacher via our interactive live classroom portal or Zoom/Skype. The teacher shares digital Quran pages, highlights pronunciation, and provides immediate individual feedback.'
  },
  {
    id: 'faq-2',
    category: 'General',
    question: 'Do you offer a free demo or trial class?',
    answer: 'Yes! We offer a 100% free, no-obligation 2-day trial class so you can evaluate the teacher’s methodology and compatibility before committing to a monthly plan.'
  },
  {
    id: 'faq-3',
    category: 'Classes',
    question: 'What ages can join Taleem Ul Quran Campus?',
    answer: 'We accept students starting from age 4 for Noorani Qaida, up to teenagers, university students, working professionals, and elderly adults. Each age group receives customized pedagogical attention.'
  },
  {
    id: 'faq-4',
    category: 'Classes',
    question: 'Are classes available for adults and absolute beginners?',
    answer: 'Yes, absolutely. Many adult brothers and sisters join us with zero prior knowledge of Arabic letters. Our teachers are exceptionally patient and guide adults with dignity and encouragement.'
  },
  {
    id: 'faq-5',
    category: 'Teachers',
    question: 'Are separate female teachers available for sisters and girls?',
    answer: 'Yes, we have a dedicated department of certified female Alimas who teach sisters, young girls, and young boys in complete privacy and comfort.'
  },
  {
    id: 'faq-6',
    category: 'Classes',
    question: 'Can I choose my own class timing and days?',
    answer: 'Yes. Because we operate 24 hours a day, 7 days a week for students worldwide, you can pick any time slot that fits your schedule, whether early morning or evening.'
  },
  {
    id: 'faq-7',
    category: 'Fees & Tech',
    question: 'Which applications or devices are needed for classes?',
    answer: 'You can use any laptop, tablet, iPad, or smartphone with internet access. Classes take place via our web classroom portal, Zoom, or Skype according to your preference.'
  },
  {
    id: 'faq-8',
    category: 'Classes',
    question: 'Do you teach Tajweed rules systematically?',
    answer: 'Yes. Tajweed is integrated into every lesson from day one in Noorani Qaida, and we also offer a dedicated theoretical and practical Tajweed Masterclass for in-depth mastery.'
  },
  {
    id: 'faq-9',
    category: 'Classes',
    question: 'Do you offer structured Hifz-ul-Quran classes?',
    answer: 'Yes. Our Hifz program features 1-on-1 daily sessions with a dedicated Hafiz teacher, structured around the proven Sabaq (new lesson), Sabaqi (recent revision), and Manzil (old revision) method.'
  },
  {
    id: 'faq-10',
    category: 'Fees & Tech',
    question: 'How can I contact the academy administration?',
    answer: 'You can contact us 24/7 via WhatsApp at +92 (370) 3022593 or by email at taleemulquranonlineacademy2026@gmail.com. Our coordinator responds promptly.'
  }
];

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: 'importance-of-noorani-qaida',
    title: 'Why Noorani Qaida is the Essential Foundation for Quran Recitation',
    category: 'Quran Learning Tips',
    readTime: '4 min read',
    date: 'March 2026',
    summary: 'Understanding why beginning with proper phonetics, articulation points (Makharij), and vowel rules ensures lifelong accuracy in Quran reading.',
    content: [
      'Learning to recite the Holy Quran correctly begins with mastering the Arabic alphabet and its unique points of articulation. For non-Arabic speakers, jumping directly into long Quranic verses without understanding fundamental phonetic rules often leads to persistent pronunciation mistakes.',
      'Noorani Qaida provides a proven, step-by-step pedagogical ladder: starting with single isolated letters, moving to compound letters (Murakkabat), short vowels (Harkat), Tanween, Sukoon, and finally the rules of elongation (Madd).',
      'By dedicating 8 to 12 weeks to completing Noorani Qaida under the direct guidance of a qualified teacher, students build an unshakeable foundation that makes reading any Surah effortless and melodious.'
    ],
    authenticReferences: [
      '“Recite the Quran with measured recitation.” — Surah Al-Muzzammil (73:4)',
      '“The best among you are those who learn the Quran and teach it.” — Sahih Al-Bukhari 5027'
    ],
    author: 'Qari Abdul Rahman'
  },
  {
    id: 'understanding-tajweed-rules',
    title: 'A Beginner’s Guide to the 4 Rules of Noon Sakinah and Tanween',
    category: 'Tajweed',
    readTime: '6 min read',
    date: 'February 2026',
    summary: 'Clear explanation of Izhar, Idgham, Iqlab, and Ikhfa with examples from the Holy Quran.',
    content: [
      'One of the most foundational chapters in the science of Tajweed is the rules governing Noon Sakinah (نْ - a Noon with Sukoon) and Tanween (ــًــٍــٌ). Depending on which letter follows them, the pronunciation changes into one of four rules:',
      '1. Izhar (الإظهار - Clear Expression): When followed by the 6 throat letters (ء, هـ, ع, ح, غ, خ), the Noon is pronounced clearly without nasalization (Ghunnah).',
      '2. Idgham (الإدغام - Merging): When followed by the letters of يرملون (Yaa, Raa, Meem, Laam, Waw, Noon), the Noon merges into the following letter.',
      '3. Iqlab (الإقلاب - Conversion): When followed by the letter Baa (ب), the Noon is converted into a hidden Meem with Ghunnah.',
      '4. Ikhfa (الإخفاء - Concealment): When followed by the remaining 15 letters, the Noon sound is concealed with light nasalization.',
      'Practicing these rules with an expert Qari transforms one’s recitation into the authentic melodious cadence preserved since the time of the Prophet ﷺ.'
    ],
    authenticReferences: [
      'Classical Tajweed treatises (Al-Jazariyyah, Tuhfat al-Atfal)',
      'Narrated by Abdullah ibn Mas\'ud (RA): "Recite the Quran beautifully with Tajweed." — Sunan ad-Darimi'
    ],
    author: 'Ustadha Alima Fatima Zahra'
  },
  {
    id: 'hifz-memorization-habits',
    title: '5 Proven Daily Habits for Long-Term Quran Memorization (Hifz)',
    category: 'Quran',
    readTime: '5 min read',
    date: 'January 2026',
    summary: 'Practical spiritual and psychological advice for students and parents embarking on the sacred journey of Hifz-ul-Quran.',
    content: [
      'Memorizing the words of Allah ﷻ is one of the highest honors a believer can achieve. However, true Hifz is not simply about how fast one memorizes new verses; it is about retaining them with unwavering clarity over a lifetime.',
      '1. Consistency Over Quantity: Memorizing half a page consistently every single morning is far superior to memorizing three pages sporadically.',
      '2. The Golden Triad: Always divide your study into Sabaq (today’s new lesson), Sabaqi (recent 5-10 pages), and Manzil (daily review of older Juz).',
      '3. One Mushaf Rule: Always use the exact same print of the Holy Quran so that your visual memory can map where verses begin and end on each page.',
      '4. Recite in Daily Sunnah Prayers: Recite your newly memorized verses in Tahajjud and daily voluntary prayers to cement retention.',
      '5. Sincere Du\'a and Good Character: Knowledge is light from Allah, and light is preserved through humility, obedience, and prayer.'
    ],
    authenticReferences: [
      '“Keep refreshing your knowledge of the Quran, for by Him in Whose Hand is my soul, it slips away faster than camels from their ropes.” — Sahih Al-Bukhari 5033',
      '“It will be said to the companion of the Quran: Read and ascend, and recite as you used to recite in the world...” — Sunan Abi Dawud 1464'
    ],
    author: 'Hafiz Usman Tariq'
  },
  {
    id: 'nurturing-islamic-manners-in-children',
    title: 'How to Instill Love for the Quran and Daily Duas in Young Children',
    category: 'Parenting',
    readTime: '5 min read',
    date: 'January 2026',
    summary: 'Gentle, encouraging strategies for Muslim parents living in Western and diaspora communities.',
    content: [
      'Raising children in a fast-paced digital world requires patience, warmth, and setting a living example. When children see their parents reciting the Quran with devotion and joy, their innate fitrah naturally gravitates toward it.',
      '1. Make Quran Time a Joyful Routine: Never use Quran study as a punishment. Create a dedicated cozy space with soft lighting, warm smiles, and positive affirmations.',
      '2. Practice Daily Masnoon Duas Together: Recite the Dua before eating, before sleeping, and when leaving the house out loud as a family routine.',
      '3. Celebrate Milestones: When your child finishes their first Juz or completes Noorani Qaida, celebrate with a special family dinner and heartfelt congratulations.',
      '4. Connect with Dedicated Teachers: A patient, supportive teacher who praises effort builds lifelong confidence in young students.'
    ],
    authenticReferences: [
      '“Every one of you is a shepherd and every one of you is responsible for his flock.” — Sahih Al-Bukhari 7138',
      '“Teach your children the prayer when they are seven years old.” — Sunan Abi Dawud 495'
    ],
    author: 'Ustadha Alima Maryam Siddiqui'
  }
];
