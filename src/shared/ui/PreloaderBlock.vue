<script setup>
  import PreloaderItem from "@/shared/ui/PreloaderItem.vue";
</script>

<template>
  <div class="preloader">
    <PreloaderItem />
    <p class="preloaderText">Идёт поиск новостей...</p>
  </div>
</template>

<style lang="scss" scoped>
  .preloader {
    align-items: center;
    gap: 24px;
    padding: 80px 0;
    background-color: #f5f6f7;
    @include flex-column;

    @media screen and (max-width: 768px) {
      padding: 40px 0;
    }

    @media screen and (max-width: 475px) {
      padding: 30px 0;
    }
  }

  .preloaderText {
    color: $second-ligth-color;
    font-family: $text-font;
    font-size: 18px;
    line-height: 133%;
    text-align: center;
  }
</style>
