/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "big-stone": "#14213d",
        "ebony-clay": "#2b2d42",
        "dodger-blue": "#073baa9a",
        sun: "#fca311",
        serenade: "#fff7ea",
        smth: "rgba(35, 51, 83, 0.779)",
        bgrnd: "rgba(128, 128, 128, 0.604)",
        details: "#fcac2d52",
      },
      zIndex: {
        10: "10",
        20: "20",
        30: "30",
        40: "40",
        50: "50",
        60: "60",
        70: "70",
        80: "80",
        90: "90",
        100: "100",
      },
    },
  },
  plugins: [],
};
