/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {  
      gridTemplateRows:{
        container:"auto 1fr auto",
        basket:"auto 1fr auto auto",
      },
      gridTemplateColumns:{
        layout:"1fr 1fr",
        wrapper:"1fr 2fr",
        body:"4fr 2fr",
        basketItem:"7fr 1fr 1fr"
      },
      boxShadow:{
        "button":"0px 8px 24px 5px #EA7C6940",
        "loading":"0px 8px 24px 5px #9ca3af40",
        "sideLink":"0px 8px 24px #9ca3af32",
        topLink:"6px 5px 0px 2px #252836",
        bottomLink:"6px -2px 0px 2px #252836",
      }, 
      colors:{
        "primary":"#EA7C69",
      }  
    },
    
  },
  plugins: [],
}
