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
        <p class="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cumque quo
          architecto, sint aspernatur, doloribus adipisci cum commodi incidunt
          tempore, tenetur ratione totam tempora eligendi autem! Voluptatum
          delectus dignissimos rerum.
        </p>
        <p class="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cumque quo
          architecto, sint aspernatur, doloribus adipisci cum commodi incidunt
          tempore, tenetur ratione totam tempora eligendi autem! Voluptatum
          delectus dignissimos rerum.
        </p>
        <p class="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex cumque quo
          architecto, sint aspernatur, doloribus adipisci cum commodi incidunt
          tempore, tenetur ratione totam tempora eligendi autem! Voluptatum
          delectus dignissimos rerum.
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
