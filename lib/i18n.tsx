'use client';
import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

export type Lang = 'en' | 'ar';

type Translations = Record<string, Record<string, string>>;

const translations: Translations = {
  // Navbar
  'nav.home': { en: 'Home', ar: 'الرئيسية' },
  'nav.about': { en: 'About me', ar: 'من أنا' },
  'nav.courses': { en: 'Courses', ar: 'الدورات' },
  'nav.howItWorks': { en: 'How it works', ar: 'كيف يعمل' },
  'nav.reviews': { en: 'Reviews', ar: 'آراء الطلاب' },
  'nav.faq': { en: 'FAQ', ar: 'الاسئلة الشائعة' },
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

  // Stats
  'stats.title': { en: 'Results that', ar: 'نتائج' },
  'stats.titleHighlight': { en: 'speak for themselves', ar: 'تتحدث عن نفسها' },
  'stats.countries': { en: 'Countries Represented', ar: 'دول ممثَّلة' },
  'stats.years': { en: 'Years of Teaching', ar: 'سنوات من التدريس' },
  'stats.students': { en: 'Happy Students', ar: 'طالب سعيد' },
  'stats.passRate': { en: 'Exam Pass Rate', ar: 'نسبة النجاح في الامتحانات' },
  'stats.hours': { en: 'Hours Taught Online', ar: 'ساعة تدريس أونلاين' },
  'stats.rating': { en: 'Average Review Score', ar: 'متوسط تقييم الطلاب' },

  // ── À ajouter dans translations{} de i18n.tsx, après le bloc // Stats ──

  // About
  'about.badge':          { en: 'About Me',                              ar: 'من أنا'                                  },
  'about.title1':         { en: 'Meet Your',                             ar: 'تعرّف على'                               },
  'about.titleHighlight': { en: 'English Teacher',                       ar: 'معلمتك للإنجليزية'                       },
  'about.hi':             { en: "Hi, I'm",                               ar: 'مرحباً، أنا'                             },
  'about.name':           { en: 'Khawla',                                ar: 'خولة'                                    },
  'about.description1':   {
    en: "I'm a passionate English teacher with over 8 years of experience teaching students from all over the world. I hold a Master's in English Linguistics from Oxford and am fully CELTA & DELTA certified.",
    ar: 'أنا معلمة إنجليزية شغوفة بخبرة تزيد على 8 سنوات في تدريس الطلاب من جميع أنحاء العالم. أحمل ماجستيراً في اللغويات الإنجليزية من أكسفورد وحاصلة على شهادتي CELTA وDELTA.',
  },
  'about.description2':   {
    en: 'My teaching philosophy? English should be fun, practical, and empowering. Through live Zoom sessions, interactive exercises and personalized feedback, I help my students go from hesitant speakers to confident communicators.',
    ar: 'فلسفتي في التدريس؟ يجب أن تكون اللغة الإنجليزية ممتعة وعملية ومُمكِّنة. من خلال جلسات Zoom المباشرة والتمارين التفاعلية والتغذية الراجعة الشخصية، أساعد طلابي على التحوّل من متحدثين مترددين إلى متواصلين واثقين.',
  },
  'about.floatingRating': { en: '4.9/5 Rating',                          ar: '4.9/5 تقييم'                             },
  'about.floatingOxford': { en: 'Oxford Graduate',                       ar: 'خريجة أكسفورد'                           },
  'about.floatingZoom':   { en: 'Live on Zoom',                          ar: 'مباشر على Zoom'                          },
  'about.badge1':         { en: "MA in English Linguistics – Oxford",    ar: 'ماجستير في اللغويات الإنجليزية – أكسفورد' },
  'about.badge2':         { en: 'CELTA & DELTA Certified Teacher',       ar: 'معلمة حاصلة على CELTA وDELTA'            },
  'about.badge3':         { en: 'Taught in 30+ countries online',        ar: 'درّست في أكثر من 30 دولة عبر الإنترنت'   },
  'about.badge4':         { en: 'Google Certified Educator',             ar: 'معلمة معتمدة من Google'                  },
  'about.skill1':         { en: 'Conversational English',                ar: 'الإنجليزية المحادثاتية'                   },
  'about.skill2':         { en: 'Business English',                      ar: 'إنجليزية الأعمال'                         },
  'about.skill3':         { en: 'IELTS / TOEFL Prep',                   ar: 'تحضير IELTS / TOEFL'                     },
  'about.skill4':         { en: 'Grammar & Writing',                     ar: 'القواعد والكتابة'                         },

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

  // How It Works
'hiw.badge':              { en: 'How It Works',                    ar: 'كيف يعمل' },
'hiw.title1':             { en: 'Start Learning in',               ar: 'ابدأ التعلم في' },
'hiw.titleHighlight':     { en: '4 Simple Steps',                  ar: '4 خطوات بسيطة' },
'hiw.description':        {
  en: 'Getting started is easy. Your first lesson is just a few clicks away.',
  ar: 'البداية سهلة. درسك الأول على بُعد نقرات قليلة.',
},

'hiw.step1.title':        { en: 'Book a Free Consultation',        ar: 'احجز استشارة مجانية' },
'hiw.step1.desc':         {
  en: "Fill in the contact form to schedule your free 30-minute discovery call. We'll discuss your goals, current level, and create your personalised learning plan.",
  ar: 'املأ نموذج التواصل لتحديد موعد مكالمة استكشافية مجانية مدتها 30 دقيقة. سنناقش أهدافك ومستواك الحالي ونضع خطة تعلم مخصصة لك.',
},
'hiw.step2.title':        { en: 'Receive Your Custom Plan',        ar: 'استلم خطتك المخصصة' },
'hiw.step2.desc':         {
  en: "I'll design a tailor-made curriculum based on your needs — with materials, exercises, and a realistic timeline to reach your goal.",
  ar: 'سأصمم منهجاً مخصصاً بناءً على احتياجاتك — بمواد وتمارين وجدول زمني واقعي للوصول إلى هدفك.',
},
'hiw.step3.title':        { en: 'Learn Live via Zoom',             ar: 'تعلّم مباشرةً عبر Zoom' },
'hiw.step3.desc':         {
  en: 'Join interactive 1-on-1 or group lessons on Zoom, Google Meet, or Skype. Interactive whiteboards, screen sharing & recorded sessions included.',
  ar: 'انضم إلى دروس تفاعلية فردية أو جماعية عبر Zoom أو Google Meet أو Skype. تشمل السبورات التفاعلية ومشاركة الشاشة والجلسات المسجلة.',
},
'hiw.step4.title':        { en: 'Track Your Progress',             ar: 'تابع تقدمك' },
'hiw.step4.desc':         {
  en: 'After each lesson you get detailed feedback, homework, and a progress report. Watch your English improve week by week — measurably and confidently.',
  ar: 'بعد كل درس تحصل على تقييم مفصل وواجبات وتقرير تقدم. شاهد تحسن إنجليزيتك أسبوعاً بعد أسبوع — بشكل ملموس وواثق.',
},

'hiw.platforms.title':    { en: 'Tools & Platforms I Use',         ar: 'الأدوات والمنصات التي أستخدمها' },
'hiw.platforms.sub':      { en: 'Everything you need, all in one learning experience', ar: 'كل ما تحتاجه في تجربة تعليمية واحدة' },

'hiw.guarantee.title':    { en: '100% Satisfaction Guarantee',     ar: 'ضمان الرضا 100٪' },
'hiw.guarantee.desc':     {
  en: "Not happy with your first paid lesson? I'll refund it — no questions asked. I'm that confident you'll love learning with me.",
  ar: 'غير راضٍ عن أول درس مدفوع؟ سأعيد لك المبلغ — دون أي أسئلة. أنا واثق جداً أنك ستحب التعلم معي.',
},

// Reviews
'reviews.badge':              { en: 'Student Reviews',                     ar: 'آراء الطلاب' },
'reviews.title1':             { en: 'What My',                             ar: 'ماذا يقول' },
'reviews.titleHighlight':     { en: 'Students Say',                        ar: 'طلابي' },
'reviews.totalReviews':       { en: 'from 500+ reviews',                   ar: 'من أكثر من 500 تقييم' },
'reviews.featured.text':      {
  en: "Khawla doesn't just teach English — she builds your confidence. Within 4 months I was giving speeches in English at international conferences. She is truly exceptional.",
  ar: 'خولة لا تعلّمك الإنجليزية فحسب — بل تبني ثقتك بنفسك. في غضون 4 أشهر كنت أُلقي خطباً بالإنجليزية في مؤتمرات دولية. إنها استثنائية حقاً.',
},
'reviews.featured.name':      { en: 'Priya Kapoor',                        ar: 'بريا كابور' },
'reviews.featured.meta':      { en: '🇮🇳 India · Business English Student', ar: '🇮🇳 الهند · طالبة إنجليزية الأعمال' },

// Add review form
'reviews.add.cta':            { en: 'Share Your Experience',               ar: 'شارك تجربتك' },
'reviews.add.title':          { en: 'Leave a Review',                      ar: 'اترك تقييماً' },
'reviews.add.subtitle':       {
  en: 'Your feedback helps other students find the right teacher.',
  ar: 'تقييمك يساعد الطلاب الآخرين في إيجاد المعلمة المناسبة.',
},
'reviews.add.name':           { en: 'Full Name',                           ar: 'الاسم الكامل' },
'reviews.add.namePh':         { en: 'Your name',                           ar: 'اسمك' },
'reviews.add.country':        { en: 'Country',                             ar: 'الدولة' },
'reviews.add.countryPh':      { en: 'e.g. 🇫🇷 France',                    ar: 'مثال: 🇸🇦 السعودية' },
'reviews.add.course':         { en: 'Course Taken',                        ar: 'الدورة التي أخذتها' },
'reviews.add.coursePh':       { en: 'e.g. Business English',               ar: 'مثال: إنجليزية الأعمال' },
'reviews.add.rating':         { en: 'Your Rating',                         ar: 'تقييمك' },
'reviews.add.text':           { en: 'Your Review',                         ar: 'مراجعتك' },
'reviews.add.textPh':         {
  en: 'Tell us about your experience with Khawla...',
  ar: 'أخبرنا عن تجربتك مع خولة...',
},
'reviews.add.submit':         { en: 'Submit Review',                       ar: 'إرسال التقييم' },
'reviews.add.submitting':     { en: 'Submitting...',                       ar: 'جارٍ الإرسال...' },
'reviews.add.successTitle':   { en: 'Thank you! 🎉',                       ar: 'شكراً لك! 🎉' },
'reviews.add.successDesc':    {
  en: 'Your review has been submitted and will appear after verification.',
  ar: 'تم إرسال تقييمك وسيظهر بعد المراجعة.',
},
'reviews.add.required':       { en: 'Please fill in all fields.',          ar: 'يرجى ملء جميع الحقول.' },
'reviews.add.pending':        {
  en: '⏳ Pending approval',
  ar: '⏳ في انتظار الموافقة',
},

// FAQ
'faq.badge':        { en: 'FAQ',                                          ar: 'الأسئلة الشائعة' },
'faq.title1':       { en: 'Common',                                       ar: 'أسئلة' },
'faq.titleHighlight':{ en: 'Questions',                                   ar: 'شائعة' },
'faq.description':  {
  en: 'Everything you need to know before booking your first lesson.',
  ar: 'كل ما تحتاج معرفته قبل حجز درسك الأول.',
},
'faq.still':        {
  en: 'Still have questions?',
  ar: 'لا تزال لديك أسئلة؟',
},
'faq.contact':      { en: 'Send me a message →',                          ar: 'أرسل لي رسالة ←' },

'faq.1.q': { en: 'How do the online lessons work?',         ar: 'كيف تعمل الدروس عبر الإنترنت؟' },
'faq.1.a': {
  en: 'All lessons are conducted live via Zoom, Google Meet, or Skype — whichever you prefer. I share my screen for materials, use an interactive whiteboard, and can even record sessions so you can review them afterwards.',
  ar: 'تُعقد جميع الدروس مباشرةً عبر Zoom أو Google Meet أو Skype — أيهما تفضل. أشارك شاشتي للمواد التعليمية وأستخدم سبورة تفاعلية، ويمكنني حتى تسجيل الجلسات لمراجعتها لاحقاً.',
},
'faq.2.q': { en: 'What equipment do I need?',               ar: 'ما المعدات التي أحتاجها؟' },
'faq.2.a': {
  en: 'Just a computer, tablet, or smartphone with a stable internet connection, a microphone, and ideally a webcam. I recommend using a desktop or laptop for the best experience, but mobile works too!',
  ar: 'فقط حاسوب أو لوحي أو هاتف ذكي مع اتصال إنترنت مستقر وميكروفون وكاميرا ويب بشكل مثالي. أوصي باستخدام سطح المكتب أو اللابتوب للحصول على أفضل تجربة، لكن الهاتف يعمل أيضاً!',
},
'faq.3.q': { en: 'How often should I take lessons?',        ar: 'كم مرة يجب أن آخذ الدروس؟' },
'faq.3.a': {
  en: 'This depends on your goals and availability. For noticeable progress, I recommend 2–3 lessons per week. Even 1 lesson per week can lead to significant improvement over time when combined with self-study.',
  ar: 'يعتمد ذلك على أهدافك وتوفرك. لتحقيق تقدم ملحوظ، أوصي بـ 2-3 دروس في الأسبوع. حتى درس واحد في الأسبوع يمكن أن يؤدي إلى تحسن كبير مع مرور الوقت عند دمجه مع الدراسة الذاتية.',
},
'faq.4.q': { en: 'What is your teaching approach?',         ar: 'ما هو أسلوبك في التدريس؟' },
'faq.4.a': {
  en: 'I use a communicative approach focused on real-life usage. Lessons are interactive, varied, and adapted to your learning style. I combine structured exercises with natural conversation for well-rounded learning.',
  ar: 'أستخدم أسلوباً تواصلياً يركز على الاستخدام الواقعي. الدروس تفاعلية ومتنوعة ومكيّفة حسب أسلوب تعلمك. أجمع بين التمارين المنظمة والمحادثة الطبيعية لتعلم شامل.',
},
'faq.5.q': { en: 'Do you teach children?',                  ar: 'هل تدرّسين الأطفال؟' },
'faq.5.a': {
  en: 'Yes! I teach learners aged 8 and above. Lessons for younger students are designed with more games, visuals, and engaging activities to keep them motivated and focused.',
  ar: 'نعم! أدرّس المتعلمين من سن 8 سنوات فما فوق. الدروس للطلاب الصغار مصممة بألعاب ومرئيات وأنشطة جذابة لإبقائهم متحفزين ومركّزين.',
},
'faq.6.q': { en: 'What if I miss a lesson?',                ar: 'ماذا لو فاتني درس؟' },
'faq.6.a': {
  en: "Life happens! Please give me at least 24 hours notice and we'll reschedule at no extra cost. Late cancellations (under 12 hours) may be charged, but I'm always flexible for genuine emergencies.",
  ar: 'الحياة تفاجئنا أحياناً! يرجى إعلامي قبل 24 ساعة على الأقل وسنعيد الجدولة دون أي تكلفة إضافية. قد يُحتسب الإلغاء المتأخر (أقل من 12 ساعة)، لكنني دائماً مرنة للحالات الطارئة الحقيقية.',
},
'faq.7.q': { en: 'Can I switch courses or goals mid-way?',  ar: 'هل يمكنني تغيير الدورة أو الأهداف في المنتصف؟' },
'faq.7.a': {
  en: 'Absolutely. Your learning journey evolves, and so do your lessons. We can adjust the curriculum, pace, or focus at any time. All I ask is that you communicate your changing needs so I can adapt accordingly.',
  ar: 'بالتأكيد. رحلة تعلمك تتطور، وكذلك دروسك. يمكننا تعديل المنهج أو الوتيرة أو التركيز في أي وقت. كل ما أطلبه هو أن تُخبرني باحتياجاتك المتغيرة حتى أتكيف وفقاً لذلك.',
},
'faq.8.q': { en: 'Do you offer group classes?',             ar: 'هل تقدمين دروساً جماعية؟' },
'faq.8.a': {
  en: 'Yes! Small group classes (2–5 students) are available at a reduced rate from $12/session. Group classes are great for conversational practice and a more social learning experience.',
  ar: 'نعم! الدروس الجماعية الصغيرة (2-5 طلاب) متاحة بسعر مخفض من 12$/جلسة. الدروس الجماعية رائعة للتدرب على المحادثة وتجربة تعليمية أكثر اجتماعية.',
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
  'register.phonePlaceholder': { en: '+213 X XX XX XX XX', ar: '+966 5X XXX XXXX' },
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
  'register.sending': { en: 'Sending...', ar: 'جارٍ الإرسال...' },
  'register.namePh':  { en: 'Your full name', ar: 'اسمك الكامل' },

// ─── Remplace / fusionne ces clés dans ton fichier i18n existant ───────────

  // ── Contact ──────────────────────────────────────────────────────────────
  'contact.badge':            { en: 'Get In Touch',                          ar: 'تواصل معي' },
  'contact.title1':           { en: 'Ready to',                              ar: 'هل أنت مستعد' },
  'contact.titleHighlight':   { en: 'Start Learning?',                       ar: 'لتبدأ التعلم؟' },
  'contact.description':      {
    en: "Fill in the form and I'll get back to you within 24 hours to schedule your free consultation. Let's begin your English journey!",
    ar: 'املأ النموذج وسأعود إليك خلال 24 ساعة لتحديد موعد استشارتك المجانية. لنبدأ رحلتك في اللغة الإنجليزية',
  },

  // Info cards
  'contact.emailTitle':       { en: 'Email Me',                              ar: 'راسلني' },
  'contact.emailValue':       { en: 'khawla@englishsahlawithkhawla.com', ar: 'khawla@englishsahlawithkhawla.com',},
  'contact.emailSub':         { en: 'Reply within 24 hours',                 ar: 'رد خلال 24 ساعة' },
  'contact.whatsappTitle':    { en: 'WhatsApp',                              ar: 'واتساب' },
  'contact.whatsappValue':    { en: '+213668387385',                     ar: '+213668387385' },
  'contact.whatsappSub':      { en: 'For quick questions',                   ar: 'للأسئلة السريعة' },
  'contact.hoursTitle':       { en: 'Available Hours',                       ar: 'ساعات التوفر' },
  'contact.hoursValue':       { en: 'Sat – Thu: 8am – 8pm UTC',              ar: 'السبت – الخميس: 8ص – 8م' },
  'contact.hoursSub':         { en: 'Flexible for all time zones',           ar: 'مرن لجميع المناطق الزمنية' },

  // Socials
  'contact.findOnline':       { en: 'Find Me Online',                        ar: 'تجدني على الإنترنت' },

  // Availability
  'contact.acceptingTitle':   { en: 'Currently Accepting Students',          ar: 'أقبل طلاباً حالياً' },
  'contact.acceptingDesc':    {
    en: 'Limited spots available this month. Book early to secure your preferred time slot!',
    ar: 'أماكن محدودة هذا الشهر. احجز مبكراً لضمان موعدك المفضل!',
  },

  // Form
  'contact.formTitle':        { en: 'Book Your Free Lesson ✨',               ar: 'احجز درسك المجاني ✨' },
  'contact.labelName':        { en: 'Full Name',                             ar: 'الاسم الكامل' },
  'contact.placeholderName':  { en: 'Your name',                             ar: 'اسمك' },
  'contact.labelEmail':       { en: 'Email Address',                         ar: 'البريد الإلكتروني' },
  'contact.placeholderEmail': { en: 'your@email.com',                        ar: 'بريدك@example.com' },
  'contact.labelLevel':       { en: 'Current English Level',                 ar: 'مستواك الحالي في الإنجليزية' },
  'contact.placeholderLevel': { en: 'Select level...',                       ar: 'اختر المستوى...' },
  'contact.labelGoal':        { en: 'I Want To Learn',                       ar: 'أريد أن أتعلم' },
  'contact.placeholderGoal':  { en: 'Select course...',                      ar: 'اختر الدورة...' },
  'contact.labelSchedule':    { en: 'Best Time for Classes',                 ar: 'أفضل وقت للدروس' },
  'contact.placeholderSchedule': {
    en: 'e.g. Weekday mornings, weekends, evenings UTC+2...',
    ar: 'مثل: صباح أيام الأسبوع، عطلة نهاية الأسبوع، مساءً',
  },
  'contact.labelMessage':     { en: 'Tell Me About Your Goals',              ar: 'أخبرني عن أهدافك' },
  'contact.placeholderMessage': {
    en: 'What do you want to achieve? Any specific challenges with English?',
    ar: 'ماذا تريد أن تحقق؟ هل لديك تحديات معينة في اللغة الإنجليزية؟',
  },
  'contact.submitBtn':        { en: 'Send Message & Book Free Lesson',       ar: 'أرسل الرسالة واحجز الدرس المجاني' },
  'contact.sending':          { en: 'Sending...',                            ar: 'جارٍ الإرسال...' },
  'contact.privacy':          {
    en: '🔒 Your information is safe. No spam, ever. I reply within 24 hours.',
    ar: '🔒 معلوماتك في أمان. لا رسائل مزعجة أبداً. أرد خلال 24 ساعة.',
  },

  // Success state
  'contact.successTitle':     { en: 'Message Sent! 🎉',                      ar: 'تم الإرسال! 🎉' },
  'contact.successDesc':      {
    en: "Thank you for reaching out! I'll review your details and be in touch within 24 hours to schedule your free lesson.",
    ar: 'شكراً على تواصلك! سأراجع بياناتك وأتواصل معك خلال 24 ساعة لتحديد موعد درسك المجاني.',
  },
  'contact.successSub':       { en: 'See you in class! 📚',                  ar: 'أراك في الدرس! 📚' },

  // Levels & goals (dropdown options)
  'contact.level.a1':         { en: 'A1 – Beginner',                        ar: 'A1 – مبتدئ' },
  'contact.level.a2':         { en: 'A2 – Elementary',                      ar: 'A2 – ابتدائي' },
  'contact.level.b1':         { en: 'B1 – Intermediate',                    ar: 'B1 – متوسط' },
  'contact.level.b2':         { en: 'B2 – Upper Intermediate',              ar: 'B2 – متوسط متقدم' },
  'contact.level.c1':         { en: 'C1 – Advanced',                        ar: 'C1 – متقدم' },
  'contact.level.c2':         { en: 'C2 – Proficiency',                     ar: 'C2 – إتقان' },
  'contact.goal.conv':        { en: 'Conversational English',                ar: 'الإنجليزية المحادثاتية' },
  'contact.goal.business':    { en: 'Business English',                      ar: 'إنجليزية الأعمال' },
  'contact.goal.ielts':       { en: 'IELTS / TOEFL Prep',                   ar: 'التحضير لـ IELTS / TOEFL' },
  'contact.goal.pronunciation':{ en: 'Pronunciation',                       ar: 'النطق' },
  'contact.goal.writing':     { en: 'Academic Writing',                      ar: 'الكتابة الأكاديمية' },
  'contact.goal.general':     { en: 'General English',                       ar: 'الإنجليزية العامة' },
  'contact.goal.other':       { en: 'Other',                                 ar: 'أخرى' },

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
  'footer.madeWith': { en: 'Made by Mat95rix7 with', ar: 'صُممه Mat95rix7 بـ' },
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