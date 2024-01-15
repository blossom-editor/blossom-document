<script setup lang="ts">
import { ref,onMounted } from 'vue'

const sponsorsEspecially = ref([])
const sponsors = ref([])
onMounted(() => {
  fetch('https://www.wangyunf.com/bladmin/sponsor/list').then(resp => {
    resp.json().then((r) => {
      sponsorsEspecially.value = r.data.special
      sponsors.value = r.data.sponsors
    })
  })
})
</script>

<template>
  <div class="sponsor-list-title">
    <p>感谢以下每一位赞助者，是你们让 Blossom 变得更好！
      <br/>
      <div style="margin-top: 10px;font-size: 15px;">
      Thank you to each and every one of our sponsors who make Blossom even better. 
      </div>
    </p>
  </div>

  <div class="sponsor-container">
    <div class="sponsor-list">
      <div class="especially">
        特别感谢<br/>
        <div style="font-size: 15px;">Many thanks</div>
      </div>
      <div class="sponsor-item" v-for="name in sponsorsEspecially">{{ name }}</div>
    </div>
  </div>

  <div class="sponsor-container">
    <div class="sponsor-list">
      <div class="divider"></div>
      <div class="sponsor-item" v-for="name in sponsors">{{ name }}</div>
    </div>
  </div>
</template>

<style scoped>
.sponsor-list-title {
  width: 100%;
  text-align: center;
  font-size: 20px;
  height: 150px;
  color: var(--bl-preview-blockquote-color);
  font-weight: 300;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.sponsor-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.sponsor-list {
  width: 688px;
  max-width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  padding: 0 50px;

  .especially {
    width: 100%;
    text-align: center;
    font-weight: 300;
    padding-bottom: 10px;
    color: var(--bl-preview-blockquote-color);
  }

  .divider {
    border-top: 1px solid var(--vp-c-gutter);
    width: 100%;
    padding-top: 10px;
    margin-top: 10px;
  }
}

.sponsor-item {
  min-width: 50%;
  padding: 2px 10px;
  font-weight: 300;
}
</style>
