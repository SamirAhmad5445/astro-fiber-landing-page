/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          400: "#4d13d1",
          500: "#3f10ac",
        },
        neutral: {
          100: "#ffffff",
          200: "#fbf8f3",
          300: "#e5ddfd",
          400: "#dadada",
          500: "#a9a9a9",
          600: "#4f4f4f",
          900: "#000000",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      padding: {
        18: "4.375rem",
      },
    },
  },
  plugins: [],
};
