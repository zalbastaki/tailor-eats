import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import Technology from '../views/Technology.vue';
import Pricing from '../views/Pricing.vue';
import ContactUs from '../views/ContactUs.vue';
import PageNotFound from '../views/PageNotFound.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/technology',
        name: 'technology',
        component: Technology,
    },
    {
        path: '/pricing',
        name: 'pricing',
        component: Pricing,
    },
    {
        path: '/contact-us',
        name: 'contact-us',
        component: ContactUs,
    },
    {
        path: '/*',
        name: 'page-not-found',
        component: PageNotFound,
    },
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;
