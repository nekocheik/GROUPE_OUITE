import Vue from 'vue';
import router from './router';
import App from './App.vue';
import Footer from './Footer.vue';
import './scss/styles.scss';

Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')

new Vue({
  router: router,
  render: h => h(Footer),
}).$mount('#footer')
