<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  name: String,
  isActive: Boolean,
  isLoading: {
    type: Boolean,
    default: () => false,
  },
  defaultBackground: {
    type: Boolean,
    default: () => true,
  },
  includeFontSize: {
    type: Boolean,
    default: () => true,
  },
});

const backgroundColour = computed(() => {
  if (!props.defaultBackground) {
    return "";
  }
  let classes = props.isActive ? "bg-gray-400 dark:bg-gray-400" : "bg-gray-700 dark:bg-gray-200";
  return (
    classes +
    " hover:bg-gray-600 dark:hover:bg-gray-300 disabled:bg-gray-500 dark:disabled:bg-gray-500 text-white dark:text-gray-700"
  );
});

const classes = computed(() => {
  return backgroundColour.value + " " + (props.includeFontSize ? "text-lg" : "");
});
</script>
<template>
  <button class="rounded-xl px-2" :class="classes">
    <div v-if="isLoading">Loading...</div>
    <slot v-else>{{ props.name }}</slot>
  </button>
</template>
