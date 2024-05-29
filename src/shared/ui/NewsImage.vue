<script setup>
  import { ref, defineProps, onMounted } from "vue";

  import defaultImage from "@/shared/images/imageError.png";

  const $props = defineProps({
    src: {
      type: [String, null],
      required: true,
    },
  });

  const imageSource = ref($props.src);

  const checkImageLoad = () => {
    const image = new Image();
    image.src = $props.src;

    const loadTimeout = setTimeout(() => {
      imageSource.value = defaultImage;
    }, 5000);

    image.onload = () => {
      clearTimeout(loadTimeout);
    };

    image.onerror = () => {
      clearTimeout(loadTimeout);
      imageSource.value = defaultImage;
    };
  };

  onMounted(() => checkImageLoad());
</script>

<template>
  <img :src="imageSource" @error="handleImage" />
</template>

<style lang="scss" scoped></style>
