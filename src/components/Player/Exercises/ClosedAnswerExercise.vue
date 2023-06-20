<template>
  <div>
    <div class="row q-gutter-lg">
      <div
        v-for="(answer, answerIndex) in exercise"
        :key="answerIndex"
        class="answer_card column no-wrap justify-center"
        :class="
          quizStore.showResults.value
            ? answer?.isUserAnswer && answer.isCorrect
              ? 'answer_card--correct'
              : answer?.isUserAnswer && !answer.isCorrect
              ? 'answer_card--incorrect'
              : ''
            : answer?.isUserAnswer
            ? 'answer_card--selected'
            : ''
        "
        @click="
          !quizStore.showResults.value ? handleAnswerSelection(answer) : ''
        "
      >
        <BlocksComponent :blocks="answer.label" />
      </div>
    </div>
  </div>
</template>

<script setup>
import BlocksComponent from "components/Player/Blocks/BlocksComponent.vue";
import { storeToRefs } from "pinia";
import { useQuizStore } from "stores/quiz-store";
import { computed } from "vue";

const quizStore = storeToRefs(useQuizStore());

const props = defineProps({
  exerciseIndex: { type: Number },
});

const exercise = computed(() => {
  return quizStore.data.value?.screens[quizStore.activeScreenIndex.value]
    ?.exercises?.[props.exerciseIndex]?.attributes?.answers;
});

/*
 * select answer
 */
const handleAnswerSelection = (answer) => {
  if (answer.isUserAnswer) {
    answer.isUserAnswer = false;
    quizStore.isProceedAvailable.value = isValid();
    return;
  }

  if (
    (!props.exercise?.parameters?.isMultipleChoice &&
      !exercise.value?.attributes?.answers?.filter((item) => item?.isUserAnswer)
        ?.length) ||
    (props.exercise?.parameters?.isMultipleChoice &&
      (!props.exercise?.parameters?.answersLimits?.min ||
        exercise.value?.attributes?.answers?.filter(
          (item) => item?.isUserAnswer
        )?.length >= props.exercise?.parameters?.answersLimits?.min) &&
      (!props.exercise?.parameters?.answersLimits?.max ||
        exercise.value?.attributes?.answers?.filter(
          (item) => item?.isUserAnswer
        )?.length < props.exercise?.parameters?.answersLimits?.max))
  ) {
    answer.isUserAnswer = true;
  } else {
    exercise.value.attributes.answers.find(
      (item) => item?.isUserAnswer
    ).isUserAnswer = false;
    answer.isUserAnswer = true;
  }

  quizStore.isProceedAvailable.value = isValid();
};

const isValid = () => {
  return !!exercise.value?.find((item) => item?.isUserAnswer);
};
</script>

<style scoped lang="scss">
.answer_card {
  border-radius: 0.8rem;
  border: 1.5px solid $secondary;
  padding: 16px;
  width: calc(50% - 24px);
  cursor: pointer;
  transition: 0.1s;
}

.answer_card:active {
  transform: scale(0.975);
}

.answer_card--selected {
  border: 1.5px solid $primary;
}
.answer_card--correct {
  border: 1.5px solid $positive;
}
.answer_card--incorrect {
  border: 1.5px solid $negative;
}
</style>
