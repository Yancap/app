/** @type {import('tailwindcss').Config} */
// const { colors } = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    
    colors: {
      white: "#ffffff",
      red: {
        400: '#C83662',
        500: '#B4325C',
        600: '#9E274B',
        700: '#871034',
        800: '#710525',
      },
      purple: {
        100: '#E5E7FF',
        200: '#D6D8F6',
        300: '#B4B6DD',
        500: '#797CA5',
        800: '#2A2C47',
        900: '#1B1C2F',
      },
    },
    fontFamily: {
      'sans': ['Ubuntu', 'ui-sans-serif', 'system-ui', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
