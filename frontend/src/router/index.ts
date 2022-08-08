import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import LayOut from '../views/layout/index.vue';
import { MenuOption } from 'naive-ui';

export const routes: Array<RouteRecordRaw & MenuOption> = [
  {
    path: '/',
    name: 'home',
    key: 'home',
    label: '首页',
    component: LayOut,
    redirect: '/dashBord',
    children: [
      {
        path: 'dashBord',
        name: 'dashBord',
        key: 'dashBord',
        label: 'dashBord',
        component: import('../views/dashBord/index.vue')
      }
    ]
  },
  {
    path: '/project',
    name: 'project',
    key: 'project',
    label: '项目',
    component: LayOut,
    redirect: '/project/list',
    children: [
      {
        path: 'list',
        name: 'projectList',
        key: 'projectList',
        label: '项目列表',
        component: import('@/views/project/index.vue')
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
