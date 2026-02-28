# Kushagra Devgon — Portfolio

Premium, production-ready portfolio built with **Next.js 14** (App Router), **TypeScript**, **Tailwind CSS**, **Framer Motion**, **React Three Fiber**, and **GSAP**.

## Stack

- **Next.js 14** (App Router, static export)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (page/section animations)
- **React Three Fiber** (3D particle hero)
- **GSAP** (timeline scroll animations)

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build (static export for GitHub Pages)

```bash
npm run build
```

Output is written to the **`out`** directory. The app is fully static; no server is required.

## Deploy to GitHub Pages

1. **Build:** run `npm run build`.
2. **Publish `out`:** either push the contents of `out` to your repo, or use a GitHub Action to build and deploy.

### Option A — Deploy `out` from this repo

- If the site is **`<username>.github.io`**, configure GitHub Pages to serve from the **main** branch and use the **root** (or a **`/docs`** folder).
- Copy the contents of **`out`** into the root (or into **`docs`**) and commit:
  ```bash
  rm -rf docs && mv out docs && git add docs && git commit -m "Deploy" && git push
  ```
- In **Settings → Pages**, set source to **Deploy from a branch**, branch **main**, folder **/ (root)** or **/docs**.

### Option B — GitHub Actions

Use a workflow that runs `npm ci && npm run build` and deploys the **`out`** folder with **peaceiris/actions-gh-pages** (or similar). Set **publish_dir** to **out**.

## Project structure

```
/app          — App Router (layout, page, globals)
/components   — Reusable UI (SectionWrapper, GlowCard, MagneticButton, etc.)
/sections     — Page sections (Hero, TechStack, Experience, Projects, Footer)
/animations   — GSAP and motion helpers
/constants    — Site copy and data
/lib          — Utils
```

## License

Private. All rights reserved.
