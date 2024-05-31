<script setup></script>

<template>
  <button class="button">Показать ещё</button>
</template>

<style lang="scss" scoped>
  .button {
    display: block;
    border: none;
    border-radius: 80px;
    margin: 30px auto 0;
    padding: 18px 0;
    font-family: $text-font;
    font-weight: 500;
    font-size: 18px;
    line-height: 133%;
    text-align: center;
    background-color: $main-light-color;
    transition: $opacity-transition;
    color: $main-dark-color;
    cursor: pointer;
    width: 100%;
    max-width: 288px;

    @include hover-supports {
      &:hover {
        opacity: $hover-opacity;
      }
    }
  }
</style>
