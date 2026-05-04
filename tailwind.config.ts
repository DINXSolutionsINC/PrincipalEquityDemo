import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#07182f",
        navy: "#0b2242",
        steel: "#627086",
        mist: "#eef2f6",
        gold: "#c9a24a",
        copper: "#9b6a3c",
        pine: "#1f5d54",
      },
      boxShadow: {
        soft: "0 18px 60px rgba(7, 24, 47, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
