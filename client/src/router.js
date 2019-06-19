import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home';
import Document from './components/Document';
import authentification from './components/authentification.vue';

Vue.use(VueRouter);


export default new VueRouter({
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
    path : '/authentification',
    component: authentification,
  },
 ]
})