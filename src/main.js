// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js'

import VueScrollReveal from 'vue-scroll-reveal'
Vue.use(VueScrollReveal)

Vue.config.productionTip = false
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});

new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
