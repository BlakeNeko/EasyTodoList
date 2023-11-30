const db = require('./db');

function getTodos(callback) {
    const sql = 'select * from todos';
    db.query(sql, (err, results) => {
        callback(err, results);
    });
}

function addTodo(id, content, status, callback) {
    const sql = 'insert into todos (id, content, status) values (?, ?, ?)';
    db.query(sql, [id, content, status], (err, results) => {
        callback(err, results);
    });
}

function modifyTodo(id, content, status, callback) {
    const sql = 'update todos set content = ?, status = ? where id = ?';
    db.query(sql, [content, status, id], (err, results) => {
        callback(err, results);
    });
}

function deleteTodo(id, callback) {
    const sql = 'delete from todos where id = ?';
    db.query(sql, [id], (err, result) => {
        callback(err, result);
    });
}

module.exports = {
    getTodos,
    addTodo,
    modifyTodo,
    deleteTodo,
};
