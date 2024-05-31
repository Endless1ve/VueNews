<script setup>
  import BlockTitle from "@/shared/ui/BlockTitle/BlockTitle.vue";
</script>

<template>
  <section class="developer">
    <img
      class="image"
      src="@/shared/images/developer.png"
      alt="Фотография разработчика (это правда я)" />
    <div class="info">
      <BlockTitle>О разработчике</BlockTitle>
      <div class="content">
        <p class="text">Привет! Меня зовут Артём и я frontend-developer.</p>
        <p class="text">
          Фронтенд разработка для меня — это не просто работа, а настоящее
          увлечение. Я люблю изучать новые технологии и подходы, которые
          помогают сделать веб-приложения быстрее и удобнее для пользователей.
          Трудности меня не пугают, наоборот, они мотивируют меня становиться
          лучше. Я уверен, что каждый новый вызов — это возможность для роста и
          саморазвития.
        </p>
        <p class="text">
          Моя цель — стать профессионалом в области фронтенд разработки. Я хочу
          углубить своё понимание современных технологий и лучших практик, а
          также научиться эффективно работать в команде и вносить значимый вклад
          в проекты.
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .developer {
    @include block-padding;
    @include flex-row;
    align-items: center;
    @include gap-check-supports(0, 50px);

    @media screen and (max-width: 768px) {
      @include flex-column;
    }
  }

  .image {
    max-width: 464px;
    width: 40%;
    border-radius: 100%;

    @media screen and (max-width: 768px) {
      width: 100%;
      max-width: 300px;
      margin: 0 0 24px 0;
    }
  }

  .content {
    @include flex-column;
    @include gap-check-supports(15px, 0);
    max-width: 800px;
    margin: 40px 0 0;

    @media screen and (max-width: 768px) {
      margin: 20px 0 0;
    }
  }

  .text {
    font-family: $text-font;
    font-size: 18px;
    line-height: 133%;
    color: $main-dark-color;
  }
</style>
