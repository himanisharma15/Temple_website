# Shree Dhabaleswar Mandira

Static multi-page React/Vite redesign skeleton for Shree Dhabaleswar Mandira.

## Run locally

```bash
npm install
npm run dev
```

## Folder map

- `src/layout/` shared notice bar, header, footer and mobile actions.
- `src/components/` reusable UI components, each with local CSS Modules.
- `src/pages/` one isolated folder per route. Each page owns its component, styles, data and translations.
- `src/data/site.data.js` shared temple details only.
- `src/i18n/` language context and common strings.
- `src/styles/`, `src/hooks/`, `src/utils/` shared foundations.
- `public/images/` expected image names and replacement guidance.

## Team workflow

- Person A owns the page folders: Home, About, DarshanSeva, SevaBooking, Festivals, FestivalDetail.
- Person B owns the page folders: Gallery, Visit, Donate, ThankYou, Notices, Contact, Privacy, Terms, NotFound.
- Shared folders (layout, components, styles, hooks, utils, i18n, data/site.data.js, routes.js) change only through small pull requests that the other person reviews.
- Each person edits only their own page folders, including each page's data and i18n files.
- Use branches such as `feature/partner-a` and `feature/partner-b`, and merge into `main` through pull requests.

Page content marked `[ADD FROM TEMPLE]`, `[VERIFY]`, and `[TRANSLATE]` must be approved before launch.
