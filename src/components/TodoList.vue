<template>
    <div>
        <transition-group name="todo">
            <TodoItem
                v-for="eachTodo in todos"
                :key="eachTodo.id"
                :eachTodo="eachTodo"
            ></TodoItem>
        </transition-group>
    </div>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue';

export default {
    name: 'TodoList',
    components: {
        TodoItem,
    },
    props: ['todos'],
};
</script>

<style scoped>
.todo-enter-active {
    animation: fade 0.2s ease-in-out both;
}

.todo-leave-active {
    animation: fade 0.2s ease-in-out both reverse;
}

@keyframes fade {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
</style>
