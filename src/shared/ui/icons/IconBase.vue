<script setup>
  const $props = defineProps({
    iconName: {
      type: String,
      required: true,
    },
    width: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
  });
</script>

<template>
  <svg
    class="icon"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :width="$props.width"
    :height="$props.height"
    :iconName="$props.iconName"
    :viewBox="`0 0 ${$props.width} ${$props.height}`"
    :aria-labelledby="$props.iconName">
    <title :id="$props.iconName" lang="ru">{{ $props.iconName }}</title>
    <g class="icon">
      <slot />
    </g>
  </svg>
</template>

<style lang="scss" scoped></style>
