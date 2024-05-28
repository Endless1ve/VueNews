<script setup>
  import { useNewsStore } from "../store/News";

  import NoFound from "@/shared/ui/NoFound.vue";
  import PreloaderBlock from "@/shared/ui/PreloaderBlock.vue";
  import NewsList from "./NewsList.vue";
  import LoadNewsButton from "@/shared/ui/buttons/LoadNewsButton.vue";

  const newsStore = useNewsStore();
</script>

<template>
  <section class="news">
    <NoFound title="Ничего не найдено" v-if="newsStore.isNoResults" />

    <PreloaderBlock v-if="newsStore.isLoading" />

    <div
      class="content"
      v-if="newsStore.news.length !== 0 && !newsStore.isLoading">
      <h2 class="title">Результаты поиска</h2>
      <NewsList />
      <LoadNewsButton v-if="newsStore.moreNews" @click="newsStore.renderNews" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .content {
    background-color: $bg-ligth-color;
    padding: 80px 100px;

    @media screen and (max-width: 1024px) {
      padding: 40px;
    }

    @media screen and (max-width: 475px) {
      padding: 30px 16px;
    }
  }

  .title {
    color: $main-dark-color;
    font-family: $title-font;
    font-weight: 400;
    font-size: 40px;
    line-height: 115%;
    margin-bottom: 50px;

    @media screen and (max-width: 768px) {
      margin: 0 0 40px 0;
      font-size: 30px;
      line-height: 153%;
    }

    @media screen and (max-width: 475px) {
      line-height: 113%;
    }
  }
</style>
