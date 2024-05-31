<script setup>
  import { computed } from "vue";

  import { useMenuStore } from "@/modules/Menu";

  import { useHeaderStore } from "../store/header";
 

  const headerStore = useHeaderStore();
  const menuStore = useMenuStore();

  const burgerClass = computed(() => ({
    "burgerEl-light": headerStore.isHeaderLight || menuStore.isMenuOpen,
  }));
</script>

<template>
  <div class="burgerButton" :class="{ open: menuStore.isMenuOpen }">
    <span class="burgerEl top" :class="burgerClass"></span>
    <span class="burgerEl middle" :class="burgerClass"></span>
    <span class="burgerEl bottom" :class="burgerClass"></span>
  </div>
</template>

<style lang="scss" scoped>
  .burgerButton {
    position: relative;
    width: 25px;
    transition: 0.5s ease-in-out;
    transform: rotate(0deg);
    cursor: pointer;

    @media screen and (min-width: 651px) {
      display: none;
    }
  }

  .burgerEl {
    position: absolute;
    left: 0;
    display: block;
    border-radius: 9px;
    margin: 0 auto;
    background: $main-dark-color;
    transition: 0.25s ease-in-out;
    transform: rotate(0deg);
    opacity: 1;
    width: 100%;
    height: 3px;
  }

  .burgerEl-light {
    background: $main-light-color;
  }

  .top {
    top: 6px;
  }

  .middle {
    top: 13px;
  }

  .bottom {
    top: 20px;
  }

  .open .top {
    top: 12px;
    transform: rotate(135deg);
  }

  .open .middle {
    opacity: 0;
  }

  .open .bottom {
    top: 12px;
    transform: rotate(-135deg);
  }


</style>
