import {
  RouteRecordRaw,
  Router,
  createRouter,
  createWebHistory,
} from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    component: () => import("@/views/Projects.vue"),
    path: "/",
  },
  {
    component: () => import("@/views/Timeline.vue"),
    path: "/timeline",
  },
];

const router: Router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
