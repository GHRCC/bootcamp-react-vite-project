/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "verde-site": "#245953",
        "verde-site2": "#408E91",
        "rosa-site": "#E49393",
        "branco-site": "#D8D8D8",
        "rosa-neon": "#ff0d51",
        "azul-neon": "#40f2fe",
      },
    },
  },
  plugins: [],
};
