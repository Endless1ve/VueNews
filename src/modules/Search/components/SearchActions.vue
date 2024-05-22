<script setup>
  import { useNewsStore } from "@/modules/News";

  import SearchInput from "@/shared/ui/inputs/searchInput.vue";
  import SearchButton from "@/shared/ui/buttons/searchButton.vue";

  const newsStore = useNewsStore();
</script>

<template>
  <div class="searchActions">
    <SearchInput
      placeholder="Введите тему новости"
      v-model.trim="newsStore.query" />
    <div class="searchButton">
      <SearchButton :disabled="!newsStore.query">Искать</SearchButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .searchActions {
    position: relative;

    @media screen and (max-width: 425px) {
      @include flex-column;
    }
  }

  .searchButton {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    max-width: 168px;

    @media screen and (max-width: 425px) {
      position: relative;
      max-width: 100%;
      margin-top: 16px;
    }
  }
</style>
