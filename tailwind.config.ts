import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/blocks/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Spring theme (light mode)
        spring: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        // Forest theme (dark mode)
        forest: {
          50: '#f6f6f5',
          100: '#e7e7e5',
          200: '#d1d0cc',
          300: '#b0afa8',
          400: '#8c8a81',
          500: '#6f6d64',
          600: '#5c5a52',
          700: '#4d4b44',
          800: '#42403a',
          900: '#3a3833',
          950: '#1f1e1b',
        },
        // Main forest green
        'forest-green': {
          50: '#f3f8f6',
          100: '#e1ede7',
          200: '#c3dbd0',
          300: '#9ac2b0',
          400: '#6ea48c',
          500: '#4f8770',
          600: '#3d6c5a',
          700: '#32574a',
          800: '#2a463c',
          900: '#243a33',
          950: '#12211c',
        },
        // Brown accent for dark mode
        'warm-brown': {
          50: '#faf8f5',
          100: '#f2ede4',
          200: '#e5dac8',
          300: '#d3c1a3',
          400: '#bfa47a',
          500: '#b18c5d',
          600: '#a37951',
          700: '#886344',
          800: '#6f523b',
          900: '#5a4431',
          950: '#302318',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
}
export default config
