<script setup>
  const $props = defineProps({
    title: { type: String, required: true },
  });

  import IconBase from "@/shared/ui/icons/IconBase.vue";
  import LoupeIcon from "@/shared/ui/icons/LoupeIcon.vue";
</script>

<template>
  <div class="noFound">
    <IconBase class="loupeBase" :width="83" :height="83" :iconName="'Лупа'">
      <LoupeIcon />
    </IconBase>
    <div class="content">
      <p class="title">{{ $props.title }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .noFound {
    align-items: center;
    gap: 30px;
    padding: 80px 0;
    background-color: #f5f6f7;

    @include flex-column;

    @media screen and (max-width: 768px) {
      padding: 40px 0;
    }

    @media screen and (max-width: 475px) {
      padding: 30px 16px;
    }
  }

  .content {
    align-items: center;
    gap: 16px;

    @include flex-column;
  }

  .title {
    font-family: $title-font;
    font-weight: 400;
    font-size: 26px;
    line-height: 115%;
    text-align: center;
  }
</style>
