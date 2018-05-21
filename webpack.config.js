const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require( 'path' );

module.exports = {
    // entry: "./src/web/index.js",
    entry: [
        'webpack-dev-server/client?http://localhost:8080/',
        // 'webpack/hot/only-dev-server',
        path.join(__dirname, 'src/web/index.js')
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: '/'
    },
    devServer: {
        historyApiFallback: true,
        proxy: {
            "/api": {
                target: "https://cloudswitch.imuisonline.com",
                pathRewrite: {"^/api" : ""},
                // logLevel: 'debug',
                changeOrigin: true,
            },
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/web/index.html",
            // filename: "./index.html"
        })
    ]
};
