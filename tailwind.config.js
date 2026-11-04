/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lila: {
          50: '#f7f5fc',
          100: '#efe9f9',
          200: '#e0d6f4',
          300: '#cabdec',
          400: '#b19bdf',
          500: '#9a7fd0',
          600: '#8b6ac4',
          700: '#7453a8',
          800: '#5e4386',
          900: '#4d3868',
        },
        rosa: {
          50: '#fef5f8',
          100: '#fde8f0',
          200: '#fbd0e0',
          300: '#f7a8c5',
          400: '#f27aa6',
          500: '#ea5388',
          600: '#d83d72',
          700: '#b82d5c',
          800: '#93264a',
          900: '#7a213f',
        },
        crema: '#fffaf6',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Fraunces"', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(122, 90, 168, 0.18)',
        'soft-lg': '0 20px 60px -16px rgba(122, 90, 168, 0.25)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s ease-out forwards',
        'fade-in': 'fade-in 0.4s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
