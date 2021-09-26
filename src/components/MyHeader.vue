<template>
    <header>
        <input
            type="text"
            placeholder="请输入事项，回车键添加"
            v-model="content"
            @keyup.enter="handleAdd"
        />
    </header>
</template>

<script>
import { nanoid } from 'nanoid';

export default {
    name: 'MyHeader',
    data() {
        return {
            content: '',
        };
    },
    methods: {
        handleAdd() {
            if (this.content.trim() === '') {
                alert('请输入事项内容');
            } else {
                const todoObj = {
                    id: nanoid(),
                    content: this.content.trim(),
                    isDone: false,
                    isEdit: false,
                };
                this.$bus.$emit('addTodo', todoObj);
            }
            this.content = '';
        },
    },
};
</script>

<style scoped>
input[type='text'] {
    border: 1px solid #dddddd;
    border-radius: 4px;
    outline: none;
    padding: 10px;
    width: 100%;
}
</style>
