<script setup></script>

<template>
  <i class="circle-preloader"></i>
</template>

<style lang="scss" scoped>
  .circle-preloader {
    display: block;
    width: 50px;
    height: 50px;
    border: 2px solid #444;

    border-radius: 50%;
    border-bottom-color: #888;

    animation: spin 0.75s infinite linear;
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
</style>
