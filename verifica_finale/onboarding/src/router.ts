import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import store from './store';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/prospect',
      name: 'prospect',
      component: () => import('./views/UserList.vue'),
      beforeEnter: (to, from, next) => {
        if(store.getters.getSession) {
          next();
        }else{
          next('/');
        }
      }
    },
    {
      path: '/new-prospect',
      name: 'new-prospect',
      component: () => import('./views/UserNew.vue'),beforeEnter: (to, from, next) => {
        if(store.getters.getSession) {
          next();
        }else{
          next('/');
        }
      }
    }
  ],
});
