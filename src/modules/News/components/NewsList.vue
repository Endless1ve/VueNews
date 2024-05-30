<script setup>
  import { useNewsStore } from "../store/News";

  import NewsItem from "./NewsItem.vue";

  const newsStore = useNewsStore();
</script>

<template>
  <div class="newsList">
    <NewsItem
      v-for="num in newsStore.newsCounter"
      :key="newsStore.news[num - 1]?.id"
      :item="newsStore.news[num - 1]" />
  </div>
</template>

<style lang="scss" scoped>
  .newsList {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;

    @media screen and (min-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>
