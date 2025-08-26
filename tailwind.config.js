/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
