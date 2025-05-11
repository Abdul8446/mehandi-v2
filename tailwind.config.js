/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx,mdx}',
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
      
      // For the "src" directory (if you're using it in Next.js)
      './src/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
          serif: ['Playfair Display', 'serif'],
        },
        colors: {
          brown: {
            50: '#fdf8f6',
            100: '#f2e8e5',
            200: '#eaddd7',
            300: '#e0cec7',
            400: '#d2bab0',
            500: '#bfa094',
            600: '#a18072',
            700: '#977669',
            800: '#846358',
            900: '#43302b',
          },
          sage: {
            50: '#f8faf7',
            100: '#e8ede6',
            200: '#d1dccf',
            300: '#b3c4b0',
            400: '#96ab92',
            500: '#7a9276',
            600: '#5f775c',
            700: '#4c5f4a',
            800: '#3d4c3c',
            900: '#2f3a2e',
          }
        },
      },
    },
    plugins: [],
  }

