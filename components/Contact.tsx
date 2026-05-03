// // contact.tsx - section de contact avec formulaire, infos et réseaux sociaux
// 'use client';

// import { useState } from 'react';
// import { Mail, MessageSquare, Clock, Send, CheckCircle2 } from 'lucide-react';
// import { useI18n } from '../lib/i18n';
// import { socials } from '../lib/data';

// export default function Contact() {
//   const { t, dir } = useI18n();
//   const isRTL = dir === 'rtl';

//   const [form, setForm] = useState({
//     name: '', email: '', level: '', goal: '', message: '', schedule: '',
//   });
//   const [submitted, setSubmitted] = useState(false);
//   const [loading, setLoading]     = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setTimeout(() => { setLoading(false); setSubmitted(true); }, 1500);
//   };

//   const levels = [
//     'contact.level.a1', 'contact.level.a2', 'contact.level.b1',
//     'contact.level.b2', 'contact.level.c1', 'contact.level.c2',
//   ];
//   const goals = [
//     'contact.goal.conv', 'contact.goal.business', 'contact.goal.ielts',
//     'contact.goal.pronunciation', 'contact.goal.writing',
//     'contact.goal.general', 'contact.goal.other',
//   ];

//   const infoCards = [
//     { icon: <Mail size={22} />,         titleKey: 'contact.emailTitle',    valueKey: 'contact.emailValue',    subKey: 'contact.emailSub',    iconBg: 'bg-[#EDE9FE]', iconColor: 'text-[#7C3AED]' },
//     { icon: <MessageSquare size={22} />, titleKey: 'contact.whatsappTitle', valueKey: 'contact.whatsappValue', subKey: 'contact.whatsappSub', iconBg: 'bg-green-100',  iconColor: 'text-green-600' },
//     { icon: <Clock size={22} />,         titleKey: 'contact.hoursTitle',    valueKey: 'contact.hoursValue',    subKey: 'contact.hoursSub',    iconBg: 'bg-[#FCE7F3]', iconColor: 'text-[#BE185D]' },
//   ];

//   // Styles inline RTL — évite les classes Tailwind dynamiques non détectées par JIT
//   const sRow:  React.CSSProperties = { flexDirection: isRTL ? 'row-reverse' : 'row' };
//   const sText: React.CSSProperties = { textAlign:     isRTL ? 'right'       : 'left' };

//   const inputCls = [
//     'w-full bg-[#f7f3ed] border border-[#E9E1F8] rounded-xl px-4 py-3',
//     'text-gray-800 placeholder-gray-400 text-sm',
//     'focus:outline-none focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#EDE9FE]',
//     'transition-all',
//   ].join(' ');

