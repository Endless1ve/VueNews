import { ref } from "vue";
import { defineStore } from "pinia";

export const useMenuStore = defineStore("menu", () => {
  const isMenuOpen = ref(false);
  const isLargeScreen = ref(window.innerWidth > 650);

  function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value;
  }

  function closeMenu() {
    isMenuOpen.value = false;
  }

  function handleResise() {
    isLargeScreen.value = window.innerWidth > 650;
    if (isLargeScreen.value) {
      closeMenu();
    }
  }

  return {
    isMenuOpen,
    isLargeScreen,
    toggleMenu,
    handleResise,
    closeMenu,
  };
});
