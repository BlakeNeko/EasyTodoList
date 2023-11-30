<script setup>
import Header from '@/components/Header.vue';
import TodoInput from '@/components/TodoInput.vue';
import TodoList from '@/components/TodoList.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
    <div class="main">
        <Header></Header>
        <TodoInput></TodoInput>
        <TodoList></TodoList>
        <Footer></Footer>
    </div>
</template>

<style>
@import 'normalize.css';

.main {
    display: flex;
    flex-direction: column;
    align-items: center;
}

@media screen and (max-width: 700px) {
    .main {
        width: 100%;
    }
}
</style>
