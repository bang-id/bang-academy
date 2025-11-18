# Bang Academy - React + Vite + TypeScript

A modern React website built with Vite, TypeScript, CSS Modules, and GSAP animations.

## Quick Start

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will start on `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Code Quality

```bash
npm run lint          # Check for linting issues
npm run type-check    # TypeScript type checking
```

## Project Structure

- `src/` - Application source code
  - `components/` - React components
  - `hooks/` - Custom React hooks
  - `styles/` - Global styles
- `public/` - Static assets
- `dist/` - Production build output

## Tech Stack

- **React** 18.2
- **TypeScript** 5.5
- **Vite** 5.1 - Lightning-fast build tool
- **GSAP** 3.12 - Animation library
- **CSS Modules** - Scoped styling

## Deployment

### Vercel (Recommended)

This project is optimized for [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import the project in Vercel
3. Vercel will automatically detect Vite and build correctly

GitHub Actions workflows are included for automated deployment.

**Required Secrets in GitHub:**
- `VERCEL_TOKEN` - Your Vercel API token
- `VERCEL_ORG_ID` - Your Vercel organization ID
- `VERCEL_PROJECT_ID` - Your Vercel project ID

### Other Hosting

The `dist/` folder is a static website and can be deployed to:
- GitHub Pages
- Netlify
- AWS S3 + CloudFront
- Any static hosting service

## Configuration

### Assets

Images and assets should be placed in `public/assets/`. Update image paths in your code if using external CDNs.

### Environment Variables

Create a `.env` or `.env.local` file for environment-specific configuration:

```
VITE_API_URL=https://api.example.com
```

## Notes

- Uses **CSS Modules** for component-scoped styling
- **Fluid typography** implemented with CSS `clamp()`
- **GSAP** hooks available for smooth animations
- TypeScript strict mode enabled for type safety
