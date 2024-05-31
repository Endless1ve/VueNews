<script setup></script>

<template>
  <span class="error"><slot></slot></span>
</template>

<style lang="scss" scoped>
  .error {
    margin-top: 10px;
    font-family: $text-font;
    font-size: 16px;
    text-align: center;
    color: $error-color;
  }
</style>
