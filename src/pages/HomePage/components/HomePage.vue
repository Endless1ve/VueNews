<script setup>
  import { onMounted } from "vue";
  import { MainHeader, useHeaderStore } from "@/modules/Header";

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
  </div>
</template>

<style lang="scss" scoped></style>
