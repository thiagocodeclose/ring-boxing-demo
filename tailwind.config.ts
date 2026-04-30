import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'rg-crimson': 'var(--crimson)',
        'rg-cream':   'var(--cream)',
        'rg-bg':      'var(--bg)',
        'rg-surface': 'var(--surface)',
        'rg-text':    'var(--text)',
        'rg-muted':   'var(--muted)',
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'sans-serif'],
        body:    ['var(--font-body)',    'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
