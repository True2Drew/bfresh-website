/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Placeholder colors - will be replaced with final brand palette in Phase 2
      colors: {
        // Temporary color palette based on BFresh branding
        // These will be replaced with final client-provided colors
      },
    },
  },
  plugins: [],
}

