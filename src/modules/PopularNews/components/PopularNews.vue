<script setup>
  import { onMounted } from "vue";

  import { usePopularNewsStore } from "../store/popularNews";

  import PopularList from "./PopularList.vue";
  import { PreloaderBlock } from "@/modules/Preloader";

  const popularNewsStore = usePopularNewsStore();

  onMounted(() => {
    popularNewsStore.getPopularNews();
  });
</script>

<template>
  <section class="popularNews">
    <PreloaderBlock v-if="popularNewsStore.isLoading" />
    <div class="content" v-else>
      <h2 class="popularTitle">Популярные новости за сегодня</h2>
      <PopularList />
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .content {
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
