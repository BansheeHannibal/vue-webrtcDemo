import Vue from 'vue'
import Router from 'vue-router'
import { routerMode } from '@config/env'
import Hello from '../views/hello.vue'

Vue.use(Router)

export default new Router({
    mode: routerMode,
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        {
            path: '/',
            component: Hello,
            meta: {

            }
        }
    ]
})
