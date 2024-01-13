<script setup lang="ts">
import { onMounted } from 'vue'
import { info } from '../scripts/stat-api'

onMounted(() => {
  info()
})
</script>

# 🎫 Notes

<br/>
<bl-theme-img light-img="../imgs/note/note_light.png" dark-img="../imgs/note/note_dark.png"/>

## Mobile Note Style {#m}

<div style="display:flex;flex-direction: row;justify-content: center;">
<div style="width:50%;"><bl-img src="../imgs/note/note_m.png" width="300px" /></div>
<div style="width:50%;"><bl-img src="../imgs/note/note_m_upd.png" width="300px" /></div>
</div>

## Note Content {#content}

<bl-img src="../imgs/note/note_card.png" width="250px" :shadow="false"  />

The functionality of the three icons at the top of the note is as follows:

- Left-click to set the note content to the editor's temporary content, right-click to copy the note content.
- Delete the note.
- Pin or unpin the note.

Double-click on the note content to edit.
