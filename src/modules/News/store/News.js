import { ref } from "vue";
import { defineStore } from "pinia";
import { fetchNewsService } from "@/shared/services/news/news";
import { getNowDateToAPI, getWeekAgoDateToAPI } from "@/shared/utils/date";

export const useNewsStore = defineStore("news", () => {
  const query = ref("");
  const news = ref([]);
  const isNoResults = ref(false);
  const isLoading = ref(false);

  async function fetchNews() {
    try {
      const params = {
        q: query.value,
        from: getNowDateToAPI(),
        to: getWeekAgoDateToAPI(),
      };

      isLoading.value = true;
      isNoResults.value = false;

      const response = await fetchNewsService(params);

      if (response.data.articles.length === 0) {
        isNoResults.value = true;
      }

      news.value = response.data.articles;
    } catch (error) {
      console.log(error);
    } finally {
      isLoading.value = false;
    }
  }

  return { query, news, isNoResults, isLoading, fetchNews };
});
