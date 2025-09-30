import type { Config } from "tailwindcss";
import desktopPlugin from "./src/utils/desktop-variants";
import baseConfig from "./src/utils/base-tailwind-config"; // PASTIKAN PATH INI BENAR

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/(sidebar)/layout.tsx",
  ],
  presets: [baseConfig],
  plugins: [desktopPlugin],
} satisfies Config;

export default config;
