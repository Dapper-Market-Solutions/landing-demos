/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        forest: {
          50:  '#f0faf4',
          100: '#d1f0de',
          200: '#a3e1bd',
          300: '#6dcc96',
          400: '#3db572',
          500: '#1a9a54',
          600: '#147a42',
          700: '#105e34',
          800: '#0c4527',
          900: '#082d1a',
        },
        sand: {
          50:  '#fdfbf7',
          100: '#f9f3e8',
          200: '#f0e4cc',
          300: '#e4cfaa',
          400: '#d4b683',
          500: '#c49a5c',
          600: '#a67d3d',
        },
        slate: {
          850: '#1a2332',
          950: '#0d1117',
        },
      },
    },
  },
  plugins: [],
}
