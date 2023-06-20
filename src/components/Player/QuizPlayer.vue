<template>
  <div>
    <div
      v-for="(exercise, exerciseIndex) in data?.screens?.[activeScreenIndex]
        ?.exercises"
      :key="exerciseIndex"
      class="q-mb-xl"
    >
      <q-separator v-if="exerciseIndex !== 0" class="q-my-xl" />

      <!-- exercise task -->
      <BlocksComponent :blocks="exercise?.task" class="q-mb-lg" />

      <!-- closed answer exercise -->
      <ClosedAnswerExercise
        v-if="exercise?.type === EXERCISE_TYPES.CLOSED_ANSWER"
        :exercise-index="exerciseIndex"
      />

      <!-- open answer exercise -->
      <OpenAnswerExercise
        v-if="exercise?.type === EXERCISE_TYPES.OPEN_ANSWER"
        :exercise-index="exerciseIndex"
      />
    </div>
  </div>
</template>

<script setup>
import ClosedAnswerExercise from "components/Player/Exercises/ClosedAnswerExercise.vue";
import OpenAnswerExercise from "components/Player/Exercises/OpenAnswerExercise.vue";
import EXERCISE_TYPES from "src/constants/EXERCISE_TYPES";
import BlocksComponent from "components/Player/Blocks/BlocksComponent.vue";

defineProps({
  data: { type: Object, default: null },
  activeScreenIndex: { type: Number, default: null },
});
</script>
