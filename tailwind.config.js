/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns:{
        wrapper:"1fr minmax(auto,1200px) 1fr"
      },     
    },
    colors:{
      "black":"#2D3436",
      "purple":"#6C5CE7",
      "gray":"#00000030",
      "yellow":"#FFEAA7",
      "graysoft":"#C2C2C224",
      "yellowdark":"#FDCB6E",
      "white":"#FFFFFF",
      "pink":"#E84393",
      "blue":"#0984E3",
      "green":"#00B894",
      
    },
    fontWeight:{
      "400":"400",
      "700":"700",
      "800":"800",
      "900":"900",
    }
  },
  plugins: [],
}
