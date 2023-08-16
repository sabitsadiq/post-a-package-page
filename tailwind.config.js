/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  safelist: ['bg-[#993918]', 'bg-[#FFD700]', 'bg-[#FF5631]', 'bg-[#08E06C]'], // Add the classes you want to preserve

  theme: {
    extend: {},
  },
  plugins: [],
};
