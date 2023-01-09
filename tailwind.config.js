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
        "spotify-green": "#1bd760",
      },
      fontSize: {
        xxs: ".65rem",
      },
      backgroundImage: {
        glow: "url('https://cli.github.com/assets/images/light-glow.svg')",
        glow2:
          "url('https://tailwindcss.com/_next/static/media/hero-dark@90.a7a063e8f9d179fbd72b0b735c5797b7.jpg'), linear-gradient(rgb(15 23 42), 90%, rgb(30 41 59) )",
        glowLight:
          "url('https://tailwindcss.com/_next/static/media/hero@75.4dea7abe609fc522c039fba7662ceea2.jpg')",
      },
    },
  },
  plugins: [],
};
