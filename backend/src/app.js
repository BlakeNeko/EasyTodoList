const express = require('express');
const { getTodos, addTodo, modifyTodo, deleteTodo } = require('./todos');
const loggerMiddleware = require('./loggerMiddleware');
const errorMiddleware = require('./errorMiddleware');
const cors = require('cors');

const app = express();
const port = 7001;

app.use(loggerMiddleware);
app.use(errorMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
    res.send('EasyTodoList后端服务正在运行');
});

app.get('/todos', (req, res) => {
    getTodos((err, results) => {
        if (err) {
            next(err);
        } else {
            res.json(results);
        }
    });
});

app.post('/todos', (req, res) => {
    const { id, content, status } = req.body;
    addTodo(id, content, status, (err, results) => {
        if (err) {
            next(err);
        } else {
            res.status(201).json({ info: '待办已添加' });
        }
    });
});

app.patch('/todos/:id', (req, res) => {
    const { id, content, status } = req.body;
    modifyTodo(id, content, status, (err, results) => {
        if (err) {
            next(err);
        } else {
            res.status(201).json({ info: '待办已修改' });
        }
    });
});

app.delete('/todos/:id', (req, res) => {
    const { id } = req.params;
    deleteTodo(id, (err, results) => {
        if (err) {
            next(err);
        } else {
            res.status(201).json({ info: '待办已删除' });
        }
    });
});

app.listen(port, () => {
    console.log(`EasyTodoList后端服务正在运行: http://127.0.0.1:${port}`);
});
