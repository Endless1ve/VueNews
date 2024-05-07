const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/pages/HomePage"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/pages/AboutPage"),
  },
];

export default routes;
