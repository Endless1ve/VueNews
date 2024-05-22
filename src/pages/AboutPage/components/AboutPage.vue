<script setup>
  import { onMounted } from "vue";
  import { MainHeader, useHeaderStore } from "@/modules/Header";

  const headerStore = useHeaderStore();

  onMounted(() => {
    headerStore.setHeaderDark();
  });
</script>

<template>
  <div class="about">
    <MainHeader />
  </div>
</template>

<style lang="scss" scoped></style>
