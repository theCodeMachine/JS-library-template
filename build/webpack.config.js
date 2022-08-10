const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");


module.exports = function() {
    return ({
        entry: './lib/index.js',
        output: {
          filename: '[name].js',
          globalObject: 'this',
          library: 'JSLib',
          libraryTarget: 'umd',
          path: path.resolve(__dirname,'../dist')
        },
        mode: 'production',
        devtool: 'source-map',
        resolve: {
          modules: [path.resolve(__dirname, 'src'), 'node_modules'],
          extensions: ['.js', '.ts']
        },
        optimization: {
            moduleIds: 'deterministic',
            minimize: true,
            minimizer: [new TerserPlugin()],
        },
        plugins: [
            new CleanWebpackPlugin()
        ],
        module: {
            rules: [
                // JavaScript
                {
                    test: /\.(js)$/,
                    exclude: ['/node_modules/', '/lib/**/__tests__' ],
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                },
                // Typescript
                {
                    test: /\.(ts)$/,
                    exclude: ['/node_modules/', '/lib/**/__tests__' ],
                    use: {
                        loader: 'ts-loader'
                    }
                }
            ]
        }
    });
}
