/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '100%': '100%',
        '90%': '90%',
        '80%': '80%',
        '70%': '70%',
        '60%': '60%',
        '50%': '50%',
        '40%': '40%',
      },
      height: {
        '100%': '100%',
        '90%': '90%',
        '80%': '80%',
        '70%': '70%',
        '60%': '60%',
        '50%': '50%',
        '40%': '40%',
      },
      colors: {
        'light-green' : '#00FFA7',
        'light-green1' : '#00ff73',
        'light-green2' : '#00a06b',
        'light-green3' : '#00ac78ad',
      },
      transitionProperty: {
        'transition5' : '5s'
      }
    },
  },
  plugins: [],
}

