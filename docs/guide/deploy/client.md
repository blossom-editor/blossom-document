# 网页版客户端

如果不想使用桌面客户端，也可以使用网页端客户端，可查看[在线示例](https://www.wangyunf.com/blossom-demo/#/settingIndex)。

## 自带网页客户端

自`1.10.0`版本开始，部署后台时会自带网页客户端，客户端地址为

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

:::warning 提示
由于使用场景众多，Blossom 无法全部覆盖测试，所以如果你在使用自带网页客户端时遇到问题，可以选择单独部署或使用桌面客户端。
:::

## 单独部署网页客户端

### 文件下载

提供了客户端的网页版打包文件，可前往[下载地址](../about/download)中下载`blossom-x.y.z-web-client.zip`文件。

:::tip 提示
`x.y.z` 代表最新版本号，文件需要在服务器部署，本地打开时无法正常显示，如果你要在本地使用请使用桌面客户端。
:::

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
