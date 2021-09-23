import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/default",
    name: "default",
    component: () => import("../components/Default.vue")
  },
  {
    path: "/light",
    name: "light",
    component: () => import("../views/LightTheme.vue")
  },
  {
    path: "/dark",
    name: "dark",
    component: () => import("../views/DarkTheme.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: "",
  routes
});

export default router;
