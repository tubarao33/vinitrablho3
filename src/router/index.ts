import { createRouter, createWebHistory } from "vue-router";

//const baseUrl = import.meta.env.VITE_BUILD_ADDRESS;
const baseUrl = "";
export const routes = [
  {
    path: `${baseUrl}/`,
    //component: () => import("@/layouts/Default.vue"),
    children: [
      { path: "", name: "Home", component: () => import("@/views/HomeView.vue") }
    ],
  },
  {
    path: `${baseUrl}/about`,
    //component: () => import("@/layouts/Page.vue"),
    children: [
      { path: "", name: "About", component: () => import("@/views/HomeView.vue") }
    ],
  },

  {
    path: `${baseUrl}/contacts`,
    //component: () => import("@/layouts/Page.vue"),
    children: [
      { path: "", name: "Contacts", component: () => import("@/views/HomeView.vue") },
    ],
  },
  
];

export const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
