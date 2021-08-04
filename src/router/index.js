import Vue from 'vue'
import VueRouter from 'vue-router'

import INDEX_CONSTS from '@consts/index.js'

Vue.use(VueRouter)

const { routes } = INDEX_CONSTS

const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {
    console.log(`${from.path} -> ${to.path}`)
    next()
})

export default router
