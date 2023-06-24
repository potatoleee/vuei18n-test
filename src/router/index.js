import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'FrontLayout',
      component: () => import('../views/FrontLayout.vue'),
      children: [
        {
          path: '',
          name: 'index',
          component: () => import('../views/IndexView.vue')
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('../views/AboutView.vue')
        },
        {
          path: 'login',
          name: 'login',
          component: () => import('../views/LoginView.vue')
        }
      ]
    }
  ]
});

export default router;
