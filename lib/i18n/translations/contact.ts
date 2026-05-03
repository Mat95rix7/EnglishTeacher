// import { Translations } from "../types";

// export const contact: Translations = {
//       // ── Contact ──────────────────────────────────────────────────────────────
//   'contact.badge':            { en: 'Get In Touch',                          ar: 'تواصل معي' },
//   'contact.title1':           { en: 'Ready to',                              ar: 'هل أنت مستعد' },
//   'contact.titleHighlight':   { en: 'Start Learning?',                       ar: 'لتبدأ التعلم؟' },
//   'contact.description':      {
//     en: "Fill in the form and I'll get back to you within 24 hours to schedule your free consultation. Let's begin your English journey!",
//     ar: 'املأ النموذج وسأعود إليك خلال 24 ساعة لتحديد موعد استشارتك المجانية. لنبدأ رحلتك في اللغة الإنجليزية',
//   },

//   // Info cards
//   'contact.emailTitle':       { en: 'Email Me',                              ar: 'راسلني' },
//   'contact.emailValue':       { en: 'khawla@englishsahla.com',                ar: 'khawla@englishsahla.com',},
//   'contact.emailSub':         { en: 'Reply within 24 hours',                 ar: 'رد خلال 24 ساعة' },
//   'contact.whatsappTitle':    { en: 'WhatsApp',                              ar: 'واتساب' },
//   'contact.whatsappValue':    { en: '+213668387385',                        ar: '+213668387385' },
//   'contact.whatsappSub':      { en: 'For quick questions',                   ar: 'للأسئلة السريعة' },
//   'contact.hoursTitle':       { en: 'Available Hours',                       ar: 'ساعات التوفر' },
//   'contact.hoursValue':       { en: 'Sat – Thu: 8am – 8pm UTC',              ar: 'السبت – الخميس: 8ص – 8م' },
//   'contact.hoursSub':         { en: 'Flexible for all time zones',           ar: 'مرن لجميع المناطق الزمنية' },

//   // Socials
//   'contact.findOnline':       { en: 'Find Me Online',                        ar: 'تجدني على الإنترنت' },

//   // Form
//   'contact.formTitle':        { en: 'Book Your Free Lesson ✨',               ar: 'احجز درسك المجاني ✨' },
//   'contact.labelName':        { en: 'Full Name',                             ar: 'الاسم الكامل' },
//   'contact.placeholderName':  { en: 'Your name',                             ar: 'اسمك' },
//   'contact.labelEmail':       { en: 'Email Address',                         ar: 'البريد الإلكتروني' },
//   'contact.placeholderEmail': { en: 'your@email.com',                        ar: 'بريدك@example.com' },
//   'contact.labelLevel':       { en: 'Current English Level',                 ar: 'مستواك الحالي في الإنجليزية' },
//   'contact.placeholderLevel': { en: 'Select level...',                       ar: 'اختر المستوى...' },
//   'contact.labelGoal':        { en: 'I Want To Learn',                       ar: 'أريد أن أتعلم' },
//   'contact.placeholderGoal':  { en: 'Select course...',                      ar: 'اختر الدورة...' },
//   'contact.labelSchedule':    { en: 'Best Time for Classes',                 ar: 'أفضل وقت للدروس' },
//   'contact.placeholderSchedule': {
//     en: 'e.g. Weekday mornings, weekends, evenings UTC+2...',
//     ar: 'مثل: صباح أيام الأسبوع، عطلة نهاية الأسبوع، مساءً',
//   },
//   'contact.labelMessage':     { en: 'Tell Me About Your Goals',              ar: 'أخبرني عن أهدافك' },
//   'contact.placeholderMessage': {
//     en: 'What do you want to achieve? Any specific challenges with English?',
//     ar: 'ماذا تريد أن تحقق؟ هل لديك تحديات معينة في اللغة الإنجليزية؟',
//   },
//   'contact.submitBtn':        { en: 'Send Message & Book Free Lesson',       ar: 'أرسل الرسالة واحجز الدرس المجاني' },
//   'contact.sending':          { en: 'Sending...',                            ar: 'جارٍ الإرسال...' },
//   'contact.privacy':          {
//     en: '🔒 Your information is safe. No spam, ever. I reply within 24 hours.',
//     ar: '🔒 معلوماتك في أمان. لا رسائل مزعجة أبداً. أرد خلال 24 ساعة.',
//   },

//   // Success state
//   'contact.successTitle':     { en: 'Message Sent! 🎉',                      ar: 'تم الإرسال! 🎉' },
//   'contact.successDesc':      {
//     en: "Thank you for reaching out! I'll review your details and be in touch within 24 hours to schedule your free lesson.",
//     ar: 'شكراً على تواصلك! سأراجع بياناتك وأتواصل معك خلال 24 ساعة لتحديد موعد درسك المجاني.',
//   },
//   'contact.successSub':       { en: 'See you in class! 📚',                  ar: 'أراك في الدرس! 📚' },

