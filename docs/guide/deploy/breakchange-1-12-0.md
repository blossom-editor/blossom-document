<script setup lang="ts">
import { onMounted } from 'vue'
import { info } from '../../scripts/stat-api'

onMounted(() => {
  info()
})
</script>

# 关于 `v1.12.0` 的重要改动

如果你从`v1.12.0`之前的版本进行升级，那么需要了解以下的改动内容。

## 修改文件访问地址配置

在 `v1.12.0` 之前的版本中，需要在启动命令或 Docker 脚本中配置如下参数：

```bash
docker run -d \
  #【需修改】配置图片上传后对应生成的访问URL，需要以/pic/结尾。注意，该访问URL需要与访问后台的域名和端口相同
  --project.iaas.blos.domain="http://127.0.0.1:9999/pic/" \

# 如果是 Docker compose，则需要配置以下内容
services:
  blossom:
    environment:
      PROJECT_IAAS_BLOS_DOMAIN: http://localhost:9999/pic/
```

---

而在 `v1.12.0` 版本中，可以直接在客户端的【设置】-> 【服务器配置】->【文件访问地址】中进行配置。

:::tip 提示
旧的配置方式仍然有效，如果你添加了命令，则优先使用命令中的内容。
:::

<bl-img src="../../imgs/setting/server.png" width="550px"/>

## 修改了博客的各项配置方式

在 `v1.12.0` 之前的版本中，博客的 IPC 备案号，公网安备号，博客名称，博客 Logo 等信息都需要通过修改`config.js`配置文件的方式进行定制。

而在 `v1.12.0` 版本中，可以直接在客户端的【设置】-> 【博客配置】中进行配置。

:::tip 提示
config.js 中的配置方式仍然有效，但会优先使用客户端的配置内容。

config.js 中的配置项会在后续版本中删除。
:::

<bl-img src="../../imgs/setting/blog.png" width="550px"/>
