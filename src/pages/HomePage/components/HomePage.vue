<script setup>
  import { onMounted } from "vue";

  import { MainHeader, useHeaderStore } from "@/modules/Header";
  import { SearchBlock } from "@/modules/Search";
  import { PopularList } from "@/modules/PopularNews";

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
    <PopularList />
  </div>
</template>

<style lang="scss" scoped></style>
