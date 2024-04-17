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

## 自带博客 {#backstage}

自`1.10.0`版本开始，部署后台时会自带博客页面，访问地址为：

```bash
IP:端口(域名)/blog/#/home
```

---

例如 IP:端口为：`192.168.11.11:9999`，则访问

```bash
http://192.168.11.11:9999/blog/#/home
```

例如域名为`http://www.abc.com`，则访问

```bash
http://www.abc.com/blog/#/home
```

如果有配置反向代理路径，如`/bl/`，则访问

```bash
http://www.abc.com/bl/blog/#/home
```

:::danger 注意！
自带博客默认展示 ID 为 1 的用户的公开文章信息。但允许所有用户在博客端登录。如果你需要修改默认展示用户，请查看下方[修改博客配置](./blog#update-config)。

<!-- 由于使用场景众多，Blossom 无法全部覆盖测试，所以如果你在使用自带博客时遇到问题，可以选择单独部署。 -->

:::

## 单独部署博客 {#independent }

如果有多个用户需要使用博客功能，则需要单独部署，每个用户的博客配置是独立的，可以拥有不同的 Logo，博客名称，IPC 备案号等信息。

### 文件下载

前往[下载地址](../about/download)中下载`blossom-x.y.z-web-blog.zip`文件。

### 部署代理

解压 `blossom-x.y.z-web-blog.zip` 到服务器目录，本例中文件解压在 `/usr/local/xzzz/blossom/blog/` 路径下。

以 Nginx 为例：

```bash
# 【需修改】配置客户端资源访问路径 // [!code error]
location /blossom-blog/ {
        # 【需修改】配置资源所在的路径 // [!code error]
        alias                   /usr/local/xzzz/blossom/blog/; // [!code error]
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
完整的 Nginx 例子可以查看：[如何配置 Nginx](./faq#how-config-nginx)
:::

## 修改博客配置 {#update-config}

在解压文件后，解压路径下会有一个`config.js`文件，修改该文件可以进行个性化配置。

:::tip 提示
如果通过 Docker 部署，你可以使用挂载文件的方式进行修改，你需要在 docker run 命令中添加如下配置：

```bash
# 将冒号(:)前的部分改成你运行 docker 的设备的某个路径，不要修改冒号后面的内容。 // [!code error]
-v /d/blossom/dev/config.js:/application/BOOT-INF/classes/static/blog/config.js
```

如果使用 docker compose 部署，需要添加在下方所示位置：

```yaml
services:
  blossom:
    image: jasminexzzz/blossom:latest
    container_name: blossom-backend
    volumes:
      - /d/blossom/bl/:/home/bl/
      # 添加到该位置// [!code error]
      - /d/blossom/dev/config.js:/application/BOOT-INF/classes/static/blog/config.js
```

然后在对应目录下创建 config.js 文件，接着将下方[配置文件内容](./blog#config-centent)复制到该文件中。
:::

### 配置文件内容{#config-content}

<!--
// [!code warning]
// [!code error]
 -->

<span style="color:red">**修改下方标识为红色背景的内容**。</span>如果你需要在 Docker 中挂载 config.js 文件，请将以下内容复制到文件中。

:::danger 重要变更
在`v1.12.0`版本中，已经支持通过客户端进行博客的各项配置，[前往查看](../setting#blog)。

在`v2.0.0`版本中，将会移除配置文件中的配置项，建议您及早使用客户端配置的方式。
:::

```javascript
window.blconfig = {
  SYS: {
    // 修改该值可以改变网页左上角名称
    NAME: 'Blossom',
    // 公网安备号
    GONG_WANG_AN_BEI: '',
    // ICP 备案号
    ICP_BEI_AN_HAO: '',
    // 邮箱
    EMAIL: ''
  },
  THEME: {
    LOGO_STYLE: {
      // 左上角 LOGO 的圆角设置
      'border-radius': '50%'
    },
    // 是否以特殊样式显示专题文件夹
    SUBJECT_TITLE: true
  },
  DOMAIN: {
    // 如果单独部署博客，必须修改该项// [!code error]
    // 如果挂载为后台自带博客配置文件，则无需修改// [!code error]
    // 将该值填写为你的后台访问地址, 与 blossom 客户端登录页面填写的地址相同// [!code error]
    PRD: 'http://localhost:9999', // [!code error]
    // 将该值填写你开放为博客的用户ID // [!code error]
    USER_ID: 1 // [!code error]
  },
  /**
   * 可以填写你自己的网站，该信息会展示在右上角的【更多】按钮中，以及首页的【所有文章】下
   * NAME: 网站名称
   * URL: 网站地址
   * LOGO: 网站LOGO地址
   */
  LINKS: [
    // 下方是一个示例
    // {
    //   NAME: 'Blossom 双链笔记软件',
    //   URL: 'https://www.wangyunf.com/blossom-doc/index.html',
    //   LOGO: 'https://www.wangyunf.com/bl/pic/home/bl/img/U1/head/blossom_logo.png'
    // }
  ]
}
```

## 登录博客 {#login}

可以在左上角 logo 上连续点击 7 次以上，即会跳转至博客的登录页面。博客中的各项功能和交互逻辑大多是用来适配移动端页面。

:::tip 提示
完整的 Nginx 例子可以查看：[如何配置 Nginx](./faq#how-config-nginx)
:::

## 客户端配置博客地址 {#client}

可查阅[快速配置](../setting#quick)。
