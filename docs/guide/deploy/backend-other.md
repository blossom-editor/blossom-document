<script setup lang="ts">
import { onMounted } from 'vue'
import { info } from '../../scripts/stat-api'

onMounted(() => {
  info()
})
</script>


# 在 sealos 上一键部署

[![](https://raw.githubusercontent.com/labring-actions/templates/main/Deploy-on-Sealos.svg)](https://cloud.sealos.io/?openapp=system-template%3FtemplateName%3Dblossom)

# 其他部署教程

Blossom 依赖 `JDK8` + `MySql8`，你可以参考其他用户所写的文章：

:::tip 提示
其他用户所写的文章可能存在滞后性，请结合官方文档一起阅读。
:::

- 『文章』[威联通 QNAP TS-464C2 部署 Blossom 填坑指南](https://mp.weixin.qq.com/s/oWiP8hM-OcVXiGMLsJf6KQ)
- 『文章』[群晖创建 Blossom 教程](./backend-nas-qunhui) by 黑醋栗和丁香
- 『文章』[群晖 Blossom 部署教程](./backend-nas-qunhui1) by 强有力的实力丶
- 『文章』[最适合国人使用的笔记项目！用 NAS 私有部署 Blossom](https://post.smzdm.com/p/azopz2nr/)
- 『视频』[搭建超好用笔记软件——Blossom 通用后端（免费、开源，全平台）](https://www.bilibili.com/video/BV1fC4y1c7iQ/)
