<script setup>
  import { getFormattedCardDate } from "@/shared/utils/date";
  import NewsImage from "./NewsImage.vue";

  const $props = defineProps({
    item: {
      type: Object,
    },
  });
</script>

<template>
  <article class="item" v-if="$props.item">
    <a class="itemLink" :href="$props.item.url" target="_blank">
      <NewsImage
        class="itemImage"
        :src="$props.item.urlToImage"
        :alt="$props.item.title" />
      <div class="itemTexts">
        <div class="textsContent">
          <p class="itemDate">
            {{ getFormattedCardDate($props.item.publishedAt) }}
          </p>
          <h4 class="itemTitle">{{ $props.item.title }}</h4>
          <p class="itemDescription">{{ $props.item.description }}</p>
        </div>
        <p class="itemAuthor">{{ $props.item.source.name }}</p>
      </div>
    </a>
  </article>
</template>

<style lang="scss" scoped>
  .item {
    display: flex;
    border-radius: 16px;
    background-color: $main-light-color;
  }

  .itemLink {
    display: flex;
    flex-direction: column;
  }

  .itemImage {
    width: 100%;
    border-radius: 16px 16px 0 0;
    vertical-align: middle;
    aspect-ratio: 2/1;
  }

  .itemTexts {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: space-between;
    padding: 16px;
  }

  .itemDate {
    margin-bottom: 16px;
    color: $second-ligth-color;
    font-family: $text-font;
    line-height: 133%;
  }

  .itemTitle {
    margin-bottom: 10px;
    font-family: $title-font;
    font-weight: 400;
    font-size: clamp(1.1875rem, 0.1106rem + 1.6827vw, 1.625rem);
    line-height: 118%;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .itemDescription {
    font-family: $text-font;
    font-size: clamp(0.875rem, 0.5673rem + 0.4808vw, 1rem);
    line-height: 137%;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .itemAuthor {
    margin-top: 5px;
    color: $second-ligth-color;
    font-family: $text-font;
    font-weight: 700;
    line-height: 125%;
    letter-spacing: 0.03em;
    text-transform: uppercase;
  }
</style>
