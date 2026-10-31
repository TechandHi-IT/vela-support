import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        vela: {
          silk: "#F5F5F7",
          obsidian: "#0A0A0A",
          gold: "#B8860B",
          taupe: "#8E8E93",
        },
      },
    },
  },
  plugins: [],
};

export default config;
