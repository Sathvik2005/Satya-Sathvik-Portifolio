# Kanithi Satya Sathvik Portfolio

A redesigned AI engineer portfolio built with React, Vite, Tailwind CSS, GSAP, and an Express contact endpoint. The site is optimized for recruiter scanning, smooth section-based storytelling, and Vercel deployment.

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS
- GSAP + ScrollTrigger
- Express (contact API)

## Local Setup

```powershell
cd E:\portifolio\ReplitFullstack\ReplitFullstack
npm install
npm run dev
```

The app runs on `http://localhost:5000`.

## Production Build

```powershell
npm run build
npm run start
```

## Resume Source

The portfolio content was rebuilt using the resume PDFs provided in:

- `AI_ML_Engineer _Kanithi_Satya Sathvik.pdf`
- `AI Engineer_Kanithi_satya_sathvik_.pdf`

The downloadable resume shipped with the site is:

- `client/public/Kanithi-Satya-Sathvik-Resume.pdf`

## Contact Form

The contact form posts to:

- `POST /api/contact`

Current behavior:

- validates name/email/message
- sends a real email through SMTP
- persists the submitted payload in memory during runtime
- works in local development and in Vercel deployments using the `/api/contact` function

Required environment variables for email delivery:

- `SMTP_HOST`
- `SMTP_PORT` (default `587`)
- `SMTP_SECURE` (`true` for SSL, else `false`)
- `SMTP_USER`
- `SMTP_PASS`
- `CONTACT_TO_EMAIL` (your inbox)
- `CONTACT_FROM_EMAIL` (optional sender override)

## Vercel Deployment

1. Import the project into Vercel.
2. Set the root directory to `ReplitFullstack/ReplitFullstack` if needed.
3. Vercel will use:
   - `npm install`
   - `npm run vercel-build`
4. Static assets are served from `dist/public`.
5. API requests under `/api/contact` are routed to `api/contact.js`.

## Structure Notes

- `client/src/App.tsx`: single-page portfolio experience
- `client/src/data/portfolio.ts`: centralized resume and project data
- `client/src/portfolio.css`: redesigned visual system and layout
- `client/public/Kanithi-Satya-Sathvik-Resume.pdf`: downloadable resume

## Maintenance

To update content later, edit:

- profile info in `client/src/data/portfolio.ts`
- project descriptions in `client/src/data/portfolio.ts`
- visuals and layout in `client/src/portfolio.css`
# Satya-Sathvik-Portifolio 
