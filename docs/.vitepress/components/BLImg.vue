<template>
  <div class="bl-img">
    <img
      :src="src"
      :style="{
        width: props.width,
        height: props.height,
        boxShadow: props.shadow ? 'var(--bl-img-box-shadow)' : 'none',
        filter: props.dropShadow ? 'drop-shadow(var(--bl-img-drop-shadow))' : 'none'
      }"
      loading="lazy" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  width: {
    type: String,
    default: '100%'
  },
  height: {
    type: String,
    default: 'auto'
  },
  shadow: {
    type: Boolean,
    default: true
  },
  dropShadow: {
    type: Boolean,
    default: false
  },
  src: {
    type: String,
    required: true
  }
})
</script>

<style>
.bl-img {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.bl-img img {
  border-radius: 5px;
  max-width: 100%;
  margin: 0;
}
</style>
