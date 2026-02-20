import { Link } from 'react-router-dom';

const Privacy = () => (
  <main className="min-h-screen bg-black px-4 py-12 text-zinc-200 sm:px-8">
    <div className="mx-auto max-w-4xl space-y-7 rounded-3xl border border-zinc-800 bg-zinc-950/80 p-8">
      <Link to="/" className="text-sm text-zinc-400 hover:text-white">
        ← На главную
      </Link>
      <h1 className="text-3xl font-semibold text-white">Политика конфиденциальности</h1>
      <p>
        Настоящая политика описывает, как агентство SCALE собирает, использует и хранит персональные данные,
        полученные через сайт.
      </p>
      <section>
        <h2 className="text-xl font-medium text-white">1. Какие данные мы собираем</h2>
        <ul className="mt-2 list-disc space-y-1 pl-6 text-zinc-300">
          <li>Имя и контактные данные (email, телефон).</li>
          <li>Название компании и содержание сообщения из формы обратной связи.</li>
          <li>Технические данные: IP-адрес, cookie, информация о браузере.</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-medium text-white">2. Цели обработки</h2>
        <ul className="mt-2 list-disc space-y-1 pl-6 text-zinc-300">
          <li>Связь по заявке и консультация по услугам.</li>
          <li>Аналитика и улучшение качества сайта.</li>
          <li>Выполнение договорных и юридических обязательств.</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-medium text-white">3. Передача третьим лицам</h2>
        <p className="mt-2 text-zinc-300">
          Мы не продаем персональные данные. Передача возможна только подрядчикам, обеспечивающим работу сервиса,
          и в случаях, предусмотренных законом.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-medium text-white">4. Срок хранения данных</h2>
        <p className="mt-2 text-zinc-300">
          Данные хранятся только в течение срока, необходимого для достижения целей обработки, или до отзыва согласия.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-medium text-white">5. Права пользователя</h2>
        <p className="mt-2 text-zinc-300">
          Вы можете запросить доступ, исправление или удаление ваших данных, направив запрос на
          <a href="mailto:hello@scale.agency" className="underline">
            {' '}
            hello@scale.agency
          </a>
          .
        </p>
      </section>
      <p className="text-sm text-zinc-500">Актуальная версия политики: {new Date().toLocaleDateString('ru-RU')}.</p>
    </div>
  </main>
);

export default Privacy;
