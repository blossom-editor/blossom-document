<script setup lang="ts">
import { onMounted } from 'vue'
import { info } from '../scripts/stat-api'

onMounted(() => {
  info()
})
</script>

# 首页 {#home}

## 不同窗口大小的样式 {#window}

首页在不同的窗口大小下会显示不同的内容。

### 最小窗口 {#window-s}

<br/>
<bl-theme-img light-img="../imgs/home/home_light_s.png" dark-img="../imgs/home/home_dark_s.png"/>

### 1080P 下的样式 {#window-m}

<br/>
<bl-theme-img light-img="../imgs/home/home_light.png" dark-img="../imgs/home/home_dark.png"/>

### 4K 下的样式 {#window-l}

<br/>
<bl-theme-img light-img="../imgs/home/home_light_4k.png" dark-img="../imgs/home/home_dark_4k.png"/>

## 问候语与装饰 {#greetings }

<bl-img src="../imgs/home/home_hello.png" width="350px" :shadow="false"/>

1. 一个简单的问候，会跟随时间进行变化。
2. 仅是装饰，笔记本电脑边的装饰物会根据时间发生变化。

## 天气与头像 {#weather }

<bl-img src="../imgs/weather/weather.png" width="400px" :shadow="false"/>
<bl-img src="../imgs/blossom/luban.png" width="150px" />

1. 天气预报功能，使用的是[和风天气](https://www.qweather.com/)的免费 API，具体说明可见[和风天气](./hefeng)。
2. 当前登录用户的头像。

## 字数统计 {#stat-word}

<bl-img src="../imgs/home/stat_word.png" width="700px" />

这是一个按月统计文章总字数的折线图，统计数每 10 分钟更新一次，每个用户的统计信息是独立的。点击图表上方<span style="color:#E3A300;font-weight: bold;">橙色框的刷新按钮</span>可以进行刷新，点击<span style="color:#3894E4;font-weight: bold;">蓝色框内的折线按钮</span>可以进行图表历史数据的编辑。

下方为字数编辑的页面。

<bl-img src="../imgs/home/stat_word_editor.png" width="700px" />

::: tip 提示
编辑当月的字数是无效的，会被自动统计的字数覆盖。
:::

## 文章与图片统计 {#stat-count}

<bl-img src="../imgs/home/stat_count.png" width="190px" :shadow="false" />

上方为文章数与文章总字数，下方为图片数和图片总大小。该统计是实时的，每次进入首页会进行刷新。

## 服务器的请求量统计 {#stat-flow}

<bl-img src="../imgs/home/stat_flow.png" width="700px" :shadow="false"  />

服务器的请求数统计，每个节点为 30 分钟。

- <span style="color:#779649;font-weight: bold;">Request</span>：30 分钟内的请求总数
- <span style="color:#E3A300;font-weight: bold;">Average Response Time</span>：30 分钟内服务器的平均响应时间(毫秒)

流量的统计是实时的，但该时间不包含服务器与客户端之间的传输用时，仅代表服务器处理请求的时间。

## 每日编辑文章数热力图 {#stat-heatmap}

<bl-img src="../imgs/home/stat_heatmap.png" width="700px" :shadow="false"  />

最近 6 个月，每日文章编辑的数量，每 5 分钟更新一次。

## 文章收藏 {#star}

<bl-img src="../imgs/home/star.png" width="450px" :shadow="false"  />

收藏的文章列表，每篇文章都以一张票据的形式展示。

如果该文章是【公开文章】，则左侧<span style="color:red;font-weight: bold;">红色部分</span>会额外显示一个条形码，并且点击票据的左侧部分(票根部分)会在博客中打开该文章(需要[部署博客](./deploy/blog))，而点击票据的右侧部分则会打开一个新的应用窗口来查看文章。

右侧<span style="color:#E3A300;font-weight: bold;">黄色部分</span>分别为：

- `U(UV)`：该文章用户访问量。
- `L(Like)`：该文章点赞数。
- `W(W)`：该文章字数。

如果文章未公开，通常 UV 和 LIKE 数均为 0。

> 查看[如何公开文章?](./article#article-open)。

点击右上角按钮可以切换收藏的显示样式，如下图：

<bl-img src="../imgs/home/star1.png" width="450px" :shadow="false"  />

## 专题收藏 {#subject}

<bl-img src="../imgs/home/subjects.png" width="430px" :shadow="true"  />

专题文章，通常针对同一主题的文章可以归为专题。

专题顶部为专题的名称，即这个专题的文件夹的名称，下方为专题文件夹下所有文章的总字数， 以及专题下最后一篇更新的文章的日期。专题右侧为专题图片，右下角的颜色为这个专题的主题色。

> 查看[如何创建专题?](./article#create-subject)。

点击右上角按钮可以切换收藏的显示样式，如下图：

<bl-img src="../imgs/home/subjects1.png" width="430px" :shadow="true"  />

## 待办事项 {#todos}

<bl-img src="../imgs/home/todos.png" width="650px"  />

首页中的[待办事项](./todo)快速查看。

## 网站收藏 {#webs}

<bl-img src="../imgs/home/web.png" width="350px" :shadow="false"  />

网站收藏顶部的可以对收藏进行添加和刷新操作，以及收起网页模块和切换显示风格。

<bl-img src="../imgs/home/web_title.png" width="350px" />

点击新增按钮会显示如下界面：

<bl-img src="../imgs/home/web_add.png" width="350px" />

使用网站收藏时有一些注意事项:

- 网站需要一个网站图标，你可以添加选择系统自带的图标，也可以在图标地址中填写一个图片链接。
- 网站类型分为日常(daily)，工作(work)，其他(other)三个分组，暂不支持添加分组功能。
- 右键点击已添加的网站收藏即可修改。

点击软件右上角(最小化按钮的左侧)可以在一个弹出框中打开网站收藏，这样在使用其他功能时如果需要打开网站，就不需要返回首页了。

## 设置与图片上传 {#aside-upload}

<div style="display:flex;">
<bl-img src="../imgs/home/file_upload.png" width="60px" />
<div>
在软件的左下角，红色框中是一个图片上传快捷入口，在该处上传的文件由于无法选择文件夹，会上传至照片墙的《🌌 默认文件夹》中。

《🌌 默认文件夹》是系统提供的一个默认文件夹，该文件夹无法删除，如果你未曾创建过任何文件夹，并且文章的文件夹也没有指定路径，那么所有的图片都存放在该文件夹下。更多关于图片管理的内容，可见[照片墙](./picture)功能。

左下角的切换按钮可以在日间/夜间模式之间切换。

应用的左下角为设置按钮，可以打开登录页面和系统设置，以及一些其他功能，更详细的使用方式可见[设置](./setting)。

</div>
</div>