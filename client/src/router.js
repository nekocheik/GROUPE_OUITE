import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home';
import Document from './components/Document';
import TheHeader from './components/TheHeader';

Vue.use(VueRouter);


export default new VueRouter({
  mode : 'history',
  routes : [
    {
      path : '/',
      component: Home,
    },
    {
      path : '/document',
      component: Document,
    },
    {
      path : '/header',
      component: TheHeader,
    },
  ]
})