<template>
  <q-footer class="bg-white footer">
    <q-toolbar class="container row no-wrap q-py-md">
      <q-space />

      <q-btn
        push
        color="grey-4"
        text-color="primary"
        label="Назад"
        size="16px"
        no-caps
        class="q-mr-md"
        :disable="disableBack"
        @click="$emit('back')"
      />

      <q-btn
        push
        color="accent"
        text-color="primary"
        label="Дальше"
        size="16px"
        no-caps
        :disable="!quizStore.isProceedAvailable.value"
        @click="$emit('proceed')"
      />
    </q-toolbar>
  </q-footer>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useQuizStore } from "stores/quiz-store";

defineEmits(["proceed", "back"]);

defineProps({
  disableBack: { type: Boolean },
});

const quizStore = storeToRefs(useQuizStore());
</script>

<style scoped lang="scss">
.footer {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
