import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import router from '../router';

window.Vue = Vue;
window.VueRouter = VueRouter;


Vue.config.productionTip = false

Vue.use(VueRouter);

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

