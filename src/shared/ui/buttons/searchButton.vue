<script setup></script>

<template>
  <button class="button" type="button"><slot></slot></button>
</template>

<style lang="scss" scoped>
  .button {
    border: none;
    border-radius: 100px;
    padding: 20px 0;
    font-family: $text-font;
    font-weight: 500;
    font-size: 18px;
    line-height: 133%;
    text-align: center;
    background-color: $second-dark-color;
    color: $main-light-color;
    cursor: pointer;
    width: 100%;

    @media screen and (max-width: 425px) {
      padding: 15px 0;
    }

    @include hover-supports {
      &:hover {
        background-color: $second-dark-hover;
      }
    }

    &:active {
      background-color: $second-dark-active;
    }

    &:disabled {
      background-color: $second-ligth-color;
      animation: none !important;
      cursor: default;

      &:active {
        background-color: $second-ligth-color;
      }
    }

    
  }
</style>
