const fs = require('fs');
const path = require('path');

const logFilePath = path.join(path.resolve(__dirname, '..'), 'access.log');
// console.log(logFilePath);

const loggerMiddleware = (req, res, next) => {
    const requestTime = new Date(Date.now());
    const logMessage = `${requestTime.toLocaleString()} ${req.method} ${
        req.path
    }\n`;

    fs.appendFile(logFilePath, logMessage, (err) => {
        if (err) {
            console.error('追加日志时出现错误: ' + err.message);
        }
    });
    next();
};

module.exports = loggerMiddleware;
