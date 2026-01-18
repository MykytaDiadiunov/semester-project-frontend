import { createMemoryHistory, createRouter, RouteLocationNormalized, RouteRecordRaw } from 'vue-router';


const routes: Array<RouteRecordRaw> = [
  {
    name: "Home",
    path: "/",
    component: () => import('@/views/HomeView.vue'),
  }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

router.beforeEach(async (to: RouteLocationNormalized) => {})


export default router