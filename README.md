# Omnipresent Agent - AI Real Estate Growth Engine

<p align="center">
  <img src="https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-6.2-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
</p>

<p align="center">
  <strong>AI-Powered Real Estate Lead Generation Platform</strong><br/>
  Stop chasing leads. Install the infrastructure that hunts them for you—24 hours a day, at scale.
</p>

---

## Overview

Omnipresent Agent is a cutting-edge landing page for an AI-powered real estate growth engine. The platform showcases AI Voice SDRs, neural lead processing, and automated appointment booking systems designed for real estate professionals.

## Features

- **AI Voice Agent Demo** - Interactive neural scanner that analyzes lead intent in real-time
- **Live SDR Call Playback** - Listen to AI-powered sales development representative calls
- **Dark/Light Mode** - Seamless theme switching with persistent state
- **Responsive Design** - Optimized for mobile, tablet, and desktop
- **Smooth Animations** - Glass morphism effects, hover states, and transitions
- **Lead Capture Forms** - Integrated offer request system

## Project Structure

```
├── App.tsx                 # Main application with routing & theme
├── index.tsx              # React DOM entry point
├── index.html             # HTML template with SEO meta tags
├── index.css              # Global styles and animations
├── components/
│   ├── AIDemo.tsx         # AI Neural Scanner demo section
│   ├── Automation.tsx     # Automation features showcase
│   ├── Economics.tsx      # ROI and economic scaling section
│   ├── FinalCTA.tsx       # Final call-to-action section
│   ├── Footer.tsx         # Site footer with navigation
│   ├── GetOffer.tsx       # Lead capture form page
│   ├── Hero.tsx           # Hero section with video player
│   ├── InvestorDeck.tsx   # Investor information section
│   ├── Legal.tsx          # Legal disclaimers
│   ├── Navbar.tsx         # Navigation with theme toggle
│   ├── OldVsNew.tsx       # Comparison section
│   └── SupportJunction.tsx # Support resources section
├── public/
│   └── robots.txt         # Search engine crawling rules
├── vite.config.ts         # Vite build configuration
├── tsconfig.json          # TypeScript configuration
└── vercel.json            # Vercel deployment settings
```

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.2.4 | UI Component Library |
| TypeScript | 5.8 | Type Safety |
| Vite | 6.2 | Build Tool & Dev Server |
| Tailwind CSS | 3.4 | Utility-First Styling |
| Vercel | - | Deployment Platform |

## Getting Started

### Prerequisites

- Node.js v18 or higher
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/Mustafa-Shoukat1/Omni-landing-page-.git

# Navigate to project directory
cd Omni-landing-page-

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

## Deployment

### Vercel (Recommended)

The project is configured for seamless Vercel deployment:

1. Push code to GitHub
2. Import repository on [vercel.com](https://vercel.com)
3. Vercel auto-detects Vite configuration
4. Deploy with zero configuration

### Manual Deployment

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## Environment

No environment variables required for base functionality.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is proprietary software. All rights reserved.

---

<p align="center">
  Built with ❤️ for Real Estate Professionals
</p>
