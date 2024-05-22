<script setup>
  import { computed } from "vue";

  import { useNewsStore } from "@/modules/News";

  import {
    setupValidation,
    validate,
    searchRules,
  } from "@/shared/utils/validate";

  import SearchInput from "@/shared/ui/inputs/SearchInput.vue";
  import SearchButton from "@/shared/ui/buttons/SearchButton.vue";
  import InputError from "@/shared/ui/InputError.vue";
  import HiddenError from "@/shared/ui/HiddenError.vue";

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
    <InputError v-if="v$.query.$error">
      {{ v$.query.$errors[0].$message }}
    </InputError>
    <HiddenError v-else />
    <div class="searchButton">
      <SearchButton @click="fetchNews">Искать</SearchButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .searchActions {
    position: relative;
    @include flex-column;

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
      margin-top: 10px;
    }
  }
</style>
