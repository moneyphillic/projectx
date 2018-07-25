require('./bootstrap');

// config
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import { routes } from './routes';
import StoreData from './store';

// component
import MainApp from './components/MainApp.vue';

// instances
Vue.use(Vuex);
Vue.use(VueRouter);

const store = new Vuex.Store(StoreData);
const router = new VueRouter({
    routes,
    mode: 'history'
})

const app = new Vue({
    el: '#app',
    store,
    router,
    components: {
        MainApp
    }
});
