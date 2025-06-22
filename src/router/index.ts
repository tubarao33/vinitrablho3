import { createRouter, createWebHistory } from "vue-router";

export const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/HomeView.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/contacts",
    name: "Contacts",
    component: () => import("../views/ContactsView.vue"),
  },
  {
    path: "/courses",
    name: "Courses",
    component: () => import("../views/CoursesView.vue"),
  },
  {
    path: "/curso/:id",
    name: "curso", 
    component: () => import("../views/CursoView.vue"),
    props: true,  // ✅ permite acessar `id` como prop no CursoView.vue
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

