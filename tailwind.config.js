/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        rage: {
          black: '#090909',
          red: '#A30D19',
          blood: '#6E0A12',
          steel: '#1A1A1D',
        },
      },
      boxShadow: {
        rage: '0 20px 40px rgba(163, 13, 25, 0.25)',
      },
    },
  },
  plugins: [],
}
