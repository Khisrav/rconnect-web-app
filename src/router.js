import { createRouter, createWebHashHistory } from "vue-router";
import Home from './components/Home.vue';
import Auth from './components/Auth/Auth.vue';
import Profile from './components/Account/Profile.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', component: Home},
        {path: '/auth', component: Auth},
        {path: '/profile', component: Profile},
    ]
});

export default router;