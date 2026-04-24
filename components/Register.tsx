import { useState } from 'react';
import { Send, CheckCircle, Sparkles } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useI18n } from '../lib/i18n';

export default function Register() {
  const { t } = useI18n();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    level: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { error: insertError } = await supabase
        .from('registrations')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone || null,
            level: formData.level || null,
            message: formData.message || null,
          },
        ]);

      if (insertError) throw insertError;
      setSubmitted(true);
    } catch {
      setError(t('register.error'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="register" className="relative section-padding bg-gradient-to-br from-lavender-50/50 via-cream to-beige-50">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-lavender-200 to-transparent" />

      {/* Decorative blobs */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-lavender-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-beige-300/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-lavender-100/80 text-lavender-700 rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              {t('register.badge')}
            </div>

            <h2 className="heading-display text-4xl md:text-5xl font-bold text-beige-900 leading-tight">
              {t('register.title1')}{' '}
              <span className="text-lavender-500">{t('register.titleHighlight')}</span>
              {t('register.title2')}
            </h2>

            <p className="text-beige-600 text-lg leading-relaxed">
              {t('register.description')}
            </p>

            <div className="space-y-4">
              {['register.benefit1', 'register.benefit2', 'register.benefit3', 'register.benefit4'].map((key) => (
                <div key={key} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-lavender-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-lavender-500" />
                  </div>
                  <span className="text-beige-700">{t(key)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right form */}
          <div className="glass-card p-8 md:p-10">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="heading-display text-2xl font-semibold text-beige-800">
                  {t('register.successTitle')}
                </h3>
                <p className="text-beige-600">
                  {t('register.successMessage')}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="heading-display text-2xl font-semibold text-beige-800 mb-2">
                  {t('register.formTitle')}
                </h3>

                <div>
                  <label className="block text-sm font-medium text-beige-700 mb-1.5">
                    {t('register.name')} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="input-field"
                    placeholder={t('register.namePlaceholder')}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-beige-700 mb-1.5">
                    {t('register.email')} *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="input-field"
                    placeholder={t('register.emailPlaceholder')}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-beige-700 mb-1.5">
                    {t('register.phone')}
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="input-field"
                    placeholder={t('register.phonePlaceholder')}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-beige-700 mb-1.5">
                    {t('register.level')}
                  </label>
                  <select
                    value={formData.level}
                    onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                    className="input-field"
                  >
                    <option value="">{t('register.levelPlaceholder')}</option>
                    <option value="debutant">{t('register.levelBeginner')}</option>
                    <option value="intermediaire">{t('register.levelIntermediate')}</option>
                    <option value="avance">{t('register.levelAdvanced')}</option>
                    <option value="examen">{t('register.levelExam')}</option>
                    <option value="professionnel">{t('register.levelProfessional')}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-beige-700 mb-1.5">
                    {t('register.message')}
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="input-field resize-none"
                    placeholder={t('register.messagePlaceholder')}
                  />
                </div>

                {error && (
                  <p className="text-sm text-red-500">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      {t('register.submit')}
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
