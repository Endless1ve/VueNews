import { ref } from "vue";
import { defineStore } from "pinia";

export const useNewsStore = defineStore("news", () => {
  const query = ref("");
  const news = ref([]);
  const isNoResults = ref(false);
  const isLoading = ref(false);

  function fetchNews() {
    console.log("valid");
  }

  return { query, news, isNoResults, isLoading, fetchNews };
});
