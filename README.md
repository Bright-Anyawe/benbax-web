# BenBax Web

Professional marketing and web development site built with Next.js, TypeScript, and Tailwind CSS.

## Project

This repository is the source for the BenBax marketing website. It includes a modern Next.js app, components, and a small API route for contact submissions.

## Key Features

- SEO-friendly Next.js App Router structure
- TypeScript for type safety
- Tailwind CSS utility-first styling
- Reusable UI components and layout system
- Contact API route for form submissions

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Node.js / npm

## Quick Start

1. Install dependencies

```bash
npm install
```

2. Run development server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
npm run start
```

## Environment

If the project uses environment variables (for sending email or third-party keys), create a `.env.local` file at the repository root and add the required variables. Check the contact API implementation at [src/app/api/contact/route.ts](src/app/api/contact/route.ts) for any expected variables.

## Project Structure

- [src/app](src/app) — App routes, global layout, pages
- [src/components](src/components) — Reusable UI components and sections
- [src/lib](src/lib) — Utilities, constants, validations, and types
- [public/images](public/images) — Static images and assets

See the code for more details and component organization.

## Scripts

- `npm run dev` — Start dev server (hot reload)
- `npm run build` — Create production build
- `npm run start` — Run production server

## Deployment

This project works well with Vercel (recommended) or any platform that supports Next.js. For Vercel, connect the repository and set any environment variables in the project dashboard.

## Contributing

Feel free to open issues or pull requests. For small edits, open a branch, make changes, and submit a PR with a short description.

## License & Author

Repository maintained by BenBax. See project owner for license specifics.

---

Updated: February 2026
