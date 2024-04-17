<script setup lang="ts">
import { onMounted } from 'vue'
import { info } from '../scripts/stat-api'

onMounted(() => {
  info()
})
</script>

# 为什么使用 <span style="color:#779649;font-weight: bold;">Blossom</span>？

> Blossom：意为<span class="blossom-translate">**开花;绽放**</span>。
>
> 写作就像雨露和养料，最终会使作者的思想和知识开花、结果。

## Blossom 是什么？ {#what-is-blossom}

Blossom 是一个需要私有部署的笔记软件，虽然本身定位是一个云端软件，但你仍然可以在本地部署，数据和图片都将保存在你的设备，不依赖任何的图床或者对象存储。

<bl-img src="../imgs/home/device.png" :shadow="false"/>

- <span style="color:#779649;font-weight: bold;">客户端</span>：支持 Windows 端和 ARM 架构的 Mac 端，以及作为网页端部署。
- <span style="color:#EAB412;font-weight: bold;">移动端</span>：响应式网页移动端，主要为移动端设计，同时也作为博客供所有人访问。
- <span style="color:#307DEF;font-weight: bold;">服务端</span>：服务端支持在 Docker 中进行部署。

::: tip 提示
如果你想尝试一下，可以查看[试用](./tryuse)。
:::

## 为什么选择 Blossom？ {#why-is-blossom}

Blossom 作为一款开源软件，无意、也无法和市面上成熟的笔记软件相竞争。仅仅是提供了一个新的选择。

### 不一样的页面 {#special-page}

Blossom 并没有采用类似 Notion 那样的软件布局与页面设计，因为市面上类似界面的软件已经很多，如果你对这些软件有些审美疲劳，也许可以尝试一下。

### 完善的文件关系 {#references}

在你使用一些软件，尤其是公有云厂商的软件时，可能会有下方这些感到苦恼的场景：

1. 我有很多的图片，但我不知道这些图片是否在使用，想删却不敢删。
2. 一张图片被多篇文章使用，当图片需要更新时，每一篇文章都需要修改。
3. 我误删了某张图片，导致我的文章显示都出现了问题，图片找回困难重重。
4. 我究竟上传使用了哪些图片？我希望有个像相册一样的功能可以查看和管理他们。

如果你有这些困惑，也许你可以试试 Blossom，Blossom 提供了完善的**图片管理**，**访误删**，以及**图片和文章的双向关系绑定**。你可以轻松查看图片被哪些文章所使用，并一键替换他们。

<bl-img src="../imgs/pic/pic_reference.png" width="500px"/>

### 简单的迁移 {#easy-transfer}

所有图片均不依赖任何的三方图床和存储，只保存在部署的设备上；文章是编辑基于 [Markdown 基本语法](./markdown)，没有破坏性的语法拓展。

所有图片和文章都支持一键[备份和导出](./article#backup)，在你不想使用或者想要迁移笔记时，可以在几分钟内轻松转移，Blossom 不会绑架你的数据。导出的文件可以无缝使用 `VS Code` 或 `Obsidian` 等本地软件正常打开。

### 丰富的附加功能 {#multifunction}

- 📅 [计划安排](./plan)
- 🏷️ [待办事项](./todo)
- 🎫 [快捷便签](./note)
- 🍅 [番茄钟](./article#tomato)
- 🧰 多用户、字数统计、字数折线图、编辑热力图、天气预报、主题设置...

Blossom 拥有丰富的功能，不仅仅是知识管理，更是一个可以供多人同时使用的全面实用性工具。

### 博客 & 移动客户端 {#blog}

自带一个响应式[博客页面](./deploy/blog)，Blossom 有完善的文章上下线管理，PV/UV 访问统计，专题归类分组，可以帮你实现一个动态博客系统。

博客不仅仅是博客，在博客登录后，可以查看所有的计划安排，待办事项、便签，博客也是一个移动客户端。

### API

Blossom 还提供了后台访问接口 API 接口，如果你是开发者，也可以通过 API 来开发自己的博客。

<style scoped>
.blossom-translate {
  color:#779649;
  font-weight: bold;
  cursor: pointer;
  transition: color 0.3s;
}

.blossom-translate:hover {
  color:#DAB655;
  text-decoration: underline;
}
</style>
