import type { Config } from "tailwindcss";
import lineClamp from '@tailwindcss/line-clamp';

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary:"#fecaca",
        "custom-gray": "rgb(244, 246, 246)"
      },
      fontFamily: {
        //  'merienda': ['var(--font-merienda)'],
        //  'geist-sans': ['var(--font-geist-sans)'],
        //  'geist-mono': ['var(--font-geist-mono)'],
        //  'montserrat': ['var(--font-montserrat)'],
      },
    },
  },
  plugins: [
    lineClamp,
  ],
} satisfies Config;
