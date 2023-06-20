<template>
  <div>
    <q-input
      v-model="userAnswer"
      :label="exercise?.attributes?.placeholder"
      outlined
      :autogrow="exercise?.parameters?.isTextarea"
      class="full-width"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";

const userAnswer = ref("");

defineProps({
  exercise: { type: Object, default: null },
});
</script>

<style scoped lang="scss">
::v-deep(.q-field__control) {
  border-radius: 0.8rem;
}
</style>
