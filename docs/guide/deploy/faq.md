<script setup lang="ts">
import { onMounted } from 'vue'
import { info } from '../../scripts/stat-api'

onMounted(() => {
  info()
})
</script>

# 常见问题

## Q: 图片上传后在照片墙中无法显示 {#cant-shwo-pic}

检查**客户端登录页填写的后台访问地址**(IP:端口)是否与 `--project.iaas.blos.domain` 配置的相同，如果访问后台的域名中包含代理路径，则 `--project.iaas.blos.domain` 也要增加代理路径。

:::tip 提示
如果是 Docker compose 部署，则检查 `PROJECT_IAAS_BLOS_DOMAIN` 配置
:::

正常配置示例如下：

```shell
# 访问后台的域名
https://www.xxx.com/

# project.iaas.blos.domain 需要配置为如下值:
--project.iaas.blos.domain=https://www.xxx.com/pic/

------------------------------

# 或者访问后台的是IP:端口
http://123.123.123.123:6789

# project.iaas.blos.domain 需要配置为如下值:
--project.iaas.blos.domain=http://123.123.123.123:6789/pic/
```

如果后台配置了反向代理路径，例如在 Nginx 进行了如下配置：

```shell
# blossom 服务器
location /bl/ {
        proxy_pass              http://127.0.0.1:9999/;
        client_max_body_size    50m;
        proxy_set_header        x-forwarded-for $remote_addr;
}
```

那么需要将配置修改为：

```shell
# 访问后台的域名
https://www.xxx.com/bl

# project.iaas.blos.domain 需要配置为如下值:
--project.iaas.blos.domain=https://www.xxx.com/bl/pic/
```

## Q: 数据库容器中如何创建数据库? {#how-create-database}

```bash
# 一、进入容器，如果你的容器不叫 mysql，需要把下方的 mysql 改为你的容器名
docker exec -it mysql /bin/bash

# 二、登录 mysql，将下方 -p 后的 xzzz 修改为你的数据库密码
mysql -uroot -pxzzz

# 三、创建数据库
CREATE DATABASE `blossom` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_bin;

# 提示以下内容则创建成功
Query OK, 1 row affected
```

## Q: 项目启动后未找到数据库，后台出现 `Unknown database blossom` 错误 {#unknown-database}

查看 MySQL 中是否创建了对应数据库，若未创建数据库，可以使用如下语句创建数据库。

```
CREATE DATABASE `blossom` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_bin;

```

## Q: 使用 Docker 部署时，备份或导出文件未在配置的文件夹目录中 {#notfind-backup-file}

检查 [备份文件路径 - BACKUP_PATH](./backend-props#sys-params) 是否挂载到了宿主机中。

## Q: 如何配置 Nginx？{#how-config-nginx}

下方是一个 Nginx 反向代理实例供你参考：

```bash
user www-data;
worker_processes auto;
pid /run/nginx.pid;
include /etc/nginx/modules-enabled/*.conf;

events {
  worker_connections 768;
}

http {
  sendfile on;
  tcp_nopush on;
  tcp_nodelay on;
  keepalive_timeout 65;
  types_hash_max_size 2048;

  include /etc/nginx/mime.types;
  default_type application/octet-stream;

  ssl_protocols TLSv1 TLSv1.1 TLSv1.2; # Dropping SSLv3, ref: POODLE
  ssl_prefer_server_ciphers on;

  access_log /var/log/nginx/access.log;
  error_log /var/log/nginx/error.log;

  gzip on;

  # 监听 80 端口，本例中转发至了 https
  server {
    listen                      80;
    server_name                 www.wangyunf.com;
    return                      301 https://$host$request_uri;
  }

  # 本例中使用 https
  # 如果你使用 http，将下方 location 开头的配置都写到上方的 80 端口监听中
  server {
    listen                      443 ssl;
    server_name                 www.wangyunf.com;
    ssl_certificate             cert/wangyunf.com_bundle.crt;
    ssl_certificate_key         cert/wangyunf.com.key;
    ssl_session_timeout         5m;
    ssl_protocols               TLSv1 TLSv1.1 TLSv1.2;
    ssl_ciphers                 ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
    ssl_prefer_server_ciphers   on;

    # 后台的反向代理，代理到指定端口
    location /bl/ {
      # 改为你的后台端口，或者 docker 的端口映射
      proxy_pass                http://127.0.0.1:9999/;
      client_max_body_size      50m;
      proxy_set_header          x-forwarded-for $remote_addr;
    }

    # blossom 博客
    location /blossom/ {
      # 改为你解压博客/移动端的路径
      alias                     /usr/local/xzzz/blossom/blog/;
      try_files                 $uri $uri/ /index.html;
      index                     index.html index.htm;
      gzip                      on;
      gzip_buffers              32 4k;
      gzip_comp_level           6;
      gzip_min_length           100;
      gzip_types                application/javascript text/css text/xml font/ttf font/otf image/svg+xml;
      gzip_disable              "MSIE [1-6]\.";
      gzip_vary                 on;
    }

    # blossom 网页版客户端
    location /blossom-demo/ {
      # 改为你解压网页客户端的路径
      alias                     /usr/local/xzzz/blossom/demo/;
      try_files                 $uri $uri/ /index.html;
      index                     index.html index.htm;
      gzip                      on;
      gzip_buffers              32 4k;
      gzip_comp_level           6;
      gzip_min_length           100;
      gzip_types                application/javascript text/css text/xml font/ttf font/otf image/svg+xml;
      gzip_disable              "MSIE [1-6]\.";
      gzip_vary                 on;
    }
  }
}
```
