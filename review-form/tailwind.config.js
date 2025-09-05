/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./ReviewForm.tsx"
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'pietrafina': {
          'primary': '#1a1a1a',
          'primary-light': '#2d2d2d',
          'accent': '#6b7280',
          'accent-light': '#9ca3af',
          'bg-primary': '#fafafa',
          'bg-secondary': '#ffffff',
          'bg-tertiary': '#f3f4f6',
          'text-primary': '#111827',
          'text-secondary': '#374151',
          'text-muted': '#6b7280',
          'text-light': '#9ca3af',
          'success': '#10b981',
          'success-light': '#34d399',
        }
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        'xxl': '48px',
        'xxxl': '64px',
      },
      boxShadow: {
        'light': '0 1px 3px rgba(0, 0, 0, 0.05)',
        'medium': '0 4px 12px rgba(0, 0, 0, 0.08)',
        'large': '0 8px 25px rgba(0, 0, 0, 0.12)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'bounce-in': 'bounceIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'border-glow': 'borderGlow 8s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceIn: {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '50%': { transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        borderGlow: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.8' },
        },
      }
    },
  },
  plugins: [],
}
