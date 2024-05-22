export const baseURL = "https://nomoreparties.co/news/v2/everything";
const apiKey = process.env.VUE_APP_API_KEY;

export const params = {
  apiKey,
  excludeDomains: "ua",
};
