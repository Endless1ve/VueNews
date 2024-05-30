<script setup>
  import { onMounted } from "vue";
  import { MainHeader, useHeaderStore } from "@/modules/Header";
  import { AboutSection } from "@/modules/About";

  const headerStore = useHeaderStore();

  onMounted(() => {
    headerStore.setHeaderDark();
  });
</script>

<template>
  <div class="about">
    <MainHeader />
    <AboutSection />
  </div>
</template>

<style lang="scss" scoped></style>
