<script setup>
  import MenuLink from "@/shared/ui/menuLink/MenuLink.vue";
</script>

<template>
  <ul class="navigationLinks">
    <li class="link">
      <MenuLink path="home">Главная</MenuLink>
    </li>
    <li class="link">
      <MenuLink path="about">О проекте</MenuLink>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
  .navigationLinks {
    align-items: center;

    @include flex-row;
    @include gap-check-supports(0, 30px);

    @media screen and (max-width: 650px) {
      align-items: flex-start;
      @include gap-check-supports(20px, 0);
      @include flex-column;
    }
  }

  .link {
    transition: $opacity-transition;
    @include hover-supports {
      &:hover {
        opacity: $hover-opacity;
      }
    }
  }
</style>
