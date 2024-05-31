<script setup>
  import { getCurrentYear } from "@/shared/utils/date";
  import FooterActions from "./FooterActions.vue";
</script>

<template>
  <footer class="footer">
    <p class="copy">&copy; {{ getCurrentYear() }} Endless1ve</p>
    <FooterActions />
  </footer>
</template>

<style lang="scss" scoped>
  .footer {
    align-items: center;
    border-top: $gray-border;
    padding: 28px 104px;

    @include flex-row;

    @media screen and (max-width: 1024px) {
      padding: 20px 40px;
    }

    @media screen and (max-width: 475px) {
      align-items: flex-start;
      padding: 16px;

      @include gap-check-supports(30px, 0);
      @include flex-column-reverse;
    }
  }

  .copy {
    font-family: $text-font;
    font-weight: 400;
    font-size: 16px;
    line-height: 137%;
    color: $second-ligth-color;
  }
</style>
