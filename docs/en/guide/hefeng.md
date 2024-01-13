<script setup lang="ts">
import { onMounted } from 'vue'
import { info } from '../scripts/stat-api'

onMounted(() => {
  info()
})
</script>

# 🌦️ HeFeng Weather

<bl-img src="../imgs/weather/weather.png" width="400px" :shadow="false"/>

The weather forecast feature on the homepage uses the free API from HeFeng Weather. To use the weather forecast feature, you need to **apply for your own HeFeng Weather developer account**.

## Weather Configuration

After applying, you need to configure the HeFeng Weather `APP_KEY` through the client.

<bl-img src="../imgs/setting/hefeng_key.png" width="700px"/>

After adding, continue to configure your city. Go to find the city code: [China-City-List-latest.csv](https://github.com/qwd/LocationList/blob/master/China-City-List-latest.csv).

<bl-img src="../imgs/weather/location.png" width="700px"/>

In the search box marked in the image below, search for your city name. Click Save, then go to the homepage and click the refresh button in the upper right corner of the weather to see the updated information.

<bl-img src="../imgs/weather/query_location.png" width="700px"/>

## Weather Icons

Blossom has adapted icons for common weather conditions:

<div class="weather">
  <div class="item">
  <bl-img src="../imgs/weather/qing-s.png" width="40px" :shadow="false"/>
    <div class="name">Clear</div>
  </div>
  
  <div class="item">
  <bl-img src="../imgs/weather/qing-moon.png" width="40px" :shadow="false"/>
    <div class="name">Clear/Night</div>
  </div>

  <div class="item middle">
  <bl-img src="../imgs/weather/yin-s.png" width="40px" :shadow="false"/>
    <div class="name">Cloudy</div>
  </div>
  
  <div class="item">
  <bl-img src="../imgs/weather/yu-s.png" width="40px" :shadow="false"/>
    <div class="name">Rain</div>
  </div>

  <div class="item">
    <bl-img src="../imgs/weather/zhongyu-s.png" width="40px" :shadow="false"/>
    <div class="name">Heavy Rain</div>
  </div>

  <div class="item">
  <bl-img src="../imgs/weather/xue-s.png" width="40px" :shadow="false"/>
    <div class="name">Snow</div>
  </div>

  <div class="item">
  <bl-img src="../imgs/weather/feng-s.png" width="40px" :shadow="false"/>
    <div class="name">Wind</div>
  </div>

  <div class="item">
  <bl-img src="../imgs/weather/wu-s.png" width="40px" :shadow="false"/>
    <div class="name">Fog/Haze</div>
  </div>
</div>

> Icons use [Microsoft Fluentui Emoji](https://github.com/microsoft/fluentui-emoji)

## Third-Party Documents

> HeFeng Weather Official API: https://dev.qweather.com/
>
> HeFeng Weather API Usage Guide: https://dev.qweather.com/docs/start/
>
> Location documents for all regions in China: [China-City-List-latest.csv](https://github.com/qwd/LocationList/blob/master/China-City-List-latest.csv)

Below is the HeFeng Weather official website, where you can apply for the API key.

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
