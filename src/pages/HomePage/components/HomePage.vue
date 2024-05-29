<script setup>
  import { onMounted } from "vue";

  import { MainHeader, useHeaderStore } from "@/modules/Header";
  import { SearchBlock } from "@/modules/Search";
  import { PopularNews } from "@/modules/PopularNews";
  import { NewsBlock } from "@/modules/News";

  const headerStore = useHeaderStore();

  onMounted(() => {
    headerStore.setHeaderLight();
  });
</script>

<template>
  <div class="home">
    <SearchBlock>
      <MainHeader />
    </SearchBlock>
    <NewsBlock />
    <PopularNews />
  </div>
</template>

<style lang="scss" scoped></style>
