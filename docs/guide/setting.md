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

## 客户端配置 {#client}

<br/>
<bl-img src="../imgs/setting/c_version.png" width="300px"/>

建议客户端与服务端使用相同的次版本号，不同的次版本号表明服务端功能有所变更。详细说明可见[版本发布](./changelog)。

## 服务器配置 {#server}

<br/>
<bl-img src="../imgs/setting/s_version.png" width="450px"/>

服务端版本的补丁版本通常不会变化，只会存在如 `v.1.8.0` 、 `v1.9.0` 等格式的版本号。如果次版本号未发生变化，说明服务端无需重新部署。

服务端配置需要登录后才能查看，如页面中无内容可点击刷新按钮。

### 和风天气 Key {#hefeng}

如果需要使用天气功能，在申请到天气 Key 后，可将其配置在此处。配置后再首页刷新天气即可。更多信息请查看[和风天气](./hefeng)。

## 修改个人信息 {#upd-userinfo}

可以修改当前登录用户的个人信息。

若使用天气功能，则需要修改天气预报城市。更多信息请查看[和风天气](./hefeng)。

## 修改登录密码 {#upd-password}

修改当前登录用户的密码。

## 添加使用账号 {#add-user}

添加使用账号，只有管理员可以进行添加，如果添加的用户为只读用户，则该用户只有查询权限。
