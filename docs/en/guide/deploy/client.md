# 网页版客户端

如果不想使用桌面客户端，也可以使用网页端客户端，可查看[在线示例](https://www.wangyunf.com/blossom-demo/#/settingIndex)。

## 自带网页客户端 {#backstage}

自`1.10.0`版本开始，部署后台时会自带网页客户端，客户端在浏览器的访问地址为

```bash
IP:端口(域名)/editor/#/settingindex
```

---

例如 IP:端口为：`192.168.11.11:9999`，则访问

```bash
http://192.168.11.11:9999/editor/#/settingindex
```

例如域名为`http://www.abc.com`，则访问

```bash
http://www.abc.com/editor/#/settingindex
```

如果有配置反向代理路径，如`/bl/`，则访问

```bash
http://www.abc.com/bl/editor/#/settingindex
```

:::danger <span style="color:#ea483f">注意！</span>
这个地址是网页的的访问地址，不是登录地址！是填写在浏览器地址栏的地址！
<bl-img src="../../../imgs/deploy/client-url.png" width="700px"/>
:::

## 单独部署网页客户端 {#independent }

### 文件下载

前往[下载地址](../about/download)中下载`blossom-x.y.z-web-client.zip`文件。

### 部署方式

解压 `blossom-x.y.z-web-client.zip` 到服务器目录，本例中文件解压在 `/usr/local/xzzz/blossom/demo/` 路径下。

配置 Nginx，下方是一个配置示例：

```bash
# 【需修改】配置客户端资源访问路径 // [!code error]
location /blossom-demo/ {
        # 【需修改】配置资源所在的路径 // [!code error]
        alias                   /usr/local/xzzz/blossom/demo/; // [!code error]
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
