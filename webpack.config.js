var path = require('path');

module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.join(__dirname, './build/scripts/'),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /.js$/, loader : 'babel-loader' }
        ]
    }
};