import { FormEvent, useState } from 'react';
import SectionMotion from './SectionMotion';

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
};

const initialState: FormState = { name: '', company: '', email: '', phone: '', message: '' };

const Contact = () => {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [done, setDone] = useState(false);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();

    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) nextErrors.name = 'Укажите имя';
    if (!form.company.trim()) nextErrors.company = 'Укажите компанию';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = 'Введите корректный email';
    if (!/^\+?[0-9\s()-]{7,}$/.test(form.phone)) nextErrors.phone = 'Введите корректный телефон';
    if (form.message.trim().length < 10) nextErrors.message = 'Сообщение должно быть от 10 символов';

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setDone(true);
    setForm(initialState);
    window.setTimeout(() => setDone(false), 3000);
  };

  return (
    <SectionMotion id="contacts" className="bg-white px-4 py-20 text-black sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 className="section-title">Контакты</h2>
          <p className="mt-4 text-zinc-700">Расскажите о задаче — вернемся с аудитом и гипотезами роста.</p>
          <div className="mt-6 text-sm">
            <p>Email: hello@scale.agency</p>
            <p>Telegram: @scale_agency</p>
          </div>
        </div>
        <form onSubmit={onSubmit} className="space-y-4 lg:col-span-8">
          <div className="grid gap-4 md:grid-cols-2">
            {[
              ['name', 'Имя'],
              ['company', 'Компания'],
              ['email', 'Email'],
              ['phone', 'Телефон']
            ].map(([field, label]) => (
              <label key={field} className="block text-sm">
                {label}
                <input
                  value={form[field as keyof FormState]}
                  onChange={(event) =>
                    setForm((prev) => ({ ...prev, [field]: event.target.value }))
                  }
                  className="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 outline-none transition focus:border-black"
                />
                {errors[field as keyof FormState] && (
                  <span className="mt-1 block text-xs text-red-700">{errors[field as keyof FormState]}</span>
                )}
              </label>
            ))}
          </div>
          <label className="block text-sm">
            Сообщение
            <textarea
              value={form.message}
              onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
              rows={5}
              className="mt-2 w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 outline-none transition focus:border-black"
            />
            {errors.message && <span className="mt-1 block text-xs text-red-700">{errors.message}</span>}
          </label>
          <button type="submit" className="btn-dark">
            Отправить
          </button>
          {done && <p className="text-sm text-green-700">Успешно отправлено. Мы свяжемся с вами в ближайшее время.</p>}
        </form>
      </div>
    </SectionMotion>
  );
};

export default Contact;
