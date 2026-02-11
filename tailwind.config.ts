import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2EBC3B',
          light: '#4CCB57',
          dark: '#1C7626',
          50: '#F3FDF4',
          100: '#DEF9E1',
          200: '#BFF2C3',
          300: '#93E99A',
          400: '#62DD6F',
          500: '#2EBC3B',
          600: '#259732',
          700: '#1C7626',
          800: '#14581C',
          900: '#0D3B13',
        },
        accent: {
          orange: '#F4B400',
          green: '#84C225',
          cyan: '#35C3D8',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
}

export default config
