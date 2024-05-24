<script setup>
  import { onMounted } from "vue";

  import { usePopularNewsStore } from "../store/popularNews";

  import PopularItem from "./PopularItem.vue";

  const popularNewsStore = usePopularNewsStore();

  onMounted(() => {
    popularNewsStore.fetchPopularNews();
  });
</script>

<template>
  <section class="popularNews">
    <template v-if="popularNewsStore.news.length > 0">
      <h2 class="popularTitle">Популярные новости за сегодня</h2>
      <PopularItem
        v-for="(item, index) in popularNewsStore.news"
        :key="index"
        :item />
    </template>
  </section>
</template>

<style lang="scss" scoped>
  .popularNews {
    padding: 80px 100px;

    @media screen and (max-width: 1024px) {
      padding: 40px;
    }

    @media screen and (max-width: 475px) {
      padding: 30px 16px;
    }
  }

  .popularTitle {
    margin: 0 0 60px 0;
    color: $main-dark-color;
    font-family: $title-font;
    font-weight: 400;
    font-size: clamp(1.875rem, 1.1587rem + 1.4903vw, 2.5rem);
    line-height: 115%;

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
