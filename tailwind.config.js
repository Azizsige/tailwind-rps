module.exports = {
  mode: 'jit',
  purge: [
    './*.html',
    './public/*.html',
    './public/js/*.js',
    './assets/*.png',
    './assets/*.svg',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif']
      },
      colors: {
        'primary': '#9C27B0'
      },
      height: {
        '44r': '44rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
