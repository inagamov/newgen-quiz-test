import { defineStore, storeToRefs } from "pinia";

export const useQuizStore = defineStore("quiz", {
  state: () => ({
    data: null,
    activeScreenIndex: 0,
    isProceedAvailable: false,
    showResults: false,
  }),

  actions: {},
});
