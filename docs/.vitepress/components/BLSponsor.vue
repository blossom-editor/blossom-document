<script setup lang="ts">
// prettier-ignore
const sponsorsEspecially = [
  '支付宝匿名用户', '黑醋栗和丁香', 'Lucky'
]

// prettier-ignore
const sponsors = [
  'i just walked away🏃 * 2', 'KalyanYang', 'dsx', '熊猫不是猫',
  '白驹过隙', '支付宝用户-*发', '支付宝用户-*琛', '疾风剑豪索隆',
  '放羊的星星', '立冬', '给你一支烟', '林诗',
   'Criesgod', '支付宝用户-*伟', 'Mr_tg000', 'egil'
]
</script>

<template>
  <div class="sponsor-list-title">
    <p>感谢以下每一位赞助者，是你们让 Blossom 变得更好！</p>
  </div>

  <div class="sponsor-container">
    <div class="sponsor-list">
      <div class="especially">特别感谢</div>
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
