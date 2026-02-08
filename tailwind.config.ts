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
          DEFAULT: '#0F4C81',
          light: '#1E6BA8',
          dark: '#0A3558',
          50: '#EFF6FC',
          100: '#D9E8F7',
          200: '#B3D1EF',
          300: '#7AADE0',
          400: '#3B85CB',
          500: '#0F4C81',
          600: '#0D4070',
          700: '#0A3558',
          800: '#072642',
          900: '#051B2E',
        },
        accent: {
          orange: '#F97316',
          green: '#16A34A',
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
