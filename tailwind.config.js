module.exports = {
  purge: [
    './**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif']
      },
      colors: {
        'primary': '#9C27B0'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}