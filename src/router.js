import { createRouter, createWebHistory } from 'vue-router';

import ProjectList from './pages/ProjectList.vue';
import AppHome from './pages/AppHome.vue';
import NotFound from './pages/NotFound.vue';
import ProjectDetail from './pages/ProjectDetail.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppHome,
    },
    {
      path: '/blog',
      name: 'projects',
      component: ProjectList,
    },
    {
      path: '/blog/:slug',
      name: 'project-detail',
      component: ProjectDetail,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound,
    },
  ],
});

export { router };
