import Vue from 'vue';
import router from './router';
import App from './App.vue';
import './scss/styles.scss';

Vue.config.productionTip = false;

export const eventBus = new Vue({
  data : {
    toSetStorage : [],
    toGetStorage : []
  }
});

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')