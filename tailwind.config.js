/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nav-color': 'var(--color-bg-nav)',
        'links-color': 'var(--color-text-links)',
        'hover-color': 'var(--color-general-hover)',
        'button-navbar-bg': 'var(--color-button-navbar-bg)',
        'button-bg-hover': 'var(--color-button-bg-hover)',
        'text-links-hover': 'var(--color-text-links-hover)',
        'text-color': 'var(--color-text)',
      },
      keyframes: {
        'slide-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'slide-left-infinite': 'slide-left 20s linear infinite',
      },
      fontFamily: {
        times: ['Times New Roman', 'Times', 'serif'],
      },
    },
  },
  plugins: [],
}

