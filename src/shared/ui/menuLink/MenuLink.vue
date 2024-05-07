<script setup>
  const $props = defineProps({
    path: {
      type: String,
      required: true,
    },
  });
</script>

<template>
  <RouterLink :to="$props.path"></RouterLink>
</template>

<style lang="scss" scoped></style>
