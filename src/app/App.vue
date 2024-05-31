<script setup>
  import { MainFooter } from "@/modules/Footer";
</script>

<template>
  <router-view />
  <MainFooter />
</template>

<style lang="scss">
  @import "./styles/normalize";
  @import "./styles/fonts";

  #app {
    justify-content: space-between;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    font-weight: 400;

    @include flex-column;
  }
</style>
