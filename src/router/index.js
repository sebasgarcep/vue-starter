import Router from 'vue-router';

import Home from '@/components/Home';
import Login from '@/components/Login';
import Protected from '@/components/Protected';
import Public from '@/components/Public';
import Signup from '@/components/Signup';

import store from '../store';

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/protected',
      component: Protected,
      beforeEnter: (to, from, next) => {
        if (store.state.session === null) next(false);
      },
    },
    {
      path: '/public',
      component: Public,
    },
    {
      path: '/signup',
      component: Signup,
    },
  ],
});
