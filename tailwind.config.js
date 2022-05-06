module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '14': '3.5rem',
        '22': '5.5rem',
        '72': '18rem',
        '200': '50rem'
      },
    },
/*     screens: {
      'md2' : '850px',
      '3xl': '1545px'
    } */
  },
  plugins: [],
}
