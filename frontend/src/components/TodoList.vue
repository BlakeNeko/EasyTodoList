<script setup>
import { onMounted, ref } from 'vue';
import TodoItem from '@/components/TodoItem.vue';
import TodoCharts from '@/components/TodoCharts.vue';
import { useTodosStore } from '@/stores/todosStore';
const store = useTodosStore();

onMounted(() => {
    store.getTodos();
});
const active = ref(false);
const modifyTodo = (id, content, status) => {
    store.modifyTodo(id, content, status);
};
const deleteTodo = (id) => {
    store.deleteTodo(id);
};
const showDrawer = () => {
    active.value = true;
};
</script>

<template>
    <n-list bordered hoverable v-if="store.todos.length !== 0">
        <TodoItem
            v-for="todo in store.todos"
            :key="todo.id"
            :todo="todo"
            @modifyTodo="modifyTodo"
            @deleteTodo="deleteTodo"
        ></TodoItem>
    </n-list>
    <n-drawer v-model:show="active" :height="500" :placement="'top'">
        <n-drawer-content closable title="待办事项可视化">
            <TodoCharts></TodoCharts>
        </n-drawer-content>
    </n-drawer>
    <n-button class="gap" @click="showDrawer">展示待办事项可视化</n-button>
</template>

<style scoped>
.n-list {
    width: 700px;
    margin-top: 20px;
}

.gap {
    margin-top: 20px;
}

@media screen and (max-width: 700px) {
    .n-list {
        width: 100%;
    }
}
</style>
