 # Ramadhan Super Apps

A Vite + React landing page for the Ramadhan Super Apps product. Built for fast iteration, simple deployment, and easy customization.

## Features

- Modular React components for each section
- Clean content configuration in a single place
- Fast local development with Vite
- Production-ready build output

## Tech Stack

- React 19
- TypeScript
- Vite

## Getting Started

### Prerequisites

- Node.js 18+ recommended

### Install

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

Open http://localhost:5173 to view the site.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
.
├─ components/           # Page sections
├─ App.tsx               # App composition
├─ constants.tsx         # Content and copy
├─ config.ts             # Site configuration
├─ index.tsx             # Entry point
├─ index.html            # HTML template
└─ vite.config.ts        # Vite config
```

## Customize Content

- Update headings, copy, and lists in `constants.tsx`.
- Tweak site-level values in `config.ts`.
- Add or reorder sections in `App.tsx`.

## Deployment

This is a static Vite app. Build with:

```bash
npm run build
```

Then deploy the `dist/` folder to your hosting provider (Vercel, Netlify, Cloudflare Pages, GitHub Pages, etc.).

## License

Specify your license here.
