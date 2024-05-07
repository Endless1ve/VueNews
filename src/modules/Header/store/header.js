import { ref } from "vue";
import { defineStore } from "pinia";

export const useHeaderStore = defineStore("header", () => {
  const isHeaderLight = ref(false);

  function setHeaderLight() {
    isHeaderLight.value = true;
  }
  function setHeaderDark() {
    isHeaderLight.value = false;
  }

  return { isHeaderLight, setHeaderLight, setHeaderDark };
});
