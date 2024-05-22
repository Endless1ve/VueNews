<script setup>
  const $props = defineProps({
    placeholder: {
      type: String,
      required: true,
    },
  });
  const model = defineModel();
</script>

<template>
  <input
    type="text"
    :placeholder="$props.placeholder"
    v-model="model"
    class="searchInput" />
</template>

<style lang="scss" scoped>
  .searchInput {
    width: 100%;
    border: 1px $second-ligth-color solid;
    border-radius: 100px;
    padding: 20px 208px 20px 20px;
    outline: none;
    font-family: $text-font;
    font-size: 16px;
    line-height: 137%;
    background-color: $main-light-color;
    stroke-width: 1px;

    @media screen and (max-width: 768px) {
      padding: 20px 196px 20px 20px;
    }
    @media screen and (max-width: 425px) {
      padding: 17px;
    }
  }
</style>
