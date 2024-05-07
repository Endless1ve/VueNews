<script setup>
  const $props = defineProps({
    path: {
      type: String,
      required: true,
    },
  });
</script>

<template>
  <RouterLink class="link" :to="$props.path"><slot></slot></RouterLink>
</template>

<style lang="scss" scoped>
  .link {
    font-family: $text-font;
    font-weight: 500;
    font-size: 18px;
    line-height: 133%;
    text-align: center;
  }
</style>
