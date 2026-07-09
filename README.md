# Sergio Paulo Caetano — Personal Academic Website

A static, single-page academic homepage built with Next.js (App Router), TypeScript, and Tailwind CSS. No backend, no database, no environment variables.

<!-- Deployed on Vercel with automatic production deploys on push to main. -->

## Tech stack

- Next.js (App Router, static rendering)
- TypeScript
- Tailwind CSS v4

## Project structure

```
app/
  layout.tsx        # SEO metadata, fonts, root HTML
  page.tsx           # Composes all sections into the single page
  globals.css        # Color palette and typography theme
components/
  Header.tsx, Hero.tsx, News.tsx, Research.tsx, Publications.tsx,
  Teaching.tsx, Projects.tsx, Service.tsx, Contact.tsx, Footer.tsx
  ui/                 # Section, Card, Badge — shared layout primitives
content/
  profile.ts          # ALL editable text content lives here
public/
  profile-placeholder.svg   # Placeholder profile photo — replace with a real photo
  cv-placeholder.pdf         # Placeholder CV — replace with your real CV PDF
  og-placeholder.png         # Placeholder Open Graph / social share image
```

## Editing content

Almost everything on the page (name, bio, links, news items, research topics,
publications, teaching, projects, service) is defined in **`content/profile.ts`**.
Edit that file to update the site — you generally shouldn't need to touch the
component files for text changes.

Placeholders to fill in before publishing, all in `content/profile.ts` under `links`:

- `googleScholar` — Google Scholar profile URL
- `orcid` — ORCID profile URL
- `linkedin` — LinkedIn profile URL
- `labWebsite` — lab website profile page URL
- `cvPdf` — currently points to `/cv-placeholder.pdf`; replace the file in `public/` and/or update the path
- `photo` — currently points to `/profile-placeholder.svg`; replace the file in `public/` with a real photo (e.g. `profile.jpg`) and update the path

Also update:

- `app/layout.tsx` — the `openGraph.url` field (currently `https://example.com`) once you know your deployed domain
- `public/og-placeholder.png` — replace with a real Open Graph share image (1200×630 recommended)
- `app/favicon.ico` — replace with your own favicon

## Running locally

Install dependencies (first time only):

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Then open **http://localhost:3000** in your browser. The page hot-reloads as you edit files.

## Building

```bash
npm run build
```

This produces an optimized production build. Run `npm run start` to serve that build locally on port 3000.

## Pushing to GitHub

From the project root:

```bash
git init                     # only if not already a git repo
git add .
git commit -m "Initial commit: academic homepage"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

## Deploying to Vercel

1. Push the repository to GitHub (see above).
2. Go to [vercel.com/new](https://vercel.com/new) and import the GitHub repository.
3. Vercel auto-detects the Next.js framework — no configuration or environment variables are needed.
4. Click **Deploy**. Your site will be live at a `*.vercel.app` URL, and you can attach a custom domain afterward.

Every subsequent push to the `main` branch will redeploy automatically.
