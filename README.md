# Mohd Abdul Naveed — Portfolio (React + Framer Motion)

React 18 + Vite, animated with [Framer Motion](https://www.framer.com/motion/).

## Run
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
npm run preview    # serve the build locally
```

## Structure
- `src/data.js` — all copy and content (edit text here)
- `src/components/` — one component per section
- `src/components/Reveal.jsx` — scroll-triggered entrance wrapper (`dir`: up | left | right | scale)
- `src/components/ScrollProgress.jsx` — spring-smoothed top progress bar (`useScroll` + `useSpring`)
- `src/components/CountUp.jsx` — number counter that runs when it scrolls into view
- `src/components/Hero.jsx` — staggered entrance and scroll parallax
- `src/styles.css` — design tokens; sections with `theme-dark` get the dark palette
- `public/resume.pdf` — the résumé behind the Download buttons

## Animation features
Staggered hero entrance, scroll parallax, spring progress bar, directional scroll reveals, count-up stats, typing terminal, hover/tap springs, and a CSS tech marquee. Everything respects `prefers-reduced-motion`.

## Deploy
Vercel / Netlify: import the repo (build `npm run build`, output `dist`). GitHub Pages: set `base` in `vite.config.js` to your repo name and publish `dist`.
