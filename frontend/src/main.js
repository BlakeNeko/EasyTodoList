import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import naive from 'naive-ui';

const app = createApp(App);
const pinia = createPinia();
app.use(naive);
app.use(pinia);
app.mount('#app');
