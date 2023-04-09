import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SearchView from '@/views/SearchView.vue'
import CreateView from '@/views/CreateView.vue';
import NotificationsView from '@/views/NotificationsView.vue';
import ReelsView from '@/views/ReelsView.vue';
import MessagesView from '@/views/MessagesView.vue';
import ExploreView from '@/views/ExploreView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView,
    },
    {
      path: '/explore',
      name: 'explore',
      component: ExploreView,
    },
    {
      path: '/messages',
      name: 'messages',
      component: MessagesView,
    },
    {
      path: '/reels',
      name: 'reels',
      component: ReelsView,
    },
    {
      path: '/notifications',
      name: 'notifications',
      component: NotificationsView,
    },
    {
      path: '/create',
      name: 'create',
      component: CreateView,
    },
  ],
})

export default router
