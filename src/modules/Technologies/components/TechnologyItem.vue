<script setup>
  const $props = defineProps({
    title: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
  });
</script>

<template>
  <div class="item">
    <p class="title">{{ $props.title }}</p>
    <img class="image" :src="$props.src" :alt="$props.alt" />
  </div>
</template>

<style lang="scss" scoped>
  .item {
    @include flex-column;
    align-items: center;
    justify-content: flex-start;
    @include gap-check-supports(10px, 0);
    height: 100%;
  }

  .title {
    font-family: $text-font;
    font-size: 18px;
    line-height: 133%;
    letter-spacing: 0.01em;
    text-align: center;
    color: $main-dark-color;
  }

  .image {
    height: 94px;
  }
</style>
