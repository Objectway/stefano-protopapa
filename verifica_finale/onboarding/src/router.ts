import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

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
    },
    {
      path: '/new-prospect',
      name: 'new-prospect',
      component: () => import('./views/UserNew.vue'),
    }
  ],
});
