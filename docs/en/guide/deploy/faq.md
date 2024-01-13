<script setup lang="ts">
import { onMounted } from 'vue'
import { info } from '../../../scripts/stat-api'

onMounted(() => {
  info()
})
</script>

# 常见问题

## 部署时常见问题

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

## Q: 项目启动时出现 `Unknown database blossom` 错误 {#unknown-database}

查看 MySQL 中是否创建了对应数据库，若未创建数据库，可以使用如下语句创建数据库。

```
CREATE DATABASE `blossom` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_bin;

```

## Q: 后台启动时出现 `Host xxx is not allowed to connect to this MariaDB server` {#mariadb-not-allowed}

该问题出现在使用`MariaDB`时，你需要登录到数据库执行以下语句打开数据库的远程访问权限。

```sql
use mysql;

update mysql.global_priv set Host='%' where User='root';

update user set host = '%' where user = 'root';

flush privileges;
```

## Q: 如何配置 Nginx？{#how-config-nginx}

下方是一个 Nginx 服务端反向代理以及网页静态代理完整实例供你参考：

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

<br/><br/><br/><br/>

## 使用中常见问题

## Q: 后台启动成功，但客户端连接不上 {#client-cant-connect-server}

排查以下问题：

1. 如果登录页填写的后台地址为 https，则后台必须能通过 https 访问到。
2. 如果访问客户端为 https，则登录页填写的后台地址也必须为 https。
3. 登录地址中不能包含`editor/#/settingindex`。

## Q: 图片上传后在照片墙中无法显示 {#cant-shwo-pic}

在设置中将文件访问地址已修改为【登录地址+`/pic`】，也可点击右侧自动配置按钮，会自动修改为【登录地址+`/pic`】。

<bl-img src="../../../imgs/setting/setting-picurl.png" width="700px"/>

## Q: 图片上传时提示图片已存在 {#pic-exist}

<br/>
<bl-img src="../../../imgs/pic/upload_error.png" width="300px"/>

该配置是为了防止误传重复文件，你可以在设置中忽略该校验。

<bl-img src="../../../imgs/pic/pic_repeat_upload.png" width="700px"/>

## Q: 使用 Docker 部署时，备份或导出文件未在配置的文件夹目录中 {#notfind-backup-file}

检查 [备份文件路径 - BACKUP_PATH](./backend-props#sys-params) 是否挂载到了宿主机中。
