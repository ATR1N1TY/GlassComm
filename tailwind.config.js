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
        blurMenu: "menuBlur 0.3s ease forwards",
        customSpin: "normalizedSpin 8s infinite linear",
        customFastSpin: "normalizedSpin 2s infinite linear",
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

        menuBlur: {
          "0%": {
            "backdrop-fliter": "blur(0)",
          },
          "100%": {
            "backdrop-filter": "blur(25px)",
          },
        },

        normalizedSpin: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