//   return (
//     <section
//       id="contact"
//       dir={dir}
//       className="py-24 relative overflow-hidden bg-[#f7f3ed]"
//     >
//       {/* Glows */}
//       <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-[#C4B5FD]/18 blur-3xl pointer-events-none" />
//       <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#F9A8D4]/14 blur-3xl pointer-events-none" />
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-[#FDE68A]/10 blur-3xl pointer-events-none" />

//       {/* Grille de points */}
//       <div className="absolute inset-0 opacity-[0.035] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #8B5CF6 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

//       {/* Cercles pointillés */}
//       <svg className="absolute end-[-60px] top-1/2 -translate-y-1/2 w-[400px] h-[400px] opacity-[0.06] hidden lg:block pointer-events-none" viewBox="0 0 400 400" fill="none">
//         <circle cx="200" cy="200" r="190" stroke="#8B5CF6" strokeWidth="2.5" strokeDasharray="12 9" />
//         <circle cx="200" cy="200" r="155" stroke="#EC4899" strokeWidth="1.5" strokeDasharray="6 12" opacity="0.5" />
//       </svg>
//       <svg className="absolute start-[-40px] bottom-20 w-[220px] h-[220px] opacity-[0.05] hidden md:block pointer-events-none" viewBox="0 0 220 220" fill="none">
//         <circle cx="110" cy="110" r="104" stroke="#FACC15" strokeWidth="2" strokeDasharray="8 7" />
//       </svg>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//         {/* Header */}
//         <div className="text-center mb-16">
//           <span className="inline-block px-4 py-1.5 rounded-full bg-[#EDE9FE] border border-[#C4B5FD]/50 text-[#7C3AED] text-sm font-semibold mb-4">
//             {t('contact.badge')}
//           </span>
//           <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
//             {t('contact.title1')}{' '}
//             <span className="bg-linear-to-r from-[#8B5CF6] via-[#EC4899] to-[#F59E0B] bg-clip-text text-transparent">
//               {t('contact.titleHighlight')}
//             </span>
//           </h2>
//           <p className="text-gray-500 text-lg max-w-2xl mx-auto">{t('contact.description')}</p>
//         </div>

//         <div className="grid lg:grid-cols-5 gap-12 items-start">

//           {/* Info cards */}
//           <div className="lg:col-span-2 space-y-4">

//             {infoCards.map((item, i) => (
//               <div
//                 key={i}
//                 className="flex items-start gap-4 bg-white/70 backdrop-blur-sm border border-[#E9E1F8] rounded-2xl p-5 hover:border-[#C4B5FD] hover:shadow-sm transition-all duration-300"
//                 style={sRow}
//               >
//                 <div className={`w-11 h-11 rounded-xl ${item.iconBg} flex items-center justify-center ${item.iconColor} shrink-0`}>
//                   {item.icon}
//                 </div>
//                 <div className="flex-1" style={sText}>
//                   <div className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-1">
//                     {t(item.titleKey)}
//                   </div>
//                   <div className="text-gray-800 font-semibold text-sm">
//                     {t(item.valueKey)}
//                   </div>
//                   <div className="text-gray-400 text-xs mt-0.5">
//                     {t(item.subKey)}
//                   </div>
//                 </div>
//               </div>
//             ))}

//             {/* Socials */}
//             <div className="bg-white/70 backdrop-blur-sm border border-[#E9E1F8] rounded-2xl p-5">
//               <div className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-4" style={sText}>
//                 {t('contact.findOnline')}
//               </div>
//               <div className="flex gap-3" style={sRow}>
//                 {Object.values(socials).map((s) => (
//                   <a
//                     key={s.label}
//                     href={s.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label={s.label}
//                     className="flex-1 flex flex-col items-center gap-1 py-3 rounded-xl bg-[#EDE9FE] text-[#5B21B6] border border-[#C4B5FD]/60 shadow-sm transition-all duration-300 hover:bg-[#DDD6FE] hover:shadow-md hover:text-[#4C1D95] focus:outline-none focus:ring-2 focus:ring-[#C4B5FD]"
//                   >
//                     <span className="text-lg">{s.icon}</span>
//                     <span>{s.label}</span>
//                   </a>
//                 ))}
//               </div>
//             </div>

//             {/* Availability */}
//             <div className="bg-green-50 border border-green-200 rounded-2xl p-5">
//               <div className="flex items-center justify-center gap-2 mb-2" style={sRow}>
//                 <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shrink-0" />
//                 <span className="text-green-700 font-semibold text-sm">{t('contact.acceptingTitle')}</span>
//               </div>
//               <p className="text-green-600 text-sm" style={sText}>{t('contact.acceptingDesc')}</p>
//             </div>
//           </div>

//           {/* Formulaire */}
//           <div className="lg:col-span-3">
//             {submitted ? (
//               <div className="bg-green-50 border border-green-200 rounded-3xl p-12 text-center">
//                 <CheckCircle2 size={60} className="text-green-500 mx-auto mb-6" />
//                 <h3 className="text-3xl font-black text-gray-800 mb-4">
//                   {t('contact.successTitle')}
//                 </h3>
//                 <p className="text-gray-500 text-lg max-w-sm mx-auto">{t('contact.successDesc')}</p>
//                 <p className="mt-4 text-[#7C3AED] font-semibold">{t('contact.successSub')}</p>
//               </div>
//             ) : (
//               <form
//                 onSubmit={handleSubmit}
//                 className="bg-white/70 backdrop-blur-sm border border-[#E9E1F8] rounded-3xl p-8 space-y-5 shadow-sm"
//               >
//                 <h3 className="text-xl font-bold text-gray-800 mb-2" style={sText}>
//                   {t('contact.formTitle')}
//                 </h3>

//                 {/* Name + Email */}
//                 <div className="grid sm:grid-cols-2 gap-5">
//                   <div>
//                     <label className="block text-gray-500 text-sm mb-1.5 font-medium" style={sText}>
//                       {t('contact.labelName')} *
//                     </label>
//                     <input
//                       type="text" name="name" required
//                       value={form.name} onChange={handleChange}
//                       placeholder={t('contact.placeholderName')}
//                       dir={dir}
//                       style={sText}
//                       className={inputCls}
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-gray-500 text-sm mb-1.5 font-medium" style={sText}>
//                       {t('contact.labelEmail')} *
//                     </label>
//                     {/* email : toujours ltr pour la saisie, alignement suit dir */}
//                     <input
//                       type="email" name="email" required
//                       value={form.email} onChange={handleChange}
//                       placeholder={t('contact.placeholderEmail')}
//                       dir="ltr"
//                       style={sText}
//                       className={inputCls}
//                     />
//                   </div>
//                 </div>

//                 {/* Level + Goal */}
//                 <div className="grid sm:grid-cols-2 gap-5">
//                   <div>
//                     <label className="block text-gray-500 text-sm mb-1.5 font-medium" style={sText}>
//                       {t('contact.labelLevel')}
//                     </label>
//                     <select
//                       name="level" value={form.level} onChange={handleChange}
//                       dir={dir} style={sText}
//                       className={inputCls + ' appearance-none cursor-pointer'}
//                     >
//                       <option value="">{t('contact.placeholderLevel')}</option>
//                       {levels.map(k => <option key={k} value={t(k)}>{t(k)}</option>)}
//                     </select>
//                   </div>
//                   <div>
//                     <label className="block text-gray-500 text-sm mb-1.5 font-medium" style={sText}>
//                       {t('contact.labelGoal')}
//                     </label>
//                     <select
//                       name="goal" value={form.goal} onChange={handleChange}
//                       dir={dir} style={sText}
//                       className={inputCls + ' appearance-none cursor-pointer'}
//                     >
//                       <option value="">{t('contact.placeholderGoal')}</option>
//                       {goals.map(k => <option key={k} value={t(k)}>{t(k)}</option>)}
//                     </select>
//                   </div>
//                 </div>

//                 {/* Schedule */}
//                 <div>
//                   <label className="block text-gray-500 text-sm mb-1.5 font-medium" style={sText}>
//                     {t('contact.labelSchedule')}
//                   </label>
//                   <input
//                     type="text" name="schedule"
//                     value={form.schedule} onChange={handleChange}
//                     placeholder={t('contact.placeholderSchedule')}
//                     dir={dir} style={sText}
//                     className={inputCls}
//                   />
//                 </div>

//                 {/* Message */}
//                 <div>
//                   <label className="block text-gray-500 text-sm mb-1.5 font-medium" style={sText}>
//                     {t('contact.labelMessage')} *
//                   </label>
//                   <textarea
//                     name="message" required rows={4}
//                     value={form.message} onChange={handleChange}
//                     placeholder={t('contact.placeholderMessage')}
//                     dir={dir} style={sText}
//                     className={inputCls + ' resize-none'}
//                   />
//                 </div>

//                 {/* Submit */}
//                 <button
//                   type="submit" disabled={loading}
//                   className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-white text-base shadow-lg shadow-purple-300/40 transition-all duration-300 hover:scale-[1.02] active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
//                   style={{ background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)', ...sRow }}
//                 >
//                   {loading ? (
//                     <>
//                       <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
//                       {t('contact.sending')}
//                     </>
//                   ) : (
//                     <>
//                       <Send size={18} style={{ transform: isRTL ? 'rotate(180deg)' : 'none' }} />
//                       {t('contact.submitBtn')}
//                     </>
//                   )}
//                 </button>

//                 <p className="text-gray-400 text-xs text-center">{t('contact.privacy')}</p>
//               </form>
//             )}
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

// contact-merged.tsx — style contact.tsx + structure contact1.tsx + formulaire question simple
'use client';

import { useState } from 'react';
import { Mail, MessageSquare, Clock, Send, CheckCircle2 } from 'lucide-react';
import { useI18n } from '../lib/i18n';
import { socials } from '../lib/data';

export default function Contact() {
  const { t, dir } = useI18n();
  const isRTL = dir === 'rtl';

  const [form, setForm] = useState({ name: '', email: '', question: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1500);
  };

  // Styles RTL inline — évite les classes Tailwind dynamiques non détectées par JIT
  const sRow:  React.CSSProperties = { flexDirection: isRTL ? 'row-reverse' : 'row' };
  const sText: React.CSSProperties = { textAlign:     isRTL ? 'right'       : 'left' };

  const inputCls = [
    'w-full bg-[#f7f3ed] border border-[#E9E1F8] rounded-xl px-4 py-3',
    'text-gray-800 placeholder-gray-400 text-sm',
    'focus:outline-none focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#EDE9FE]',
    'transition-all',
  ].join(' ');

  const infoCards = [
    {
      icon: <Mail size={22} />,
      titleKey: 'contact.emailTitle',
      valueKey:  'contact.emailValue',
      subKey:    'contact.emailSub',
      iconBg:    'bg-[#EDE9FE]',
      iconColor: 'text-[#7C3AED]',
      linkPrefix: 'mailto:',
    },
    {
      icon: <MessageSquare size={22} />,
      titleKey: 'contact.whatsappTitle',
      valueKey:  'contact.whatsappValue',
      subKey:    'contact.whatsappSub',
      iconBg:    'bg-green-100',
      iconColor: 'text-green-600',
      linkPrefix: 'https://wa.me/',
    },
    {
      icon: <Clock size={22} />,
      titleKey: 'contact.hoursTitle',
      valueKey:  'contact.hoursValue',
      subKey:    'contact.hoursSub',
      iconBg:    'bg-[#FCE7F3]',
      iconColor: 'text-[#BE185D]',
      linkPrefix: null,
    },
  ];

  return (
    <section
      id="contact"
      dir={dir}
      className="py-24 relative overflow-hidden bg-[#f7f3ed]"
    >
      {/* Glows */}
      <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-[#C4B5FD]/18 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#F9A8D4]/14 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-[#FDE68A]/10 blur-3xl pointer-events-none" />

      {/* Grille de points */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, #8B5CF6 1px, transparent 1px)', backgroundSize: '30px 30px' }}
      />

      {/* Cercles pointillés décoratifs */}
      <svg className="absolute end-[-60px] top-1/2 -translate-y-1/2 w-[400px] h-[400px] opacity-[0.06] hidden lg:block pointer-events-none" viewBox="0 0 400 400" fill="none">
        <circle cx="200" cy="200" r="190" stroke="#8B5CF6" strokeWidth="2.5" strokeDasharray="12 9" />
        <circle cx="200" cy="200" r="155" stroke="#EC4899" strokeWidth="1.5" strokeDasharray="6 12" opacity="0.5" />
      </svg>
      <svg className="absolute start-[-40px] bottom-20 w-[220px] h-[220px] opacity-[0.05] hidden md:block pointer-events-none" viewBox="0 0 220 220" fill="none">
        <circle cx="110" cy="110" r="104" stroke="#FACC15" strokeWidth="2" strokeDasharray="8 7" />
      </svg>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#EDE9FE] border border-[#C4B5FD]/50 text-[#7C3AED] text-sm font-semibold mb-4">
            {t('contact.badge')}
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
            {t('contact.title1')}{' '}
            <span className="bg-linear-to-r from-[#8B5CF6] via-[#EC4899] to-[#F59E0B] bg-clip-text text-transparent">
              {t('contact.titleHighlight')}
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">{t('contact.description')}</p>
        </div>

        {/* 3 info cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-6">
          {infoCards.map((item, i) => (
            <div
              key={i}
              className="bg-white/70 backdrop-blur-sm border border-[#E9E1F8] rounded-2xl p-7 text-center hover:border-[#C4B5FD] hover:shadow-lg hover:shadow-purple-100/30 hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-13 h-13 rounded-2xl ${item.iconBg} flex items-center justify-center mx-auto mb-5 ${item.iconColor}`}>
                {item.icon}
              </div>
              <h3 className="text-gray-800 font-bold text-base mb-1">{t(item.titleKey)}</h3>
              <p className="text-gray-400 text-xs mb-2">{t(item.subKey)}</p>
              {item.linkPrefix ? (
                <a
                  href={`${item.linkPrefix}${t(item.valueKey)}`}
                  className="text-[#7C3AED] text-sm font-semibold hover:text-[#5b21b6] transition-colors"
                >
                  {t(item.valueKey)}
                </a>
              ) : (
                <span className="text-[#BE185D] text-sm font-semibold">{t(item.valueKey)}</span>
              )}
            </div>
          ))}
        </div>

        {/* Simple question form */}
        {submitted ? (
          <div className="bg-green-50 border border-green-200 rounded-3xl p-12 text-center">
            <CheckCircle2 size={56} className="text-green-500 mx-auto mb-5" />
            <h3 className="text-2xl font-black text-gray-800 mb-3">{t('contact.successTitle')}</h3>
            <p className="text-gray-500 text-base max-w-sm mx-auto">{t('contact.successDesc')}</p>
            <p className="mt-3 text-[#7C3AED] font-semibold">{t('contact.successSub')}</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white/70 backdrop-blur-sm border border-[#E9E1F8] rounded-3xl p-8 space-y-5 shadow-sm"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-1" style={sText}>
              {t('contact.formTitle')}
            </h3>

            {/* Name + Email */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-gray-500 text-sm mb-1.5 font-medium" style={sText}>
                  {t('contact.labelName')} *
                </label>
                <input
                  type="text" name="name" required
                  value={form.name} onChange={handleChange}
                  placeholder={t('contact.placeholderName')}
                  dir={dir} style={sText}
                  className={inputCls}
                />
              </div>
              <div>
                <label className="block text-gray-500 text-sm mb-1.5 font-medium" style={sText}>
                  {t('contact.labelEmail')} *
                </label>
                <input
                  type="email" name="email" required
                  value={form.email} onChange={handleChange}
                  placeholder={t('contact.placeholderEmail')}
                  dir="ltr" style={sText}
                  className={inputCls}
                />
              </div>
            </div>

            {/* Question */}
            <div>
              <label className="block text-gray-500 text-sm mb-1.5 font-medium" style={sText}>
                {t('contact.labelQuestion')} *
              </label>
              <textarea
                name="question" required rows={4}
                value={form.question} onChange={handleChange}
                placeholder={t('contact.placeholderQuestion')}
                dir={dir} style={sText}
                className={inputCls + ' resize-none'}
              />
            </div>

            {/* Submit */}
            <button
              type="submit" disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-white text-base shadow-lg shadow-purple-300/40 transition-all duration-300 hover:scale-[1.02] active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
              style={{ background: 'linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)', ...sRow }}
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  {t('contact.sending')}
                </>
              ) : (
                <>
                  <Send size={18} style={{ transform: isRTL ? 'rotate(180deg)' : 'none' }} />
                  {t('contact.submitBtn')}
                </>
              )}
            </button>

            <p className="text-gray-400 text-xs text-center">{t('contact.privacy')}</p>
          </form>
        )}

      </div>
    </section>
  );
}