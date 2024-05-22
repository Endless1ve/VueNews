import { ref } from "vue";
import { defineStore } from "pinia";
import { fetchPopularNewsService } from "@/shared/services/news/news";
import { getNowDateToAPI, getWeekAgotDateToAPI } from "@/shared/utils/date";

export const usePopularNewsStore = defineStore("popularNews", () => {
  const news = ref([]);

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

  async function fetchPopularNews() {
    try {
      const response = await fetchPopularNewsService(popularNewsParams);

      news.value = response.data.articles;
    } catch (error) {
      console.log(error);
    }
  }

  return { news, popularNewsParams, fetchPopularNews };
});
