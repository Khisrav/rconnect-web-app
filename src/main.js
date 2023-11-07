import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/dropdown';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Header from './components/Common/Header.vue';

const app = createApp(App);

app.use(router);

app.component('base-header', Header);

app.mount('#app');
