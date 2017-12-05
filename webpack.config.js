const ExtractTextPlugin  = require("extract-text-webpack-plugin")

module.exports = {
    entry: [
        './src/index.js',
        './scss/style.scss'
    ],
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015', 'stage-1']
            }
        }, {
            test: /\.(sass|scss)$/,
            loader: ExtractTextPlugin.extract([
                "css-loader", // translates CSS into CommonJS
                "sass-loader" // compiles Sass to CSS
            ])
        }]
    },
    plugins: [
        new ExtractTextPlugin("./style/style.bundle.css")
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './'
    }
}
