const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const compiler = require('vue-template-compiler')
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        library: {
         type: 'umd',
        },
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
             {
                test: /\.vue$/i,
                use: ['vue-loader'],
            },
        ],
    },
    plugins:[
        new VueLoaderPlugin(),
          new webpack.optimize.ModuleConcatenationPlugin(),
      
    ],
    resolve:{
         extensions: [
            '.js',
            '.jsx',
            '.vue',
            '.json'
            ],
    }
    
};