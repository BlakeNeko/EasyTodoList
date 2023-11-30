const errorMiddleware = (err, req, res, next) => {
    console.error('出现错误: ' + err.message);
    res.status(500).json({ error: '出现错误' });
};

module.exports = errorMiddleware;
