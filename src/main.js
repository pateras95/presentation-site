import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import Vuelidate from 'vuelidate'
import VueMeta from 'vue-meta'
import VueZoomer from 'vue-zoomer'

Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.use(VueMeta)
Vue.use(VueZoomer)

new Vue({
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')