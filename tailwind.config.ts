import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        kbp: {
          red: "#e10012",
          redDark: "#be0010",
          yellow: "#f8c400",
          yellowDeep: "#c98a00",
          ink: "#0b1f44",
          slate: "#3c5577",
          panel: "#f3f4f6",
          night: "#06153a"
        }
      },
      fontFamily: {
        display: ["ui-sans-serif", "system-ui", "sans-serif"],
        body: ["ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 12px 32px rgba(11, 31, 68, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
