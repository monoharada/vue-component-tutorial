module.exports = {
  map: {
    inleine: false,
  },
  plugins: {
    'postcss-import': {},
    'postcss-custom-properties': {},
    'postcss-nested': {},
    autoprefixer: {
      cascade: false,
      grid: true,
    },
    'postcss-csso': true,
  },
};
