import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import router from './router/index'

import * as CookieUtil from '@common/utils/cookieUtil'

Vue.use(ElementUI)

Vue.prototype.$cookieUtil = CookieUtil

Vue.config.productionTip = false

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')
