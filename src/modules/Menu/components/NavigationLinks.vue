<script setup>
  import MenuLink from "@/shared/ui/menuLink/MenuLink.vue";
</script>

<template>
  <ul class="navigationLinks">
    <li class="link">
      <MenuLink :to="'/'">Главная</MenuLink>
    </li>
    <li class="link">
      <MenuLink :to="'/about'">О проекте</MenuLink>
    </li>
  </ul>
</template>

<style lang="scss" scoped></style>
