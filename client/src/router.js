import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home';
import Document from './components/Document';
import Earth from './components/Earth';

Vue.use(VueRouter);


export default new VueRouter({
  mode : 'history',
  routes : [
    {
      path : '/',
      component: Home,
    },
    {
      path : '/document/:id',
      component: Document,
    },
    {
      path : '/earth',
      component: Earth,
    },
  ]
})