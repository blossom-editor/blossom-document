<template>
  <div class="bl-theme-img">
    <div class="imgs" :style="{ width: props.width }">
      <img v-show="active == 1" :src="lightImg" loading="lazy" />
      <img v-show="active == 2" :src="darkImg" loading="lazy" />
      <!-- <img v-show="active == 1" :src="limg" />
      <img v-show="active == 2" :srcset="dimg" /> -->
    </div>
    <div class="btns">
      <div class="btns-wrapper">
        <button class="btn light" @click="changeActive(1)">日间模式</button>
        <button class="btn dark" @click="changeActive(2)">夜间模式</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  width: {
    type: String,
    default: '100%'
  },
  lightImg: {
    type: String,
    required: true
  },
  darkImg: {
    type: String,
    required: true
  }
})

const active = ref(1)

const changeActive = (act: number) => {
  active.value = act
}
</script>

<style>
.bl-theme-img {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.bl-theme-img .imgs {
  max-width: 100%;
}

.bl-theme-img .imgs img {
  border-radius: 5px;
  box-shadow: var(--bl-img-box-shadow);
  margin: 0;
  object-fit: cover;
}

.bl-theme-img .btns {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  margin-top: 15px;
}

.bl-theme-img .btns .btns-wrapper {
  box-shadow: var(--bl-img-box-shadow);
  width: 140px;
  border-radius: 5px;
  overflow: hidden;
}

.bl-theme-img .btns .btns-wrapper .btn {
  width: 70px;
  line-height: 20px;
  border: 0;
  padding: 5px 8px;
  font-weight: 700;
  transition: 0.3s;
  cursor: pointer;
}

.bl-theme-img .btns .btns-wrapper .btn.light {
  background-color: var(--vp-c-indigo-3);
  color: #ffffff;
  &:hover {
    background-color: var(--vp-c-indigo-1);
  }
}

.bl-theme-img .btns .btns-wrapper .btn.dark {
  background-color: #ad9231;
  color: #ffffff;

  &:hover {
    background-color: #876f1a;
  }
}
</style>
