/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {},
  fontFamily: {
    crossten: ['Crossten'],
    notoSans: ['Noto Sans JP'],
  },
  fontWeight: {
    light: 300,
    normal: 400,
    bold: 600,
    extrabold: 700,
  },
  colors: {
    primary: {
      blue: '#054C9E',
      yellow: '#FFFCD9',
      gold: '#C09F2E',
      gray: '#D1C9B6',
    },
    pink: {
      50: '#FCF8FA',
      600: '#CC8DAD',
      700: '#BF7098',
      800: '#AD487B',
    },
    gray: {
      50: '#F9F9F9',
      100: '#ECEEEE',
      200: '#D9D9D9',
      700: '#808B8B',
      800: '#616F6F',
      900: '#344242',
    },
    orange: '#F2994A',
    yellow: '#F2C94C',
    black: '#344242',
    white: '#FFFFFF',
  },
  fontSize: {
    xs: '0.75rem', // 12px
    sm: '0.875rem', // 14px
    base: '1rem', // 16px
    lg: '1.5rem', // 24px
    xl: '2rem', // 32px
    '2xl': '2.25rem', // 36px
  },
  screens: {
    ph: '320px',
    pc: '750px',
    dt: '1350px',
  },
  extend: {
    boxShadow: {
      'text-shadow': '2px 2px 2px rgba(0, 0, 0, 0.2)',
    },
    keyframes: {
      'left-to-right': {
        '0%': { transform: 'translateX(-100%)' },
        '100%': { transform: 'translateX(0%)' },
      },
    },
    animation: {
      'left-to-right': 'left-to-right 1s ease-out',
    },
  },
};
