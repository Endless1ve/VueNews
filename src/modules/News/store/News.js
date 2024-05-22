import { ref } from "vue";
import { defineStore } from "pinia";

export const useNewsStore = defineStore("news", () => {
  const query = ref("");

  function fetchNews() {
    console.log("valid");
  }

  return { query, fetchNews };
});
