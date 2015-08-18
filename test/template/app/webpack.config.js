module.exports = {
    entry: __dirname + "/index.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.less$/,
                loader: "style!css!less"
            },
            {
                test: /\.jsx?$/,
                loaders: ['babel'], 
                exclude: /node_modules/
            },
            {
                test: /\.json$/,
                loader: "json"
            }
    ]
    },
    devtool: "source-map",
    devServer: {
        contentBase: __dirname,
        hot: false,
        inline: true,
        noInfo: false,
        host: '0.0.0.0',
        port: 1024,
        colors: true
    },
    plugins: []
};