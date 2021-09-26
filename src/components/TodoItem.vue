<template>
    <div>
        <div class="todo-item">
            <label class="todo-content">
                <input
                    type="checkbox"
                    :checked="eachTodo.isDone"
                    @change="handleCheck(eachTodo.id)"
                />
                <span v-show="!eachTodo.isEdit">{{ eachTodo.content }}</span>
                <input
                    type="text"
                    :value="eachTodo.content"
                    v-show="eachTodo.isEdit"
                    @blur="handleBlur(eachTodo, $event)"
                    ref="editInput"
                />
            </label>
            <div class="buttons">
                <button @click="handleEdit(eachTodo)">编辑</button>
                <button @click="handleRemove(eachTodo.id)">删除</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TodoItem',
    props: ['eachTodo'],
    methods: {
        handleEdit(eachTodo) {
            this.$bus.$emit('editTodo', eachTodo);
            this.$nextTick(() => {
                this.$refs.editInput.focus();
            });
        },
        handleRemove(id) {
            this.$bus.$emit('removeTodo', id);
        },
        handleCheck(id) {
            this.$bus.$emit('checkTodo', id);
        },
        handleBlur(eachTodo, e) {
            if (e.target.value.trim() === '') {
                alert('请输入事项内容');
                e.target.focus();
            } else {
                this.$bus.$emit('updateTodo', eachTodo, e.target.value);
            }
        },
    },
};
</script>

<style scoped>
.todo-item {
    margin-top: 5px;
    padding: 10px;
    border: 1px solid #dddddd;
    border-radius: 4px;
    display: flex;
}

.todo-content {
    display: flex;
    align-items: center;
    flex: auto;
}

.buttons {
    display: inline-block;
}

input[type='checkbox'] {
    margin-right: 5px;
}

input[type='text'] {
    border: 1px solid #dddddd;
    border-radius: 4px;
    outline: none;
    padding: 5px;
    width: 100%;
}
</style>
