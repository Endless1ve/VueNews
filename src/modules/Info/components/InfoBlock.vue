<script setup>
  import BlockTitle from "@/shared/ui/BlockTitle/BlockTitle.vue";
</script>

<template>
  <div class="info">
    <BlockTitle class="title">Пользователям</BlockTitle>
    <div class="content">
      <p>
        <strong>VUE NEWS</strong>
        - это приложение для поиска и сохранения новостей.
      </p>
      <p>
        Приложение написано с использованием фреймворка VUE и его
        вспомогательных инструментов, препроцессора SCSS и использован модульный
        подход для создания компонентов.
      </p>
      <p>
        Это приложение позволяет пользователям легко находить и сохранять
        актуальные новости.
      </p>
      <p>
        Модульный подход при создании компонентов приложения позволяет
        эффективно масштабировать и поддерживать проект, обеспечивая
        производительность и удобство разработки.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .info {
    @include block-padding;
  }

  .title {
    margin: 0 0 30px;
  }

  .content {
    font-family: $text-font;
    font-size: 18px;
    line-height: 133%;
    color: $main-dark-color;
    max-width: 815px;

    @include flex-column;
    @include gap-check-supports(20px, 0);
  }
</style>
