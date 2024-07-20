import {
  RouteRecordRaw,
  Router,
  createRouter,
  createWebHashHistory,
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
  history: createWebHashHistory(),
  routes,
});

export default router;
