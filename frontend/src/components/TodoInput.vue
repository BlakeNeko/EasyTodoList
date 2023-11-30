<script setup>
import { ref } from 'vue';
import { useTodosStore } from '@/stores/todosStore';

const store = useTodosStore();
const newTodoContent = ref('');

const addTodo = () => {
    if (newTodoContent.value.trim() !== '') {
        store.addTodo(Date.now(), newTodoContent.value, 0);
        newTodoContent.value = '';
    }
};
</script>

<template>
    <n-input-group>
        <n-input
            placeholder="请输入待办事项"
            v-model:value="newTodoContent"
            @keyup.enter="addTodo"
        ></n-input>
        <n-button @click="addTodo">添加</n-button>
    </n-input-group>
</template>

<style scoped>
.n-input-group {
    width: 700px;
}

@media screen and (max-width: 700px) {
    .n-input-group {
        width: 100%;
    }
}
</style>
