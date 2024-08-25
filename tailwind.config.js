/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "320px", // Eng kichik ekran o'lchami
      sm: "480px", // Kichik ekran
      md: "640px", // O'rta ekran
      lg: "768px", // Katta ekran
      xl: "1024px", // Juda katta ekran
      "2xl": "1280px", // 2x katta ekran
      "3xl": "1440px" // 3x katta ekran // Juda katta ekran (1600px va yuqori)
    },
    extend: {}
  },
  plugins: []
};
