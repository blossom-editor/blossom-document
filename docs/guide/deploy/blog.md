<script setup lang="ts">
import { onMounted } from 'vue'
import { info } from '../../scripts/stat-api'

onMounted(() => {
  info()
})
</script>

# 博客部署

<br/>
<bl-img src="../../imgs/blog/home.png"/>

<div style="display:flex;flex-direction: row;justify-content: flex-start;overflow:scroll;padding:  10px;margin-top:20px;">
<div style="min-width:33%;margin-right:10px;"><bl-img src="../../imgs/blog/home_m.png" width="230px" /></div>
<div style="min-width:33%;margin-right:10px;"><bl-img src="../../imgs/blog/article_m.png" width="230px" /></div>
<div style="min-width:33%;margin-right:10px;"><bl-img src="../../imgs/plan/plan_m.png" width="230px" /></div>
<div style="min-width:33%;margin-right:10px;"><bl-img src="../../imgs/todo/todo_m.png" width="230px" /></div>
<div style="min-width:33%;margin-right:10px;"><bl-img src="../../imgs/note/note_m.png" width="230px" /></div>
</div>

博客除了可以访问公开文章之外，更提供了各项功能的移动端访问入口。

## 登录博客 {#login}

在使用`v1.9.0`及以上版本时，可以在左上角 logo 上连续点击 7 次以上，即会跳转至博客的登录页面。博客中的各项功能和交互逻辑大多是用来适配移动端页面。

## 如何部署？ {#how-to-deploy}

### 修改配置

博客由于需要修改一些相关配置，所以无法提供即用的包，所以需要你自行配置并打包。你至少需要 `NodeJS 18` 及以上。

博客源码在项目的 blossom-web 目录下，你需要修改 `blossom-web\src\assets\constants\blossom.ts` 下的内容，注意，下方代码中，**标识为红色的第 24 行与 26 行需要修改**，否则将无法正常使用。

```typescript:line-numbers{24,26}
const blossom: any = {
  /**
   * 基础配置
   */
  SYS: {
    // 【可修改】修改该值可以改变网页左上角名称, 你可以改为你的名称 // [!code warning]
    NAME: 'Blossom',
    SHORT_NAME: 'BLOSSOM-WEB',
    // 版本
    VERSION: 'v1.7.0',
    // 公网安备号
    GONG_WANG_AN_BEI: 'X公网安备 XXXXXXXXXX号',
    // 【可修改】ICP 备案号 // [!code warning]
    ICP_BEI_AN_HAO: '京ICP备123123123号',
    // 邮箱
    EMAIL: '491548320@qq.com'
  },
  /**
   * 填写服务器的地址
   */
  DOMAIN: {
    LOC: 'http://127.0.0.1:9999/',
    // 【需修改】将该值填写为你的后台访问地址, 与 blossom 客户端登录页面填写的地址相同 // [!code error]
    PRD: 'https://www.wangyunf.com/bl/', // [!code error]
    // 【需修改】将该值填写你开放为博客的用户ID // [!code error]
    USER_ID: 1 // [!code error]
  },
  /**
   * 【可修改】可以填写你自己的网站，该信息回展示顶部的【更多】按钮中，以及首页的【我的所有文章】下 // [!code warning]
   * NAME: 网站名称 // [!code warning]
   * URL: 网站地址 // [!code warning]
   * LOGO: 网站LOGO, 放在 src/assets/imgs/linklogo/ 路径下 // [!code warning]
   */
  LINKS: [
    // 下方是一个示例
    // {
    //   NAME: '我的个人主页',
    //   URL: 'https://www.wangyunf.com',
    //   // 请将 logo 放入到 src/assets/imgs/linklogo/
    //   LOGO: 'luban.png'
    // }
  ]
}

export default blossom
```

### 打包 {#build}

使用 npm 打包代码。

```bash
npm install
npm run build
```

打包后在 `blossom-web/dist/` 目录下会生成打包结果文件，需要将相关文件上传至服务器。

### Nginx 配置 {#nginx}

如果你使用 Nginx，可参考以下方式配置。

```shell
# blossom 博客  q
location /blossom/ {
        # 修改为存放文件的路径 // [!code error]
        alias                   /usr/local/xzzz/blossom/blog/;
        try_files               $uri $uri/ /index.html;
        index                   index.html index.htm;
        gzip                    on;
        gzip_buffers            32 4k;
        gzip_comp_level         6;
        gzip_min_length         100;
        gzip_types              application/javascript text/css text/xml font/ttf font/otf image/svg+xml;
        gzip_disable            "MSIE [1-6]\.";
        gzip_vary               on;
}

```
