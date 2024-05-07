<script setup>
  import { computed } from "vue";
  import { useHeaderStore } from "../store/header";
  import MainLogo from "@/shared/ui/logo/MainLogo.vue";

  const headerStore = useHeaderStore();

  const themeClass = computed(() => ({
    "header-light": headerStore.isHeaderLight,
  }));
</script>

<template>
  <header class="header" :class="themeClass">
    <MainLogo />
  </header>
</template>

<style lang="scss" scoped>
  .header {
    position: relative;
    justify-content: space-between;
    align-items: stretch;
    width: 100%;
    border-bottom: 1px $second-ligth-color solid;
    padding: 28px 104px;
    color: $main-dark-color;
    background-color: transparent;
    @include flex-row;

    @media screen and (max-width: 1024px) {
      padding: 20px 40px;
    }

    @media screen and (max-width: 425px) {
      padding: 16px;
    }
  }

  .header-light {
    color: $main-light-color;
  }

  .header-dark {
    color: $main-light-color;
    background-color: $main-dark-color;
  }
</style>
