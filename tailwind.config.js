/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        BgColor:'#EEF2FF',
        CoverVideoBg: "#DAF2F1",
        testemunhoBg: "#F7F5FD",
      },
      fontFamily:{
        inter: ['Inter', 'sans-serif'],
      },
       height: {
        '500': '500px',
        '600': '600px',
        '800': '800px',
        '1100': '1100px',
        '1212': '1212px',
      },
    },
  },
  plugins: [],
};
