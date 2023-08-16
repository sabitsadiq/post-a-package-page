/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  options: {
    safelist: ["#12d900", "#FFD700", "#12d900", "#FFD700"], // Add the classes you want to preserve
  },

  theme: {
    extend: {},
  },
  plugins: [],
};
