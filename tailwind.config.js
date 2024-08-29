/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        accent: {
          100: 'var(--accent-100)',
          300: 'var(--accent-300)',
          500: 'var(--accent-500)',
          800: 'var(--accent-800)',
        },
        primary: {
          100: 'var(--primary-100)',
          500: 'var(--primary-500)',
        },
      },
    },
  },
  plugins: [],
};
