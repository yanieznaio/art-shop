import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        neue: ['var(--font-neue)'],
        canela: ['var(--font-canela)']
      },
      colors: {
        'whitegrey': "#E5E7EB",
        "cream": "#EBE8E3",
        "grey": "#8D8583",
        "colortext": "#EBE8E3",
        "colortitle": "#191414",




      }
    },
  },
  plugins: [],
};
export default config;
