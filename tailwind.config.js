const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        14: "3.5rem",
        22: "5.5rem",
        72: "18rem",
        200: "50rem",
      },
      colors: {
        "github-gray": "#f5f8fa",
        "github-readme-btn-green": "#4dc71f",
        "github-readme-btn-blue": "#2c80c0",
        "spotify-stone-light": "#1e1e1e",
        "spotify-stone-dark": "#121212",
        "spotify-liked-card-hover": "hsla(0, 0%, 100%, .2)",
        "spotify-liked-card": "hsla(0, 0%, 100%, .1)",
        "spotify-green": "#1bd760",
        "spotify-dim-blue": "rgb(72, 32, 176)",
        "spotify-card": "#181818",
        "spotify-card-hover": "#282828",
        "spotify-icon": "rgb(41, 41, 41)",
        "spotify-icon-hover": "rgb(114, 114, 114)",
      },
      fontSize: {
        xxs: ".65rem",
      },
      boxShadow: {
        spotify: "0 8px 8px rgb(0 0 0 / 30%)",
        "spotify-card": "0 8px 24px rgba(0,0,0,.5)",
      },
      backgroundImage: {
        glow: "url('https://cli.github.com/assets/images/light-glow.svg')",
        glow2:
          "url('https://tailwindcss.com/_next/static/media/hero-dark@90.a7a063e8f9d179fbd72b0b735c5797b7.jpg'), linear-gradient(rgb(15 23 42), 90%, rgb(30 41 59) )",
        glowLight:
          "url('https://tailwindcss.com/_next/static/media/hero@75.4dea7abe609fc522c039fba7662ceea2.jpg')",
      },
      transitionProperty: {
        width: "width",
        height: "height",
        spacing: "margin, padding",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".hide-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".hide-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
        ".no-highlight": {
          "-webkit-touch-callout": "none",
          "-webkit-user-select": "none",
          "-khtml-user-select": "none",
          "-moz-user-select": "none",
          "-ms-user-select": "none",
          "user-select": "none",
        },
      });
    }),
  ],
};
