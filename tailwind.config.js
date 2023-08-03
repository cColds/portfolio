/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-dark-blue": "var(--primary-color)",
        background: "var(--background)",
        accent: "var(--accent)",
      },

      fontFamily: {
        "inter-bold": ["var(--inter-bold)", "system-ui", "-apple-system"],
      },
    },
  },
  plugins: [],
};
