# Sixpenny Hardware — Next.js

Next.js (App Router) port of the free 8B template https://8b.com/templates/sixpenny/
(source: https://github.com/8bsite/hardware-store-website-template, MIT; photos: Unsplash, see CREDITS.md).

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

## Where things are
- `app/layout.tsx` — title, description, Open Graph, favicon, font preload.
- `app/globals.css` — all of the template's CSS, in its original order (colours and fonts are the `:root` tokens).
- `app/page.tsx` — puts the sections together.
- `components/sections/*.tsx` — one file per section (Navigation, Opening, Departments, … Footer); edit copy, links and photos here.
- `lib/site.js` — the template's scripts (menu, newsletter form, GSAP ScrollTrigger scenes, Lenis smooth scroll), run once after hydration by `components/SiteScripts.tsx`.

The template's notes in `../AGENTS.md` still apply: keep every `id`, `data-8b-*` attribute and the class names the scripts select,
and replace the demo text, phone, email, form and `data-8b-placeholder` values before going live.
