<script setup>
  import { onMounted } from "vue";

  import { MainHeader, useHeaderStore } from "@/modules/Header";
  import { SearchBlock } from "@/modules/Search";
  import { usePopularNewsStore } from "@/modules/PopularNews";

  const headerStore = useHeaderStore();
  const popularNewsStore = usePopularNewsStore();

  onMounted(() => {
    headerStore.setHeaderLight();
  });

  onMounted(() => {
    popularNewsStore.fetchPopularNews();
  });
</script>

<template>
  <div class="home">
    <SearchBlock>
      <MainHeader />
    </SearchBlock>
  </div>
</template>

<style lang="scss" scoped></style>
