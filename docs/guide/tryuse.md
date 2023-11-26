<script setup lang="ts">
import { onMounted } from 'vue'
import { info } from '../scripts/stat-api'

onMounted(() => {
  info()
})
</script>

# 免部署试用

Blossom 包含一个需要你自己部署的服务器程序，如果你没有考虑好是否想要自己部署，那么你可以先[下载客户端](./about//download)，并按照下方的说明登录体验账号来试用 Blossom。

如果你尝试后认为符合你的操作习惯和使用场景，或者你有一些建议或意见，可以联系作者交流或咨询独立部署的相关内容，作者会尽量根据你的使用场景为你提供一些建议和帮助。

[下载客户端](./about//download)并安装打开后，应用默认会进入登录页面。如下图所示：

<bl-img src="../imgs/setting/tryuse.png"/>

**点击下方的我想试用按钮**，然后会弹出试用窗口，接着点击直接登录，即可登录使用。

<bl-img src="../imgs/setting/tryuse1.png" width="400px"/>

:::tip 提示
体验账号为只读账号，你只能查询数据，无法操作具体数据。
:::
