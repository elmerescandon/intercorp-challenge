import type {Config} from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "promart-orange": "#FF6E00",
        "promart-soft-orange": "#FFEBDB",
        "promart-soft-gray": "#F6F6F6",
        "promart-gray": "#F1F2F4",
        "promart-subtle-gray": "#A3A3A3",
        "promart-dark-gray": "#4E4E4E",
      },
    },
  },
  plugins: [],
};
export default config;
