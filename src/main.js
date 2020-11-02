import Vue from 'vue'
import Vuex from "vuex"

import Vant from 'vant';
import 'vant/lib/index.css';

import App from './App.vue'
import router from './router'

Vue.use(Vant);
Vue.use(Vuex);


Vue.config.productionTip = false
const store = new Vuex.Store({
    state: {
        app: "vuex demo",
        version: "1.0.0",
        count: 1
    }
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')