# Sukshem G P — Portfolio (Next.js 14 + TypeScript + Tailwind)

## 1. Setup commands

```bash
# Unzip, then from the project root:
npm install

# Local dev server → http://localhost:3000
npm run dev

# Production build (also catches type errors)
npm run build
npm run start
```

Node.js 18.17+ required.

## 2. Before you deploy — required steps

1. **Add real assets** — see `public/PLACEHOLDER_ASSETS_README.txt`. Missing
   images won't break the build, but they will hurt how the site looks when
   shared and how it performs in Image Search.
2. **Edit `lib/site.ts`** — set your real domain in `siteUrl`, and confirm
   `social.*` links match your actual LinkedIn/GitHub/LeetCode/GFG URLs
   exactly (typos here break the "same person" signal Google uses).
3. **Edit `lib/data.ts`** — swap placeholder achievement numbers (LeetCode
   count, contest rating, repo count) for your real current numbers, and
   real project GitHub/demo URLs.

## 3. Architecture

```
app/
  layout.tsx      → root layout: fonts, <html>/<body>, full Metadata API
                     (title, description, OG, Twitter card, robots, icons)
  page.tsx         → assembles all sections in order
  globals.css      → design tokens as CSS variables (:root + .dark),
                     mapped into tailwind.config.ts
  sitemap.ts       → generates /sitemap.xml automatically
  robots.ts        → generates /robots.txt automatically
  manifest.ts      → generates /manifest.webmanifest (PWA/home-screen)

components/
  JsonLd.tsx       → Person + WebSite structured data (schema.org)
  ThemeProvider / ThemeToggle → dark/light mode (next-themes)
  Navbar, Hero, About, Skills, Projects, ProjectCard,
  Experience, Certifications, Achievements, Now,
  Resume, Contact, Footer  → one component per section
  Reveal.tsx       → scroll-reveal animation wrapper
  ScrollProgress.tsx → top progress bar

lib/
  site.ts          → single source of truth: name, URL, social links —
                     read by layout metadata, JSON-LD, and sitemap
  data.ts          → all content: skills, projects, experience, education,
                     certifications, achievements
```

Each visual section from the design is its own component, and all content
lives in `lib/data.ts` — update your resume there, not scattered across
JSX files.

## 4. SEO — what's already wired in

- **Metadata API** (`app/layout.tsx`): title template, meta description,
  keywords, canonical URL, Open Graph (`og:image`, `og:type=profile`),
  Twitter Card, robots directives.
- **JSON-LD structured data** (`components/JsonLd.tsx`): a `Person` schema
  with a `sameAs` array pointing at your LinkedIn, GitHub, LeetCode, and
  GeeksforGeeks profiles. This is the actual mechanism that lets Google
  associate all those profiles with the same person — it's not automatic
  just because the links are in the footer.
- **Image alt text**: every `next/image` uses descriptive, keyword-bearing
  alt text (e.g. "Sukshem G P, Full Stack Developer based in Mangaluru... —
  professional headshot") instead of generic text like "photo".
- **Sitemap + robots.txt**: auto-generated at `/sitemap.xml` and
  `/robots.txt` from `app/sitemap.ts` / `app/robots.ts`.
- **Manifest**: `/manifest.webmanifest` for home-screen installs.

## 5. What code alone CANNOT do — the honest part

No amount of on-page SEO makes Google rank a brand-new, unknown URL for
"Sukshem" or "FareFirst web developer" by itself. Ranking for your own name
depends on signals outside this codebase too:

1. **Deploy to a real domain.** Vercel is the natural fit for Next.js:
   ```bash
   npm i -g vercel
   vercel
   ```
   Or connect the GitHub repo at vercel.com for automatic deploys on push.
   A custom domain (e.g. `sukshemgp.com`, ~₹700–1000/yr on Namecheap/GoDaddy)
   ranks better long-term than a `*.vercel.app` subdomain.

2. **Submit to Google Search Console** (search.google.com/search-console):
   - Add your domain, verify ownership (use the `verification.google` code
     in `layout.tsx`, or DNS verification).
   - Submit `https://yourdomain.com/sitemap.xml`.
   - Use "Request Indexing" on the homepage URL to speed up first crawl.

3. **Get backlinks from the profiles themselves** — this is what actually
   teaches Google "these accounts are the same Sukshem":
   - Add the portfolio URL to your LinkedIn "Contact info" and headline/About.
   - Add it to your GitHub profile bio and pinned repo READMEs.
   - Add it to your LeetCode and GeeksforGeeks public profile fields.
   - Use the **exact same name spelling and photo** across all of them.

4. **Be patient with indexing.** New sites typically take days to a few
   weeks to appear for branded searches, even with everything above done
   correctly — there's no code that skips this.

## 6. Deployment checklist

- [ ] Real photo, OG image, resume PDF, favicons in `public/`
- [ ] `lib/site.ts` domain + social links updated
- [ ] `lib/data.ts` real numbers/links updated
- [ ] `npm run build` passes with no errors
- [ ] Deployed (Vercel recommended)
- [ ] Google Search Console: domain verified + sitemap submitted
- [ ] Portfolio URL added to LinkedIn, GitHub, LeetCode, GeeksforGeeks profiles
