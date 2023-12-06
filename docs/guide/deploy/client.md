# 网页版客户端

如果不想使用桌面客户端，也可以在网页端部署客户端，可查看[在线示例](https://www.wangyunf.com/blossom-demo/#/settingIndex)。

:::danger 注意
仅支持 v1.9.0 及以上版本
:::

## 文件下载

提供了客户端的网页版打包文件，可前往[下载地址](../about/download)中下载`blossom-x.y.z-web-client.zip`文件。

:::tip 提示
`x.y.z` 代表最新版本号，文件需要在服务器部署，本地打开时无法正常显示，如果你要在本地使用请使用桌面客户端。
:::

## 部署方式

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
