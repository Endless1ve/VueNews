import { computed, ref } from "vue";

import { defineStore } from "pinia";

import { fetchPopularNewsService } from "@/shared/services/news/news";

import { getNowDateToAPI, getWeekAgotDateToAPI } from "@/shared/utils/date";
import { getLocalItem, setLocalItem } from "@/shared/utils/localStorage";

export const usePopularNewsStore = defineStore("popularNews", () => {
  const news = ref([]);
  const isLoading = ref(false);
  const fetchError = ref(false);
  const isNoResults = computed(() => news.value.length === 0);

  const newsKey = "news";
  const timeKey = "time";
  const queryInterval = 10815968;

  const popularNewsParams = {
    q: "JavaScript",
    from: getNowDateToAPI(),
    to: getWeekAgotDateToAPI(),
    searchIn: "title,description",
    sortBy: "popularity",
    language: "ru",
    pageSize: 10,
    page: 1,
  };

  function getPopularNews() {
    const localNews = getLocalItem(newsKey);

    const queryTime = getLocalItem(timeKey);

    const timeDifference = Date.now() - queryTime;

    if (!localNews || timeDifference > queryInterval) {
      fetchPopularNews();
    } else {
      news.value = localNews;
    }
  }

  async function fetchPopularNews() {
    try {
      isLoading.value = true;

      const response = await fetchPopularNewsService(popularNewsParams);

      if (response.data.articles.length) {
        setLocalItem(newsKey, response.data.articles);
        setLocalItem(timeKey, Date.now());

        news.value = response.data.articles;
      }
    } catch (error) {
      fetchError.value = true;
    } finally {
      isLoading.value = false;
    }
  }

  return {
    news,
    isLoading,
    fetchError,
    isNoResults,
    getPopularNews,
  };
});
