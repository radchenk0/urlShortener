const { environment } = require('@rails/webpacker');

environment.loaders.set('pug', {
    test: /\.pug$/,
    use: ['html-loader', 'pug-html-loader']
});

module.exports = environment;