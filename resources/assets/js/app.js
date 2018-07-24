require('./bootstrap');

// config
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';

// component
import MainApp from './components/MainApp.vue';

// instances
Vue.use(Vuex);
Vue.use(VueRouter);

const app = new Vue({
    el: '#app',
    components: {
        MainApp
    }
});
