<script setup lang="ts">
import { onMounted } from 'vue'
import { info } from '../../scripts/stat-api'

onMounted(() => {
  info()
})
</script>

# 🏷️ To-Do List

<br/>
<bl-theme-img light-img="../../imgs/todo/todo_light.png" dark-img="../imgs/todo/todo_dark.png"/>

To-Do items are divided into daily to-dos and milestone to-dos.

- Daily To-Dos: Grouped by default on a daily basis.
- Milestone To-Dos: Grouped by project, planned.

## Mobile Style {#m}

<div style="display:flex;flex-direction: row;justify-content: center;">
<div style="width:50%;"><bl-img src="../../imgs/todo/todo_m.png" width="300px" /></div>
<div style="width:50%;"><bl-img src="../../imgs/todo/todo_m_upd.png" width="300px" /></div>
</div>

## Top Percentage Statistics and Dashboard {#workbench}

<bl-img src="../../imgs/todo/todo_workbench.png" width="700px"/>

At the top is the percentage display of tasks for each milestone, and below are some display controls, namely

1. Transfer items, allowing you to move items to other dates.
2. Filter based on task labels, supporting multi-label filtering.
3. Display relevant times for task cards: creation time, start time, end time.
4. Export tasks, allowing you to export tasks as Markdown documents, easily rewritten as a weekly or monthly report.
5. Display statistics, open or close the statistics page.

## Task Transfer {#transfer}

Clicking on Transfer Items will take you to the following interface, where you can select the tasks to transfer and when to transfer them.

<bl-img src="../../imgs/todo/transfer.png" width="600px"/>

## Export Tasks {#export}

<bl-img src="../../imgs/todo/export.png" width="700px"/>

Clicking Export Tasks allows you to export tasks for a certain time range or a specific milestone as a Markdown document. You can choose whether to export time and progress at the top. After clicking preview, the export content will be displayed below, and you can adjust it here before clicking download Markdown to export. Of course, you can also edit after exporting.

## Task List {#tasks}

<bl-img src="../../imgs/todo/tasks.png" width="700px"/>

Tasks can be dragged between different milestones, and each change will modify the task's start time or completion time.

Double-clicking on the title or content of a task card allows for quick content modification.

## Task Editing {#detail}

<bl-img src="../../imgs/todo/detail.png" width="300px"/>

In the task details, there is more detailed task content that can be edited, such as the color of the task card, the progress bar at the bottom of the task card, and so on.

## Task Statistics {#stat}

<bl-img src="../../imgs/todo/stat.png" width="300px"/>

The right-side task statistics include statistical information for all tasks globally.
