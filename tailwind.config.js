/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "320px", // Kichik ekran (320px va yuqori)
      sm: "480px", // Kichik ekran (480px va yuqori)
      md: "768px", // O'rta ekran (768px va yuqori)
      lg: "1024px", // Katta ekran (1024px va yuqori)
      xl: "1280px", // Juda katta ekran (1280px va yuqori)
      "2xl": "1440px", // Juda katta ekran (1536px va yuqori)
      "3xl": "1600px" // Juda katta ekran (1600px va yuqori)
    },
    extend: {}
  },
  plugins: []
};