//   // Levels & goals (dropdown options)
//   'contact.level.a1':         { en: 'A1 – Beginner',                        ar: 'A1 – مبتدئ' },
//   'contact.level.a2':         { en: 'A2 – Elementary',                      ar: 'A2 – ابتدائي' },
//   'contact.level.b1':         { en: 'B1 – Intermediate',                    ar: 'B1 – متوسط' },
//   'contact.level.b2':         { en: 'B2 – Upper Intermediate',              ar: 'B2 – متوسط متقدم' },
//   'contact.level.c1':         { en: 'C1 – Advanced',                        ar: 'C1 – متقدم' },
//   'contact.level.c2':         { en: 'C2 – Proficiency',                     ar: 'C2 – إتقان' },
//   'contact.goal.conv':        { en: 'Conversational English',                ar: 'الإنجليزية المحادثاتية' },
//   'contact.goal.business':    { en: 'Business English',                      ar: 'إنجليزية الأعمال' },
//   'contact.goal.ielts':       { en: 'IELTS / TOEFL Prep',                   ar: 'التحضير لـ IELTS / TOEFL' },
//   'contact.goal.pronunciation':{ en: 'Pronunciation',                       ar: 'النطق' },
//   'contact.goal.writing':     { en: 'Academic Writing',                      ar: 'الكتابة الأكاديمية' },
//   'contact.goal.general':     { en: 'General English',                       ar: 'الإنجليزية العامة' },
//   'contact.goal.other':       { en: 'Other',                                 ar: 'أخرى' },
// };

import { Translations } from "../types";

export const contact: Translations = {
  // ── Contact ──────────────────────────────────────────────────────────────
  'contact.badge':            { en: 'Get In Touch',                          ar: 'تواصل معي' },

  'contact.title1': {
    en: 'Have a ',
    ar: 'لديك ',
  },

  'contact.titleHighlight': {
    en: 'Question?',
    ar: 'سؤال؟',
  },

  'contact.description': {
    en: "Not sure where to start? Have a question about my courses, levels, or teaching style? Send me a message and I’ll personally get back to you within 24 hours.",
    ar: 'هل لست متأكداً من أين تبدأ؟ هل لديك سؤال حول الدروس، المستويات، أو طريقة التدريس؟ أرسل لي رسالة وسأرد عليك شخصياً خلال 24 ساعة.',
  },

  // ── Info cards ───────────────────────────────────────────────────────────
  'contact.emailTitle': {
    en: 'Email',
    ar: 'البريد الإلكتروني',
  },
  'contact.emailValue': {
    en: 'khawla@englishsahla.com',
    ar: 'khawla@englishsahla.com',
  },
  'contact.emailSub': {
    en: 'For detailed questions',
    ar: 'للأسئلة التفصيلية',
  },

  'contact.whatsappTitle': {
    en: 'WhatsApp',
    ar: 'واتساب',
  },
  'contact.whatsappValue': {
    en: '+213668387385',
    ar: '+213668387385',
  },
  'contact.whatsappSub': {
    en: 'Quick & simple questions',
    ar: 'للأسئلة السريعة',
  },

  'contact.hoursTitle': {
    en: 'Response Time',
    ar: 'وقت الرد',
  },
  'contact.hoursValue': {
    en: 'Within 24 hours',
    ar: 'رد خلال 24 ساعة',
  },
  'contact.hoursSub': {
    en: 'Saturday to Thursday',
    ar: 'من السبت إلى الخميس',
  },

  // ── Form ─────────────────────────────────────────────────────────────────
  'contact.formTitle': {
    en: 'Send Me Your Question 💬',
    ar: 'أرسل سؤالك 💬',
  },

  'contact.labelName': {
    en: 'Your Name',
    ar: 'اسمك',
  },
  'contact.placeholderName': {
    en: 'Enter your name',
    ar: 'اكتب اسمك',
  },

  'contact.labelEmail': {
    en: 'Email Address',
    ar: 'البريد الإلكتروني',
  },
  'contact.placeholderEmail': {
    en: 'you@example.com',
    ar: 'you@example.com',
  },

  'contact.labelQuestion': {
    en: 'Your Question',
    ar: 'سؤالك',
  },
  'contact.placeholderQuestion': {
    en: 'Ask anything… courses, levels, pricing, schedule, or learning advice',
    ar: 'اسأل أي شيء… الدروس، المستويات، الأسعار، المواعيد، أو نصائح التعلم',
  },

  'contact.submitBtn': {
    en: 'Send Question',
    ar: 'إرسال السؤال',
  },

  'contact.sending': {
    en: 'Sending…',
    ar: 'جارٍ الإرسال…',
  },

  'contact.privacy': {
    en: '🔒 Your message is private. I never share your information.',
    ar: '🔒 رسالتك خاصة ولن تتم مشاركة معلوماتك.',
  },

  // ── Success state ─────────────────────────────────────────────────────────
  'contact.successTitle': {
    en: 'Message Sent Successfully ✅',
    ar: 'تم إرسال الرسالة بنجاح ✅',
  },

  'contact.successDesc': {
    en: "Thanks for your message! I’ll read it carefully and reply as soon as possible (usually within 24 hours).",
    ar: 'شكراً لرسالتك! سأقرأها بعناية وأرد عليك في أقرب وقت ممكن (غالباً خلال 24 ساعة).',
  },

  'contact.successSub': {
    en: 'Talk to you soon 😊',
    ar: 'سأتواصل معك قريباً 😊',
  },
};