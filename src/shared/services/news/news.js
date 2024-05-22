import { axiosInstance } from "../service";

export function fetchPopularNewsService(params) {
  return axiosInstance.get("/", { params });
}
