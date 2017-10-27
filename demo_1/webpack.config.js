var path = require('path');

module.exports = {
    entry: {
        index:'./src/js/index.js'
    },
    output: {
        publicPath:"dev",
        path:path.resolve(__dirname,'dist'),
        filename: '[name].js'
    }
};