import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-background": "var(--main-background)",
        "sec-background": "var(--second-background)",
        "third-background": "var(--third-background)",
        "b-color": "var(--border-color)",
        "border-color-hover": "var(--border-color-hover)",
        "main-text": "var(--main-text)",
        "sec-text": "var(--second-text)",
        "btn-prim": "var(--btn-prim)",
        "btn-text": "var(--btn-text)",
        "btn-sec": "var(--btn-sec)",
      },
      animation: {
        "gradient-x": "gradient-x 1s ease infinite",
        "slide-left": "slide-left 0.4s ease-out",
        skeleton: "skeleton 1.5s ease-in-out infinite",
        "lds-roller": "lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite",
        model: "model 0.4s cubic-bezier(0.5, 0, 0.5, 1) ",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        "slide-left": {
          from: { transform: "translateX(1000px)" },
          to: { transform: "translateX(0px)" },
        },
        skeleton: {
          "0%": { opacity: "1" },
          "50%": { opacity: "0.4 " },
          "100%": { opacity: "1" },
        },
        "lds-roller": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },

        model: {
          "0%": { opacity: "0", scale: "0" },
          "100%": { opacity: "1", scale: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
