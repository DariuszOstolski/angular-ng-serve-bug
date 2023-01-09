/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

module.exports = {
  content: [
    "./apps/src/**/*.{html,ts}",
  ],
  purge: {
    enabled: true,
    content: ["./apps/src/**/*.{html,ts,scss}"],
  },
  mode: "jit",
  darkMode: "class", // or 'media' or 'class'
  theme: {
    ...colors,
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: null,
          },
        },
      },
      // this will generate utilities like `bg-base` and `bg-code`
      backgroundColor: {
        base: withOpacity("--color-background-base"),
        code: withOpacity("--color-background-code"),
      },
      // these classes end up like `text-base` and `text-muted`
      textColor: {
        base: withOpacity("--color-text-base"),
        muted: withOpacity("--color-text-muted"),
        accent: withOpacity("--color-text-accent"),
        code: withOpacity("--color-text-code"),
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
    require("@tailwindcss/typography"),
  ],
}