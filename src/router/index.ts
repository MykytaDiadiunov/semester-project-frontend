import {
  createMemoryHistory,
  createRouter,
  RouteLocationNormalized,
  RouteRecordRaw,
} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    name: 'Home',
    path: '/',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    name: 'Instructions',
    path: '/instructions',
    component: () => import('@/views/InstructionsView.vue'),
  },
  {
    name: 'Licenses',
    path: '/licensesView',
    component: () => import('@/views/LicensesView.vue'),
  },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

router.beforeEach(async (to: RouteLocationNormalized) => {})

export default router
