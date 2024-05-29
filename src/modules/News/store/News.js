import { computed, ref } from "vue";

import { defineStore } from "pinia";

import { fetchNewsService } from "@/shared/services/news/news";

import { getNowDateToAPI, getWeekAgoDateToAPI } from "@/shared/utils/date";
import { createId } from "@/shared/utils/id";

export const useNewsStore = defineStore("news", () => {
  const query = ref("");
  const news = ref([]);

  const totalNews = ref(0);
  const newsCounter = ref(0);
  const renderSize = 3;

  const moreNews = computed(() => totalNews.value > newsCounter.value);
  const isNoResults = ref(false);
  const isLoading = ref(false);

  async function fetchNews() {
    try {
      const params = {
        q: query.value,
        from: getNowDateToAPI(),
        to: getWeekAgoDateToAPI(),
        sortBy: "publishedAt",
      };

      newsCounter.value = 0;
      isLoading.value = true;
      isNoResults.value = false;

      const response = await fetchNewsService(params);

      if (response.data.articles.length === 0) {
        isNoResults.value = true;
      }

      news.value = response.data.articles.map((article) => ({
        ...article,
        id: createId(),
      }));

      totalNews.value = response.data.articles.length;

      renderNews();
    } catch (error) {
      console.log(error);
    } finally {
      isLoading.value = false;
    }
  }

  function renderNews() {
    if (newsCounter.value < totalNews.value) {
      newsCounter.value = newsCounter.value + renderSize;
    }
  }

  return {
    query,
    news,
    isNoResults,
    isLoading,
    newsCounter,
    moreNews,
    fetchNews,
    renderNews,
  };
});
