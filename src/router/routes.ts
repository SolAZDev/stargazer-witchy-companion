import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/HomePage.vue') },
      {
        path: '/sabbats',
        component: () => import('pages/Witchy/SabbatsList.vue'),
      },
      {
        path: '/sabbats/:id',
        component: () => import('pages/Witchy/SabbatDetails.vue'),
      },
      {
        path: '/dreams',
        component: () => import('pages/Dreams/DreamsMain.vue'),
      },
      {
        path: '/dreams/symbols/:id',
        component: () => import('pages/Dreams/DreamSymbol.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
