# Athenkosi Marobo — portfolio

Next.js portfolio for an IT Engineer based in Cape Town. Content is centralised in `lib/data.ts`.

GitHub profile used on the site: https://github.com/Athenkosi1565

## Update without rewriting the app

- Profile, email, social URLs: `lib/data.ts` (`profile`, `links`)
- Jobs, skills, projects, learning, education, articles: same file
- CV: put the real PDF at `public/cv/athenkosi-marobo-cv.pdf` and set `cvReady` to `true`
- Contact delivery: the form validates and includes a honeypot. Wire a form endpoint in `components/Contact.tsx` when you have one.

LinkedIn, Credly, Microsoft Learn and email are still placeholders.

## Run

```bash
npm install
npm run dev
```

Production:

```bash
npm run build
npm start
```
