/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'ferreteria-dark': {
          '50': '#34495e',
          '100': '#2c3e50',
        },
        'ferreteria-accent': {
          'orange': '#e67e22',
          'gold': '#f39c12',
        }
      }
    },
  },
  plugins: [],
}

