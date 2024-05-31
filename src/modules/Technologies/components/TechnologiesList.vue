<script setup>
  import TechnologyItem from "./TechnologyItem.vue";

  import html from "@/shared/images/html.png";
  import scss from "@/shared/images/scss.png";
  import js from "@/shared/images/js.png";
  import vue from "@/shared/images/vue.png";
</script>

<template>
  <div class="list">
    <TechnologyItem
      title="HTML"
      :src="html"
      alt="Логотип HTML"></TechnologyItem>
    <TechnologyItem
      title="SCSS"
      :src="scss"
      alt="Логотип SCSS"></TechnologyItem>
    <TechnologyItem
      title="JavaScript"
      :src="js"
      alt="Логотип JavaScript"></TechnologyItem>
    <TechnologyItem title="VUE" :src="vue" alt="Логотип VUE"></TechnologyItem>
  </div>
</template>

<style lang="scss" scoped>
  .list {
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;

    @include flex-row;
    @include gap-check-supports(30px, 40px);

    @media screen and (max-width: 1024px) {
      flex-wrap: wrap;
      justify-items: center;
      justify-content: space-between;
      width: 100%;
      margin: 40px auto 0;
    }
  }
</style>
