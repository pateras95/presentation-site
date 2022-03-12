import Vue from 'vue'
import VueRouter from 'vue-router'
import vueConfig from '@/../vue.config'

Vue.use(VueRouter)
const router = new VueRouter({
    mode: 'history',
    base: vueConfig.publicPath,
    routes: [{
        path: '/app',
        name: 'Understading Route',
        component: () =>
            import ('@/App.vue')
    }]
})

router.beforeEach((to, from, next) => {
    next()
})


export default router