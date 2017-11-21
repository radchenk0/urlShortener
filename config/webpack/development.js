const environment = require('./environment');
const webpack = require('webpack');

environment.plugins.set(
    'Define',
    new webpack.DefinePlugin({
      HOSTNAME: JSON.stringify('http://localhost:3000')
    })
);
  
module.exports = environment.toWebpackConfig();