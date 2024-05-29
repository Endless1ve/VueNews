<script setup>
  import { MainFooter } from "@/modules/Footer";
</script>

<template>
  <router-view />
  <MainFooter />
</template>

<style lang="scss">
  @import "./styles/normalize.scss";
  @import "./styles/fonts.scss";

  #app {
    width: 100%;
    min-height: 100vh;
    height: 100%;
    font-weight: 400;

    @include flex-column;
    justify-content: space-between;
  }
</style>
