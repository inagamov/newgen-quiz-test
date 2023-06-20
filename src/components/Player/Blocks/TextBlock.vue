<template>
  <div>
    <div :class="`text-${block?.align}`" v-html="block?.data"></div>
  </div>
</template>

<script setup>
defineProps({
  block: { type: Object, default: null },
});
</script>
