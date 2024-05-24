<script setup>
  import { usePopularNewsStore } from "../store/popularNews";
  import PopularItem from "./PopularItem.vue";

  const popularNewsStore = usePopularNewsStore();
</script>

<template>
  <div class="popularList">
    <PopularItem
      v-for="(item, index) in popularNewsStore.news"
      :key="index"
      :item />
  </div>
</template>

<style lang="scss" scoped>
  .popularList {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px 120px;

    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
    }

    @media screen and (max-width: 475px) {
      gap: 15px 120px;
    }
  }
</style>
