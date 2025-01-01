/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";


export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'light-tan': '#faf5e4',
      'orange': '#f8b400',
      'dark-green': '#004445',
      'light-green': '#2c786c',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'white': '#f8f8f8',
    },
    fontFamily: {
      sans: ['var(--noto-font)'],
      serif: ['var(--fira-font)'],
      display: ['var(--display-font)'],
      cute: ['var(--cute-font)'],
      large: ['var(--large-font)'],
    },
    textSizes: {
      '4xs': '.375rem',   // 6px
      '3xs': '.5rem',     // 8px
      '2xs': '.625rem',   // 10px
      'xs': '.75rem',     // 12px
      'sm': '.875rem',    // 14px
      'base': '1rem',     // 16px
      'lg': '1.125rem',   // 18px
      'xl': '1.25rem',    // 20px
      '2xl': '1.5rem',    // 24px
      '3xl': '1.875rem',  // 30px
      '4xl': '2.25rem',   // 36px
      '5xl': '3rem',      // 48px
      '6xl': '4rem',      // 64px
    },
    tracking: {
      'condensed': '-.15em',
      'tightest': '-.1em',
      'tighter': '-.05em',
      'tight': '-.025em',
      'normal': '0',
      'wide': '.025em',
      'wider': '.05em',
      'widest': '.1em',
      'extended': '.15em',
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
    },
    borderWidths: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '4': '4px',
      '8': '8px',
    },
    
 
  padding: {
    'px': '1px',
    '0': '0',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '8': '2rem',
    '10': '2.5rem',
    '12': '3rem',
    '16': '4rem',
    '20': '5rem',
    '24': '6rem',
    '32': '8rem',
    '40': '10rem',
  },
  margin: {
    'auto': 'auto',
    'px': '1px',
    '0': '0',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '8': '2rem',
    '10': '2.5rem',
    '12': '3rem',
    '16': '4rem',
    '20': '5rem',
    '24': '6rem',
    '32': '8rem',
    '40': '10rem',
  },


  
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
  
} satisfies Config;
