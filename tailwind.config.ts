/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./constants/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    // container: {
    //   center: true,
    //   padding: "2rem",
    //   screens: {
    //     "2xl": "1400px",
    //   },
    // },
    extend: {
      colors: {
		foodGradient: "#0179FE",
		primary: '#F54748',
		secondary: '#FDC55E',
		dark: '#191919',
		light: '#FFFFFF',
		gray: {
			25: "#FCFCFD",
			200: "#EAECF0",
			300: "#D0D5DD",
			500: "#667085",
			600: "#475467",
			700: "#344054",
			900: "#101828",
		  },
		  auth: '#FDC55E',
	  },
    backgroundImage: {
      "background-gradient": "linear-gradient(90deg, #F54748 0%, #F54748 100%)",
      "hero-gradient": "url('/assets/lines.svg')",
     "food-gradient": "linear-gradient(90deg, #FFC26B 0%, #FF8D8E 100%)",
    },
      
      boxShadow: {
        form: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
        button:
            "0px 15px 30px #df69514c;",
        profile:
            "0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)",
        Card: "8px 10px 16px 0px rgba(0, 0, 0, 0.05)",
      },
      fontFamily: {
        sofiaSans: "var(--font-sofiaSans)",
        "sofiaSansCondenced": "var(--font-sofiaCondensed)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
