<template>
  <div
    class="row"
    :class="
      block?.align === 'center'
        ? 'justify-center'
        : block?.align === 'right'
        ? 'justify-end'
        : 'justify-start'
    "
  >
    <div class="youtube_video__wrapper">
      <iframe
        class="youtube_video"
        width="560"
        height="315"
        :src="block?.data"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script setup>
defineProps({
  block: { type: Object, default: null },
});
</script>

<style scoped lang="scss">
.youtube_video__wrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
}
.youtube_video {
  border-radius: 0.8rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
