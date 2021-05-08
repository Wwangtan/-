import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
import index from '../views/index/index.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'index',
        component: home
    },
    {
        path: '/nav',
        name: 'nav',
        component: () => {
            import ('../components/nav.vue')
        }
    },
    {
        path: '/vCenter',
        name: 'vCenter',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/vCenter/vCenter.vue')
    },
    {
        path: '/cakeList',
        name: 'cakeList',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/cakeList/cakeList.vue'),
    },
    {
        path: '/shopCar',
        name: 'shopCar',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/shopCar/shopCar.vue')
    },
    {
        path: '/carList',
        name: 'carList',
        component: () =>
            import ( /* webpackChunkName: "about" */ '@/components/carList.vue'),
    },
    {
        path: '/proInfo',
        name: 'proInfo',
        component: () =>
            import ( /* webpackChunkName: "about" */ '@/components/proInfo.vue'),
    }
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

export default router