import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/sort',
        name: 'Sort',
        component: () =>
            import ('../views/Sort.vue')
    },
    {
        path: '/movie',
        name: 'Movie',
        component: () =>
            import ('../views/Movie.vue')
    },
    {
        path: '/mine',
        name: 'Mine',
        component: () =>
            import ('../views/Mine.vue')
    },
    {
        path: '/list',
        name: 'List',
        component: () =>
            import ('../views/List.vue')
    },
]

const router = new VueRouter({
    routes
})

export default router