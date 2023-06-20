const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', redirect: '/quiz',component: () => import('pages/QuizPage.vue')},
      { path: '/quiz', component: () => import('pages/QuizPage.vue') }
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
