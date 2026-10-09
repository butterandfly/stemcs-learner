/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dopamine: {
          pink: "#FF2A85",
          yellow: "#FFD000",
          lime: "#22C55E",
          cyan: "#0EA5E9",
          purple: "#8B5CF6",
          orange: "#FF6D00",
          blue: "#2563EB",
          surface: "#F8FAFC",
          card: "#FFFFFF",
          border: "#E2E8F0",
        },
        scratch: {
          motion: "#4C97FF",
          looks: "#9966FF",
          sound: "#CF63CF",
          events: "#FFBF00",
          control: "#FFAB19",
          sensing: "#5CB1D6",
          operators: "#59C059",
          variables: "#FF8C1A",
        }
      },
      boxShadow: {
        'dopamine-pink': '0 5px 0 #E11D48',
        'dopamine-lime': '0 5px 0 #16A34A',
        'dopamine-yellow': '0 5px 0 #D97706',
        'dopamine-cyan': '0 5px 0 #0284C7',
        'dopamine-purple': '0 5px 0 #6D28D9',
        'dopamine-orange': '0 5px 0 #EA580C',
        'dopamine-blue': '0 5px 0 #1D4ED8',
        'chunky-card': '0 4px 0 #E2E8F0',
        'chunky-gray': '0 5px 0 #CBD5E1',
        'scratch-motion': '0 5px 0 #2E75D9',
        'scratch-events': '0 5px 0 #D99B00',
        'scratch-control': '0 5px 0 #D97E00',
        'scratch-looks': '0 5px 0 #7744DB',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        display: ['"Fredoka"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', '"PingFang SC"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
