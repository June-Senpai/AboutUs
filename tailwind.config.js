/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        cardBg: "rgb(242, 240, 241)",
      },
      height: {
        100: "253.125px",
        128: "337.5px",
        156: "450px",
        178: "600px",
      },
      width: {
        100: "253.125px",
        128: "337.5px",
        156: "450px",
        178: "600px",
      },
      minWidth: {
        178: "600px",
      },
    },
  },
  plugins: [],
}
