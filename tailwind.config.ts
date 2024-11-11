import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'olive-dark': '#2C2F00', // Color verde olivo oscuro
        'wine-red': '#921a36  ', // Color rojo vino
        'terracotta-pink': '#D76783', // Color rosa terracota
        'desert-sand': '#E1B378', // Color arena desierto
        'ivory-light': '#FFF5E1', // Color marfil claro
      },
    },
  },
  plugins: [],
} satisfies Config;
