<script setup>
  import { onMounted } from "vue";
  import { MainHeader, useHeaderStore } from "@/modules/Header";
  import { InfoBlock } from "@/modules/Info";
  import { TechnologiesBlock } from "@/modules/Technologies";
  import { DeveloperBlock } from "@/modules/Developer";

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
    <DeveloperBlock />
  </div>
</template>

<style lang="scss" scoped></style>
