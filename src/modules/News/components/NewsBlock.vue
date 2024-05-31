<script setup>
  import { useNewsStore } from "../store/News";

  import NewsList from "./NewsList.vue";

  import NoFound from "@/shared/ui/NoFound.vue";
  import BlockTitle from "@/shared/ui/BlockTitle/BlockTitle.vue";
  import PreloaderBlock from "@/shared/ui/PreloaderBlock.vue";
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
      <BlockTitle class="title">Результаты поиска</BlockTitle>
      <NewsList />

      <LoadNewsButton v-if="newsStore.moreNews" @click="newsStore.renderNews" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .content {
    padding: 80px 100px;
    background-color: $bg-ligth-color;

    @media screen and (max-width: 1024px) {
      padding: 40px;
    }

    @media screen and (max-width: 475px) {
      padding: 30px 16px;
    }
  }

  .title {
    margin-bottom: 50px;

    @media screen and (max-width: 768px) {
      margin: 0 0 40px;
    }
  }
</style>
