<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter,withBase } from 'vitepress'
import { info } from '../../scripts/stat-api'

onMounted(() => {
  info()
})

const router = useRouter()

const toRoute = (route) => {
  router.go(withBase(route))
}

</script>

# 后台部署

:::danger 在阅读如何部署前，请你务必先阅读下面内容：

由于独立部署服务器需要一些简单的专业知识，所以如果你不了解如何使用 Linux 系统和部署网站，那么下面的操作对于你来说可能过于简略。并且本文档即便事无巨细的写出部署应用的所有事项，对于不懂相关知识的人来说可能难度依然过高。

所以如果你未曾使用过 Blossom，可以先[试用](../tryuse)本应用。
:::

作者建议使用 https + 域名来访问你的服务器，域名价格通常在 20~40 元/年，Https 证书可以免费申请，这样访问图片时将使用域名而不是 IP，在你更换服务器时，就不需要再修改图片路径了。

本应用并不是设计用来支持大规模用户使用，300M ~ 500M 内存足够使用。2 核 2G 内存的轻量服务器完全可以支撑起该应用。2M~3M 带宽也足够流畅编辑文章和查看图片。所以服务器+域名的总成本大约在 100 ~ 200 元/年上下。这样和其他笔记软件的会员费用相差不大，并且数据更有安全感更加可控。在不想作为云端笔记使用时，也可以接着作为本地应用部署使用<span style="color:#A9A9A9">(_Blossom 提供了一个全量导出功能，可以将笔记图片链接修改为本地图片路径_)。</span>

## 如何后台部署？ {#how-to-deploy-backend}

你可以从下方选择适合自己的部署方式。

<div class="deploy-type">
  <div class="item docker" @click="toRoute('/guide/deploy/backend-docker')">
    <div>使用 Dockerhub 公共镜像</div>
    <p class="desc">不包含数据库的后台应用镜像, 适用于已经安装了 MySQL 的情况。</p>
  </div>
  <div class="item docker" @click="toRoute('/guide/deploy/backend-docker-compose')">
    <div>使用 Docker compose 构建</div>
    <p class="desc">适用于未安装 MySQL，可以连同 MySQL 镜像一起拉取并部署。</p>
  </div>
</div>

<div class="deploy-type">
  <!-- <div class="item docker" @click="toRoute('/doc/backend-dockerfile')">
    <div>通过 Dockerfile 构建</div>
    <p class="desc">适用于需要自己构建自定义镜像。</p>
  </div> -->
  <div class="item idea" @click="toRoute('/guide/deploy/backend-jar')">
    <div>使用 Jar 包部署</div>
    <p class="desc">适用与已有 JDK + MySQL 环境，仅用命令或脚本就可部署后台应用的场景。</p>
  </div>
  <div class="item idea" @click="toRoute('/guide/deploy/backend-idea')">
    <div>使用 Idea 插件部署</div>
    <p class="desc">适用于开发者更改源码后部署到服务器中。</p>
  </div>
</div>

<div class="deploy-type">
</div>

## 后台配置参数 {#backend-props}

## 常见问题 {#faq}

<style scoped>
.deploy-type {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: flex-start;
  flex-wrap: wrap;
}

.deploy-type .item {
  border-radius: 10px;
  width: 300px;
  padding: 20px;
  margin: 10px 0;
  transition: 0.3s;
  cursor: pointer;
  transition: box-shadow 0.3s;
}

.deploy-type .item:hover {
  box-shadow: 0 0 5px #939393;
}

.deploy-type .desc {
  font-size: 13px;
  color: #FFFFFF;
  margin:0;
}


.deploy-type .docker {
  background: #1C8DEA2D;
  background-image:linear-gradient(135deg,#72EEF2BD,#5151E5C0);
    /* linear-gradient(white 0, transparent 0),
    linear-gradient(90deg, white 0, transparent 0),
    linear-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 0),
    linear-gradient(90deg, rgba(255, 255, 255, 0.3) 1px, transparent 0); */
  /* background-size: 75px 75px, 75px 75px, 15px 15px, 15px 15px; */
}

.deploy-type .idea {
  background: #D333561E;
  background-image:linear-gradient(135deg,#FD658673,#0D24B9B9);
  /* background-image:
    linear-gradient(white 0, transparent 0),
    linear-gradient(90deg, white 0, transparent 0),
    linear-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 0),
    linear-gradient(90deg, rgba(255, 255, 255, 0.3) 1px, transparent 0); */
  /* background-size: 75px 75px, 75px 75px, 15px 15px, 15px 15px; */

}
</style>
