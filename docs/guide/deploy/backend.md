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

由于独立部署服务器需要一些简单的专业知识，所以如果你不了解如何在机器或 Docker 中部署项目，那么建议你先[试用](../tryuse)本应用，若觉得符合你的需求，可以[进群或咨询作者](../about/contact)如何进行安装部署。
:::

作者建议使用 https + 域名来访问你的服务器，域名价格通常在 20~40 元/年，Https 证书可以免费申请，这样访问图片时将使用域名而不是 IP，在你更换服务器时，就不需要再修改图片路径了。

Blossom 使用 2 核 2G，2M ~ 3M 带宽的服务器即可流畅使用。所以服务器+域名的总成本大约在 100 ~ 200 元/年上下。这样和其他笔记软件的会员费用相差不大，并且数据更加安全可控。在不想作为云端笔记使用时，也可以接着作为本地应用部署使用<span style="color:#A9A9A9">(_Blossom 提供了一个全量导出功能，可以将笔记图片链接修改为本地图片路径_)。</span>

## 如何后台部署？ {#how-to-deploy-backend}

Blossom 依赖 `JDK8` + `Mysql8`，你可以从下方选择适合自己的部署方式。也可以参考其他用户所写的文章：

> 『文章』 [最适合国人使用的笔记项目！用 NAS 私有部署 Blossom](https://mp.weixin.qq.com/s/xqwbO6jaJhXgSmZJMEDPNA)
>
> 『视频』 [搭建超好用笔记软件——Blossom 通用后端（免费、开源，全平台）](https://www.bilibili.com/video/BV1fC4y1c7iQ/)

<div class="deploy-type">
  <div class="item docker" @click="toRoute('/guide/deploy/backend-docker')">
    <div class="title">使用 Dockerhub 公共镜像</div>
    <p class="desc">不包含数据库的后台应用镜像, 适用于已经安装了 MySQL 的情况。</p>
  </div>
  <div class="item docker" @click="toRoute('/guide/deploy/backend-docker-compose')">
    <div class="title">使用 Docker Compose 构建</div>
    <p class="desc">适用于未安装 MySQL，可以连同 MySQL 镜像一起拉取并部署。</p>
    <div class="tag">推荐</div>
  </div>
</div>

<div class="deploy-type">
  <div class="item idea" @click="toRoute('/guide/deploy/backend-jar')">
    <div class="title">使用 Jar 包部署</div>
    <p class="desc">适用与已有 JDK + MySQL 环境，仅用命令或脚本就可部署后台应用的场景。</p>
  </div>
  <div class="item idea" @click="toRoute('/guide/deploy/backend-idea')">
    <div class="title">使用 Idea 插件部署</div>
    <p class="desc">适用于开发者更改源码后部署到服务器中。</p>
  </div>
</div>

<div class="deploy-type">
</div>

## 后台配置参数 {#backend-props}

请前往 [后台配置项](./backend-props) 查看。

## 常见问题 {#faq}

请前往 [FAQ](./faq) 查看。

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
  position: relative;
}

.deploy-type .item:hover {
  box-shadow: 0 0 5px #939393;
}

.deploy-type .item .title {
  font-size: 18px;
  font-weight:500;
}

.deploy-type .item .tag {
  position: absolute;
  font-size:14px;
  top:-10px;
  right:-20px;
  color: #FFFFFF;
  padding: 2px 10px;
  background-color:var(--vp-c-indigo-3);
  border-radius: 20px;
}

.deploy-type .desc {
  font-size: 13px;
  color: #FFFFFF;
  margin:5px 0 0 0;
  font-weight:300;
}


.deploy-type .docker {
  background: #1C8DEA2D;
  background-image:linear-gradient(135deg,#33CFD4,#5151E5C0);
}

.deploy-type .idea {
  background: #D333561E;
  background-image:linear-gradient(135deg,#FD658673,#0D24B9B9);

}
</style>
