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
    <q-img :src="block?.data" :alt="block?.data" />
  </div>
</template>

<script setup>
defineProps({
  block: { type: Object, default: null },
});
</script>

<style scoped lang="scss">
::v-deep(.q-img) {
  border-radius: calc(0.8rem - 4px);
}
</style>
