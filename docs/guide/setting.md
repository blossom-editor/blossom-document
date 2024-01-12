<script setup lang="ts">
import { onMounted } from 'vue'
import { info } from '../scripts/stat-api'

onMounted(() => info())
</script>

# 🛠️ 设置

在软件左下角可以进入设置页面，包括登录等功能都包含在此。

:::tip 提示
文章节只介绍需要特别注意的配置项，更多内容请前往客户端查看。
:::

## 快速配置 {#quick}

快速配置可以更方便快捷的配置你的文件访问地址和博客地址。

点击右上角的铃铛按钮。

<bl-img src="../imgs/setting/caution.png" width="200px"/>

在弹出框中点击右下角的快速配置。

<bl-img src="../imgs/setting/caution-popover1.png" width="350px"/>

会进入如下页面。

<bl-img src="../imgs/setting/quick-setting-pic.png" width="650px"/>

点击【是】，会自动将图片访问地址配置为【登录+`/pic`】，随后进入博客配置。博客的访问方式有两种：

1. 使用后台自带的博客。
2. 使用独立部署的博客。

### 自带博客

通常情况下点击【确认使用自带博客】，即可配置完成。自带博客默认提供给 USER_ID 为 1 的用户使用，如果你想修改该项默认值，可查阅[博客/移动端页面](./deploy/blog)。

在右侧的博客预览中可以看到当前博客配置的用户 ID，方便与当前登录用户 ID 进行核对。

<bl-img src="../imgs/setting/quick-setting-blog.png" width="650px"/>

### 独立部署博客

如果你使用独立部署的博客，需要填写博客的文章访问地址。当正确填写博客地址后，会如下图所示显示博客预览，并显示博客配置的用户 ID，方便与当前登录用户 ID 进行核对。

<br/>
<bl-img src="../imgs/setting/quick-setting-blog-custom.png" width="650px"/>

点击确认后，即可正常使用。

<bl-img src="../imgs/setting/quick-setting-completed.png" width="650px"/>

## 客户端配置 {#client}

请在客户端查看。

## 服务器配置 {#server}

<br/>
<bl-img src="../imgs/setting/server.png" width="550px"/>

### 文件访问地址 <Badge type="danger" text="重要" />{#pic-url}

所有上传的文件，都会以该地址作为访问地址，该地址十分重要，可以通过[快速配置](./setting#quick)按钮来设置。

:::danger 警告!
如果上传图片后修改了文件访问地址，那么旧图片仍然会通过旧地址进行访问。如果你的旧地址不可用，那么所有旧图片都将无法访问。

**请谨慎修改你的访问地址或域名！**
:::

### 和风天气 Key {#hefeng}

如果需要使用天气功能，在申请到天气 Key 后，可将其配置在此处。配置后再首页刷新天气即可。更多信息请查看[和风天气](./hefeng)。

## 博客配置 {#blog}

<br/>
<bl-img src="../imgs/setting/blog.png" width="550px"/>

在客户端进行博客的各项配置。如果配置后不生效，建议刷新缓存后查看。

:::tip 如何刷新缓存？
按下 `F12` 打开控制台，选中禁用缓存按钮。**当配置完成后，再更改为未选中。**
<bl-img src="../imgs/setting/disabled-cache.png" width="550px"/>
:::

## 修改个人信息 {#upd-userinfo}

可以修改当前登录用户的个人信息。

若使用天气功能，则需要修改天气预报城市。更多信息请查看[和风天气](./hefeng)。

## 修改登录密码 {#upd-password}

修改当前登录用户的密码。

## 添加使用账号 {#add-user}

添加使用账号，只有管理员可以进行添加，如果添加的用户为只读用户，则该用户只有查询权限。
