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
        вспомогательных инструментов, препроцессора SCSS и модульным подходом
        для создания компонентов.
      </p>
      <p>
        Это интуитивно понятное приложение позволяет пользователям легко
        находить, сохранять и фильтровать актуальные новости.
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
    margin: 0 0 30px 0;
  }

  .content {
    max-width: 815px;
    font-family: $text-font;
    font-size: 18px;
    line-height: 133%;
    color: $main-dark-color;
    @include flex-column;
    @include gap-check-supports(20px, 0);
  }
</style>
