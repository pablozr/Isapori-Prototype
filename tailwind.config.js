/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'crimson': ['Crimson Text', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'noir-supreme': '#1a1a1a',
        'blanc-pur': '#fefefe',
        'or-imperial': '#d4af37',
        'or-light': '#f4e04d',
        'gris-clair': '#666666',
      },
      letterSpacing: {
        'widest': '0.1em',
        'widest-xl': '0.2em',
        'widest-2xl': '0.3em',
        'widest-3xl': '0.4em',
        'extreme': '0.5em',
      },
      spacing: {
        '15': '60px',
        '25': '100px',
      },
      animation: {
        'fade-in-down': 'fadeInDown 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'frame-float': 'frameFloat 6s ease-in-out infinite',
        'float-particle': 'floatParticle linear infinite',
        'fade-out-loader': 'fadeOutLoader 3s ease-in-out forwards',
        'reveal-logo': 'revealLogo 1.5s cubic-bezier(0.4, 0, 0.2, 1) 0.5s forwards',
        'expand-line': 'expandLine 1.5s cubic-bezier(0.4, 0, 0.2, 1) 2s forwards',
        'scroll-wheel': 'scrollWheel 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'spin': 'spin 1s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'gradient-shift': 'gradientShift 3s ease-in-out infinite',
      },
      keyframes: {
        fadeInDown: {
          'from': {
            opacity: '0',
            transform: 'translateY(-30px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        frameFloat: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
        floatParticle: {
          '0%': {
            transform: 'translateY(100vh) translateX(0)',
            opacity: '0',
          },
          '10%': {
            opacity: '1',
          },
          '90%': {
            opacity: '1',
          },
          '100%': {
            transform: 'translateY(-100px) translateX(50px)',
            opacity: '0',
          },
        },
        fadeOutLoader: {
          '0%': {
            opacity: '1',
          },
          '90%': {
            opacity: '1',
          },
          '100%': {
            opacity: '0',
            visibility: 'hidden',
          },
        },
        revealLogo: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        expandLine: {
          '0%': {
            width: '0',
          },
          '100%': {
            width: '120px',
          },
        },
        scrollWheel: {
          '0%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
          '50%': {
            opacity: '0.5',
            transform: 'translateY(6px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-200% 0',
          },
          '100%': {
            backgroundPosition: '200% 0',
          },
        },
        spin: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
        pulseGlow: {
          '0%, 100%': {
            boxShadow: '0 0 5px rgba(201, 169, 97, 0.5)',
          },
          '50%': {
            boxShadow: '0 0 20px rgba(201, 169, 97, 0.8)',
          },
        },
        gradientShift: {
          '0%, 100%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
        },
      },
      boxShadow: {
        'luxury': '0 20px 60px rgba(201, 169, 97, 0.15)',
        'dramatic': '0 40px 120px rgba(0, 0, 0, 0.25)',
        'gold': '0 8px 32px rgba(201, 169, 97, 0.3)',
        'subtle': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'medium': '0 8px 32px rgba(0, 0, 0, 0.12)',
      },
      backdropBlur: {
        'subtle': '8px',
        'medium': '16px',
        'strong': '24px',
      },
    },
  },
  plugins: [],
}

