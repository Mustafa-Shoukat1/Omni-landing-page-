# Omnipresent Agent - AI Real Estate Systems

A modern landing page for Omnipresent Agent, an AI-powered real estate assistant platform.

## Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling (via CDN)

## Run Locally

**Prerequisites:** Node.js (v18+)

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## Deploy to Vercel

### Option 1: Via Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option 2: Via Vercel Dashboard
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will automatically detect the Vite framework
5. Deploy!
