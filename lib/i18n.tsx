import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

export type Lang = 'en' | 'ar';

type Translations = Record<string, Record<string, string>>;

const translations: Translations = {
  // Navbar
  'nav.home': { en: 'Home', ar: 'الرئيسية' },
  'nav.courses': { en: 'Courses', ar: 'الدورات' },
  'nav.testimonials': { en: 'Testimonials', ar: 'آراء الطلاب' },
  'nav.register': { en: 'Register', ar: 'التسجيل' },
  'nav.contact': { en: 'Contact', ar: 'اتصل بنا' },
  'nav.signup': { en: 'Sign Up', ar: 'سجل الآن' },
  'nav.title': { en: 'English Sahla with Khawla', ar: 'الإنجليزية سهلة مع خولة' },

  // Hero
  'hero.badge': { en: 'Online English lessons', ar: 'دروس إنجليزية عبر الإنترنت' },
  'hero.title1': { en: 'Learn English with', ar: 'تعلّم الإنجليزية مع' },
  'hero.titleHighlight': { en: 'Khawla', ar: 'خولة' },
  'hero.title2': { en: ' ', ar: ' ' },
  'hero.description': {
    en: 'Personalized video lessons with an experienced teacher. Progress at your own pace, whether you are a beginner or advanced.',
    ar: 'دروس مخصصة عبر الفيديو مع معلمة ذات خبرة. تقدّم بالسرعة التي تناسبك، سواء كنت مبتدئاً أو متقدماً.',
  },
  'hero.cta': { en: 'Start now', ar: 'ابدأ الآن' },
  'hero.seeCourses': { en: 'See courses', ar: 'شاهد الدورات' },
  'hero.students': { en: 'students', ar: 'طالب' },
  'hero.online': { en: 'Online', ar: 'متصل' },
  'hero.available': { en: 'Available now', ar: 'متاح الآن' },
  'hero.english': { en: 'English', ar: 'الإنجليزية' },
  'hero.allLevels': { en: 'All levels', ar: 'جميع المستويات' },

  // Courses
  'courses.badge': { en: 'Our programs', ar: 'برامجنا' },
  'courses.title1': { en: 'Courses tailored to', ar: 'دورات مصممة حسب' },
  'courses.titleHighlight': { en: 'your level', ar: 'مستواك' },
  'courses.description': {
    en: 'Each program is designed to help you progress effectively, with video content, practical exercises, and personalized follow-up.',
    ar: 'كل برنامج مصمم لمساعدتك على التقدم بفعالية، مع محتوى فيديو وتمارين عملية ومتابعة شخصية.',
  },
  'courses.beginner': { en: 'Beginner', ar: 'مبتدئ' },
  'courses.intermediate': { en: 'Intermediate', ar: 'متوسط' },
  'courses.advanced': { en: 'Advanced', ar: 'متقدم' },
  'courses.exams': { en: 'Exams', ar: 'امتحانات' },
  'courses.professional': { en: 'Professional', ar: 'مهني' },
  'courses.allLevels': { en: 'All levels', ar: 'جميع المستويات' },
  'courses.lessons': { en: 'sessions', ar: 'جلسة' },
  'courses.weeks': { en: 'weeks', ar: 'أسبوع' },

  'courses.beginner.title': { en: 'Beginner English A1-A2', ar: 'الإنجليزية للمبتدئين A1-A2' },
  'courses.beginner.desc': {
    en: 'Learn the basics of English: everyday vocabulary, essential grammar, and simple conversation.',
    ar: 'تعلّم أساسيات الإنجليزية: المفردات اليومية والقواعد الأساسية والمحادثة البسيطة.',
  },
  'courses.intermediate.title': { en: 'Intermediate English B1-B2', ar: 'الإنجليزية المتوسطة B1-B2' },
  'courses.intermediate.desc': {
    en: 'Perfect your grammar, enrich your vocabulary, and gain fluency.',
    ar: 'أتقن القواعد وأثري مفرداتك واكسب طلاقة في التعبير.',
  },
  'courses.advanced.title': { en: 'Advanced English C1-C2', ar: 'الإنجليزية المتقدمة C1-C2' },
  'courses.advanced.desc': {
    en: 'Master language nuances, debates, idiomatic expressions, and professional English.',
    ar: 'أتقن فروق اللغة الدقيقة والمناقشات والتعابير الاصطلاحية والإنجليزية المهنية.',
  },
  'courses.toefl.title': { en: 'TOEFL/IELTS Preparation', ar: 'تحضير TOEFL/IELTS' },
  'courses.toefl.desc': {
    en: 'Intensive exam training with simulations, strategies, and personalized feedback.',
    ar: 'تدريب مكثف على الامتحانات مع محاكاة واستراتيجيات وتقييم شخصي.',
  },
  'courses.business.title': { en: 'Business English', ar: 'إنجليزية الأعمال' },
  'courses.business.desc': {
    en: 'Emails, presentations, negotiations, and professional vocabulary to succeed in English.',
    ar: 'رسائل البريد والعروض التقديمية والتفاوض والمفردات المهنية للنجاح بالإنجليزية.',
  },
  'courses.conversation.title': { en: 'Conversation & Pronunciation', ar: 'المحادثة والنطق' },
  'courses.conversation.desc': {
    en: 'Conversation workshops to improve your pronunciation and oral fluency.',
    ar: 'ورش محادثة لتحسين نطقك وطلاقتك الشفهية.',
  },

  // Testimonials
  'testimonials.badge': { en: 'Testimonials', ar: 'آراء الطلاب' },
  'testimonials.title1': { en: 'What my', ar: 'ماذا يقول' },
  'testimonials.titleHighlight': { en: 'students', ar: 'طلابي' },
  'testimonials.title2': { en: 'say', ar: '' },
  'testimonials.description': {
    en: 'Over 500 students have trusted my methods. Discover their testimonials.',
    ar: 'أكثر من 500 طالب وثقوا بأساليبي. اكتشف آراءهم.',
  },

  'testimonials.1.name': { en: 'Marie Dupont', ar: 'ماري دوبون' },
  'testimonials.1.role': { en: 'Master student', ar: 'طالبة ماجستير' },
  'testimonials.1.text': {
    en: 'Claire is an exceptional teacher. In 6 months, I went from A1 to B2. Her pedagogy is clear, patient, and truly adapted to my needs.',
    ar: 'كلير معلمة استثنائية. في 6 أشهر، انتقلت من المستوى A1 إلى B2. أساليبها التربوية واضحة وصبورة ومكيّفة حقاً لاحتياجاتي.',
  },
  'testimonials.2.name': { en: 'Thomas Bernard', ar: 'توماس برنار' },
  'testimonials.2.role': { en: 'Software Engineer', ar: 'مهندس برمجيات' },
  'testimonials.2.text': {
    en: 'Thanks to the Business English course, I landed an international position. The interview simulations gave me incredible confidence.',
    ar: 'بفضل دورة إنجليزية الأعمال، حصلت على منصب دولي. محاكاة المقابلات منحتني ثقة لا تصدق.',
  },
  'testimonials.3.name': { en: 'Sophie Martin', ar: 'صوفي مارتن' },
  'testimonials.3.role': { en: 'High school teacher', ar: 'أستاذة في الثانوية' },
  'testimonials.3.text': {
    en: 'The conversation classes are exactly what I needed. The atmosphere is relaxed and you progress without realizing it. I highly recommend!',
    ar: 'دروس المحادثة هي بالضبط ما احتجته. الأجواء مريحة وتتقدم دون أن تشعر. أنصح بها بشدة!',
  },
  'testimonials.4.name': { en: 'Lucas Petit', ar: 'لوكاس بوتيت' },
  'testimonials.4.role': { en: 'IELTS preparation student', ar: 'طالب تحضير IELTS' },
  'testimonials.4.text': {
    en: 'I scored 7.5 on the IELTS thanks to Claire\'s intensive preparation. The exam simulations were very close to real conditions.',
    ar: 'حصلت على 7.5 في الـ IELTS بفضل التحضير المكثف مع كلير. محاكاة الامتحان كانت قريبة جداً من الظروف الحقيقية.',
  },
  'testimonials.5.name': { en: 'Amelie Roux', ar: 'أميلي رو' },
  'testimonials.5.role': { en: 'Startup founder', ar: 'مؤسسة شركة ناشئة' },
  'testimonials.5.text': {
    en: 'Flexible, professional, and always helpful. Claire adapts to my busy schedule and every lesson is productive.',
    ar: 'مرنة ومحترفة ودائماً مفيدة. كلير تتكيف مع جدولي المزدحم وكل درس مثمر.',
  },
  'testimonials.6.name': { en: 'Pierre Lefevre', ar: 'بيير ليففر' },
  'testimonials.6.role': { en: 'Retired traveler', ar: 'متقاعد مسافر' },
  'testimonials.6.text': {
    en: 'At 65, I\'m learning English for my travels. Claire is patient and encouraging. I finally feel comfortable traveling!',
    ar: 'في سن 65، أتعلم الإنجليزية لأسفاري. كلير صبورة ومشجعة. أشعر أخيراً بالراحة أثناء السفر!',
  },

  // Register
  'register.badge': { en: 'Join us', ar: 'انضم إلينا' },
  'register.title1': { en: 'Ready to improve your', ar: 'مستعد لتحسين' },
  'register.titleHighlight': { en: 'English', ar: 'إنجليزيتك' },
  'register.title2': { en: '?', ar: '؟' },
  'register.description': {
    en: 'Sign up to receive your first free lesson and discover the method that has helped over 500 students reach their goals.',
    ar: 'سجّل لتحصل على أول درس مجاني واكتشف الأسلوب الذي ساعد أكثر من 500 طالب في بلوغ أهدافهم.',
  },
  'register.benefit1': { en: 'First trial lesson free', ar: 'أول درس تجريبي مجاناً' },
  'register.benefit2': { en: 'Program tailored to your level', ar: 'برنامج مكيّف حسب مستواك' },
  'register.benefit3': { en: 'Total schedule flexibility', ar: 'مرونة تامة في الجدول' },
  'register.benefit4': { en: 'Regular follow-up and feedback', ar: 'متابعة وتقييم منتظمان' },
  'register.formTitle': { en: 'Sign up', ar: 'سجّل الآن' },
  'register.name': { en: 'Full name', ar: 'الاسم الكامل' },
  'register.namePlaceholder': { en: 'Your name', ar: 'اسمك' },
  'register.email': { en: 'Email', ar: 'البريد الإلكتروني' },
  'register.emailPlaceholder': { en: 'your@email.com', ar: 'your@email.com' },
  'register.phone': { en: 'Phone', ar: 'الهاتف' },
  'register.phonePlaceholder': { en: '+33 6 XX XX XX XX', ar: '+966 5X XXX XXXX' },
  'register.level': { en: 'Your level', ar: 'مستواك' },
  'register.levelPlaceholder': { en: 'Select your level', ar: 'اختر مستواك' },
  'register.levelBeginner': { en: 'Beginner (A1-A2)', ar: 'مبتدئ (A1-A2)' },
  'register.levelIntermediate': { en: 'Intermediate (B1-B2)', ar: 'متوسط (B1-B2)' },
  'register.levelAdvanced': { en: 'Advanced (C1-C2)', ar: 'متقدم (C1-C2)' },
  'register.levelExam': { en: 'Exam preparation', ar: 'تحضير امتحان' },
  'register.levelProfessional': { en: 'Professional English', ar: 'إنجليزية مهنية' },
  'register.message': { en: 'Message', ar: 'رسالة' },
  'register.messagePlaceholder': { en: 'Tell me more about your goals...', ar: 'أخبرني المزيد عن أهدافك...' },
  'register.submit': { en: 'Sign up', ar: 'سجّل الآن' },
  'register.successTitle': { en: 'Registration successful!', ar: 'تم التسجيل بنجاح!' },
  'register.successMessage': {
    en: 'Thank you for registering. I will contact you very soon to schedule your first free lesson.',
    ar: 'شكراً لتسجيلك. سأتواصل معك قريباً جداً لتحديد موعد درسك المجاني الأول.',
  },
  'register.error': { en: 'An error occurred. Please try again.', ar: 'حدث خطأ. يرجى المحاولة مرة أخرى.' },

  // Contact
  'contact.badge': { en: 'Contact', ar: 'اتصل بنا' },
  'contact.title1': { en: 'A question?', ar: 'لديك سؤال؟' },
  'contact.titleHighlight': { en: 'Write me', ar: 'اكتب لي' },
  'contact.description': {
    en: 'Feel free to contact me for any questions about courses, pricing, or availability.',
    ar: 'لا تتردد في التواصل معي لأي سؤال حول الدورات أو الأسعار أو المواعيد المتاحة.',
  },
  'contact.email': { en: 'Email', ar: 'البريد الإلكتروني' },
  'contact.responseTime': { en: 'Reply within 24h', ar: 'رد خلال 24 ساعة' },
  'contact.phone': { en: 'Phone', ar: 'الهاتف' },
  'contact.hours': { en: 'Mon-Fri, 9am-6pm', ar: 'الإثنين-الجمعة، 9ص-6م' },
  'contact.online': { en: 'Online classes', ar: 'دروس عبر الإنترنت' },
  'contact.viaZoom': { en: 'Via Zoom / Google Meet', ar: 'عبر Zoom / Google Meet' },
  'contact.flexible': { en: 'Flexible', ar: 'مرن' },
  'contact.sendEmail': { en: 'Send an email', ar: 'أرسل بريداً إلكترونياً' },

  // Footer
  'footer.description': {
    en: 'Personalized online English lessons, delivered by a passionate and experienced teacher. Progress at your own pace, from home.',
    ar: 'دروس إنجليزية مخصصة عبر الإنترنت، تقدمها معلمة شغوفة وذات خبرة. تقدّم بالسرعة التي تناسبك، من منزلك.',
  },
  'footer.navigation': { en: 'Navigation', ar: 'التنقل' },
  'footer.courses': { en: 'Courses', ar: 'الدورات' },
  'footer.resources': { en: 'Resources', ar: 'موارد' },
  'footer.beginner': { en: 'Beginner A1-A2', ar: 'مبتدئ A1-A2' },
  'footer.intermediate': { en: 'Intermediate B1-B2', ar: 'متوسط B1-B2' },
  'footer.advanced': { en: 'Advanced C1-C2', ar: 'متقدم C1-C2' },
  'footer.examPrep': { en: 'Exam Preparation', ar: 'تحضير الامتحانات' },
  'footer.business': { en: 'Business English', ar: 'إنجليزية الأعمال' },
  'footer.blog': { en: 'Blog', ar: 'المدونة' },
  'footer.freeExercises': { en: 'Free exercises', ar: 'تمارين مجانية' },
  'footer.podcast': { en: 'Podcast', ar: 'بودكاست' },
  'footer.faq': { en: 'FAQ', ar: 'الأسئلة الشائعة' },
  'footer.copyright': { en: 'All rights reserved.', ar: 'جميع الحقوق محفوظة.' },
  'footer.madeWith': { en: 'Made with', ar: 'صُنع بـ' },
  'footer.forLearning': { en: 'for learning', ar: 'للتعلم' },
};

interface I18nContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
}

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === 'en' ? 'ar' : 'en'));
  }, []);

  const t = useCallback(
    (key: string): string => {
      const entry = translations[key];
      if (!entry) return key;
      return entry[lang] || entry['en'] || key;
    },
    [lang]
  );

  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  return (
    <I18nContext.Provider value={{ lang, toggleLang, t, dir }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error('useI18n must be used within I18nProvider');
  return context;
}
