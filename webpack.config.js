var config = {
    entry: "./main.js",
    output: {
        path: "./",
        filename: "index.js"
    },
    devServer: {
        inline: true,
        port: 8000
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel",
                query: {
                    presets: [
                        "es2015",
                        "react"
                    ]
                }
            }
        ]
    }
};

// 暴露接口
module.exports = config;