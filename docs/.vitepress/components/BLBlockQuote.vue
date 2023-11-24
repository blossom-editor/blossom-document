<template>
  <blockquote :class="['bl-blockquote bl-blockquote-' + color]">
    <slot />
  </blockquote>
</template>

<script setup lang="ts">
const props = defineProps({
  color: {
    type: String,
    default: '100%'
  }
})
</script>

<style scoped>
/* 引用 */
.bl-blockquote {
  padding: 10px;
  margin: 10px 0;
  color: var(--bl-preview-blockquote-color);
  border-left: 3px solid var(--bl-preview-blockquote-border-color);
  border-radius: 4px;
  background-color: var(--bl-preview-blockquote-bg-color);
}

.bl-blockquote-green {
  background-color: var(--bl-preview-blockquote-bg-green);
  border-left: 3px solid var(--bl-preview-blockquote-border-green);
}

.bl-blockquote-yellow {
  background-color: var(--bl-preview-blockquote-bg-yellow);
  border-left: 3px solid var(--bl-preview-blockquote-border-yellow);
}

.bl-blockquote-red {
  background-color: var(--bl-preview-blockquote-bg-red);
  border-left: 3px solid var(--bl-preview-blockquote-border-red);
}

.bl-blockquote-blue {
  background-color: var(--bl-preview-blockquote-bg-blue);
  border-left: 3px solid var(--bl-preview-blockquote-border-blue);
}

.bl-blockquote-purple {
  background-color: var(--bl-preview-blockquote-bg-purple);
  border-left: 3px solid var(--bl-preview-blockquote-border-purple);
}

.bl-blockquote-black {
  background-color: var(--bl-preview-blockquote-bg-black);
  border-left: 3px solid var(--bl-preview-blockquote-border-black);
}
</style>
