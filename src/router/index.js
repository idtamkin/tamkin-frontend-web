/**
 * Import Dependency
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

/**
 * Import Component (.vue)
 */

import Dashboard from '@/pages/Dashboard/Index.vue'
import About from '@/pages/About/Index.vue'

/**
 * Config
 */
Vue.use(VueRouter)

/**
 * Declare Variable
 */
const router = new VueRouter({
    routes: [
        { path: '/about', component: About },
        { path: '*', component: Dashboard }
    ]
})

export default router