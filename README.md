# Micro-frontend: Products

## Overview

This micro-frontend exposes product catalog components via Module Federation.

## Structure

- `src/components/Products.tsx`
- `src/index.ts` imports `index.css` (Tailwind) and re-exports `Products`.

## Prerequisites

- Node.js >= 20
- pnpm or npm

## Installation

```bash
cd microfrontend-products
pnpm install
```

## Scripts

- `pnpm start` – start dev server at `http://localhost:3001`
- `pnpm build` – build production assets to `dist/`

## Tailwind & PostCSS

- Tailwind config: `tailwind.config.js`
- PostCSS config: `postcss.config.mjs`
- CSS entry: `src/index.css`

## Module Federation Exposes

In `rspack.config.ts`:

```js
exposes: {
  './Products': './src/components/Products'
}
```

Shared: `react`, `react-dom`.
