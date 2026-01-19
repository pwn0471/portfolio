export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui"],
      },
      fontSize: {
        xs: ["0.7rem", { lineHeight: "1.4" }],
        sm: ["0.85rem", { lineHeight: "1.6" }],
        base: ["1rem", { lineHeight: "1.75" }],
        lg: ["1.125rem", { lineHeight: "1.8" }],
        xl: ["1.5rem", { lineHeight: "1.6" }],
        "2xl": ["2.25rem", { lineHeight: "1.3" }],
        "3xl": ["3rem", { lineHeight: "1.2" }],
        "4xl": ["3.75rem", { lineHeight: "1.15" }],
      },
    },
  },
  plugins: [],
};
