const path = require('path');

module.exports = {
    mode: 'development',
    // entry: './src/script.js',
    entry: path.resolve(__dirname, 'src/script.js'),
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: '[name][ext]'
    },
    devTool: 'inline-source-map',
    module: {
        rules:  [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(jpg|png|jpeg|svg)$/i,
                type: 'asset/resource'
            }
        ],
    },
},