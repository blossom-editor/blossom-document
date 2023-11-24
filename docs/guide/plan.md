<script setup lang="ts">
import { onMounted } from 'vue'
import { info } from '../scripts/stat-api'

onMounted(() => {
  info()
})
</script>

# 📅 计划安排

<br/>
<bl-theme-img light-img="../imgs/plan/plan_light.png" dark-img="../imgs/plan/plan_dark.png"/>

一个简单的计划安排，左侧是每天都相同的日常安排，你可以在此处增加一些每日都进行的重复活动。例如几点上班、每日运动、陪伴家人等。

可以双击计划的标题和内容进行修改。

## 移动端样式 {#m}

<div style="display:flex;flex-direction: row;justify-content: center;">
<div style="width:50%;"><bl-img src="../imgs/plan/plan_m.png" width="300px" /></div>
<div style="width:50%;"><bl-img src="../imgs/plan/plan_m_add.png" width="300px" /></div>
</div>
