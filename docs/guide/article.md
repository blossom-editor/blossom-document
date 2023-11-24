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

文章编辑是 Blossom 的核心功能，主要依赖于 [Codemirror6](https://github.com/codemirror/dev) 和 [Markedjs](https://github.com/markedjs/marked)

目前文章编辑器为双屏预览的方式，所见即所得正在研究开发中。

## 移动端样式 {#m}

<div style="display:flex;flex-direction: row;justify-content: flex-start;overflow:scroll;padding: 20px;">
<div style="min-width:50%;margin-right:10px;"><bl-img src="../imgs/article/m.png" width="300px" /></div>
<div style="min-width:50%;margin-right:10px;"><bl-img src="../imgs/article/m_menu.png" width="300px" /></div>
<div style="min-width:50%;"><bl-img src="../imgs/article/m_toc.png" width="300px" /></div>
</div>

## 文档操作台 {#workbench}

<bl-img src="../imgs/article/workbench_1.png" width="200px"/>
<bl-img src="../imgs/article/workbench_2.png" width="200px" style="margin-top: 10px"/>

操作台分为两页，第一页从左向右分别为：

1.  显示文章的排序
2.  只显示专题文章
3.  刷新文章列表
4.  查看知识网络
5.  只显示公开文章
6.  只显示收藏文章
7.  添加文档

第二页为查看服务器文章备份记录。

其中添加[添加文档]()与[查看知识网络]()将在下文中详细说明。

## 文档菜单 {#tree-menu}

<br/>
<bl-img src="../imgs/article/tree_menu.png" width="200px"/>

档菜单是由「文件夹」与「文章」构成的树状菜单，可以使用快捷键`ALT + 1`来切换显示/隐藏。该快捷键与 Jetbrains 系列的产品相同，暂不支持修改。

MacOS 使用快捷键 `CMD + 1`

### 文档标题 {#tree-menu-title}

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

### 文档右键菜单 {#tree-menu-right-menu}

<bl-img src="../imgs/article/right_menu.png" width="330px"/>

右键点击文章或文件夹会弹出菜单：

1. 编辑文档。
2. 同步文档。
3. 新增同级文档。
4. 新增子级文档：目前只允许文件夹有子文档，文章不允许创建子文章。
5. 删除文档。
6. 复制引用：复制文章的内部引用链接。
7. 新窗口打开：打开一个只读的 Blossom 窗口查看文章信息。
8. 浏览器打开：如果是公开文章，则可在浏览器中查看，前提是你需要部署对应博客网站。
9. 导出文章：
   - 将文章导出为 Markdown 格式。
   - 将文章导出为 Markdown 格式，文章路径会修改为本地文件路径，相关图片会一起导出。
   - 将文章导出为 Html 格式。
   - 将文章导出为 Html 格式，文章路径会修改为本地文件路径，相关图片会一起导出。
10. 复制链接：如果是公开文章，则可以复制文章的公网访问链接。
11. 查看二维码：打开一个二维码弹窗，可以使用移动端扫码访问文章，必须是公开文章才能生成二维码。

<bl-img src="../imgs/article/qrcode.png" width="330px"/>

## 文章和文件夹 {#folder&article}

<br/>
<bl-img src="../imgs/article/article_add.png" width="450px"/>

绿色部分为文章或文件夹的基本信息，其中右侧显式的四项内容为：

- 版本：文章每次保存版本号都会增加。
- 字数：文章的字数统计，只会统计中英文。
- PV：公开文章被访问的次数
- UV：公开文章每个 IP 访问的次数

---

红色部分为文章的操作功能，从左到右依次为：

- 公开文章：公开的文章可以通过[博客功能]()在公网进行访问。
- 取消公开：取消文章的公网访问权限。
- 同步文章：将公网访问的内容同步为最新编辑的内容。
- 收藏文章：收藏的文章会在首页显示，也可以在收藏列表中查询。

当文章需要同步时，鼠标移动到同步按钮上会提示相差版本号，如下图所示。

<bl-img src="../imgs/article/article_sync.png" width="230px"/>

在文档列表中，如果文档名称前包含一个红色竖线，同样代表该文章的公开版本与编辑版本存在差异，如下图所示。

<bl-img src="../imgs/article/article_sync1.png" width="230px"/>

在下方的标签中，你可以添加任意标签，但有两种标签具有特殊意义：

- subject: 代表该文件夹是一个专题，文件夹会以特殊的样式显示。
- toc：代表该文章是所在专题的目录，在首页的专题列表中点击某个专题时，会跳转到该目录文章，如果专题下没有 toc 标签的文章时，点击专题会无法跳转。

---

底部的黄色框为该文件夹下编写文章时，相关图片会上传到哪个路径。仅文件夹可以设置上传路径，文章无法指定上传路径。

:::warning 注意：
如果一个文件夹下已经上传过图片，那么修改文件夹路径并不会变更之前上传的图片位置。图片仍然在原路径中。所以通常在上传过图片后就不建议修改该值了。

当然，你可能会觉得管理图片路径会十分麻烦，那么你也可以不修改该值，这样图片会全部上传到服务器指定的图片根目录下。只需要注意图片不要重名即可。
:::

## 文章引用网络 {#references}

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

## 编辑器右键菜单 {#editor-right-menu}

<bl-img src="../imgs/article/right_menu2.png" width="200px" :shadow="false"/>

右键点击 Markdown 编辑部分会弹出菜单：

1. 复制选中内容
2. 在光标位置黏贴内容
3. 插入图片，会弹出选择图片页面
4. 格式化选中的表格
5. 打开在线 Katex 编辑器, 便于校验 katex 的正确性
6. 打开在线 Mermaid 编辑器, 便于校验 Mermaid 的正确性
7. 打开 Emoji 网站

## 临时内容 {#linshi}

<bl-img src="../imgs/article/linshi.png" width="250px" :shadow="false"/>

左下角为临时内容，临时内容可以保存需要频繁复制黏贴的内容，例如你可以保存一些常用在文章中的表情或者标签，如：①②。并且临时内容可以与便签联动，这部分可见[便签](./note)。

你可以点击标签的右上角来最小化临时内容页面。
