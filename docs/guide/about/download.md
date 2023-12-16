<script setup lang="ts">
import { onMounted } from 'vue'
import { info } from '../../scripts/stat-api'

onMounted(() => {
  info()
})
</script>

# 下载

你可以通过以下方式下载客户端、后台应用、后台镜像。

:::warning 提示
如果你无法访问 Dockerhub 或链接缓慢，可以在[百度网盘](./download#baidu)中下载镜像文件。
:::

## Github {#github}

> 前往 Github 下载：https://github.com/blossom-editor/blossom/releases

<bl-img src="../../imgs/deploy/download_github.png" width="200px"/>

- `backend-api.zip`：后台接口文档。
- `backend-blossom.jar`：后台 Java 包。
- `blossom-x.y.z.dmg`：MacOS ARM 客户端。
- `blossom-x.y.z.-setup.exe`：Windows 客户端。
- `blossom-x.y.z.-web-blog.zip`：博客网页部署包。
- `blossom-x.y.z.-web-client.zip`：客户端网页部署包。

:::tip 提示
如果你需要 Docker 镜像文件，请在百度网盘中下载。
:::

## 百度网盘 {#baidu}

> 前往百度网盘下载：https://pan.baidu.com/s/1X4ViDxJ2gm2w95XlcpSCTg?pwd=uksl
>
> 提取码`uksl`

<bl-img src="../../imgs/deploy/download_baidu.png" width="350px"/>

百度网盘除了包含各个客户端和后台部署文件之外，还包含 Docker 镜像文件供下载。

- `backend-api.zip`：后台接口文档。
- `backend-blossom.jar`：后台 Java 包。
- `blossom-x.y.z.dmg`：MacOS ARM 客户端。
- `blossom-x.y.z.-setup.exe`：Windows 客户端。
- `blossom-x.y.z.-web-blog.zip`：博客网页部署包。
- `blossom-x.y.z.-web-client.zip`：客户端网页部署包。
- `jasminexzzz-blossom-arm64-x-y-z.tar`：MacOS ARM 架构 Docker 镜像。
- `jasminexzzz-blossom-amd64-x-y-z.tar`：Windows/Linux Docker 镜像。

## 群下载

- [群下载](./contact)

## 下载后试用 {#tryuse}

[如何试用？](../tryuse)
