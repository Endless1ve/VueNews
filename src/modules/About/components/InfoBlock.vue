<script setup></script>

<template>
  <div class="info">
    <h2 class="title">Пользователям</h2>
    <div class="content">
      <p class="text">
        <strong>VUE NEWS</strong>
        - это приложение для поиска и сохранения новостей.
      </p>
      <p class="text">
        Приложение написано с использованием фреймворка VUE и его
        вспомогательных инструментов, препроцессора SCSS и модульным подходом
        для создания компонентов.
      </p>
      <p class="text">
        Это интуитивно понятное приложение позволяет пользователям легко
        находить, сохранять и фильтровать актуальные новости.
      </p>
      <p class="text">
        Модульный подход при создании компонентов приложения позволяет
        эффективно масштабировать и поддерживать проект, обеспечивая
        производительность и удобство разработки.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .info {
    padding: 80px 100px;

    @media screen and (max-width: 1024px) {
      padding: 40px;
    }

    @media screen and (max-width: 475px) {
      padding: 30px 16px;
    }
  }

  .title {
    font-family: $title-font;
    font-weight: 400;
    font-size: 40px;
    line-height: 115%;
    color: $main-dark-color;
    margin: 0 0 24px 0;

    @media screen and (max-width: 768px) {
      font-size: 30px;
    }
  }

  .content {
    max-width: 815px;

    @include flex-column;
    @include gap-check-supports(20px, 0);
  }

  .text {
    font-family: $text-font;
    font-size: 18px;
    font-weight: 500;
    line-height: 133%;
    color: $main-dark-color;
  }
</style>
