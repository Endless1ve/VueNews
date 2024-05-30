<script setup>
  import { onMounted } from "vue";
  import { MainHeader, useHeaderStore } from "@/modules/Header";
  import { InfoBlock } from "@/modules/Info";
  import { TechnologiesBlock } from "@/modules/Technologies";

  const headerStore = useHeaderStore();

  onMounted(() => {
    headerStore.setHeaderDark();
  });
</script>

<template>
  <div class="about">
    <MainHeader />
    <InfoBlock />
    <TechnologiesBlock />
  </div>
</template>

<style lang="scss" scoped></style>
