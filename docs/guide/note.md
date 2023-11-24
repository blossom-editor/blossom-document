<script setup lang="ts">
import { onMounted } from 'vue'
import { info } from '../scripts/stat-api'

onMounted(() => {
  info()
})
</script>

# 🎫 便签

<br/>
<bl-theme-img light-img="../imgs/note/note_light.png" dark-img="../imgs/note/note_dark.png"/>

## 移动端便签样式 {#m}

<div style="display:flex;flex-direction: row;justify-content: center;">
<div style="width:50%;"><bl-img src="../imgs/note/note_m.png" width="300px" /></div>
<div style="width:50%;"><bl-img src="../imgs/note/note_m_upd.png" width="300px" /></div>
</div>

## 便签内容 {#content}

<bl-img src="../imgs/note/note_card.png" width="250px" :shadow="false"  />

便签顶部的 3 个图标的功能分别为：

- 左键将便签内容设置到编辑器的临时内容中，右键复制便签内容。
- 删除便签。
- 置顶便签或取消置顶便签。

双击便签的内容可以进行编辑。
