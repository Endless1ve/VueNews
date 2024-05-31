<script setup>
  import BlockTitle from "@/shared/ui/BlockTitle/BlockTitle.vue";
  import TechnologiesList from "./TechnologiesList.vue";
</script>

<template>
  <div class="technologies">
    <BlockTitle class="title">Используемые технологии</BlockTitle>
    <TechnologiesList />
  </div>
</template>

<style lang="scss" scoped>
  .technologies {
    @include block-padding;
    @include flex-row;

    background-color: $bg-ligth-color;

    @media screen and (max-width: 1024px) {
      @include flex-column;
    }
  }

  .title {
    max-width: 350px;
  }
</style>
