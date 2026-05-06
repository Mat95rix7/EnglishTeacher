import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASS,
  },
});

const i18n = {
  ar: {
    subject: 'رد على سؤالك',
    greeting: (name: string) => `مرحباً ${name}،`,
    signature: 'فريق الإنجليزية سهلة مع خولة',
    dir: 'rtl',
  },
  en: {
    subject: 'Reply to your question',
    greeting: (name: string) => `Hello ${name},`,
    signature: '— The English Sahla Team',
    dir: 'ltr',
  },
};

export async function POST(req: NextRequest) {
  const { to, name, reply, lang } = await req.json();

  const l = lang === 'ar' ? i18n.ar : i18n.en;

  await transporter.sendMail({
    from: `"English Sahla" <${process.env.GMAIL_USER}>`,
    to,
    subject: l.subject,
    html: `
      <div dir="${l.dir}" style="font-family:sans-serif;max-width:560px;margin:auto;padding:24px;border-radius:12px;border:1px solid #E9E1F8;">
        <p style="font-size:15px;color:#1a1a2e;">${l.greeting(name)}</p>
        <p style="font-size:15px;color:#374151;line-height:1.7;">${reply.replace(/\n/g, '<br/>')}</p>
        <br/>
        <p style="color:#7C3AED;font-weight:600;font-size:14px;">${l.signature}</p>
      </div>
    `,
  });

  return NextResponse.json({ ok: true });
}