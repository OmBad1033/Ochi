/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      colors: {
        'custom-gray': '#E2E2B6', // Define your custom color
      },
    },
  },
  plugins: [],
}
