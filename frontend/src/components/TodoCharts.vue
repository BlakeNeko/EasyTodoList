<script setup>
import * as echarts from 'echarts';
import { onMounted } from 'vue';
import { useTodosStore } from '@/stores/todosStore';
const store = useTodosStore();
const finishedTodosCount = store.finishedTodos.length;
const unfinishedTodosCount = store.unfinishedTodos.length;

onMounted(() => {
    const todosCharts = echarts.init(document.getElementById('chart'));
    const options = {
        tooltip: {
            trigger: 'item',
        },
        series: [
            {
                name: '待办',
                type: 'pie',
                stillShowZeroSum: false,
                radius: '50%',

                data: [
                    {
                        value: finishedTodosCount,
                        name: '已完成',
                    },
                    {
                        value: unfinishedTodosCount,
                        name: '未完成',
                    },
                ],
            },
        ],
    };
    todosCharts.setOption(options);
});
</script>

<template>
    <div id="chart"></div>
</template>

<style scoped>
#chart {
    width: 100%;
    height: 100%;
}
</style>
