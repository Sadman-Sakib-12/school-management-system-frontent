import { createRouter, createWebHistory } from 'vue-router';
import AuthLayout from '../layouts/AuthLayout.vue';
import DashboardLayout from '../layouts/DashboardLayout.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: AuthLayout,
      children: [
        { path: '', component: () => import('../pages/auth/Login.vue') }
      ]
    },
    {
      path: '/dashboard',
      component: DashboardLayout,
      meta: { requiresAuth: true },
      children: [
        { path: '', component: () => import('../pages/dashboard/Index.vue') },
        { path: 'students', component: () => import('../pages/dashboard/Students.vue') },
        { path: 'teachers', component: () => import('../pages/dashboard/Teachers.vue') }
      ]
    }
  ]
});

// Mock guard
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  if (to.meta.requiresAuth && !token) {
    next('/login');
  } else if (to.path === '/login' && token) {
    next('/dashboard');
  } else {
    next();
  }
});

export default router;
