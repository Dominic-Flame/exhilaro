// This is the Tailwind v4 plugin that powers the @import "tailwindcss" line.

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
