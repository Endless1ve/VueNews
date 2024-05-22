import axios from "axios";
import { baseURL, params } from "./config";

export const axiosInstance = axios.create({
  baseURL,
  params,
});
