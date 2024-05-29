<script setup></script>

<template>
  <button class="button">Показать ещё</button>
</template>

<style lang="scss" scoped>
  .button {
    border-radius: 80px;
    background-color: $main-light-color;
    padding: 18px 0;
    border: none;
    font-family: $text-font;
    font-weight: 500;
    font-size: 18px;
    line-height: 133%;
    text-align: center;
    color: $main-dark-color;
    width: 100%;
    display: block;
    max-width: 288px;
    margin: 30px auto 0;
    transition: $opacity-transition;
    cursor: pointer;

    @include hover-supports {
      &:hover {
        opacity: $hover-opacity;
      }
    }
  }
</style>
