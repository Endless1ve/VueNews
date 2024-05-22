<script setup>
  const $props = defineProps({
    item: {
      type: Object,
      required: true,
    },
  });

  console.log($props.item);
</script>

<template>
  <article class="popularItem">
    <a :href="$props.item.url" target="_blank" class="itemLink">
      <h5 class="itemTitle">
        {{ $props.item.title }}
      </h5>
      <p class="itemAuthor">{{ $props.item.source.name }}</p>
    </a>
  </article>
</template>

<style lang="scss" scoped>
  .popularItem {
    @include flex-row;

    @media (hover: hover) {
      &:hover {
        .itemTitle,
        .itemAuthor {
          text-decoration: underline dashed $second-dark-color;
        }
      }
    }
  }

  .itemLink {
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    width: 100%;
    @include flex-row;

    @media screen and (max-width: 475px) {
      align-items: start;
      @include flex-column;
    }
  }

  .itemTitle {
    color: $main-dark-color;
    font-family: $title-font;
    font-size: clamp(0.875rem, 0.0155rem + 1.7884vw, 1.625rem);
    line-height: 115%;
    font-weight: 400;

    @media screen and (max-width: 768px) {
      font-size: clamp(1rem, 0.7321rem + 1.3393vw, 1.375rem);
    }
  }

  .itemAuthor {
    color: $second-ligth-color;
    font-family: $text-font;
    font-weight: 700;
    font-size: clamp(0.625rem, 0.1952rem + 0.8942vw, 1rem);
    line-height: 125%;
    letter-spacing: 0.03em;
    text-align: center;
    text-transform: uppercase;

    @media screen and (max-width: 768px) {
      font-size: clamp(0.75rem, 0.5714rem + 0.8929vw, 1rem);
    }
  }
</style>
