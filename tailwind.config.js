/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        espresso: 'var(--color-espresso)',
        charcoal: 'var(--color-charcoal)',
        elevated: 'var(--color-elevated)',
        'rose-nude': 'var(--color-rose-nude)',
        pearl: 'var(--color-pearl)',
        muted: 'var(--color-muted)',
      },
      boxShadow: {
        card: 'var(--shadow-card)',
        elevated: 'var(--shadow-elevated)',
        cta: 'var(--shadow-cta)',
      },
    },
  },
  plugins: [],
};
