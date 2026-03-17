/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '320px',
      'sm': '375px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      colors: {
        'eco-bg': '#FFFFFF',
        'eco-accent': '#CFEE0C',
        'eco-headline': '#00160A',
        'eco-caption': '#485C11',
        'eco-divider': '#E9E9E9',
        'eco-paragraph': '#6F6F6F',
        'eco-on-accent': '#FFFFFF',
      },
      fontFamily: {
        'headline': ['"Oswald"', '"Helvetica Neue"', 'sans-serif'],
        'headline-cond': ['"Oswald"', '"Helvetica Neue"', 'sans-serif'],
        'display': ['"Oswald"', '"Helvetica Neue"', 'sans-serif'],
        'body': ['"DM Sans"', 'sans-serif'],
        'inter': ['"Inter"', 'sans-serif'],
        'mono': ['"Roboto Mono"', 'monospace'],
      },
      fontSize: {
        // Mobile-first tokens
        'mobile-headline': ['46px', { lineHeight: '0.85em', letterSpacing: '-0.05em', fontWeight: '700' }],
        'mobile-heading-1': ['50px', { lineHeight: '0.95em', letterSpacing: '-0.03em', fontWeight: '700' }],
        'mobile-heading-3': ['18px', { lineHeight: '1em', letterSpacing: '-0.03em', fontWeight: '700' }],
        'mobile-display': ['64px', { lineHeight: '1em', letterSpacing: '-0.04em', fontWeight: '700' }],
        'mobile-paragraph': ['20px', { lineHeight: '1.4em', letterSpacing: '-0.005em', fontWeight: '400' }],
        'mobile-paragraph-sm': ['16px', { lineHeight: '1.4em', letterSpacing: '-0.005em', fontWeight: '400' }],
        'mobile-link': ['14px', { lineHeight: '1.4em', letterSpacing: '-0.025em', fontWeight: '700' }],
        'mobile-caption': ['10.5px', { lineHeight: '1.4em', letterSpacing: '-0.03em', fontWeight: '400' }],
        // Desktop tokens (from Figma)
        'display-2': ['96px', { lineHeight: '0.85em', letterSpacing: '-0.05em', fontWeight: '700' }],
        'heading-1': ['60px', { lineHeight: '0.95em', letterSpacing: '-0.03em', fontWeight: '700' }],
        'heading-3': ['18px', { lineHeight: '1em', letterSpacing: '-0.03em', fontWeight: '700' }],
        'display-stats': ['80px', { lineHeight: '1em', letterSpacing: '-0.04em', fontWeight: '700' }],
        'paragraph': ['20px', { lineHeight: '1.4em', letterSpacing: '-0.005em', fontWeight: '400' }],
        'link': ['14px', { lineHeight: '1.4em', letterSpacing: '-0.025em', fontWeight: '700' }],
        'caption': ['12px', { lineHeight: '1.4em', letterSpacing: '-0.01em', fontWeight: '400' }],
        // Inter tokens (Testimonials)
        'inter-heading': ['24px', { lineHeight: '1.4em', letterSpacing: '-0.015em', fontWeight: '600' }],
        'inter-body': ['18px', { lineHeight: '1.45em', letterSpacing: '-0.005em', fontWeight: '500' }],
      },
      letterSpacing: {
        'tighter-5': '-0.05em', // -5%
        'tighter-4': '-0.04em', // -4%
        'tighter-3': '-0.03em', // -3%
        'tighter-2.5': '-0.025em', // -2.5%
        'tighter-1.5': '-0.015em', // -1.5%
        'tighter-1': '-0.01em', // -1%
        'tighter-0.5': '-0.005em', // -0.5%
      },
      spacing: {
        '2.5': '10px',
        '3.5': '14px',
        '4.5': '18px',
        '5.5': '22px',
        '15': '60px',
        '18': '72px',
        '20': '80px',
        '30': '120px',
      },
      borderRadius: {
        'eco': '112.23px',
        'eco-card': '13.6206px',
        'eco-pill': '100px',
      },
      boxShadow: {
        'eco-card': '0px 6px 12px 0px rgba(0, 0, 0, 0.03), 0px 4px 8px 0px rgba(0, 0, 0, 0.02)',
        'eco-card-sm': '0px 5.1px 10.2px 0px rgba(0, 0, 0, 0.03), 0px 3.4px 6.8px 0px rgba(0, 0, 0, 0.02)',
      },
      backdropBlur: {
        'mobile-nav': '30px',
      },
      animation: {
        'fadeIn': 'fadeIn 0.2s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
