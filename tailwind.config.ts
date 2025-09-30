import desktopPlugin from "@/utils/desktop-variants";
import baseConfig from "./tailwind-ui.config";
import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  presets: [baseConfig],
  plugins: [desktopPlugin],
} satisfies Config;
