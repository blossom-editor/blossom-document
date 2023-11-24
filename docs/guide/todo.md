<script setup lang="ts">
import { onMounted } from 'vue'
import { info } from '../scripts/stat-api'

onMounted(() => {
  info()
})
</script>

# 🏷️ 待办事项

<br/>
<bl-theme-img light-img="../imgs/todo/todo_light.png" dark-img="../imgs/todo/todo_dark.png"/>

待办事项分为每日待办事项与阶段性待办事项

- 每日待办：默认按天进行分组。
- 阶段性待办：按项目，计划分组。

## 移动端样式 {#m}

<div style="display:flex;flex-direction: row;justify-content: center;">
<div style="width:50%;"><bl-img src="../imgs/todo/todo_m.png" width="300px" /></div>
<div style="width:50%;"><bl-img src="../imgs/todo/todo_m_upd.png" width="300px" /></div>
</div>

## 顶部占比统计与操作台 {#workbench}

<bl-img src="../imgs/todo/todo_workbench.png" width="700px"/>

顶部为个阶段任务的占比显示，下方为一些控制显示，分别为

1. 转移事项，可以事项转移到其他日期。
2. 根据任务的标签进行筛选，支持多标签筛选。
3. 显示任务卡片的相关时间：创建时间，开始时间，结束时间。
4. 导出任务，可以将任务导出为 Markdown 文档，可以轻松改写成一篇周报或月报。
5. 显示统计，打开或者关闭统计页面。

## 导出 {#export}

<bl-img src="../imgs/todo/export.png" width="700px"/>

点击导出按钮，可以将一段时间范围或者某个阶段性事项导出为 Markdown 文档，可以在上方选择是否导出时间以及进度，点击预览后会在下方显示导出内容，可以在此调整后点击下载 Markdown 进行导出。当然你也可以导出后进行编辑。

## 任务列表 {#tasks}

<bl-img src="../imgs/todo/tasks.png" width="700px"/>

任务可以在不同阶段之间相互拖动，每次变更都会修改任务开始时间或任务完成时间。

双击任务卡片的标题或者内容可以快速修改内容。

## 任务编辑 {#detail}

<bl-img src="../imgs/todo/detail.png" width="300px"/>

在任务详情中有更加详细的任务内容可以编辑，如任务卡片的颜色，任务卡片底部的进度条等等。

## 任务统计 {#stat}

<bl-img src="../imgs/todo/stat.png" width="300px"/>

右侧任务统计中包含全局所有任务的统计信息。
