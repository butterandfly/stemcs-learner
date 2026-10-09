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
          lime: "#00E676",
          cyan: "#00E5FF",
          purple: "#7C4DFF",
          orange: "#FF6D00",
          blue: "#2979FF",
          dark: "#0F172A",
          card: "#1E293B",
          surface: "#0B1120",
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
        'dopamine-pink': '0 6px 0 #C2185B',
        'dopamine-lime': '0 6px 0 #00B248',
        'dopamine-yellow': '0 6px 0 #C79A00',
        'dopamine-cyan': '0 6px 0 #009BB0',
        'dopamine-purple': '0 6px 0 #512DA8',
        'dopamine-orange': '0 6px 0 #C43C00',
        'dopamine-blue': '0 6px 0 #1565C0',
        'scratch-motion': '0 5px 0 #2A70D6',
        'scratch-events': '0 5px 0 #C79400',
        'scratch-control': '0 5px 0 #C78200',
        'scratch-looks': '0 5px 0 #7342CF',
        'chunky': '0 6px 0 rgba(0, 0, 0, 0.25)',
        'chunky-sm': '0 4px 0 rgba(0, 0, 0, 0.2)',
      },
      fontFamily: {
        mono: ['"Fira Code"', '"JetBrains Mono"', 'ui-monospace', 'monospace'],
        display: ['"Fredoka"', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
