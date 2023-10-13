/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        accent: "var(--accent)",
      },

      keyframes: {
        wiggle: {
          "0%": { transform: "rotate(0)" },
          "10%": { transform: "rotate(-15deg)" },
          "20%": { transform: "rotate(16deg)" },
          "30%": { transform: "rotate(-15deg)" },
          "40%": { transform: "rotate(12deg)" },
          "50%": { transform: "rotate(0)" },
          "100%": { transform: "rotate(0)" },
        },
      },

      fontFamily: {
        "inter-bold": ["var(--inter-bold)", "system-ui", "-apple-system"],
      },
    },
  },
  plugins: [typography],
};
