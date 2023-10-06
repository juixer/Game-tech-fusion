/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      'banner1': "url('./src/assets/Image/Banner1.png')",
      'footer-texture': "url('/img/footer-texture.png')",
    }
  },
  plugins: [require("daisyui")],
}

