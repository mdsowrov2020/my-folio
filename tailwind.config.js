// module.exports = {
//   content: ['./src/**/*.{html,js}'],
//   theme: {
//     extend: {
//       colors: {
//         'body': '#0000',
//       },
//     },
//   },
//   plugins: [],
// };

module.exports = {
  content: ['./*.html', './src/css/*.css', './src/js/*.js'],
  theme: {
    colors: {
      transparent: 'transparent',
      body: '#4700D8',
      white: '#F6F3F3',
      theme: '#F900BF',
      black: '#484848',
      secondary: '#FF85B3',
      option: '#9900F0',
    },
    fontFamily: {
      poppins: ["'poppins'", 'sans-serif'],
    },
  },
};
