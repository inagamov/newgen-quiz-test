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
    <audio controls>
      <source :src="block?.data" type="audio/mp3" />
    </audio>
  </div>
</template>

<script setup>
defineProps({
  block: { type: Object, default: null },
});
</script>
