// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
//import '/element-ui/element-variables.scss' // 此处是从elementui官网上自定义了颜色风格 所以才用这种引入方式
// import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
