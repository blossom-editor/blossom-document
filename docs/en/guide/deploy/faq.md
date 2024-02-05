<script setup lang="ts">
import { onMounted } from 'vue'
import { info } from '../../../scripts/stat-api'

onMounted(() => {
  info()
})
</script>

# Common Issues

## Common Deployment Issues

## Q: How to create a database in a database container? {#how-create-database}

```bash
# 1. Enter the container. If your container is not named 'mysql', replace 'mysql' with your container name.
docker exec -it mysql /bin/bash

# 2. Log in to MySQL. Replace 'xzzz' after -p with your database password.
mysql -uroot -pxzzz

# 3. Create the database.
CREATE DATABASE `blossom` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_bin;

# If you see the following message, the database is created successfully:
Query OK, 1 row affected
```

## Q: Error `Unknown database blossom` occurs during project startup {#unknown-database}

Check if the corresponding database 'blossom' is created in MySQL. If the database is not created, you can use the following statement to create it.

```
CREATE DATABASE `blossom` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_bin;

```

## Q: Error `Host xxx is not allowed to connect to this MariaDB server` occurs during backend startup {#mariadb-not-allowed}

This issue occurs when using MariaDB. You need to log in to the database and execute the following statement to grant remote access permission to the database.

```sql
use mysql;

update mysql.global_priv set Host='%' where User='root';

update user set host = '%' where user = 'root';

flush privileges;
```

## Q: How to configure Nginx? {#how-config-nginx}

Below is a complete example of Nginx server reverse proxy and web static proxy for your reference:

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

  # Listen on port 80, redirect to HTTPS
  server {
    listen                      80;
    server_name                 www.wangyunf.com;
    return                      301 https://$host$request_uri;
  }

  # HTTPS configuration
  server {
    listen                      443 ssl;
    server_name                 www.wangyunf.com;
    ssl_certificate             cert/wangyunf.com_bundle.crt;
    ssl_certificate_key         cert/wangyunf.com.key;
    ssl_session_timeout         5m;
    ssl_protocols               TLSv1 TLSv1.1 TLSv1.2;
    ssl_ciphers                 ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
    ssl_prefer_server_ciphers   on;

    # Reverse proxy for backend, redirect to specified port
    location /bl/ {
      proxy_pass                http://127.0.0.1:9999/;
      client_max_body_size      50m;
      proxy_set_header          x-forwarded-for $remote_addr;
    }

    # Blossom blog
    location /blossom/ {
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

    # Blossom web client
    location /blossom-demo/ {
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

## Common Issues During Usage

### Q: Backend started successfully, but the client cannot connect to the server {#client-cant-connect-server}

Check the following issues:

1. If the backend address filled in the login page is https, then the backend must be accessible via https.
2. If the client access is via https, then the backend address filled in the login page must also be https.
3. The login address should not include `editor/#/settingindex`.

### Q: Uploaded images cannot be displayed in the photo wall {#cant-shwo-pic}

In the settings, modify the file access address to [login address + `/pic`], or click the automatic configuration button on the right, which will automatically change it to [login address + `/pic`].

<bl-img src="../../../imgs/setting/setting-picurl.png" width="700px"/>


### Q: Prompted that the image already exists when uploading an image {#pic-exist}

<br/>
<bl-img src="../../../imgs/pic/upload_error.png" width="300px"/>

This configuration is to prevent the accidental upload of duplicate files. You can ignore this validation in the settings.

<bl-img src="../../../imgs/pic/pic_repeat_upload.png" width="700px"/>

### Q: When deploying with Docker, backup or export files are not found in the configured folder directory {#notfind-backup-file}

Check if the [backup file path - BACKUP_PATH](./backend-props#sys-params) is mounted to the host machine.
