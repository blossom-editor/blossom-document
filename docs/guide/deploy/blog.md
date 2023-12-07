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

<div style="display:flex;flex-direction: row;justify-content: flex-start;overflow-x:scroll;padding:  10px;margin-top:20px;">
<div style="min-width:33%;margin-right:10px;"><bl-img src="../../imgs/blog/home_m.png" width="230px" /></div>
<div style="min-width:33%;margin-right:10px;"><bl-img src="../../imgs/blog/article_m.png" width="230px" /></div>
<div style="min-width:33%;margin-right:10px;"><bl-img src="../../imgs/plan/plan_m.png" width="230px" /></div>
<div style="min-width:33%;margin-right:10px;"><bl-img src="../../imgs/todo/todo_m.png" width="230px" /></div>
<div style="min-width:33%;margin-right:10px;"><bl-img src="../../imgs/note/note_m.png" width="230px" /></div>
</div>

博客除了可以访问公开文章之外，更提供了各项功能的移动端访问入口。

博客由于需要修改一些相关配置，所以无法提供即用的包，所以需要你自行配置并打包。你至少需要 `NodeJS 18` 及以上。

## 登录博客 {#login}

在使用`v1.9.0`及以上版本时，可以在左上角 logo 上连续点击 7 次以上，即会跳转至博客的登录页面。博客中的各项功能和交互逻辑大多是用来适配移动端页面。

## 修改博客配置 {#how-to-deploy}

博客源码在项目的 blossom-web 目录下，你需要修改 `blossom-web\src\assets\constants\blossom.ts` 文件中的以下内容：

- `DOMAIN.PRD`：填写为你的后台访问地址, 与 blossom 客户端登录页面填写的地址相同。
- `DOMAIN.USER_ID`：将该值填写你开放为博客的用户 ID。

需要修改的内容在下方标识为<span style="background-color:#F5DCE1">红色底色</span>。

<!--
// [!code warning]
// [!code error]
 -->

```typescript:line-numbers
const blossom = {
  /** 基础配置 */
  SYS: {
    // 修改该值可以改变网页左上角名称, 你可以改为你的名称 // [!code warning]
    NAME: 'Blossom',
    // 博客左上角 LOGO 文件名称, 文件需要放在 src/assets/imgs/logo/ 路径下 // [!code warning]
    LOGO: 'blossom_logo.png',
    // 版本
    VERSION: 'v1.9.0',
    // 公网安备号 // [!code warning]
    GONG_WANG_AN_BEI: 'X公网安备 XXXXXXXXXX号',
    // ICP 备案号 // [!code warning]
    ICP_BEI_AN_HAO: '京ICP备123123123号',
    // 邮箱 // [!code warning]
    EMAIL: ''
  },
  /** 博客样式 */
  THEME: {
    LOGO_STYLE: {
      // 左上角 LOGO 的圆角设置 // [!code warning]
      'border-radius': '50%'
    },
    // 是否以特殊样式显示专题文件夹 // [!code warning]
    SUBJECT_TITLE: true
  },
  /** 服务器的地址 */
  DOMAIN: {
    // 将该值填写为你的后台访问地址, 与 blossom 客户端登录页面填写的地址相同 // [!code error]
    PRD: 'https://www.wangyunf.com/bl/', // [!code error]
    // 将该值填写你开放为博客的用户ID // [!code error]
    USER_ID: 1 // [!code error]
  },
  /**
   * 可以填写你自己的网站，该信息会展示在右上角的【更多】按钮中，以及首页的【所有文章】下
   * NAME: 网站名称
   * URL: 网站地址
   * LOGO: 网站LOGO, 放在 src/assets/imgs/linklogo/ 路径下
   */
  LINKS: [
    // 下方是一个示例
    // {
    //   NAME: '我的个人主页',
    //   URL: 'https://www.wangyunf.com',
    //   LOGO: 'luban.png'
    // }
  ]
}

export default blossom

```

## 其他配置项说明

博客提供了一些其他可选的个性化配置项供修改。

### 基础配置

- `SYS.NAME`：博客左上角的名称。
- `SYS.LOGO`：博客左上角的 Logo 文件名，对应文件需要放在 `src/assets/imgs/logo/` 路径下。
- `SYS.ICP_BEI_AN_HAO`：如果博客作为域名的默认访问页面，则可能需要配置域名的备案号。

### 样式配置

- `THEME.LOGO_STYLE`：博客左上角 Logo 的样式。你可以在此设置圆角或图片阴影等任何样式。
- `THEME.SUBJECT_TITLE`：文章列表中是否以特殊样式显示专题。

## 打包 {#build}

使用 npm 打包代码。

```bash
npm install
npm run build
```

打包后在 `blossom-web/dist/` 目录下会生成打包结果文件，需要将相关文件上传至服务器。

## Nginx 配置静态代理 {#nginx}

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

:::tip 提示
完整的Nginx例子可以查看：[如何配置 Nginx](./faq#how-config-nginx)
:::

## 【重要】在客户端配置博客地址 {#client}

由于博客是单独部署的，客户端并不知道博客的访问地址，所以需要配置该地址。

<bl-img src="../../imgs/setting/blog_url.png" width="700px"/>

例如博客首页的地址为：https://www.wangyunf.com/blossom/#/home

则该处填写的地址即为：https://www.wangyunf.com/blossom/#/articles?articleId=