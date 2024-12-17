import type { Config } from "tailwindcss";

const config: Config = {
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
      },
      fontFamily: {
        geistMonoVF: "geistMonoVF",
        geistVF: "geistVF",
        irish: "Irish Grover",
        audiowide: ["audiowide", "sans-serif", "system-ui"],
        fade: ["fade", "sans-serif", "system-ui"],
        earthorbiter: ["earthorbiter", "sans-serif", "system-ui"],
        elegant: ["elegant", "sans-serif", "system-ui"],
        stickmarket: ["stickmarket", "sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};
export default config;
