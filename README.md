# SCALE — маркетинговое агентство

Промо-сайт агентства SCALE на **Vite + React + TypeScript + TailwindCSS** с монохромным дизайном и роутингом через HashRouter.

## Локальный запуск

```bash
npm install
npm run dev
```

## Сборка и предпросмотр

```bash
npm run build
npm run preview
```

## Деплой на GitHub Pages

1. Убедитесь, что в `vite.config.ts` указан `base: "/SCALE/"`.
2. Запустите:

```bash
npm run deploy
```

3. В GitHub откройте **Settings → Pages** и укажите источник: ветка `gh-pages`.

## Почему роутинг работает на Pages

- Используется **HashRouter**, поэтому страницы открываются как `/#/privacy`.
- Для прямых переходов добавлен `public/404.html`, который перенаправляет запросы в формат `#/...`.

## Структура

- `src/pages/Home.tsx` — лендинг.
- `src/pages/Privacy.tsx` — политика конфиденциальности.
- `src/components/*` — секции и блоки интерфейса.
- `src/data/*` — контент сайта.
- `public/*` — только текстовые статические файлы для Pages.
