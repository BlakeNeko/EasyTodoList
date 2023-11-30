import axios from 'axios';

// 为了暴露给局域网使用，记得修改api地址
const baseUrl = 'http://192.168.2.78:7001';

const getTodos = async () => {
    try {
        const response = await axios.get(`${baseUrl}/todos`);
        return response.data;
    } catch (error) {
        console.error('获取待办事项时出现错误: ', error);
        throw error;
    }
};

const addTodo = async (id, content, status) => {
    try {
        const response = await axios.post(`${baseUrl}/todos`, {
            id,
            content,
            status,
        });
        return response.data;
    } catch (error) {
        console.error('添加待办事项时出现错误: ', error);
        throw error;
    }
};

const modifyTodo = async (id, content, status) => {
    try {
        const response = await axios.patch(`${baseUrl}/todos/${id}`, {
            id,
            content,
            status,
        });
        return response.data;
    } catch (error) {
        console.error('修改待办事项时出现错误: ', error);
        throw error;
    }
};

const deleteTodo = async (id) => {
    try {
        const response = await axios.delete(`${baseUrl}/todos/${id}`);
        return response.data;
    } catch (error) {
        console.error('删除待办事项时出现错误: ', error);
        throw error;
    }
};

export { getTodos, addTodo, modifyTodo, deleteTodo };
