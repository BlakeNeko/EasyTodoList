const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'toor',
    database: 'easy_todo_list',
});

db.connect((err) => {
    if (err) {
        console.error('连接数据库失败: ' + err.message);
        return;
    }
    console.log('连接数据库成功');
});

module.exports = db;
