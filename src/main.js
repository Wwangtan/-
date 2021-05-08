import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'
import { List, Cell } from "vant";
import { PullRefresh } from "vant";

Vue.use(PullRefresh);
Vue.use(List).use(Cell);
Vue.config.productionTip = false
Vue.use(VueLazyload);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')