import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/",
        name: "Search",
        component: () =>
          import(/* webpackChunkName: "Search" */ "../views/Search.vue"),
      },
      {
        path: "/PTemplates",
        name: "PTemplates",
        component: () =>
          import(
            /* webpackChunkName: "PTemplates" */ "../views/PTemplates.vue"
          ),
      },
      {
        path: "/PTemplates/:id",
        name: "PTemplatesbyId",
        component: () =>
          import(
            /* webpackChunkName: "PTemplates" */ "../views/PTemplates.vue"
          ),
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
