module.exports = {
    mode: 'development',
    entry: './src/index.jsx',
    output: {
        filename: 'main.js',
        path: `${__dirname}/dist`
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/react'
                        ]
                    }
                }
            },
            {
                test: /\.css/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            url: false,
                            import:true,
                            modules: false,
                            sourceMap:true,
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"]
    }
};