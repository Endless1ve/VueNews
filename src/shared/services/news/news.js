import { axiosInstance } from "../service";

import { getNowDateToAPI, getMonthAgoDateToAPI } from "@/shared/utils/date";

export function fetchPopularNewsService() {
  return axiosInstance.get("/", {
    params: {
      q: "JavaScript",
      from: getNowDateToAPI(),
      to: getMonthAgoDateToAPI(),
      searchIn: "title,description",
      sortBy: "popularity",
      language: "ru",
      pageSize: 10,
      page: 1,
    },
  });
}

export function fetchNewsService(params) {
  return axiosInstance.get("/", { params });
}
