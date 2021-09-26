<template>
    <footer>
        <span class="todo-status">{{ doneCount }} / {{ todoCount }}</span>
        <div class="buttons">
            <button @click="handleRemoveDoneTodo">删除所有已完成事项</button>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'MyFooter',
    props: ['todos'],
    computed: {
        todoCount() {
            return this.todos.length;
        },
        doneCount() {
            return this.todos.filter((eachTodo) => eachTodo.isDone).length;
        },
    },
    methods: {
        handleRemoveDoneTodo() {
            this.$bus.$emit('removeDoneTodo');
        },
    },
};
</script>

<style scoped>
footer {
    display: flex;
    margin-top: 10px;
}

.todo-status {
    display: flex;
    align-items: center;
    flex: auto;
}
</style>
