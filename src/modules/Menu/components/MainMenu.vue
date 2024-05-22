<script setup>
  import { onMounted } from "vue";

  import { useMenuStore } from "../store/menu";

  import NavigationLinks from "./NavigationLinks";

  const menuStore = useMenuStore();

  onMounted(() => {
    window.addEventListener("resize", menuStore.handleResise);
  });
</script>

<template>
  <nav class="menu" v-if="menuStore.isLargeScreen || menuStore.isMenuOpen">
    <NavigationLinks />
  </nav>
</template>

<style lang="scss" scoped>
  .menu {
    @include flex-row;
    align-items: flex-end;
    @include gap-check-supports(0, 70px);

    @media screen and (max-width: 768px) {
      @include gap-check-supports(0, 50px);
    }

    @media screen and (max-width: 650px) {
      position: absolute;
      top: 102%;
      left: 0;
      width: 100%;
      border-radius: 0 0 20px 20px;
      padding: 20px 40px 40px;
      color: $main-light-color;
      background-color: $main-dark-color;
      align-items: flex-start;
      @include flex-column-reverse;
    }

    @media screen and (max-width: 425px) {
      padding: 20px 16px 40px;
    }
  }
</style>
