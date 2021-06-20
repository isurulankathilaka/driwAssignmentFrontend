/**
   * Configure vue-router
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Calculator from './views/Calculator.vue';
import Home from './views/Home.vue';
 // Use plug-in, use use
 Vue.use(VueRouter); // call this method
 // array of routes
const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/calculator',
        component: Calculator
    }
];
// const baseUrl = '/product'
const router = new VueRouter({
    e1: '#app',
    routes
});
export {routes, router};