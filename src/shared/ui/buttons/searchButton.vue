<script setup></script>

<template>
  <button class="button" type="button"><slot></slot></button>
</template>

<style lang="scss" scoped>
  .button {
    width: 100%;
    border: none;
    border-radius: 100px;
    padding: 20px 0;
    color: $main-light-color;
    font-family: $text-font;
    font-weight: 500;
    font-size: 18px;
    line-height: 133%;
    text-align: center;
    background-color: $second-dark-color;
    cursor: pointer;

    @media screen and (max-width: 425px) {
      padding: 15px 0;
    }

    @include hover-supports {
      &:hover {
        background-color: $second-dark-hover;
      }
    }

    &:disabled {
      background-color: $second-ligth-color;
      animation: none !important;
      cursor: default;

      &:active {
        background-color: $second-ligth-color;
      }
    }

    &:active {
      background-color: $second-dark-active;
    }
  }
</style>
