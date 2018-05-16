import Vue from 'vue';
import Router from 'vue-router';
import component1 from '@/components/component1';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'component1',
      component: component1,
    },
  ],
});
