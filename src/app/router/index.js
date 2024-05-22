import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./routes";

import { useMenuStore } from "@/modules/Menu";

const router = createRouter({
  history: createWebHashHistory("/VueNews/"),
  routes,
});

router.beforeEach(() => {
  const menuStore = useMenuStore();

  menuStore.closeMenu();
});

export default router;
