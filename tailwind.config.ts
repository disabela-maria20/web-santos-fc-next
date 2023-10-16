import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "575px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
      xxl: "1620px",
    },

    colors: {
      white: "#fff",
      yellow: {
        100: "#facc10",
        200: "#cdaa16",
      },
      gray: {
        100: "#535353",
        200: "#2b2b2b",
      },
      black: "#000",
    },
    fontSize: {
      0: "0px",
      4: "4px",
      6: "6px",
      8: "8px",
      10: "10px",
      13: "13px",
      15: "15px",
      18: "18px",
      22: "22px",
      26: "26px",
      31: "31px",
      38: "38px",
      45: "45px",
      55: "55px",
      66: "66px",
      79: "79px",
      95: "95px",
      114: "114px",
      136: "136px",
      164: "164px",
    },
    lineHeight: {
      title: "1.2",
      paragraph: "1.61",
    },
    spacing: {
      0: "0px",
      2: "2px",
      4: "4px",
      6: "6px",
      8: "8px",
      10: "10px",
      13: "13px",
      15: "15px",
      18: "18px",
      22: "22px",
      26: "26px",
      31: "31px",
      38: "38px",
      45: "45px",
      55: "55px",
      66: "66px",
      79: "79px",
      95: "95px",
      114: "114px",
      136: "136px",
      164: "164px",
      185: "185px",
      "4/3": "45%",
      "-4/3": "-45%",
    },
    extend: {
      fontFamily: {
        roboto: ["var(--font-roboto)"],
      },
      backgroundImage: {
        header: "url('/img/bg.png')",
        santos: "url(/img/bg-santos.png)",
        retangulo: "url(/img/retangulo.png)",
      },
      animation: {
        movie: "movie 2s linear infinite forwards",
      },
      keyframes: {
        movie: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
};
export default config;
