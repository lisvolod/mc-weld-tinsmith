# Веб-сайт Методичної комісії зварювальних та слюсарних технологій

Офіційний веб-сайт Методичної комісії зварювальних та слюсарних технологій ВСП «Тернопільський фаховий коледж ТНТУ імені Івана Пулюя».

## Технології

- **React 19** + **TypeScript**
- **Vite** - швидкий збірник
- **React Router DOM 7** - маршрутизація
- **SCSS** - стилізація
- **Swiper** - слайдери для галерей
- **Lucide React** - іконки

## Вимоги

- Node.js >= 18.x
- npm >= 9.x

## Встановлення

1. **Клонуйте репозиторій або розпакуйте архів:**
```bash
cd welding-college
```

2. **Встановіть залежності:**
```bash
npm install
```

3. **Запустіть dev сервер:**
```bash
npm run dev
```

4. **Відкрийте браузер:**
```
http://localhost:5173
```

## Команди

```bash
# Запуск dev сервера
npm run dev

# Збірка для production
npm run build

# Попередній перегляд production збірки
npm run preview

# Перевірка типів TypeScript
npx tsc --noEmit
```

## Структура проекту

```
welding-college/
├── src/
│   ├── assets/              # Статичні файли
│   │   ├── logos/           # Логотипи (logo_333.svg, logo_white.svg)
│   │   ├── facilities/      # Фото матеріально-технічної бази
│   │   │   ├── cabinet/     # 10 фото кабінету
│   │   │   └── workshop/    # 12 фото майстерні
│   │   ├── achievements/    # 18 фото досягнень
│   │   └── contacts/        # Фото контактної особи
│   │
│   ├── components/          # React компоненти
│   │   ├── Navigation/      # Навігаційне меню
│   │   ├── Footer/          # Футер зі стейкхолдерами
│   │   └── Layout/          # Layout wrapper
│   │
│   ├── pages/               # Сторінки сайту
│   │   ├── Home/            # Головна сторінка
│   │   ├── About/           # Про нас
│   │   │   ├── Team/        # Склад МК
│   │   │   ├── Professions/ # Професії
│   │   │   ├── Facilities/  # Матеріально-технічна база
│   │   │   └── Qualification/ # Підвищення кваліфікації
│   │   ├── Students/        # Для студентів
│   │   │   ├── Subjects/    # Предмети
│   │   │   ├── Thesis/      # Методичні рекомендації
│   │   │   └── Practice/    # Професійно-практична підготовка
│   │   ├── Achievements/    # Наші досягнення
│   │   └── Contacts/        # Контакти
│   │
│   ├── styles/              # Глобальні стилі
│   │   ├── _variables.scss  # SCSS змінні
│   │   └── global.scss      # Глобальні стилі
│   │
│   ├── App.tsx              # Головний компонент
│   ├── main.tsx             # Точка входу
│   └── vite-env.d.ts        # TypeScript declarations
│
├── public/                  # Публічні файли
├── index.html               # HTML шаблон
├── package.json             # Залежності
├── tsconfig.json            # TypeScript конфігурація
├── vite.config.ts           # Vite конфігурація
└── README.md                # Ця документація
```

## Додавання зображень

### Матеріально-технічна база

**Кабінет технології (10 фото):**
```
src/assets/facilities/cabinet/
  ├── cabinet-01.jpg
  ├── cabinet-02.jpg
  ├── ...
  └── cabinet-10.jpg
```

**Майстерня (12 фото):**
```
src/assets/facilities/workshop/
  ├── workshop-01.jpg
  ├── workshop-02.jpg
  ├── ...
  └── workshop-12.jpg
```

### Досягнення (18 фото)

```
src/assets/achievements/
  ├── achievement-01.jpg
  ├── achievement-02.jpg
  ├── ...
  └── achievement-18.jpg
```

### Контактна особа

```
src/assets/contacts/
  └── contact-01.jpg  # Фото Гуменюка І.В.
```

**Рекомендації для зображень:**
- Формат: JPG або PNG
- Оптимальний розмір: 1920x1080 px або менше
- Максимальна вага: до 500 KB (можна стиснути через tinypng.com)

## Кольорова схема

Проект використовує наступну кольорову палітру (файл `src/styles/_variables.scss`):

- **Primary** (синій): `#2c5f8d`
- **Secondary** (помаранчевий): `#f77f00`
- **Accent** (бірюзовий): `#06a77d`
- **Neutral Dark**: `#2b2d42`
- **Neutral Light**: `#f8f9fa`

## Маршрути

| Шлях | Сторінка |
|------|----------|
| `/` | Головна |
| `/about/team` | Склад МК |
| `/about/professions` | Професії |
| `/about/facilities` | Матеріально-технічна база |
| `/about/qualification` | Підвищення кваліфікації |
| `/students/subjects` | Предмети |
| `/students/thesis` | Методичні рекомендації до ДР |
| `/students/practice` | Професійно-практична підготовка |
| `/achievements` | Наші досягнення |
| `/contacts` | Контакти |

## Responsive дизайн

Сайт адаптований для всіх пристроїв:
- **Desktop**: ≥ 1280px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

## Налаштування

### Зміна кольорів

Відредагуйте файл `src/styles/_variables.scss`:

```scss
$primary-color: #2c5f8d;      // Основний колір
$secondary-color: #f77f00;    // Акцентний колір
$accent-color: #06a77d;       // Додатковий акцент
```

### Додавання нових сторінок

1. Створіть компонент у відповідній папці `src/pages/`
2. Додайте маршрут у `src/App.tsx`
3. Додайте посилання в навігацію (`src/components/Navigation/Navigation.tsx`)

### Оновлення контактів

Відредагуйте:
- `src/pages/Contacts/Contacts.tsx` - сторінка контактів
- `src/components/Footer/Footer.tsx` - footer (контакти + стейкхолдери)

## Розгортання

### Збірка для production

```bash
npm run build
```

Готові файли будуть у папці `dist/`

### Розгортання на хостингу

Проект можна розгорнути на:
- **Netlify** (рекомендовано)
- **Vercel**
- **GitHub Pages**
- Будь-який статичний хостинг

**Для Netlify:**
1. Підключіть репозиторій
2. Build command: `npm run build`
3. Publish directory: `dist`

## Стейкхолдери

Стейкхолдери відображаються у футері сайту. Для додавання/оновлення відредагуйте масив `stakeholders` у файлі `src/components/Footer/Footer.tsx`:

```typescript
const stakeholders = [
  {
    company: 'Назва компанії',
    director: 'ПІБ директора',
    professions: 'Професії через кому',
  },
  // ... додайте нові об'єкти
];
```

## Контакти

**Голова методичної комісії:**  
Гуменюк Ігор Всеволодович  
Заслужений працівник освіти України

**Email:** igor_gumenuik@ukr.net

## Ліцензія

© 2026 Методична комісія зварювальних та слюсарних технологій  
Тернопільський фаховий коледж ТНТУ імені Івана Пулюя

