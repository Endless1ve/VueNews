<script setup></script>

<template>
  <span class="error"><slot></slot></span>
</template>

<style lang="scss" scoped>
  .error {
    font-family: $text-font;
    font-size: 16px;
    color: $error-color;
    text-align: center;
    margin-top: 10px;
  }
</style>
