/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F7F3EE',
        blush: '#E9D8D3',
        champagne: '#C9AE8A',
        espresso: '#2A211E',
        brown: '#171312',
        taupe: '#B7AAA2',
        ink: '#1F1815',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.35em',
      },
      maxWidth: {
        editorial: '1400px',
      },
    },
  },
  plugins: [],
};
