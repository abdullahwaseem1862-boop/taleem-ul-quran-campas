import { Language, LanguageConfig } from '../types';

export const LANGUAGES: Record<Language, LanguageConfig> = {
  en: {
    code: 'en',
    name: 'English',
    nativeName: 'English',
    dir: 'ltr',
    flag: '🇬🇧',
    fontClass: 'font-sans'
  },
  ur: {
    code: 'ur',
    name: 'Urdu',
    nativeName: 'اردو',
    dir: 'rtl',
    flag: '🇵🇰',
    fontClass: 'font-urdu'
  },
  ar: {
    code: 'ar',
    name: 'Arabic',
    nativeName: 'العربية',
    dir: 'rtl',
    flag: '🇸🇦',
    fontClass: 'font-arabic'
  },
  bn: {
    code: 'bn',
    name: 'Bengali',
    nativeName: 'বাংলা',
    dir: 'ltr',
    flag: '🇧🇩',
    fontClass: 'font-bengali'
  },
  hi: {
    code: 'hi',
    name: 'Hindi',
    nativeName: 'हिन्दी',
    dir: 'ltr',
    flag: '🇮🇳',
    fontClass: 'font-hindi'
  },
  tr: {
    code: 'tr',
    name: 'Turkish',
    nativeName: 'Türkçe',
    dir: 'ltr',
    flag: '🇹🇷',
    fontClass: 'font-sans'
  }
};

