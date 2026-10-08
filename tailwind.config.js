/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#070b12",
          900: "#0c1220",
          800: "#121a2b",
          700: "#1b2740"
        },
        mist: "#e7eef8",
        signal: "#2dd4bf",
        signal2: "#38bdf8"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"]
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(45, 212, 191, 0.18), 0 18px 50px rgba(2, 8, 23, 0.35)"
      }
    }
  },
  plugins: []
};
