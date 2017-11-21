const environment = require('./environment');
const webpack = require('webpack');

environment.plugins.set(
    'Define',
    new webpack.DefinePlugin({
      HOSTNAME: JSON.stringify('https://obscure-badlands-23094.herokuapp.com')
    })
);

module.exports = environment.toWebpackConfig();