<script setup lang="ts">
import { onMounted } from 'vue'
import { info } from '../scripts/stat-api'

onMounted(() => {
  info()
})
</script>

# 🏖️ 照片墙

<br/>
<bl-theme-img light-img="../imgs/pic/pic_light.png" dark-img="../imgs/pic/pic_dark.png"/>

照片的存储一直是编写笔记的一个痛点，三方图床可能收费，可能有容量限制，可能面临审核；免费的图床又随时可能失效。并且图片分布在各个文档中，也不好管理分类，若是有迁移的需求，图片通常是最令人头疼的问题。

**所以 Blossom 提供了一个图床功能**，这样可以省去使用三方图床，或购买对象存储的成本。你也不需要在服务器安装任何文件存储应用，图片仅仅是简单的保存在你的服务器磁盘，你可以一键下载所有的图片。在未来还将会提供文件限流，防盗链，临时访问权限等功能，用于更好的保护你的资源。

:::warning 注意
尽管照片墙的上传格式并不限于图片，但照片墙并不是一个网盘。数据上传没有实现分片上传，如果上传了超大的文件可能会占满带宽和服务器内存，所以文件上传大小请自己衡量。但为了防止误传超大文件，文件上传大小被限制在了 50MB。
:::

## 图片批量上传 {#upload-batch}

<bl-img src="../imgs/pic/upload_batch.png" width="250px"/>

在文档列表的底部是批量上传入库，图片可以批量上传至当前选中的文件夹中。

## 操作栏 {#workbench}

<bl-img src="../imgs/pic/workbench.png" width="700px" :shadow="false"/>

从左至右依次为：

1. 只显式收藏的图片。
2. 图片卡片的大小。
3. 图片重复上传，默认重名的图片无法重复上传，开启该项可关闭该控制。
4. 重复上传后，用来刷新缓存显示最新图片。
5. 打开下方的批量管理工具栏。


## 图片卡片 {#detail}

<bl-img src="../imgs/pic/detail.png" width="340px" :shadow="false"/>

图片底部为图片的操作按钮，从左至右依次为：

1. 图片的主要信息。
2. 左键点击复制图片地址，右键点击复制 Markdown 格式的图片地址。
3. 下载图片。
4. 收藏图片。
5. 删除图片。

图片下方为图片的主要信息，其中最后一项「引用文章」会列出所有使用了该图片的文章。

**为了防止勿删，当图片被某个文章引用时，该图片是无法删除的**，你需要先从文章中删除引用，才能删除该图片。**你也可以在[全屏预览](./picture#viewer)的左下角选择强制删除，系统将忽略图片引用校验[强制删除](./picture#viewer-del-force)。**

防勿删只会在文章操作中检查，并不会检查公开文章，如果公开的文章版本中引用了图片，但草稿中没有引用，那么图片是可以被删除的。并且删除图片后，公开文章的图片访问将出错。

## 左侧菜单栏上传图片 {#aside-upload}

<div style="display:flex;justify-content: flex-start;">
  <div style="min-width:100px" >
    <bl-img src="../imgs/home/file_upload.png" width="60px" />
  </div>
  <div>
  在软件的左下角，蓝色框为左侧菜单里的图片上传功能，在该处上传的文件由于无法选择文件夹，会上传至照片墙的《🌌 默认文件夹》中。

《🌌 默认文件夹》是系统提供的，该文件夹无法删除，如果你未曾创建过任何文件夹，并且文章的文件夹也没有指定路径，那么所有的图片都存放在该文件夹下。

  </div>
</div>

## 使用截图上传图片 {#screenshot-upload}

<div style="display:flex;justify-content: flex-start;margin-bottom:40px;">
  <div style="min-width:100px" >
    <bl-img src="../imgs/pic/screenshot.png" width="60px" />
  </div>
  <div>红色框为打开截图功能的，点击后会打开一个截图管理页面。如下图</div>
</div>

<bl-img src="../imgs/pic/screenshot_dialog.png" width="300px"/>

上方文截图页面，在这里你可以选择截图要上传的文件夹，截图的名称，以及上传后粘贴为哪种格式的文本。

蓝色框为上传后粘贴为哪种格式：

- `HT`: 粘贴为 http 链接。
- `MD`: 粘贴为 Markdown 格式的链接。

如果不指定图片的名称，会自动生成一个图片名称。

你可以使用快捷键 `Ctrl + Alt + Q` 进行截图，截图后会自动唤起该页面。

:::tip 提示
如果你希望粘贴成图片，而不是任何文本格式的链接，可以在上传前粘贴。只要点击上传后，就无法粘贴成图片了。
:::

:::warning 注意
只有 Windows 系统提供截图功能。
:::

## 在编辑器中上传图片 {#editor-upload}

在编辑器中，可以黏贴上传，拖拽上传，也可以右键点击编辑部分打开菜单，选择插入图片选项进行上传，图片会上传至文章所在的文件夹下。

<bl-img src="../imgs/article/right_menu2.png" width="200px" :shadow="false"/>

## 全屏预览 {#viewer}

点击图片可以全屏预览，在预览的左下角包含一些图片的基本信息和操作，如下图：

<bl-img src="../imgs/pic/pic_reference.png" width="600px"/>

图片信息与图片卡片中的信息相同，不同的是提供了一些快捷操作方式：

### 强制删除 {#viewer-del-force}

默认情况下，图片在被文章引用时是无法删除的，需要先从文章中删除图片引用后才可在照片墙功能中删除图片。

同时也提供了强制删除功能，会忽略图片引用校验。

### 替换图片 {#viewer-replace}

如果图片内容有更新，可以在该处替换上传，新上传的图片会沿用原图片的名称的存储地址，**并且原图片会被删除且无法找回**。
