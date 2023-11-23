import { createRouter, createWebHistory } from 'vue-router'
import {product} from './interfaces'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/views/MainView.vue'),
      props:{previousOrder:'',
            ParentCards:'',
    }
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
    {
      path:'/product/:id',
      component:() => import('@/views/ProductPageView.vue'),
      name:'product-details',
      props: route =>({card: {} as product}),
    },
  ],
})
