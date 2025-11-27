# BFresh Corporate Website

Corporate website rebuild for BFresh Avocado Group using Next.js 14, Tailwind CSS, and Framer Motion.

## Project Status

**Sprint 1 Complete** ✅
- Next.js 14 project initialized with App Router
- Tailwind CSS configured
- Framer Motion installed
- Base layout structure in place
- Ready for Sprint 2 (routing + components)

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Package Manager**: npm

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm

### Installation

Dependencies are already installed. If you need to reinstall:

```bash
npm install
```

### Development

Run the development server on port 4000:

```bash
npm run dev
```

Open [http://localhost:4000](http://localhost:4000) in your browser.

### Build

Create a production build:

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Project Structure

```
bfresh-website/
  ├── docs/
  │     ├── BeFresh-PRD.md
  │     ├── planning.md
  │     └── tasks.md
  ├── src/
  │     ├── app/
  │     │     ├── layout.tsx
  │     │     └── page.tsx
  │     ├── components/
  │     │     ├── layout/
  │     │     ├── sections/
  │     │     └── ui/
  │     ├── styles/
  │     │     └── globals.css
  │     └── lib/
  ├── public/
  │     ├── images/
  │     └── videos/
  ├── package.json
  ├── tailwind.config.js
  ├── tsconfig.json
  └── next.config.js
```

## Next Steps

See [docs/tasks.md](./docs/tasks.md) for detailed task breakdown.

**Sprint 2**: Routing + Components
- Create all page routes
- Build Nav and Footer components
- Create reusable UI components

## Documentation

- [PRD](./Bfresh-PRD.md) - Product Requirements Document
- [Planning](./docs/planning.md) - Phase-based execution plan
- [Tasks](./docs/tasks.md) - Detailed task breakdown

