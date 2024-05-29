<script setup>
  import NavigationLinks from "./NavigationLinks.vue";
</script>

<template>
  <div class="actions">
    <NavigationLinks class="links" />
    <a
      href="https://github.com/Endless1ve/VueNews"
      class="link"
      target="_blank">
      <img
        class="image"
        src="@/shared/images/github.png"
        alt="Логотип github" />
    </a>
  </div>
</template>

<style lang="scss" scoped>
  .actions {
    @include flex-row;
    flex-grow: 1;
    justify-content: space-between;

    @media screen and (max-width: 475px) {
      width: 100%;
    }
  }

  .links {
    margin: 0 auto;

    @media screen and (max-width: 475px) {
      margin: 0;
    }
  }

  .image {
    width: 24px;
  }
</style>
