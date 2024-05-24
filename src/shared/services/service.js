import axios from "axios";
import { baseURL, baseParams } from "./config";

export const axiosInstance = axios.create({
  baseURL,
  baseParams,
});
