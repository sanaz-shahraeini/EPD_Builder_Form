/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          darkest: '#1B3B48',  // Dark teal
          dark: '#45B7CE',     // Turquoise
          DEFAULT: '#2A7B9B',  // Medium blue
          light: '#A8E0EC',    // Light blue
          lightest: '#E6F7FB'  // Very light blue
        },
        'secondary': {
          dark: '#4B9460',     // Dark green
          DEFAULT: '#76B947',  // Medium green
          light: '#A4D65E'     // Light green
        },
        'terra': {
          green: '#A4D65E',    // Terra green
          blue: '#45B7CE',     // N blue
          dark: '#1B3B48'      // E/T dark blue
        }
      },
      keyframes: {
        'pulse-ring': {
          '0%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(69, 183, 206, 0.4)' },
          '70%': { transform: 'scale(1)', boxShadow: '0 0 0 10px rgba(69, 183, 206, 0)' },
          '100%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(69, 183, 206, 0)' },
        }
      },
      animation: {
        'pulse-ring': 'pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}