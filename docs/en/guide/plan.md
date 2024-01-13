<script setup lang="ts">
import { onMounted } from 'vue'
import { info } from '../../scripts/stat-api'

onMounted(() => {
  info()
})
</script>

# 📅 Schedule

<br/>
<bl-theme-img light-img="../../imgs/plan/plan_light.png" dark-img="../imgs/plan/plan_dark.png"/>

A simple schedule, with daily routines on the left. You can add some repetitive activities that occur every day, such as work hours, daily exercise, family time, etc.

You can double-click on the title and content of the schedule to modify them.

## Mobile Style {#m}

<div style="display:flex;flex-direction: row;justify-content: center;">
<div style="width:50%;"><bl-img src="../../imgs/plan/plan_m.png" width="300px" /></div>
<div style="width:50%;"><bl-img src="../../imgs/plan/plan_m_add.png" width="300px" /></div>
</div>
