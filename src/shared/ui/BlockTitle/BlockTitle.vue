<script setup></script>

<template>
  <h2 class="title"><slot></slot></h2>
</template>

<style lang="scss" scoped>
  .title {
    font-family: $title-font;
    font-weight: 400;
    line-height: 115%;
    color: $main-dark-color;
    font-size: clamp(1.875rem, 1.1587rem + 1.4903vw, 2.5rem);
  }
</style>
