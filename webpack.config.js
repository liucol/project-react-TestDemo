/**
 * Created by yangliu on 2017/4/13.
 */
var path = require('path');

module.exports = {
    entry: './app/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};