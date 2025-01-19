import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        neon: " 0 0 5px theme('colors.purple.200'), 0 0 20px theme('colors.purple.700')",
      },
    },
  },
  plugins: [],
} satisfies Config;
