<template>
    <div class="container">
        <div class="app">
            <h1>Vue事项清单</h1>
            <MyHeader @addTodo="addTodo"></MyHeader>
            <TodoList :todos="todos"></TodoList>
            <MyFooter :todos="todos"></MyFooter>
        </div>
    </div>
</template>

<script>
import MyHeader from '@/components/MyHeader.vue';
import TodoList from '@/components/TodoList.vue';
import MyFooter from '@/components/MyFooter.vue';

export default {
    name: 'App',
    components: {
        MyHeader,
        TodoList,
        MyFooter,
    },
    data() {
        return {
            todos: JSON.parse(localStorage.getItem('todos')) || [],
        };
    },
    methods: {
        checkTodo(id) {
            this.todos.forEach((eachTodo) => {
                if (eachTodo.id === id) {
                    eachTodo.isDone = !eachTodo.isDone;
                }
            });
        },
        addTodo(todoObj) {
            this.todos.push(todoObj);
        },
        removeTodo(id) {
            this.todos = this.todos.filter((eachTodo) => eachTodo.id !== id);
        },
        removeDoneTodo() {
            this.todos = this.todos.filter(
                (eachTodo) => eachTodo.isDone === false
            );
        },
        editTodo(eachTodo) {
            eachTodo.isEdit = true;
        },
        updateTodo(eachTodo, newContent) {
            eachTodo.isEdit = false;
            eachTodo.content = newContent;
        },
    },
    watch: {
        todos: {
            deep: true,
            handler(value) {
                localStorage.setItem('todos', JSON.stringify(value));
            },
        },
    },
    mounted() {
        this.$bus.$on('addTodo', this.addTodo);
        this.$bus.$on('checkTodo', this.checkTodo);
        this.$bus.$on('removeTodo', this.removeTodo);
        this.$bus.$on('removeDoneTodo', this.removeDoneTodo);
        this.$bus.$on('editTodo', this.editTodo);
        this.$bus.$on('updateTodo', this.updateTodo);
    },
    beforeDestroy() {
        this.$bus.$off('addTodo', this.addTodo);
        this.$bus.$off('checkTodo', this.checkTodo);
        this.$bus.$off('removeTodo', this.removeTodo);
        this.$bus.$off('removeDoneTodo', this.removeDoneTodo);
        this.$bus.$off('editTodo', this.editTodo);
        this.$bus.$off('updateTodo', this.updateTodo);
    },
};
</script>

<style>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    user-select: none;
}

body {
    background-color: #f7f7f7;
}

.container {
    display: flex;
    justify-content: center;
}

.app {
    width: 900px;
    margin: 10px 0;
    padding: 20px 50px;
    border: 1px solid #dddddd;
    background-color: #ffffff;
    border-radius: 16px;
}

h1 {
    text-align: center;
    margin-bottom: 20px;
}

button {
    background-color: transparent;
    border: 1px solid #dddddd;
    border-radius: 4px;
    outline: none;
    padding: 5px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    margin-left: 5px;
}

button:hover {
    background-color: #58b2dc;
    border: 1px solid #58b2dc;
    color: #ffffff;
    transition: all 0.2s ease-in-out;
}
</style>
