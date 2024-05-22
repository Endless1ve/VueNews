<script setup>
  import { computed } from "vue";

  import { useNewsStore } from "@/modules/News";

  import {
    setupValidation,
    validate,
    searchRules,
  } from "@/shared/utils/validate";

  import SearchInput from "@/shared/ui/inputs/searchInput.vue";
  import SearchButton from "@/shared/ui/buttons/searchButton.vue";

  const newsStore = useNewsStore();

  const query = computed(() => newsStore.query);

  const v$ = setupValidation(searchRules, {
    query,
  });

  const fetchNews = () => {
    validate(v$, newsStore.fetchNews);
  };
</script>

<template>
  <div class="searchActions">
    <SearchInput
      placeholder="Введите тему новости"
      v-model.trim="newsStore.query"
      @keyup.enter="fetchNews" />
    <div class="searchButton">
      <SearchButton @click="fetchNews">Искать</SearchButton>
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
