<template>
  <q-header>
    <q-toolbar class="container">
      <q-btn
        flat
        icon="icon-close"
        color="white"
        round
        class="q-mr-md"
        @click="$emit('exit')"
      />

      <!-- progress -->
      <div
        v-if="
          showProgress &&
          (testProgressPercentage || testProgressPercentage === 0)
        "
        class="progress"
      >
        <div class="progress__bar">
          <div
            class="progress__bar__active"
            :style="`width: ${testProgressPercentage}%;`"
          >
            <div class="progress__bar__active__glance"></div>
          </div>
        </div>
      </div>
    </q-toolbar>
  </q-header>
</template>

<script setup>
defineProps({
  showProgress: { type: Boolean },
  testProgressPercentage: { type: Number },
});

defineEmits(["exit"]);
</script>

<style scoped lang="scss">
/*
 * progress
 */
.progress {
  width: 100%;
  margin: auto 0;
}

.progress__bar {
  position: relative;
  height: 16px;
  background: rgba($accent, 0.2);
  border-radius: 8px;
}

.progress__bar__active {
  width: 100%;
  height: 16px;
  z-index: 1;
  border-radius: 8px;
  transition: 0.275s;
  animation-name: expand;
  position: relative;
  background: $accent;
}

.progress__bar__active__glance {
  width: calc(100% - 16px);
  height: 4px;
  border-radius: 2px;
  background: rgba(white, 0.2);
  position: absolute;
  left: 8px;
  top: 4px;
  animation-name: expand;
}
</style>
