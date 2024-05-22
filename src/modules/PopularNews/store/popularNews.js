import { ref } from "vue";
import { defineStore } from "pinia";

export const usePopularNewsStore = defineStore("popularNews", () => {
  const news = ref([]);

  return { news };
});
