import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home.vue'
import vueConfig from '@/../vue.config'

Vue.use(VueRouter)
const router = new VueRouter({
    mode: 'history',
    base: vueConfig.publicPath,
    routes: [{
        path: '/',
        name: 'Home',
        component: Home
    }, {
        path: '/about-me',
        name: 'About Me',
        component: () =>
            import ('@/components/routes/AboutMeRoute.vue')
    }]
})

router.beforeEach((to, from, next) => {
    next()
})


export default router