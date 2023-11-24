<script setup lang="ts">
import { onMounted } from 'vue'
import { info } from '../scripts/stat-api'

onMounted(() => {
  info()
})
</script>

# 和风天气

<bl-img src="../imgs/home/weather.png" width="350px" :shadow="false"/>

首页的天气预报功能使用了和风天气的免费 API，如果你希望使用天气预报功能，那么你需要申请自己的和风天气开发账号。

在服务器中，需要你配置和风天气的 APP_KEY，详细内容可见设置#服务器配置

> 和风天气官方 API：https://dev.qweather.com/
>
> 和风天气 API 使用指引：https://dev.qweather.com/docs/start/

<iframe src="https://dev.qweather.com/docs/start/" width="100%" height="1000px" style="border: 1px solid #f1f1f1"></iframe>
