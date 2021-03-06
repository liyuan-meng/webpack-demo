const path = require('path');

exports.resolve = function (dir) {
    // __dirname: /Users/liyuanmeng/Workspace/a-practice/first-react-app/build
    return path.resolve(__dirname, dir)
};

exports.assetsPath = function (_path) {
    return path.posix.join('static', _path)
};
