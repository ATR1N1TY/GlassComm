module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        swipeDownAndGrow:
          "swipeDownAndGrow 0.3s cubic-bezier(0.77, 0, 0.175, 1)",
      },
      keyframes: {
        swipeDownAndGrow: {
          "0%": {
            transform: "translateY(-50%) scale(0.4)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0) scale(1)",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
};
