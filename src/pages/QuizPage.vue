<template>
  <div>
    <QuizHeader
      :show-progress="quizStore.data.value?.screens?.length > 1"
      :test-progress-percentage="
        (quizStore.activeScreenIndex.value * 100) /
        quizStore.data.value?.screens?.length
      "
      @exit="handleExit()"
    />

    <QuizPlayer
      :data="quizStore.data.value"
      :active-screen-index="quizStore.activeScreenIndex.value"
      class="container q-py-xl"
    />

    <QuizFooter
      @proceed="handleProceed()"
      @back="handleBack()"
      :disable-back="
        !quizStore.data.value?.screens?.[quizStore.activeScreenIndex.value - 1]
      "
    />
  </div>
</template>

<script setup>
import QuizHeader from "components/QuizHeader.vue";
import QuizFooter from "components/QuizFooter.vue";
import QuizPlayer from "components/Player/QuizPlayer.vue";
import mockData from "src/constants/data";
import { onBeforeMount, ref } from "vue";
import { storeToRefs } from "pinia";
import { useQuizStore } from "stores/quiz-store";

const quizStore = storeToRefs(useQuizStore());

/*
 * variables
 */
onBeforeMount(() => {
  quizStore.data.value = structuredClone(mockData);
});

/*
 * functions
 */
const handleExit = () => {
  window.location = "/";
};

const handleProceed = () => {
  if (quizStore.data.value?.screens?.[quizStore.activeScreenIndex.value + 1]) {
    if (!quizStore.showResults.value) {
      quizStore.showResults.value = true;
    } else {
      quizStore.showResults.value = false;
      quizStore.activeScreenIndex.value++;
    }
  } else {
    alert("You finished the test!");
    handleExit();
  }
};

const handleBack = () => {
  if (quizStore.data.value?.screens?.[quizStore.activeScreenIndex.value - 1]) {
    quizStore.activeScreenIndex.value--;
  }
};
</script>
