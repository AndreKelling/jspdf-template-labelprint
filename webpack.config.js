const path = require('path');

const CYAN_START = '\x1b[36m';
const COLOR_END = '\x1b[0m';

module.exports = (env, argv) => {
    console.log('Mode:', CYAN_START, argv.mode, COLOR_END);
    const isProduction = argv.mode === 'production';

    return {
        target: isProduction ? 'node' : 'web',
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'docs/dist'),
            filename: 'bundle.js',
        },
        devtool: isProduction ? false : 'eval-source-map',
        devServer: {
            static: {
                directory: path.join(__dirname, 'docs'),
            },
            port: 6262
        },
    }
};
