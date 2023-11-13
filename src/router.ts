import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/views/MainView.vue'),
      props:{previousOrder:''}
    },
    {
      path: '/locations',
      component: () => import('@/views/LocationsView.vue'),
    },
    {
      path: '/search',
      component: () => import('@/views/SearchView.vue'),
    },
    {
      path: '/account',
      component: () => import('@/views/AccountView.vue'),
    },
  ],
})