export interface Translations {
  nav: {
    home: string;
    about: string;
    courses: string;
    teachers: string;
    howItWorks: string;
    pricing: string;
    blog: string;
    faq: string;
    contact: string;
    portal: string;
    bookDemo: string;
    prayerTimes: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    bookDemoBtn: string;
    exploreCoursesBtn: string;
    whatsappBtn: string;
    hadithQuote: string;
    hadithRef: string;
  };
  stats: {
    teachers: string;
    teachersDesc: string;
    students: string;
    studentsDesc: string;
    countries: string;
    countriesDesc: string;
    schedule: string;
    scheduleDesc: string;
  };
  categories: {
    heading: string;
    subheading: string;
    kids: string;
    boys: string;
    girls: string;
    men: string;
    women: string;
    adults: string;
    beginners: string;
    advanced: string;
  };
  whyUs: {
    heading: string;
    subheading: string;
    teachers: string;
    teachersDesc: string;
    oneToOne: string;
    oneToOneDesc: string;
    flexible: string;
    flexibleDesc: string;
    fromHome: string;
    fromHomeDesc: string;
    tajweed: string;
    tajweedDesc: string;
    separateClasses: string;
    separateClassesDesc: string;
    personalized: string;
    personalizedDesc: string;
    freeTrial: string;
    freeTrialDesc: string;
    safeEnv: string;
    safeEnvDesc: string;
    progress: string;
    progressDesc: string;
  };
  howItWorks: {
    heading: string;
    subheading: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    step4Title: string;
    step4Desc: string;
  };
  courses: {
    heading: string;
    subheading: string;
    viewAll: string;
    enrollBtn: string;
    detailsBtn: string;
    ageGroup: string;
    duration: string;
    level: string;
  };
  teachers: {
    heading: string;
    subheading: string;
    experience: string;
    specialization: string;
    languagesSpoken: string;
    bookWithTeacher: string;
    femaleTeacherNotice: string;
  };
  demoModal: {
    title: string;
    subtitle: string;
    fullName: string;
    age: string;
    country: string;
    whatsappNumber: string;
    email: string;
    course: string;
    preferredDays: string;
    preferredTime: string;
    teacherPreference: string;
    noPref: string;
    maleTeacher: string;
    femaleTeacher: string;
    message: string;
    submitBtn: string;
    submitWhatsAppBtn: string;
    submitting: string;
    successTitle: string;
    successDesc: string;
    closeBtn: string;
    guarantee: string;
  };
  footer: {
    aboutText: string;
    quickLinks: string;
    coursesHeading: string;
    contactHeading: string;
    copyright: string;
    privacy: string;
    terms: string;
    disclaimer: string;
    hours: string;
    address: string;
  };
  common: {
    viewDetails: string;
    bookFreeDemo: string;
    readMore: string;
    learnMore: string;
    contactUs: string;
    whatsappDirect: string;
    allCourses: string;
    certified: string;
    freeTrial2Days: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      courses: 'Courses',
      teachers: 'Teachers',
      howItWorks: 'How It Works',
      pricing: 'Fee Plans',
      blog: 'Articles',
      faq: 'FAQ',
      contact: 'Contact Us',
      portal: 'Virtual Classroom',
      bookDemo: 'Book Free Demo',
      prayerTimes: 'Prayer Times'
    },
    hero: {
      badge: 'Certified Online Quran Academy Worldwide',
      title: 'Learn the Holy Quran Online — Anytime, Anywhere',
      subtitle: 'Experience authentic 1-on-1 Quran education from home with qualified male and female teachers. Structured courses for kids, adults, brothers, and sisters.',
      bookDemoBtn: 'Book a Free Demo',
      exploreCoursesBtn: 'Explore Courses',
      whatsappBtn: 'Chat on WhatsApp',
      hadithQuote: '"The best among you are those who learn the Quran and teach it."',
      hadithRef: 'Sahih Al-Bukhari 5027'
    },
    stats: {
      teachers: 'Qualified Teachers',
      teachersDesc: 'Certified Qaris & Alimas with verified Ijazah',
      students: 'Students Enrolled',
      studentsDesc: 'From beginners to advanced Hifz graduates',
      countries: 'Countries Served',
      countriesDesc: 'UK, USA, Canada, Australia, Europe & Gulf',
      schedule: 'Flexible Timings',
      scheduleDesc: '24/7 global classes tailored to your timezone'
    },
    categories: {
      heading: 'Classes For Everyone',
      subheading: 'Tailored learning paths designed for every age group, gender, and proficiency level',
      kids: 'Young Children (Ages 4-9)',
      boys: 'Boys & Youth',
      girls: 'Girls & Young Sisters',
      men: 'Brothers & Adult Men',
      women: 'Sisters & Women Only',
      adults: 'Working Professionals',
      beginners: 'Absolute Beginners',
      advanced: 'Advanced Tajweed & Hifz'
    },
    whyUs: {
      heading: 'Why Choose Taleem Ul Quran Campus?',
      subheading: 'A committed, secure, and authentic online Quran learning environment for your whole family',
      teachers: 'Qualified & Experienced Teachers',
      teachersDesc: 'Graduates of renowned Islamic institutions with proven pedagogical expertise.',
      oneToOne: 'One-to-One Attention',
      oneToOneDesc: 'Dedicated 30-minute private sessions ensure complete teacher focus on every student.',
      flexible: 'Flexible Class Timings',
      flexibleDesc: 'Choose mornings, afternoons, or evenings that fit your work or school routine.',
      fromHome: 'Online Classes From Home',
      fromHomeDesc: 'Learn comfortably and safely without the hassle and cost of daily travel.',
      tajweed: 'Quran With Tajweed',
      tajweedDesc: 'Master articulation points (Makharij) and rhythm from day one.',
      separateClasses: 'Dedicated Separate Classes',
      separateClassesDesc: 'Female scholars exclusively dedicated to sisters and young girls with utmost privacy.',
      personalized: 'Personalized Learning Pace',
      personalizedDesc: 'Syllabus adapts to the student’s retention capacity, never rushed or overwhelmed.',
      freeTrial: 'Free Trial Demo Class',
      freeTrialDesc: 'Attend 2 no-obligation trial classes before making any payment commitment.',
      safeEnv: 'Safe Learning Environment',
      safeEnvDesc: 'Child-friendly, respectful atmosphere adhering to high Islamic values.',
      progress: 'Regular Progress Monitoring',
      progressDesc: 'Bi-weekly parental updates and monthly assessments to track measurable growth.'
    },
    howItWorks: {
      heading: 'How It Works',
      subheading: 'Start your sacred Quran journey in 4 simple and transparent steps',
      step1Title: '1. Register Online',
      step1Desc: 'Fill out our simple form with your course preference and contact details.',
      step2Title: '2. Book Your Free Demo',
      step2Desc: 'Our coordinator connects with you to confirm your preferred teacher and time slot.',
      step3Title: '3. Choose Your Schedule',
      step3Desc: 'Experience 2 live trial sessions and select days per week that suit your schedule.',
      step4Title: '4. Start Learning Quran',
      step4Desc: 'Begin your regular 1-on-1 sessions and receive continuous guidance and resources.'
    },
    courses: {
      heading: 'Our Comprehensive Quran Courses',
      subheading: 'From fundamental letter recognition to advanced Tajweed and complete memorization',
      viewAll: 'View All Courses',
      enrollBtn: 'Enroll Now',
      detailsBtn: 'View Curriculum',
      ageGroup: 'Suitable For',
      duration: 'Duration',
      level: 'Level'
    },
    teachers: {
      heading: 'Our Distinguished Faculty',
      subheading: 'Certified Qaris and qualified Alimas with authentic Ijazah and years of dedicated teaching experience',
      experience: 'Years Experience',
      specialization: 'Specialization',
      languagesSpoken: 'Languages',
      bookWithTeacher: 'Request Free Trial with Teacher',
      femaleTeacherNotice: 'Certified female teachers are available for all sisters and young children upon request.'
    },
    demoModal: {
      title: 'Book Your Free Demo Class',
      subtitle: 'Experience 2 free 1-on-1 trial classes with our qualified Quran teachers. No credit card required.',
      fullName: 'Full Name / Student Name',
      age: 'Age of Student',
      country: 'Country & City',
      whatsappNumber: 'WhatsApp Number (with Country Code)',
      email: 'Email Address',
      course: 'Course Interested In',
      preferredDays: 'Preferred Days',
      preferredTime: 'Preferred Time Slot (Your Timezone)',
      teacherPreference: 'Teacher Preference',
      noPref: 'No Preference',
      maleTeacher: 'Male Teacher (Qari)',
      femaleTeacher: 'Female Teacher (Alima)',
      message: 'Additional Notes / Learning Goals',
      submitBtn: 'Confirm Free Demo Request',
      submitWhatsAppBtn: 'Send via WhatsApp for Instant Booking',
      submitting: 'Submitting Request...',
      successTitle: 'Demo Request Received!',
      successDesc: 'JazakAllah Khair! Our academic coordinator will contact you via WhatsApp/Email within 12 hours to schedule your free demo.',
      closeBtn: 'Close Window',
      guarantee: '100% Free · No Payment Required · Privacy Respected'
    },
    footer: {
      aboutText: 'Taleem Ul Quran Campus is a premier international online Quran academy dedicated to spreading sacred Quranic knowledge with authentic Tajweed worldwide.',
      quickLinks: 'Quick Links',
      coursesHeading: 'Programs',
      contactHeading: 'Contact Desk',
      copyright: 'All rights reserved. Taleem Ul Quran Campus.',
      privacy: 'Privacy Policy',
      terms: 'Terms & Conditions',
      disclaimer: 'Academic Disclaimer',
      hours: '24/7 Global Live Sessions (Mon - Sun)',
      address: 'Sector I-8/3, Main Boulevard, Islamabad, Pakistan'
    },
    common: {
      viewDetails: 'View Details',
      bookFreeDemo: 'Book Free Demo',
      readMore: 'Read Article',
      learnMore: 'Learn More',
      contactUs: 'Contact Us',
      whatsappDirect: 'Chat on WhatsApp',
      allCourses: 'All Courses',
      certified: 'Certified Quran Academy',
      freeTrial2Days: '2 Days Free Trial'
    }
  },
  ur: {
    nav: {
      home: 'صفحہ اول',
      about: 'ہمارے متعلق',
      courses: 'کورسز',
      teachers: 'اساتذہ کرام',
      howItWorks: 'طریقہ کار',
      pricing: 'فیس پلانز',
      blog: 'مضامین و رہنمائی',
      faq: 'عام سوالات',
      contact: 'رابطہ کریں',
      portal: 'ورچوئل کلاس روم',
      bookDemo: 'مفت ڈیمو کلاس بک کریں',
      prayerTimes: 'اوقاتِ نماز'
    },
    hero: {
      badge: 'مستند بین الاقوامی آن لائن قرآن اکیڈمی',
      title: 'گھر بیٹھے قرآنِ کریم سیکھیں — آسان، مستند اور بہترین انداز میں',
      subtitle: 'گھر بیٹھے تجربہ کار اور سند یافتہ مرد و خواتین اساتذہ سے تجوید کے ساتھ قرآن مجید سیکھیں۔ بچوں، خواتین اور ہر عمر کے افراد کے لیے ون ٹو ون خصوصی کلاسز۔',
      bookDemoBtn: 'مفت ڈیمو کلاس بک کریں',
      exploreCoursesBtn: 'کورسز ملاحظہ فرمائیں',
      whatsappBtn: 'واٹس ایپ پر رابطہ کریں',
      hadithQuote: 'خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ — تم میں سے بہترین وہ ہے جس نے قرآن سیکھا اور سکھایا۔',
      hadithRef: 'صحیح البخاری: 5027'
    },
    stats: {
      teachers: 'مستند و باصلاحیت اساتذہ',
      teachersDesc: 'سند یافتہ قراء اور عالمات کی زیر نگرانی',
      students: 'کامیاب طلباء و طالبات',
      studentsDesc: 'قاعدہ سے لے کر حفظِ قرآن مکمل کرنے والے طلباء',
      countries: 'ممالک میں طلباء',
      countriesDesc: 'برطانیہ، امریکہ، کینیڈا، یورپ اور خلیجی ممالک',
      schedule: 'اپنی مرضی کے اوقات',
      scheduleDesc: '24 گھنٹے دستیاب لائیو کلاسز'
    },
    categories: {
      heading: 'ہر عمر اور ضرورت کے لیے کلاسز',
      subheading: 'بچوں، بچیوں، خواتین اور مرد حضرات کے لیے الگ اور محفوظ تعلیمی ماحول',
      kids: 'چھوٹے بچے (4 تا 9 سال)',
      boys: 'لڑکے اور نوجوان طلباء',
      girls: 'بچیاں اور نوجوان طالبات',
      men: 'مرد حضرات',
      women: 'خواتین کے لیے پردے کے ساتھ',
      adults: 'ملازمت پیشہ افراد',
      beginners: 'ابتدائی درجے کے طلباء',
      advanced: 'ایڈوانس تجوید و حفظ'
    },
    whyUs: {
      heading: 'تعلیم القرآن کیمپس کا انتخاب کیوں؟',
      subheading: 'آپ کے اور آپ کے بچوں کے لیے ایک قابلِ اعتماد اور پُرسکون اسلامی تعلیمی پلیٹ فارم',
      teachers: 'سند یافتہ اور باعمل اساتذہ',
      teachersDesc: 'معروف دینی جامعات کے فارغ التحصیل اور تدریس کے تجربہ کار اساتذہ۔',
      oneToOne: 'مکمل ون ٹو ون توجہ',
      oneToOneDesc: 'ہر طالب علم کے لیے 30 منٹ کی انفرادی کلاس تاکہ استاد کی مکمل توجہ میسر ہو۔',
      flexible: 'اوقاتِ تعلیم میں سہولت',
      flexibleDesc: 'صبح، دوپہر یا رات، اپنے روزمرہ شیڈول کے مطابق وقت منتخب کریں۔',
      fromHome: 'گھر بیٹھے محفوظ تعلیم',
      fromHomeDesc: 'گھر کے پرامن ماحول میں سفر اور اخراجات کے بغیر براہ راست سیکھیں۔',
      tajweed: 'تجوید و مخارج کی درستی',
      tajweedDesc: 'پہلے دن سے ہی حروف کے صحیح مخارج اور لحن کی درستگی پر خصوصی توجہ۔',
      separateClasses: 'خواتین کے لیے معلمات',
      separateClassesDesc: 'طالبات اور بچیوں کے لیے سند یافتہ معلمات کا مکمل انتظام۔',
      personalized: 'طالب علم کی رفتار کے مطابق',
      personalizedDesc: 'ہر طالب علم کی ذہنی صلاحیت اور یادداشت کے مطابق سبق دیا جاتا ہے۔',
      freeTrial: 'مفت ٹرائل کلاسز',
      freeTrialDesc: 'داخلے اور فیس کی ادائیگی سے قبل 2 دن کی مفت ٹرائل کلاس لے کر مطمئن ہوں۔',
      safeEnv: 'محفوظ اسلامی ماحول',
      safeEnvDesc: 'اسلامی اخلاق و آداب کی ترویج اور بچوں کی بہترین اخلاقی تربیت۔',
      progress: 'ماہانہ کارکردگی رپورٹ',
      progressDesc: 'والدین کو باقاعدہ پیش رفت اور کارکردگی سے آگاہ رکھا جاتا ہے۔'
    },
    howItWorks: {
      heading: 'شروع کرنے کا طریقہ',
      subheading: 'صرف 4 آسان مراحل میں قرآن پاک کی تعلیم کا آغاز فرمائیں',
      step1Title: '1. فارم پُر کریں',
      step1Desc: 'اپنی معلومات اور پسندیدہ کورس درج کریں۔',
      step2Title: '2. مفت ڈیمو کلاس کا وقت طے کریں',
      step2Desc: 'ہمارا کوآرڈینیٹر آپ کے ساتھ مناسب وقت اور استاد کا تعین کرے گا۔',
      step3Title: '3. شیڈول منتخب کریں',
      step3Desc: 'ٹرائل کلاس کے بعد ہفتہ وار دنوں اور وقت کا انتخاب کریں۔',
      step4Title: '4. تعلیم کا باقاعدہ آغاز',
      step4Desc: 'روزانہ کی بنیاد پر استاد کی رہنمائی میں قرآن پاک پڑھنا شروع کریں۔'
    },
    courses: {
      heading: 'ہمارے خصوصی قرآنی کورسز',
      subheading: 'نورانی قاعدہ سے لے کر تجوید، حفظ اور ترجمہ و تفسیر تک جامع نصاب',
      viewAll: 'تمام کورسز دیکھیں',
      enrollBtn: 'داخلہ لیں',
      detailsBtn: 'نصاب دیکھیں',
      ageGroup: 'موزوں عمر',
      duration: 'مدت',
      level: 'درجہ'
    },
    teachers: {
      heading: 'ہمارے معزز اساتذہ کرام',
      subheading: 'سند یافتہ قراء اور عالمات جو سالہا سال کے تجربے کے ساتھ تعلیم دے رہے ہیں',
      experience: 'سال کا تجربہ',
      specialization: 'مہارت',
      languagesSpoken: 'زبانیں',
      bookWithTeacher: 'استاد کے ساتھ مفت ٹرائل حاصل کریں',
      femaleTeacherNotice: 'خواتین اور بچیوں کی تدریس کے لیے قابل اور سند یافتہ معلمات دستیاب ہیں۔'
    },
    demoModal: {
      title: 'مفت ڈیمو کلاس بک کریں',
      subtitle: '2 دن کی مفت آزمائشی کلاس حاصل کریں۔ کوئی فیس یا کریڈٹ کارڈ درکار نہیں۔',
      fullName: 'طالب علم کا مکمل نام',
      age: 'عمر',
      country: 'ملک اور شہر',
      whatsappNumber: 'واٹس ایپ نمبر (ملکی کوڈ کے ساتھ)',
      email: 'ای میل ایڈریس',
      course: 'مطلوبہ کورس',
      preferredDays: 'پسندیدہ دن',
      preferredTime: 'پسندیدہ وقت (اپنے ٹائم زون کے مطابق)',
      teacherPreference: 'استاد کی ترجیح',
      noPref: 'کوئی ترجیح نہیں',
      maleTeacher: 'قاری صاحب (مرد استاد)',
      femaleTeacher: 'معلمہ / عالمہ (خاتون استاد)',
      message: 'کوئی اضافی نوٹ یا خواہش',
      submitBtn: 'درخواست جمع کروائیں',
      submitWhatsAppBtn: 'واٹس ایپ پر فوری بک کریں',
      submitting: 'درخواست بھیجی جا رہی ہے...',
      successTitle: 'درخواست موصول ہو گئی!',
      successDesc: 'جزاک اللہ خیر! ہمارا تعلیمی کوآرڈینیٹر اگلے 12 گھنٹوں کے اندر آپ سے واٹس ایپ یا ای میل پر رابطہ کرے گا۔',
      closeBtn: 'بند کریں',
      guarantee: '100٪ مفت · کوئی پیشگی فیس نہیں · مکمل رازداری'
    },
    footer: {
      aboutText: 'تعلیم القرآن کیمپس ایک بین الاقوامی آن لائن قرآن اکیڈمی ہے جو دنیا بھر میں گھر بیٹھے قرآنِ مجید کی مستند تعلیم فراہم کر رہی ہے۔',
      quickLinks: 'فوری لنکس',
      coursesHeading: 'کورسز',
      contactHeading: 'رابطہ',
      copyright: 'جملہ حقوق محفوظ ہیں۔ تعلیم القرآن کیمپس۔',
      privacy: 'رازداری کی پالیسی',
      terms: 'شرائط و ضوابط',
      disclaimer: 'تعلیمی ڈسکلیمر',
      hours: '24 گھنٹے لائیو کلاسز (پیر تا اتوار)',
      address: 'سیکٹر I-8/3، مین بلیوارڈ، اسلام آباد، پاکستان'
    },
    common: {
      viewDetails: 'تفصیلات دیکھیں',
      bookFreeDemo: 'مفت ڈیمو بک کریں',
      readMore: 'مضمون پڑھیں',
      learnMore: 'مزید جانیں',
      contactUs: 'ہم سے رابطہ کریں',
      whatsappDirect: 'واٹس ایپ پر چیٹ کریں',
      allCourses: 'تمام کورسز',
      certified: 'مستند آن لائن اکیڈمی',
      freeTrial2Days: '2 دن کا مفت ٹرائل'
    }
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'من نحن',
      courses: 'الدورات القرآنية',
      teachers: 'المعلمون والمعلمات',
      howItWorks: 'كيف نعمل',
      pricing: 'باقات الرسوم',
      blog: 'المقالات والفوائد',
      faq: 'الأسئلة الشائعة',
      contact: 'اتصل بنا',
      portal: 'الفصل الافتراضي',
      bookDemo: 'حجز حصة تجريبية مجانية',
      prayerTimes: 'مواقيت الصلاة'
    },
    hero: {
      badge: 'أكاديمية تعليم القرآن الكريم عبر الإنترنت',
      title: 'تعلّم القرآن الكريم عبر الإنترنت — في أي وقت ومن أي مكان',
      subtitle: 'تعلّم تلاوة القرآن الكريم وحفظه مع نخبة من المقرئين المجازين والمعلمات المتخصصات. دروس فردية مباشرة مخصصة للأطفال والكبار.',
      bookDemoBtn: 'حجز حصة تجريبية مجانية',
      exploreCoursesBtn: 'استكشف الدورات',
      whatsappBtn: 'تواصل عبر واتساب',
      hadithQuote: '«خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ»',
      hadithRef: 'صحيح البخاري: 5027'
    },
    stats: {
      teachers: 'معلمون مجازون',
      teachersDesc: 'مشايخ وقراء ومعلمات بسند متصل',
      students: 'طلاب مسجلون',
      studentsDesc: 'من القاعدة النورانية حتى ختم القرآن وحفظه',
      countries: 'دول حول العالم',
      countriesDesc: 'المملكة المتحدة، أمريكا، كندا، وأوروبا والخليج',
      schedule: 'أوقات مرنة',
      scheduleDesc: 'دروس على مدار 24 ساعة حسب منطقتك الزمنية'
    },
    categories: {
      heading: 'فصول مخصصة للجميع',
      subheading: 'مسارات تعليمية متقنة تناسب جميع الأعمار والمستويات في بيئة إسلامية راقية',
      kids: 'الأطفال الصغار (4-9 سنوات)',
      boys: 'الفتيان والناشئة',
      girls: 'الفتيات الصغيرات',
      men: 'الرجال والبالغون',
      women: 'النساء والأخوات (معلمات فقط)',
      adults: 'أصحاب المهن والمشاغل',
      beginners: 'المبتدئون من الصفر',
      advanced: 'المتقدمون في التجويد والقراءات'
    },
    whyUs: {
      heading: 'لماذا تختار أكاديمية تعليم القرآن؟',
      subheading: 'بيئة تعليمية قرآنية موثوقة وآمنة لك ولأبنائك',
      teachers: 'معلمون مؤهلون ومجازون',
      teachersDesc: 'حاصلون على إجازات في التجويد والقراءات مع خبرة تربوية واسعة.',
      oneToOne: 'اهتمام فردي خاص (1-على-1)',
      oneToOneDesc: 'حصة فردية خاصة مدتها 30 دقيقة تضمن تركيز المعلم الكامل على الطالب.',
      flexible: 'مرونة تامة في المواعيد',
      flexibleDesc: 'اختر الموعد الأنسب لك صباحاً أو مساءً حسب برنامجك اليومي.',
      fromHome: 'دروس من راحة منزلك',
      fromHomeDesc: 'تعلّم بأمان وراحة دون الحاجة للتنقل وتكاليف المواصلات.',
      tajweed: 'إتقان التجويد والمخارج',
      tajweedDesc: 'تدريب عملي دقيق على مخارج الحروف وأحكام التلاوة الصحيحة.',
      separateClasses: 'معلمات متخصصات للأخوات',
      separateClassesDesc: 'معلمات مجازات لتعليم الأخوات والبنات في خصوصية تامة.',
      personalized: 'مراعاة الفروق الفردية',
      personalizedDesc: 'منهج يواكب سرعة استيعاب الطالب وقدرته دون ضغط.',
      freeTrial: 'حصة تجريبية مجانية',
      freeTrialDesc: 'احصل على حصتين تجريبيتين مجاناً قبل الالتزام بدفع أي رسوم.',
      safeEnv: 'بيئة تربوية إسلامية',
      safeEnvDesc: 'غرس القيم والآداب الإسلامية وحب القرآن الكريم في نفوس الأبناء.',
      progress: 'متابعة دورية وتقارير مستمرة',
      progressDesc: 'تقارير أداء دورية توضح تقدم الطالب في الحفظ والتلاوة.'
    },
    howItWorks: {
      heading: 'كيفية البدء في التعلم',
      subheading: 'ابدأ رحلتك المباركة في 4 خطوات سهلة وميسرة',
      step1Title: '1. التسجيل',
      step1Desc: 'املأ نموذج التسجيل بالدورة المفضلة ومعلومات الاتصال.',
      step2Title: '2. موعد الحصة التجريبية',
      step2Desc: 'يقوم منسق الأكاديمية بتحديد المعلم والوقت المناسب لك.',
      step3Title: '3. اختيار الجدول الأسبوعي',
      step3Desc: 'بعد الحصة التجريبية، اختر عدد الحصص والأيام أسبوعياً.',
      step4Title: '4. بدء الحصص المنتظمة',
      step4Desc: 'ابدأ دراستك المباشرة واحصل على الكتب والمتابعة المستمرة.'
    },
    courses: {
      heading: 'دوراتنا القرآنية المتخصصة',
      subheading: 'من هجاء الحروف والقاعدة النورانية إلى التجويد المتقن وحفظ القرآن كاملاً',
      viewAll: 'عرض جميع الدورات',
      enrollBtn: 'التسجيل الآن',
      detailsBtn: 'تفاصيل المنهج',
      ageGroup: 'الفئة المستهدفة',
      duration: 'المدة المقدرة',
      level: 'المستوى'
    },
    teachers: {
      heading: 'هيئة التدريس المتميزة',
      subheading: 'مقرئون ومقرئات مجازون بسند متصل يتمتعون بالصبر والأسلوب التعليمي الحديث',
      experience: 'سنوات الخبرة',
      specialization: 'التخصص',
      languagesSpoken: 'اللغات',
      bookWithTeacher: 'طلب تجربة مجانية مع هذا المعلم',
      femaleTeacherNotice: 'تتوفر معلمات مجازات لتعليم الأخوات والفتيات الصغيرات.'
    },
    demoModal: {
      title: 'احجز حصتك التجريبية المجانية',
      subtitle: 'جرب حصتين مباشرتين مع معلمينا المؤهلين مجاناً تماماً وبدون أي التزام مالي.',
      fullName: 'اسم الطالب كاملاً',
      age: 'العمر',
      country: 'الدولة والمدينة',
      whatsappNumber: 'رقم واتساب (مع رمز الدولة)',
      email: 'البريد الإلكتروني',
      course: 'الدورة المطلوبة',
      preferredDays: 'الأيام المفضلة',
      preferredTime: 'الوقت المفضل (بتوقيتك المحلي)',
      teacherPreference: 'تفضيل المعلم',
      noPref: 'لا يوجد تفضيل',
      maleTeacher: 'معلم (قارئ)',
      femaleTeacher: 'معلمة (للأخوات والأطفال)',
      message: 'ملاحظات أو أهداف خاصة',
      submitBtn: 'تأكيد طلب التجربة المجانية',
      submitWhatsAppBtn: 'إرسال عبر واتساب للحجز الفوري',
      submitting: 'جاري الإرسال...',
      successTitle: 'تم استلام طلبك بنجاح!',
      successDesc: 'جزاكم الله خيراً! سيتواصل معكم منسق الأكاديمية عبر واتساب أو البريد الإلكتروني خلال 12 ساعة لتحديد موعد الحصة التجريبية.',
      closeBtn: 'إغلاق',
      guarantee: '100% مجاناً · بدون بطاقة بنكية · خصوصية تامة'
    },
    footer: {
      aboutText: 'أكاديمية تعليم القرآن هي منصة رائدة في تدريس القرآن الكريم وأحكام التجويد واللغة العربية عن بُعد للطلاب في جميع أنحاء العالم.',
      quickLinks: 'روابط سريعة',
      coursesHeading: 'البرامج',
      contactHeading: 'التواصل',
      copyright: 'جميع الحقوق محفوظة. أكاديمية تعليم القرآن.',
      privacy: 'سياسة الخصوصية',
      terms: 'الشروط والأحكام',
      disclaimer: 'إخلاء المسؤولية الأكاديمية',
      hours: 'حصص مباشرة على مدار 24 ساعة (الاثنين - الأحد)',
      address: 'قطاع I-8/3، إسلام آباد، باكستان'
    },
    common: {
      viewDetails: 'عرض التفاصيل',
      bookFreeDemo: 'حجز تجربة مجانية',
      readMore: 'قراءة المقال',
      learnMore: 'معرفة المزيد',
      contactUs: 'تواصل معنا',
      whatsappDirect: 'محادثة عبر واتساب',
      allCourses: 'كافة الدورات',
      certified: 'أكاديمية معتمدة',
      freeTrial2Days: 'تجربة مجانية لمدة يومين'
    }
  },
  bn: {
    nav: {
      home: 'হোম',
      about: 'আমাদের সম্পর্কে',
      courses: 'কোর্সসমূহ',
      teachers: 'শিক্ষকমণ্ডলী',
      howItWorks: 'পদ্ধতি',
      pricing: 'ফি প্ল্যান',
      blog: 'প্রবন্ধ ও দিকনির্দেশনা',
      faq: 'সাধারণ জিজ্ঞাসা',
      contact: 'যোগাযোগ',
      portal: 'ভার্চুয়াল ক্লাসরুম',
      bookDemo: 'ফ্রি ডেমো ক্লাস বুক করুন',
      prayerTimes: 'নামাজের সময়সূচী'
    },
    hero: {
      badge: 'আন্তর্জাতিক অনলাইন কুরআন একাডেমি',
      title: 'অনলাইনে পবিত্র কুরআন শিখুন — যে কোনো সময়, যে কোনো স্থানে',
      subtitle: 'অভিজ্ঞ ও সনদপ্রাপ্ত পুরুষ ও মহিলা শিক্ষকদের সাথে ঘরে বসেই বিশুদ্ধ তাজবীদ সহ কুরআনুল কারীম তিলাওয়াত ও মুখস্থ করুন। শিশু ও প্রাপ্তবয়স্কদের জন্য ওয়ান-টু-ওয়ান ক্লাস।',
      bookDemoBtn: 'ফ্রি ডেমো ক্লাস বুক করুন',
      exploreCoursesBtn: 'কোর্সসমূহ দেখুন',
      whatsappBtn: 'হোয়াটসঅ্যাপে যোগাযোগ',
      hadithQuote: '"তোমাদের মধ্যে সর্বোত্তম ব্যক্তি সে, যে নিজে কুরআন শিখে এবং অন্যকে শেখায়।"',
      hadithRef: 'সহিহ বুখারী: ৫০২৭'
    },
    stats: {
      teachers: 'যোগ্য শিক্ষকমণ্ডলী',
      teachersDesc: 'সনদপ্রাপ্ত ক্বারী ও আলেমা দ্বারা পরিচালিত',
      students: 'অধ্যয়নরত শিক্ষার্থী',
      studentsDesc: 'কায়েদা থেকে হিফজ সম্পন্নকারী ছাত্র-ছাত্রী',
      countries: 'বিশ্বের বিভিন্ন দেশে',
      countriesDesc: 'ইউকে, ইউএসএ, কানাডা, অস্ট্রেলিয়া ও মধ্যপ্রাচ্য',
      schedule: 'সুবিধাজনক সময়',
      scheduleDesc: 'আপনার সুবিধাজনক সময়ে ২৪/৭ লাইভ ক্লাস'
    },
    categories: {
      heading: 'সবার জন্য কুরআন শিক্ষা',
      subheading: 'প্রতিটি বয়স ও স্তরের শিক্ষার্থীদের জন্য ব্যক্তিগত ও নিরাপদ শিক্ষা পরিবেশ',
      kids: 'ছোট শিশুরা (৪-৯ বছর)',
      boys: 'ছেলে ও তরুণরা',
      girls: 'মেয়ে ও তরুণীরা',
      men: 'প্রাপ্তবয়স্ক পুরুষ',
      women: 'মহিলা ও বোনদের জন্য (মহিলা শিক্ষক)',
      adults: 'চাকরিজীবী ও পেশাজীবী',
      beginners: 'একদম নতুন শিক্ষার্থী',
      advanced: 'উন্নত তাজবীদ ও হিফজ'
    },
    whyUs: {
      heading: 'কেন তালিমুল কুরআন একাডেমি বেছে নেবেন?',
      subheading: 'আপনার ও আপনার পরিবারের জন্য একটি নির্ভরযোগ্য ও কল্যাণময় অনলাইন কুরআন শিক্ষা প্রতিষ্ঠান',
      teachers: 'সনদপ্রাপ্ত ও অভিজ্ঞ শিক্ষক',
      teachersDesc: 'নামকরা ইসলামি প্রতিষ্ঠান থেকে ডিগ্রিধারী ও দক্ষ শিক্ষকমণ্ডলী।',
      oneToOne: 'ওয়ান-টু-ওয়ান সম্পূর্ণ মনোযোগ',
      oneToOneDesc: 'প্রতিটি শিক্ষার্থীর জন্য ৩০ মিনিটের একক সেশন যেখানে শিক্ষক পূর্ণ মনোযোগ দেন।',
      flexible: 'সময়ের পূর্ণ স্বাধীনতা',
      flexibleDesc: 'সকাল, দুপুর বা রাত—আপনার সুবিধাজনক সময়ে ক্লাসের সময় নির্ধারণ করুন।',
      fromHome: 'ঘরে বসে নিরাপদ শিক্ষা',
      fromHomeDesc: 'যাতায়াতের ঝামেলা ছাড়াই ঘরের শান্ত পরিবেশে নিরাপদ শিক্ষা।',
      tajweed: 'বিশুদ্ধ তাজবীদ ও মাখরাজ',
      tajweedDesc: 'প্রথম দিন থেকেই সঠিক উচ্চারণ ও মাখরাজের ওপর বিশেষ গুরুত্ব।',
      separateClasses: 'বোনদের জন্য মহিলা শিক্ষিকা',
      separateClassesDesc: 'বোন ও ছোট মেয়েদের জন্য সম্পূর্ণ পর্দাসহই মহিলা শিক্ষিকা দ্বারা পাঠদান।',
      personalized: 'ব্যক্তিগত গতিতে শিক্ষা',
      personalizedDesc: 'শিক্ষার্থীর ধারণক্ষমতা অনুযায়ী পাঠদান, কোনো তাড়াহুড়ো নেই।',
      freeTrial: 'বিনামূল্যে ট্রায়াল ক্লাস',
      freeTrialDesc: 'কোনো ফি পরিশোধ করার আগেই ২ দিনের ফ্রি ট্রায়াল ক্লাসে অংশ নিন।',
      safeEnv: 'ইসলামি ও সম্মানজনক পরিবেশ',
      safeEnvDesc: 'শিশুদের নৈতিক চরিত্র গঠন ও সুন্নাহ অনুসরণের অনুপ্রেরণা।',
      progress: 'নিয়মিত অগ্রগতি পর্যবেক্ষণ',
      progressDesc: 'অভিভাবকদের নিয়মিত অগ্রগতি ও মাসিক মূল্যায়নের মাধ্যমে রিপোর্ট প্রদান।'
    },
    howItWorks: {
      heading: 'যেভাবে শুরু করবেন',
      subheading: 'সহজ ৪টি ধাপে আপনার পবিত্র কুরআন শিক্ষার যাত্রা শুরু করুন',
      step1Title: '১. অনলাইনে নিবন্ধন করুন',
      step1Desc: 'পছন্দের কোর্স ও যোগাযোগের তথ্য দিয়ে সহজ ফর্মটি পূরণ করুন।',
      step2Title: '২. ফ্রি ডেমো নির্ধারণ করুন',
      step2Desc: 'আমাদের সমন্বয়কারী আপনার পছন্দের সময় ও শিক্ষক নিশ্চিত করবেন।',
      step3Title: '৩. সময়সূচী বেছে নিন',
      step3Desc: '২টি ট্রায়াল ক্লাস সম্পন্ন করে আপনার সুবিধাজনক সাপ্তাহিক দিন নির্ধারণ করুন।',
      step4Title: '৪. নিয়মিত কুরআন শিক্ষা শুরু',
      step4Desc: 'শিক্ষকের তত্ত্বাবধানে নিয়মিত ক্লাসে অংশ নিন ও সমৃদ্ধ হোন।'
    },
    courses: {
      heading: 'আমাদের বিশেষায়িত কুরআন কোর্সসমূহ',
      subheading: 'নূরানী কায়েদা থেকে শুরু করে তাজবীদ, হিফজ এবং কুরআন অনুবাদ ও তাফসীর',
      viewAll: 'সকল কোর্স দেখুন',
      enrollBtn: 'ভর্তি হন',
      detailsBtn: 'সিলেবাস দেখুন',
      ageGroup: 'উপযুক্ত বয়স',
      duration: 'সময়কাল',
      level: 'স্তর'
    },
    teachers: {
      heading: 'আমাদের সম্মানিত শিক্ষকমণ্ডলী',
      subheading: 'সনদপ্রাপ্ত ক্বারী ও আলেমা যারা ধৈর্য ও ভালোবাসার সাথে পাঠদান করেন',
      experience: 'বছরের অভিজ্ঞতা',
      specialization: 'বিশেষত্ব',
      languagesSpoken: 'ভাষা',
      bookWithTeacher: 'এই শিক্ষকের সাথে ট্রায়াল ক্লাস চান',
      femaleTeacherNotice: 'বোন ও ছোট মেয়েদের জন্য দক্ষ মহিলা শিক্ষিকা সার্বক্ষণিক উপলব্ধ।'
    },
    demoModal: {
      title: 'ফ্রি ডেমো ক্লাস বুক করুন',
      subtitle: 'আমাদের দক্ষ শিক্ষকদের সাথে ২ দিনের ফ্রি ট্রায়াল ক্লাসের অভিজ্ঞতা নিন। কোনো ফি প্রয়োজন নেই।',
      fullName: 'শিক্ষার্থীর পূর্ণ নাম',
      age: 'বয়স',
      country: 'দেশ ও শহর',
      whatsappNumber: 'হোয়াটসঅ্যাপ নম্বর (কান্ট্রি কোড সহ)',
      email: 'ইমেইল ঠিকানা',
      course: 'আগ্রহী কোর্স',
      preferredDays: 'পছন্দের দিনসমূহ',
      preferredTime: 'পছন্দের সময় (আপনার টাইমজোন)',
      teacherPreference: 'শিক্ষক পছন্দ',
      noPref: 'কোনো বাধ্যবাধকতা নেই',
      maleTeacher: 'পুরুষ শিক্ষক (ক্বারী সাহেব)',
      femaleTeacher: 'মহিলা শিক্ষিকা (বোন ও শিশুদের জন্য)',
      message: 'অতিরিক্ত তথ্য বা লক্ষ্য',
      submitBtn: 'অনুরোধ জমা দিন',
      submitWhatsAppBtn: 'হোয়াটসঅ্যাপে তাৎক্ষণিক বুক করুন',
      submitting: 'জমা হচ্ছে...',
      successTitle: 'আপনার অনুরোধ সফলভাবে গৃহীত হয়েছে!',
      successDesc: 'জাযাকুমুল্লাহু খাইরান! আমাদের সমন্বয়কারী আগামী ১২ ঘণ্টার মধ্যে হোয়াটসঅ্যাপ বা ইমেইলের মাধ্যমে যোগাযোগ করবেন।',
      closeBtn: 'বন্ধ করুন',
      guarantee: '১০০% ফ্রি · কোনো আগাম ফি নেই · গোপনীয়তা সুরক্ষিত'
    },
    footer: {
      aboutText: 'তালিমুল কুরআন ক্যাম্পাস বিশ্বজুড়ে ঘরে বসে বিশুদ্ধ তাজবীদ সহ পবিত্র কুরআন শিক্ষার একটি প্রিমিয়াম অনলাইন একাডেমি।',
      quickLinks: 'দ্রুত লিংক',
      coursesHeading: 'কোর্সসমূহ',
      contactHeading: 'যোগাযোগ',
      copyright: 'সর্বস্বত্ব সংরক্ষিত। তালিমুল কুরআন ক্যাম্পাস।',
      privacy: 'প্রাইভেসি পলিসি',
      terms: 'শর্তাবলী',
      disclaimer: 'একাডেমিক ডিসক্লেইমার',
      hours: '২৪/৭ লাইভ সেশন (সোম - রবি)',
      address: 'সেক্টর আই-৮/৩, ইসলামাবাদ, পাকিস্তান'
    },
    common: {
      viewDetails: 'বিস্তারিত দেখুন',
      bookFreeDemo: 'ফ্রি ডেমো বুক করুন',
      readMore: 'প্রবন্ধ পড়ুন',
      learnMore: 'আরো জানুন',
      contactUs: 'যোগাযোগ করুন',
      whatsappDirect: 'হোয়াটসঅ্যাপ চ্যাট',
      allCourses: 'সব কোর্স',
      certified: 'সনদপ্রাপ্ত একাডেমি',
      freeTrial2Days: '২ দিনের ফ্রি ট্রায়াল'
    }
  },
  hi: {
    nav: {
      home: 'होम',
      about: 'हमारे बारे में',
      courses: 'कोर्सेस',
      teachers: 'शिक्षक',
      howItWorks: 'कार्यप्रणाली',
      pricing: 'फीस योजनाएं',
      blog: 'लेख व मार्गदर्शन',
      faq: 'सामान्य प्रश्न',
      contact: 'संपर्क करें',
      portal: 'वर्चुअल क्लासरूम',
      bookDemo: 'मुफ्त डेमो क्लास बुक करें',
      prayerTimes: 'नमाज़ के औक़ात'
    },
    hero: {
      badge: 'प्रमाणित अंतर्राष्ट्रीय ऑनलाइन क़ुरआन अकादमी',
      title: 'ऑनलाइन पवित्र कुरआन सीखें — कभी भी, कहीं भी',
      subtitle: 'घर बैठे प्रमाणित कारी व आलिमा के साथ शुद्ध तजवीद से कुरआन मजीद पढ़ना व हिफ़्ज़ करना सीखें। बच्चों व बड़ों के लिए विशेष वन-टू-वन कक्षाएं।',
      bookDemoBtn: 'मुफ्त डेमो क्लास बुक करें',
      exploreCoursesBtn: 'कोर्सेस देखें',
      whatsappBtn: 'व्हाट्सएप पर बात करें',
      hadithQuote: '"तुम में सबसे बेहतरीन वह है जिसने क़ुरआन सीखा और दूसरों को सिखाया।"',
      hadithRef: 'सहीह अल-बुखारी: 5027'
    },
    stats: {
      teachers: 'योग्य शिक्षकगण',
      teachersDesc: 'प्रमाणित कारी व आलिमा के मार्गदर्शन में',
      students: 'नामांकित छात्र',
      studentsDesc: 'क़ायदा से लेकर हिफ़्ज़ पूरा करने वाले छात्र',
      countries: 'देशों में विद्यार्थी',
      countriesDesc: 'ब्रिटेन, अमेरिका, कनाडा, यूरोप व खाड़ी देश',
      schedule: 'लचीला समय',
      scheduleDesc: 'आपके समय के अनुसार 24/7 लाइव कक्षाएं'
    },
    categories: {
      heading: 'सभी के लिए कुरआन शिक्षा',
      subheading: 'हर उम्र व स्तर के शिक्षार्थियों के लिए सुरक्षित व व्यक्तिगत शिक्षण व्यवस्था',
      kids: 'छोटे बच्चे (4-9 वर्ष)',
      boys: 'लड़के व युवा',
      girls: 'लड़कियां व बहनें',
      men: 'पुरुष व वयस्क',
      women: 'महिलाओं के लिए (महिला शिक्षिका)',
      adults: 'कामकाजी पेशेवर',
      beginners: 'शुरुआती शिक्षार्थी',
      advanced: 'उन्नत तजवीद व हिफ़्ज़'
    },
    whyUs: {
      heading: 'तालीम उल क़ुरआन कैंपस ही क्यों चुनें?',
      subheading: 'आपके और आपके परिवार के लिए एक विश्वसनीय व प्रामाणिक ऑनलाइन क़ुरआन अकादमी',
      teachers: 'प्रमाणित व अनुभवी शिक्षक',
      teachersDesc: 'प्रतिष्ठित इस्लामी संस्थानों से डिग्री प्राप्त व शिक्षण में निपुण।',
      oneToOne: 'वन-टू-वन व्यक्तिगत ध्यान',
      oneToOneDesc: 'प्रत्येक विद्यार्थी के लिए 30 मिनट का विशेष समय जिसमें शिक्षक का पूरा ध्यान रहता है।',
      flexible: 'सुविधाजनक समय सारणी',
      flexibleDesc: 'सुबह, दोपहर या रात—अपनी दिनचर्या के अनुसार समय चुनें।',
      fromHome: 'घर बैठे सुरक्षित शिक्षा',
      fromHomeDesc: 'यात्रा के बिना घर के शांत वातावरण में सुरक्षित अध्ययन।',
      tajweed: 'शुद्ध तजवीद व मखारिज',
      tajweedDesc: 'पहले दिन से ही सही उच्चारण और मखारिज पर विशेष बल।',
      separateClasses: 'बहनों के लिए महिला शिक्षिकाएं',
      separateClassesDesc: 'बहनों और छोटी बच्चियों के लिए समर्पित महिला आलिमा।',
      personalized: 'विद्यार्थी की गति के अनुसार',
      personalizedDesc: 'विद्यार्थी की क्षमता के अनुकूल बिना किसी दबाव के पढ़ाई।',
      freeTrial: 'निःशुल्क ट्रायल कक्षा',
      freeTrialDesc: 'किसी भी शुल्क भुगतान से पहले 2 दिनों की मुफ्त ट्रायल कक्षा लें।',
      safeEnv: 'सुरक्षित इस्लामी वातावरण',
      safeEnvDesc: 'बच्चों में इस्लामी शिष्टाचार व नैतिक मूल्यों का विकास।',
      progress: 'नियमित प्रगति रिपोर्ट',
      progressDesc: 'माता-पिता को छात्र की प्रगति की नियमित जानकारी दी जाती है।'
    },
    howItWorks: {
      heading: 'शुरुआत कैसे करें',
      subheading: 'सरल 4 चरणों में अपनी पवित्र क़ुरआन सीखने की यात्रा प्रारंभ करें',
      step1Title: '1. ऑनलाइन पंजीकरण',
      step1Desc: 'अपनी जानकारी व पसंदीदा कोर्स का चयन करें।',
      step2Title: '2. डेमो क्लास तय करें',
      step2Desc: 'हमारे समन्वयक आपके पसंदीदा समय व शिक्षक का निर्धारण करेंगे।',
      step3Title: '3. शेड्यूल चुनें',
      step3Desc: '2 ट्रायल कक्षाओं के बाद साप्ताहिक दिन व समय तय करें।',
      step4Title: '4. नियमित पढ़ाई शुरू',
      step4Desc: 'शिक्षक के मार्गदर्शन में नियमित कक्षाएं प्रारंभ करें।'
    },
    courses: {
      heading: 'हमारे प्रमुख क़ुरआनी कोर्सेस',
      subheading: 'नूरानी क़ायदा से लेकर तजवीद, हिफ़्ज़ और तफ़सीर तक संपूर्ण पाठ्यक्रम',
      viewAll: 'सभी कोर्सेस देखें',
      enrollBtn: 'प्रवेश लें',
      detailsBtn: 'सिलेबस देखें',
      ageGroup: 'उपयुक्त आयु',
      duration: 'अवधि',
      level: 'स्तर'
    },
    teachers: {
      heading: 'हमारे सम्मानित शिक्षक',
      subheading: 'प्रमाणित कारी और आलिमा जो धैर्य और आधुनिक शिक्षण शैली के साथ पढ़ाते हैं',
      experience: 'वर्षों का अनुभव',
      specialization: 'विशेषज्ञता',
      languagesSpoken: 'भाषाएं',
      bookWithTeacher: 'इस शिक्षक के साथ मुफ्त ट्रायल लें',
      femaleTeacherNotice: 'बहनों और छोटी बच्चियों के लिए समर्पित महिला शिक्षिकाएं उपलब्ध हैं।'
    },
    demoModal: {
      title: 'मुफ्त डेमो क्लास बुक करें',
      subtitle: 'प्रमाणित शिक्षकों के साथ 2 दिनों की मुफ्त ट्रायल क्लास का अनुभव लें। कोई शुल्क आवश्यक नहीं।',
      fullName: 'विद्यार्थी का पूरा नाम',
      age: 'आयु',
      country: 'देश व शहर',
      whatsappNumber: 'व्हाट्सएप नंबर (देश कोड सहित)',
      email: 'ईमेल पता',
      course: 'इच्छित कोर्स',
      preferredDays: 'पसंदीदा दिन',
      preferredTime: 'पसंदीदा समय (आपका टाइमज़ोन)',
      teacherPreference: 'शिक्षक प्राथमिकता',
      noPref: 'कोई प्राथमिकता नहीं',
      maleTeacher: 'कारी साहब (पुरुष शिक्षक)',
      femaleTeacher: 'आलिमा (महिला शिक्षिका)',
      message: 'अतिरिक्त विवरण या लक्ष्य',
      submitBtn: 'अनुरोध दर्ज करें',
      submitWhatsAppBtn: 'व्हाट्सएप पर तुरंत बुक करें',
      submitting: 'अनुरोध भेजा जा रहा है...',
      successTitle: 'अनुरोध प्राप्त हुआ!',
      successDesc: 'जज़ाकल्लाह ख़ैर! हमारे समन्वयक 12 घंटे के भीतर व्हाट्सएप या ईमेल द्वारा संपर्क करेंगे।',
      closeBtn: 'बंद करें',
      guarantee: '100% मुफ्त · कोई कार्ड आवश्यक नहीं · पूर्ण गोपनीयता'
    },
    footer: {
      aboutText: 'तालीम उल क़ुरआन कैंपस विश्व भर में घर बैठे शुद्ध तजवीद के साथ क़ुरआन मजीद की शिक्षा प्रदान करने वाली एक प्रतिष्ठित ऑनलाइन अकादमी है।',
      quickLinks: 'त्वरित लिंक',
      coursesHeading: 'कोर्सेस',
      contactHeading: 'संपर्क',
      copyright: 'सर्वाधिकार सुरक्षित। तालीम उल क़ुरआन कैंपस।',
      privacy: 'गोपनीयता नीति',
      terms: 'नियम व शर्तें',
      disclaimer: 'अकादमिक अस्वीकरण',
      hours: '24/7 लाइव सत्र (सोम - रवि)',
      address: 'सेक्टर I-8/3, इस्लामाबाद, पाकिस्तान'
    },
    common: {
      viewDetails: 'विवरण देखें',
      bookFreeDemo: 'मुफ्त डेमो बुक करें',
      readMore: 'लेख पढ़ें',
      learnMore: 'और जानें',
      contactUs: 'संपर्क करें',
      whatsappDirect: 'व्हाट्सएप चैट',
      allCourses: 'सभी कोर्सेस',
      certified: 'प्रमाणित अकादमी',
      freeTrial2Days: '2 दिन का मुफ्त ट्रायल'
    }
  },
  tr: {
    nav: {
      home: 'Ana Sayfa',
      about: 'Hakkımızda',
      courses: 'Dersler',
      teachers: 'Eğitmenler',
      howItWorks: 'Nasıl Çalışır?',
      pricing: 'Ücretler',
      blog: 'Makaleler',
      faq: 'S.S.S.',
      contact: 'İletişim',
      portal: 'Canlı Sınıf',
      bookDemo: 'Ücretsiz Demo Dersi',
      prayerTimes: 'Namaz Vakitleri'
    },
    hero: {
      badge: 'Uluslararası Sertifikalı Online Kur\'an Akademisi',
      title: 'Kutsal Kur\'an\'ı Çevrimiçi Öğrenin — Her Zaman, Her Yerde',
      subtitle: 'Sertifikalı bay ve bayan hocalarımızla evinizin konforunda bire bir Tecvid, Kıraat ve Hıfz dersleri alın. Çocuklar ve yetişkinler için özel programlar.',
      bookDemoBtn: 'Ücretsiz Demo Dersi Alın',
      exploreCoursesBtn: 'Dersleri İnceleyin',
      whatsappBtn: 'WhatsApp\'tan Ulaşın',
      hadithQuote: '"Sizin en hayırlınız, Kur\'an\'ı öğrenen ve öğretendir."',
      hadithRef: 'Sahih-i Buhari: 5027'
    },
    stats: {
      teachers: 'Nitelikli Hocalar',
      teachersDesc: 'İcazetli Kari ve Alimler rehberliğinde',
      students: 'Kayıtlı Öğrenci',
      studentsDesc: 'Elif-Ba\'dan Hafızlığa kadar mezunlarımız',
      countries: 'Ülkede Öğrenciler',
      countriesDesc: 'İngiltere, ABD, Kanada, Avrupa ve Körfez',
      schedule: 'Esnek Saatler',
      scheduleDesc: 'Saat diliminize uygun 7/24 canlı dersler'
    },
    categories: {
      heading: 'Her Yaşa Uygun Kur\'an Sınıfları',
      subheading: 'Çocuklar, gençler ve yetişkinler için özel olarak tasarlanmış eğitim programları',
      kids: 'Küçük Çocuklar (4-9 Yaş)',
      boys: 'Erkek Çocuklar & Gençler',
      girls: 'Kız Çocuklar & Genç Kızlar',
      men: 'Erkekler & Yetişkinler',
      women: 'Kadınlar & Hanımlar (Bayan Hoca)',
      adults: 'Çalışan Profesyoneller',
      beginners: 'Sıfırdan Başlayanlar',
      advanced: 'İleri Seviye Tecvid & Hıfz'
    },
    whyUs: {
      heading: 'Neden Taleem Ul Quran Campus?',
      subheading: 'Aileniz için güvenilir, saygın ve özverili bir Kur\'an eğitim ortamı',
      teachers: 'Nitelikli ve Deneyimli Hocalar',
      teachersDesc: 'Saygın İslami üniversitelerden mezun ve pedagojik formasyona sahip.',
      oneToOne: 'Bire Bir Özel İlgi',
      oneToOneDesc: 'Her öğrenciye özel 30 dakikalık oturumla tam öğretmen odaklanması.',
      flexible: 'Esnek Ders Saatleri',
      flexibleDesc: 'Sabah, öğle veya akşam—kendi günlük programınıza uygun saat seçimi.',
      fromHome: 'Evden Çevrimiçi Eğitim',
      fromHomeDesc: 'Ulaşım zahmeti olmadan evinizin huzurunda güvenli öğrenim.',
      tajweed: 'Tecvid ve Mahreç Kuralları',
      tajweedDesc: 'İlk günden itibaren doğru harf telaffuzu ve akıcı kıraat.',
      separateClasses: 'Hanımlara Özel Bayan Hocalar',
      separateClassesDesc: 'Hanım kardeşlerimiz ve küçük kızlarımız için mahremiyete uygun bayan hocalar.',
      personalized: 'Bireysel Öğrenme Hızı',
      personalizedDesc: 'Öğrencinin anlama kapasitesine göre acele etmeden planlanan müfredat.',
      freeTrial: 'Ücretsiz Deneme Dersi',
      freeTrialDesc: 'Herhangi bir ödeme yapmadan önce 2 günlük ücretsiz deneme dersine katılın.',
      safeEnv: 'Güvenli İslami Ortam',
      safeEnvDesc: 'Çocukların ahlaki gelişimini destekleyen saygılı bir atmosfer.',
      progress: 'Düzenli İlerleme Raporu',
      progressDesc: 'Velilere iki haftada bir ve aylık olarak iletilen gelişim raporları.'
    },
    howItWorks: {
      heading: 'Nasıl Başlanır?',
      subheading: '4 kolay adımda Kur\'an-ı Kerim öğrenmeye başlayın',
      step1Title: '1. Çevrimiçi Kayıt',
      step1Desc: 'Tercih ettiğiniz dersi ve iletişim bilgilerinizi girin.',
      step2Title: '2. Ücretsiz Deneme Belirleyin',
      step2Desc: 'Eğitim koordinatörümüz sizin için en uygun hoca ve saati ayarlar.',
      step3Title: '3. Ders Günlerini Seçin',
      step3Desc: 'Deneme dersinden sonra haftalık ders günlerinizi ve saatlerinizi belirleyin.',
      step4Title: '4. Derslere Başlayın',
      step4Desc: 'Bire bir canlı oturumlarla Kur\'an öğrenme yolculuğunuza başlayın.'
    },
    courses: {
      heading: 'Kapsamlı Kur\'an Derslerimiz',
      subheading: 'Elif-Ba temelinden ileri seviye Tecvid, Hıfz ve Tefsire kadar',
      viewAll: 'Tüm Dersleri Gör',
      enrollBtn: 'Kayıt Ol',
      detailsBtn: 'Müfredatı Gör',
      ageGroup: 'Uygun Yaş',
      duration: 'Süre',
      level: 'Seviye'
    },
    teachers: {
      heading: 'Değerli Eğitmen Kadromuz',
      subheading: 'İcazetli Kari ve Alim hocalarımız sabır ve modern eğitim metotlarıyla hizmetinizde',
      experience: 'Yıl Deneyim',
      specialization: 'Uzmanlık',
      languagesSpoken: 'Diller',
      bookWithTeacher: 'Bu Hocayla Ücretsiz Deneme İste',
      femaleTeacherNotice: 'Hanımlar ve küçük kız çocukları için bayan hocalarımız hazırdır.'
    },
    demoModal: {
      title: 'Ücretsiz Demo Dersi Ayırın',
      subtitle: 'Sertifikalı hocalarımızla 2 günlük ücretsiz deneme dersine katılın. Kredi kartı gerekmez.',
      fullName: 'Öğrencinin Adı Soyadı',
      age: 'Yaş',
      country: 'Ülke ve Şehir',
      whatsappNumber: 'WhatsApp Numarası (Ülke koduyla)',
      email: 'E-posta Adresi',
      course: 'İlgilendiğiniz Ders',
      preferredDays: 'Tercih Edilen Günler',
      preferredTime: 'Tercih Edilen Saat (Saat Diliminiz)',
      teacherPreference: 'Hoca Tercihi',
      noPref: 'Fark Etmez',
      maleTeacher: 'Erkek Hoca (Kari)',
      femaleTeacher: 'Bayan Hoca (Hanımlar için)',
      message: 'Ek Bilgi / Hedefler',
      submitBtn: 'Ücretsiz Deneme Talebini Gönder',
      submitWhatsAppBtn: 'Anında WhatsApp Üzerinden Gönder',
      submitting: 'Gönderiliyor...',
      successTitle: 'Talebiniz Alındı!',
      successDesc: 'Teşekkür ederiz! Koordinatörümüz 12 saat içinde WhatsApp veya e-posta yoluyla sizinle iletişime geçecektir.',
      closeBtn: 'Kapat',
      guarantee: '%100 Ücretsiz · Ön Ödeme Yok · Gizlilik Garantisi'
    },
    footer: {
      aboutText: 'Taleem Ul Quran Campus, dünya genelinde Müslümanlara tecvidli Kur\'an-ı Kerim eğitimi veren uluslararası online bir akademidir.',
      quickLinks: 'Hızlı Linkler',
      coursesHeading: 'Programlar',
      contactHeading: 'İletişim',
      copyright: 'Tüm hakları saklıdır. Taleem Ul Quran Campus.',
      privacy: 'Gizlilik Politikası',
      terms: 'Kullanım Koşulları',
      disclaimer: 'Akademik Sorumluluk Reddi',
      hours: '7/24 Canlı Dersler (Pazartesi - Pazar)',
      address: 'Sektör I-8/3, İslamabad, Pakistan'
    },
    common: {
      viewDetails: 'Detayları Gör',
      bookFreeDemo: 'Ücretsiz Demo',
      readMore: 'Makaleyi Oku',
      learnMore: 'Daha Fazla Bilgi',
      contactUs: 'Bize Ulaşın',
      whatsappDirect: 'WhatsApp İletişim',
      allCourses: 'Tüm Dersler',
      certified: 'Sertifikalı Akademi',
      freeTrial2Days: '2 Gün Ücretsiz Deneme'
    }
  }
};
