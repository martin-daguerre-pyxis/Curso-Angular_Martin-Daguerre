const twplugin = require("tailwindcss/plugin");

module.exports = {
  corePlugins: {
    preflight: false,
  },
  mode: "jit",
  important: true,
  darkMode: "class", // or 'media' or 'class'
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontFamily: {
      body: ["Montserrat", "sans-serif"],
      sans: ["Quicksand", "sans-serif"],
    }
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms")({
      strategy: "class",
    })
  ],
};
