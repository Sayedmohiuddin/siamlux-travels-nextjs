/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eef2ff',
          100: '#e0e7ff',
          600: '#1a2f5e',
          700: '#152548',
          800: '#0f1c36',
          900: '#0a1225',
        },
        gold: {
          300: '#fde68a',
          400: '#f59e0b',
          500: '#d97706',
          600: '#b45309',
        },
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(135deg, rgba(10,18,37,0.85) 0%, rgba(26,47,94,0.75) 100%)",
      },
    },
  },
  plugins: [],
}
