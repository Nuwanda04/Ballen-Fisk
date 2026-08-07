/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      ...{
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xl2: '1440px',
        '2xl': '1536px',
        // The browser setup used for the intermediate wide view is roughly 1600px
        // including chrome, so the usable CSS viewport is slightly narrower.
        '2xl3': '1580px',
        '2xl2': '1680px',
      },
      '3xl': '1920px',
      '4xl': '2560px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {},
  },
  plugins: [],
};
