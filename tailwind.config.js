/** @type {import('tailwindcss').Config} */

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        mobile: '420px',
        'mobile-x': '480px'
      },
      colors: {
        transparent: 'transparent',
        error: { DEFAULT: '#FD384F', light: '#FD384F', dark: '#FD384F' },
        font: { DEFAULT: '#1E1A17', light: '#1E1A17', dark: '#C6C5CD' },
        black: { DEFAULT: '#101010', light: '#101010', dark: '#1B1E20' },
        white: { DEFAULT: '#ffffffcc', light: '#ffffffcc', dark: '#FCFCFC' },
        primary_a: { DEFAULT: '#FE6D2C', light: '#FE6D2C', dark: '#FE6D2C' },
        primary_b: { DEFAULT: '#FD6C2A', light: '#FD6C2A', dark: '#FD6C2A' },
        primary_c: { DEFAULT: '#64382B', light: '#64382B', dark: '#64382B' },
        background: { DEFAULT: '#C3B3A4', light: '#C3B3A4', dark: '#1B1B1F' },
        foreground: { DEFAULT: '#FFF4E6', light: '#FFF4E6', dark: '#27282D' }
      }
    },
    fontFamily: {
      sans: ['Barlow', 'Roboto', 'sans-serif'],
      serif: ['Smooch sans', 'Roboto', 'sans-serif']
    }
  },
  plugins: []
};
