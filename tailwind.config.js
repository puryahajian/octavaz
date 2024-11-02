/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // greenCostom: "#00A651",
        greenCostom: "#65a8d2",
        bgheader: "#4f4f4fe6",
        // bgmain: "#141414",
        bgmain: "#303545",
        bggray: "#A4A4A4",
        colortitle: "#b3b3b3",
        bgcategory: "#00b4c833",
        colorbordercategory: "#00b4c880",
        bgslowblack: "#1C1C1C",
      },
      fontFamily: {
        sans: ["sans"],
      },
    },
  },
  plugins: [],
};
