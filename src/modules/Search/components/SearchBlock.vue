<script setup>
  import SearchActions from "./SearchActions.vue";
</script>

<template>
  <section class="search">
    <slot></slot>
    <div class="searchContent">
      <div class="searchTexts">
        <h1 class="title">Что в мире творится?</h1>
        <p class="description">
          Введите в поиске любую тему и узнайте, насколько популярной она была в
          новостях за прошедшую неделю.
        </p>
      </div>
      <SearchActions />
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .search {
    align-items: center;
    background-image: url($search-image);
    background-position: center top;
    background-size: cover;
    background-color: rgba($color: $main-dark-color, $alpha: 0.7);
    background-blend-mode: overlay;
    @include flex-column;

    @media screen and (max-width: 400px) {
      background-image: url($search-image-min);
    }
  }

  .searchContent {
    width: 100%;
    max-width: 608px;
    padding: 80px 0;
    @include gap-check-supports(64px, 0);
    @include flex-column;

    @media screen and (max-width: 768px) {
      max-width: 452px;
      padding: 40px 16px;
      @include gap-check-supports(24px, 0);
    }

    @media screen and (max-width: 475px) {
      padding: 30px 16px;
    }
  }

  .searchTexts {
    @include gap-check-supports(32px, 0);
    @include flex-column;

    @media screen and (max-width: 768px) {
      @include gap-check-supports(16px, 0);
    }
  }

  .title {
    color: $main-light-color;
    font-family: $title-font;
    font-weight: 400;
    font-size: 60px;
    line-height: 107%;

    @media screen and (max-width: 768px) {
      max-width: 385px;
      font-size: 36px;
      line-height: 40px;
    }
  }

  .description {
    color: $main-light-color;
    font-family: $text-font;
    font-size: 18px;
    line-height: 133%;
  }
</style>
