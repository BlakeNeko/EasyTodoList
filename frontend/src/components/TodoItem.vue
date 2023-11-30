<script setup>
import { ref } from 'vue';

const props = defineProps(['todo']);
const emit = defineEmits(['modifyTodo', 'deleteTodo']);

const isEdit = ref(false);
const boolCheckStatus = ref(props.todo.status === 1 ? true : false);

const handleCheck = (checked) => {
    emit('modifyTodo', props.todo.id, props.todo.content, Number(checked));
};
const handelEdit = () => {
    isEdit.value = !isEdit.value;
    if (isEdit.value === false) {
        handleEditSave();
    }
};
const handleDelete = () => {
    emit('deleteTodo', props.todo.id);
};
const handleEditSave = () => {
    isEdit.value = false;
    emit('modifyTodo', props.todo.id, props.todo.content, props.todo.status);
};
</script>

<template>
    <n-list-item>
        <template #prefix>
            <n-checkbox
                size="large"
                v-model:checked="boolCheckStatus"
                @update:checked="handleCheck"
            >
            </n-checkbox>
        </template>
        <template #suffix>
            <n-button-group>
                <n-button
                    v-if="!isEdit"
                    tertiary
                    type="info"
                    @click="handelEdit"
                    >编辑</n-button
                >
                <n-button
                    v-if="isEdit"
                    tertiary
                    type="success"
                    @click="handleEditSave"
                    >保存</n-button
                >
                <n-button tertiary type="error" @click="handleDelete"
                    >删除</n-button
                >
            </n-button-group>
        </template>
        <n-thing>
            <span v-if="!isEdit">{{ todo.content }}</span>
            <n-input
                v-if="isEdit"
                v-model:value="todo.content"
                :placeholder="todo.content"
                @keyup.enter="handleEditSave"
                @blur="handleEditSave"
            ></n-input>
        </n-thing>
    </n-list-item>
</template>

<style scoped></style>
