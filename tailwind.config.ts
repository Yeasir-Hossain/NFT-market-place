import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '0.5rem',
        sm: '0.5rem',
        lg: '0.5rem',
        xl: '3rem',
        '2xl': '4rem',
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3D00B7',
          darker: '#25006F'
        },
        secondary: '#00AC4F',
        danger: '#FF002E',
        sky: '#14C8B0',
        'light-text': '#565656',
        'custom-grey': '#292D32',
        'custom-stroke': '#EFEFEF',
        'custom-slate': '#696969',
        'custom-white': '#F5F5F5',
      },
      fontFamily: {
        'dm': ['DM Sans', 'sans-serif']
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      }
    },
  },
  plugins: [],
};
export default config;
