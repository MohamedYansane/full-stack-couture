/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./app/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui"],
        serif: ["ui-serif", "Georgia"],
        mono: ["ui-monospace", "SFMono-Regular"],
        display: ["Oswald"],
        jetbrain: ["JetBrains Mono"],
        nunito: ["Nunito", "sans-serif"],
        body: ["Open Sans"],
        corben: ["Corben"],
        "red-hat": ["Red Hat Display", "sans-serif"],
      },
      colors: {
        "primary-blue": "#5073fb",
        "primary-gradient":
          "linear-gradient(90deg, rgba(16,36,62,1) 0%, rgba(80,115,251,1) 35%, rgba(0,212,255,1) 100%)",
        "doctor-blue": "#5073fb",
        primary: "#1565D8",
        dark: {
          hard: "#0D2436",
          soft: "#183B56",
        },
        hero: {
          gray: "#5A7184",
          "search-input": "#959EAD",
          primary: "#1565D8",
        },
      },
    },
  },
  plugins: [],
};
