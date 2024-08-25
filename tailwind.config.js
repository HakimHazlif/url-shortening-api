/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ["Poppins", "sans-serif"],
      },
      colors: {
        'cyan': 'hsl(180, 66%, 49%)',
        'dark-violet-100': 'hsl(257, 27%, 26%)',
        'red': 'hsl(0, 87%, 67%)',
        'gray': 'hsl(0, 0%, 75%)',
        'grayish-violet': 'hsl(257, 7%, 63%)',
        'dark-blue-200': 'hsl(255, 11%, 22%)',
        'dark-violet-200': 'hsl(260, 8%, 14%)'
      },
      backgroundImage: {
        "boost-desktop": "url('assets/images/bg-boost-desktop.svg')",
        "boost-mobile": "url('assets/images/bg-boost-mobile.svg')",
        "shorten-desktop": "url('assets/images/bg-shorten-desktop.svg')",
        "shorten-mobile": "url('assets/images/bg-shorten-mobile.svg')",
      },
      boxShadow: {
        xl: '0 0 6px rgba(0, 0, 0, 0.1)'
      }
    },
  },
  plugins: [require('tailwind-scrollbar'),],
}

