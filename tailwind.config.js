const { transform } = require('next/dist/build/swc');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    
    extend: {
      transitionTimingFunction: {
        'custom-bezier': 'cubic-bezier(0.8, 0.2, 0.2, 0.8)',
      },
      colors: {
        // "#2600fc"
        // "#110218"
        "base-color": "#2600fc",
        "base-glass-color": "#00000050",
        "glass-color": "#ffffff10", 
        "form-color" : "#00acee",
        "button-color": "#f8911e",
        "button-hover-color": "#f8922e",
        "tg-gradient-1-start": "rgba(2, 154, 210, 1)",
        "tg-gradient-1-end": "rgba(3, 39, 83, 1)",
      },
      backgroundImage: {
        "tg-gradient-1":
          "linear-gradient(25deg, rgba(2, 154, 210, 1), rgba(3, 39, 83, 1))",
      },
      boxShadow: {
        "shadow-bg" : "0 0 5px rgba(0, 0, 0, 0.8)",
      },
      keyframes: {
        fadeInDown: {
          "0%": { opacity: 0, transform: "translateY(-80px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        zoomInOut : {
           "0%" : {transform: "scale(.8, .8)"},
           "50%" : {transform: "scale(1, 1)"},
           "100%" : {transform: "scale(.8, .8)"}
        },
        zoomInOut2 : {
          "0%" : {transform: "scale(.5, .5)"},
          "50%" : {transform: "scale(1, 1)"},
          "100%" : {transform: "scale(.5, .5)"}
       },
        colorSplits: {
          "25%": {
            "text-shadow": "-0.02em 0 0 #cca354, 0.025em 0 0 #8f6d2b;",
          },
          "75%": {
            "text-shadow": "-0.035em 0 0 #cca354, 0.04em 0 0 #8f6d2b;",
          },
        },
        starMove: {
          "0%": { transform: "translate(0, 0) scale(1)" },
          "50%": {
            transform:
              "translate(calc(-100vw + 200px), calc(-100vh + 200px)) scale(0.5)",
          },
          "100%": {
            transform:
              "translate(calc(100vw - 200px), calc(100vh - 200px)) scale(1)",
          },
        },
        rotate360: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        }
      },
      animation: {
        fadeInDown: "fadeInDown 0.75s ease-in-out",
        zoomInOut : "zoomInOut 5s ease-in-out infinite",
        zoomInOut2 : "zoomInOut2 5s ease-in-out infinite",
        colorSplits: "colorSplits 1.25s steps(2, end) infinite",
        starMove : "starMove linear infinite",
        rotate360 : "rotate360 4s linear infinite",
      },
      gradientColorStops: {
        primary: "#000415",
        secondary: "#00000c",
        danger: "#001340",
      },
    },
  },
  plugins: [],
};
