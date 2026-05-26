# RAGE Academy Centr Landing Page

Коммерческий демо-лендинг для MMA/единоборств клуба в Запорожье.

## Локальный запуск

```bash
npm install
npm run dev
```

Приложение запускается через Vite dev server (обычно `http://localhost:5173`).

## Production-сборка

```bash
npm run build
npm run preview
```

## Деплой на Vercel

1. Создайте новый проект в [Vercel](https://vercel.com/) и подключите этот репозиторий.
2. Framework Preset: **Vite**.
3. Build Command: `npm run build`.
4. Output Directory: `dist`.
5. Deploy.

## Бренд-ассеты

Поместите файлы в директорию `public/`:

- `public/rage-logo.png`
- `public/rage-symbol.png`

После этого изображения автоматически будут доступны на сайте по путям:

- `/rage-logo.png`
- `/rage-symbol.png`
