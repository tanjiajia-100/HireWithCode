// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { 
    path: '/', 
    name: 'Welcome',
    component: () => import('@/views/WelcomeView.vue') 
  },
  { 
    path: '/guide', 
    name: 'Guide',
    component: () => import('@/views/GuideView.vue') 
  },
  { 
    path: '/accept', 
    name: 'Accept',
    component: () => import('@/views/AcceptView.vue') 
  },
  { 
    path: '/complete', 
    name: 'Complete',
    component: () => import('@/views/CompleteView.vue') 
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;