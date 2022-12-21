import { createRouter, createWebHistory } from 'vue-router'
import PageHome from '../views/Home.vue'
import PageCredentialing from '../views/Credentialing.vue'
import PageProviderLegal from '../views/ProviderLegal.vue'

const routes = [
    {
        path: '/',
        name: 'PageHome',
        component: PageHome
    },
    {
        path: '/credentialing',
        name: 'PageCredentialing',
        component: PageCredentialing
    },
    {
        path: '/provider-legal',
        name: 'PageProviderLegal',
        component: PageProviderLegal
    }
];




const router = createRouter({
    routes,
    history: createWebHistory(),
});

export default router