const path = require('path');

module.exports = {
  mode: 'production',
  entry: [
    './src/js/main.js',
  ],
  output: {
    filename: 'choise-movement.js',
    path: path.join(__dirname, 'src/bundle/')
  }
};