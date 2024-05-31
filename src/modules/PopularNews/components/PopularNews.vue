<script setup>
  import { onMounted } from "vue";

  import { usePopularNewsStore } from "../store/popularNews";

  import PopularList from "./PopularList.vue";
  import PreloaderBlock from "@/shared/ui/PreloaderBlock.vue";
  import NoFound from "@/shared/ui/NoFound.vue";
  import BlockTitle from "@/shared/ui/BlockTitle/BlockTitle.vue";

  const popularNewsStore = usePopularNewsStore();

  onMounted(() => {
    popularNewsStore.getPopularNews();
  });
</script>

<template>
  <section class="popularNews">
    <PreloaderBlock v-if="popularNewsStore.isLoading" />

    <NoFound
      title="Популярные новости не найдены"
      v-else-if="popularNewsStore.fetchError || popularNewsStore.isNoResults" />

    <div class="content" v-else>
      <BlockTitle class="title">Популярные новости за сегодня</BlockTitle>
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

  .title {
    margin: 0 0 60px;

    @media screen and (max-width: 768px) {
      margin: 0 0 40px;
    }
  }
</style>
