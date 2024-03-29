<script setup lang="ts">
import { onMounted } from 'vue'
import { info } from '../scripts/stat-api'

onMounted(() => {
  info()
})
</script>

# 和风天气

<bl-img src="../imgs/weather/weather.png" width="400px" :shadow="false"/>

首页的天气预报功能使用了和风天气的免费 API，如果需要使用天气预报功能，那么需要**申请自己的和风天气开发账号**。

## 天气配置

申请完成后，需要通过客户端配置和风天气的 `APP_KEY`。

<bl-img src="../imgs/setting/hefeng_key.png" width="700px"/>

添加完成后，继续配置你所在的城市，前往查找城市代码：[China-City-List-latest.csv](https://github.com/qwd/LocationList/blob/master/China-City-List-latest.csv)。

<bl-img src="../imgs/weather/location.png" width="700px"/>

在下图标注的搜索框中搜索你的城市名称。点击保存后，进入首页，点击天气右上角的刷新按钮即可。

<bl-img src="../imgs/weather/query_location.png" width="700px"/>

## 天气图标

Blossom 为常见天气适配了图标：

<div class="weather">
  <div class="item">
  <bl-img src="../imgs/weather/qing-s.png" width="40px" :shadow="false"/>
    <div class="name">晴</div>
  </div>
  
  
  <div class="item">
  <bl-img src="../imgs/weather/qing-moon.png" width="40px" :shadow="false"/>
    <div class="name">晴/夜间</div>
  </div>

  <div class="item middle">
  <bl-img src="../imgs/weather/yin-s.png" width="40px" :shadow="false"/>
    <div class="name">阴</div>
  </div>
  
  <div class="item">
  <bl-img src="../imgs/weather/yu-s.png" width="40px" :shadow="false"/>
    <div class="name">雨</div>
  </div>

  <div class="item">
    <bl-img src="../imgs/weather/zhongyu-s.png" width="40px" :shadow="false"/>
    <div class="name">大雨</div>
  </div>

  <div class="item">
  <bl-img src="../imgs/weather/xue-s.png" width="40px" :shadow="false"/>
    <div class="name">雪</div>
  </div>

  <div class="item">
  <bl-img src="../imgs/weather/feng-s.png" width="40px" :shadow="false"/>
    <div class="name">风</div>
  </div>

  <div class="item">
  <bl-img src="../imgs/weather/wu-s.png" width="40px" :shadow="false"/>
    <div class="name">雾/霾</div>
  </div>
</div>

> 图标使用 [Microsoft Fluentui Emoji](https://github.com/microsoft/fluentui-emoji)

## 三方文档

> 和风天气官方 API：https://dev.qweather.com/
>
> 和风天气 API 使用指引：https://dev.qweather.com/docs/start/
>
> 全国所有地区的位置文档：[China-City-List-latest.csv](https://github.com/qwd/LocationList/blob/master/China-City-List-latest.csv)

下方为和风天气官网，你可以前往申请 Key。

<iframe src="https://dev.qweather.com/docs/start/" width="100%" height="1000px" style="border: 1px solid #f1f1f1"></iframe>

<style scoped>

.weather {
  display:flex;flex-direction: row;justify-content: space-between;overflow:scroll;
  padding: 16px 16px 10px 16px;
}

.weather .item {
  max-width:31%;
}

.weather .middle {
  margin-left:10px;
  margin-right:10px;
}

.weather .item .name {
  width: 100%;
  font-size: 13px;
  color: #9E9E9E;
  text-align: center;
}
</style>
