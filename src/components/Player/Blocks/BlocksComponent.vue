<template>
  <div class="column no-wrap q-gutter-md">
    <div v-for="(block, blockIndex) in blocks" :key="blockIndex">
      <TextBlock
        v-if="block?.type === EXERCISE_ELEMENTS_TYPES.TEXT"
        :block="block"
      />

      <ImageBlock
        v-if="block?.type === EXERCISE_ELEMENTS_TYPES.IMAGE"
        :block="block"
      />

      <VideoBlock
        v-if="block?.type === EXERCISE_ELEMENTS_TYPES.YOUTUBE_VIDEO"
        :block="block"
      />

      <AudioBlock
        v-if="block?.type === EXERCISE_ELEMENTS_TYPES.AUDIO"
        :block="block"
      />
    </div>
  </div>
</template>

<script setup>
import EXERCISE_ELEMENTS_TYPES from "src/constants/EXERCISE_ELEMENTS_TYPES";
import TextBlock from "components/Player/Blocks/TextBlock.vue";
import ImageBlock from "components/Player/Blocks/ImageBlock.vue";
import VideoBlock from "components/Player/Blocks/YoutubeVideoBlock.vue";
import AudioBlock from "components/Player/Blocks/AudioBlock.vue";

defineProps({
  blocks: { type: Array, default: null },
});
</script>
