<script setup lang="ts">
import { onMounted } from 'vue'
import { info } from '../scripts/stat-api'

onMounted(() => {
  info()
})
</script>

# 📃 文章编辑

<br/>
<bl-theme-img light-img="../imgs/article/article_light.png" dark-img="../imgs/article/article_dark.png"/>

文章编辑是 Blossom 的核心功能，主要依赖于 [Codemirror6](https://github.com/codemirror/dev) 和 [Markedjs](https://github.com/markedjs/marked)。

> 目前文章编辑器为双屏预览的方式，所见即所得正在开发中(基于 [Prosemirror](https://github.com/ProseMirror/prosemirror))。

## 移动端样式 {#m}

<div style="display:flex;flex-direction: row;justify-content: flex-start;overflow-x:scroll;padding: 20px;">
<div style="min-width:50%;margin-right:10px;"><bl-img src="../imgs/article/m.png" width="300px" /></div>
<div style="min-width:50%;margin-right:10px;"><bl-img src="../imgs/article/m_menu.png" width="300px" /></div>
<div style="min-width:50%;"><bl-img src="../imgs/article/m_toc.png" width="300px" /></div>
</div>

## 文档操作台 {#workbench}

<bl-img src="../imgs/article/workbench_1.png" width="200px"/>
<bl-img src="../imgs/article/workbench_2.png" width="200px" style="margin-top: 10px"/>

操作台位于页面左上角，分为两页，第一页从左向右分别为：

1.  显示文章的排序。
2.  只显示专题文章。
3.  刷新文章列表。
4.  查看知识网络。
5.  只显示公开文章。
6.  只显示收藏文章。
7.  添加文档。

第二页为

1. 文章回收站。
2. 查看服务器文章备份记录。

其中添加[添加文档](./article#folder-article)与[查看知识网络](./article#references)将在下文中详细说明。

## 文档菜单 {#tree-menu}

<br/>
<bl-img src="../imgs/article/tree_menu.png" width="200px"/>

档菜单是由「文件夹」与「文章」构成的树状菜单，可以使用快捷键 `Alt/Cmd + 1` 来切换显示/隐藏。该快捷键与 Jetbrains 系列的产品相同，暂不支持修改。

## 文档标题 {#tree-menu-title}

<br/>
<bl-img src="../imgs/article/tree_menu_subject.png" width="200px"/>

文件夹作为专题时会有特殊的样式，如上图所示。

左下角的绿色标签代表该文件夹是公开的状态，而专题标签会附带一个图标，其他标签则只显示文字。

:::warning 注意
文件夹公开并不会使下属的文章全部公开，文章仍然需要依次手动公开。
:::

---

<bl-img src="../imgs/article/article_sync1.png" width="230px"/>

普通文章的标题前会有 3 种竖线，如上图所示。分别为：

- <span style="color:#B72929;font-weight: bold;">红色</span>：该文章版本与公开版本有差异，可以点击右键同步，或在文章详细信息中同步。
- <span style="color:#779649;font-weight: bold;">绿色</span>：该文章是一个公开文章。
- <span style="color:#E3A300;font-weight: bold;">黄色</span>：该文章已被收藏。

---

## 文档右键菜单 {#tree-menu-right-menu}

<bl-img src="../imgs/article/right_menu.png" width="198px"/>

右键点击文章或文件夹会弹出菜单：

- 复制双链引用：复制文章的[内部引用链接](./article#references)。
- 导出文章：
  - 将文章导出为 Markdown 格式。
  - 将文章导出为 Markdown 格式，文章路径会修改为本地文件路径，相关图片会一起导出。
  - 将文章导出为 Html 格式。
  - 将文章导出为 Html 格式，文章路径会修改为本地文件路径，相关图片会一起导出。
- 复制链接：
  - 复制博客链接：如果是公开文章，则可以复制文章的公网访问链接。
  - 复制临时访问链接：复制临时链接。
- 博客中查看：如果是公开文章，则可在博客中查看，前提是你需要[部署博客](./deploy/blog)。
- 博客二维码：打开一个二维码弹窗，可以使用移动端扫码访问文章，必须是公开文章才能生成二维码。

<bl-img src="../imgs/article/qrcode.png" width="330px"/>

## 文章和文件夹的基本信息 {#folder-article}

在文档中右键编辑，或点击操作台的新增按钮会进入详情页面。

<bl-img src="../imgs/article/article_infos.png" width="250px"/>

上图为文章或文件夹的基本信息，其中右侧显式的四项内容为：

- 版本：文章每次保存版本号都会增加。
- 字数：文章的字数统计，只会统计中英文。
- PV：公开文章被访问的次数
- UV：公开文章每个 IP 访问的次数

## 如何将文章公开？ {#article-open}

可以右键点击文章，选择【更多】=>【公开】

<bl-img src="../imgs/article/article_sync.png" width="230px"/>

也可以右键选择【编辑详情】，然后点击上图中的按钮，分别为：

- 公开文章：公开的文章可以让任何人通过[博客](./deploy/blog)在公网进行访问。
- 取消公开：取消文章的公网访问权限。
- 同步文章：文章在编辑后会作为草稿，只允许通过客户端访问，如果要在博客中查看最新内容，需要通过该操作进行同步。当文章需要同步时，鼠标移动到同步按钮上会提示相差版本号。
- 收藏文章：收藏的文章会在首页显示，也可以在收藏列表中查询。

在文档列表中，如果文档名称前包含一个红色竖线，同样代表该文章的公开版本与编辑版本存在差异，如下图所示。

<bl-img src="../imgs/article/article_sync1.png" width="230px"/>

## 如何创建专题和目录？ {#create-subject}

可以右键点击文件夹，选择【更多】=>【设为专题】

可以右键点击文章，选择【更多】=>【设为专题目录】

也可以为文章添加`subject`标签设为专题。以及添加`toc`标签设为目录。

## 如何设置文件上传物理路径？{#store-path}

<bl-img src="../imgs/article/article_store_path.png" width="600px"/>

在编辑详情中，可以设置该文件夹下的文章在上传文件时，文件最终会保存的物理路径。仅文件夹可以设置上传路径，文章无法指定上传路径。

:::danger 注意：

1. 如果一个文件夹下已经上传过图片，那么修改文件夹路径并不会变更之前上传的图片位置。图片仍然在原路径中。所以通常在上传过图片后就不建议修改该值了。
2. 你可能会觉得管理图片路径会十分麻烦，那么你也可以不修改该值，这样图片会全部上传到服务器指定的图片根目录下。只需要注意图片不要重名即可。
3. 作者并不建议在文章路径中包含 Emoji，中文，特殊字符，如果你需要使用，请务必做好测试。
   :::

## 如何创建双链引用？ {#references}

<bl-img src="../imgs/article/references.png" width="700px"/>

文章引用网络是文章的核心功能，主要是通过解析 Markdown 链接的方式构建的。

在文章中，所有的链接引用分为<span style="color:#779649;font-weight: bold;">内部引用</span>和<span style="color:#E3A300;font-weight: bold;">外部引用</span>，<span style="color:#779649;font-weight: bold;">内部引用</span>即为在本应用中创建的文章，<span style="color:#E3A300;font-weight: bold;">外部引用</span>则是其他引用链接。这些链接之间构成了一个知识网络，你可以在网络中快速查看你的文章结构，或者跳转至对应的文章。

要想区分内部引用和外部引用，需要在填写链接时遵照不同的 Markdown 格式。

```shell
# 外部引用
[链接的名称](http://www.domain.com '链接的标题')

# 内部引用, 在标题后增加了一个ID
[链接的名称](http://www.domain.com '链接的标题##内部文章的ID##')
```

为了更加简便的创建引用， 我们提供了一个创建引用的快捷方式，如下图：

<bl-img src="../imgs/article/references_copy.png" width="200px"/>

当在预览页面中点击内部引用链接时，会打开一个临时窗口来查看该文章。而点击外部引用链接时，会通过默认浏览器打开该链接。

::: danger 警告
在创建内部引用链接时，不要将两个不同的链接设置为相同的名称，否则引用网络将会构建失败, 下方是一个错误示例：

```shell
# 内部引用 123
[百度](http://www.domain123.com '##123##')

# 内部引用 ABC
[百度](http://www.domainABC.com '##ABC##')
```

:::

:::warning 注意
如果文章没有引用任何链接或被任何链接引用(即孤岛文章)，则不会出现在引用网络中(这主要出于网络构建速度的考虑)。如果希望一篇文章以一个孤岛的形式出现在知识网络中，一个解决方法是自己引用自己。
:::

::: tip 提示
尽量为链接创建简短的名称，过长的名称由于会影响整个网络的展示，超长的部分会被隐藏。
:::

## 文章临时访问 {#temp-visit}

文章临时访问是一个简易的网页端访问方式，可以用于分享非公开的文章供他人通过网页访问。临时访问仅能通过客户端生成的链接访问，每个链接的有效期为 3 个小时。

链接可以有右键点击文章生成。

## 临时内容 {#linshi}

<bl-img src="../imgs/article/linshi.png" width="250px" :shadow="false"/>

左下角为临时内容，临时内容可以保存需要频繁复制黏贴的内容，例如你可以保存一些常用在文章中的表情或者标签，如：`①②③④⑤🟢🟡🟠`。并且临时内容可以与便签联动，操作方式可见[便签](./note#content)。

你可以点击标签的右上角来最小化临时内容页面。

## 工具栏 {#tools}

<bl-img src="../imgs/article/tool.png" width="700px"/>

工具栏与大多数编辑器一样，是一些变更格式的操作按钮，目前暂不支持修改快捷键 🌟。

可以使用 `Shift + Alt/Cmd + F` 来格式化 Markdown 文档。

## 番茄钟 {#tomato}

工具栏中包含一个番茄时钟的功能，如下图：

<bl-img src="../imgs/article/tomato.png" width="250px" :shadow="false"/>

当点击开始后，工具栏会增加一个逐渐缩短的背景色，用于提醒番茄钟的剩余时长。

<bl-img src="../imgs/article/tomato.gif" width="700px"/>

## 浮动目录 {#toc}

<bl-img src="../imgs/article/toc.jpg" width="300px" :shadow="false"/>

文章的浮动目录，可以使用快捷键 `Alt/Cmd + 2` 来切换显示/隐藏。也可以拖拽移动位置。

目录下方是文章使用的图片，点击可以放大，方便查看你的图片是否失效，以及图片是否正确。

## 状态栏 {#status}

<bl-img src="../imgs/article/status.png" width="700px" />

底部状态栏会显示一些基础的文章信息。

右侧编辑记录可以查看编辑历史记录，引用网络可以查看与当前编辑文章相关的的知识网络。

## 笔记备份 {#backup}

笔记会每日进行备份，并压缩为 zip 文件保存在你配置的路径下。你可以在操作台的第二页找到查看备份文件的按钮。

<bl-img src="../imgs/article/workbench_2.png" width="200px" style="margin-top: 10px"/>

笔记备份有多种格式

1. 备份 Markdown：将所有文章以 Markdown 格式备份
2. 备份本地 Markdown：将所有文章以本地 Markdown 格式备份，并同时备份所有图片。
3. 备份 Html：将所有文章以 Html 格式备份
4. 备份本地 Html：将所有文章以本地 Html 格式备份，并同时备份所有图片。

:::tip 提示
本地格式即所有图片的网络链接都会修改为本地图片路径，这样文章可以在无网情况下查看，也可以直接在如 VS Code，typora 等本地编辑器中打开。
:::

<bl-img src="../imgs/article/backup.png" width="700px" />

点击对应文件后的下载按钮可以下载备份压缩包，压缩包中会包含一个 log.txt 文件，记录了本次备份的信息，如下图:

<bl-img src="../imgs/article/backup_log.png" width="700px" />
