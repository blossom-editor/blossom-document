---
layout: home

hero:
  name: Blossom
  text: 云端双链笔记
  tagline: 完全开源，私有部署，你的笔记不再宕机。
  image:
    src: /imgs/blossom/logo.svg
    alt: Blossom
  actions:
    - theme: brand
      text: 🚀 开始！
      link: /guide/why-is-blossom
    - theme: brand
      text: 🛎️ 在线试用
      link: 'https://www.wangyunf.com/blossom-demo/#/settingIndex'
    - theme: alt
      text: 📦 下载
      link: /guide/about/download

features:
  - icon: <svg t="1700585228212" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15671" width="34" height="34"><path d="M205.653333 737.066667c-29.184 0-55.637333-23.893333-55.637333-52.906667s23.893333-53.034667 55.68-53.034667c31.914667 0 55.893333 23.893333 55.893333 52.992s-26.538667 52.906667-55.68 52.906667z m683.178667-288.554667c-5.76-42.325333-32-76.8-66.56-103.253333l-13.44-10.666667-10.837333 13.226667c-21.077333 23.893333-29.44 66.261333-26.88 97.92 2.56 23.978667 10.24 47.786667 23.637333 66.304-10.837333 5.546667-24.234667 10.666667-34.56 16.085333a225.706667 225.706667 0 0 1-71.68 10.666667H4.138667l-2.56 15.786666a297.813333 297.813333 0 0 0 23.978666 151.04l10.410667 18.56v2.56c64 105.941333 177.92 153.6 301.994667 153.6 238.677333 0 434.432-103.253333 527.232-325.674666 60.8 2.645333 122.197333-13.226667 151.04-71.509334l7.68-13.226666-12.8-7.978667c-34.56-21.077333-81.92-23.893333-121.6-13.226667l-0.768 0.085334z m-341.674667-42.325333h-103.594666v103.253333h103.68V406.101333l-0.085334 0.128z m0-129.834667h-103.594666v103.253333h103.68V276.48l-0.085334-0.128z m0-132.437333h-103.594666v103.253333h103.68v-103.253333h-0.085334z m126.72 262.272H570.88v103.253333h103.253333V406.101333l-0.298666 0.128z m-383.914666 0H187.008v103.253333h103.338667V406.101333l-0.426667 0.128z m129.28 0h-102.4v103.253333H419.84V406.101333l-0.64 0.128z m-257.28 0H59.733333v103.253333h103.594667V406.101333l-1.28 0.128z m257.28-129.834667h-102.4v103.253333H419.84V276.48l-0.64-0.128z m-129.92 0H187.178667v103.253333H290.133333V276.48l-0.682666-0.128z" fill="#1296db" p-id="15672"></path></svg>
    title: 服务端 Docker 部署，客户端网页部署
    details: 部署在云服务器就是多端同步云笔记，部署在本地就是本地笔记。
    link: /guide/deploy/backend
  - icon: 🏖️
    title: 文章图片保存、管理
    details: 不依赖任何对象存储，保存图片与文章的引用关系，一键导出并转换为本地笔记。
    link: /guide/article
  - icon: 📅
    title: 计划安排 / Todo List
    details: 创建计划与待办事项，一键导出为 Markdown，轻松形成一篇周报/月报。
    link: /guide/todo
  - icon: 💑
    title: 多用户隔离
    details: Blossom 允许创建多个账号，账号之间完全隔离，可与家人朋友共同使用、工作生活分开存储。
  - icon: 📲
    title: 响应式博客 / 移动端支持
    details: 附带网页端博客，完善的文章上下线控制，登录博客即是一个移动客户端。
  - icon: 🎉
    title: 多项常用功能
    details: 主题设置，番茄钟，字数统计，字数折线图，编辑热力图，天气预报。
---
<p class="module-container">
  <div class="text" style="padding-bottom:20px;">
    客户端
  </div>
  <bl-theme-img light-img="./imgs/home/home_light.png" dark-img="./imgs/home/home_dark.png" width="1250px"/>
<!-- <bl-img src="./imgs/home/device.png"  width="1450px" :shadow="false"/> -->

  <div class="text" style="margin-top:100px;">
    网页移动端
  </div>

  <div class="img-container" >
    <div class="item"><bl-img src="./imgs/blog/home_m.png" /></div>
    <div class="item"><bl-img src="./imgs/blog/article_m.png" /></div>
    <div class="item"><bl-img src="./imgs/plan/plan_m.png" /></div>
    <div class="item"><bl-img src="./imgs/todo/todo_m.png" /></div>
    <div class="item"><bl-img src="./imgs/note/note_m.png" /></div>
  </div>

  <div class="text" style="margin-bottom:20px;">
    网页PC端
  </div>

  <bl-img src="./imgs/blog/home.png" width="1000px" />
</p>

<p class="module-container">

<div class="text">
  <p>作为一个独立开发者，我目前的核心工作就是维护 Blossom。</p>
  <p>但开源项目的收益很难维持生活。</p>
  <p>如果您觉得这个应用还不错，您可以通过以下<a style="color:var(--vp-c-indigo-1);text-decoration: underline;" href="https://www.wangyunf.com/blossom-doc/guide/about/sponsor.html">赞助</a>的方式来支持我的工作，我将感激不尽。</p>
</div>

<div class="img-container">
  <div class="item">
    <bl-img src="./imgs/blossom/wechat.png" />
    <div class="name">微信</div>
  </div>

  <div class="item">
    <bl-img src="./imgs/blossom/ali.png" />
    <div class="name">支付宝</div>
  </div>
  
  <div class="item">
    <bl-img src="./imgs/blossom/aifadian.png" />
    <div class="name">爱发电</div>
  </div>
</div>

<!--@include: ./guide/about/sponsor-list.md-->

</p>

<style scoped>
.module-container {
  padding-top:88px;
  margin-top: 112px;
  border-top: 1px solid var(--vp-c-gutter);
}

.text {
  text-align:center;
  font-size:20px;
  line-height:40px;
  color:var(--bl-preview-blockquote-color);
  overflow-x:auto;
  font-weight: 300;
}

.img-container {
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  overflow-x:auto;
  padding: 16px 16px 10px 16px;
  /* align-content: flex-start;
  flex-wrap: wrap; */
}

.item {
  max-width:230px;
  min-width:230px;
  width:auto;
  margin: 20px 10px;
}


.item:first-child{
    margin-left: auto;
}
 
.item:last-child{
    margin-right: auto;
}

/* .sponsor .middle {
  margin-left:30px;
  margin-right:30px;
} */

.item .name {
  width: 100%;
  font-size: 16px;
  color: #9E9E9E;
  text-align: center;
  margin-top: 10px;
}
</style>
