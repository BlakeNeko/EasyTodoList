import { defineStore } from 'pinia';
import { getTodos, addTodo, modifyTodo, deleteTodo } from '@/api/todosApi';

export const useTodosStore = defineStore('todos', {
    state: () => {
        return {
            todos: [],
        };
    },
    getters: {
        finishedTodos(state) {
            return state.todos.filter((todo) => todo.status);
        },
        unfinishedTodos(state) {
            return state.todos.filter((todo) => !todo.status);
        },
    },
    actions: {
        async getTodos() {
            this.todos = await getTodos();
        },
        async addTodo(id, content, status) {
            await addTodo(id, content, status);
            this.getTodos();
        },
        async modifyTodo(id, content, status) {
            await modifyTodo(id, content, status);
            this.getTodos();
        },
        async deleteTodo(id) {
            await deleteTodo(id);
            this.getTodos();
        },
    },
});
